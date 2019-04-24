const fetch = require("node-fetch");
const { getSettings } = require("./get-settings");

async function fetchToggles() {
  const { accessToken, defaultProject, baseURI } = getSettings();

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
