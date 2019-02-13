const path = require("path");
const vscode = require("vscode");

function toggleDetails({context}) {
  context.subscriptions.push(
    vscode.commands.registerCommand("lancedarkly.toggleDetails", () => {
      const panel = vscode.window.createWebviewPanel(
        "toggleDetails",
        "Toggle Details",
        vscode.ViewColumn.One,
        {
          enableScripts: true
        }
      );

      panel.webview.html = getWebviewContent(context);
      panel.webview.onDidReceiveMessage(
        message => {
          switch (message.command) {
            case "alert":
              vscode.window.showErrorMessage(message.text);
              return;
          }
        },
        undefined,
        context.subscriptions
      );
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
