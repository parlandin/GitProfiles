import Style from "./style"

function Button({text, onClick, type, active}){
    return (
        <Style.Button active={active} onClick={onClick} type={type} >
            {text}
        </Style.Button>
    )
}

export default Button