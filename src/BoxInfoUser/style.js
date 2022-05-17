import styled from "styled-components"

const Style = {}

Style.Wrapper = styled.div`
    background-color:#141C2F ;
    border-radius:12px;
    display: flex;
    justify-content: space-between;
    width: 260px;
    height: 87px;
    align-items:center ;
`
Style.Info = styled.p`
    display: flex ;
    flex-direction:column;
    align-items:center;
    color:#47516F;
    font-size:1.1em;
    margin: 0 8px;

    & span {
        color: #fff;
        padding:2px;
    }
`


export default Style