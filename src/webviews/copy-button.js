import React from "react";
import styled from "styled-components";

import { colours } from "./colour-constants.styles";

const Button = styled.a`
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

export function CopyText({ textToCopy, children, successText }) {
  return <Button href="#">{children}</Button>;
}
