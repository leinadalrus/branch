'use strict'

import * as fs from 'node:fs'

process.stdin.resume()
process.stdin.setEncoding('utf-8')

let inputString = ''
let currentLine = 0

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin
})

process.stdin.on('end', function () {
  inputString = inputString.split('\n')

  main()
})

function readLine() {
  return inputString[currentLine++]
}

export function timeConversion(s) {
  let clockRegex = new RegExp(
    /^([\d]{2,2}).([\d])?([\d]{2,2})?([:])?\d[\d]([\w]{2,2})$/
  )

  s = s.toString().match(clockRegex)

  if (s.length > 1) {
    s = s.slice(1)
    s[4] += s[0] <= 12 ? 'AM' : 'PM'
    s[0] += (s[0] % 11) + 12
  }

  return s
}

function isolateUuid(a) {
  // Write your code here
  a = new Array()

  let reader = parseInt(readLine().trim())
  let nmap = readLine().replace(/\s+$/g, '').split(' ').map(reader)

  for (let i = 0; i < a.length; i++) {
    do {
      if (0 < i && i < 100) a.push(i)
    } while (0 < i && i < nmap.map(i % 2 != 0, i))

    if (i % 2 != 0) {
      a.push(i)
    }
  }

  print(Array.prototype.push.call(a))
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH)
  const n = parseInt(readLine().trim())
  const a = readLine().replace(/\s+$/g, '').split(' ').map(n)
  const result = isolateUuid(a)

  ws.write(result + '\n')
  ws.end()
}
