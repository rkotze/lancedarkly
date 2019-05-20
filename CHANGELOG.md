# Change Log

Follows [Semantic Versioning](https://semver.org/).

## [1.0.0] -- 2019-05-20

### Added

- Light and dark logo styling to handle different themes
- Sort toggles by created date
- Show a count of rules and prerequisites each environment
- Rerunning the command to open Lancedarkly will open in the same tab rather than launching another tab.

## [0.5.0] -- 2019-04-17

### Added

- Show what variant is set for the selected toggle state, including default rollout. e.g. 50/50
- Update toggle state on or off for each environment
- Filter by toggle key

## [0.4.0] -- 2019-04-04

### Added

- Introduced build tools to optimize the installed package from 3.2Mb to less than 600kb

## [0.3.1] -- 2019-04-01

### Fixed

- Performance bug loading plugins - freezes UI.

## [0.3.0] -- 2019-04-01

### Added

- New plugin system for third party integrations
- Show basic stats of all toggles for a project

### Fixed

- Title show `null` in tab for first time users (see issue [#1](https://github.com/rkotze/lancedarkly/issues/1))

## [0.2.1] -- 2019-03-21

### Fixed

- Command `lancedarkly.listAllToggles` not found.

## [0.2.0] -- 2019-03-21

### Added

- Show maintainer info for toggle
- Added logo to tab title
- Reduce package size of extension by excluding files not being bundled
- Updates to layout: filter added to left column and left column made wider

## [0.1.0] -- 2019-03-19

### Added

- List all toggles in a project with a total count
- Search for toggles by **name** and **description**
- Quick overview of toggle details:
  - Title, created date, description, key and kind
  - Variations: value and name
  - Environments: show **on** or **off** state
- Open toggle in LaunchDarkly
- Copy key to clipboard
- Settings for **defaultProject** and **accessToken**

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.
