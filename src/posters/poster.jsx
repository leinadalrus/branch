'use client'

import styles from './poster.module.css'

import Image, { useState } from 'react'

function Banner(title) {
  return (
    <section>
      <h1>{title}</h1>
    </section>
  )
}

function CardTitle(props) {
  <section className={styles.posterTitle}>
    <h1>{props.title}</h1>
  </section>
}

function HeroImage() {
  return (
    <div>
      <Image
        src="/assets/heroes/hero-image.png"
        alt="Hero Image for Card-Styled Poster"
      />
    </div>
  )
}

function ItemDescription(description) {
  const authors = ['Daniel David', 'John Doe', 'Jane Doe']

  return (
    <>
      <section className={styles.posterSection}>
        <p id="poster-description">{description}</p>
      </section>
      <ul>
        {authors.map(author => (
          <li key={author}>{author}</li>
        ))}
      </ul>
    </>
  )
}

const Poster = () => {
  const [likes, setLikes] = useState(0)
  const [socialMediaShares, setSocialMediaShares] = useState(0)

  function likeOnClick() {
    setLikes(likes + 1)
  }

  function shareOnClick() {
    setSocialMediaShares(socialMediaShares + 1)
  }

  return (
    <>
      <article className={styles.posterCard}>
        <Banner />
        <CardTitle />
        <HeroImage />
        <ItemDescription />
      </article>
      <div id="poster-buttons-container">
        <button id="poster-button" onClick={likeOnClick}>
          l i k e({likes})
        </button>
        <button id="poster-button" onClick={shareOnClick}>
          s h a r e({socialMediaShares})
        </button>
      </div>
    </>
  )
}

export default Poster
