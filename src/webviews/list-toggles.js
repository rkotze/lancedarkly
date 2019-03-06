import React from "react";
import styled from "styled-components";

import { VsCodeContext } from "./vs-code-context/index";
import { ToggleDetails } from "./toggle-details";
import { FilterToggles } from "./filter-toggles";
import { GreenBadge } from "./badge.styles";

const ToggleViews = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: 25% 74%;
  grid-template-rows: auto;
  grid-column-gap: 1%;
  width: 95%;
  height: 90%;
`;

const TogglesPanel = styled.div`
  max-height: 100%;
  overflow-y: auto;
  padding-right: 10px;
`;

const NoBullets = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    padding: 5px 0;
  }
`;

const ButtonLink = styled.a`
  display: block;
  border: none;
  border-radius: 4px;
  color: #0c6c8c;
  border: 1px solid #0c6c8c;
  padding: 8px;
  text-decoration: none;
  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
    background-color: #0c6c8c;
  }
`;

const PositiveAlert = styled.div`
  background-color: #29b28d;
  color: #ffffff;
  padding: 10px;
  margin: 10px 0;
  font-weight: bold;
  border-radius: 4px;
`;

const Right = styled.div`
  text-align: right;
`;

const FETCH_STATUS = {
  FETCHING: "fetching",
  ERROR: "error",
  DONE: "done"
};
export class ListToggles extends React.Component {
  state = {
    toggles: [],
    toggleDetails: null,
    fetchStatus: FETCH_STATUS.FETCHING
  };

  viewToggleDetails = e => {
    e.preventDefault();
    const toggleKey = e.target.getAttribute("data-toggle-key");
    const toggleDetails = this.state.toggles.find(
      toggle => toggle.key === toggleKey
    );
    this.setState({
      toggleDetails
    });
  };

  componentDidMount() {
    const { vscodeSubscribe, vscode } = this.context;
    const appState = vscode.getState();
    vscodeSubscribe(event => {
      if (event.data.fetchToggles) {
        vscode.setState({
          toggles: event.data.fetchToggles
        });
        this.setState({
          toggles: event.data.fetchToggles,
          fetchStatus: FETCH_STATUS.DONE
        });
      }
    });

    if (!appState || !appState.toggles) {
      vscode.postMessage({
        name: "fetchToggles"
      });
    }
  }

  onFilterToggles = toggles => {
    this.setState({ toggles });
  };

  render() {
    const { toggles, toggleDetails, fetchStatus } = this.state;
    return (
      <ToggleViews>
        <TogglesPanel>
          <FilterToggles onFilterToggles={this.onFilterToggles} />
          <Right>
            Total: <GreenBadge>{toggles.length}</GreenBadge>
          </Right>
          {fetchStatus === FETCH_STATUS.FETCHING && (
            <PositiveAlert>Fetching toggles ...</PositiveAlert>
          )}
          <NoBullets>
            {toggles.map(toggle => (
              <li key={toggle.key}>
                <ButtonLink
                  href="#"
                  onClick={this.viewToggleDetails}
                  data-toggle-key={toggle.key}
                >
                  {toggle.name}
                </ButtonLink>
              </li>
            ))}
          </NoBullets>
        </TogglesPanel>
        <div>
          {toggleDetails && <ToggleDetails toggleDetails={toggleDetails} />}
        </div>
      </ToggleViews>
    );
  }
}

ListToggles.contextType = VsCodeContext;
