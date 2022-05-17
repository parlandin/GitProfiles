import Style from "./style"
import { useState } from "react"

function ButtonMode(){
    const [active, setActive] = useState(false)

    function handleToggle(e){
       
        setActive(!active)
        console.log(e.target.checked)
    }

    return (
        <Style.WrapperButton>
            <Style.HiddenIcon active={active} />

            <Style.CheckButton type="checkbox" onChange={handleToggle} />

            <Style.Icons className="sun" src="images/sun_icon.svg"/>
            
            <Style.Icons className="moon" src="images/moon_icon.svg"/>
            
        </Style.WrapperButton>
    )
}

export default ButtonMode