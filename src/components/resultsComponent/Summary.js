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
  const {popularity, runtime, genres, regions, viewcount} = props
  console.log('PROPS', props)
  const totalScore = Math.floor(
    genres.score + regions.score + popularity.score + runtime.score
  )

  //overview data
  const totalViews = Object.keys(viewcount).reduce(
    (acc, key) => acc + viewcount[key],
    0
  )

  const yearJoined = moment(Object.keys(runtime.data)[0]).format('YYYY')
  const totalTime = Math.floor(
    Object.keys(runtime.data).reduce((acc, key) => acc + runtime.data[key], 0) /
      60
  )
  const favGenre = Object.entries(genres.data).sort((a, b) => b[1] - a[1])[0][0]

  return (
    <Container className="text-center" style={{marginTop: 150}}>
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
              strokeWidth={3}
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
              text={`${totalTime}hrs`}
              strokeWidth={3}
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
              text={`${totalViews}`}
              strokeWidth={3}
              styles={buildStyles({
                pathTransitionDuration: 1.5,
                pathColor: '#db0000',
                textColor: 'white',
                trailColor: '#d6d6d6',
              })}
            />
          </div>
          <h2 className="mt-3" style={{fontSize: '1em'}}>
            Total Views
          </h2>
        </Col>
        <Col xs sm md={3} data-aos="zoom-in-up">
          <div style={{width: '80%', margin: 'auto'}}>
            <CircularProgressbar
              value={100}
              text={`${favGenre}`}
              strokeWidth={3}
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
      <Row className="justify-content-center mt-5 mb-5" data-aos="zoom-in-up">
        <Col xs sm md={6}>
          <div style={{width: '70%', margin: 'auto'}}>
            <VisibilitySensor>
              {({isVisible}) => {
                const percentage = isVisible ? totalScore : 0
                return (
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    strokeWidth={6}
                    styles={buildStyles({
                      pathTransitionDuration: 1.5
                    })}
                  />
                )
              }}
            </VisibilitySensor>
          </div>
        </Col>
        <Col xs sm md={6}>
        <p className="mt-3 mb-2">
            Based on the following data, you are {totalScore}% basic!
          </p>
          <p className="mt-3">
            {' '}
            <strong>Here's how your score breaks down:</strong>
          </p>
          <Row className="justify-content-center">
            <Col xs sm md={6}>
              <Row className="justify-content-center">Watchtime:</Row>
              <Row className="justify-content-center">Top Genres:</Row>
              <Row className="justify-content-center">Popularity:</Row>
              <Row className="justify-content-center">Diversity:</Row>
              <Row className="font-weight-bold justify-content-center">
                Composite Score:
              </Row>
            </Col>
            <Col style={{color: 'rgba(82, 179, 217, 1)'}} xs sm md={6}>
              <Row className="justify-content-center">{runtime.score}/25</Row>
              <Row className="justify-content-center">{genres.score}/25</Row>
              <Row className="justify-content-center">
                {popularity.score}/25
              </Row>
              <Row className="justify-content-center">{regions.score}/25</Row>
              <Row className="font-weight-bold justify-content-center">
                {totalScore}/100
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
