import React, { Component } from "react";
import { Button, CancelButton, ActionsContainer } from "../core.styles";
import { Modal, PromptHeading } from "./prompt.styles";

export class Prompt extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    onConfirm: () => {},
    onCancel: () => {},
    open: false
  };

  handleConfirm = e => {
    e.preventDefault();
    const { onConfirm } = this.props;
    onConfirm();
  };

  handleCancel = e => {
    e.preventDefault();
    const { onCancel } = this.props;
    onCancel();
  };

  render() {
    const { children, title, open } = this.props;
    if (open) {
      return (
        <Modal>
          <PromptHeading>{title}</PromptHeading>
          {children()}
          <ActionsContainer>
            <Button href="#" onClick={this.handleConfirm}>
              Confirm
            </Button>
            <CancelButton href="#" onClick={this.handleCancel}>
              Cancel
            </CancelButton>
          </ActionsContainer>
        </Modal>
      );
    }
    return null;
  }
}
