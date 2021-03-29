import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import UploadPage from "./UploadPage";
import Sample from "./Sample";
import Typewriter from "typewriter-effect";

const GetStarted = () => {
  const [showInstruction, setShowInstruction] = useState(false);
  const [no, setNo] = useState(false);
  const [showSample, setShowSample] = useState(false);
  const [okButtonDisplay, setOkButtonDisplay] = useState("inline");
  const [noButtonColor, setNoButtonColor] = useState("outline-light");

  const [typingDone1, setTypingDone1] = useState(false);
  const [typingDone2, setTypingDone2] = useState(false);

  const handleOkButton = () => {
    setShowInstruction(true);
  };

  const handleNoButton = () => {
    setNo(true);
    setOkButtonDisplay("none");
    setNoButtonColor("dark");
  };

  const handleSampleButton = () => {
    setShowSample(true);
  };

  const handleDoneTyping1 = () => {
    setTypingDone1(true);
  };
  const handleDoneTyping2 = () => {
    setTypingDone2(true);
  };

  return (
    <div>
      {showInstruction ? (
        <UploadPage />
      ) : showSample ? (
        <Sample />
      ) : (
        <Container className="text-left">
          <Row>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "To get started, I will need to see your Netflix viewing history."
                  )
                  .pauseFor(1500)
                  .callFunction(() => {
                    handleDoneTyping1();
                  })
                  .start();
              }}
              options={{
                delay: 35,
              }}
            />
          </Row>
          {typingDone1 && (
            <Row>
              <Col md={12} className="mt-3 mb-3">
                <Button
                  variant="outline-light"
                  onClick={handleOkButton}
                  style={{ display: okButtonDisplay }}
                >
                  Ok, Got it
                </Button>
              </Col>
              <Col md={12}>
                <Button variant={noButtonColor} onClick={handleNoButton}>
                  No I don't want to share my view history
                </Button>
              </Col>
            </Row>
          )}
          {no && (
            <div className="mt-3">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      "Well, I can't judge your taste without seeing your Netflix view history. <br /> If you really don't want to, you can check out our analysis based on sample data."
                    )
                    .pauseFor(1500)
                    .callFunction(() => {
                      handleDoneTyping2();
                    })
                    .start();
                }}
                options={{
                  delay: 35,
                }}
              />
              {typingDone2 && (
                <Row>
                  <Col md={12} className="mt-3 mb-3">
                    <Button variant="outline-light" onClick={handleOkButton}>
                      Ok, fine. I will share my view history
                    </Button>
                  </Col>
                  <Col md={12}>
                    <Button
                      variant="outline-light"
                      className="mb-5"
                      onClick={handleSampleButton}
                    >
                      Show me your sample analysis first
                    </Button>
                  </Col>
                </Row>
              )}
            </div>
          )}
        </Container>
      )}
    </div>
  );
};

export default GetStarted;
