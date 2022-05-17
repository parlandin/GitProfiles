import styled from "styled-components"

const Style = {}

Style.Wrapper = styled.div`
    max-width:784px;
    margin:0 auto;
    display:flex;
    background-color: #212A48;
    border-radius:12px;
    min-height: 153px;
    justify-content:space-between;
    flex-wrap: wrap;
`

Style.WrapperTemp = styled.div`
    display:flex;

`

Style.WrapperPhofile = styled.div`
    max-width:123px;
    max-height:123px;
    border-radius:50%;
    overflow: hidden;
    margin: 15px 40px;
`
Style.PhofileImage = styled.img`
    width:100%;
    height:100%;
`


Style.WrapperInfos = styled.div`

`
Style.InfoName = styled.h4`
    font-weight: bold;
    font-size:1.25em;
    color:#fff;
    margin: 15px 0;
`

Style.InfoTitle = styled.h5`
    font-weight: bold;
    font-size:1em;
    color:#0079FF;
`

Style.InfoBios = styled.p`
    font-weight: 400;
    font-size:1em;
    color:#47516F;
    margin: 15px 0;
    max-width:200px;
`


Style.WrapperStatus = styled.div`
    margin-right:40px;
    display:flex;
    flex-direction:column;
    align-items:center ;

    @media (max-width:720px) {
        margin:40px ;
    }
`

Style.InfoDate = styled.p`
    font-size:1.1em;
    color:#47516F;
    margin:15px 0;
`

export default Style
