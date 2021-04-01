import React from 'react'
import {Container} from 'react-bootstrap'

export default function Footer(props) {
  return (
    <Container id="footer">
        <p className="mr-3">
        A project by <strong>DANY</strong></p>
        <p>
        Data questions ? <a href="#" onClick={props.handleDisclaimer} style={{textDecoration: 'underline', color: 'gray'}}>click here</a></p>
      </Container>
  )
}
