import process from 'node:process'
import postgres from 'postgres'

const POSTGRES_PUBLIC_USERNAME = process.env.POSTGRES_PUBLIC_USERNAME
const POSTGRES_PUBLIC_PASSWORD = process.env.POSTGRES_PUBLIC_PASSWORD
const POSTGRES_PUBLIC_HOSTNAME = process.env.POSTGRES_PUBLIC_HOSTNAME
const POSTGRES_PUBLIC_PORT = process.env.POSTGRES_PUBLIC_PORT
const POSTGRES_PUBLIC_DATABASE = process.env.POSTGRES_PUBLIC_DATABASE

export default class PgPublicDb {
  #psql = postgres(
    `postgres
    ://${POSTGRES_PUBLIC_USERNAME}
    :${POSTGRES_PUBLIC_PASSWORD}
    @${POSTGRES_PUBLIC_HOSTNAME}
    :${POSTGRES_PUBLIC_PORT}
    /${POSTGRES_PUBLIC_DATABASE}`
  )

  async select_user_by_id(id) {
    const id_user = await this.#psql`
      explain select id
      from users
      where id = ${id}
    `

    return id_user
  }

  async add_user_by_id({ id_no, user_name }) {
    const id_named_user = await this.#psql`
      explain insert into users (id_no, user_name)
      value (${id_no}, ${user_name})
      returning id_no, user_name
    `

    return id_named_user
  }
}
// NOTE(Explain): EXPLAIN is an SQL keyword which will save you a lot of headache
