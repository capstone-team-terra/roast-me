import React from 'react'
import {Card, Table} from 'react-bootstrap'
import ChartCard from './Styling/ChartTheme'
import { MDBDataTable } from 'mdbreact';

export default function Leaderboard(props) {
  const {leaderboard} = props
  console.log('inside leaderboard component', leaderboard)
  console.log('leaderboard isArray', Array.isArray(leaderboard))
  console.log('leaderboard[0]', leaderboard[0])

  const leaderRows = []
  for (let i = leaderboard.length - 1; i >= 0; i--)
    leaderRows.push({id: leaderboard.length - i, username: leaderboard[i].username, score: leaderboard[i].score})
  console.log(leaderRows)

    const data = {
      columns: [
        {
          label: 'Ranking',
          field: 'id',
          sort: 'asc',
          // width: 150
        },
        {
          label: 'Username',
          field: 'username',
          sort: 'asc',
          // width: 270
        },
        {
          label: 'Score',
          field: 'score',
          sort: 'asc',
          // width: 200
        }
      ],
      rows: leaderRows
    };

  return (
    <ChartCard>
      <Card>
        <Card.Title style={{textAlign: 'center', fontSize: 30}}>
          Leaderboard
        </Card.Title>
        <MDBDataTable
        scrollY
        maxHeight="200px"
        striped
        bordered
        small
        hover
        data={data}
        className='table-light'
      />
      </Card>
    </ChartCard>
  )
}
