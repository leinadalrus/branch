import * as React from 'react'
import styles from './flair.module.css'

function Flair() {
  return (
    <article>
      <article className={styles.miniProfileCard}>
        <div className={styles.Flair} style="width: 256px; height: 256px">
          <div
            className={styles.Rectangle3}
            style="width: 256px; height: 256px; left: 382px; top: 0px; position: absolute; border: 0.50px #ECF1F2 solid">
            <img className={styles.miniProfileEmblem} />
          </div>
          <div
            className={styles.Rectangle2}
            style="width: 256px; height: 256px; left: 0px; top: 0px; position: absolute; border: 0.50px #ECF1F2 solid">
            <img className={styles.miniProfileAvatar} />
          </div>
          <div
            className={styles.Line5}
            style="width: 1380px; height: 0px; left: -371px; top: 338px; position: absolute; border: 0.50px #ECF1F2 solid"></div>
          <div
            className={styles.Line6}
            style="width: 256px; height: 0px; left: 191px; top: 293px; position: absolute; border: 0.50px #ECF1F2 solid"></div>
          <div
            className={styles.Line7}
            style="width: 335px; height: 0px; left: 319px; top: -26px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; border: 0.50px #ECF1F2 solid"></div>
        </div>

        <section className={styles.miniProfileSection}>
          <h1 className={styles.miniProfileTitle}></h1>
          <i className={styles.miniProfileName}></i>
        </section>
      </article>
    </article>
  )
}

export default Flair
