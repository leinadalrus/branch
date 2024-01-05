'use client'

import { useState } from 'react'
import styles from './login.module.css'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin(type, username, password) {
    try {
      if (type != 'LOGIN') console.log('Error with user authentication')

      setUsername(username)
      setPassword(password)
    } catch (error) {
      console.log('Error:\t' + error)
    }
  }

  return (
    <article className={styles.LoginConsole}>
      <section className={styles.LoginConsoleSegment}>
        <form className={styles.LoginConsoleForm}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={username}
            onChange={event => setUsername(event.target.value)}
            className={styles.loginEmailField}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={event => setPassword(event.target.value)}
            className={styles.loginPasswordField}
          />

          <div className={styles.loginConsoleReset}>
            <button>
              <i>Forgot password</i>
            </button>
          </div>

          <div className={styles.loginConsoleReset}>
            <button type="reset">
              <i>Remember me</i>
            </button>
          </div>
        </form>

        <div className={styles.loginConsoleSubmit}>
          <a
            href={['/dashboard', '/login', '/']}
            onClick={event => {
              event.preventDefault()
              handleLogin('LOGIN', username, password)
            }}>
            Sign In
          </a>
        </div>
      </section>
    </article>
  )
}

export default Login
