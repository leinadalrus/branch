import { useState } from 'react'
import { SupabaseClientContext } from '../lib/store'

async function addMessage(message, channelId, userId) {
  try {
    let { data } = await SupabaseClientContext.from('messages')
      .insert({ message, channelId, userId })
      .select()

    return data
  } catch (error) {
    console.log('error', error)
  }
}

export function UseMessage({ onSubmit }) {
  const [messageInput, setMessage] = useState('')

  const emitSubmission = event => {
    if (event.keyCode === 13) {
      onSubmit(messageInput)
      setMessage('')
    }
  }

  return (
    <>
      <input
        type="text"
        placeholder="Send a message?"
        value={messageInput}
        onChange={event => setMessage(event.target.value)}
        onKeyDown={event => emitSubmission(event)}
      />
      <button onClick={() => addMessage()}>Send Message</button>
    </>
  )
}
