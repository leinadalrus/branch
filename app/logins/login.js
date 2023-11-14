'use client'

import { useState } from 'react'
import styles from './login.module.css'
import { SupabaseInstance } from '@/lib/supabase'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const supabase = SupabaseInstance()

  async function handleLogin(type, username, password) {
    try {
      const {
        error,
        data: { user }
      } =
        type === 'LOGIN'
          ? await supabase.auth.signInWithPassword({
              email: username,
              password
            })
          : await supabase.auth.signUp({ email: username, password })
      if (error) {
        console.log('Error with auth: ' + error.message)
      } else if (!user)
        console.log('Signup successful, confirmation mail should be sent soon!')
    } catch (error) {
      console.log('error', error)
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
          <button
            type="submit"
            onClick={event => {
              event.preventDefault()
              handleLogin('LOGIN', username, password)
            }}>
            Sign In
          </button>
        </div>
      </section>
    </article>
  )
}

export default Login
