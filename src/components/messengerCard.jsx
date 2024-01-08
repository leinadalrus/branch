import { useContext } from 'react'
import { createContext } from 'react'
import { SupabaseClientContext } from '../lib/store'

import { CardBody, CardImage } from './card.component'
import { IconRemoveButton } from './buttons.component'

async function destroyMessage() {
  const supabase = SupabaseClientContext

  try {
    let { data } = await supabase
      .from('messages')
      .delete()
      .match({ id: 'message_id' })
    return data
  } catch (error) {
    console.log('error', error)
  }
}

const MessageContext = createContext()

export const MessengerCard = (message) => {
  const { user, roles } = useContext(MessageContext)

  return (
    <article>
      <CardImage />
      <CardBody />
      <div className="text-gray-100 w-4">
        {(user?.id === message.user_id ||
          roles.some(role => ['admin', 'moderator'].includes(role))) && (
          <IconRemoveButton onClick={() => destroyMessage(message.id)}>
            Delete Message
          </IconRemoveButton>
        )}
      </div>
      <div>
        <p>{message.author.username}</p>
        <p>{message.message}</p>
      </div>
    </article>
  )
}
export default MessengerCard
