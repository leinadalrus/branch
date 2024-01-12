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

export function LobbyRoom({ roomID }) {
  useEffect(() => {
    return () => LobbyContext
  }, [roomID])
}

export function PromiseMessage({ promisedMessage }) {
  const [createdMessage, handleCreatedMessage] = useState(null)
  const [destroyedMessage, handleDestroyedMessage] = useState(null)
  const [messages, setMessages] = useState(promisedMessage)
  const [lobbies, setLobbies] = useState(LobbyRoom)
  
  const roomService = RoomService

  useEffect(() => {
    lobbies.array.forEach(element => {
      retrieveRoom(element) // : in for-each-loop := lobbies.id
    })
    
    const messageListener = roomService.channel('conchord.api.messages') // use the RabbitMQ parameter/query
    messageListener.observe()
  })
}
