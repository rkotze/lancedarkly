const vscode = require("vscode");
const fetch = require("node-fetch");

async function updateToggleState(key, environment, on, comment) {
  try {
    const settings = vscode.workspace.getConfiguration("LanceDarkly");
    const accessToken = settings.get("accessToken");
    const defaultProject = settings.get("defaultProject");
    const baseURI = settings.get("baseURI");
    const flag = await fetch(
      `${baseURI}/api/v2/flags/${defaultProject}/${key}`,
      {
        method: "PATCH",
        headers: new fetch.Headers({
          Authorization: accessToken
        }),
        body: JSON.stringify({
          comment: comment || "",
          patch: [
            {
              op: "replace",
              path: `/environments/${environment}/on`,
              value: on
            }
          ]
        })
      }
    );
  } catch (err) {
    vscode.window.showErrorMessage("Error: " + err.message);
  }
  return await flag.json();
}

async function confirmToggleState(key, environment, on) {
  // const toggles = await vscode.window.showInputBox({
  //   prompt: `Confirm: ${key}, ${environment}, ${on}`,
  //   placeholder: "Comment"
  // });

  const box = vscode.window.createInputBox();
  box.title = `Toggle: ${key}, ${environment}, ${on}`;
  box.placeholder = "Comment";
  box.buttons = [
    new vscode.ThemeIcon("check"),
    new vscode.ThemeIcon("remove-close")
  ];
  box.show();
  box.onDidAccept(() => {
    box.hide();
    console.log("Comment: ", box.value);
  });
  // console.log(toggles);
  // this.webview.postMessage({
  //   fetchToggles: toggles.items
  // });
}

async function ConfirmInputBox() {
  return vscode.window.create;
}

exports.confirmToggleState = {
  name: "confirmToggleState",
  fn: confirmToggleState
};
