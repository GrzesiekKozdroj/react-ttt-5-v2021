const Box = ({value, handleClick, arrNum}) => {
    return (
        <div onClick={()=>handleClick(value,arrNum)} className="square" >
            { value }
        </div>
    )
}

export default Box
