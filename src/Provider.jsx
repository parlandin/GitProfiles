import App from "./App";
import GithubProvider from "./providers/github-provider";
import { ResetCSS } from "./styles/global";

function Provider() {
  return (
    <GithubProvider>
      <ResetCSS />
      <App />
    </GithubProvider>
  );
}

export default Provider;
