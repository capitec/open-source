import * as jestMock from 'jest-mock';
import { test, expect, withCoverage } from '../utils/JestPlaywright.js';
function toComponentName(text) {
    return asDirectoryName(text).replace(/(^\w|-\w)/g, spaceAndUpper);
}
function spaceAndUpper(text) {
    return text.replace(/-/, ' ').toUpperCase();
}
function asDirectoryName(omniElementTag) {
    return omniElementTag.replace('omni-', '');
}
export const testLabelBehaviour = (tagName, storyExport = 'Label') => {
    test(`${toComponentName(tagName)} - ${storyExport} Behaviour`, async ({ page }) => {
        await withCoverage(page, async () => {
            await page.goto(`/components/${asDirectoryName(tagName)}/`);
            await page.waitForSelector('[data-testid]', {});
            const args = (await page
                .locator(`story-renderer[key=${storyExport}]`)
                .evaluate((storyRenderer) => storyRenderer.story.args));
            const input = page.locator(`.${storyExport}`).getByTestId('test-field');
            await expect(input.locator(`.label > div`)).toHaveText(args === null || args === void 0 ? void 0 : args.label);
        });
    });
};
export const testHintBehaviour = (tagName, storyExport = 'Hint') => {
    test(`${toComponentName(tagName)} - ${storyExport} Behaviour`, async ({ page }) => {
        await withCoverage(page, async () => {
            await page.goto(`/components/${asDirectoryName(tagName)}/`);
            await page.waitForSelector('[data-testid]', {});
            const args = (await page
                .locator(`story-renderer[key=${storyExport}]`)
                .evaluate((storyRenderer) => storyRenderer.story.args));
            const input = page.locator(`.${storyExport}`).getByTestId('test-field');
            const hintElement = input.locator('.hint-label');
            await expect(hintElement).toHaveCount(1);
            await expect(hintElement).toHaveText(args === null || args === void 0 ? void 0 : args.hint);
        });
    });
};
export const testErrorBehaviour = (tagName, storyExport = 'Error_Label') => {
    test(`${toComponentName(tagName)} - ${storyExport} Behaviour`, async ({ page }) => {
        await withCoverage(page, async () => {
            await page.goto(`/components/${asDirectoryName(tagName)}/`);
            await page.waitForSelector('[data-testid]', {});
            const args = (await page
                .locator(`story-renderer[key=${storyExport}]`)
                .evaluate((storyRenderer) => storyRenderer.story.args));
            const input = page.locator(`.${storyExport}`).getByTestId('test-field');
            const errorElement = input.locator('.error-label');
            await expect(errorElement).toHaveCount(1);
            await expect(errorElement).toHaveText(args === null || args === void 0 ? void 0 : args.error);
        });
    });
};
export const testValueBehaviour = (tagName, storyExport = 'Value') => {
    test(`${toComponentName(tagName)} - ${storyExport} Behaviour`, async ({ page }) => {
        await withCoverage(page, async () => {
            var _a;
            await page.goto(`/components/${asDirectoryName(tagName)}/`);
            await page.waitForSelector('[data-testid]', {});
            const args = (await page
                .locator(`story-renderer[key=${storyExport}]`)
                .evaluate((storyRenderer) => storyRenderer.story.args));
            const input = page.locator(`.${storyExport}`).getByTestId('test-field');
            const inputField = input.locator('input#inputField');
            await expect(inputField).toHaveValue((_a = args === null || args === void 0 ? void 0 : args.value) === null || _a === void 0 ? void 0 : _a.toString());
        });
    });
};
export const testPrefixBehaviour = (tagName, storyExport = 'Prefix') => {
    test(`${toComponentName(tagName)} - ${storyExport} Behaviour`, async ({ page }) => {
        await withCoverage(page, async () => {
            await page.goto(`/components/${asDirectoryName(tagName)}/`);
            await page.waitForSelector('[data-testid]', {});
            const args = (await page
                .locator(`story-renderer[key=${storyExport}]`)
                .evaluate((storyRenderer) => storyRenderer.story.args));
            const input = page.locator(`.${storyExport}`).getByTestId('test-field');
            const slotElement = input.locator('slot[name=prefix]');
            await expect(slotElement).toHaveCount(1);
            const foundSlottedSvgElement = (await slotElement.evaluateHandle((se) => se.assignedElements().find((e) => e.tagName.toLocaleLowerCase() === 'svg'))).asElement();
            await expect(foundSlottedSvgElement).toBeTruthy();
        });
    });
};
export const testSuffixBehaviour = (tagName, storyExport = 'Suffix') => {
    test(`${toComponentName(tagName)} - ${storyExport} Behaviour`, async ({ page }) => {
        await withCoverage(page, async () => {
            await page.goto(`/components/${asDirectoryName(tagName)}/`);
            await page.waitForSelector('[data-testid]', {});
            const args = (await page
                .locator(`story-renderer[key=${storyExport}]`)
                .evaluate((storyRenderer) => storyRenderer.story.args));
            const input = page.locator(`.${storyExport}`).getByTestId('test-field');
            const slotElement = input.locator('slot[name=suffix]');
            await expect(slotElement).toHaveCount(1);
            const foundSlottedSvgElement = (await slotElement.evaluateHandle((se) => se.assignedElements().find((e) => e.tagName.toLocaleLowerCase() === 'svg'))).asElement();
            await expect(foundSlottedSvgElement).toBeTruthy();
        });
    });
};
export const testClearableBehaviour = (tagName, storyExport = 'Clearable') => {
    test(`${toComponentName(tagName)} - ${storyExport} Behaviour`, async ({ page }) => {
        await withCoverage(page, async () => {
            await page.goto(`/components/${asDirectoryName(tagName)}/`);
            await page.waitForSelector('[data-testid]', {});
            const args = (await page
                .locator(`story-renderer[key=${storyExport}]`)
                .evaluate((storyRenderer) => storyRenderer.story.args));
            const input = page.locator(`.${storyExport}`).getByTestId('test-field');
            //Clearable attribute test.
            await expect(input).toHaveAttribute('clearable', '');
            const clearButton = input.locator('#clear-click');
            await clearButton.click();
            await expect(await input.evaluate((i) => !i.value || i.value === '0.00')).toBeTruthy();
        });
    });
};
export const testCustomClearableSlotBehaviour = (tagName, storyExport = 'Custom_Clear_Slot') => {
    test(`${toComponentName(tagName)} - ${storyExport} Behaviour`, async ({ page }) => {
        await withCoverage(page, async () => {
            await page.goto(`/components/${asDirectoryName(tagName)}/`);
            await page.waitForSelector('[data-testid]', {});
            const args = (await page
                .locator(`story-renderer[key=${storyExport}]`)
                .evaluate((storyRenderer) => storyRenderer.story.args));
            const input = page.locator(`.${storyExport}`).getByTestId('test-field');
            //Clearable attribute test.
            await expect(input).toHaveAttribute('clearable', '');
            const clearButton = input.locator('#clear-click');
            await clearButton.click();
            await expect(await input.evaluate((i) => !i.value || i.value === '0.00')).toBeTruthy();
        });
    });
};
export const testDisabledBehaviour = (tagName, storyExport = 'Disabled') => {
    test(`${toComponentName(tagName)} - ${storyExport} Behaviour`, async ({ page }) => {
        await withCoverage(page, async () => {
            await page.goto(`/components/${asDirectoryName(tagName)}/`);
            await page.waitForSelector('[data-testid]', {});
            const args = (await page
                .locator(`story-renderer[key=${storyExport}]`)
                .evaluate((storyRenderer) => storyRenderer.story.args));
            const input = page.locator(`.${storyExport}`).getByTestId('test-field');
            //Disabled class test.
            await expect(input).toHaveAttribute('disabled', '');
            //Input event test.
            const inputTest = jestMock.fn();
            await page.exposeFunction('jestInput', () => inputTest());
            await input.evaluate((node) => {
                node.addEventListener('input', () => window.jestInput());
            });
            const inputField = input.locator('input#inputField');
            await inputField.type('Value Update 3');
            await expect(inputTest).toBeCalledTimes(0);
        });
    });
};
//# sourceMappingURL=OmniInputPlaywright.js.map