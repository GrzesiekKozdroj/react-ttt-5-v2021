import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Board from './components/Board'

function App() {
  const [boardSize, setBoardSize] = useState(20)
  const [values, setValues] = useState(Array(boardSize*boardSize).fill(null) )
  const handleClick = (val, i) => {console.log(i,val)}
  return (
    <div className="App ttt5">
      <Board values={values} handleClick={handleClick}  />
    </div>
  );
}

export default App;
