import { useEffect, useState } from 'react'
import styles from './cards.module.css'
import { endDragging, dropping } from './cards.component'

const TabletopPlanar = () => {
  const [width, height] = useState(0)
  const dimensions = {width, height}
}

export const Tabletop = () => {
  return (
    <article className={styles.OptionsContainer}>
      <div
        className={styles.OptionsRow}
        onDragOver={endDragging()}
        onDrop={dropping()}
      ></div>
    </article>
  )
}

export default Tabletop