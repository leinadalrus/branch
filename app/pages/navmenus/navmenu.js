import { useState } from 'react'

const NavMenu = () => {
  return (
    <>
      <div class="FrostedBanner">
        <div class="NavBackground"></div>
        <nav class="Navbar">
          <a class="Overwatch" href="/app/home.component.html#overwatch">
            <button>Overwatch</button>
          </a>

          <a class="Mission" href="/app/app.component.html#mission">
            <button>Mission</button>
          </a>

          <a class="Sortie" href="/app/app.component.html#sortie">
            <button>Sortie</button>
          </a>

          <a class="Assembly" href="/app/app.component.html#assembly">
            <button>Assembly</button>
          </a>

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
