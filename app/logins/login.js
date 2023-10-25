'use client'

import { useEffect } from 'react'

const Login = () => {
  return (
    <>
      <article class="LoginConsoleBackground">
        <section class="LoginConsole">
          <section class="LoginConsoleSegment"></section>

          <form class="LoginConsoleForm">
            <input type="email" name="" id="login-email-field" />

            <input type="password" name="password" id="login-password-field" />

            <div id="login-console-reset">
              <a href="./login.component.html">Forgot Password</a>
            </div>

            <div id="login-console-reset">
              <button type="reset">Remember Me</button>
            </div>

            <div id="login-console-submit">
              <button type="submit">Sign In</button>
            </div>
          </form>
        </section>
      </article>
    </>
  )
}

export default Login
