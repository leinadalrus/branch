import styles from './navmenu.module.css'

export const NavMenu = () => {
  return (
    <div className={styles.FrostedBanner}>
      <div className={styles.NavBackground}></div>
      <nav className={styles.Navbar}>
        <a className={styles.Overwatch}>
          <button>Home Base</button>
        </a>
        <a className={styles.Sortie}>
          <button>Mission Sortie</button>
        </a>
        <a className={styles.Assembly}>
          <button>My Garage</button>
        </a>
        <a className={styles.Mission}>
          <button>NEST: Branch</button>
        </a>

        <div className={styles.Line1}></div>
        <div className={styles.Line2}></div>
        <div className={styles.Line3}></div>
        <div className={styles.Line4}></div>
      </nav>
    </div>
  )
}