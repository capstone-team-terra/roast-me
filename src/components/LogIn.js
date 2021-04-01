import React from 'react'
import {Button, Container, Row, Col} from 'react-bootstrap'
import AllResults from './resultsComponent/AllResults'
import {app} from '../base'
import Loading from './resultsComponent/Loading'

class LogIn extends React.Component {

  constructor() {
    super()
    this.state = {
      value: '',
      loggedIn: false,
      attempt: false,
      loading: false,
      loaded: false,

      result: {}
    }
    this.handleLogIn = this.handleLogIn.bind(this)
  }

  componentDidMount() {
    let path = window.location.pathname.split("/");
    if (path.length > 2) {
      let username = path.slice(2).join('');
      this.setState({ value: username });
      app
      .database()
      .ref()
      .child(username)
      .once('value', async snap => {
        if (snap.exists()) {
          this.setState({loading: true})
          const downloadURL = snap.val()
          const res = await fetch('/handleUpload', {
            method: 'POST',
            headers: {
              'Access-Control-Allow-Origin': '*'
            },
            body: downloadURL
          })
          const jsonRes = await res.json()
          this.setState({loggedIn: true, result: jsonRes, loading: false, loaded: true})
        } else {
          this.setState({attempt: true})
        }
      })
    }
  }

  handleLogIn(e) {
    e.preventDefault()
    console.log('STATE ---->', this.state)
    const username = this.state.value
    app
      .database()
      .ref()
      .child(username)
      .once('value', async snap => {
        if (snap.exists()) {
          this.setState({loading: true,})
          const downloadURL = snap.val()
          const res = await fetch('/handleUpload', {
            method: 'POST',
            headers: {
              'Access-Control-Allow-Origin': '*'
            },
            body: downloadURL
          })
          const jsonRes = await res.json()
          this.setState({loggedIn: true, result: jsonRes, loading: false, loaded: true})
        } else {
          this.setState({attempt: true})
        }
      })
  }

    render() {
    return (
      <Container>
        {this.state.loaded && this.state.loggedIn ? (
          <AllResults result={this.state.result} username={this.state.value}/>
        ) : this.state.loading ? (
          <Loading />) : (
            <form>
            <div className="form-group">
              <label>Enter your Username to access your results:</label>
              <Col>
                <Row className="mt-3">
                  <input type="userName" placeholder="Your Username Here" value={this.state.value} onChange={(e) => {this.setState({value: e.target.value })}}/>
                </Row>
                <Row className="mt-4">
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
