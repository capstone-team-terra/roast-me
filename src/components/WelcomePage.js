import React from 'react'
import {Button, Container, Row, Col} from 'react-bootstrap'
import GetStarted from './GetStarted'
import Typewriter from 'typewriter-effect'
import LogIn from './LogIn'
import Sample from "./Sample"
import Footer from "./Footer"
import Disclaimer from "./Disclaimer"

class WelcomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      signingUp: false,
      loggingIn: false,
      typingDone: false,
      demo: false,
      disclaimer: false
    }
    this.handleSignUp = this.handleSignUp.bind(this)
    this.handleLogIn = this.handleLogIn.bind(this)
    this.handleDoneTyping1 = this.handleDoneTyping1.bind(this)
    this.handleDemo = this.handleDemo.bind(this)
    this.handleDisclaimer = this.handleDisclaimer.bind(this)
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
  handleDemo(){
    this.setState({demo: true})
  }
  handleDisclaimer(){
    this.setState({disclaimer: true})
  }
  render() {
    return (
      <div>
        {this.state.signingUp ? (
          <GetStarted />
        ) : this.state.loggingIn ? (
          <LogIn />
        ) : this.state.demo ? (
          <Sample />
        ) : this.state.disclaimer ? (
          <Disclaimer />
        ) : (
          <Container>
            <Container className="text-center" id="welcome">
              <Row>
                <Col>
                  <h1 className="netflix-red mb-5">
                    How bad is your Netflix taste?
                  </h1>
                  <p>
                    Our sophisticated A.I. judges your awful taste in movies and
                    TV shows. <br />
                    <span id="demo-text">
                    Don't have a Netflix account? Don't worry, you can check out our <a href="#" onClick={this.handleDemo} style={{textDecoration:'underline', color: 'white'}}>demo</a>.
                  </span>
                  </p>
                </Col>
              </Row>
              <Row className="mt-3 justify-content-center">
                <Typewriter
                  onInit={typewriter => {
                    typewriter
                      .typeString('Already have a username?')
                      .pauseFor(1000)
                      .callFunction(() => {
                        this.handleDoneTyping1()
                      })
                      .start()
                  }}
                  options={{
                    delay: 35
                  }}
                />
                </Row>
                {this.state.typingDone && (
                <Row className="mt-3 justify-content-center">
                    <Button variant="outline-light" className="mr-3" onClick={this.handleLogIn}>
                      Yes
                    </Button>
                    <Button variant="outline-light" className="ml-3" onClick={this.handleSignUp}>
                      No
                    </Button>
                </Row>
                )}
                </Container>
              <Footer handleDisclaimer={this.handleDisclaimer}/>
            </Container>
        )}
      </div>
    )
  }
}

export default WelcomePage
