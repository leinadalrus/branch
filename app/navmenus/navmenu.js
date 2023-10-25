import { Link } from 'next/link'

const NavMenu = () => {
  return (
    <>
      <div class="FrostedBanner">
        <div class="NavBackground"></div>
        <nav class="Navbar">
          <Link class="Overwatch" href="/">
            <button>Home Base</button>
          </Link>

          <Link class="Sortie" href="/#sortie">
            <button>Mission Sortie</button>
          </Link>

          <Link class="Assembly" href="/#assembly">
            <button>My Garage</button>
          </Link>

          <Link class="Mission" href="/#mission">
            <button>NEST: Branch</button>
          </Link>

          <div id="Line1"></div>
          <div id="Line2"></div>
          <div id="Line3"></div>
          <div id="Line4"></div>
        </nav>
      </div>
    </>
  )
}

export default NavMenu
