'use client'

import styles from './carousel.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'

function CardImage() {
  return (
    <Image
      className={styles.Card}
      src={'/assets/heads/head-part.png'} /// Route of the image file
      width={255} /// Desired size with correct aspect ratio
      height={255} /// Desired size with correct aspect ratio
      alt="Image of a desired item."
    />
  )
}

export const Carousel = props => {
  const { children } = props

  const [indexed, setHead] = useState(0)
  const [interval, setInterval] = useState(children)

  function previous() {
    if (indexed > 0) setHead(previousEnum => previousEnum - 1)
  }

  function next() {
    if (indexed < interval - 1) setHead(previousEnum => previousEnum + 1)
  }

  useEffect(() => {
    setInterval(children)
  }, [children])

  return (
    <article>
      <div
        className={styles.DashboardCarousel}
        style={{ transform: `translateX(-${indexed * 100}%)` }}>
        <CardImage />
        {children}
      </div>

      <section className={styles.Separator}>
        <button onClick={previous}>
          <i>p&thinsp;r&thinsp;e&thinsp;v</i>
        </button>
        <button onClick={next}>
          <i>n&thinsp;e&thinsp;x&thinsp;t</i>
        </button>
      </section>
    </article>
  )
}

// Attributions:
// Aulia, D 2021,
// “How to make a simple react carousel,” DEV Community,
// viewed <https://dev.to/rakumairu/simple-react-carousel-24m0>.
