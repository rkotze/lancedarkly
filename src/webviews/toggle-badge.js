import React, { Component } from "react";
import { VsCodeContext } from "./vs-code-context/index";

import { SwitchBadge } from "./badge.styles";

export class ToggleBadge extends Component {
  handleToggleState = () => {
    const { vscode } = this.context;
    const { envDetails, ldKey } = this.props;
    vscode.postMessage({
      name: "confirmToggleState",
      args: [ldKey, envDetails._environmentName, !envDetails.on]
    });
  };
  render() {
    const { envDetails } = this.props;
    return (
      <div>
        <SwitchBadge
          toggleState={envDetails.on}
          onClick={this.handleToggleState}
        >
          {envDetails.on ? "On" : "Off"}
        </SwitchBadge>{" "}
      </div>
    );
  }
}

ToggleBadge.contextType = VsCodeContext;
