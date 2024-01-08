import { useState } from "react";
import "./App.css";

const App = () => {
  const [productDescriptor, setProductDescriptor] = useState("");

  return (
    <>
      <main className={styles.main}>
        <BackgroundImage />
        <section className={styles.center}>
          <h1>
            B<hr />
            R&#8194;A&#8194;N
            <br />
            C&#8194;H
          </h1>
          <h2 className={styles.description}>
            <i>Main systems: nominal.</i>
          </h2>
        </section>

        <section>
          <Flair />
        </section>

        <section>
          <NavMenu />
        </section>

        <Carousel />

        <CardList />

        <section className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Data <span>&#9733;</span>
            </h2>
            <p>
              Ravage through N&thinsp;E&thinsp;S&thinsp;T Branch&apos;s
              databases&nbsp;to find configurations
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Test <span>&#9733;</span>
            </h2>
            <p>
              Test yourself in N&thinsp;E&thinsp;S&thinsp;T Branch&apos;s
              playground&nbsp;space
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              A&#8201;C&#8201;N&#8201;U&thinsp;s <span>&#9733;</span>
            </h2>
            <p>Armored Core NEST Units.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Ravens <span>&#9733;</span>
            </h2>
            <p>Ravens of the NEST.</p>
          </a>
        </section>

        <div className="card">
          <button
            onClick={() =>
              setProductDescriptor((productDescriptor) => productDescriptor)
            }
          >
            {productDescriptor}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
      </main>

      <footer className={styles.description}>
        <i>Daniel David Sansano Surla</i>
        <i>@:daniel.david.surla@gmail.com</i>
        <i>All Rights Reserved</i>
      </footer>
    </>
  );
};

export default App;
