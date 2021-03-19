import React from "react";
import { Doughnut } from "react-chartjs-2";

export default function ShowsCount(props) {
  let { result } = props;

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
      text: "Popularity",
      fontSize: 25,
    },
  };
  return (
    <div>
          <div>
            <Doughnut data={data} options={options} width={800} height={600} />
          </div>
    </div>
  );
}
