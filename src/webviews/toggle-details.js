import React from "react";
import styled from "styled-components";

import { LightBadge, SwitchBadge } from "./badge.styles";
import { CopyText } from "./copy-button";
import { RelativeTimeStamp } from "./relative-time-stamp";
import { Maintainer } from "./maintainer";
import { ListPlugins } from "./list-plugins";

const EnvironmentToggleLayout = styled.div`
  display: grid;
  grid-template-columns: 25% 15% 60%;
  width: 100%;
  margin: 10px 0;
`;

const VariationToggleLayout = styled.div`
  display: grid;
  grid-template-columns: 20% 20% 60%;
  width: 100%;
  margin: 10px 0;
`;

export const ThemeLabel = styled.label`
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
  return (
    <div>
      <h2>{toggleDetails.name}</h2>
      <p>
        <ThemeLabel>Created Date:</ThemeLabel>{" "}
        <RelativeTimeStamp dateNumber={toggleDetails.creationDate} />
      </p>
      <p>
        <ThemeLabel>Description:</ThemeLabel> {toggleDetails.description}
      </p>
      {toggleDetails._maintainer && (
        <Maintainer maintainer={toggleDetails._maintainer} />
      )}
      <p>
        <ThemeLabel>Key:</ThemeLabel>{" "}
        <LightBadge>{toggleDetails.key}</LightBadge>
        {"   "}
        <CopyText textToCopy={toggleDetails.key} successText="Copied">
          Copy key
        </CopyText>
      </p>
      <p>
        <ThemeLabel>Kind:</ThemeLabel>{" "}
        <LightBadge>{toggleDetails.kind}</LightBadge>
      </p>
      <div>
        <h3>Variations</h3>
        {toggleDetails.variations.map((variation, i) => (
          <VariationToggleLayout>
            <ThemeLabel>Variation {i + 1}:</ThemeLabel>{" "}
            <LightBadge>{String(variation.value)}</LightBadge>
            <span>{variation.name}</span>
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
                <a href={`${BASE_URI}${envDetails._site.href}`} target="_blank">
                  Open in LaunchDarkly
                </a>
              </div>
            </EnvironmentToggleLayout>
          );
        })}
      </div>
      <ListPlugins ldKey={toggleDetails.key} />
    </div>
  );
}
