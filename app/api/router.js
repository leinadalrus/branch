import { SupabaseAuthor, SupabaseInstance, SupabaseSession } from '../lib'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const SUPABASE_AUTHOR = SupabaseAuthor
const SUPABASE_SESSION = SupabaseSession
const SUPABASE_INSTANCE = SupabaseInstance

export const AppRouter = () => {
  const [/* loaded, */ setLoading] = useState(false)
  const [session, setSession] = useState(null)
  const [/* user, */ setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    function saveSession() {
      setSession(session)
      const currentUser = session?.user
      setUser(currentUser ?? null)
      setLoading(!!currentUser)

      if (currentUser) {
        SUPABASE_AUTHOR.login(currentUser.email)
        router.push(
          `/channels/${currentUser.id}`,
          `/channels/${currentUser.id}`
        )
      }
    }

    SUPABASE_SESSION.setSession(saveSession(session))

    const { subscription: authListener } =
      SUPABASE_INSTANCE.auth.onAuthStateChange(async function (event, session) {
        saveSession(session)
      })

    return function () {
      authListener.unsubscribe()
    }
  })

  // async function signOut() {
  //   const { error } = await SUPABASE_AUTHOR.logout()

  //   if (!error) {
  //     router.push('/')
  //   }
  // }
}
