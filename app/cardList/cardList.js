import styles from './cardList.module.css'
import Image from 'next/image'

function CardImage() {
  return (
    <Image
      className={styles.Card}
      src={'/public/assets/torsos/torso-part.png'} /// Route of the image file
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

const ImageMediums = [
  {
    id: 0,
    title: 'Hello World',
    description: 'An image of an iterable item.',
  },
]

export const CardList = () => {
  const medias = ImageMediums.map(media => {
    <li key={media.id}></li>
  })

  return (
    <article>
      <CardImage />
      <CardBody />
      <ul>{medias}</ul>
    </article>
  )
}
