import * as React from 'react'

function Flair() {
  return (
    <article>
      <article class="mini-profile-card">
        <div class="Flair" style="width: 256px; height: 256px">
          <div
            class="Rectangle3"
            style="width: 256px; height: 256px; left: 382px; top: 0px; position: absolute; border: 0.50px #ECF1F2 solid">
            <img id="mini-profile-emblem" />
          </div>
          <div
            class="Rectangle2"
            style="width: 256px; height: 256px; left: 0px; top: 0px; position: absolute; border: 0.50px #ECF1F2 solid">
            <img id="mini-profile-avatar" />
          </div>
          <div
            class="Line5"
            style="width: 1380px; height: 0px; left: -371px; top: 338px; position: absolute; border: 0.50px #ECF1F2 solid"></div>
          <div
            class="Line6"
            style="width: 256px; height: 0px; left: 191px; top: 293px; position: absolute; border: 0.50px #ECF1F2 solid"></div>
          <div
            class="Line7"
            style="width: 335px; height: 0px; left: 319px; top: -26px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; border: 0.50px #ECF1F2 solid"></div>
        </div>

        <section class="mini-profile-section">
          <h1 id="mini-profile-callsign"></h1>
          <i id="mini-profile-username"></i>
        </section>
      </article>
    </article>
  )
}

export default Flair
