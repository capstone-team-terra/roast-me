import React, {useState} from 'react'
import {Container, Button, Navbar, Nav} from 'react-bootstrap'
import Typewriter from 'typewriter-effect'
import UploadPage from './UploadPage'
import Chatbot from './chatComponent/ChatbotPage'

const results = {
  genres: {
    Action: 10,
    Comedy: 120,
    Fantasy: 20,
    Animation: 10,
    Drama: 10,
    Crime: 30
  },
  views: {
    Friends: 300,
    'Shutter Island': 10,
    'Criminal Minds': 100,
    'Sherlock Holmes': 200,
    'Pans Labyrinth': 11,
    'The Witcher': 20,
    'The Croods': 1,
    'Breaking Bad': 50
  },
  viewcount: {
    '2020-01': 120,
    '2020-02': 300,
    '2020-03': 100,
    '2020-04': 90,
    '2020-05': 40,
    '2020-06': 50,
    '2020-07': 160,
    '2020-08': 80,
    '2020-09': 260,
    '2020-10': 150,
    '2020-11': 290,
    '2020-12': 390,
    '2021-01': 200,
    '2021-02': 120,
    '2021-03': 180
  },
  runtime: {
    data: {
      '2020-01': 3055,
      '2020-02': 2405,
      '2020-03': 3840,
      '2020-04': 2500,
      '2020-05': 3343,
      '2020-06': 2854,
      '2020-07': 4200,
      '2020-08': 2900,
      '2020-09': 2570,
      '2020-10': 2700,
      '2020-11': 2999,
      '2020-12': 2400,
      '2021-01': 3300,
      '2021-02': 4050,
      '2021-03': 4500
    },
    score: 13
  },
  popularity: {
    percents: [60, 10, 30],
    score: 23,
    topShow: ['Friends', 'Pulp Fiction', 'We Bare Bears'],
    bottomShow: ['Project Power', 'The End of the Fucking World', 'Repair Shop']
  },
  regions: {
    regions: {
      'United States': 50,
      Japan: 30,
      Canada: 25,
      Mexico: 10,
      Spain: 5
    },
    score: 15
  }
}

const Sample = () => {
  const [doneTyping, setTypingDone] = useState(false)
  const [yesButton, setYesButton] = useState(false)
  const handleDone = () => {
    setTypingDone(true)
  }
  const handleYesButton = () => {
    setYesButton(true)
  }
  return (
    <div>
      {yesButton ? (
        <UploadPage />
      ) : (
        <div>
          <Navbar
            style={{
              position: 'absolute',
              top: 30,
              left: 10,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around'
            }}
          >
            <Navbar.Brand>
              <h1 className="netflix-red">Your Netflix Statistics</h1>
            </Navbar.Brand>
            <Nav>
              <h1 style={{fontSize: 18, marginTop: '5px'}}>
                Ready to try with your own data?
              </h1>
              <Button
                variant="outline-light"
                onClick={handleYesButton}
                className="ml-3"
                style={{fontSize: 15}}
              >
                Let's get started
              </Button>
            </Nav>
          </Navbar>
          {doneTyping ? (
            <Container fluid style={{marginTop: 150}}>
              <Chatbot result={results} />
            </Container>
          ) : (
            // <Button onClick={() => setTypingDone(true)}>Testing</Button>
            <Typewriter
              onInit={typewriter => {
                typewriter
                  .typeString('Analyzing your (sample) watching history...')
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString('lol')
                  .pauseFor(2000)
                  .callFunction(() => {
                    handleDone()
                  })
                  .start()
              }}
              options={{
                delay: 20,
                deleteSpeed: 30
              }}
            />
          )}
        </div>
      )}
    </div>
  )
}
export default Sample
