const { reloadApp } = require("detox-expo-helpers");

describe("Example", () => {
  beforeAll(async () => {
    await reloadApp();
    // sleep so app can boot
    await sleep(4000);
  });

  beforeEach(async () => {});

  it("should have welcome screen", async () => {
    await expect(element(by.id("fabian"))).toBeVisible();
  });
  /* 
  it('should show hello screen after tap', async () => {
    await element(by.id('hello_button')).tap();
    await expect(element(by.text('Hello!!!'))).toBeVisible();
  });

  it('should show world screen after tap', async () => {
    await element(by.id('world_button')).tap();
    await expect(element(by.text('World!!!'))).toBeVisible();
  }); */
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
