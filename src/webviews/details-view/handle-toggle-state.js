import React, { Component } from "react";
import { VsCodeContext } from "../vs-code-context/index";

import { Prompt } from "../prompt-box/prompt";
import { InputField, BoldLarge } from "../core.styles";
import { SwitchBadge } from "../badge.styles";

const formatTitle = (text) => <React.Fragment>Confirm <BoldLarge>{text}</BoldLarge> toggle update</React.Fragment> 

export class HandleToggleState extends Component {
  constructor(props) {
    super(props);
    const { envDetails } = props;
    this.env = envDetails._environmentName.toLowerCase();
    this.comment = "";
    this.state = {
      on: envDetails.on,
      showPrompt: false
    };
  }

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
        envDetails.on = confirmToggleState.on;
        this.setState({
          on: confirmToggleState.on
        });
      }
    });
  }

  handleConfirm = () => {
    this.updateToggle();

    this.hidePrompt();
  };

  handleCancel = () => {
    this.hidePrompt();
  };

  getComment = comment => {
    this.comment = comment;
  };

  updateToggle = () => {
    const { vscode } = this.context;
    const { ldKey } = this.props;
    const { on } = this.state;
    vscode.postMessage({
      name: "confirmToggleState",
      args: [ldKey, this.env, !on, this.comment]
    });
    this.comment = ""; //clear comment
  };

  hidePrompt = () => {
    this.setState({
      showPrompt: false
    });
  };

  showPrompt = () => {
    this.setState({
      showPrompt: true
    });
  };

  render() {
    const { on, showPrompt } = this.state;
    const { children, envDetails } = this.props;
    return (
      <React.Fragment>
        <Prompt
          open={showPrompt}
          title={formatTitle(this.env)}
          onConfirm={this.handleConfirm}
          onCancel={this.handleCancel}
        >
          {() => <ConfirmMessage on={on} getComment={this.getComment} />}
        </Prompt>
        {children(this.showPrompt, { envDetails, on })}
      </React.Fragment>
    );
  }
}

HandleToggleState.contextType = VsCodeContext;

class ConfirmMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ""
    };
  }

  updateComment = e => {
    this.props.getComment(e.target.value);
    this.setState({
      comment: e.target.value
    });
  };

  render() {
    const { on } = this.props;
    const { comment } = this.state;
    return (
      <div>
        <p>
          State: <SwitchBadge>{!on ? "On" : "Off"}</SwitchBadge>
        </p>
        <p>
          <InputField
            type="text"
            placeholder="Optional comment"
            name="toggle-comment"
            value={comment}
            onChange={this.updateComment}
          />
        </p>
      </div>
    );
  }
}
