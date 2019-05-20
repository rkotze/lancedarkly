<h1> <img alt="lancedarkly logo" src="https://user-images.githubusercontent.com/10452163/58038609-3d5e2880-7b28-11e9-9a6c-d219a9a617e0.png" /> LanceDarkly</h1>

[![](https://vsmarketplacebadge.apphb.com/version-short/RichardKotze.lancedarkly.svg)](https://marketplace.visualstudio.com/items?itemName=RichardKotze.lancedarkly)

1. [Get started](#get-started)
1. [Commands](#commands)
1. [Features](#features)
1. [Contributing](https://github.com/rkotze/lancedarkly/blob/master/CONTRIBUTING.md)
1. [Plugins API](#plugins)

![image](https://user-images.githubusercontent.com/10452163/58037858-5960ca80-7b26-11e9-9b45-b7acd5ba178c.png)

### Problem

Switching between VS Code, LaunchDarkly web app and other toggle integrations is inconvenient during development. Also, the LaunchDarkly app does not provide a view of toggle states (on|off) for **all** environments.

### Solution

A VS Code extension to bring LaunchDarkly toggle management closer to your development environment and show **all** environment toggle states. Toggle on|off from VS Code.

## Get started

1. You will need a LaunchDarkly account.

1. From LaunchDarkly you will need to generate an **Access Token**. You can find it under: `Account Settings -> Access Tokens -> Your access tokens`.

1. Set the `role` to `writer` to update toggle state (Turn toggles on/off).

1. Default Project key. It's all lowercase and highlighted in gray. You can find it under: `Account Settings -> Projects -> Your projects`

Update your setting in VS Code under `LanceDarkly`. See image below:

![LanceDarkly Settings](https://user-images.githubusercontent.com/10452163/53906270-64857d80-4042-11e9-9fdd-7b58e03f8cc1.png)

### Commands

- `ctrl+shift+p` -> `LanceDarkly: List all toggles`
  Opens a new tab listing all toggles. Selecting a toggle shows you details about it.

### Features

- List all toggles in a project with a total count
- Search for toggles by **name** and **description**
- Sort toggles by created date
- Quick overview of toggle details:
  - Title, created date, description, key and kind
  - Maintainer information
  - Variations: value and name
  - Environments: show **on** or **off** state
  - Show what variant is set for the selected toggle state
  - Show a count of rules and prerequisites each environment
- Update toggle state on/off per environment
- Open toggle in LaunchDarkly
- Copy key to clipboard
- Settings for **defaultProject** and **accessToken**
- Display data from third parties using the LanceDarkly Plugin API

### Plugins

Extend the toggle details view with third party data.

Create a folder in your home directory called `lancedarkly` with a file called `plugins.js`: `%user%/lancedarkly/plugins.js`.

The plugin function is called when the `LanceDarkly: List all toggles` command is called.

Plugin API:

Only change the `title` and `fields` properties. Fields must be a 2D array.

The `detailFields` will pass through the toggle key.

Maximum of four fields and unlimited rows. First field has LanceDarkly label style applied.

Field widths: 20% 15% 15% 50%

```javascript
// plugins.js

async function plugins() {
  const asyncData = await thirdPartyData(); // resolve data before turning API.
  return [
    {
      detailFields(key) {
        return {
          title: "Title",
          fields: [
            ["Production", "key", "guid", "random"],
            ["Integration", "key", "guid", "random"]
          ]
        };
      }
    }
  ];
}

exports.plugins = plugins;
```
