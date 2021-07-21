# Clean Expo Testing with Detox

This example works with Expo 42 and Detox 18.

Note the following:

- `jest-expo` is **not** used with this project, because it seem to have issues with `jest-circus/runner`. That's why we're using vanilla `jest`
- `detox-expo-helpers` is a [fork](https://github.com/fschoenfeldt/detox-expo-helpers) (see `package.json`)
- Android is completely removed from the tests
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

## References

Note that this guide uses `jest-expo` which doesn't work (anymore)
https://blog.expo.io/testing-expo-apps-with-detox-and-react-native-testing-library-7fbdbb82ac87

This issue is having similar problems, though the suggested change didn't help with Detox@18
https://github.com/expo/detox-tools/issues/1#issuecomment-740675824
