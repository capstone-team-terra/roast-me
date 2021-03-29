import React from 'react'
import {Button, Container, Row, Col} from 'react-bootstrap'
import AllResults from './resultsComponent/AllResults'
class LogIn extends React.Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false
    }
    this.handleLogIn = this.handleLogIn.bind(this)
  }
  handleLogIn() {
    this.setState({loggedIn: true})
  }
  render() {
    return (
      <Container>
        {this.state.loggedIn ? (
          <AllResults />
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
          </form>
        )}
      </Container>
    )
  }
}
export default LogIn
