import React from "react";
import { InlineLightBadge } from "../badge.styles";

export function ToggleConditionals({ rules, prerequisites }) {
  return (
    <>
      <div />
      <div />
      <div>
        <InlineLightBadge>Rules: {rules.length}</InlineLightBadge>
        <InlineLightBadge>
          Prerequisites: {prerequisites.length}
        </InlineLightBadge>
      </div>
      <div />
    </>
  );
}
