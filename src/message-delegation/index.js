const { fetchTogglesAction } = require("../vscode/fetch-toggles");
const { copyLdKeyAction } = require("../vscode/copy-ld-key-clipboard");
const { resolvePluginsAction } = require("../vscode/load-plugins");
const { confirmToggleState } = require("../vscode/update-toggle-state");
// example function
function log(arg) {
  console.log("log: ", arg);
  this.webview.postMessage({
    test: "toggle datasssszzzzzz"
  });
}

function delegator(webview, commandArray) {
  return function({ name, args }) {
    const execute = commandArray.find(command => command.name === name);
    if (execute) return execute.fn.apply(webview, args);
  };
}

exports.messageListener = function messageListener(webview, context) {
  webview.onDidReceiveMessage(
    delegator({ webview, context }, [
      { name: "log", fn: log },
      fetchTogglesAction,
      copyLdKeyAction,
      resolvePluginsAction,
      confirmToggleState
    ]),
    undefined,
    context.subscriptions
  );
};
