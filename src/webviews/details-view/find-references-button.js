import React, { useContext } from "react";
import { VsCodeContext } from "../vs-code-context";
import { Button } from "../core.styles.js";

export function FindReferences({ ldKey }) {
  const { vscode } = useContext(VsCodeContext);

  function handleFindClick(e) {
    e.preventDefault();
    vscode.postMessage({
      name: "findLdKeyReferences",
      args: [ldKey]
    });
  }

  return (
    <Button href="#" onClick={handleFindClick}>
      Find references
    </Button>
  );
}
