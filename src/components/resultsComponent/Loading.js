import React from 'react'
import Typewriter from 'typewriter-effect'

export default function Loading() {
  return (
    <div>
      <img
      alt="loading"
              src="https://firebasestorage.googleapis.com/v0/b/roastflix-a53f3.appspot.com/o/Netflix-Loading.gif?alt=media&token=a0196e4a-1e7e-40eb-8793-45abfd359695"
            />
            <Typewriter
              options={{
                delay: 20,
                deleteSpeed: 5,
                strings: [
                  'Analyzing your watching history...',
                  'lol',
                  'omg',
                  'okay hold up'
                ],
                autoStart: true
              }}
            />
    </div>
  )
}



{/* <Typewriter
          onInit={typewriter => {
            typewriter
              .typeString('> Your Netflix was not bad.')
              .start()
              .pauseFor(2000)
              .deleteAll()
              .typeString(
                '> Your Netflix was hot-topic-threw-up-on-you-awkward-middle-school-family-friendly-comedy bad.'
              )
              .start()
              .pauseFor(1000)
              .callFunction(() => {
                props.handleDoneTyping()
              })
          }}
          options={{
            delay: 35
          }}
        /> */}
