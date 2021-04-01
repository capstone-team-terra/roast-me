import React, {useState} from 'react'
import WelcomePage from './WelcomePage'
import {Button, Container} from 'react-bootstrap'

export default function Disclaimer() {
  const[welcomePage, setWelcomePage] = useState(false)

  return (
    <div>
      {welcomePage ? <WelcomePage /> : (
      <Container>
        <p className="disclaimer-text">
        This is a satirical project and does not use real artificial intelligence. Our A.I. follows a pre-written script of jokes based on insights found in your Netflix viewing history, paired with IMDB datasets.
        </p>
        <p className="disclaimer-text">
          Write about how we store/save user data.....
        </p>
        <div className="text-center mt-5">
        <Button variant="outline-light" onClick={() => setWelcomePage(true)}>Back to Home</Button>
        </div>
      </Container>
      )}
    </div>
  )
}
