import BackgroundImage from '../backgrounds'
import { CircleButton, IconButton } from './button.component'
import styles from './card.module.css'

// React.js
import { useState } from 'react'

export const Card = () => {
  const [selectedDeck, setSelectedDeck] = useState('')
  const [showDeckBuilds, setShownDeckBuild] = useState('')

  function onReset() {
    setShownDeckBuild('0')
  }

  function onAddCard() {
    setSelectedDeck('0')
  }

  async function onSaveDeckbuildAsync() {
    if (showDeckBuilds == setShownDeckBuild) return selectedDeck
  }

  return (
    <>
      <BackgroundImage />
      <section style={styles.optionsContainer}>
        <article style={styles.optionsRow}>
          <IconButton
            icon="refresh"
            label="Reset"
            onPress={onReset}
          />
          <CircleButton onPress={onAddCard} />
          <IconButton
            icon="save-alt"
            label="Save"
            onPress={onSaveDeckbuildAsync}
          />
        </article>
      </section>
    </>
  )
}

export default Card

