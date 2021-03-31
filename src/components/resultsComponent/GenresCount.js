import React from 'react'
import {Pie} from 'react-chartjs-2'
import {Card} from 'react-bootstrap'
import ChartCard from './Styling/ChartTheme'

export default function GenresCount(props) {
  const {result} = props
  const resultsArr = Object.entries(result)

  //sort the data to large to small
  const allSorted = resultsArr.sort((a, b) => b[1] - a[1])
  const sorted = allSorted.slice(0, 5)
  //define yValues & xValues to be used with your chart
  const numArr = sorted.map(data => data[1])
  const genresArr = sorted.map(data => data[0])

  const state = {
    labels: genresArr,
    datasets: [
      {
        label: 'Watches',
        backgroundColor: [
          '#db0000',
          '#333333',
          '#d3d3d3',
          '#f5f3f4',
          '#52b3d9'
        ],
        data: numArr,
        hoverOffset: 30
      }
    ]
  }
  return (
    <div>
      {sorted.length !== 0 ? (
        <ChartCard>
          <Card>
            <div>
              <Card.Title style={{textAlign: 'center', fontSize: 30}}>
                Top 5 most viewed genres
              </Card.Title>
            </div>
            <div>
              <Pie
                data={state}
                options={{
                  legend: {
                    display: true
                  }
                }}
                width={500}
                height={300}
              />
            </div>
            <div>
              <p style={{fontSize: '20px', fontStyle: 'italic'}}>
                You watched{' '}
                <span style={{color: 'rgba(234, 87, 102)'}}>
                  {sorted[0][1]}{' '}
                </span>
                {sorted[0][0]} shows... Such great taste!
              </p>
            </div>
          </Card>
        </ChartCard>
      ) : (
        <div>No genres data</div>
      )}
    </div>
  )
}
