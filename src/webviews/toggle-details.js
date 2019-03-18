import React from "react";
import styled from "styled-components";
import { LightBadge, SwitchBadge, GreenBadge } from "./badge.styles";
import { CopyText } from "./copy-button";

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
        <label>Key:</label> <GreenBadge>{toggleDetails.key}</GreenBadge>
        {"   "}
        <CopyText textToCopy={toggleDetails.key} successText="Copied">
          Copy key
        </CopyText>
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
