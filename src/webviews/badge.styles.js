import styled from "styled-components";
import { colours } from "./colour-constants.styles";
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
  background-color: ${colours.green};
`;
export const InlineLightBadge = styled(BaseBadge)`
  padding: 2px 6px;
  color: ${({ colour }) => (colour == "green" ? colours.green : colours.blue)};
`;
export const LightBadge = styled(BaseBadge)`
  margin: 0px 6px;
  color: ${colours.blue};
`;
export const SwitchBadge = styled(BaseBadge)`
  margin: 0px 6px;
  background-color: ${({ toggleState }) =>
    toggleState ? colours.green : colours.blue};
`;
