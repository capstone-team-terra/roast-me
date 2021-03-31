import React from 'react'
import ShowsCount from './ShowsCount'
import ViewCount from './ViewCount'
import GenresCount from './GenresCount'
import PopularityCount from './PopularityCount'
import RegionsCount from './RegionsCount'
import RunTime from './RunTime'
import Typewriter from 'typewriter-effect'
import {Col, Row, Button, Container} from 'react-bootstrap'
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
      showResult: false
    }
    this.handleDoneTyping = this.handleDoneTyping.bind(this)
    this.handleShowResult = this.handleShowResult.bind(this)
  }

  componentDidMount() {
    aos.init({duration: 1000})
    this.setState({result: this.props.result, loaded: true})
  }
  handleDoneTyping() {
    this.setState({typed: true})
  }
  handleShowResult() {
    this.setState({showResult: true})
  }

  render() {
    return this.state.typed ? (
      !this.state.loaded ? (
        'No results available at this moment!'
      ) : (
        <Container className="text-center" fluid="md">
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
              <Row className="justify-content-center">
                <Col data-aos="zoom-out">
                  <ViewCount result={this.state.result.viewcount} />
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col data-aos="zoom-out">
                  <RunTime result={this.state.result.runtime} />
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col data-aos="zoom-out">
                  <GenresCount result={this.state.result.genres} />
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col data-aos="zoom-out">
                  <PopularityCount result={this.state.result.popularity} />
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col data-aos="zoom-out">
                  <RegionsCount result={this.state.result.regions} />
                </Col>
              </Row>
            </Container>
          ) : (
            ''
          )}
        </Container>
      )
    ) : (
      <div>
        {/* <Button onClick={() => this.handleDoneTyping(true)}>Testing</Button> */}
        <Typewriter
          onInit={typewriter => {
            typewriter
              .typeString('> Your Netflix was not bad.')
              .start()
              .pauseFor(2000)
              .deleteAll()
              .typeString(
                '> Your Netflix was hot-topic-threw-up-on-you-awkward-middle-school-family-friendly-comedy bad.'
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
