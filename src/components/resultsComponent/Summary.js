import React, {useEffect} from 'react'
import {Col, Row, Container} from 'react-bootstrap'
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import VisibilitySensor from 'react-visibility-sensor'
import 'react-circular-progressbar/dist/styles.css'
import moment from 'moment'
import aos from 'aos'
import 'aos/dist/aos.css'

export default function Summary(props) {
  useEffect(() => {
    aos.init({duration: 2000})
  }, [])
  const {popularity, runtime, genres} = props
  console.log('PROPS', props)
  const totalScore = Math.floor(25 + 25 + popularity.score + runtime.score)
  const popularityScorePercentage = popularity.score / 25 * 100
  const watchTimeScorePercentage = runtime.score / 25 * 100

  //overview data
  const topshow = popularity.topShow
  const yearJoined = moment(Object.keys(runtime.data)[0]).format('YYYY')
  const totalTime = Math.floor(
    Object.keys(runtime.data).reduce((acc, key) => acc + runtime.data[key], 0) /
      60
  )
  const favGenre = Object.entries(genres).sort((a, b) => b[1] - a[1])[0][0]

  return (
    <Container className="text-center">
      <Row>
        <Col>
          <h1 className="mb-5">At a Glance</h1>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col xs sm md={3} data-aos="zoom-in-up">
          <div style={{width: '80%', margin: 'auto'}}>
            <CircularProgressbar
              value={100}
              text={`${yearJoined}`}
              strokeWidth={5}
              styles={buildStyles({
                pathTransitionDuration: 1.5,
                pathColor: '#db0000',
                textColor: 'white',
                trailColor: '#d6d6d6'
              })}
            />
          </div>
          <h2 className="mt-3" style={{fontSize: '1em'}}>
            Year Joined
          </h2>
        </Col>
        <Col xs sm md={3} data-aos="zoom-in-up">
          <div style={{width: '80%', margin: 'auto'}}>
            <CircularProgressbar
              value={100}
              text={`${topshow}`}
              strokeWidth={5}
              styles={buildStyles({
                pathTransitionDuration: 1.5,
                pathColor: '#db0000',
                textColor: 'white',
                trailColor: '#d6d6d6'
              })}
            />
          </div>
          <h2 className="mt-3" style={{fontSize: '1em'}}>
            Top Show
          </h2>
        </Col>
        <Col xs sm md={3} data-aos="zoom-in-up">
          <div style={{width: '80%', margin: 'auto'}}>
            <CircularProgressbar
              value={100}
              text={`${totalTime}hrs`}
              strokeWidth={5}
              styles={buildStyles({
                pathTransitionDuration: 1.5,
                pathColor: '#db0000',
                textColor: 'white',
                trailColor: '#d6d6d6'
              })}
            />
          </div>
          <h2 className="mt-3" style={{fontSize: '1em'}}>
            Total Time
          </h2>
        </Col>
        <Col xs sm md={3} data-aos="zoom-in-up">
          <div style={{width: '80%', margin: 'auto'}}>
            <CircularProgressbar
              value={100}
              text={`${favGenre}`}
              strokeWidth={5}
              styles={buildStyles({
                pathTransitionDuration: 1.5,
                pathColor: '#db0000',
                textColor: 'white',
                trailColor: '#d6d6d6'
              })}
            />
          </div>
          <h2 className="mt-3" style={{fontSize: '1em'}}>
            Favorite Genre
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5" data-aos="zoom-in-up">
        <Col xs sm md={6}>
          <div style={{width: '70%', margin: 'auto'}}>
            <VisibilitySensor>
              {({isVisible}) => {
                const percentage = isVisible ? totalScore : 0
                return (
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    styles={buildStyles({
                      pathTransitionDuration: 1.5
                    })}
                  />
                )
              }}
            </VisibilitySensor>
          </div>
          <p className="mt-5">
            Based on your viewing history, you are {totalScore}% basic!
          </p>
        </Col>
      </Row>
    </Container>
  )
}