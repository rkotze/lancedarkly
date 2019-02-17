import React from "react";

const vscode = acquireVsCodeApi();

export const VsCodeContext = React.createContext();

export function VsCodeProvider({ children }) {
  return (
    <VsCodeContext.Provider value={{ vscode }}>
      {children}
    </VsCodeContext.Provider>
  );
}
export const VsCodeConsumer = VsCodeContext.Consumer;
