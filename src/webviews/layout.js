import React from "react";

export function Layout({ children }) {
  return (
    <div>
      <img src={`${MEDIA_URI}/lancedarkly-logo.svg`} />
      <h2>LanceDarkly</h2>
      {children}
    </div>
  );
}
