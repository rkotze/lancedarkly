import React, { useContext, useState } from "react";
import { VsCodeContext } from "../vs-code-context/index";
import { NumberBox, Number, LabelInfo } from "./stats.styles";
import { groupByAge, AGE_CONST } from "./group-by-age";

export function TotalsByAge() {
  const { vscodeSubscribe, vscode } = useContext(VsCodeContext);

  const appState = vscode.getState() || {};
  let [ageGroups, setAgeGroups] = useState(
    groupByAge(appState.toggles || [], Date.now())
  );

  if (!appState.toggles) {
    vscodeSubscribe(event => {
      const { fetchToggles } = event.data;
      if (fetchToggles) {
        setAgeGroups(groupByAge(fetchToggles, Date.now()));
      }
    });
  }

  const year = ageGroups[AGE_CONST.YEAR] || [];
  const month6 = ageGroups[AGE_CONST.SIX_MONTH] || [];
  const month3 = ageGroups[AGE_CONST.THREE_MONTHS] || [];
  const month = ageGroups[AGE_CONST.MONTH] || [];
  const weekOver = ageGroups[AGE_CONST.WEEK] || [];
  const weekUnder = ageGroups[AGE_CONST.DAY] || [];
  return (
    <div>
      <NumberBox>
        <Number>{year && year.length}</Number>{" "}
        <LabelInfo>&gt; 1 year</LabelInfo>
      </NumberBox>
      <NumberBox>
        <Number>{month6 && month6.length}</Number>{" "}
        <LabelInfo>&gt; 6 Months</LabelInfo>
      </NumberBox>
      <NumberBox>
        <Number>{month3 && month3.length}</Number>{" "}
        <LabelInfo>&gt; 3 Months</LabelInfo>
      </NumberBox>
      <NumberBox>
        <Number>{month && month.length}</Number>{" "}
        <LabelInfo>&gt; 1 Month</LabelInfo>
      </NumberBox>
      <NumberBox>
        <Number>{weekOver && weekOver.length}</Number>{" "}
        <LabelInfo>&gt; 1 week</LabelInfo>
      </NumberBox>
      <NumberBox>
        <Number>{weekUnder && weekUnder.length}</Number>{" "}
        <LabelInfo>&lt; 1 week</LabelInfo>
      </NumberBox>
    </div>
  );
}
