import { useState } from 'react'
import styles from './cards.module.css'

export const Tabletop = () => {
  const [width, height] = useState(0)
  const dimensions = { width, height }

  return (
    <article className={styles.OptionsContainer}>
      <div
        className={styles.OptionsRow}
        onDragOver={events => {
          const data = events.dataTransfer.getData('application/json')
          const draggedElement = document.getElementsByClassName(data)
          const tabletop = events.target
          tabletop.addEventListener(
            'ondragover',
            () => {
              return draggedElement
            },
            false
          )
        }}
        onDrop={event => {
          event.currentTarget
          event.preventDefault()
        }}
      ></div>
    </article>
  )
}

export default Tabletop
