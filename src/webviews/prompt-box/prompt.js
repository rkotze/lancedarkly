import React, { Component } from "react";
import styled from "styled-components";

import {
  SecondHeading,
  Button,
  CancelButton,
  ActionsContainer
} from "../core.styles";

const Modal = styled.div`
  display: block;
  position: absolute;
  width: 300px;
  height: 180px;
  padding: 10px;
  border: 1px solid #fff;
  border-radius: 4px;
  background-color: #222;
  z-index: 2;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;

export class Prompt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.open
    };
  }

  static defaultProps = {
    onConfirm: () => {},
    onCancel: () => {},
    open: false
  };

  handleConfirm = e => {
    e.preventDefault();
    const { onConfirm } = this.props;
    this.setState({
      open: false
    });
    onConfirm();
  };

  handleCancel = e => {
    e.preventDefault();
    const { onCancel } = this.props;
    this.setState({
      open: false
    });
    onCancel();
  };

  render() {
    const { open } = this.state;
    const { children, title } = this.props;
    if (open) {
      return (
        <Modal>
          <SecondHeading>{title}</SecondHeading>
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
