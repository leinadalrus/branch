import styles from './flair.module.css'

export const Flair = () => {
  return (
    <article className={styles.FlairCard}>
      <section className={styles.Flair}>

        <div
          className={styles.Rectangle3}>
          <img className={styles.miniProfileEmblem} />
        </div>
        <div
          className={styles.Rectangle2}>
          <img className={styles.miniProfileAvatar} />
        </div>

        <div className={styles.Line5}></div>
        <div className={styles.Line6}></div>
        <div className={styles.Line7}></div>
      </section>

      <section className={styles.miniProfileSection}>
        <h1 className={styles.miniProfileTitle}></h1>
        <i className={styles.miniProfileName}></i>
      </section>
    </article>
  )
}
