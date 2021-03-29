import React from "react";
import ShowsCount from "./ShowsCount";
import ViewCount from "./ViewCount";
import GenresCount from "./GenresCount";
import PopularityCount from "./PopularityCount";
import RunTime from "./RunTime";
import Typewriter from "typewriter-effect";
import { Col, Row } from "react-bootstrap";

export class AllResults extends React.Component {
  constructor() {
    super();
    this.state = {
      result: {},
      loaded: false,
      typed: false,
    };
    this.handleDoneTyping = this.handleDoneTyping.bind(this);
  }

  componentDidMount() {
    this.setState({ result: this.props.result, loaded: true });
  }
  handleDoneTyping() {
    this.setState({ typed: true });
  }
  render() {
    return this.state.typed ? (
      !this.state.loaded ? (
        "No results available at this moment!"
      ) : (
        <div>
          <Row className="justify-content-center">
            <Col md={6}>
              <ShowsCount result={this.state.result.views} />
            </Col>
            <Col md={6}>
              <ViewCount result={this.state.result.viewcount} />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={6}>
              <RunTime result={this.state.result.runtime} />
            </Col>
            <Col md={6}>
              <GenresCount result={this.state.result.genres} />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <PopularityCount
              result={this.state.result.popularity.percents}
              topShow={this.state.result.popularity.topShow}
            />
          </Row>
        </div>
      )
    ) : (
      <div>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("> Your Netflix was not bad.")
              .start()
              .pauseFor(2000)
              .deleteAll()
              .typeString(
                "> Your Netflix was hot-topic-threw-up-on-you-awkward-middle-school-family-friendly-comedy bad."
              )
              .start()
              .pauseFor(2000)
              .deleteAll()
              .callFunction(() => {
                this.handleDoneTyping();
              });
          }}
          options={{
            delay: 35,
          }}
        />
      </div>
    );
  }
}

export default AllResults;
