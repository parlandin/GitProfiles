import Style from "./style"
import { useState } from "react"
import ButtonMode  from "../ButtonMode"

function Header(){
   
    return (
        <Style.Wrapper>
            <Style.Logo>GitProfiles</Style.Logo>
            <ButtonMode />
        </Style.Wrapper>
    )
}

export default Header