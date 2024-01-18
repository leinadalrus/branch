'use strict'

const util = require('node:util')
const stream = require('node:stream')
const pipeline = util.promisify(stream.pipeline)
const { once } = require('node:events')
const gzip = require('node:zlib').createGzip()

(async function GZip_Filestream(zipped_file)
{
  await pipeline(
    try {
      const filesystem = require('node:fs')

      const filestream = filesystem.createReadStream(zipped_file)
      const output_proc = filesystem.createWriteStream(zipped_file)

      const readline = require('node:readline').createInterface({
        input: filestream,
        crlfDelay: Infinity
      })

      readline.on('line', input => {
        console.table(`${input}`)
      })

      await once(readline, 'close')

      filestream.pipe(gzip).pipe(output_proc)
    }
    catch (erron)
    {
      console.error(erron)
    }
  )
})()
// NOTE(Lisp): LISP syntax-like

