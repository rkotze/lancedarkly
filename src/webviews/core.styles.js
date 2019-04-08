import styled from "styled-components";
import { colours } from "./colour-constants.styles";

const baseHeading = `
font-weight: normal;
margin: 10px 0;`;

export const FirstHeading = styled.h2([baseHeading]);

export const SecondHeading = styled.h3([baseHeading]);

export const Button = styled.a`
  background-color: ${colours.blue};
  color: #ffffff;
  border-radius: 4px;
  padding: 0px 8px 4px 8px;
  text-decoration: none;
  &:hover {
    background-color: ${colours.green};
    color: #ffffff;
  }
  &:focus {
    outline: none;
  }
`;
