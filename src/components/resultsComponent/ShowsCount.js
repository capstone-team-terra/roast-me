import React from "react";
import { HorizontalBar } from "react-chartjs-2";
import { Card } from "react-bootstrap";

export default function ShowsCount(props) {
  const { result } = props;

  //convert data object to arrays
  const resultsArr = Object.entries(result);

  //sort the data to small to large
  const sorted = resultsArr.sort((a, b) => b[1] - a[1]);

  //filter only the top 5 most viewed shows/movies
  const limitToTopFive = sorted.slice(0, 5);

  const top1Name = limitToTopFive[0][0];
  const top1Count = limitToTopFive[0][1];

  //define yValues & xValues to be used with your chart
  const yValues = limitToTopFive.map((data) => data[1]);
  const xValues = limitToTopFive.map((data) => data[0]);

  //main data set for Graph
  const resultData = {
    labels: xValues,
    datasets: [
      {
        data: yValues,
        backgroundColor: "rgba(234, 87, 102, 0.6)",
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
            fontColor: "rgb(224, 228, 228)",
          },
          gridLines: {
            color: "rgb(25, 25, 25)",
          },
          ticks: {
            fontColor: "rgb(224, 228, 228)",
            fontSize: 15,
          },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Total view count (per watch event)",
            fontColor: "rgb(224, 228, 228)",
            fontSize: 15,
          },
          gridLines: {
            color: "rgb(25, 25, 25)",
          },
          ticks: {
            fontColor: "rgb(224, 228, 228)",
            fontSize: 15,
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
        Top 5 most viewed shows
      </Card.Title>
      <div>
        <HorizontalBar
          data={resultData}
          options={options}
          width={600}
          height={400}
        />
      </div>
      <p style={{ fontSize: "20px", fontStyle: "italic" }}>
        Your most viewed show was <strong>{top1Name}</strong> and you watched it
        <span style={{ color: "rgba(234, 87, 102)" }}> {top1Count}</span> times
        ! Wow.
      </p>
    </Card>
  );
}
