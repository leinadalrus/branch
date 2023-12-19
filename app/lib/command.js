'use strict'

import { createInterface } from 'node:readline/promises'
import { stdin, stdout } from 'node: process'

export const DaveResource = async () => {
  const reader = createInterface({ stdin, stdout })

  const output = await reader.question(
    'Input your /.infra/.conf argument here:\n\t',
    answer => {
      if (answer.match(/^y(es)?$/i)) reader.pause()

      reader.on(() => {
        switch (answer) {
          case 'pause':
            reader.pause()
            break
          case 'resume':
            reader.resume()
            break
          case 'SIGTSTP':
            reader.close()
            break
          default:
            reader.prompt({ preserveCursor: true })
        }
      })

      reader.on('line', stdin => {
        console.table(`Line; Received: ${stdin}`)
      })

      reader.on('history', history => {
        console.table(`History; Received: ${history}`)
      })

      reader.on('pause', () => {
        console.table('Node: Readline paused ...')
      })

      reader.on('resume', () => {
        reader.resume()
        console.table('Node: Readline resumed ...')
      })
    }
  )

  console.table(`${output}`)
  reader.close()
}
