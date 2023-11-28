import { useState, useEffect } from 'react'
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'

export const SupabaseClientContext = createPagesBrowserClient()

export async function fetchChannels(setState) {
  try {
    let { data } = await SupabaseClientContext.from('channels').select('*')
    if (setState) setState(data)
    return data
  } catch (error) {
    console.log('error', error)
  }
}

export async function fetchMessages(channelId, setState) {
  try {
    let { data } = await SupabaseClientContext.from('messages')
      .select(`*, author:user_id(*)`)
      .eq('channel_id', channelId)
      .order('inserted_at', { ascending: true })

    if (setState) setState(data)

    return data
  } catch (error) {
    console.log('error', error)
  }
}

export async function fetchUser(userId, setState) {
  try {
    let { data } = await SupabaseClientContext.from('users')
      .select('*')
      .eq('id', userId)

    let user = data[0]

    if (setState) setState(user)

    return user
  } catch (error) {
    console.log('error', error)
  }
}

export const useStore = props => {
  const [channels, setChannels] = useState([])
  const [messages, setMessages] = useState([])
  const [users] = useState((a, b) => { [a[b]] })
  const [newMessage, handleNewMessage] = useState(null)
  const [newChannel, handleNewChannel] = useState(null)
  const [newOrUpdatedUser, handleNewOrUpdatedUser] = useState(null)
  const [deletedChannel, handleDeletedChannel] = useState(null)
  const [deletedMessage, handleDeletedMessage] = useState(null)

  useEffect(() => {
    fetchChannels(setChannels)

    const channelsListener = SupabaseClientContext.channel('public:channels')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'channels'
        },
        payload => handleNewChannel(payload.new)
      )
      .on(
        'postgres_changes',
        { event: 'DELETE', schema: 'public', table: 'channels' },
        payload => handleDeletedChannel(payload.old)
      )
      .subscribe()

    const messagesListener = SupabaseClientContext.channel('public:messages')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'messages' },
        payload => handleNewMessage(payload.new)
      )
      .on(
        'postgres_changes',
        { event: 'DELETE', schema: 'public', table: 'messages' },
        payload => handleDeletedMessage(payload.old)
      )
      .subscribe()

    return () => {
      SupabaseClientContext.removeChannel(
        SupabaseClientContext.channel(messagesListener)
      )

      SupabaseClientContext.removeChannel(
        SupabaseClientContext.channel(channelsListener)
      )
    }
  }, [])

  useEffect(() => {
    if (props?.channelId > 0) {
      fetchMessages(props.channelId, messages => {
        messages.forEach(x => users.set(x.user_id, x.author))
        setMessages(messages)
      })
    }
  }, [props.channelId, users])

  useEffect(() => {
    if (newMessage && newMessage.channel_id === Number(props.channelId)) {
      const handleAsync = async () => {
        let authorId = newMessage.user_id

        if (!users.get(authorId))
          await fetchUser(authorId, user => handleNewOrUpdatedUser(user))
      }

      handleAsync()
    }
  }, [newMessage, props.channelId, users])

  useEffect(() => {
    if (deletedMessage)
      setMessages(messages.filter(message => message.id !== deletedMessage.id))
  }, [deletedMessage, messages])

  useEffect(() => {
    if (newChannel) setChannels(channels.concat(newChannel))
  }, [channels, newChannel])

  useEffect(() => {
    if (deletedChannel)
      setChannels(channels.filter(channel => channel.id !== deletedChannel.id))
  }, [channels, deletedChannel])

  useEffect(() => {
    if (newOrUpdatedUser) users.set(newOrUpdatedUser.id, newOrUpdatedUser)
  }, [newOrUpdatedUser, users])

  return {
    messages: messages.map(x => ({ ...x, author: users.get(x.user_id) })),
    channels:
      channels !== null
        ? channels.sort((a, b) => a.slug.localeCompare(b.slug))
        : [],
    users
  }
}
