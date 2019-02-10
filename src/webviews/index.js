import React from "react";
import ReactDOM from "react-dom";

const vscode = acquireVsCodeApi();

function action() {
  const clicked = vscode.window.showInformationMessage("Toggled me On", [
    "Off"
  ]);
  console.log("clicked: ", clicked);
}

// examples https://code.visualstudio.com/api/extension-guides/webview

const App = () => {
  return (
    <div>
      <h2>LanceDarkly</h2>
      <p>
        Toggle Key: <code>toggle-key-goes-here</code>
      </p>
      <button onClick={action}>Toggle On</button>
    </div>
  );
};

ReactDOM.render(<App />, document.body);
