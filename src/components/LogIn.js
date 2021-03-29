import React from 'react'
import {Button, Container, Row, Col} from 'react-bootstrap'
import AllResults from './resultsComponent/AllResults'
import {app} from '../base'

class LogIn extends React.Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      attempt: false,
      result: {}
    }
    this.handleLogIn = this.handleLogIn.bind(this)
  }
  handleLogIn(e) {
    e.preventDefault()
    const username = e.target.form[0].value
    app
      .database()
      .ref()
      .child(username)
      .once('value', async snap => {
        if (snap.exists()) {
          const downloadURL = snap.val()
          const res = await fetch('/handleUpload', {
            method: 'POST',
            headers: {
              'Access-Control-Allow-Origin': '*'
            },
            body: downloadURL
          })
          const jsonRes = await res.json()
          this.setState({loggedIn: true, result: jsonRes})
        } else {
          this.setState({attempt: true})
        }
      })
  }
  render() {
    return (
      <Container>
        {this.state.loggedIn ? (
          <AllResults result={this.state.result} />
        ) : (
          <form>
            <div className="form-group">
              <label>Enter your Username to access your results:</label>
              <Col>
                <Row>
                  <input type="userName" placeholder="Your Username Here" />
                </Row>
                <Row>
                  <Button
                    type="submit"
                    variant="outline-light"
                    onClick={this.handleLogIn}
                  >
                    Submit
                  </Button>
                </Row>
              </Col>
            </div>
            {this.state.attempt ? (
              <div> did you forget your own name? dude... </div>
            ) : (
              <div> </div>
            )}
          </form>
        )}
      </Container>
    )
  }
}
export default LogIn
