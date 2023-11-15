import Image from 'next/image'
import { useContext } from 'react'
import { createContext } from 'react'
import { SupabaseClientContext } from '@/lib/store'
import styles from './messengerCard.module.css'

function CardImage() {
  return (
    <Image
      className={styles.Card}
      src={'/assets/avatars/user-avatar.png'} /// Route of the image file
      width={255} /// Desired size with correct aspect ratio
      height={255} /// Desired size with correct aspect ratio
      alt="Image of a desired item."
    />
  )
}

function CardBanner() {
  return (
    <>
      <div className={styles.Banner}>
        <h1>Cicero</h1>
      </div>
    </>
  )
}

function CardBody() {
  return (
    <>
      <section className={styles.Container}>
        <CardBanner />
        <article className={styles.Card}>
          <h1>Lorem ipsum dolor</h1>
          <div class="CardSection">
            <p id="CardDescription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <div class="CardButtons">
            <button id="CardButton">L I K E</button>
            <button id="CardButton">S H A R E</button>
          </div>
        </article>
      </section>
    </>
  )
}

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

export const MessengerCard = ({ message }) => {
  const { user, roles } = useContext(MessageContext)

  return (
    <article>
      <CardImage />
      <CardBody />
      <div className="text-gray-100 w-4">
        {(user?.id === message.user_id ||
          roles.some(role => ['admin', 'moderator'].includes(role))) && (
            <button onClick={() => destroyMessage(message.id)}>
              Delete Message
            </button>
          )}
      </div>
      <div>
        <p className="text-blue-700 font-bold">{message.author.username}</p>
        <p className="text-white">{message.message}</p>
      </div>
    </article>
  )
}
