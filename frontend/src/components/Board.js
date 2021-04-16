import Box from './Box'

const Board = ({values, handleClick}) => {
    const Grid = values.map( (value, i) => <Box value={value} key={i} arrNum={i} handleClick={handleClick} />)
    return (
        <div className="board">
            { Grid }
        </div>
    )
}

export default Board
