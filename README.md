# What Day Is It
This is an attempt to build a simple React-Native app for my son so he knows what day it is!  This was based on a wall chart at his pre-school.

This app uses https://github.com/GeekyAnts/react-native-easy-grid.

These instructions were tested on Mac only.

## Checkout the code

```
git clone git@github.com:kevincowan/WhatDayIsIt.git
```

## Basic Setup

Read and follow the [getting started](https://facebook.github.io/react-native/docs/getting-started.html) tutorial within the react-native documentation.

Ensure you have run the following commands.

```
brew install yarn
brew install watchman
npm install -g react-native-cli
yarn
```

## Running the app

Before running the application ensure that the JavaScript bundling service is running in a separate tab.

```
npm run start -- --reset-cache
```

### iOS

```
react-native run-ios
```

By default this will select an iPhone 6.  If for example you wanted an iPhone 7 Plus use this command.

```
react-native run-ios --simulator="iPhone 7 Plus"
```

### Android

You must first run an Android simulator within its own tab.  If you haven't done so already create an [AVD](https://developer.android.com/studio/run/managing-avds.html) (Android Virtual Device).

```
emulator @Nexus_5X_API_23 -dns-server 8.8.8.8
```

```shell
react-native run-android
```

## Building a debug APK

```
react-native bundle --dev false --platform android --entry-file index.js --bundle-output ./android/app/build/intermediates/assets/debug/index.android.bundle --assets-dest ./android/app/build/intermediates/res/merged/debug
```

```
cd android
./gradlew assembleDebug
cd ..
```

To install on an Android device.

```
adb install -r android/app/build/outputs/apk/app-debug.apk
```

## Debugging

This is a very useful debugging tool - https://github.com/jhen0409/react-native-debugger

Install with this command

```
brew update && brew cask install react-native-debugger
```

Run with this command

```
open "rndebugger://set-debugger-loc?host=localhost&port=8081"
```

## Testing

Tested on

- Emulator - iPhone 6
- Emulator - iPhone 7 Plus
- Emulator - Nexus_5X
- HW - Amazon Fire 7 Tablet

## To do

- Change icon
- Change name of app and apk file
- Test on Apple HW
- Build release signed versions of app for Android and iOS
