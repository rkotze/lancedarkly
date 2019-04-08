import React, { useContext, useState } from "react";
import { VsCodeContext } from "./vs-code-context";
import { Button } from "./core.styles.js";

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
