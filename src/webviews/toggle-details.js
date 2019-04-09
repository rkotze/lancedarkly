import React from "react";

import { CopyText } from "./copy-button";
import { RelativeTimeStamp } from "./relative-time-stamp";
import { Maintainer } from "./maintainer";
import { ListPlugins } from "./list-plugins";
import { EnvironmentVariation } from "./details-view/environment-variation";
import { ToggleBadge } from "./details-view/toggle-badge";

import { LightBadge } from "./badge.styles";
import { FirstHeading, SecondHeading, Button } from "./core.styles";
import {
  ThemeLabel,
  VariationToggleLayout,
  EnvironmentToggleLayout
} from "./toggle-data-layout.styles";

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
        {Object.keys(toggleDetails.environments).map((prop, i) => {
          const envDetails = toggleDetails.environments[prop];
          return (
            <EnvironmentToggleLayout key={envDetails.lastModified}>
              <ThemeLabel>{envDetails._environmentName}:</ThemeLabel>
              <ToggleBadge envDetails={envDetails} ldKey={toggleDetails.key} />
              <EnvironmentVariation
                envDetails={envDetails}
                variations={toggleDetails.variations}
              />
              <div>
                <Button
                  href={`${BASE_URI}${envDetails._site.href}`}
                  target="_blank"
                >
                  Edit
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
