import styled from "styled-components";

const Style = {};

Style.Wrapper = styled.div`
  background-color: #141c2f;
  border-radius: 12px;
  margin: 30px 15px 0 15px;
  min-height: 100px;
  width: 231px;
  padding: 15px;
`;

Style.Name = styled.h4`
  font-size: 1.1em;
  font-weight: bold;
  color: #c9c9c9;
  margin: 10px 0;
  word-break: break-all;
`;

Style.FullName = styled.p`
  font-weight: bold;
  color: #47516f;
  word-break: break-all;
  font-size: 0.9em;
  margin: 10px 0;
`;
Style.Url = styled.p`
  color: #0079ff;
  word-break: break-all;
  font-size: 0.8em;
  margin: 10px 0;
`;

Style.Description = styled.span`
  font-size: 0.8em;
  color: #c9c9c9;
  margin: 10px 0;
  position: relative;
  display: flex;
  margin-top: 15px;

  &::after {
    content: "";
    width: 100%;
    height: 1px;
    color: #000;
    background-color: #f1f1f1;
    position: absolute;
    top: -5px;
    left: 0;
  }
`;

export default Style;
