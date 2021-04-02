import React from 'react'

export default function getRuntimeFunFact (props) {
  const {result} = props
  const sumMin = Object.keys(result.runtime.data).reduce(
    (acc, key) => acc + result.runtime.data[key],
    0
  )
  const sumHrs = Math.floor(sumMin / 60)
  if (sumHrs < 24) return `called your grandma and made her day.`
  if (sumHrs < 24 * 3)
    return `fermented kimchi so you could eat something besides takeout and TV dinners for once.`
  if (sumHrs < 24 * 7)
    return `driven from New York City to Los Angeles. Or just, you know, go outside.`
  if (sumHrs < 24 * 20)
    return `grown some bok choy. Oh, you don't know what that is? Not surprising.`
  if (sumHrs < 24 * 45)
    return `lived an entire life… as a fruit fly. They come out of an egg, grow up, find a mate, lay eggs, lay more eggs, and die fulfilled in one month. Can you really say you’ve done better?`
  if (sumHrs < 24 * 30 * 6) return `taken an entire semester of classes. Have you considered that? Improving yourself and learning new skills? Or are you content with your miserable existence?`
  if (sumHrs < 24 * 30 * 3)
    return `become a licensed real estate broker. Maybe you could have bought some property yourself and finally move out of your parent’s basement.`
  return `had an entire pregnancy but I guess it’s understandable no one would trust you with a child much less yourself.`
}
