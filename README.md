# rnscreens-example-app

This repo reproduces and fixes a `react-native-screens` bottom tabs icon parsing error.

## What the error looks like

- Render error: `[RNScreens] Incorrect icon format. You must provide sfSymbolName, imageSource or templateSource.`
- Originates from `BottomTabsScreen.tsx` when `icon` props are provided using platform-specific shapes (e.g., Android drawable names).

## How to reproduce

1. Clone the repo.
2. Install deps: `yarn install` (or `npm install`).
3. Start the app: `yarn start` then run on a simulator/device.
4. Open any screen that renders bottom tabs with platform-specific icon props.
5. You will see the render error above.

## Why it happens

- `react-native-screens@4.16.0` only accepts iOS-style icon shapes (`sfSymbolName`, `imageSource`, `templateSource`).
- Platform-specific icon objects (`ios`, `android`, `shared`) cause the parser to throw.

## The fix (this repo)

- The patch in `patches/react-native-screens+4.16.0.patch` teaches `BottomTabsScreen` to:
  - Accept `IconProps` with `ios/android/shared` variants.
  - Handle Android `drawableResource` without throwing.
  - Keep existing iOS support intact.
- It also adds shared type definitions for these icons in `BottomTabsScreenNativeComponent.ts`.

## How to apply the fix

If you cloned this repo, the patch is already present. If you hit the error:

1. Ensure dependencies are installed: `yarn install`.
2. Apply the patch: `yarn patch` (or `npx patch-package react-native-screens`).
3. Restart the app: stop Metro, rerun `yarn start`, and reload the app.
4. The bottom tabs render without the icon format error.
