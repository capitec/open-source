import * as jestMock from 'jest-mock';
import { testLabelBehaviour, testHintBehaviour, testErrorBehaviour, testValueBehaviour, testClearableBehaviour, testCustomClearableSlotBehaviour, testPrefixBehaviour, testSuffixBehaviour, testDisabledBehaviour } from '../core/OmniInputPlaywright.js';
import { test, expect, withCoverage } from '../utils/JestPlaywright.js';
test(`Pin Field - Interactive`, async ({ page, browserName }) => {
    await withCoverage(page, async () => {
        await page.goto('/components/pin-field/');
        await page.evaluate(() => document.fonts.ready);
        const pinField = page.locator('[data-testid]').first();
        pinField.evaluate(async (t) => {
            t.value = '';
            await t.updateComplete;
        });
        await expect(pinField).toHaveScreenshot('pin-field.png');
        const interactions = jestMock.fn();
        await page.exposeFunction('jestInteract', () => interactions());
        await pinField.evaluate((node) => {
            node.addEventListener('input', () => window.jestInteract());
            node.addEventListener('click', () => window.jestInteract());
        });
        const showSlotElement = pinField.locator('slot[name=show]');
        await expect(showSlotElement).toHaveCount(1);
        await showSlotElement.click();
        await expect(pinField).toHaveScreenshot('pin-field-show.png');
        const hideSlotElement = pinField.locator('slot[name=hide]');
        await expect(hideSlotElement).toHaveCount(1);
        await hideSlotElement.click();
        await expect(pinField).toHaveScreenshot('pin-field-hide.png');
        const inputField = pinField.locator('#inputField');
        const value = '1234';
        await inputField.type(value);
        await expect(inputField).toHaveValue(value);
        await expect(interactions).toBeCalledTimes(value.length);
        await expect(pinField).toHaveScreenshot('pin-field-value.png');
    });
});
test(`Pin Field - Max Length`, async ({ page, browserName }) => {
    await withCoverage(page, async () => {
        await page.goto('/components/pin-field/');
        await page.evaluate(() => document.fonts.ready);
        const args = await page.locator('story-renderer[key=Max_Length]').evaluate((storyRenderer) => storyRenderer.story.args);
        const container = page.locator('.Max_Length');
        const pinField = container.locator('[data-testid]').first();
        pinField.evaluate(async (t) => {
            t.value = '';
            t.maxLength = 4;
            await t.updateComplete;
        });
        await expect(pinField).toHaveScreenshot('pin-field.png');
        const interactions = jestMock.fn();
        await page.exposeFunction('jestInteract', () => interactions());
        await pinField.evaluate((node) => {
            node.addEventListener('input', () => window.jestInteract());
        });
        const inputField = pinField.locator('#inputField');
        const typedValue = '12345678910';
        const value = '1234';
        await inputField.type(typedValue);
        await expect(pinField).toHaveScreenshot('pin-field-value.png');
        await expect(inputField).toHaveValue(value);
        await expect(interactions).toBeCalledTimes(typedValue.length);
        const showSlotElement = pinField.locator('slot[name=show]');
        await expect(showSlotElement).toHaveCount(1);
        await showSlotElement.click();
        await expect(pinField).toHaveScreenshot('pin-field-show.png');
    });
});
testLabelBehaviour('omni-pin-field');
testHintBehaviour('omni-pin-field');
testErrorBehaviour('omni-pin-field');
testValueBehaviour('omni-pin-field');
testClearableBehaviour('omni-pin-field');
testCustomClearableSlotBehaviour('omni-pin-field');
testPrefixBehaviour('omni-pin-field');
testSuffixBehaviour('omni-pin-field');
testDisabledBehaviour('omni-pin-field');
//# sourceMappingURL=PinField.spec.js.map