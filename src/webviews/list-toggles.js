import React from "react";
import { VsCodeContext } from "./vs-code-context/index";

export class ListToggles extends React.Component {
  state = {
    toggles: [],
    config: {}
  };

  async fetchToggles({ accessToken, defaultProject, baseURI }) {
    const { vscode } = this.context;
    vscode.postMessage({
      command: "alert",
      text: "Im using a React context"
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
    window.addEventListener("message", event => {
      const config = event.data.config;
      this.fetchToggles({
        baseURI: config.baseURI,
        accessToken: config.accessToken,
        defaultProject: config.defaultProject
      });
    });
  }

  render() {
    const { toggles } = this.state;
    return (
      <ul>
        {toggles.map(toggle => (
          <li>{toggle.name}</li>
        ))}
      </ul>
    );
  }
}

ListToggles.contextType = VsCodeContext;
