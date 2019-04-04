import React from "react";
import { Total } from "./total";
import { TotalsByAge } from "./totals-by-age";

export function Stats() {
  return (
    <div>
      <h2>Dashboard</h2>
      <Total />
      <h3>Created</h3>
      <TotalsByAge />
    </div>
  );
}
