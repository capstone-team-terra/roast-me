import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SingleResult from "./components/resultsComponent/SingleResult";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: {},
      loaded: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async handleSubmit(e) {
    //axios.post("/handleUpload")
    e.preventDefault();
    // const data = { name: value };
    // console.log('submit');
    // console.log(value);
    //fetch('http://127.0.0.1:3145/handleUpload', {
    //  method: 'POST',
    //   headers: {
    //     'Content-type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then(res => res.json())
    //   .then(res => console.log(res));
    console.log(e.target);
    const data = new FormData();
    data.append("submission", e.target[0].files[0]);
    const res = await fetch("http://127.0.0.1:3145/handleUpload", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: data,
    });
    var jsonRes = await res.json();
    console.log(jsonRes);
    this.setState({ loaded: true });
    this.setState({ result: jsonRes });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form
            action="/handleUpload"
            method="post"
            encType="multipart/form-data"
            onSubmit={this.handleSubmit}
          >
            Choose the file: <input type="file" name="submission" /> <br />
            <input type="submit" value="Upload" />
          </form>
        </header>
        <div>
          {this.state.loaded ? (
            <SingleResult result={this.state.result} />
          ) : (
            <div>No data yet</div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
