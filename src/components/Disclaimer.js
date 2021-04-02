import React, {useState} from 'react'
import WelcomePage from './WelcomePage'
import {Button, Container} from 'react-bootstrap'

export default function Disclaimer() {
  const[welcomePage, setWelcomePage] = useState(false)

  return (
    <div>
      {welcomePage ? <WelcomePage /> : (
      <Container>
        <p className="disclaimer-text mb-5">
        This is a satirical project and does not use real artificial intelligence. Our A.I. follows a pre-written script of jokes based on insights found in your Netflix viewing history, paired with IMDB datasets.
        </p>
        <p className="disclaimer-text mb-5">
        The data you upload is stored in our database and associated with the username of your choice. Anyone with access to your usename will be able to view your results.
        </p>
        <p className="disclaimer-text">Alternatively, you may upload a file anonymously. The file will be stored in our database for the duration of your session but will not be retrievable via username after your session has ended.</p>
        <div className="text-center mt-5">
        <Button variant="outline-light" onClick={() => setWelcomePage(true)}>Back to Home</Button>
        </div>
      </Container>
      )}
    </div>
  )
}
