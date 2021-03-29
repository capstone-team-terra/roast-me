import React from "react";
import { Line } from "react-chartjs-2";
import moment from "moment";
import { Card } from "react-bootstrap";

export default function ViewCount(props) {
  const { result } = props;

  //convert data object to arrays
  const resultsArr = Object.entries(result);

  //get only past 1 year data
  const pastYear = resultsArr.slice(-12);

  //total view count
  const totalSum = Object.keys(result).reduce(
    (acc, key) => acc + result[key],
    0
  );

  //define yValues & xValues to be used with your chart
  const yValues = pastYear.map((data) => data[1]);
  const xValues = pastYear.map((data) => moment(data[0]).format("MMM YY"));

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
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "total view count (per watch event)",
            fontColor: "rgb(224, 228, 228)",
            fontSize: 15,
          },
          ticks: {
            fontColor: "rgb(224, 228, 228)",
            fontSize: 15,
          },
          gridLines: {
            color: "rgb(25, 25, 25)",
          },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "*Abbreviated to only show data from past year",
            fontColor: "rgb(120, 120, 120)",
            fontSize: 15,
          },
          ticks: {
            fontColor: "rgb(224, 228, 228)",
            fontSize: 15,
          },
          gridLines: {
            color: "rgb(25, 25, 25)",
          },
        },
      ],
    },
  };
  return (
    <Card
      style={{
        background: "rgb(34, 36, 41)",
        boxShadow: "0px 0px 10px 5px rgba(100, 100, 100, .6)",
        maxWidth: "700px",
        height: "690px",
        paddingTop: "1.5em",
        paddingRight: "1.5em",
        paddingLeft: "1.5em",
        paddingBottom: "1em",
        margin: "1em",
        color: "rgb(224, 228, 228)",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Card.Title style={{ textAlign: "center", fontSize: 30 }}>
        Total number of times you watched Netflix{" "}
      </Card.Title>
      <div>
        <Line data={resultData} options={options} width={600} height={400} />
      </div>
      <p style={{ fontSize: "20px", fontStyle: "italic" }}>
        You watched total of{" "}
        <span style={{ color: "rgba(234, 87, 102)" }}> {totalSum} </span>
        shows since you signed up...
      </p>
    </Card>
  );
}
