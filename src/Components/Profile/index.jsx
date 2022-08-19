import Style from "./style";
import useGithub from "../../hooks/github-hooks";
import BoxInfoUser from "../BoxInfoUser";

function Profile() {
  const { githubState } = useGithub();

  return (
    <Style.Wrapper>
      <Style.WrapperTemp>
        <Style.WrapperPhofile>
          <Style.PhofileImage src={githubState.user.avatar} alt="user avatar" />
        </Style.WrapperPhofile>

        <Style.WrapperInfos>
          <Style.InfoName>{githubState.user.name}</Style.InfoName>
          <Style.InfoTitle>{githubState.user.login}</Style.InfoTitle>
          <Style.InfoBios>
            {githubState.user.bio ? githubState.user.bio : "doesn't have bios"}
          </Style.InfoBios>
        </Style.WrapperInfos>
      </Style.WrapperTemp>

      <Style.WrapperStatus>
        <Style.InfoDate>
          Join in:{" "}
          {new Date(githubState.user.created_at)
            .toLocaleString("pt-BR")
            .substring(0, 10)}
        </Style.InfoDate>

        <BoxInfoUser
          Repos={githubState.user.public_repos}
          followers={githubState.user.followers}
          following={githubState.user.following}
        />
      </Style.WrapperStatus>
    </Style.Wrapper>
  );
}

export default Profile;
