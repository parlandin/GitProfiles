import RepositoriesCard from "../RepositoriesCard";
import Style from "./style";
import useGithub from "../../hooks/github-hooks";
import { useState, useEffect } from "react";
import NoRepos from "../NoRepos";

function Repositories({ repoActive }) {
  const { getUserRepos, getUserStarred, githubState } = useGithub();
  const [hasRepositories, setHasRepositories] = useState(false);
  //const { repoActive } = useContext(RepoContext);

  useEffect(() => {
    if (githubState.user.login) {
      getUserRepos(githubState.user.login);
      getUserStarred(githubState.user.login);
    }
    setHasRepositories(githubState.repositories);
  }, [githubState.user.login]);

  return (
    <>
      {hasRepositories ? (
        <Style.Wrapper>
          {githubState[repoActive].map((repositorie) => {
            const { id, name, full_name, html_url } = repositorie;
            return (
              <RepositoriesCard
                key={id}
                repoName={name}
                fullName={full_name}
                url={html_url}
              />
            );
          })}
        </Style.Wrapper>
      ) : (
        <NoRepos text="No Repositories" />
      )}
    </>
  );
}

export default Repositories;
