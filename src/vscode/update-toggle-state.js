const vscode = require("vscode");
const fetch = require("node-fetch");

async function updateToggleState(key, environment, on, comment) {
  try {
    const settings = vscode.workspace.getConfiguration("LanceDarkly");
    const accessToken = settings.get("accessToken");
    const defaultProject = settings.get("defaultProject");
    const baseURI = settings.get("baseURI");
    const toggleStateBody = JSON.stringify({
      comment: comment || "",
      patch: [
        {
          op: "replace",
          path: `/environments/${environment}/on`,
          value: on
        }
      ]
    });

    const flag = await fetch(
      `${baseURI}/api/v2/flags/${defaultProject}/${key}`,
      {
        method: "PATCH",
        headers: new fetch.Headers({
          Authorization: accessToken,
          "Content-Type": "application/json"
        }),
        body: toggleStateBody
      }
    );

    if (flag.ok) return true;

    vscode.window.showErrorMessage("Error: status code: " + flag.status);
    return false;
  } catch (err) {
    vscode.window.showErrorMessage("Error: " + err.message);
  }
}

async function confirmToggleState(key, environment, on, confirmText) {
  const updated = await updateToggleState(key, environment, on, confirmText);
  if (updated) {
    this.webview.postMessage({
      confirmToggleState: { on: on, env: environment, key: key }
    });
  }
}

exports.confirmToggleState = {
  name: "confirmToggleState",
  fn: confirmToggleState
};
