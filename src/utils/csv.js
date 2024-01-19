'use strict'

import { createReadStream } from 'node:fs'
import { once } from 'node:events'
import readline from 'node:readline'

export async function Parse_CSV_Filestream(csv_file) {
  try {
    const regex = new RegExp('/^(?:\\"([^\\"])\\"|([^,]),?)$/gm')
    const filestream = createReadStream(csv_file)

    readline.createInterface({
      input: filestream,
      crlfDelay: Infinity
    })

    let anyopaque_str
    let matr_attr = [[]]
    let attr_val = null

    while (regex.exec(csv_file)) {
      let phantom_cursor = anyopaque_str[1]

      if (phantom_cursor.length && phantom_cursor != ',') matr_attr.push([])
      if (anyopaque_str[2])
        attr_val = anyopaque_str[2].replace(new RegExp('\\"\\"', 'g'), '\\"')
      else attr_val = anyopaque_str[3]

      anyopaque_str[matr_attr.length - 1].push(attr_val)

      return anyopaque_str
    }

    readline.on('line', input => {
      console.table(`${input}`)
    })

    await once(readline, 'close')
  } catch (erron) {
    console.error(erron)
  }
}
// NOTE(Lisp): LISP syntax-like

