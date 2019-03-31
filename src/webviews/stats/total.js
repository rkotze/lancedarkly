import React, { useContext, useEffect, useState } from "react";
import { NumberBox, Number, LabelInfo } from "./stats.styles";
import { VsCodeContext } from "../vs-code-context/index";

export function Total() {
  const { vscodeSubscribe, vscode } = useContext(VsCodeContext);
  const [toggles, setToggles] = useState([]);

  useEffect(() => {
    const appState = vscode.getState();
    if (!appState || !appState.toggles) {
      vscodeSubscribe(event => {
        const { fetchToggles } = event.data;
        if (fetchToggles) {
          setToggles(fetchToggles);
        }
      });
    } else {
      setToggles(appState.toggles);
    }
  });

  return (
    <NumberBox>
      <Number>{toggles.length}</Number> <LabelInfo>Total</LabelInfo>
    </NumberBox>
  );
}
