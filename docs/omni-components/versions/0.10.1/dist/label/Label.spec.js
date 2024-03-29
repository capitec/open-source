import { test, expect, getStoryArgs, withCoverage } from '../utils/JestPlaywright.js';
test(`Label - Visual and Behaviour`, async ({ page }) => {
    await withCoverage(page, async () => {
        await page.goto('/components/label/');
        const args = await getStoryArgs(page, 'Interactive');
        const label = page.locator('.Interactive').getByTestId('test-label');
        await expect(label).toHaveScreenshot('label-initial.png');
        await expect(label).toHaveText(args.label);
    });
});
test(`Label - Title Visual`, async ({ page }) => {
    await withCoverage(page, async () => {
        await page.goto('/components/label/');
        const label = page.locator('.Title').getByTestId('test-label');
        await expect(label).toHaveScreenshot('label-initial.png');
    });
});
test(`Label - Subtitle Visual`, async ({ page }) => {
    await withCoverage(page, async () => {
        await page.goto('/components/label/');
        const label = page.locator('.Subtitle').getByTestId('test-label');
        await expect(label).toHaveScreenshot('label-initial.png');
    });
});
test(`Label - Strong Visual`, async ({ page }) => {
    await withCoverage(page, async () => {
        await page.goto('/components/label/');
        const label = page.locator('.Strong').getByTestId('test-label');
        await expect(label).toHaveScreenshot('label-initial.png');
    });
});
test(`Label - Slot Visual`, async ({ page }) => {
    await withCoverage(page, async () => {
        await page.goto('/components/label/');
        const label = page.locator('.Slot').getByTestId('test-label');
        await expect(label).toHaveScreenshot('label-initial.png');
    });
});
//# sourceMappingURL=Label.spec.js.map