import { testLabelBehaviour, testHintBehaviour, testErrorBehaviour, testValueBehaviour, testClearableBehaviour, testCustomClearableSlotBehaviour, testPrefixBehaviour, testSuffixBehaviour, testDisabledBehaviour } from '../core/OmniInputPlaywright.js';
import { test, expect, mockEventListener, withCoverage } from '../utils/JestPlaywright.js';
test(`Search Field - Visual and Behaviour`, async ({ page }) => {
    await withCoverage(page, async () => {
        await page.goto('/components/search-field/');
        await page.evaluate(() => document.fonts.ready);
        // Locate the search field component.
        const searchField = page.locator('[data-testid]').first();
        searchField.evaluate(async (t) => {
            t.value = '';
            await t.updateComplete;
        });
        // Confirm that the component matches the provided screenshot.
        await expect(searchField).toHaveScreenshot('search-field.png');
        const inputFn = await mockEventListener(searchField, 'input');
        const inputField = searchField.locator('#inputField');
        const value = 'search value';
        await inputField.type(value);
        await expect(inputField).toHaveValue(value);
        await expect(inputFn).toBeCalledTimes(value.length);
        await expect(searchField).toHaveScreenshot('search-field-value.png');
    });
});
test(`Search Field - Max Length Behaviour`, async ({ page }) => {
    await withCoverage(page, async () => {
        await page.goto('/components/search-field/');
        await page.evaluate(() => document.fonts.ready);
        const container = page.locator('.Max_Length');
        const searchField = container.locator('[data-testid]').first();
        searchField.evaluate(async (t) => {
            t.value = '';
            t.maxLength = 6;
            await t.updateComplete;
        });
        // Confirm that the component matches the provided screenshot.
        await expect(searchField).toHaveScreenshot('search-field.png');
        const inputFn = await mockEventListener(searchField, 'input');
        const inputField = searchField.locator('#inputField');
        const typedValue = 'Search and you shall find';
        const value = 'Search';
        await inputField.type(typedValue);
        await expect(searchField).toHaveScreenshot('search-field-value.png');
        await expect(inputField).toHaveValue(value);
        await expect(inputFn).toBeCalledTimes(typedValue.length);
    });
});
test('Search Field - Label Behaviour', testLabelBehaviour('omni-search-field'));
test('Search Field - Hint Behaviour', testHintBehaviour('omni-search-field'));
test('Search Field - Error Behaviour', testErrorBehaviour('omni-search-field'));
test('Search Field - Value Behaviour', testValueBehaviour('omni-search-field'));
test('Search Field - Clearable Behaviour', testClearableBehaviour('omni-search-field'));
test('Search Field - Custom Clear Slot Behaviour', testCustomClearableSlotBehaviour('omni-search-field'));
test('Search Field - Prefix Behaviour', testPrefixBehaviour('omni-search-field'));
test('Search Field - Suffix Behaviour', testSuffixBehaviour('omni-search-field'));
test('Search Field - Disabled Behaviour', testDisabledBehaviour('omni-search-field'));
//# sourceMappingURL=SearchField.spec.js.map