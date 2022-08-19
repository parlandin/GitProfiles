import Style from "./style";

function Button({ text, onClick, type, active, name }) {
  return (
    <Style.Button active={active == name} onClick={onClick} type={type}>
      {text}
    </Style.Button>
  );
}

export default Button;
