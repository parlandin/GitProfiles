import Style from "./style";
import Button from "../Button";

function ContainerButton({ setRepoActive, repoActive }) {
  /* function setRepositoriesActive(current) {
    setRepoActive(current);
  } */

  return (
    <Style.Wrapper>
      <Style.WrapperButton>
        <Button
          name="repositories"
          text="Repositories"
          active={repoActive}
          onClick={() => setRepoActive("repositories")}
        />
      </Style.WrapperButton>

      <Style.WrapperButton>
        <Button
          name="starred"
          text="Starred"
          active={repoActive}
          onClick={() => setRepoActive("starred")}
        />
      </Style.WrapperButton>
    </Style.Wrapper>
  );
}

export default ContainerButton;
