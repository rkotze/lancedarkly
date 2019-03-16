import styled from "styled-components";
import { colours } from "./colour-constants.styles";

export const ToggleViews = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: 25% 74%;
  grid-template-rows: auto;
  grid-column-gap: 1%;
  width: 95%;
  height: 90%;
`;
export const TogglesPanel = styled.div`
  max-height: 100%;
  overflow-y: auto;
  padding-right: 10px;
`;
export const NoBullets = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    padding: 5px 0;
  }
`;
export const ButtonLink = styled.a`
  display: block;
  border: none;
  border-radius: 4px;
  color: #ffffff;
  border: 1px solid ${colours.blue};
  background-color: ${colours.blue};
  padding: 8px;
  text-decoration: none;
  &:focus {
    outline: none;
  }
  &:hover {
    color: #ffffff;
    border: 1px solid ${colours.green};
    background-color: ${colours.green};
  }
`;
export const PositiveAlert = styled.div`
  background-color: ${colours.green};
  color: #ffffff;
  padding: 10px;
  margin: 10px 0;
  font-weight: bold;
  border-radius: 4px;
`;
export const Right = styled.div`
  text-align: right;
`;
