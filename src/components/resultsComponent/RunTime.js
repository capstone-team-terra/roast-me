import React from "react";
import { Bar } from "react-chartjs-2";
import moment from "moment";
import { Card } from "react-bootstrap";

export default function RunTime(props) {
  const { result } = props;
  const { data } = result;

  //convert data object to arrays
  const resultsArr = Object.entries(data);

  //get only past 1 year data
  const pastYear = resultsArr.slice(-12);

  //total view time
  const sumMin = Object.keys(data).reduce((acc, key) => acc + data[key], 0);
  const sumHrs = Math.floor(sumMin / 60);
  const sumDays = Math.floor(sumHrs / 24);
  const sumMonth = Math.floor(sumDays / 30);

  //define yValues & xValues to be used with your chart
  const xValues = pastYear.map((data) => moment(data[0]).format("MMM YY"));
  const yValues = pastYear.map((data) => Math.floor(data[1] / 60));

  //main data set for Graph
  const resultData = {
    labels: xValues,
    datasets: [
      {
        data: yValues,
        backgroundColor: "rgba(244, 162, 97, 0.6)",
        borderColor: "rgba(244, 162, 97, 0.6)",
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
            labelString: "Total view time (per hour)",
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
        Total hours you spent on Netflix
      </Card.Title>
      <div>
        <Bar data={resultData} options={options} width={600} height={400} />
      </div>
      <div>
        <p style={{ fontSize: "20px", fontStyle: "italic" }}>
          You watched{" "}
          <span style={{ color: "rgba(234, 87, 102)" }}>{sumHrs}</span> hours
          worth of Netflix shows since you signed up...{" "}
        </p>
        <p style={{ fontSize: "15px", fontStyle: "italic" }}>
          That is about{" "}
          <span style={{ color: "rgba(234, 87, 102)" }}>{sumDays}</span> days
          (or {sumMonth} months) you wasted.. Just saying.
        </p>
      </div>
    </Card>
  );
}
