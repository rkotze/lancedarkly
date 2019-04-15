const vscode = require("vscode");

class LaunchDarklyApiError extends Error {
  constructor(statusCode, fetchResponse) {
    super(`LaunchDarkly API request failed`);
    this.name = this.constructor.name;
    this.data = { statusCode, fetchResponse };
  }
  popupAlert() {
    const { statusCode, fetchResponse } = this.data;
    vscode.window.showErrorMessage(
      `${this.message}: ${statusCode} ${fetchResponse.message}`
    );
  }
}
exports.LaunchDarklyApiError = LaunchDarklyApiError;
