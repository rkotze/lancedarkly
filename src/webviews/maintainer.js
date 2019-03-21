import React from "react";
import { LightBadge } from "./badge.styles";
import { ThemeLabel } from "./toggle-details";

export function Maintainer({ maintainer }) {
  return (
    <p>
      <ThemeLabel>Maintainer:</ThemeLabel>{" "}
      {maintainer.firstName && maintainer.firstName}{" "}
      {maintainer.lastName && maintainer.lastName}{" "}
      <LightBadge>{maintainer.email}</LightBadge>{" "}
    </p>
  );
}
