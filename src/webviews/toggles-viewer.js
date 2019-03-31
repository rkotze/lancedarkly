import React, { Component } from "react";
import { LanceBar, Logo, Title, SupVersion } from "./lance-bar.styles";
import { ListToggles } from "./list-toggles";
import { Stats } from "./stats";
import { ButtonLink } from "./stats/stats.styles";
import { ToggleDetails } from "./toggle-details";

export class TogglesViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: true
    };
  }

  onToggleStats = e => {
    e.preventDefault();
    this.setState({
      stats: !this.state.stats
    });
  };

  handleToggleClicked = () => {
    this.setState({
      stats: false
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

          <ButtonLink href="#" onClick={this.onToggleStats}>
            Stats
          </ButtonLink>
        </LanceBar>
        <ListToggles onToggleClicked={this.handleToggleClicked}>
          {({ toggleDetails }) => {
            if (stats) return <Stats />;
            if (toggleDetails)
              return <ToggleDetails toggleDetails={toggleDetails} />;
          }}
        </ListToggles>
      </div>
    );
  }
}
