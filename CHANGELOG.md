# Changelog

## v1.5.0 - 2020-11-20

### Added

- Added source maps to build output.
- Set `"sideEffects": false` in [package.json](./package.json).

### Changed

- Updated devDependencies.

## v1.4.0 - 2020-04-27

### Added

- Added ES Module build.

### Changed

- Updated devDependencies.

## v1.3.1 - 2019-06-20

### Changed

- Builds are now done with [Rollup](http://rollupjs.org).
- Updated devDependencies.

## v1.3.0 - 2018-10-22

### Changed

- Changed `onPrimaryClick` function to return `undefined` instead of `true`.
- Updated devDependencies.

## v1.2.3 - 2017-09-29

### Changed

- Changed `isPrimaryClick` function to handle `MouseEvent.buttons` and `MouseEvent.button` being `null` or `undefined`.

## v1.2.2 - 2017-07-14

### Added

- Added fallback for browsers which don't support the `MouseEvent.button` property.

### Changed

- Changed `isPrimaryClick` function to check if only the left button has been pressed.

## v1.2.1 - 2017-07-08

### Changed

- Changed `isPrimaryClick` function to also check the `MouseEvent.buttons` property.

### Fixed

- Fixed passing additional arguments in `onPrimaryClick`.

## v1.2.0 - 2017-07-08

### Changed

- Refactored internals into ES2015 syntax.
- Updated `onPrimaryClick` function to pass down additional arguments.

## v1.1.1 - 2017-04-12

### Added

- Added `"use strict"` to invoke strict mode.

## v1.1.0 - 2017-04-12

### Changed

- Moved internal files.

## v1.0.0 - 2016-11-23

Initial public version! :tada:
