import Style from "./style";

function RepositoriesCard({ repoName, fullName, url, description }) {
  return (
    <Style.Wrapper>
      <Style.Name>{repoName}</Style.Name>
      <Style.FullName>{fullName}</Style.FullName>
      <Style.Url>
        <a href={url} target="_blank">
          {url}
        </a>
      </Style.Url>
      <Style.Description>{description}</Style.Description>
    </Style.Wrapper>
  );
}

export default RepositoriesCard;
