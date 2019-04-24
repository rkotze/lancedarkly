const vscode = require("vscode");

export function getSettings() {
  const settings = vscode.workspace.getConfiguration("LanceDarkly");
  const accessToken = settings.get("accessToken");
  const defaultProject = settings.get("defaultProject");
  const baseURI = settings.get("baseURI");
  return {
    accessToken,
    defaultProject,
    baseURI
  };
}
