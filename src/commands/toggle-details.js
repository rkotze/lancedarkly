const path = require("path");
const vscode = require("vscode");
const { loadPlugins } = require("../vscode/load-plugins");
const { getSettings } = require("../vscode/get-settings");

const packageJson = require("../../package.json");

const { messageListener } = require("../message-delegation/");

function toggleDetails({ context }) {
  let panel;
  context.subscriptions.push(
    vscode.commands.registerCommand("lancedarkly.listAllToggles", () => {
      const columnToShowIn = vscode.window.activeTextEditor
        ? vscode.window.activeTextEditor.viewColumn
        : undefined;

      if (panel) {
        panel.reveal(columnToShowIn);
      } else {
        const settings = getSettings();
        loadPlugins();
        panel = vscode.window.createWebviewPanel(
          "listAllToggles",
          `LanceDarkly: ${settings.defaultProject}`,
          vscode.ViewColumn.One,
          {
            enableScripts: true,
            retainContextWhenHidden: true // prevents rebuilding the view when switching tabs
          }
        );
        const light = vscode.Uri.file(
          context.asAbsolutePath("media/lancedarkly-logo-dark.svg")
        );
        const dark = vscode.Uri.file(
          context.asAbsolutePath("media/lancedarkly-logo-light.svg")
        );
        panel.iconPath = {
          light,
          dark
        };

        panel.webview.html = getWebviewContent(context, settings);
        messageListener(panel.webview, context);
        panel.onDidDispose(
          () => {
            panel = undefined;
          },
          null,
          context.subscriptions
        );
      }
    })
  );
}

exports.toggleDetails = toggleDetails;

function getWebviewContent(context, settings) {
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
var VERSION = '${packageJson.version}';
var BASE_URI = '${settings.baseURI}';</script>
<script src="${scriptUri}"></script>
</body>
</html>`;
}
