import React, { Component } from "react";
import styled from "styled-components";

import { VsCodeContext } from "./vs-code-context/index";
import { colours } from "./colour-constants.styles";

const InputField = styled.input`
  background: inherit;
  color: inherit;
  border: 1px solid ${colours.green};
  border-radius: 4px;
  padding: 6px;
  width: calc(100% - 14px);
  &:focus {
    outline: none;
    box-shadow: 0px 0px 6px ${colours.green};
  }
  margin: 0;
`;

const FilterForm = styled.form`
  margin: 10px 0;
`;

export class FilterToggles extends Component {
  constructor(props) {
    super(props);
    this.filterInput = React.createRef();
  }

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

FilterToggles.contextType = VsCodeContext;
