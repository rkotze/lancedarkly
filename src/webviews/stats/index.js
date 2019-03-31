import React from "react";
import { Total } from "./total";
import { TotalsByAge } from "./totals-by-age";

export function Stats() {
  return (
    <div>
      <Total />
      <TotalsByAge />
    </div>
  );
}
