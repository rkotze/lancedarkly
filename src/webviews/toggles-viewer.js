import React, { Component } from "react";
// import { Layout } from "./layout";
import { LanceBar, Logo, Title, SupVersion } from "./lance-bar.styles";
import { ListToggles } from "./list-toggles";
import { Stats } from "./stats";
import { ButtonLink } from "./stats/stats.styles";

export class TogglesViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: true
    };
  }

  onToggleStatus = e => {
    e.preventDefault();
    this.setState({
      stats: !this.state.stats
    });
  };
  render() {
    const { stats } = this.state;
    return (
      <div>
        <LanceBar>
          <Logo src={`${MEDIA_URI}/lancedarkly-logo.svg`} />

          <Title>
            LanceDarkly <SupVersion>v{VERSION}</SupVersion>
          </Title>

          <ButtonLink href="#" onClick={this.onToggleStatus}>
            Stats
          </ButtonLink>
        </LanceBar>
        <ListToggles>{stats && <Stats />}</ListToggles>
      </div>
    );
  }
}
