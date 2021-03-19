import React from "react";
import { Pie } from "react-chartjs-2";

export default function GenresCount(props) {
  const { result } = props;
  const resultsArr = Object.entries(result);

  //sort the data to large to small
  const allSorted = resultsArr.sort((a, b) => b[1] - a[1]);
  const sorted = allSorted.slice(0, 5);
  //define yValues & xValues to be used with your chart
  const numArr = sorted.map((data) => data[1]);
  const genresArr = sorted.map((data) => data[0]);

  const state = {
    labels: genresArr,
    datasets: [
      {
        label: "Watches",
        backgroundColor: [
          "#336699",
          "#99CCFF",
          "#999933",
          "#666699",
          "#CC9933",
          "#006666",
          "#3399FF",
          "#993300",
          "#CCCC99",
          "#666666",
          "#FFCC66",
          "#6699CC",
          "#663366",
          "#9999CC",
          "#CCCCCC",
          "#669999",
          "#CCCC66",
          "#CC6600",
          "#9999FF",
          "#0066CC",
          "#99CCCC",
        ],
        data: numArr,
      },
    ],
  };
  return (
    <div>
      {sorted.length !== 0 ? (
        <div>
          <h2>
            Hmm.... You watched1 {sorted[0][1]} {sorted[0][0]} shows...
          </h2>
          <div>
            <Pie
              data={state}
              options={{
                title: {
                  display: true,
                  text: "Your Top Genres",
                  fontSize: 20,
                },
                legend: {
                  display: true,
                },
              }}
              width={800}
            />
          </div>
        </div>
      ) : (
        <div>No genres data</div>
      )}
    </div>
  );
}
