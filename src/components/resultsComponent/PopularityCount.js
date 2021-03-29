import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Card } from "react-bootstrap";


export default function ShowsCount(props) {
  let { result, topShow } = props;

  result.forEach( num => {
    return Number(num).toFixed(2)
  })
  const data = {
    datasets: [{
        data: result,
        backgroundColor: ["#E50914", "#5CDB95", "#000000"]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Popular',
        'Unpopular',
        'Mediocre'
    ]
  };

  //option for Graph
  const options = {
    maintainAspectRatio: false,
    title: {
      display: true,
      // text: "Popularity",
      fontSize: 25,
    },
    rotation: 1 * Math.PI,
    circumference: 1 * Math.PI
  };
  return (
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
    <Card.Title style={{ textAlign: "center", fontSize: 30 }}>
      How mainstream your tastes are{" "}
    </Card.Title>
    <div>
      <Doughnut data={data} options={options} width={800} height={600} />
    </div>
    <p style={{ fontSize: "20px", fontStyle: "italic" }}>
      {Math.ceil(result[0])}% of what you watched is mainstream{" "}. {topShow}? Come on.
    </p>
  </Card>
  );
}
