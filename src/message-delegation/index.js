function log(arg) {
  console.log("log: ", arg);
  this.postMessage({
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
    delegator(webview, [{ name: "log", fn: log }]),
    undefined,
    context.subscriptions
  );
};
