import React from 'react'
import {Doughnut} from 'react-chartjs-2'
import {Card} from 'react-bootstrap'

export default function ShowsCount(props) {
  let {percents, score, topShow, bottomShow} = props.result

  percents.forEach(num => {
    return Number(num).toFixed(2)
  })
  const data = {
    datasets: [
      {
        data: percents,
        backgroundColor: ['#E50914', '#5CDB95', '#000000']
      }
    ],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: ['Popular', 'Unpopular', 'Mediocre']
  }

  //option for Graph
  const options = {
    maintainAspectRatio: false,
    title: {
      display: true,
      // text: "Popularity",
      fontSize: 25
    },
    rotation: 1 * Math.PI,
    circumference: 1 * Math.PI
  }
  return (
    <Card
      style={{
        background: "rgb(10,10,10)",
        boxShadow: "0px 0px 10px 5px rgba(100, 100, 100, .6)",
        maxWidth: "90vw",
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
      <Card.Title style={{textAlign: 'center', fontSize: 30}}>
        How mainstream your tastes are{' '}
      </Card.Title>
      <div>
        <Doughnut data={data} options={options} width={600} height={450} />
      </div>
      <p style={{fontSize: '20px', fontStyle: 'italic'}}>
        <span style={{color: 'rgba(234, 87, 102)'}}>
          {Math.ceil(percents[0])}%
        </span>{' '}
        of what you watched was pretty mainstream.
      </p>
      <p style={{fontSize: '15px', fontStyle: 'italic'}}>
        The most popular were: <strong>{topShow.join(' - ')}</strong>.
      </p>
      <p style={{fontSize: '15px', fontStyle: 'italic'}}>
        Your hidden gems were: <strong>{bottomShow.join(' - ')}</strong>.
      </p>
      <p style={{fontSize: '10px', fontStyle: 'italic'}}>Do better.</p>
    </Card>
  )
}
