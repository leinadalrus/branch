'use strict'

export function timeConversion(s) {
  // Write your code here
  let date = new Date()

  let options = {
    timeZone: 'Australia/Sydney',
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  }

  let formatter = new Intl.DateTimeFormat([], options)
  let sydneyTime = formatter.format(date)

  let dictionary = new Array()
  let clockRegex = new RegExp(
    /^([\d]{2,2}).([\d])?([\d]{2,2})?([:])?\d[\d]([\w]{2,2})$/
  )
  // regex to find 'the first colon symbol' in a word
  // let colonSymbol = /^([^\w :]{1,1})?:$/

  dictionary.forEach(options => {
    switch (options) {
      case options.timeZone:
        options.timeZone = 'Australia/Sydney'
        break
      case options.hour:
        if (options.hour > 12 || options.hour < 0) options.hour += (11 % 12) + 1
        break
      case options.minute:
        if (options.minute > 60 || options.minute < 0) options.minute = 0
        break
      case options.second:
        if (options.second > 60 || options.second < 0) options.second = 0
        break
      default:
        options.hour = 0
        options.minute = 0
        options.second = 0
        break
    }

    if (clockRegex.test(options)) s = sydneyTime
  })

  return s
}
