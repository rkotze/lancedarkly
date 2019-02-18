import React from "react";
import { VsCodeContext } from "./vs-code-context/index";

export class ListToggles extends React.Component {
  state = {
    toggles: [],
    config: {},
    testData: ""
  };

  async fetchToggles({ accessToken, defaultProject, baseURI }) {
    const { vscode } = this.context;
    vscode.postMessage({
      name: "log",
      args: ["Im using a React context"]
    });

    const rawFlags = await fetch(`${baseURI}/api/v2/flags/${defaultProject}`, {
      headers: new Headers({
        Authorization: accessToken
      })
    });
    const flags = await rawFlags.json();
    this.setState({
      toggles: flags.items
    });
  }

  componentDidMount() {
    const { vscodeSubscribe } = this.context;
    vscodeSubscribe(event => {
      if (event.data.config) {
        const config = event.data.config;
        this.fetchToggles({
          baseURI: config.baseURI,
          accessToken: config.accessToken,
          defaultProject: config.defaultProject
        });
      }

      if (event.data.test) {
        this.setState({ testData: event.data.test });
      }
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
