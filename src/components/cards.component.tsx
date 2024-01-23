import { useEffect, useState } from 'react'
import styles from './cards.module.css'

function restfulRetrieval() {
  const responseVal = fetch('localhost:8080/api/cards')
  return JSON.parse(`${responseVal}`)
}

export const CardCommand = () => {
  const [cardTuple, setCardTuple] = useState([0, 0])

  useEffect(() => {
    const recv = () => {
      setCardTuple(restfulRetrieval())
    }

    recv()
  })

  try {
    while (cardTuple != restfulRetrieval()) {
      <TradingCard />
    }
  } catch (exception) {
    console.log(exception)
  }
}

export const TradingCard = () => {
  return (
    <>
      <article
        className={styles.CardContainer}
        draggable={true}
        onDragStart={event => {
          // const element = document.getElementById('card')
          // ...?.firstChild as HTMLElement
          event.dataTransfer.effectAllowed = 'move'
          event.dataTransfer.setData('text/html', event.currentTarget.id)
        }}
      ></article>
    </>
  )
}

export default CardCommand
