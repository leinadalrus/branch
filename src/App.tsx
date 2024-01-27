import { useEffect, useState } from 'react'
import './App.css'

export const TradingCard = () => {
  const [image, setImage] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const [width, setWidth] = useState('')
  // JSON derived values
  const [height, setHeight] = useState('')
  // JSON derived values

  // TODO(observer): employ `useEffect` code here ...
  useEffect(() => {
    const img_el = document.getElementById('hero')
    const ttl_el = document.getElementById('title')
    const desc_el = document.getElementById('description')

    setImage(img_el!.innerHTML)
    setTitle(ttl_el!.innerHTML)
    setDescription(desc_el!.innerHTML)
  }, [title, description])

  useEffect(() => {
    const x = document.getElementById('card')
    const width = x!.dataset.width
    const y = document.getElementById('card')
    const height = y!.dataset.height

    setWidth(width!)
    setHeight(height!)
  }, [width, height])

  return (
    <>
      <section
        className="card"
        draggable={true}
        onDragStart={event => {
          // const element = document.getElementById('card')
          // ...?.firstChild as HTMLElement
          event.dataTransfer.effectAllowed = 'move'
          event.dataTransfer.setData('text/html', event.currentTarget.id)
        }}
        >
          <div>{title}</div>
          <img
            src={image}
            className="logo react"
            alt="React logo"
          />
          <article>
            <span>{description}</span>
          </article>
      </section>
    </>
  )
}

export const Tabletop = () => {
  const [width, setWidth] = useState('')
  // JSON derived values
  const [height, setHeight] = useState('')
  // JSON derived values

  useEffect(() => {
    const x = document.getElementById('card')
    const width = x!.dataset.width
    const y = document.getElementById('card')
    const height = y!.dataset.height

    setWidth(width!)
    setHeight(height!)
  }, [width, height])

  return (
    <>
    </>
  )
}

export const App = () => {
  return (
    <>
      <TradingCard />
      <Tabletop />
    </>
  )
}

export default App
