import React from "react";

import { CopyText } from "./copy-button";
import { RelativeTimeStamp } from "./relative-time-stamp";
import { Maintainer } from "./maintainer";
import { ListPlugins } from "./list-plugins";

import { LightBadge, SwitchBadge } from "./badge.styles";
import {
  ThemeLabel,
  VariationToggleLayout,
  EnvironmentToggleLayout
} from "./toggle-data-layout.styles";

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
          <VariationToggleLayout key={i}>
            <ThemeLabel>Variation {i + 1}:</ThemeLabel>{" "}
            <LightBadge>{String(variation.value)}</LightBadge>
            <span>{variation.name}</span>
          </VariationToggleLayout>
        ))}
      </div>
      <div>
        <h3>Environments</h3>
        {Object.keys(toggleDetails.environments).map((prop, i) => {
          const envDetails = toggleDetails.environments[prop];
          return (
            <EnvironmentToggleLayout key={i}>
              <ThemeLabel>{envDetails._environmentName}:</ThemeLabel>
              <div>
                <SwitchBadge toggleState={envDetails.on}>
                  {envDetails.on ? "On" : "Off"}
                </SwitchBadge>{" "}
              </div>
              <div>
                {!envDetails.fallthrough.rollout && (
                  <span>
                    Default: 100%{" "}
                    <LightBadge>
                      {String(
                        toggleDetails.variations[
                          envDetails.fallthrough.variation
                        ].value
                      )}
                    </LightBadge>
                  </span>
                )}
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
