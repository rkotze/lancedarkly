import React from "react";
import ReactDOM from "react-dom";

import { VsCodeProvider } from "./vs-code-context/index";
import { TogglesViewer } from "./toggles-viewer";

// examples https://code.visualstudio.com/api/extension-guides/webview

function App() {
  return (
    <VsCodeProvider>
      <TogglesViewer />
    </VsCodeProvider>
  );
}

ReactDOM.render(<App />, document.getElementById("lanceDarklyApp"));
