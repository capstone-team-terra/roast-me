import React from 'react'
import {Polar} from 'react-chartjs-2'
import {Card} from 'react-bootstrap'
import ChartCard from './Styling/ChartTheme'

export default function RegionsCount(props) {
  console.log('regions props', props)
  const {regions, score} = props.result

  const regionsCount = Object.entries(regions)
  //sort the data to large to small
  const sortedRegions = regionsCount.sort((a, b) => b[1] - a[1]).slice(0, 5)
  //define yValues & xValues to be used with your chart
  const count = sortedRegions.map(data => data[1])
  const total = count.reduce((acc, sum) => acc + sum)
  const percents = count.map(val => Math.ceil(val / total * 100))
  const labels = sortedRegions.map(data => data[0])

  const data = {
    labels: labels,
    datasets: [
      {
        data: percents,
        backgroundColor: ['#db0000', '#333333', '#d3d3d3', '#f5f3f4', '#52b3d9']
      }
    ]
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
    scale: {
      display: true,
      gridLines: {
        color: 'rgb(25, 25, 25)'
      },
      scaleLabel: {
        display: true,
        labelString: '*For Netflix content available through 2019',
        fontColor: 'rgb(120, 120, 120)',
        fontSize: 15
      }
    }
  }

  return (
    <ChartCard>
      <Card>
        <Card.Title style={{textAlign: 'center', fontSize: 40}}>
          Where your favorites come from{' '}
        </Card.Title>
        <div>
          <Polar data={data} options={options} width={800} height={500} />
        </div>
        <p style={{fontSize: '20px', fontStyle: 'italic'}}>
          <span style={{color: 'rgba(234, 87, 102)'}}>{percents[0]}%</span> of
          what you watched was from {labels[0]}
        </p>
        <div style={{fontSize: '15px', fontStyle: 'italic'}}>
          Might be time to expand your horizons. Subtitles aren't that scary.
        </div>
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
