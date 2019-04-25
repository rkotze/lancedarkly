import React from "react";

import { uniqueKey } from "../unique-key";
import { CopyText } from "./copy-button";
import { FindReferences } from "./find-references-button";
import { RelativeTimeStamp } from "../relative-time-stamp";
import { Maintainer } from "./maintainer";
import { ListPlugins } from "../list-plugins";
import { EnvironmentVariation } from "./environment-variation";
import { ToggleBadge } from "./toggle-badge";
import { HandleToggleState } from "./handle-toggle-state";

import { LightBadge } from "../badge.styles";
import { FirstHeading, SecondHeading, Button } from "../core.styles";
import {
  ThemeLabel,
  VariationToggleLayout,
  EnvironmentToggleLayout
} from "../toggle-data-layout.styles";

export function ToggleDetails({ toggleDetails }) {
  return (
    <div>
      <FirstHeading>{toggleDetails.name}</FirstHeading>
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
        <LightBadge>{toggleDetails.key}</LightBadge>{" "}
        <CopyText textToCopy={toggleDetails.key} successText="Copied">
          Copy key
        </CopyText>{" "}
        <FindReferences ldKey={toggleDetails.key} />
      </p>
      <p>
        <ThemeLabel>Kind:</ThemeLabel>{" "}
        <LightBadge>{toggleDetails.kind}</LightBadge>
      </p>
      <div>
        <SecondHeading>Variations</SecondHeading>
        {toggleDetails.variations.map((variation, i) => (
          <VariationToggleLayout key={i}>
            <ThemeLabel>Variation {i + 1}:</ThemeLabel>{" "}
            <LightBadge>{String(variation.value)}</LightBadge>
            <span>{variation.name}</span>
          </VariationToggleLayout>
        ))}
      </div>
      <div>
        <SecondHeading>Environments</SecondHeading>
        {Object.keys(toggleDetails.environments).map(prop => {
          const envDetails = toggleDetails.environments[prop];
          return (
            <EnvironmentToggleLayout key={uniqueKey(toggleDetails.key)}>
              <ThemeLabel>{envDetails._environmentName}:</ThemeLabel>
              <HandleToggleState
                envDetails={envDetails}
                ldKey={toggleDetails.key}
              >
                {(handleToggleState, { envDetails, on }) => (
                  <React.Fragment>
                    <ToggleBadge on={on} onClick={handleToggleState} />
                    <EnvironmentVariation
                      envDetails={envDetails}
                      variations={toggleDetails.variations}
                    />
                  </React.Fragment>
                )}
              </HandleToggleState>

              <div>
                <Button
                  href={`${BASE_URI}${envDetails._site.href}`}
                  target="_blank"
                  title="Open in LaunchDarkly"
                >
                  Open
                </Button>
              </div>
            </EnvironmentToggleLayout>
          );
        })}
      </div>
      <ListPlugins ldKey={toggleDetails.key} />
    </div>
  );
}
