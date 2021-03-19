import React from "react";
import { Bar } from "react-chartjs-2";

export default function ShowsCount(props) {
  const { result } = props;

  //convert data object to arrays
  const resultsArr = Object.entries(result);

  //filter only view count with more than 10
  const moreThanTen = resultsArr.filter((data) => data[1] > 10);

  //sort the data to small to large
  const sorted = moreThanTen.sort((a, b) => a[1] - b[1]);
  //define yValues & xValues to be used with your chart
  const yValues = sorted.map((data) => data[1]);
  const xValues = sorted.map((data) => data[0]);

  //main data set for Graph
  const resultData = {
    labels: xValues,
    datasets: [
      {
        labels: "Your Views",
        data: yValues,
        backgroundColor: "rgba(234, 87, 102, 0.6)",
        borderColor: "rgba(234, 87, 102, 0.6)",
      },
    ],
  };

  //option for Graph
  const options = {
    maintainAspectRatio: false,
    title: {
      display: true,
      text: "View Count per Show ",
      fontSize: 25,
    },
  };
  return (
    <div>
      {sorted.length !== 0 ? (
        <div>
          <h2>
            You watched{" "}
            <span style={{ color: "blue" }}>
              "{sorted[sorted.length - 1][0]}"
            </span>{" "}
            <span style={{ color: "red" }}>{sorted[sorted.length - 1][1]}</span>{" "}
            times!
          </h2>
          <h3 style={{ textAlign: "center" }}>Top 3 Results</h3>
          <ol
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "left",
            }}
          >
            <li>
              {sorted[sorted.length - 1][0]}: {sorted[sorted.length - 1][1]}
            </li>
            <li>
              {sorted[sorted.length - 2][0]} : {sorted[sorted.length - 2][1]}
            </li>
            <li>
              {sorted[sorted.length - 3][0]}: {sorted[sorted.length - 3][1]}
            </li>
          </ol>
          <div>
            <Bar data={resultData} options={options} width={800} height={600} />
          </div>
        </div>
      ) : (
        <div>data error</div>
      )}
    </div>
  );
}
