const vscode = require("vscode");

function copyLdKey(key) {
  vscode.env.clipboard.writeText(key);
}

exports.copyLdKeyAction = { name: "copyLdKey", fn: copyLdKey };
