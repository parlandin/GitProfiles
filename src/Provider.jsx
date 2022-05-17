import App from "./App";
import GithubProvider from "./providers/github-provider";
import RepositoriesProvider from "./providers/repositories-provider";
import {ResetCSS} from "./styles/global" 

function Provider(){
    return (
        <GithubProvider>
            <RepositoriesProvider>
                <ResetCSS />
                <App />
            </RepositoriesProvider>
        </GithubProvider>
    )
}

export default Provider;