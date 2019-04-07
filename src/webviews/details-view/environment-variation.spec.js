import React from "react";
import { shallow } from "enzyme";

import { EnvironmentVariation } from "./environment-variation";

describe("Environment variation", function() {
  const envDetailsRollout = {
    on: false,
    archived: false,
    rules: [],
    fallthrough: {
      rollout: {
        variations: [
          {
            variation: 0,
            weight: 50000
          },
          {
            variation: 1,
            weight: 50000
          }
        ]
      }
    },
    offVariation: 0,
    _environmentName: "Production"
  };
  const variations = [
    {
      value: false,
      name: "Experiment A"
    },
    {
      value: true,
      name: "Experiment B"
    }
  ];

  it("when toggle is on and default is set to one variation", function() {
    const envDetails = {
      on: true,
      archived: false,
      rules: [],
      fallthrough: {
        variation: 0
      },
      offVariation: 0,
      _environmentName: "Production"
    };
    const render = shallow(
      <EnvironmentVariation variations={variations} envDetails={envDetails} />
    );

    expect(render.text()).toContain("false");
  });
});
