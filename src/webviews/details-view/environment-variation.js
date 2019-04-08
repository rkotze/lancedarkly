import React from "react";
import { InlineLightBadge } from "../badge.styles";

function VariationView({ variation, variationList }) {
  if (variationList) {
    return (
      <div>
        {variationList.map(({ variation, weight }, i) => {
          return (
            <span key={i}>
              <InlineLightBadge colour="green">{weight}%</InlineLightBadge>
              <InlineLightBadge>{variation}</InlineLightBadge>
            </span>
          );
        })}
      </div>
    );
  }
  return (
    <div>
      <InlineLightBadge>{variation}</InlineLightBadge>
    </div>
  );
}

export function EnvironmentVariation({ variations, envDetails }) {
  const { fallthrough, offVariation, on } = envDetails;
  if (on && !fallthrough.rollout) {
    return (
      <VariationView
        variation={String(variations[fallthrough.variation].value)}
      />
    );
  }
  if (on && fallthrough.rollout) {
    const variationList = fallthrough.rollout.variations.map(toggle => {
      return {
        variation: String(variations[toggle.variation].value),
        weight: toggle.weight / 1000
      };
    });
    return <VariationView variationList={variationList} />;
  }

  return <VariationView variation={String(variations[offVariation].value)} />;
}
