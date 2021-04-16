import './App.css';
import {useState} from 'react'
import Board from './components/Board'
import Intro from './components/Intro'


function checkForWinner(values, boardSize) {
  for (let i = 0; i < boardSize * boardSize; i++) {
      //checking for winner in horizontal plane
      if (values[i] !== null &&
          values[i] === values[i + 1] &&
          values[i + 1] === values[i + 2] &&
          values[i + 2] === values[i + 3] &&
          values[i + 3] === values[i + 4]) {
              console.log('winner is ', values[i], ' horizontally');
      }
      //checking for winner in vertical plane
      else if (values[i] !== null &&
          values[i] === values[i + 20] &&
          values[i + 20] === values[i + 40] &&
          values[i + 40] === values[i + 60] &&
          values[i + 60] === values[i + 80]) {
              console.log('winner is ', values[i], ' vertically');
      }
      //checking for winner on a diagonal forward plane
      else if (
          values[i] !== null &&
          values[i] ===      values[i + 21] &&
          values[i + 21] === values[i + 42] &&
          values[i + 42] === values[i + 63] &&
          values[i + 63] === values[i + 84]) {
              console.log('winner is '+ values[i]+ ' diagonally');
      }
      //checking for winner in a minus diagonal option
      else if (
          values[i] !== null &&
          values[i] === values[i + 19] &&
          values[i + 19] === values[i + 38] &&
          values[i + 38] === values[i + 57] &&
          values[i + 57] === values[i + 76]) {
          console.log('winner is '+ values[i] + ' anti-diagonally');
      }
  }
}

function App() {
  const [mySymbol, setMySymbol] = useState(null)
  const [opSymbol, setOpSymbol] = useState(null)
  const [boardSize, setBoardSize] = useState(20)
  const [values, setValues] = useState(Array(boardSize*boardSize).fill(null) )
  const [iNext, setINext] = useState(true)
  const handleClick = (val, i) => {
    const copyValues = values.slice()
    copyValues[i] = iNext ? mySymbol : opSymbol
    if(val || checkForWinner(copyValues,boardSize)) return null
    setINext(!iNext)
    setValues(copyValues)
  }
  const handleSetup = (val1, val2) => {
    setMySymbol(val1)
    setOpSymbol(val2)
  }
  return (
    <div className="App ttt5">
      {
        !mySymbol || !opSymbol ?
        <Intro handleClick={handleSetup} />
        :
        <Board values={values} handleClick={handleClick}  />
      }
    </div>
  );
}

export default App;
