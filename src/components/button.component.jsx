import styles from './button.module.css'
// React.js

export const DefaultButton = onPress => (
  <article style={styles.circleButtonContainer}>
    <button style={styles.circleButton} onClick={onPress}>
      <div></div>
    </button>
  </article>
)

export const CircleButton = onPress => {
  return (
    <article style={styles.circleButtonContainer}>
      <button style={styles.circleButton} onClick={onPress}>
        <div>&boxbox;</div>
      </button>
    </article>
  )
}

export const IconButton = (icon, label, onPress) => {
  return (
    <button style={styles.iconButton} onClick={onPress}>
      <div>{icon}</div>
      <p style={styles.iconButtonLabel}>{label}</p>
    </button>
  )
}

export default DefaultButton
