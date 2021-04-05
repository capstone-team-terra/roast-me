import React from 'react'
import {Card} from 'react-bootstrap'
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
  // rgba(255, 255, 255, 0.884)
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
        <p style={{fontSize: '20px', fontStyle:"italic"}}>Users are ranked from most to least basic. The higher the score, the more questionable your taste is.</p>
        {username.length > 0 ? (
          <p style={{fontSize: '23px'}}>
          Congratulations, <span style={{color: 'rgba(82, 179, 217, 1)'}}>{username}</span>! You are <span style={{color: 'rgba(234, 87, 102)'}}>#{ranking}{' '}</span> on our leaderboard!
          <br/>
          I would be embarassed if I were you.
        </p>
        ) : (
          <p>Return to Home and submit your data to be part of our leaderboard</p>
        )}
          <MDBDataTable
          scrollY
          maxHeight="300px"
          striped
          bordered
          small
          hover
          className='table-dark'
          // className='table-light square border border-danger'
          data={data}
          paging={false}
          style={{color: 'rgba(255, 255, 255, 0.884)'}}
          // style={{color: '#db0000'}}
        />
      </Card>
    </ChartCard>
  )
}
