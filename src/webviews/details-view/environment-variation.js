import React from "react";
import { LightBadge } from "../badge.styles";

export function EnvironmentVariation({ variations, envDetails }) {
  return (
    <div>
      {!envDetails.fallthrough.rollout && (
        <span>
          Default: 100%{" "}
          <LightBadge>
            {String(variations[envDetails.fallthrough.variation].value)}
          </LightBadge>
        </span>
      )}
    </div>
  );
}
