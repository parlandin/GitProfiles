import React, { useEffect, useState } from "react";
import useGithub from "./hooks/github-hooks";
import Layout from "./Components/layout";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar"
import Profile from "./Components/Profile";
import ContainerButton from "./Components/ContainerButtons";
import Repositories from "./Components/Repositories/repositories";
import Loandig from "./Components/Loandig/loandig";
import NoRepos from "./Components/NoRepos";


function App() {
   const {githubState} = useGithub()

  return (
    <Layout>
        <Header />
        <SearchBar />
        {githubState.hasUser 
            ? !githubState.loading 
                ? (<>
                <Profile />
                <ContainerButton />
                <Repositories />
                </>)
                : <Loandig />

        : <NoRepos text="No users or no surveys" />}
    </Layout>
  )
}

export default App
