import React, { useState, useContext, useEffect } from "react";

import { VsCodeContext } from "./vs-code-context/index";
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

export function ListToggles({ children, onToggleClicked }) {
  const { vscodeSubscribe, vscode } = useContext(VsCodeContext);
  const [toggles, setToggles] = useState([]);
  const [toggleDetails, setToggleDetails] = useState(null);
  const [fetchStatus, setFetchStatus] = useState(FETCH_STATUS.FETCHING);

  function viewToggleDetails(e) {
    e.preventDefault();
    const toggleKey = e.target.getAttribute("data-toggle-key");
    const toggleDetails = toggles.find(toggle => toggle.key === toggleKey);
    onToggleClicked(toggleKey);
    setToggleDetails(toggleDetails);
  }

  useEffect(() => {
    const appState = vscode.getState();
    vscodeSubscribe(event => {
      const { fetchToggles } = event.data;
      if (fetchToggles) {
        vscode.setState({
          toggles: fetchToggles
        });
        setToggles(fetchToggles);
        setFetchStatus(FETCH_STATUS.DONE);
      }
    });

    if (!appState || !appState.toggles) {
      vscode.postMessage({
        name: "fetchToggles"
      });
    }
  });

  return (
    <div>
      <ToggleViews>
        <TogglesPanel>
          <FilterToggles onFilterToggles={setToggles} />
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
                  onClick={viewToggleDetails}
                  data-toggle-key={toggle.key}
                >
                  {toggle.name}
                </ButtonLink>
              </li>
            ))}
          </NoBullets>
        </TogglesPanel>
        <div>{children({ toggleDetails })}</div>
      </ToggleViews>
    </div>
  );
}
