import styled from "styled-components";
const BaseBadge = styled.span`
  display: inline-block;
  border: none;
  border-radius: 4px;
  padding: 2px 12px;
  font-family: "Courier New", Courier, monospace;
  font-weight: bold;
  color: #222;
`;
export const GreenBadge = styled(BaseBadge)`
  background-color: #29b28d;
`;
export const LightBadge = styled(BaseBadge)`
  margin: 0px 6px;
  color: #0c6c8c;
`;
export const SwitchBadge = styled(BaseBadge)`
  margin: 0px 6px;
  background-color: ${({ toggleState }) =>
    toggleState ? "#29B28D" : "#0C6C8C"};
`;
export const ToggleBadge = styled(BaseBadge)`
  margin: 0px 6px;
  background-color: #ffd981;
`;
