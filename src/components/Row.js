import Box from './Box'
const Row = ({ values, handleClick }) => {
    const boxies = values.map( (val,i)=> <Box key={i} val={val} handleClick={handleClick} /> )
    return (
        <div>
            {boxies}
        </div>
    )
}

export default Row
