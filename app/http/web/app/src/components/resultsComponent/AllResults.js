import React from "react";
import ShowsCount from "./ShowsCount";
import GenresCount from "./GenresCount";
import PopularityCount from "./PopularityCount"

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

    return (
      <div>
        <h2>All Results</h2>
        <ShowsCount result={this.state.result.views} />
        <GenresCount result={this.state.result.genres} />
        <PopularityCount result={this.state.result.popularity} />

      </div>
    );
  }
}

export default AllResults;
