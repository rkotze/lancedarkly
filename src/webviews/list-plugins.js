import React, { useState, useContext } from "react";
import { VsCodeContext } from "./vs-code-context/index";
import { uniqueKey } from "./unique-key";

import { ThemeLabel, PluginLayout } from "./toggle-data-layout.styles";
import { usePrevious } from "./use-previous";

export function ListPlugins({ ldKey }) {
  const { vscodeSubscribe, vscode } = useContext(VsCodeContext);
  const [fields, setFields] = useState([]);
  const prevLdKey = usePrevious(ldKey);

  vscodeSubscribe(event => {
    const { resolvePlugins } = event.data;
    if (resolvePlugins) {
      setFields(resolvePlugins);
    }
  });

  if (ldKey !== prevLdKey) {
    vscode.postMessage({
      name: "resolvePlugins",
      args: [ldKey, "detailFields"]
    });
  }

  if (fields.length) {
    try {
      return (
        <div>
          {fields.map(({ title, fields }) => (
            <div key={uniqueKey(title)}>
              <h3>{title}</h3>
              {fields.map(list => (
                <PluginLayout key={uniqueKey("plugin")}>
                  {list.slice(0, 4).map((field, i) => {
                    if (i === 0)
                      return <ThemeLabel key={i}>{field}</ThemeLabel>;
                    return <span key={i}>{field}</span>;
                  })}
                </PluginLayout>
              ))}
            </div>
          ))}
        </div>
      );
    } catch (err) {
      return null;
    }
  }
  return null;
}
