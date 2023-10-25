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
      <img
        src="assets/parts/head-part.png"
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
    setLikes(likes++)
  }

  function shareOnClick() {
    setSocialMediaShares(socialMediaShares++)
  }

  return (
    <>
      <article id="poster-card">
        <Banner />
        <HeroImage />
        <ItemDescription />
      </article>
      <div class="poster-buttons-container">
        <button id="poster-button" onClick={likeOnClick}>l i k e({likes})</button>
        <button id="poster-button" onClick={shareOnClick}>s h a r e({socialMediaShares})</button>
      </div>
    </>
  )
}

export default Poster
