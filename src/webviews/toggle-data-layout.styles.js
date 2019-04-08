import styled from "styled-components";

export const EnvironmentToggleLayout = styled.div`
  display: grid;
  grid-template-columns: 25% 15% 45% 15%;
  width: 100%;
  margin: 10px 0;
`;
export const VariationToggleLayout = styled.div`
  display: grid;
  grid-template-columns: 20% 20% 60%;
  width: 100%;
  margin: 10px 0;
`;

export const PluginLayout = styled.div`
  display: grid;
  grid-template-columns: 20% 15% 15% 50%;
  width: 100%;
  margin: 10px 0;
`;

export const ThemeLabel = styled.label`
  padding-left: 8px;
  font-style: italic;
  body.vscode-dark & {
    color: #cdcdcd;
  }
  body.vscode-light & {
    color: #232323;
  }
`;
