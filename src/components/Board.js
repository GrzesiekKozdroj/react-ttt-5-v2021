import Row from './Row'
const Board = ({values, handleClick}) => {
    const rows = values.map( (val, i) => <Row key={i} handleClick={handleClick} values={val} /> )
    return (
        <div>
            { rows }
        </div>
    )
}

export default Board
