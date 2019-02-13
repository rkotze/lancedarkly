import React from "react";

export class ListToggles extends React.Component {
  state = {
    toggles: []
  };

  async fetchToggles() {
    const { vscode } = this.props;

    vscode.postMessage({
      command: "alert",
      text: "What is this? " + fetch
    });

    const rawFlags = await fetch(
      "https://app.launchdarkly.com/api/v2/flags/fmp",
      {
        headers: new Headers({
          Authorization: ""
        })
      }
    );
    const flags = await rawFlags.json();
    this.setState({
      toggles: flags.items
    });
  }

  componentDidMount() {
    this.fetchToggles();
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
