const vscode = require("vscode");

function activate(context) {
  context.subscriptions.push(
    vscode.commands.registerCommand("lancedarkly.viewToggle", () => {
      // Create and show panel
      const panel = vscode.window.createWebviewPanel(
        "toggleDetails",
        "Toggle Details",
        vscode.ViewColumn.One,
        {}
      );

      // And set its HTML content
      panel.webview.html = getWebviewContent();
    })
  );
}
exports.activate = activate;

function deactivate() {}
exports.deactivate = deactivate;

function getWebviewContent() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cat Coding</title>
</head>
<body>
<script src="/dist/bundle.js"></script>
</body>
</html>`;
}
