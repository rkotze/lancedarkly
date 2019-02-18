import React from "react";

const vscode = acquireVsCodeApi();

export const VsCodeContext = React.createContext();

export class VsCodeProvider extends React.Component {
  subscribers = [];
  vscodeSubscribe = fn => {
    this.subscribers.push(fn);
  };
  componentDidMount() {
    window.addEventListener("message", event => {
      this.subscribers.forEach(fn => fn(event));
    });
  }
  render() {
    const { children } = this.props;
    return (
      <VsCodeContext.Provider
        value={{ vscode, vscodeSubscribe: this.vscodeSubscribe }}
      >
        {children}
      </VsCodeContext.Provider>
    );
  }
}
export const VsCodeConsumer = VsCodeContext.Consumer;
