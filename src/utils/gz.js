'use strict'

import { once } from 'node:events'
import { createReadStream, createWriteStream } from 'node:fs'
import readline, { createInterface, on } from 'node:readline'
import { pipeline as _pipeline } from 'node:stream'
import { promisify } from 'node:util'
import gzip from 'node:zlib'

async function GZip_Filestream(zipped_file) {
  const pipeline = promisify(_pipeline)
  gzip.createGzip()

  const filestream = createReadStream(zipped_file)
  const output_proc = createWriteStream(zipped_file)

  createInterface({
    input: filestream,
    crlfDelay: Infinity
  })

  await pipeline(
    on('line', input => {
      console.table(`${input}`)
    })
  )

  await once(readline, 'close')
  filestream.pipe(gzip).pipe(output_proc)
}
// NOTE(Lisp): LISP syntax-like

