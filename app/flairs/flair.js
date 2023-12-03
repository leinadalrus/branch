import Image from 'next/image'
import styles from './flair.module.css'

export const Flair = () => {
  return (
    <article className={styles.FlairCard}>
      <section className={styles.Flair}>
        <div className={styles.Rectangle3}>
          <Image
            className={styles.miniProfileAvatar}
            src="/public/assets/emblems/group-emblem.png" /// Route of the image file
            height={256} /// Desired size with correct aspect ratio
            width={256} /// Desired size with correct aspect ratio
            alt="Image of a desired item."
          />
        </div>
        <div className={styles.Rectangle2}>
          <Image
            className={styles.miniProfileEmblem}
            src="/assets/avatars/user-avatar.png" /// Route of the image file
            height={256} /// Desired size with correct aspect ratio
            width={256} /// Desired size with correct aspect ratio
            alt="Image of a desired item."
          />
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
