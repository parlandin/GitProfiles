import Style from "./style"

function NoRepos({text}){
    return (
        <Style.Wrapper>
            <Style.Message>{text}</Style.Message>
        </Style.Wrapper>
    )
}

export default NoRepos