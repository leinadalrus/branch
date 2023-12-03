'use strict'

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
