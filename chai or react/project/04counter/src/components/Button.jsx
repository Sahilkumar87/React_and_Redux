function Button({btnText, value, onClick}){
    return (<>
    <button onClick={onClick}>
        <p>{btnText} : {value}</p>
    </button>
    </>)
}

export default Button;