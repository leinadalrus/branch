import { useEffect, useState } from 'react'

function fetchChannel(messages: MessageEvent<unknown>) {
  return messages
}

function channelMessage(channel: MessageChannel, port: MessagePort) {
  channel = new MessageChannel()
  port = channel.port1

  port.onmessage = fetchChannel
}

export function RoomChannel(channelMessages: MessageChannel) {
  const [messages, setMessages] = useState(channelMessages)

  useEffect(() => {
    if (messages) {
      const handle = () => {
        channelMessage(channelMessages, channelMessages.port1)
        setMessages(channelMessages)
      }

      handle()
    }
  }, [channelMessages, messages])
}
