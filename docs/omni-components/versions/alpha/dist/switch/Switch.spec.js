import * as jestMock from 'jest-mock';
import { test, expect, withCoverage } from '../utils/JestPlaywright.js';
test(`Switch - Event Behaviour`, async ({ page }) => {
    await withCoverage(page, async () => {
        await page.goto('/components/switch/');
        const switchElement = page.locator('.Interactive').getByTestId('test-switch');
        const valueChange = jestMock.fn();
        await page.exposeFunction('jestValueChange', () => valueChange());
        await switchElement.evaluate((node) => {
            node.addEventListener('value-change', () => window.jestValueChange());
        });
        const content = switchElement.locator('#content');
        await content.click({
            force: true
        });
        await expect(valueChange).toBeCalledTimes(1);
    });
});
test(`Switch - Label Behaviour`, async ({ page }) => {
    await withCoverage(page, async () => {
        await page.goto('/components/switch/');
        const args = await page.locator('story-renderer[key=Label]').evaluate(getStoryArgs());
        const switchElement = page.locator('.Label').getByTestId('test-switch');
        const labelElement = switchElement.locator('label');
        await expect(labelElement).toHaveText(args.label);
        await expect(switchElement).toHaveScreenshot('switch-label.png');
    });
});
test(`Switch - Hint Behaviour`, async ({ page }) => {
    await withCoverage(page, async () => {
        await page.goto('/components/switch/');
        const args = await page.locator('story-renderer[key=Hint]').evaluate(getStoryArgs());
        const switchElement = page.locator('.Hint').getByTestId('test-switch');
        const hintElement = switchElement.locator('.hint');
        await expect(hintElement).toHaveText(args.hint);
        await expect(switchElement).toHaveScreenshot('switch-hint.png');
    });
});
test(`Switch - Error Behaviour`, async ({ page }) => {
    await withCoverage(page, async () => {
        await page.goto('/components/switch/');
        const args = await page.locator('story-renderer[key=Error_Label]').evaluate(getStoryArgs());
        const switchElement = page.locator('.Error_Label').getByTestId('test-switch');
        const errorElement = switchElement.locator('.error');
        await expect(errorElement).toHaveText(args.error);
        await expect(switchElement).toHaveScreenshot('switch-error.png');
    });
});
test(`Switch - Checked / Unchecked Behaviour`, async ({ page }) => {
    await withCoverage(page, async () => {
        await page.goto('/components/switch/');
        const switchElement = page.locator('.Checked').getByTestId('test-switch');
        const checkedElement = switchElement.locator('.checked');
        // Test checked.
        await expect(checkedElement).toBeVisible();
        await expect(switchElement).toHaveScreenshot('switch-checked.png');
        await switchElement.click();
        // Test unchecked.
        const uncheckedElement = switchElement.locator('.checked');
        await expect(uncheckedElement).not.toBeVisible();
        await expect(switchElement).toHaveScreenshot('switch-unchecked.png');
    });
});
test(`Switch - Disabled Behaviour`, async ({ page }) => {
    await withCoverage(page, async () => {
        await page.goto('/components/switch/');
        const switchElement = page.locator('.Disabled').getByTestId('test-switch');
        const disabledElement = switchElement.locator('.disabled');
        // Test initial disabled.
        await expect(disabledElement).toBeVisible();
        await expect(switchElement).toHaveScreenshot('switch-disabled.png');
        // Test not clickable when disabled.
        const click = jestMock.fn();
        await page.exposeFunction('setSwitchClicked', () => click());
        await switchElement.evaluate((n) => n.addEventListener('click', () => window.setSwitchClicked()));
        await switchElement.click({
            force: true
        });
        const content = switchElement.locator('#content');
        await content.press('Space');
        await expect(click).toBeCalledTimes(0);
        await expect(switchElement).toHaveScreenshot('switch-disabled-click.png');
    });
});
test(`Switch - Slot Behaviour`, async ({ page }) => {
    await withCoverage(page, async () => {
        await page.goto('/components/switch/');
        const switchElement = page.locator('.Slot').getByTestId('test-switch');
        const slottedContent = await switchElement.innerHTML();
        await expect(slottedContent).toEqual('Slotted');
        await expect(switchElement).toHaveScreenshot('switch-slot.png');
    });
});
function getStoryArgs() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (storyRenderer) => { var _a; return (_a = storyRenderer === null || storyRenderer === void 0 ? void 0 : storyRenderer.story) === null || _a === void 0 ? void 0 : _a.args; };
}
//# sourceMappingURL=Switch.spec.js.map