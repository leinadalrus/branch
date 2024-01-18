import { createContext, useEffect, useState } from 'react'

// Do not export this: ...this must remain private-
const LobbyContext = createContext()

const RoomService = {
  channel: () => {},
  observe: () => {}
}

function retrieveRoom(id) {
  return fetch(`localhost:8080/api/room/${id}`)
}

function getUser() {}

function removeUser() {}

function destroyMessage() {}

function channelMessage(channel, port) {
  channel = new MessageChannel()
  port = channel.port1

  port.onmessage = retrieveRoom
}

function addMessage(event, port, message) {
  event.preventDefault()
  port.postMessage(message)
}

export function LobbyRoom({ roomID, channelMessages }) {
  const [createdMessage, handleCreatedMessage] = useState(null)
  const [destroyedMessage, handleDestroyedMessage] = useState(null)
  const [messages, setMessages] = useState(promisedMessage)
  const roomService = RoomService

  useEffect(() => {
    return () => LobbyContext
  }, [roomID])

  useEffect(() => {
    const messageListener = roomService.channel('conchord.api.messages') // use the RabbitMQ parameter/query
    messageListener.observe()
  })

  useEffect(() => {
    if (roomID >= 1) {
      channelMessage(roomID, channelMessages)
    }
  }, [channelMessages, messages, roomID])

  useEffect(() => {
    if (createdMessage) {
      const handle = () => {
        channelMessage(roomID, channelMessages)
        addMessage(createdMessage, channelMessage, messages)
        handleCreatedMessage(channelMessages)
        setMessages(channelMessages)
      }

      handle()
    }
  }, [channelMessages, createdMessage, messages, roomID])

  useEffect(() => {
    if (destroyedMessage) {
      setMessages(messages)
      handleDestroyedMessage(messages)
    }
  }, [destroyedMessage, messages])
}
