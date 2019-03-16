import React from "react";
import { LanceBar, Logo, Title } from "./lance-bar";

export function Layout({ children }) {
  return (
    <div>
      <LanceBar>
        <Logo src={`${MEDIA_URI}/lancedarkly-logo.svg`} />

        <Title>LanceDarkly</Title>
      </LanceBar>
      {children}
    </div>
  );
}
