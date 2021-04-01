import React from 'react'
import {Button, Container, Row, Col} from 'react-bootstrap'
import UploadPage from './UploadPage'
import {app} from '../base'

class SignUp extends React.Component {
  constructor() {
    super()
    this.state = {
      signedUp: false,
      attempt: false,
      username: ''
    }
    this.handleSignUp = this.handleSignUp.bind(this)
    this.handleAnon = this.handleAnon.bind(this)
  }
  handleSignUp(e) {
    e.preventDefault()
    const username = e.target.form[0].value
    app
      .database()
      .ref()
      .child(username)
      .once('value', snap => {
        if (snap.exists()) {
          console.log('ERR: USERNAME ALREADY TAKEN')
          this.setState({attempt: true})
        } else {
          this.setState({signedUp: true, username: username})
        }
      })
  }
  handleAnon() {
    this.setState({signedUp: true, username: ''})
  }
  render() {
    return (
      <Container>
        {this.state.signedUp ? (
          <UploadPage username={this.state.username} />
        ) : (<Row>
          <Col>
            <form>
            <div className="form-group">
              <label>We need a username to keep track of your results:</label>
                <Row className="mt-3">
                  <input type="userName" placeholder=" Your Username Here" />
                </Row>
                <Row className="mt-4">
                  <Button
                    type="submit"
                    variant="outline-light"
                    onClick={this.handleSignUp}
                  >
                    Submit
                  </Button>
                </Row>
              
            </div>
            {this.state.attempt ? (
              <div>
                {' '}
                lol someone beat you to that name. can't you be a little more
                original?{' '}
              </div>
            ) : (
              <div> </div>
            )}
          </form></Col>
          <Col>
              You may proceed anonymously. Just keep in mind your results will not be shareable if you do not have a username. <br />
              <Button
                    type="button"
                    variant="outline-light"
                    onClick={this.handleAnon}
                  >
                    Proceed anonymously.
              </Button>
          </Col></Row>
        )}
      </Container>
      
    )
  }
}
export default SignUp
