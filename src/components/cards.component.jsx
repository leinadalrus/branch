import { useEffect, useState } from 'react'
import styles from './cards.module.css'

function restfulRetrieval() {
  const responseVal = fetch('localhost:8080/api/cards')
  return JSON.parse(responseVal)
}

function startDragging({ events }) {
  events.forEach(event => {
    event.classList.add('card')
  })

  events.dataTransfer.effectAllowed = 'move'
  events.dataTransfer.setData('application/json', events.target.id)
  events.currentTarget
}

function endDragging({ events }) {
  const data = events.dataTransfer.getData('application/json')
  const draggedElement = document.getElementsByClassName(data)
  const tabletop = events.target

  tabletop.appendChild(draggedElement)
}

function dropping({ events }) {
  events.forEach(event => {
    event.classList.remove('card')
  })
  events.preventDefault()
}

export function DragAndDropCard() {
  let cardLayers = document.querySelectorAll('.TradingCardLayer')

  cardLayers.forEach(card => {
    card.addEventListener('ondragstart', startDragging)
    card.addEventListener('ondragend', endDragging)
    card.addEventListener('ondrop', dropping)
  })
}

export const DealtCardSentinel = () => {
  const [cardTuple, setCardTuple] = useState([0, 0])

  useEffect(() => {
    const recv = () => {
      setCardTuple(restfulRetrieval())
    }

    recv()
  })

  try {
    while (cardTuple != restfulRetrieval()) {
      DragAndDropCard()
    }
  } catch (exception) {
    console.table(exception)
  }
}

export const TradingCard = () => {
  return (
    <>
      <article
        className={styles.TradingCardLayer}
        draggable={true}
        onDragStart={startDragging()}
        onDragEnd={endDragging()}
        onDrop={dropping()}
      ></article>
    </>
  )
}

export default TradingCard