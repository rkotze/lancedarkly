import React, { Component } from "react";
import { VsCodeContext } from "./vs-code-context/index";

import { InputField, FilterForm } from "./core.styles";

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
