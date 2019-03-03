import React from "react";
import styled from "styled-components";

const BaseBadge = styled.span`
  display: inline-block;
  border: none;
  border-radius: 4px;
  padding: 2px 12px;
  margin: 0px 6px;
  font-family: "Courier New", Courier, monospace;
  font-weight: bold;
  color: #222;
`;

const LightBadge = styled(BaseBadge)`
  color: #0c6c8c;
`;

const SwitchBadge = styled(BaseBadge)`
  background-color: ${({ toggleState }) =>
    toggleState ? "#29B28D" : "#0C6C8C"};
`;

const ToggleBadge = styled(BaseBadge)`
  background-color: #ffd981;
`;

const EnvironmentToggleLayout = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  width: 60%;
  margin: 10px 0;
`;

export function ToggleDetails({ toggleDetails }) {
  return (
    <div>
      <h2>{toggleDetails.name}</h2>
      <p>
        <label>Created Date: </label>{" "}
        {new Date(toggleDetails.creationDate).toString()}
      </p>
      <p>
        <label>Description:</label> {toggleDetails.description}
      </p>
      <p>
        <label>Key:</label> <ToggleBadge>{toggleDetails.key}</ToggleBadge>
        {"   "}
        <label>kind:</label> <LightBadge>{toggleDetails.kind}</LightBadge>
      </p>
      <div>
        <h3>Environments</h3>
        {Object.keys(toggleDetails.environments).map(prop => {
          const envDetails = toggleDetails.environments[prop];
          return (
            <EnvironmentToggleLayout>
              <div>{envDetails._environmentName}</div>
              <div>
                <SwitchBadge toggleState={envDetails.on}>
                  {envDetails.on ? "On" : "Off"}
                </SwitchBadge>{" "}
                <a
                  href={`https://app.launchdarkly.com${envDetails._site.href}`}
                  target="_blank"
                >
                  Open in LaunchDarkly
                </a>
              </div>
            </EnvironmentToggleLayout>
          );
        })}
      </div>
    </div>
  );
}
