import React from "react";
import { Total } from "./total";
import { TotalsByAge } from "./totals-by-age";
import { FirstHeading, SecondHeading } from "../core.styles";

export function Stats() {
  return (
    <div>
      <FirstHeading>Dashboard</FirstHeading>
      <Total />
      <SecondHeading>Created</SecondHeading>
      <TotalsByAge />
    </div>
  );
}
