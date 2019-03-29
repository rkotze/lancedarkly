import styled from "styled-components";
import { colours } from "./colour-constants.styles";
export const LanceBar = styled.div`
  display: flex;
  align-items: center;
`;
export const Logo = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 6px;
  margin-top: 8px;
`;
export const Title = styled.h2`
  font-weight: normal;
  color: ${colours.blue};
`;
export const SupVersion = styled.sup`
  color: ${colours.green};
  font-size: 10px;
  font-family: "Courier New", Courier, monospace;
`;
