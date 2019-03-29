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
