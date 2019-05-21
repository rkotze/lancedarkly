import React, { Component } from "react";

import { Button } from "./core.styles";
import { DATE } from "./filter-manager";

export class SortToggles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: DATE.OLDEST
    };
  }

  onClickHander = e => {
    const { onSortToggles } = this.props;
    const { order } = this.state;
    const newOrder = order === DATE.OLDEST ? DATE.NEWEST : DATE.OLDEST;
    this.setState({
      order: newOrder
    });
    onSortToggles(newOrder);
  };

  render() {
    const { order } = this.state;
    return (
      <span>
        Sort by:{" "}
        <Button href="#" onClick={this.onClickHander}>
          {order}
        </Button>
      </span>
    );
  }
}
