const vscode = require("vscode");
const { toggleDetails } = require("./commands/toggle-details");

function activate(context) {
  toggleDetails({ context });
}

exports.activate = activate;

function deactivate() {}
exports.deactivate = deactivate;
