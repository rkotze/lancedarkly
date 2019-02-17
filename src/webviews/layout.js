import React from "react";

export class Layout extends React.Component {
  render() {
    return (
      <div>
        <h2>LanceDarkly</h2>
        {this.props.children}
      </div>
    );
  }
}
