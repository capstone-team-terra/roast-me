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
      username: ""
    }
    this.handleSignUp = this.handleSignUp.bind(this)
  }
  handleSignUp(e) {
    e.preventDefault()
    const username = e.target.form[0].value
    app.database().ref().child(username).once("value", snap => {
      if (snap.exists()) {
        console.log('ERR: USERNAME ALREADY TAKEN')
        this.setState({attempt: true})
      }
      else {
        this.setState({signedUp: true, username: username})
      }
    })
  }
  render() {
    return (
      <Container>
        {this.state.signedUp ? (
          <UploadPage username={this.state.username}/>
        ) : (
          <form>
            <div className="form-group">
              <label>We need a username to keep track of your results:</label>
              <Col>
                <Row>
                  <input type="userName" placeholder=" Your Username Here" />
                </Row>
                <Row>
                  <Button
                    type="submit"
                    variant="outline-light"
                    onClick={this.handleSignUp}
                  >
                    Submit
                  </Button>
                </Row>
              </Col>
            </div>
            {this.state.attempt ? <div> lol someone beat you to that name. can't you be a little more original? </div> : <div> </div>}
          </form>
        )}
      </Container>
    )
  }
}
export default SignUp
