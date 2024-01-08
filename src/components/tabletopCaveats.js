import Card from './card.component'
import styles from './tradingCard.module.css'

export const TradingCard = () => (
  <Card
    className={styles.CardLayer}
    class="DraggableSect"
    draggable="true"
    ondragstart="startsDragging(events)"></Card>
)

export const TabletopPlanar = () => (
  <article className={styles.TabletopLayer}>
    <div
      className={styles.DropzoneSect}
      ondragover="endsDragging(events)"
      ondrop="onDropped(events)"></div>
  </article>
)

function startsDragging(events) {
  events.forEach(event => {
    event.classList.add('card')
  })

  events.dataTransfer.effectAllowed = 'move'
  events.dataTransfer.setData('text/html', events.target.id)
  // Could also probably set JSON data for verbosity

  events.currentTarget
}

function endsDragging(events) {
  events.forEach(event => {
    event.classList.remove('card')
  })

  events.preventDefault()
}

function onDropped(events) {
  const className = events.dataTransfer.getData('text/html')
  const draggedElem = document.getElementByClassName(className)
  const dropzone = events.target

  dropzone.appendChild(draggedElem)
}

function handleDraggingCaveats() {
  let events = document.querySelectorAll('.CardLayer')

  events.forEach(event => {
    event.addEventListener('ondragstart', startsDragging)
    event.addEventListener('ondragover', endsDragging)
    event.addEventListener('ondrop', onDropped)
  })
} // NOTE(Static): call this function through server-side to do a sentinel check
