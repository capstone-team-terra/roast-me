import React from 'react'
import {Col, Row, Button, Container, Navbar} from 'react-bootstrap'
import aos from 'aos'
import 'aos/dist/aos.css'

import ShowsCount from './ShowsCount'
import ViewCount from './ViewCount'
import GenresCount from './GenresCount'
import PopularityCount from './PopularityCount'
import RegionsCount from './RegionsCount'
import RunTime from './RunTime'
import Typewriter from 'typewriter-effect'
import Summary from './Summary'
import RunTimeFunFact from "./FunFacts/RunTimeFunFact"
import GenreFunFacts from "./FunFacts/GenreFunFacts"

export class AllResults extends React.Component {
  constructor() {
    super()
    this.state = {
      result: {},
      loaded: false,
      typed: false,
      showResult: false,
      username: '',
      copied: false
    }
    this.handleDoneTyping = this.handleDoneTyping.bind(this)
    this.handleShowResult = this.handleShowResult.bind(this)
    this.copyToClipboard = this.copyToClipboard.bind(this)
  }

  componentDidMount() {
    aos.init({duration: 1000})
    this.setState({
      result: this.props.result,
      loaded: true,
      username: this.props.username ? this.props.username : ''
    })
  }
  handleDoneTyping() {
    let audio = new Audio(
      'https://firebasestorage.googleapis.com/v0/b/roastflix-a53f3.appspot.com/o/Netflix-Intro.wav?alt=media&token=6281d635-b6ab-4bbb-a39f-d8fd3efc2fef'
    )
    audio.play()
    this.setState({typed: true})
  }
  handleShowResult() {
    this.setState({showResult: true})
  }
  copyToClipboard() {
    let dummy = document.createElement('input')
    document.body.appendChild(dummy)
    dummy.setAttribute(
      'value',
      `https://roastflix-309106.uk.r.appspot.com/results/` + this.state.username
    )
    dummy.select()
    document.execCommand('copy')
    document.body.removeChild(dummy)
    this.setState({copied: true})
  }

  render() {
    function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
    const roastArr=["> Your Netflix was hot-topic-threw-up-on-you-awkward-middle-school-family-friendly-comedy bad.","> Your Netflix was tay-tay-fangirl bad", "> Your Netflix was former-child-star bad","Your Netflix was manic-pixie-dream-girl bad","Your Netflix was your-gen-z-is-showing bad"]
    const roastStr=roastArr[getRandomInt(0,4)]
    return this.state.typed ? (
      !this.state.loaded ? (
        'No results available at this moment!'
      ) : (
        <Container className="text-center" fluid="md">
          <Navbar
            style={{
              position: 'absolute',
              top: 30,
              left: 10,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around'
            }}
          >
            <Navbar.Brand>
              <h1 className="netflix-red">Your Netflix Statistics</h1>
            </Navbar.Brand>
          </Navbar>
          <Summary {...this.state.result} />
          <Button
            className="mt-5 mb-5"
            variant="outline-light"
            onClick={() => this.handleShowResult()}
          >
            See your statistics
          </Button>
          {this.state.showResult ? (
            <Container className="text-center" fluid="md">
              <Row className="justify-content-center">
                <Col data-aos="zoom-out">
                  <ShowsCount result={this.state.result.views} />
                </Col>
              </Row>
              <div>
                <p>
                  <strong style={{color: 'red'}}> Fun Fact: </strong> The creators of this app would love to work at Netflix. Netflix, if you find this, please hire us. Our resumes are available to view <a href="https://drive.google.com/drive/folders/1uWEp2QM3cIOpk3j0_r5k7NxGmUjDlvZV">here</a>.
                </p>
              </div>
              <Row className="justify-content-center">
                <Col data-aos="zoom-out">
                  <ViewCount result={this.state.result.viewcount} />
                </Col>
              </Row>
              <div>
                <p>
                  <strong style={{color: 'red'}}> Fun Fact: </strong> Netflix users watched an average of 3.2 hours of video per day.
                </p>
              </div>
              <Row className="justify-content-center">
                <Col data-aos="zoom-out">
                  <RunTime result={this.state.result.runtime} />
                </Col>
              </Row>
              <div>
                  <p>
                    <strong style={{color: 'red'}}> Fun Fact: </strong> With the time you spent on Netflix, you could have <RunTimeFunFact result={this.state.result} />
                    </p>
              </div>
              <Row className="justify-content-center">
                <Col data-aos="zoom-out">
                  <GenresCount result={this.state.result.genres} />
                </Col>
              </Row>
              <div>
                  <p>
                    <strong style={{color: 'red'}}> Fun Fact: </strong>
                    <GenreFunFacts result={this.state.result}/>
                    </p>
              </div>
              <Row className="justify-content-center">
                <Col data-aos="zoom-out">
                  <PopularityCount result={this.state.result.popularity} />
                </Col>
              </Row>
              <div>
                  <p><strong style={{color: 'red'}}> Fun Fact: </strong> The most obscure film of all time is something you have never heard of.</p>
              </div>
              {this.state.username.length > 0 ? (<div> <p> Interested in sharing your results with a friend?</p>
              <Button className="mt-5 mb-5"
            variant="outline-light" onClick={this.copyToClipboard}>Copy link!</Button>
              {this.state.copied ? <div> Copied to clipboard! </div> : <div> </div>} </div>) : <div> </div> }

              <Row className="justify-content-center">
                <Col data-aos="zoom-out">
                  <RegionsCount result={this.state.result.regions} />
                </Col>
              </Row>
              <div>
                <p>
                  <strong style={{color: 'red'}}> Fun Fact: </strong> Netflix is available in nearly every country in the world except China, Crimea, North Korea, and Syria.
                </p>
              </div>
              {this.state.username.length > 0 ? (
                <div>
                  {' '}
                  <p> Interested in sharing your results with a friend?</p>
                  <Button
                    className="mt-5 mb-5"
                    variant="outline-light"
                    onClick={this.copyToClipboard}
                  >
                    Copy link!
                  </Button>
                  {this.state.copied ? (
                    <div> Copied to clipboard! </div>
                  ) : (
                    <div> </div>
                  )}{' '}
                </div>
              ) : (
                <div> </div>
              )}
              <div className='mt-5 mb-3' style={{fontSize: '0.8em'}}>
                Want to learn more about the RoastFLIX algorithm?{' '}
                <a
                  href="https://soundcloud.com/user-21005105-429685994/netflix-ba-boom"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click Here
                </a>
              </div>
            </Container>
          ) : (
            ''
          )}
        </Container>
      )
    ) : (
      <div>
        {/* <Button onClick={() => this.handleDoneTyping()}>Testing</Button> */}
        <Typewriter
          onInit={typewriter => {
            typewriter
              .typeString('> Your Netflix was not bad.')
              .start()
              .pauseFor(2000)
              .deleteAll()
              .typeString(
                roastStr
              )
              .start()
              .pauseFor(1000)
              .callFunction(() => {
                this.handleDoneTyping()
              })
          }}
          options={{
            delay: 35
          }}
        />
      </div>
    )
  }
}

export default AllResults
