const path = require("path");
const vscode = require("vscode");

const packageJson = require("../../package.json");

const { messageListener } = require("../message-delegation/");

function toggleDetails({ context }) {
  const settings = vscode.workspace.getConfiguration("LanceDarkly");
  const defaultProject = settings.get("defaultProject");
  context.subscriptions.push(
    vscode.commands.registerCommand("lancedarkly.listAllToggles", () => {
      const panel = vscode.window.createWebviewPanel(
        "listAllToggles",
        `LanceDarkly: ${defaultProject}`,
        vscode.ViewColumn.One,
        {
          enableScripts: true,
          retainContextWhenHidden: true // prevents rebuilding the view when switching tabs
        }
      );

      panel.webview.html = getWebviewContent(context);
      messageListener(panel.webview, context);
    })
  );
}
exports.toggleDetails = toggleDetails;

function getWebviewContent(context) {
  const scriptPathOnDisk = vscode.Uri.file(
    path.join(context.extensionPath, "dist", "bundle.js")
  );

  const scriptUri = scriptPathOnDisk.with({ scheme: "vscode-resource" });

  const mediaPathOnDisk = vscode.Uri.file(
    path.join(context.extensionPath, "media")
  );

  const mediaUri = mediaPathOnDisk.with({ scheme: "vscode-resource" });

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
<div id="lanceDarklyApp"></div>
<script>
var MEDIA_URI = '${mediaUri}';
var VERSION = '${packageJson.version}';</script>
<script src="${scriptUri}"></script>
</body>
</html>`;
}
