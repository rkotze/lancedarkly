const fs = require("fs");
const os = require("os");
const path = require("path");

let pluginList = [];
async function loadPlugins() {
  try {
    const pluginPath = path.join(os.homedir(), "lancedarkly", "plugins.js");
    if (fs.existsSync(pluginPath)) {
      const { plugins } = require(pluginPath);

      pluginList = await plugins();
    }
  } catch (err) {}
}

function resolvePlugins(key, type) {
  try {
    const resolved = pluginList.map(plugin => {
      return plugin[type](key);
    });
    this.webview.postMessage({
      resolvePlugins: resolved
    });
  } catch (err) {}
}

exports.resolvePluginsAction = { name: "resolvePlugins", fn: resolvePlugins };
exports.loadPlugins = loadPlugins;
