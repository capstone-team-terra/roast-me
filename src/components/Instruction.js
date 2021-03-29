import React from "react";
import { Card, Container } from "react-bootstrap";
import YouTube from "react-youtube";

//Instruction Youtube link & ID:
//ID: kmADyI4IOd4
//URL: https://youtu.be/kmADyI4IOd4

const Instruction = () => {
  const VideoOnReady = (event) => {
    event.target.stopVideo();
  };

  const videoOptions = {
    height: "400",
    width: "750",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <Container
      className="text-center"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p className="mb-4" align="left">
        1. Sign-in your{" "}
        <a
          href="https://www.netflix.com/YourAccount"
          target="_blank"
          rel="noreferrer noopener"
        >
          Netflix Account
        </a>{" "}
        <br />
        2. Go to Accounts <br />
        3. Open the Profile and Parental Controls to Check Viewing activity
        <br />
        4. Select Download all. <br />
        Follow the video instruction if you have more questions!
      </p>
      <Card>
        <YouTube
          videoId="kmADyI4IOd4"
          opts={videoOptions}
          onReady={VideoOnReady}
        />
      </Card>
    </Container>
  );
};

export default Instruction;
