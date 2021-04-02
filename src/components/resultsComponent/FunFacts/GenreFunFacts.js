import React from 'react'

export default function getGenreFunFact(props) {
  const {result} = props
  const resultsArr = Object.entries(result.genres)

  //sort the data to large to small
  const allSorted = resultsArr.sort((a, b) => b[1] - a[1])
  const genresArr = allSorted.map(data => data[0])
  if (genresArr[0] === 'Crime')
    return (
      <p>
        SNL wrote a{' '}
        <a href="https://www.youtube.com/watch?v=J4RdcE6H4Gs">sketch</a> about
        people like you.
      </p>
    )
  if (genresArr[0] === 'Adventure')
    return `As of September 2020, adventure movies were the most popular movie genre in North America, with a total box office revenue of 63.57 billion U.S. dollars. How much of that amount was you?`
  if (genresArr[0] === 'Animation')
    return `The highest grossing animated film to date is The Lion King (2019).`
  if (genresArr[0] === 'Comedy')
    return (
      <p>
        There is something to be said that your favorite genre is comedy. Have
        you heard of the{' '}
        <a href="https://en.wikipedia.org/wiki/Sad_clown_paradox">
          Sad Clown Paradox
        </a>? 🤡
      </p>
    )
  if (genresArr[0] === 'Sci-Fi')
    return `The highest grossing science-fiction film to date is Avatar.`
  if (genresArr[0] === 'Action')
    return `You probably enjoy action because you're getting none.`
  if (genresArr[0] === 'Reality-TV')
    return `Reality-TV's title of "reality" is often criticized as being inaccurate because of claims that the genre frequently includes elements such as premeditated scripting (including a practice called "soft-scripting"), acting, urgings from behind-the-scenes crew to create specified situations of adversity and drama, and misleading editing. But you would know a thing or two about being fake.`
  return `As of September 2020, adventure movies were the most popular movie genre in North America, with a total box office revenue of 63.57 billion U.S. dollars.`
}
