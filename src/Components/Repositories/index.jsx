import RepositoriesCard from "../RepositoriesCard";
import Style from "./style";
import useGithub from "../../hooks/github-hooks";
import { useState, useEffect } from "react";
import NoRepos from "../NoRepos";
import { useContext } from "react";
import { RepoContext } from "../../providers/repositories-provider";

function Repositories() {
  const { getUserRepos, getUserStarred, githubState } = useGithub();
  const [hasRepositories, setHasRepositories] = useState(false);
  const { repoActive } = useContext(RepoContext);

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
        repoActive.repositories ? (
          <Style.Wrapper>
            {githubState.repositories.map((repositorie) => {
              return (
                <RepositoriesCard
                  key={repositorie.id}
                  repoName={repositorie.name}
                  fullName={repositorie.full_name}
                  url={repositorie.html_url}
                />
              );
            })}
          </Style.Wrapper>
        ) : (
          <Style.Wrapper>
            {githubState.starred.map((repositorie) => {
              return (
                <RepositoriesCard
                  key={repositorie.id}
                  repoName={repositorie.name}
                  fullName={repositorie.full_name}
                  url={repositorie.html_url}
                />
              );
            })}
          </Style.Wrapper>
        )
      ) : (
        <NoRepos text="No Repositories" />
      )}
    </>
  );
}

export default Repositories;
