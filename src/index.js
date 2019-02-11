const vscode = require('vscode');
const { toggleDetails } = require('./commands/toggle-details');

function activate(context) {
  toggleDetails({ context });
  const projects = vscode.workspace.getConfiguration('LanceDarkly').get('projects');
}

exports.activate = activate;

function deactivate() {}
exports.deactivate = deactivate;
