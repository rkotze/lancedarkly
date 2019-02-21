import React from "react";
import { VsCodeContext } from "./vs-code-context/index";

export class ListToggles extends React.Component {
  state = {
    toggles: [],
    testData: ""
  };

  componentDidMount() {
    const { vscodeSubscribe, vscode } = this.context;
    vscodeSubscribe(event => {
      if (event.data.fetchToggles) {
        this.setState({ toggles: event.data.fetchToggles });
      }

      if (event.data.test) {
        this.setState({ testData: event.data.test });
      }
    });
    vscode.postMessage({
      name: "fetchToggles"
    });
    vscode.postMessage({
      name: "log",
      args: ["Im using a React context"]
    });
  }

  render() {
    const { toggles, testData } = this.state;
    return (
      <div>
        test: {testData}
        <ul>
          {toggles.map(toggle => (
            <li>{toggle.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

ListToggles.contextType = VsCodeContext;
