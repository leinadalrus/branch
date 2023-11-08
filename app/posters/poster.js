'use client'

import Image from 'next/image'
import { useState } from 'react'

function Banner(props) {
  return (
    <section>
      <h1>{props.title}</h1>
    </section>
  )
}

function CardTitle(props) {
  <section class="poster-title">
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

function ItemDescription(props) {
  const authors = ['Daniel David', 'John Doe', 'Jane Doe']

  return (
    <>
      <section class="poster-section">
        <p id="poster-description">{props.description}</p>
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
      <article id="poster-card">
        <Banner />
        <CardTitle />
        <HeroImage />
        <ItemDescription />
      </article>
      <div class="poster-buttons-container">
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
