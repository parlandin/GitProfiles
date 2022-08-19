import styled from "styled-components";

const Style = {};

Style.Wrapper = styled.div`
  background-color: #212a48;
  border-radius: 12px;
  max-width: 784px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 30px;
  align-items: stretch;
  justify-content: flex-start;

  .transition-enter {
    opacity: 0.01;
    transform: translate(-30px, 0);
  }
  .transition-enter-active {
    opacity: 1;
    transform: translate(0, 0);
    transition: all 200ms ease-in;
  }
  .transition-exit {
    opacity: 1;
    transform: translate(0, 0);
  }
  .transition-exit-active {
    opacity: 0.01;
    transform: translate(-20px, 0);
    transition: all 200ms ease-in;
  }
`;

Style.WrapperTitle = styled.div`
  width: 100%;
  padding: 20px 15px 0;
`;

Style.Title = styled.h2`
  color: #c2c2c2;
  font-size: 1.2em;
  font-weight: 600;
`;

export default Style;
