const Box = ({val, handleClick}) => {
    return (
        <div onClick={handleClick} >
            { val }
        </div>
    )
}

export default Box
