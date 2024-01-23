import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  return (
    <>
      <section>
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
      </section>
      <article className="card">
        <span>
          {title}
        </span>
        <p>
          {description}
        </p>
      </article>
    </>
  )
}

export default App

