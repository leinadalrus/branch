import styles from './navmenu.module.css'

export function NavMenu() {
  return (
    <div class={styles.FrostedBanner}>
      <div class={styles.NavBackground}></div>
      <nav class={styles.Navbar}>
        <a class={styles.Overwatch}>
          <button>Home Base</button>
        </a>
        <a class={styles.Sortie}>
          <button>Mission Sortie</button>
        </a>
        <a class={styles.Assembly}>
          <button>My Garage</button>
        </a>
        <a class={styles.Mission}>
          <button>NEST: Branch</button>
        </a>

        <div class={styles.Line1}></div>
        <div class={styles.Line2}></div>
        <div class={styles.Line3}></div>
        <div class={styles.Line4}></div>
      </nav>
    </div>
  )
}