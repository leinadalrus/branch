import { useEffect, useState } from 'react'

export const Carousel = props => {
  const { children } = props

  const [indexed, setHead] = useState(0)
  const [interval, setInterval] = useState(children.length)

  function previous() {
    if (indexed > 0) setHead(previousEnum => previousEnum - 1)
  }

  function next() {
    if (indexed < interval - 1) setHead(previousEnum => previousEnum + 1)
  }

  useEffect(() => {
    setInterval(children.length)
  }, [children])

  return (
    <article>
      <div
        className="GalleryCarousel"
        style={{ transform: `translateX(-${indexed * 100}%)` }}>
        {children}
      </div>
      <button onClick={previous}>
        <i>p&thinsp;r&thinsp;e&thinsp;v</i>
      </button>
      <button onClick={next}>
        <i>n&thinsp;e&thinsp;x&thinsp;t</i>
      </button>
    </article>
  )
}

// Attributions:
// Aulia, D 2021,
// “How to make a simple react carousel,” DEV Community,
// viewed <https://dev.to/rakumairu/simple-react-carousel-24m0>.
