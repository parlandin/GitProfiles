import styled from "styled-components"

const Style = {}

Style.Wrapper = styled.label`
    position:relative ;
    max-width: 784px;
    height:55px;
    margin: 19px auto;
    background-color:#212A48;
    border-radius:12px;
    display:flex;
    align-items:center ;
`

Style.WrapperButton = styled.div`
    position: absolute;
    right:30px;
`

Style.IconSearch = styled.img`
    position: absolute;
    left:30px;
    max-width:25px;
`

Style.Input = styled.input`
    position: absolute;
    left:80px;
    font-size: 1.3em;
    color: #fff;

    &::placeholder {
        font-size:.7em;
        line-height:55px;
        color:#47516F ;
    }
`

export default Style