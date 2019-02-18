const path = require("path");
const vscode = require("vscode");

const { messageListener } = require("../message-delegation/");

function toggleDetails({ context }) {
  const settings = vscode.workspace.getConfiguration("LanceDarkly");
  const accessToken = settings.get("accessToken");
  const defaultProject = settings.get("defaultProject");
  const baseURI = settings.get("baseURI");

  context.subscriptions.push(
    vscode.commands.registerCommand("lancedarkly.toggleDetails", () => {
      const panel = vscode.window.createWebviewPanel(
        "toggleDetails",
        `LanceDarkly: ${defaultProject}`,
        vscode.ViewColumn.One,
        {
          enableScripts: true
        }
      );

      panel.webview.html = getWebviewContent(context);
      messageListener(panel.webview, context);

      panel.webview.postMessage({
        config: {
          accessToken,
          defaultProject,
          baseURI
        }
      });
    })
  );
}
exports.toggleDetails = toggleDetails;

function getWebviewContent(context) {
  const scriptPathOnDisk = vscode.Uri.file(
    path.join(context.extensionPath, "dist", "bundle.js")
  );

  const scriptUri = scriptPathOnDisk.with({ scheme: "vscode-resource" });

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
<div id="lanceDarklyApp"></div>
<script src="${scriptUri}"></script>
</body>
</html>`;
}
