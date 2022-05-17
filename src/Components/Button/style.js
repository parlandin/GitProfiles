import styled from "styled-components"

const Style = {}

Style.Button = styled.button`
    background-color: #0079FF;
    color: #fff;
    font-weight:bold;
    font-size:1.12;
    padding:8px 16px;
    border-radius: 12px;
    background-color: ${props => props.active ? "#0079ff9c" : "#0079FF"}; ;
`

export default Style