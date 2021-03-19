import React from "react";
import UploadPage from "./UploadPage";

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
    console.log("state in welcomePage", this.state);
    return (
      <div>
        {this.state.clicked ? (
          <UploadPage />
        ) : (
          <div>
            <h2>Welcome Page</h2>
            <button type="button" onClick={this.handleClick}>
              Find Out
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default WelcomePage;
