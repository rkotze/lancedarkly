import React, { Component } from "react";
import styled from "styled-components";

import { VsCodeContext } from "./vs-code-context/index";

const InputField = styled.input`
  background: inherit;
  color: inherit;
  border: 1px solid #29b28d;
  border-radius: 4px;
  padding: 6px;
  width: 95%;
  &:focus {
    outline: none;
  }
`;

const FilterForm = styled.form`
  margin: 10px 0;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 1%;
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
        <label>Search toggles: </label>
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
