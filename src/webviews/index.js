import React from "react";
import ReactDOM from "react-dom";

import { ListToggles } from "./list-toggles";

const vscode = acquireVsCodeApi();

// examples https://code.visualstudio.com/api/extension-guides/webview

class App extends React.Component {
  handleClick = () => {
    vscode.postMessage({
      command: "alert",
      text: "🐛  on line "
    });
  };
  render() {
    return (
      <div>
        <h2>LanceDarkly</h2>
        <p>
          Toggle Key: <code>toggle-key-goes-here</code>
        </p>
        <button onClick={this.handleClick}>Toggle On</button>
        <ListToggles vscode={vscode} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("lanceDarklyApp"));
