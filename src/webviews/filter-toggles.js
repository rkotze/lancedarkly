import React, { Component } from "react";

import { InputField, FilterForm } from "./core.styles";

export class FilterToggles extends Component {
  constructor(props) {
    super(props);
    this.filterInput = React.createRef();
  }

  onChangeHander = e => {
    const { onFilterToggles } = this.props;
    onFilterToggles(e.target.value.toLowerCase());
  };

  componentDidMount() {
    this.filterInput.current.focus();
  }

  render() {
    return (
      <FilterForm>
        <InputField
          name="filter"
          onChange={this.onChangeHander}
          placeholder="Search toggles"
          ref={this.filterInput}
        />
      </FilterForm>
    );
  }
}
