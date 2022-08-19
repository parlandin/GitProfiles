import Style from "./style";

function Layout({children}){
    return (
        <Style.Wrapper>
            {children}
        </Style.Wrapper>
    )
}

export default Layout