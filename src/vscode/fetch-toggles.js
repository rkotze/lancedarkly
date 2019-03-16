const vscode = require("vscode");
const fetch = require("node-fetch");

async function fetchToggles() {
  const settings = vscode.workspace.getConfiguration("LanceDarkly");
  const accessToken = settings.get("accessToken");
  const defaultProject = settings.get("defaultProject");
  const baseURI = settings.get("baseURI");
  const rawFlags = await fetch(`${baseURI}/api/v2/flags/${defaultProject}`, {
    headers: new fetch.Headers({
      Authorization: accessToken
    })
  });
  return await rawFlags.json();
}

async function fetchTogglesMessage() {
  const toggles = await fetchToggles();
  this.webview.postMessage({
    fetchToggles: toggles.items
  });
}

exports.fetchTogglesAction = { name: "fetchToggles", fn: fetchTogglesMessage };
