import { testLabelBehaviour, testHintBehaviour, testErrorBehaviour, testValueBehaviour, testClearableBehaviour, testCustomClearableSlotBehaviour, testPrefixBehaviour, testSuffixBehaviour, testDisabledBehaviour } from '../core/OmniInputPlaywright.js';
import { test, expect, mockEventListener, withCoverage } from '../utils/JestPlaywright.js';
test(`Number Field - Visual and Behaviour`, async ({ page }) => {
    await withCoverage(page, async () => {
        await page.goto('/components/number-field/');
        await page.evaluate(() => document.fonts.ready);
        const numberField = page.locator('[data-testid]').first();
        numberField.evaluate(async (t) => {
            t.value = '';
            await t.updateComplete;
        });
        // Confirm that the component matches the provided screenshot.
        await expect(numberField).toHaveScreenshot('number-field.png');
        const inputFn = await mockEventListener(numberField, 'input');
        const inputField = numberField.locator('#inputField');
        const value = '12345';
        await inputField.type(value);
        await expect(inputField).toHaveValue(value);
        await expect(inputFn).toBeCalledTimes(value.length);
        await expect(numberField).toHaveScreenshot('number-field-value.png');
    });
});
test(`Number Field - Max Length Behaviour`, async ({ page }) => {
    await withCoverage(page, async () => {
        await page.goto('/components/number-field/');
        await page.evaluate(() => document.fonts.ready);
        const container = page.locator('.Max_Length');
        const numberField = container.locator('[data-testid]').first();
        numberField.evaluate(async (t) => {
            t.value = '';
            t.maxLength = 4;
            await t.updateComplete;
        });
        await expect(numberField).toHaveScreenshot('number-field.png');
        const inputFn = await mockEventListener(numberField, 'input');
        const inputField = numberField.locator('#inputField');
        const typedValue = '12345';
        const value = '1234';
        await inputField.type(typedValue);
        await expect(numberField).toHaveScreenshot('number-field-value.png');
        await expect(inputField).toHaveValue(value);
        await expect(inputFn).toBeCalledTimes(typedValue.length);
    });
});
test('Number Field - Label Behaviour', testLabelBehaviour('omni-number-field'));
test('Number Field - Hint Behaviour', testHintBehaviour('omni-number-field'));
test('Number Field - Error Behaviour', testErrorBehaviour('omni-number-field'));
test('Number Field - Value Behaviour', testValueBehaviour('omni-number-field'));
test('Number Field - Clearable Behaviour', testClearableBehaviour('omni-number-field'));
test('Number Field - Custom Clear Slot Behaviour', testCustomClearableSlotBehaviour('omni-number-field'));
test('Number Field - Prefix Behaviour', testPrefixBehaviour('omni-number-field'));
test('Number Field - Suffix Behaviour', testSuffixBehaviour('omni-number-field'));
test('Number Field - Disabled Behaviour', testDisabledBehaviour('omni-number-field'));
//# sourceMappingURL=NumberField.spec.js.map