import Style from "./style"
import Button from "../Button"
import {useContext} from "react"
import {RepoContext} from "../../providers/repositories-provider"

function ContainerButton(){
    const {repoActive, setRepoActive} = useContext(RepoContext)

    function setRepositoriesActive(){
        setRepoActive({
            repositories: true,
            starred: false
        })
    }

    function setStarredActive(){
        setRepoActive({
            repositories: false,
            starred: true
        })
    }

    return (
            <Style.Wrapper>
                <Style.WrapperButton>
                    <Button text="Repositories" active={repoActive.repositories} onClick={setRepositoriesActive}/>
                </Style.WrapperButton>

                <Style.WrapperButton>
                    <Button text="Starred" active={repoActive.starred} onClick={setStarredActive}/>
                </Style.WrapperButton>

            </Style.Wrapper>
    )
}

export default ContainerButton