import Image from 'next/image'
import { CircleButton, IconButton } from './button.component'
import styles from './card.module.css'

// React.js
import React, { useState } from 'react'

export const Card = ({ source }) => {
  const [selectedDeck, setSelectedDeck] = useState('')
  const [showDeckBuilds, setShownDeckBuild] = useState('')
  const backgroundImage = source
    ? { uri: source }
    : require('../../assets/images/bg/app-background.png')

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
      <Image
        source={backgroundImage}
        style={[styles.container, styles.image]}
        alt="Background image for a Card."
      />
      <section style={styles.optionsContainer}>
        <article style={styles.optionsRow}>
          <IconButton icon="refresh" label="Reset" onPress={onReset} />
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
