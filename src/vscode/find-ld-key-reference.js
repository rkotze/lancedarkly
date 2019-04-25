const vscode = require("vscode");

function findLdKeyReference(key) {
  vscode.workspace.findFiles(key);
}

exports.findLdKeyReferenceAction = {
  name: "findLdKeyReference",
  fn: findLdKeyReference
};
