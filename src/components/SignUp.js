import React from 'react'
import {Button, Container, Row, Col} from 'react-bootstrap'
import UploadPage from './UploadPage'

class SignUp extends React.Component {
  constructor() {
    super()
    this.state = {
      signedUp: false
    }
    this.handleSignUp = this.handleSignUp.bind(this)
  }
  handleSignUp() {
    this.setState({signedUp: true})
  }
  render() {
    return (
      <Container>
        {this.state.signedUp ? (
          <UploadPage />
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
          </form>
        )}
      </Container>
    )
  }
}
export default SignUp
