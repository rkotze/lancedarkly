import React, { Component } from "react";
import styled from "styled-components";

import { VsCodeContext } from "./vs-code-context/index";

const InputField = styled.input`
  background: inherit;
  color: inherit;
  border: 1px solid #29b28d;
  border-radius: 4px;
  padding: 6px;
  width: calc(100% - 14px);
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
    return toggles.filter(toggle => {
      const searchableText = `${toggle.name} ${
        toggle.description
      }`.toLowerCase();
      return searchableText.includes(searchText);
    });
  };

  onChangeHander = e => {
    const { onFilterToggles } = this.props;
    onFilterToggles(this.filterToggles(e.target.value));
  };

  render() {
    return (
      <FilterForm>
        <InputField
          name="filter"
          onChange={this.onChangeHander}
          placeholder="Search toggles"
        />
      </FilterForm>
    );
  }
}

FilterToggles.contextType = VsCodeContext;
