# LanceDarkly

> Beta release

1. [Get started](#get-started)
1. [Commands](#commands)
1. [Features](#features)
1. [Contributing](https://github.com/rkotze/lancedarkly/blob/master/CONTRIBUTING.md)

### Problem

Switching between VS Code, LaunchDarkly web app and other toggle integrations is inconvenient during development. Also, the LaunchDarkly app does not provide a view of toggle states (on|off) for **all** environments.

### Solution

A VS Code extension to query LaunchDarkly API to list all toggles and make it easy to read toggle data.

## Get started

1. You will need a LaunchDarkly account.

1. From LaunchDarkly you will need to generate an **Access Token**. You can find it under: `Account Settings -> Access Tokens -> Your access tokens`.

1. Default Project key. It's all lowercase and highlighted in gray. You can find it under: `Account Settings -> Projects -> Your projects`

Update your setting in VS Code under `LanceDarkly`. See image below:

![LanceDarkly Settings](https://user-images.githubusercontent.com/10452163/53906270-64857d80-4042-11e9-9fdd-7b58e03f8cc1.png)

### Commands

- `ctrl+shift+p` -> `LanceDarkly: List all toggles`
  Opens a new tab listing all toggles. Selecting a toggle shows you details about it.

### Features

- List all toggles in a project with a total count
- Search for toggles by **name** and **description**
- Quick overview of toggle details:
  - Title, created date, description, key and kind
  - Variations: value and name
  - Environments: show **on** or **off** state
- Open toggle in LaunchDarkly
- Copy key to clipboard
- Settings for **defaultProject** and **accessToken**
