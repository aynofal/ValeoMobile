# Valeo Services Mobile App Assessment

## App brief

This application is a small demo that is capable of fetching data from an external web-app and persisting it on the user's device.

## Available Scripts

In the project directory, you can run:

### `yarn start`

This will start the metro bundler on your localhost on port 8000.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />

### `yarn lint`

Runs lint on the source, can be used with option `--fix` to clean up the project.

### `yarn android`

Runs `react-native run-android` which runs the steps
- `npx jetify`
- `gradlew assembleDebug`
- `adb` install to available android device and `adb` reverse start app.

this in turn creates a debug app that will connect to the running metro bundler instance.

### `yarn ios`

Similar to the previous command but runs `react-native run-ios`

## Current Functionality Available

- Navigation.
- Deeplink Handler.
- Global state management using zustand.
- Some tests implemented using Jest and React-Testing-Library.
- Qr Scanning and permission handling by the Qr Scanner Library.

## How to build

### Dependencies

- Yarn
- CocoaPods (If you want to run the app on iOS)
- Android SDK
- JDK 11 (If you're using 16, either downgrade or use a JDK version manager as there are known problems with gradle on JDK 16)

### Prepping for build

On a fresh install, run the command `yarn prep` if you're on Mac OSX or just the command `yarn` on other operating systems.

This is an optional step: Open your terminal of choice and execute `yarn start`, it will start automatically as a build step, however, it is recommended to run it in a terminal of your choice.

## Android Dev: Simulator & Physical Device

- Start your AVD or connect your Android Device and enable debug mode.
- Create a file called `local.properties` with it's content being `sdk.dir=<YOUR_ANDROID_SDK_DIRECTORY>`
- Run the command `yarn android`

## iOS Dev: Simulator

- Run the command `yarn ios`

## iOS Dev: Physical Device

- Open XCode
- Connect your iOS device
- From the device selector, select the connected device
- Press the build and run button (Looks like a media player play button)

#### This codebase is not configured for a production release as of now.
