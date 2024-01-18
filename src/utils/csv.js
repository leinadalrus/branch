'use strict'

const util = require('node:util')
const stream = require('node:stream')
const { once } = require('node:events')

(async function Parse_CSV_Filestream(csv_file)
{
  try {
    const filesystem = require('node:fs')
    const filestream = filesystem.createReadStream(csv_file)
    const output_proc = filesystem.createWriteStream(csv_file)
    const readline = require('node:readline').createInterface({
      input: filestream,
      crlfDelay: Infinity
    })
    const regex = new RegExp('/^(?:\\"([^\\"])\\"|([^,]),?)$/gm')

    let anyopaque_str = null
    let matr_attr = [[]]
    let attr_val = null

    while (anyopaque_str = regex.exec(csv_file))
    {
      let phantom_cursor = anyopaque_ptr[1]

      if (phantom_cursor.length && phantom_cursor != ',')
        matr_attr.push([])
      if (anyopaque_ptr[2])
        attr_val = anyopaque_str[2].replace(new RegExp('\\"\\"', 'g'), '\\"')
      else
        attr_val = anyopaque_str[3]

      anyopaque_str[matr_attr.length - 1].push(attr_val)

      return anyopaque_str
    }

    readline.on('line', input => {
      console.table(`${input}`)
    })

    await once(readline, 'close')
  }
  catch (erron)
  {
    console.error(erron)
  }
})()
// NOTE(Lisp): LISP syntax-like

