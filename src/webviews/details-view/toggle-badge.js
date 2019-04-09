import React, { Component } from "react";
import { VsCodeContext } from "../vs-code-context/index";

import { SwitchBadge } from "../badge.styles";

export class ToggleBadge extends Component {
  constructor(props) {
    super(props);
    const { envDetails } = props;
    this.env = envDetails._environmentName.toLowerCase();
    this.state = {
      on: envDetails.on
    };
  }

  handleToggleState = () => {
    const { vscode } = this.context;
    const { ldKey } = this.props;
    const { on } = this.state;
    vscode.postMessage({
      name: "confirmToggleState",
      args: [ldKey, this.env, !on]
    });
  };

  componentDidMount() {
    const { vscodeSubscribe } = this.context;
    const { envDetails, ldKey } = this.props;
    vscodeSubscribe(event => {
      const { confirmToggleState } = event.data;
      if (
        confirmToggleState &&
        this.env === confirmToggleState.env &&
        ldKey === confirmToggleState.key
      ) {
        this.setState({
          on: confirmToggleState.on
        });
        envDetails.on = confirmToggleState.on;
      }
    });
  }
  render() {
    const { on } = this.state;
    return (
      <div>
        <SwitchBadge toggleState={on} onClick={this.handleToggleState}>
          {on ? "On" : "Off"}
        </SwitchBadge>{" "}
      </div>
    );
  }
}

ToggleBadge.contextType = VsCodeContext;
