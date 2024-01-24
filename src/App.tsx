import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export const App = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const [width, setWidth] = useState('')
  const [height, setHeight] = useState('')

  // TODO(observer): employ `useEffect` code here ...
  useEffect(() => {
    const ttl_el = document.getElementById('title')
    const desc_el = document.getElementById('description')

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
            src={viteLogo}
            className="logo"
            alt="Vite logo"
          />
          <img
            src={reactLogo}
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

export default App

