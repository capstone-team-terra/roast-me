import React, { useState } from "react";
import { Container, Col, Row, Badge, Button } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import UploadPage from "./UploadPage";
import Chatbot from "./chatComponent/ChatbotPage";

const results = {
  genres: {
    Action: 10,
    Comedy: 120,
    Fantasy: 20,
    Animation: 10,
    Drama: 10,
    Crime: 30,
  },
  views: {
    Friends: 300,
    "Shutter Island": 10,
    "Criminal Minds": 100,
    "Sherlock Holmes": 200,
    "Pans Labyrinth": 11,
    "The Witcher": 20,
    "The Croods": 1,
    "Breaking Bad": 50,
  },
  viewcount: {
    "2020-01": 120,
    "2020-02": 300,
    "2020-03": 100,
    "2020-04": 90,
    "2020-05": 40,
    "2020-06": 50,
    "2020-07": 160,
    "2020-08": 80,
    "2020-09": 260,
    "2020-10": 150,
    "2020-11": 290,
    "2020-12": 390,
    "2021-01": 200,
    "2021-02": 120,
    "2021-03": 180,
  },
  runtime: {
    "2020-01": 3055,
    "2020-02": 2405,
    "2020-03": 3840,
    "2020-04": 2500,
    "2020-05": 3343,
    "2020-06": 2854,
    "2020-07": 4200,
    "2020-08": 2900,
    "2020-09": 2570,
    "2020-10": 2700,
    "2020-11": 2999,
    "2020-12": 2400,
    "2021-01": 3300,
    "2021-02": 4050,
    "2021-03": 4500,
  },
  popularity: { percents: [20, 70, 10], score: 23, topShow: "Friends" },
};

const Sample = () => {
  const [doneTyping, setTypingDone] = useState(false);
  const [yesButton, setYesButton] = useState(false);
  const handleDone = () => {
    setTypingDone(true);
  };
  const handleYesButton = () => {
    setYesButton(true);
  };
  return (
    <div>
      {yesButton ? (
        <UploadPage />
      ) : (
        <Container fluid>
          <Container className="text-center" style={{ height: "100vh" }}>
            <h1 className="netflix-red mt-5 mb-5">
              Your Netflix Analysis <Badge variant="warning">Sample</Badge>
            </h1>
            <Row className="justify-content-center">
              <Col>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Analyzing sample data...")
                      .pauseFor(2500)
                      .deleteAll()
                      .typeString("Generating the score...")
                      .pauseFor(2500)
                      .deleteAll()
                      .typeString("Done.")
                      .pauseFor(2500)
                      .callFunction(() => {
                        handleDone();
                      })
                      .start();
                  }}
                  options={{
                    delay: 50,
                    deleteSpeed: 30,
                  }}
                />
              </Col>
            </Row>
            {doneTyping && (
              <Row className="justify-content-center mt-5 mb-5">
                <Col md={12} className="mt-5">
                  <h5>Scroll down to see how we judge your Netflix taste. </h5>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="currentColor"
                    className="bi bi-chevron-compact-down mt-5"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"
                    />
                  </svg>
                </Col>
              </Row>
            )}
          </Container>
          <Container fluid>
            <Chatbot result={results} />
          </Container>
          <Container className="mb-5 mt-5">
            <Row className="justify-content-end">
              <Col md={5}>
                <h1 style={{ fontSize: 30 }}>
                  Ready to try with your own data?
                </h1>
              </Col>
              <Col md={2}>
                <Button variant="outline-light" onClick={handleYesButton}>
                  Yes !
                </Button>
              </Col>
            </Row>
          </Container>
        </Container>
      )}
    </div>
  );
};
export default Sample;
