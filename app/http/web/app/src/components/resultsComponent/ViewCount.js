import React from "react";
import { Line } from "react-chartjs-2";

export default function ViewCount(props) {
  const { result } = props;

  //convert data object to arrays
  const resultsArr = Object.entries(result);

  //define yValues & xValues to be used with your chart
  const yValues = resultsArr.map((data) => data[1]);
  const xValues = resultsArr.map((data) => data[0]);

  //main data set for Graph
  const resultData = {
    labels: xValues,
    datasets: [
      {
        labels: "Your View Count",
        data: yValues,
        backgroundColor: "rgba(87, 121, 234, 0.6)",
        borderColor: "rgba(87, 121, 234, 0.6)",
        pointHoverRadius: 20,
        pointHoverBorderWidth: 5,
      },
    ],
  };

  //option for Graph
  const options = {
    maintainAspectRatio: false,
    title: {
      display: true,
      text: "View Count per Date",
      fontSize: 25,
    },
  };
  return (
    <div>
      <h1>Your view count Chart</h1>
      <div>
        <Line data={resultData} options={options} width={800} height={600} />
      </div>
    </div>
  );
}
