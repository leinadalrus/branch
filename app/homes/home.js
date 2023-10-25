import NavMenu from '../navmenus/navmenu'
import Flair from '../flairs/flair'
import Poster from '../posters/poster'

const Home = () => {
  return (
    <>
      <main class="HomeContainer">
        <NavMenu />

        <Flair />

        <Poster />

        <div class="content" role="main">
          <h1 id="contentHeadingTitle">
            B R A N C H
          </h1>
          <h2>
            <i>Main systems: nominal.</i>
          </h2>
        </div>

        <footer id="contentFooterText">
          <p>Ph<span>:</span><i>+61 0425 103 193</i></p>
          <p>@<span>:</span><i>daniel.david.surla@gmail.com</i></p>
          <p>Daniel <i>David Sansano</i> Surla</p>
          <p>C<span>:</span><i>All Rights Reserved</i></p>
        </footer>
      </main>
    </>
  )
}

export default Home