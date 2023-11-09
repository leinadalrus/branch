import styles from './newsfeed.module.css'
import Image from 'next/image'

function CardImage() {
  return (
    <Image
      className={styles.Card}
      src={'/assets/avatars/user-avatar.png'} /// Route of the image file
      height={144} /// Desired size with correct aspect ratio
      width={144} /// Desired size with correct aspect ratio
      alt="Image of a desired item."
    />
  )
}

const ImageMediums = [
  {
    id: 0,
    title: 'Hello World',
    description: 'An image of an iterable item.',
  },
]

export const Newsfeed = () => {
  const medias = ImageMediums.map(media => {
    <li key={media.id}></li>
  })

  return (
    <article>
      <CardImage />
      <ul>{medias}</ul>
    </article>
  )
}
