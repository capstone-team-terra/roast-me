import React from 'react'
import {Card, Button} from 'react-bootstrap'
import ChartCard from './Styling/ChartTheme'
import { MDBDataTable } from 'mdbreact';


export default function Leaderboard(props) {
  const {leaderboard, username} = props
  let ranking = 0

  const leaderRows = []
  for (let i = leaderboard.length - 1; i >= 0; i--) { // 3
    leaderRows.push({id: leaderboard.length - i, username: leaderboard[i].username, score: leaderboard[i].score})
    if (leaderRows[leaderRows.length - 1]['username'] === username)
      ranking = leaderRows[leaderRows.length - 1]['id']
  }

    const data = {
      columns: [
        {
          label: 'Ranking',
          field: 'id',
          sort: 'asc',
        },
        {
          label: 'Username',
          field: 'username',
          sort: 'asc',
        },
        {
          label: 'Score',
          field: 'score',
          sort: 'asc',
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

        {username.length > 0 ? (
          <p>
          Congratulations, <span style={{color: 'rgba(82, 179, 217, 1)'}}>{username}</span>! You are <span style={{color: 'rgba(234, 87, 102)'}}>#{ranking}{' '}</span> in our leaderboard!
          <br/>
          I would be embarassed if I were you.
        </p>
        ) : (
          <p>Refresh and submit your data to be part of our leaderboard</p>
        )}
          <MDBDataTable
          scrollY
          maxHeight="500px"
          striped
          bordered
          small
          hover
          className='table-dark'
          data={data}
          paging={false}
          style={{color: 'rgba(255, 255, 255, 0.884)'}}
        />
      </Card>
    </ChartCard>
  )
}
