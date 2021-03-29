import React from "react";
import ChatbotPage from "./chatComponent/ChatbotPage";
import Typewriter from "typewriter-effect";
import Instruction from "./Instruction";
import { Form, Button, Card } from "react-bootstrap";
import {app} from '../base'

class UploadPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: {},
      loaded: false,
      Loading: false,
      fileChosen: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  async handleSubmit(e) {
    e.preventDefault();
    const file = e.target[0].files[0]
    if (e.target[0].files.length > 0) {
      this.setState({
        loading: true,
        loaded: false,
        result: {},
        fileChosen: true,
      });
    } else {
      console.log("no file chosen");
    }
    const storageRef = app.storage().ref()
    function keyGenerator(n) {
      const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
      let randomString = '';
      for (let i = 0; i < n; i++) {
          let index = Math.floor(Math.random() * ((characters.length) - 1));
          randomString += characters[index];
      }
      return randomString;
    }
    const fileRef = storageRef.child(keyGenerator(3)) // rename file here
    await fileRef.put(file)
    await fileRef.put(file)
    const downloadURL = await fileRef.getDownloadURL()
    const res = await fetch("/handleUpload", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: downloadURL
    })
    // if (e.target[0].files.length > 0) {
    //   this.setState({
    //     loading: true,
    //     loaded: false,
    //     result: {},
    //     fileChosen: true,
    //   });
    // } else {
    //   console.log("no file chosen");
    // }
    // const data = new FormData();
    // data.append("submission", e.target[0].files[0]);
    // const res = await fetch("http://127.0.0.1:3145/handleUpload", {
    //   method: "POST",
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //   },
    //   body: data,
    // });
    var jsonRes = await res.json();
    this.setState({ loaded: true, result: jsonRes, loading: false });
  }

  render() {
    return (
      <div>
        {this.state.loaded ? (
          <ChatbotPage result={this.state.result} />
        ) : this.state.loading ? (
          <div>
            <img
              alt="loading"
              src="https://firebasestorage.googleapis.com/v0/b/roastflix-a53f3.appspot.com/o/Netflix-Loading.gif?alt=media&token=a0196e4a-1e7e-40eb-8793-45abfd359695"
            />
            <Typewriter
              options={{
                delay: 20,
                deleteSpeed: 5,
                strings: [
                  "Analyzing your watching history...",
                  "lol",
                  "omg",
                  "okay hold up",
                ],
                autoStart: true,
              }}
            />
          </div>
        ) : (
          <div>
            <div
              style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>
                <p className="mb-5">
                  Great! <br />
                  Please upload your Netflix viewing history here
                </p>
                <Card>
                  <Card.Body style={{ color: "black" }}>
                    <Form
                      action="/handleUpload"
                      method="post"
                      encType="multipart/form-data"
                      onSubmit={this.handleSubmit}
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <Form.File
                        name="submission"
                        style={{
                          fontSize: 20,
                          backgroundColor: "lightgray",
                          borderColor: "red",
                        }}
                      />
                      <Button
                        type="submit"
                        value="Upload"
                        className="mt-3"
                        style={{ alignSelf: "flex-end" }}
                      >
                        Upload
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
                <p className="mt-5">
                  Don't know how to get your viewing history?
                </p>
                <p>It's easy! Scroll down to see how</p>
              </div>
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
            </div>
            <Instruction />
          </div>
        )}
      </div>
    );
  }
}
export default UploadPage;
