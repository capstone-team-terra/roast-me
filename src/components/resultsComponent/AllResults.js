import React from 'react'
import ShowsCount from './ShowsCount'
import ViewCount from './ViewCount'
import GenresCount from './GenresCount'
import PopularityCount from './PopularityCount'
import RegionsCount from './RegionsCount'
import RunTime from './RunTime'
import Typewriter from 'typewriter-effect'
import {Col, Row, Button, Container, Navbar} from 'react-bootstrap'
import Summary from './Summary'
import aos from 'aos'
import 'aos/dist/aos.css'

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
    this.getRuntimeFunFact = this.getRuntimeFunFact.bind(this)
    this.getGenreFunFact = this.getGenreFunFact.bind(this)
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
  getRuntimeFunFact() {
    const sumMin = Object.keys(this.state.result.runtime.data).reduce(
      (acc, key) => acc + this.state.result.runtime.data[key],
      0
    )
    const sumHrs = Math.floor(sumMin / 60)
    if (sumHrs < 24) return `called your grandma and made her day.`
    if (sumHrs < 24 * 3)
      return `fermented kimchi so you could eat something besides takeout and TV dinners for once.`
    if (sumHrs < 24 * 7)
      return `driven from New York City to Los Angeles. Or just, you know, go outside.`
    if (sumHrs < 24 * 20)
      return `grown some bok choy. Oh, you don't know what that is? Not surprising.`
    if (sumHrs < 24 * 45)
      return `lived an entire life… as a fruit fly. They come out of an egg, grow up, find a mate, lay eggs, lay more eggs, and die fulfilled in one month. Can you really say you’ve done better?`
    if (sumHrs < 24 * 30 * 6) return `taken an entire semester of classes. Have you considered that? Improving yourself and learning new skills? Or are you content with your miserable existence?`
    if (sumHrs < 24 * 30 * 3)
      return `become a licensed real estate broker. Maybe you could have bought some property yourself and finally move out of your parent’s basement.`
    return `had an entire pregnancy but I guess it’s understandable no one would trust you with a child much less yourself.`
  }
  getGenreFunFact() {
    const resultsArr = Object.entries(this.state.result.genres)
    //sort the data to large to small
    const allSorted = resultsArr.sort((a, b) => b[1] - a[1])
    const genresArr = allSorted.map(data => data[0])
    if (genresArr[0] === 'Crime')
      return (
        <p>
          SNL wrote a{' '}
          <a href="https://www.youtube.com/watch?v=J4RdcE6H4Gs">sketch</a> about
          people like you.
        </p>
      )
    if (genresArr[0] === 'Adventure')
      return `As of September 2020, adventure movies were the most popular movie genre in North America, with a total box office revenue of 63.57 billion U.S. dollars. How much of that amount was you?`
    if (genresArr[0] === 'Animation')
      return `The highest grossing animated film to date is The Lion King (2019).`
    if (genresArr[0] === 'Comedy')
      return (
        <p>
          There is something to be said that your favorite genre is comedy. Have
          you heard of the{' '}
          <a href="https://en.wikipedia.org/wiki/Sad_clown_paradox">
            Sad Clown Paradox
          </a>? 🤡
        </p>
      )
    if (genresArr[0] === 'Sci-Fi')
      return `The highest grossing science-fiction film to date is Avatar.`
    if (genresArr[0] === 'Action')
      return `You probably enjoy action because you're getting none.`
    if (genresArr[0] === 'Reality-TV')
      return `Reality-TV's title of "reality" is often criticized as being inaccurate because of claims that the genre frequently includes elements such as premeditated scripting (including a practice called "soft-scripting"), acting, urgings from behind-the-scenes crew to create specified situations of adversity and drama, and misleading editing. But you would know a thing or two about being fake.`
    return `As of September 2020, adventure movies were the most popular movie genre in North America, with a total box office revenue of 63.57 billion U.S. dollars.`
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
                  <strong> Fun Fact: </strong> The creators of this app would love to work at Netflix. Netflix, if you find this, please hire us. Our resumes are available to view <a href="https://drive.google.com/drive/folders/1uWEp2QM3cIOpk3j0_r5k7NxGmUjDlvZV">here</a>. 
                </p>
              </div>
              <Row className="justify-content-center">
                <Col data-aos="zoom-out">
                  <ViewCount result={this.state.result.viewcount} />
                </Col>
              </Row>
              <div>
                <p>
                  <strong> Fun Fact: </strong> Netflix users watched an average of 3.2 hours of video per day.
                </p>
              </div>
              <Row className="justify-content-center">
                <Col data-aos="zoom-out">
                  <RunTime result={this.state.result.runtime} />
                </Col>
              </Row>
              <div>
                <p>
                  <strong> Fun Fact: </strong> With the time you spent on
                  Netflix, you could have {this.getRuntimeFunFact()}
                </p>
              </div>
              <Row className="justify-content-center">
                <Col data-aos="zoom-out">
                  <GenresCount result={this.state.result.genres} />
                </Col>
              </Row>
              <div>
                <p>
                  <strong> Fun Fact: </strong> {this.getGenreFunFact()}
                </p>
              </div>
              <Row className="justify-content-center">
                <Col data-aos="zoom-out">
                  <PopularityCount result={this.state.result.popularity} />
                </Col>
              </Row>
              <div>
                <p>
                  <strong> Fun Fact: </strong> The most obscure film of all time
                  is something you have never heard of.
                </p>
              </div>
              <Row className="justify-content-center">
                <Col data-aos="zoom-out">
                  <RegionsCount result={this.state.result.regions} />
                </Col>
              </Row>
              <div>
                <p>
                  <strong> Fun Fact: </strong> Netflix is available in nearly every country in the world except China, Crimea, North Korea, and Syria.
                </p>
              </div>
              <small>
                Want to learn more about the RoastFLIX algorithm?{' '}
                <a
                  href="https://soundcloud.com/user-21005105-429685994/netflix-ba-boom"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click Here
                </a>
              </small>
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
