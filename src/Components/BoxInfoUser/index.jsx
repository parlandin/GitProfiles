import Style from "./style"

function BoxInfoUser({Repos, followers, following}){
    return (
        <Style.Wrapper>
            <Style.Info>Repos <span>{Repos}</span></Style.Info>

            <Style.Info>Followers <span>{followers}</span></Style.Info>

            <Style.Info>Following <span>{following}</span></Style.Info>
        </Style.Wrapper>
    )
}

export default BoxInfoUser