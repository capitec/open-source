import { expect, withCoverage, getStoryArgs, mockEventListener } from '../utils/JestPlaywright.js';
function asDirectoryName(omniElementTag) {
    return omniElementTag.replace('omni-', '');
}
export const testLabelBehaviour = (tagName, storyExport = 'Label') => {
    return async ({ page }) => {
        await withCoverage(page, async () => {
            await page.goto(`/components/${asDirectoryName(tagName)}/`);
            await page.waitForSelector('[data-testid]', {});
            const args = await getStoryArgs(page, storyExport);
            const input = page.locator(`.${storyExport}`).getByTestId('test-field');
            await expect(input.locator(`.label > div`)).toHaveText(args?.label);
        });
    };
};
export const testHintBehaviour = (tagName, storyExport = 'Hint') => {
    return async ({ page }) => {
        await withCoverage(page, async () => {
            await page.goto(`/components/${asDirectoryName(tagName)}/`);
            await page.waitForSelector('[data-testid]', {});
            const args = await getStoryArgs(page, storyExport);
            const input = page.locator(`.${storyExport}`).getByTestId('test-field');
            const hintElement = input.locator('.hint-label');
            await expect(hintElement).toHaveCount(1);
            await expect(hintElement).toHaveText(args?.hint);
        });
    };
};
export const testErrorBehaviour = (tagName, storyExport = 'Error_Label') => {
    return async ({ page }) => {
        await withCoverage(page, async () => {
            await page.goto(`/components/${asDirectoryName(tagName)}/`);
            await page.waitForSelector('[data-testid]', {});
            const args = await getStoryArgs(page, storyExport);
            const input = page.locator(`.${storyExport}`).getByTestId('test-field');
            const errorElement = input.locator('.error-label');
            await expect(errorElement).toHaveCount(1);
            await expect(errorElement).toHaveText(args?.error);
        });
    };
};
export const testValueBehaviour = (tagName, storyExport = 'Value') => {
    return async ({ page }) => {
        await withCoverage(page, async () => {
            await page.goto(`/components/${asDirectoryName(tagName)}/`);
            await page.waitForSelector('[data-testid]', {});
            const args = await getStoryArgs(page, storyExport);
            const input = page.locator(`.${storyExport}`).getByTestId('test-field');
            const inputField = input.locator('input#inputField');
            await expect(inputField).toHaveValue(args?.value?.toString());
        });
    };
};
export const testPrefixBehaviour = (tagName, storyExport = 'Prefix') => {
    return async ({ page }) => {
        await withCoverage(page, async () => {
            await page.goto(`/components/${asDirectoryName(tagName)}/`);
            await page.waitForSelector('[data-testid]', {});
            const input = page.locator(`.${storyExport}`).getByTestId('test-field');
            const slotElement = input.locator('slot[name=prefix]');
            await expect(slotElement).toHaveCount(1);
            const foundSlottedSvgElement = (await slotElement.evaluateHandle((se) => se.assignedElements().find((e) => e.tagName.toLocaleLowerCase() === 'svg'))).asElement();
            await expect(foundSlottedSvgElement).toBeTruthy();
        });
    };
};
export const testSuffixBehaviour = (tagName, storyExport = 'Suffix') => {
    return async ({ page }) => {
        await withCoverage(page, async () => {
            await page.goto(`/components/${asDirectoryName(tagName)}/`);
            await page.waitForSelector('[data-testid]', {});
            const input = page.locator(`.${storyExport}`).getByTestId('test-field');
            const slotElement = input.locator('slot[name=suffix]');
            await expect(slotElement).toHaveCount(1);
            const foundSlottedSvgElement = (await slotElement.evaluateHandle((se) => se.assignedElements().find((e) => e.tagName.toLocaleLowerCase() === 'svg'))).asElement();
            await expect(foundSlottedSvgElement).toBeTruthy();
        });
    };
};
export const testClearableBehaviour = (tagName, storyExport = 'Clearable') => {
    return async ({ page }) => {
        await withCoverage(page, async () => {
            await page.goto(`/components/${asDirectoryName(tagName)}/`);
            await page.waitForSelector('[data-testid]', {});
            const input = page.locator(`.${storyExport}`).getByTestId('test-field');
            //Clearable attribute test.
            await expect(input).toHaveAttribute('clearable', '');
            const clearButton = input.locator('#clear-click');
            await clearButton.click();
            // Evaluate the value after clearing.
            await expect(await input.evaluate((i) => !i.value || i.value === '0.00')).toBeTruthy();
        });
    };
};
export const testCustomClearableSlotBehaviour = (tagName, storyExport = 'Custom_Clear_Slot') => {
    return async ({ page }) => {
        await withCoverage(page, async () => {
            await page.goto(`/components/${asDirectoryName(tagName)}/`);
            await page.waitForSelector('[data-testid]', {});
            const input = page.locator(`.${storyExport}`).getByTestId('test-field');
            //Clearable attribute test.
            await expect(input).toHaveAttribute('clearable', '');
            const clearButton = input.locator('#clear-click');
            await clearButton.click();
            await expect(await input.evaluate((i) => !i.value || i.value === '0.00')).toBeTruthy();
        });
    };
};
export const testDisabledBehaviour = (tagName, storyExport = 'Disabled') => {
    return async ({ page }) => {
        await withCoverage(page, async () => {
            await page.goto(`/components/${asDirectoryName(tagName)}/`);
            await page.waitForSelector('[data-testid]', {});
            const input = page.locator(`.${storyExport}`).getByTestId('test-field');
            //Disabled class test.
            await expect(input).toHaveAttribute('disabled', '');
            //Input event test.
            const inputTest = await mockEventListener(input, 'input');
            const inputField = input.locator('input#inputField');
            await inputField.type('Value Update 3');
            // Confirm that mock input event is called zero times
            await expect(inputTest).toBeCalledTimes(0);
        });
    };
};
//# sourceMappingURL=OmniInputPlaywright.js.map