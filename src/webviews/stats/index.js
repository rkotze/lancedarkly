import React from "react";
import { Total } from "./total";
import { TotalsByAge } from "./totals-by-age";
import { FirstHeading, SecondHeading } from "../core.styles";
import { GreenBadge } from "../badge.styles";

export function Stats() {
  return (
    <div>
      <FirstHeading>Dashboard</FirstHeading>
      <SecondHeading>
        Selected project: <GreenBadge>{PROJECT}</GreenBadge>
      </SecondHeading>
      <SecondHeading>Total</SecondHeading>
      <Total />
      <SecondHeading>Created</SecondHeading>
      <TotalsByAge />
    </div>
  );
}
