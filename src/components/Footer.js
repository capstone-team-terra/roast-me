import React from 'react'
import {Container} from 'react-bootstrap'

export default function Footer(props) {
  return (
    <Container id="footer">
        <p className="mr-3">
        By Alisa Su, Danny Serrano, Natalie Rojas, Yizhou Shui</p>
        <p>
        Data questions ? <a href="#" onClick={props.handleDisclaimer} style={{textDecoration: 'underline', color: 'gray'}}>click here</a></p>
      </Container>
  )
}
