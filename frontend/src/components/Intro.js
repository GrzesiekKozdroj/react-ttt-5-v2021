const Intro = ({ handleClick }) => {
    return (
        <div onClick={()=>handleClick("X","O")}>
            <h1>Yololo trololo</h1>
        </div>
    )
}

export default Intro
