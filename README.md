# Clean Expo Testing with Detox

This example works with Expo 42 and Detox 18.

## Get it working

1. Install dependencies: `yarn install`
2. Download Expo App Binaries:

```zsh
# this will download and place `Exponent.app` under `e2e/bin/`.
# if this doesn't work for you: - download them here: https://expo.dev/tools#client
#                               - place them into e2e/bin/
yarn downloadExpoApp
```

3. Start Metro Bundler & Simulator: `yarn ios`
4. Run Test in seperate shell: `yarn test`

## Notes

- `jest-expo` is **not** used with this project, because it seem to have issues with `jest-circus/runner`. That's why we're using vanilla `jest`
- `detox-expo-helpers` is a [fork](https://github.com/fschoenfeldt/detox-expo-helpers) (see `package.json`)
- Android is completely removed from the tests as it's not really working right now
- The most important change is the `sleep`-function call in `firstTest.e2e.js`:

```js
describe("Example", () => {
  beforeAll(async () => {
    await reloadApp();
    // sleep so app can boot
    await sleep(4000);
  });

  beforeEach(async () => {});
```

- Alternatively, you could wait for the first element of your app (for example button on startscreen etc.), which is potentially faster:

```js
describe('Example', () => {
  beforeAll(async () => {
    await reloadApp();
    const welcomeMessage = element(by.id('welcome_message'));
    await waitFor(welcomeMessage).toBeVisible().withTimeout(10000);
  });
```

## References

Note that this guide uses `jest-expo` which doesn't work (anymore)
https://blog.expo.io/testing-expo-apps-with-detox-and-react-native-testing-library-7fbdbb82ac87

This issue is having similar problems, though the suggested change didn't help with Detox@18
https://github.com/expo/detox-tools/issues/1#issuecomment-740675824
