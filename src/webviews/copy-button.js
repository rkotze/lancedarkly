import React, { useContext, useState } from "react";
import styled from "styled-components";

import { colours } from "./colour-constants.styles";
import { VsCodeContext } from "./vs-code-context";

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
  const { vscode } = useContext(VsCodeContext);
  const [buttonText, setButtonText] = useState(children);

  function handleCopyClick(e) {
    e.preventDefault();
    setButtonText(successText);
    vscode.postMessage({
      name: "copyLdKey",
      args: [textToCopy]
    });

    setTimeout(() => {
      setButtonText(children);
    }, 1000);
  }

  return (
    <Button href="#" onClick={handleCopyClick}>
      {buttonText}
    </Button>
  );
}
