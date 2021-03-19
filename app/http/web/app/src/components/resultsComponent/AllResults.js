import React from "react";
import ShowsCount from "./ShowsCount";
import ViewCount from "./ViewCount";

export class AllResults extends React.Component {
  constructor() {
    super();
    this.state = {
      result: {},
      loaded: false,
    };
  }

  componentDidMount() {
    this.setState({ result: this.props.result, loaded: true });
  }

  render() {
    if (!this.state.loaded) {
      return "No results available at this moment!";
    }
    console.log("allresults state---->", this.state);
    return (
      <div>
        <h2>All Results</h2>
        <ShowsCount result={this.state.result.views} />
        <ViewCount result={this.state.result.viewcount} />
      </div>
    );
  }
}

export default AllResults;
