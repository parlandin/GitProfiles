import RepositoriesCard from "../RepositoriesCard";
import Style from "./style";
import useGithub from "../../hooks/github-hooks";
import { useState, useEffect } from "react";
import NoRepos from "../NoRepos";
import { CSSTransition, TransitionGroup } from "react-transition-group";

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
        <TransitionGroup component={Style.Wrapper}>
          <Style.WrapperTitle>
            <Style.Title>{`Found ${githubState[repoActive].length} ${repoActive}`}</Style.Title>
          </Style.WrapperTitle>

          {githubState[repoActive].map((repositorie) => {
            const { id, name, full_name, html_url, description } = repositorie;
            return (
              <CSSTransition key={id} timeout={500} classNames="transition">
                <RepositoriesCard
                  key={id}
                  repoName={name}
                  fullName={full_name}
                  url={html_url}
                  description={
                    description
                      ? description
                      : "this repositorie don´t has a description"
                  }
                />
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      ) : (
        <NoRepos text="No Repositories" />
      )}
    </>
  );
}

export default Repositories;
