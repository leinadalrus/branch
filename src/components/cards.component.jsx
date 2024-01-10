import { useRef } from 'react'
import styles from './cards.module.css'

function onDragOfCard({ events }) {
  events.forEach(event => {
    event.classList.add('card')
  })

  events.dataTransfer.effectAllowed = 'move'
  events.dataTransfer.setData('application/json', events.target.id)
  events.currentTarget
}

function onDropOfCard({ events }) {
  const data = events.dataTransfer.getData('application/json')
  const draggedElement = document.getElementsByClassName(data)
  const dropZone = events.target

  dropZone.appendChild(draggedElement)

  events.forEach(event => {
    event.classList.remove('card')
  })
  events.preventDefault()
}

export function DragAndDropCard() {
  const [cardTupler, setCardTuple] = useRef([0, 0])

  const CardState = {
    state: [0, 0]
  }

  let cardLayers = document.querySelectorAll('.TradingCardLayer')
  let cardState = CardState

  cardLayers.forEach(card => {
    card.addEventListener('ondragstart', onDragOfCard)
    card.addEventListener('ondrop', onDropOfCard)
  })

  try {
    while (cardState.state != cardTupler) {
      onDragOfCard()
      onDropOfCard()
      setCardTuple(cardTupler)
    }
  } catch (exception) {
    console.table(exception)
  }

  return cardState.state
}

export const TradingCard = () => {
  return (
    <>
      <article
        className={styles.TradingCardLayer}
        draggable={true}
        onDragStart={onDragOfCard()}
      ></article>
    </>
  )
}

export default TradingCard
