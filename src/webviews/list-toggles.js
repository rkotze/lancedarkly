import React from "react";

import { VsCodeContext } from "./vs-code-context/index";
import { ToggleDetails } from "./toggle-details";
import { FilterToggles } from "./filter-toggles";
import { GreenBadge } from "./badge.styles";
import {
  ToggleViews,
  TogglesPanel,
  Right,
  PositiveAlert,
  NoBullets,
  ButtonLink
} from "./toggle-views.styles";

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
      <div>
        <FilterToggles onFilterToggles={this.onFilterToggles} />

        <ToggleViews>
          <TogglesPanel>
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
      </div>
    );
  }
}

ListToggles.contextType = VsCodeContext;
