'use strict'

import { createClient } from '@supabase/supabase-js'

export const SupabaseInstance = async () => {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )
}

const SupabaseAuthor = {
  supabase: SupabaseClient(SupabaseInstance()),

  register: async (inputUsername, inputEmail, inputPassword) => {
    const { data, error } = await this.supabase.auth.signUp({
      username: inputUsername,
      email: inputEmail,
      password: inputPassword
    })

    return { data, error }
  },

  login: async (signInWithPasswordCredentials, inputPassword) => {
    const { data, error } = await this.supabase.auth.signInWithPassword({
      email: signInWithPasswordCredentials,
      password: inputPassword
    })

    return { data, error }
  },

  logout: async () => {
    const { error } = await this.supabase.auth.signOut()
    return { error }
  },

  resetPassword: async email => {
    const { data, error } = await this.supabase.auth.resetPasswordForEmail(
      email,
      {
        redirectTo: `/api/update-password?=${email}`
      }
    )

    return { data, error }
  },

  passwordResetResponse: async (email, renewPassword) => {
    const { data, error } = await this.supabase.auth.updateUser({
      password: renewPassword
    })

    return { data, error }
  }
}

const SupabaseSession = {
  constructor(_supabase) {
    this.supabase = _supabase
  },

  fetchSession: async () => {
    const { data, error } = await this.supabase.auth.getSession()
    return { data, error }
  },

  anewSession: async () => {
    const { data, error } = await this.supabase.auth.refreshSession()
    return { data, error }
  },

  setSession: (currentSession, accessToken, refreshToken) => {
    const { data, error } = this.supabase.auth.setSession({
      accessToken,
      refreshToken
    })

    return { data, error }
  },

  fetchUser: async () => {
    const {
      data: { user }
    } = await this.supabase.auth.getUser()
    return { user }
  },

  updateUser: async userAttributes => {
    const { data, error } = await this.supabase.auth.updateUser({
      email: userAttributes
    })

    return { data, error }
  },

  requireAuthentication: async () => {
    const { data, error } = await this.supabase.auth.reauthenticate()
    return { data, error }
  },

  watchAuthors: callback => {
    this.supabase.auth.onAuthStateChange((event, session) => {
      console.table(event, session)
    })
  },

  supabase: SupabaseInstance()
}

export default class SupabaseClient {
  constructor(_supabase) {
    _supabase = SupabaseInstance()
    this.supabase = _supabase
  }

  async upsert() {
    const { data, error } = await this.supabase
      .from('users')
      .upsert({ id: 0, username: 'jonDoe' })
      .select()

    return { data, error }
  }

  async update() {
    const { error } = await this.supabase
      .from('users')
      .update({ username: 'jonDoe1' })
      .eq('id', 0)
      .maybeSingle()

    return { error }
  }

  async destroy() {
    const { error } = await this.supabase
      .from('users')
      .delete()
      .eq('id', 0)
      .maybeSingle()

    return { error }
  }

  supabase = SupabaseInstance()
}
