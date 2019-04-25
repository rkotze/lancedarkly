import styled from "styled-components";
import { colours } from "../colour-constants.styles";
import { SecondHeading } from "../core.styles";
export const Modal = styled.div`
  display: block;
  position: absolute;
  width: 400px;
  height: 180px;
  padding: 10px;
  border: 1px solid ${colours.green};
  box-shadow: 0px 0px 4px ${colours.green};
  border-radius: 4px;
  z-index: 2;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  background-color: var(--vscode-editor-background);
`;
export const PromptHeading = styled(SecondHeading)`
  color: ${colours.green}
  margin-top: 0;
  padding-bottom: 10px;
  border-bottom: 1px solid ${colours.green};
`;
