import React from "react";
import { shallow } from "enzyme";

import { EnvironmentVariation } from "./environment-variation";

describe("Environment variation", function() {
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
        variation: 1
      },
      offVariation: 0,
      _environmentName: "Production"
    };
    const render = shallow(
      <EnvironmentVariation variations={variations} envDetails={envDetails} />
    );

    expect(render.find("VariationView").prop("variation")).toEqual("true");
  });

  it("when toggle is off is shows the off variation", function() {
    const envDetails = {
      on: false,
      archived: false,
      rules: [],
      fallthrough: {
        variation: 1
      },
      offVariation: 0,
      _environmentName: "Production"
    };
    const render = shallow(
      <EnvironmentVariation variations={variations} envDetails={envDetails} />
    );

    expect(render.find("VariationView").prop("variation")).toEqual("false");
  });

  it("when toggle is on and rollout is set, display rollout values", function() {
    const envDetailsRollout = {
      on: true,
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
    const render = shallow(
      <EnvironmentVariation
        variations={variations}
        envDetails={envDetailsRollout}
      />
    );

    expect(render.find("VariationView").prop("variationList")).toEqual([
      {
        variation: "false",
        weight: 50
      },
      {
        variation: "true",
        weight: 50
      }
    ]);
  });
});
