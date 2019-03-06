# LanceDarkly

1. [Get started](#get-started)
1. [Contributing](#contributing)

## Get started

1. You will need a LaunchDarkly account.

1. From LaunchDarkly you will need to generate a **Access Token**. You can find it under: `Account Settings -> Access Tokens -> Your access tokens`.

1. Default Project key. It's all lowercase and highlighted in gray. You can find it under: `Account Settings -> Projects -> Your projects`

Update you're setting in VS Code under `LanceDarkly`. See image below:

![LanceDarkly Settings](https://user-images.githubusercontent.com/10452163/53906270-64857d80-4042-11e9-9fdd-7b58e03f8cc1.png)

## Problem

Switching between VS Code, LaunchDarkly (LD) web app and other integrations is inconvenient. Would be great if there was an extension to find a toggle and related information.

## Solution

Create a VS extension to query LD API to list all toggles and make it easy to ready toggle data.

## Contributing

1. Create an issue
1. Fork -> branch -> PR

### Running the project

- `npm i`
- `npm run build` watches files changed for webviews and rebuilds the React app
- **F5** to run in VS code
- `npm test`
