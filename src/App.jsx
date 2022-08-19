import React, { useEffect, useState } from "react";
import useGithub from "./hooks/github-hooks";
import Layout from "./Components/layout";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import Profile from "./Components/Profile";
import ContainerButton from "./Components/ContainerButtons";
import Repositories from "./Components/Repositories";
import Loandig from "./Components/Loandig";
import NoRepos from "./Components/NoRepos";

function App() {
  const { githubState } = useGithub();
  const [repoActive, setRepoActive] = useState("repositories");

  console.log(githubState);

  return (
    <Layout>
      <Header />
      <SearchBar />
      {githubState.hasUser ? (
        !githubState.loading ? (
          <>
            <Profile />
            <ContainerButton
              setRepoActive={setRepoActive}
              repoActive={repoActive}
            />
            <Repositories repoActive={repoActive} />
          </>
        ) : (
          <Loandig />
        )
      ) : (
        <NoRepos text="No users or no surveys" />
      )}
    </Layout>
  );
}

export default App;
