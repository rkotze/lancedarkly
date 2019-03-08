import React, { Component } from "react";
import styled from "styled-components";

import { VsCodeContext } from "./vs-code-context/index";

const InputField = styled.input`
  background: inherit;
  color: inherit;
  border: 1px solid #29b28d;
  border-radius: 4px;
  padding: 6px;
  width: 400px;
  &:focus {
    outline: none;
  }
  margin: 0;
`;

const FilterForm = styled.form`
  margin: 10px 0;
`;

export class FilterToggles extends Component {
  filterToggles = filterText => {
    const { vscode } = this.context;

    const toggles = vscode.getState().toggles;

    const searchText = filterText.toLowerCase();
    return toggles.filter(toggle =>
      toggle.name.toLowerCase().includes(searchText)
    );
  };

  onChangeHander = e => {
    const { onFilterToggles } = this.props;
    onFilterToggles(this.filterToggles(e.target.value));
  };

  render() {
    return (
      <FilterForm>
        <p>
          <label>Search toggles: </label>
        </p>
        <InputField
          name="filter"
          onChange={this.onChangeHander}
          placeholder="Filter by name"
        />
      </FilterForm>
    );
  }
}

FilterToggles.contextType = VsCodeContext;
