import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import GetStarted from "./GetStarted";

class WelcomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ clicked: true });
  }

  render() {
    return (
      <div>
        {this.state.clicked ? (
          <GetStarted />
        ) : (
          <Container className="text-center">
            <Row>
              <Col>
                <h1 className="netflix-red mb-5">
                  How bad is your Netflix taste?
                </h1>
                <p>
                  Our sophisticated A.I. judges your awful taste in movies and
                  TV shows.
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button variant="outline-light" onClick={this.handleClick}>
                  Find Out
                </Button>
              </Col>
            </Row>
          </Container>
        )}
      </div>
    );
  }
}

export default WelcomePage;
