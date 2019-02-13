import React from "react";

// const vscode = acquireVsCodeApi();

export class ListToggles extends React.Component {
  state = {
    toggles: []
  };

  fetchToggles() {
    // console.log("HELLO: ", fetch);

    const { vscode } = this.props;

    vscode.postMessage({
      command: "alert",
      text: "What is this? " + fetch
    });

    fetch("https://app.launchdarkly.com/api/v2/flags/fmp", {
      headers: new Headers({
        Authorization: ""
      })
    })
      .then(response => response.json())
      .then(flags => {
        this.setState({
          toggles: flags.items
        });
      });
    // const flags = await rawFlags.json();
    // this.setState({
    //   toggles: flags
    // })
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
