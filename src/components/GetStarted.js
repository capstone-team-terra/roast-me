import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import SignUp from "./SignUp";
import Sample from "./Sample";

const GetStarted = () => {
  const [showInstruction, setShowInstruction] = useState(false);
  const [no, setNo] = useState(false);
  const [showSample, setShowSample] = useState(false);
  const [okButtonDisplay, setOkButtonDisplay] = useState("inline");
  const [noButtonColor, setNoButtonColor] = useState("light");

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

  return (
    <div>
      {showInstruction ? (
        <SignUp />
      ) : showSample ? (
        <Sample />
      ) : (
        <Container className="text-left">
          <Row className="mb-1">
            <p>
              To get started, I will need to see your Netflix viewing history.
              <br />
              Don't worry, I will just take a look at what you watched. I won't
              post or change anything.
            </p>
          </Row>
          <Row className="mb-3">
            <Col>
              <Button
                variant="light"
                onClick={handleOkButton}
                style={{ display: okButtonDisplay }}
              >
                Ok, Got it
              </Button>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Button
                variant={noButtonColor}
                onClick={handleNoButton}
                className="mb-5"
              >
                No I don't want to share my view history
              </Button>
            </Col>
          </Row>
          {no && (
            <div>
              <p>
                I can't judge your Netflix without seeing your view history.{" "}
                <br />
                Do you want to see our analysis skill using our sample data ?
              </p>
              <Button
                variant="light"
                className="mb-5"
                onClick={handleSampleButton}
              >
                Show me your sample analysis
              </Button>
              <p className="mt-5">or..... have you changed your mind ?</p>

              <Button variant="light" onClick={handleOkButton}>
                Ok, fine
              </Button>
            </div>
          )}
        </Container>
      )}
    </div>
  );
};

export default GetStarted;
