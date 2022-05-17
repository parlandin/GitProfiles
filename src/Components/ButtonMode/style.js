import styled from "styled-components"

const Style = {};



Style.WrapperButton = styled.label`
    width: 46px;
    height:18px;
    background-color: #183153;
    border-radius:12px;
    display:flex;
    flex-direction:row;
    position:relative ;
    cursor: pointer;
`
Style.CheckButton = styled.input`
    visibility:hidden;
`

/* Style.WrapperIcons = styled.div`
    width:20px;
    height:16px;
    ` */

Style.Icons = styled.img`
    width:20px;
    height:16px;
    position: absolute;
    margin:1px;

    &.sun {
        left: 0;
    }

    &.moon {
        right: 0;
    }

`
Style.HiddenIcon = styled.div`
    position: absolute;
    height:16px;
    margin:1px;
    width: 20px;
    border-radius:12px;
    background-color:#6be447;
    z-index:5;
    transition: 300ms cubic-bezier(0.42, 0, 0.87, 1.35) ;
    right: 0;

    ${props => props.active 
        ?`transform: translateX(0)`
        :`transform: translateX(-24px);` 
    }
`

export default Style;