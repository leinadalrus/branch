'use client'

import styles from './login.module.css'

const Login = () => {
  return (
    <article className={styles.LoginConsole}>
      <section className={styles.LoginConsoleSegment}>
        <form className={styles.LoginConsoleForm}>
          <input type="email" name="email" placeholder="Email" className={styles.loginEmailField} />

          <input type="password" name="password" placeholder="Password" className={styles.loginPasswordField} />

          <div className={styles.loginConsoleReset}>
            <button><i>Forgot password</i></button>
          </div>

          <div className={styles.loginConsoleReset}>
            <button type="reset"><i>Remember me</i></button>
          </div>
        </form>

        <div className={styles.loginConsoleSubmit}>
          <button type="submit">Sign In</button>
        </div>
      </section>
    </article>
  )
}

export default Login
