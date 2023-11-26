import { useState } from 'react'
import Square from './component/square'

function App() {
  const [sqr, setSqr] = useState(Array(9).fill(null))
  const [xIsNext, setxIsNext] = useState(true)
  const [status, setStatus] = useState('lets go')
  let checkup;
  function handleClick(i){
    if(sqr[i] || calculateWinner(sqr)){
      return
    }
    const nextSqr = sqr.slice()
    xIsNext ? nextSqr[i] = 'X' : nextSqr[i] ='O'
    setSqr(nextSqr)
    setxIsNext(!xIsNext)
  }


  function calculateWinner(){
    const possibleWins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for(let i = 0; i<possibleWins.length; i++){
      const [a,b,c] = possibleWins[i]
      if(sqr[a] && sqr[a] === sqr[b] && sqr[a] === sqr[c]){
        return sqr[a]
      }
    }
    return null;
  }
 
  const winner = calculateWinner(sqr)
  let stat = "let's go";
  winner?
    stat = 'the winnner is: ' + winner:
    stat = 'next player: ' + (xIsNext ? 'X' : 'O')

  console.log(winner)
 return(
  <div className='game-board'>
    <h3>{stat}</h3>
    <div className="board-row">
      <Square value={sqr[0]} onSquareClick={() => handleClick(0)}/>
      <Square value={sqr[1]} onSquareClick={() => handleClick(1)}/>
      <Square value={sqr[2]} onSquareClick={() => handleClick(2)}/>
    </div>
    <div className="board-row">
      <Square value={sqr[3]} onSquareClick={() => handleClick(3)}/>
      <Square value={sqr[4]} onSquareClick={() => handleClick(4)}/>
      <Square value={sqr[5]} onSquareClick={() => handleClick(5)}/>
    </div>
    <div className="board-row">
      <Square value={sqr[6]} onSquareClick={() => handleClick(6)}/>
      <Square value={sqr[7]} onSquareClick={() => handleClick(7)}/>
      <Square value={sqr[8]} onSquareClick={() => handleClick(8)}/>
    </div>
  </div>
  )
}

export default App
