import React from 'react'
import {Button, Container, Row, Col} from 'react-bootstrap'
import GetStarted from './GetStarted'
import Typewriter from 'typewriter-effect'
import LogIn from './LogIn'

class WelcomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false,
      signingUp: false,
      loggingIn: false,
      typingDone: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
    this.handleLogIn = this.handleLogIn.bind(this)
    this.handleDoneTyping1 = this.handleDoneTyping1.bind(this)
  }
  handleClick() {
    this.setState({clicked: true})
  }
  handleSignUp() {
    this.setState({signingUp: true})
  }
  handleLogIn() {
    this.setState({loggingIn: true})
  }
  handleDoneTyping1() {
    this.setState({typingDone: true})
  }
  render() {
    return (
      <div>
        {this.state.signingUp ? (
          <GetStarted />
        ) : this.state.loggingIn ? (
          <LogIn />
        ) : (
          <Container className="text-center">
            <Row>
              <Col>
                <h1 className="netflix-red mb-5">
                  How bad is your Netflix taste?
                </h1>
                <p>
                  Our sophisticated A.I. judges your awful taste in movies and
                  TV shows. Don't worry if you don't have a Netflix account-we
                  have a surprise for you!
                </p>
              </Col>
            </Row>
            <Row>
              <Typewriter
                onInit={typewriter => {
                  typewriter
                    .typeString('Have you been here before?')
                    .pauseFor(1500)
                    .callFunction(() => {
                      this.handleDoneTyping1()
                    })
                    .start()
                }}
                options={{
                  delay: 35
                }}
              />
              {this.state.typingDone && (
                <Row>
                  <Col>
                    <Button variant="outline-light" onClick={this.handleLogIn}>
                      Yes
                    </Button>
                  </Col>
                  <Col>
                    <Button variant="outline-light" onClick={this.handleSignUp}>
                      No
                    </Button>
                  </Col>
                </Row>
              )}
            </Row>
          </Container>
        )}
      </div>
    )
  }
}

export default WelcomePage
