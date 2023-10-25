import { NavMenu } from './navmenus/navmenu'
import styles from './page.module.css'

const Home = () => {
  return (
    <main className={styles.main}>

      <div className={styles.center}>
        <h1 className={styles.card} id="contentHeadingTitle">
          B<hr />R&#8194;A&#8194;N<br />C&#8194;H
        </h1>
        <h2 className={styles.description}>
          <i>Main systems: nominal.</i>
        </h2>
      </div>

      <NavMenu />

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>

      <footer className={styles.description}>
        <p>@<span>:</span><i>daniel.david.surla@gmail.com</i></p>
        <i>Daniel David Sansano Surla</i>
        <i>All Rights Reserved</i>
      </footer>

    </main>
  )
}

export default Home
