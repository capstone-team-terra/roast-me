import React from 'react'
import {Card, Table} from 'react-bootstrap'
import ChartCard from './Styling/ChartTheme'

export default function Leaderboard(props) {
  const {leaderboard} = props
  console.log('inside leaderboard component', leaderboard)
  console.log('leaderboard isArray', Array.isArray(leaderboard))
  console.log('leaderboard[0]', leaderboard[0])

  const userNames = leaderboard.reverse()
  console.log(userNames)

  return (
    <ChartCard>
      <Card>
        <Card.Title style={{textAlign: 'center', fontSize: 30}}>
          Leaderboard
        </Card.Title>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {userNames.map((user, i) => {
              return (
                <tr key={i}>
                  <td>{Object.keys(user)[0]}</td>
                  <td>{Object.values(user)[0]}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </Card>
    </ChartCard>
  )
}
