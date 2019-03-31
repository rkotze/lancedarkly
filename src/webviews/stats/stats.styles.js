import styled from "styled-components";
import { colours } from "../colour-constants.styles";

export const ButtonLink = styled.a`
  display: block;
  border: none;
  border-radius: 4px;
  color: #ffffff;
  border: 1px solid ${colours.blue};
  background-color: ${colours.blue};
  padding: 5px 20px;
  margin-left: 10px;
  text-decoration: none;
  &:focus {
    outline: none;
  }
  &:hover,
  &:focus {
    color: #ffffff;
    border: 1px solid ${colours.green};
    background-color: ${colours.green};
  }
`;

export const FlexList = styled.div`
  display: flex;
`;

export const NumberBox = styled.div`
  border-radius: 4px;
  background-color: ${colours.green};
  color: #ffffff;
  padding: 10px 20px;
  margin-right: 10px;
  text-align: center;
`;

export const Number = styled.div`
  font-size: 3em;
`;

export const LabelInfo = styled.label`
  font-size: 1em;
`;
