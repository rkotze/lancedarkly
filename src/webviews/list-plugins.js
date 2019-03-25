import React, { useEffect, useState, useContext } from "react";
import { VsCodeContext } from "./vs-code-context/index";

import { ThemeLabel, PluginLayout } from "./toggle-data-layout.styles";

export function ListPlugins({ ldKey }) {
  const { vscodeSubscribe, vscode } = useContext(VsCodeContext);
  const [fields, setFields] = useState([]);
  useEffect(() => {
    vscodeSubscribe(event => {
      const { resolvePlugins } = event.data;
      if (resolvePlugins) {
        setFields(resolvePlugins);
      }
    });

    vscode.postMessage({
      name: "resolvePlugins",
      args: [ldKey, "detailFields"]
    });
  });

  if (fields.length) {
    try {
      return (
        <div>
          {fields.map(({ title, fields }) => (
            <div>
              <h3>{title}</h3>
              {fields.map(list => (
                <PluginLayout>
                  {list.slice(0,4).map((field, i) => {
                    if (i === 0) return <ThemeLabel>{field}</ThemeLabel>;
                    return <span>{field}</span>;
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
