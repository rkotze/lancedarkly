import styled from "styled-components";
import { colours } from "./colour-constants.styles";
export const LanceBar = styled.div`
  display: flex;
  align-items: center;
`;
export const Logo = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 6px;
  margin-top: 8px;
  display: inline-block;
  background-size: contain;
  body.vscode-dark & {
    background-image: url(${({ mediaUri }) =>
      mediaUri + "/lancedarkly-logo-light.svg"});
  }
  body.vscode-light & {
    background-image: url(${({ mediaUri }) =>
      mediaUri + "/lancedarkly-logo-dark.svg"});
  }
`;
export const Title = styled.h2`
  font-weight: normal;
  body.vscode-dark & {
    color: #ffffff;
  }
  body.vscode-light & {
    color: ${colours.blue};
  }
`;
export const SupVersion = styled.sup`
  color: ${colours.green};
  font-size: 10px;
  font-family: "Courier New", Courier, monospace;
`;
