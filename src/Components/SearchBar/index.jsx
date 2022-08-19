import Style from "./style";
import Button from "../Button";
import { useState } from "react";
import useGithub from "../../hooks/github-hooks";

function SearchBar() {
  const [userName, setUserName] = useState("");
  const { getUser } = useGithub();

  function handleOnChange(e) {
    setUserName(e.target.value);
  }

  function handleSubmit(e) {
    getUser(userName);
  }

  return (
    <Style.Wrapper>
      <Style.IconSearch src="images/glass_icon.svg" />
      <Style.Input
        type="text"
        placeholder="Digite um usuario para Pesquisar"
        onChange={handleOnChange}
        value={userName}
        onKeyDown={(e) => e.key == "Enter" && handleSubmit()}
      />

      <Style.WrapperButton>
        <Button text="Search" onClick={handleSubmit} />
      </Style.WrapperButton>
    </Style.Wrapper>
  );
}

export default SearchBar;
