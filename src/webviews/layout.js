import React from "react";
import { LanceBar, Logo, Title, SupVersion } from "./lance-bar.styles";

export function Layout({ children }) {
  return (
    <div>
      <LanceBar>
        <Logo src={`${MEDIA_URI}/lancedarkly-logo.svg`} />

        <Title>
          LanceDarkly <SupVersion>v{VERSION}</SupVersion>
        </Title>
      </LanceBar>
      {children}
    </div>
  );
}
