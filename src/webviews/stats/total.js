import React, { useContext, useState } from "react";
import { NumberBox, Number, LabelInfo } from "./stats.styles";
import { VsCodeContext } from "../vs-code-context/index";

export function Total() {
  const { vscodeSubscribe, vscode } = useContext(VsCodeContext);
  const appState = vscode.getState() || {};
  const [toggles, setToggles] = useState(appState.toggles || []);

  if (!appState.toggles) {
    vscodeSubscribe(event => {
      const { fetchToggles } = event.data;
      if (fetchToggles) {
        setToggles(fetchToggles);
      }
    });
  }

  return (
    <NumberBox>
      <Number>{toggles.length}</Number> <LabelInfo>Total</LabelInfo>
    </NumberBox>
  );
}
