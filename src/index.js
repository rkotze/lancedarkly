const path = require("path");
const vscode = require("vscode");

function activate(context) {
  context.subscriptions.push(
    vscode.commands.registerCommand("lancedarkly.viewToggle", () => {
      // Create and show panel
      const panel = vscode.window.createWebviewPanel(
        "toggleDetails",
        "Toggle Details",
        vscode.ViewColumn.One,
        {
          enableScripts: true
        }
      );

      panel.webview.html = getWebviewContent(context);
    })
  );
}
exports.activate = activate;

function deactivate() {}
exports.deactivate = deactivate;

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
    <title>Cat Coding</title>
</head>
<body>
<div id="lanceDarklyApp"></div>
<script src="${scriptUri}"></script>
</body>
</html>`;
}
