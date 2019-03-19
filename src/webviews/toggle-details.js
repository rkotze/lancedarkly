import React from "react";
import styled from "styled-components";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import { LightBadge, SwitchBadge } from "./badge.styles";
import { CopyText } from "./copy-button";

const EnvironmentToggleLayout = styled.div`
  display: grid;
  grid-template-columns: 25% 15% 60%;
  width: 100%;
  margin: 10px 0;
`;

const VariationToggleLayout = styled.div`
  display: grid;
  grid-template-columns: 20% 35% 45%;
  width: 100%;
  margin: 10px 0;
`;

const ThemeLabel = styled.label`
  padding-left: 8px;
  font-style: italic;
  body.vscode-dark & {
    color: #cdcdcd;
  }
  body.vscode-light & {
    color: #232323;
  }
`;

export function ToggleDetails({ toggleDetails }) {
  TimeAgo.addLocale(en);
  const timeAgo = new TimeAgo("en-GB");
  return (
    <div>
      <h2>{toggleDetails.name}</h2>
      <p>
        <ThemeLabel>Created Date: </ThemeLabel>{" "}
        <time
          title={new Date(toggleDetails.creationDate).toString()}
          datetime={new Date(toggleDetails.creationDate).toISOString()}
        >
          {timeAgo.format(new Date(toggleDetails.creationDate))}
        </time>
      </p>
      <p>
        <ThemeLabel>Description:</ThemeLabel> {toggleDetails.description}
      </p>
      <p>
        <ThemeLabel>Key:</ThemeLabel>{" "}
        <LightBadge>{toggleDetails.key}</LightBadge>
        {"   "}
        <CopyText textToCopy={toggleDetails.key} successText="Copied">
          Copy key
        </CopyText>
        {"   "}
        <label>kind:</label> <LightBadge>{toggleDetails.kind}</LightBadge>
      </p>
      <div>
        <h3>Variations</h3>
        {toggleDetails.variations.map((variation, i) => (
          <VariationToggleLayout>
            <ThemeLabel>Variation {i + 1}:</ThemeLabel>{" "}
            <span>{variation.name}</span>
            <LightBadge>{String(variation.value)}</LightBadge>
          </VariationToggleLayout>
        ))}
      </div>
      <div>
        <h3>Environments</h3>
        {Object.keys(toggleDetails.environments).map(prop => {
          const envDetails = toggleDetails.environments[prop];
          return (
            <EnvironmentToggleLayout>
              <ThemeLabel>{envDetails._environmentName}:</ThemeLabel>
              <div>
                <SwitchBadge toggleState={envDetails.on}>
                  {envDetails.on ? "On" : "Off"}
                </SwitchBadge>{" "}
              </div>
              <div>
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
