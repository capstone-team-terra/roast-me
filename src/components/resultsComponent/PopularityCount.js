import React from 'react'
import {Doughnut} from 'react-chartjs-2'
import {Card} from 'react-bootstrap'
import ChartCard from './Styling/ChartTheme'

export default function ShowsCount(props) {
  let {percents, score, topShow, bottomShow} = props.result

  percents.forEach(num => {
    return Number(num).toFixed(2)
  })
  const data = {
    datasets: [
      {
        data: percents,
        backgroundColor: ['#db0000', '#f5f3f4', '#52b3d9']
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
      fontSize: 25
    },
    legend: {
      display: true,
      labels: {
        fontColor: 'rgb(224, 228, 228)',
        fontSize: 18
      }
    },
    rotation: 1 * Math.PI,
    circumference: 1 * Math.PI
  }
  return (
    <ChartCard>
      <Card>
        <Card.Title style={{textAlign: 'center', fontSize: 40}}>
          How mainstream your tastes are{' '}
        </Card.Title>
        <div>
          <Doughnut data={data} options={options} width={500} height={360} />
        </div>
        <p style={{fontSize: '20px', fontStyle: 'italic'}} className="mt-2">
          <span style={{color: 'rgba(234, 87, 102)'}}>
            {Math.ceil(percents[0])}%
          </span>{' '}
          of what you watched was pretty mainstream.
          <br />
          The most popular were: <strong>{topShow.join(' - ')}</strong>.
          <br />
          Your hidden gems were: <strong>{bottomShow.join(' - ')}</strong>.
        </p>
        <p
          style={{
            fontSize: '10px',
            fontStyle: 'italic',
            color: 'rgba(82, 179, 217, 1)'
          }}
        >
          +{score} Basic Points
        </p>
      </Card>
    </ChartCard>
  )
}
