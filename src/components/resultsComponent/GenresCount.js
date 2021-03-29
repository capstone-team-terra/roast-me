import React from "react";
import { Pie } from "react-chartjs-2";
import { Card } from "react-bootstrap";
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
          "rgba(234, 87, 102)",
          "rgb(155, 67, 8)",
          "rgb(223, 54, 12)",
          "#666699",
          "#CC9933",
        ],
        data: numArr,
        hoverOffset: 30,
      },
    ],
  };
  return (
    <div>
      {sorted.length !== 0 ? (
        <Card
          style={{
            background: "rgb(34, 36, 41)",
            boxShadow: "0px 0px 10px 5px rgba(100, 100, 100, .6)",
            maxWidth: "700px",
            height: "690px",
            borderRadius: "10px",
            overflow: "hidden",
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
          <div>
            <Card.Title style={{ textAlign: "center", fontSize: 30 }}>
              Top 5 most viewed genres
            </Card.Title>
          </div>
          <div>
            <Pie
              data={state}
              options={{
                legend: {
                  display: true,
                },
              }}
              width={600}
              height={400}
            />
          </div>
          <div>
            <p style={{ fontSize: "20px", fontStyle: "italic" }}>
              You watched{" "}
              <span style={{ color: "rgba(234, 87, 102)" }}>
                {sorted[0][1]}{" "}
              </span>
              {sorted[0][0]} shows... Such great taste!
            </p>
          </div>
        </Card>
      ) : (
        <div>No genres data</div>
      )}
    </div>
  );
}
