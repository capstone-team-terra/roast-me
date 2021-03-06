import React from 'react'
import {Line} from 'react-chartjs-2'
import moment from 'moment'
import {Card} from 'react-bootstrap'
import ChartCard from './Styling/ChartTheme'

export default function ViewCount(props) {
  const {result} = props

  //convert data object to arrays
  const resultsArr = Object.entries(result)

  //get only past 1 year data
  const pastYear = resultsArr.slice(-12)

  //peak month
  let max = 0
  let maxMonth = ''
  for (let i=0; i<pastYear.length; i++){
    if (pastYear[i][1] > max){
      max= pastYear[i][1]
      maxMonth = pastYear[i][0]
    }
  }
  maxMonth = moment(maxMonth).format('MMMM')

  //total view count
  const totalSum = Object.keys(result).reduce(
    (acc, key) => acc + result[key],
    0
  )

  //define yValues & xValues to be used with your chart
  const yValues = pastYear.map(data => data[1])
  const xValues = pastYear.map(data => moment(data[0]).format('MMM YY'))

  //main data set for Graph
  const resultData = {
    labels: xValues,
    datasets: [
      {
        labels: 'Your View Count',
        data: yValues,
        backgroundColor: '#db0000',
        borderColor: 'white',
        pointHoverRadius: 20,
        pointHoverBorderWidth: 5
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
            display: true,
            labelString: 'total view count (per watch event)',
            fontColor: 'rgb(224, 228, 228)',
            fontSize: 15
          },
          ticks: {
            fontColor: 'rgb(224, 228, 228)',
            fontSize: 15
          },
          gridLines: {
            color: 'rgb(25, 25, 25)'
          }
        }
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: '*Abbreviated to only show data from past year',
            fontColor: 'rgb(120, 120, 120)',
            fontSize: 15
          },
          ticks: {
            fontColor: 'rgb(224, 228, 228)',
            fontSize: 15
          },
          gridLines: {
            color: 'rgb(25, 25, 25)'
          }
        }
      ]
    }
  }
  return (
    <ChartCard>
      <Card>
        <Card.Title style={{textAlign: 'center', fontSize: 40}}>
          Number of times you watched Netflix{' '}
        </Card.Title>
        <div>
          <Line data={resultData} options={options} width={600} height={400} />
        </div>
        <p style={{fontSize: '20px', fontStyle: 'italic'}}>
          Your peak from last year was in {' '}
          <span style={{color: 'rgba(234, 87, 102)'}}> {maxMonth} </span>
          and you watched Netflix {max} times !
        </p>
      </Card>
    </ChartCard>
  )
}
