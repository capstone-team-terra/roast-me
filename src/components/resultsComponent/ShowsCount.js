import React from 'react'
import {HorizontalBar} from 'react-chartjs-2'
import {Card} from 'react-bootstrap'
import ChartCard from './Styling/ChartTheme'

export default function ShowsCount(props) {
  const {result} = props

  //convert data object to arrays
  const resultsArr = Object.entries(result)

  //sort the data to small to large
  const sorted = resultsArr.sort((a, b) => b[1] - a[1])

  //filter only the top 5 most viewed shows/movies
  const limitToTopFive = sorted.slice(0, 5)

  const top1Name = limitToTopFive[0][0]
  const top1Count = limitToTopFive[0][1]

  //define yValues & xValues to be used with your chart
  const xValues = limitToTopFive.map(data => data[1])
  const yValues = limitToTopFive.map(data => data[0])

  //main data set for Graph
  const resultData = {
    labels: yValues,
    datasets: [
      {
        data: xValues,
        backgroundColor: '#db0000',
        borderColor: 'white',
      }
    ]
  }

  //option for Graph
  const options = {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      yAxes: [
        {
          scaleLabel: {
            fontColor: 'rgb(224, 228, 228)'
          },
          gridLines: {
            color: 'rgb(25, 25, 25)'
          },
          ticks: {
            fontColor: 'rgb(224, 228, 228)',
            fontSize: 15
          }
        }
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Total view count (per watch event)',
            fontColor: 'rgb(224, 228, 228)',
            fontSize: 15
          },
          gridLines: {
            color: 'rgb(25, 25, 25)'
          },
          ticks: {
            fontColor: 'rgb(224, 228, 228)',
            fontSize: 15,
            max: Math.ceil(Math.max(...xValues) / 10) * 10,
            min: 0
          }
        }
      ]
    }
  }
  return (
    <ChartCard>
      <Card>
        <Card.Title style={{textAlign: 'center', fontSize: 30}}>
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
        <p style={{fontSize: '20px', fontStyle: 'italic'}}>
          Your most viewed show was <strong>{top1Name}</strong> and you watched
          it
          <span style={{color: 'rgba(234, 87, 102)'}}> {top1Count}</span> times
          ! Wow.
        </p>
      </Card>
    </ChartCard>
  )
}
