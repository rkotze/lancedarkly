import React from "react";
import styled from "styled-components";

import { VsCodeContext } from "./vs-code-context/index";

const ToggleViews = styled.div`
  display: grid;
  grid-template-columns: 25% 74%;
  grid-template-rows: auto;
  grid-column-gap: 1%;
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
  background-color: #333;
  padding: 8px;
  text-decoration: none;
  &:focus {
    outline: none;
  }
`;

export class ListToggles extends React.Component {
  state = {
    toggles: [],
    testData: "",
    toggleDetails: null
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
        vscode.setState({ toggles: event.data.fetchToggles });
        this.setState({ toggles: event.data.fetchToggles });
      }

      if (event.data.test) {
        this.setState({ testData: event.data.test });
      }
    });

    if (!appState || !appState.toggles) {
      vscode.postMessage({
        name: "fetchToggles"
      });
    }
  }

  render() {
    const { toggles, toggleDetails } = this.state;
    return (
      <ToggleViews>
        <div>
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
        </div>
        <div>
          {toggleDetails && (
            <div>
              <h3>{toggleDetails.name}</h3>
              <p>
                <label>Date: </label>{" "}
                {new Date(toggleDetails.creationDate).toString()}
              </p>
              <p>
                <label>Description:</label> {toggleDetails.description}
              </p>
              <p>
                <label>Key:</label> {toggleDetails.key} <label>kind:</label>{" "}
                {toggleDetails.kind}
              </p>
              <div>
                {Object.keys(toggleDetails.environments).map(prop => {
                  const envDetails = toggleDetails.environments[prop];
                  return (
                    <p>
                      {envDetails._environmentName}{" "}
                      {envDetails.on ? "On" : "Off"}{" "}
                      <a
                        href={`https://app.launchdarkly.com${
                          envDetails._site.href
                        }`}
                        target="_blank"
                      >
                        View in LaunchDarkly
                      </a>
                    </p>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </ToggleViews>
    );
  }
}

ListToggles.contextType = VsCodeContext;
