import styled from "styled-components";

const Style = {};

Style.Wrapper = styled.div`
  background-color: #141c2f;
  border-radius: 12px;
  margin: 30px 15px 0 15px;
  min-height: 100px;
  width: 231px;
`;

Style.Name = styled.h4`
  font-size: 1.1em;
  font-weight: bold;
  color: #fff;
  margin: 15px;
`;

Style.FullName = styled.p`
  font-weight: bold;
  color: #47516f;
  margin: 0px 0px 15px 15px;
  word-wrap: break-word;
`;
Style.Url = styled.p`
  color: #0079ff;
  margin: 0px 0px 15px 15px;
  word-wrap: break-word;
`;

export default Style;
