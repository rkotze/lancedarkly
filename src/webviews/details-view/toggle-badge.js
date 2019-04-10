import React from "react";
import { SwitchBadge } from "../badge.styles";

export function ToggleBadge({ on, onClick }) {
  return (
    <div>
      <SwitchBadge toggleState={on} onClick={onClick}>
        {on ? "On" : "Off"}
      </SwitchBadge>{" "}
    </div>
  );
}
