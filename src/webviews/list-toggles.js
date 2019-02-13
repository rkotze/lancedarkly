import React from "react";

export class ListToggles extends React.Component {
  state = {
    toggles: [],
    config: {}
  };

  async fetchToggles({ accessToken, defaultProject }) {
    const { vscode } = this.props;

    vscode.postMessage({
      command: "alert",
      text: "What is this? " + fetch
    });

    const rawFlags = await fetch(
      `https://app.launchdarkly.com/api/v2/flags/${defaultProject}`,
      {
        headers: new Headers({
          Authorization: accessToken
        })
      }
    );
    const flags = await rawFlags.json();
    this.setState({
      toggles: flags.items
    });
  }

  componentDidMount() {
    window.addEventListener("message", event => {
      const config = event.data.config;
      this.fetchToggles({
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
