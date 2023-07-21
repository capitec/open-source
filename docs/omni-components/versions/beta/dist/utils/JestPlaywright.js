/* eslint-disable @typescript-eslint/ban-ts-comment */
import fs from 'fs';
// import { platform } from 'os';
import { expect as expectPatched, test } from '@playwright/test';
export * from '@playwright/test';
import { fn } from 'jest-mock';
//@ts-ignore
import jsdom from 'jsdom';
//@ts-ignore
import fetch from 'node-fetch';
import { v4 } from 'uuid';
//@ts-ignore
import XMLHttpRequest from 'xhr2';
global.window = global.window || new jsdom.JSDOM().window;
global.document = global.document || window.document;
global.Document = global.Document || window.Document;
global.HTMLElement = global.HTMLElement || window.HTMLElement;
global.SVGElement = global.SVGElement || window.SVGElement;
global.XMLHttpRequest = global.XMLHttpRequest || XMLHttpRequest;
if (!global.window.fetch) {
    global.window.fetch = fetch;
}
if (!global.fetch) {
    global.fetch = global.window.fetch;
}
//Setup browser shims
Object.keys(window).forEach((key) => {
    if (!global[key]) {
        try {
            global[key] = window[key];
        }
        catch (error) {
            // Ignore
        }
    }
});
const expect = expectPatched;
if (!process.env.CI && !process.env.PW_SCREENSHOT_TESTING) {
    expect.extend({
        toHaveScreenshot: async function (received, name, options) {
            const testInfo = test.info();
            if (Array.isArray(name)) {
                name = name.join('/');
            }
            if (testInfo && received) {
                testInfo.annotations.push({ type: 'warning', description: `Screenshot assertion was skipped! (${name})` });
                if (received.screenshot) {
                    const screenshot = await received.screenshot(options);
                    await testInfo.attach(name, { body: screenshot, contentType: 'image/png' });
                }
            }
            return {
                pass: true,
                message: () => 'No "CI" or "PW_SCREENSHOT_TESTING" environment variables set. Skipping screenshot assertion!'
            };
        },
        toMatchSnapshot: async function (received, name) {
            const testInfo = test.info();
            if (Array.isArray(name)) {
                name = name.join('/');
            }
            if (testInfo && received) {
                testInfo.annotations.push({ type: 'warning', description: `Snapshot assertion was skipped! (${name})` });
                if (typeof received !== 'string') {
                    await testInfo.attach(name, { body: received, contentType: 'image/png' });
                }
            }
            return {
                pass: true,
                message: () => 'No "CI" or "PW_SCREENSHOT_TESTING" environment variables set. Skipping snapshot assertion!'
            };
        }
    });
}
async function withCoverage(page, testAction) {
    var _a, _b, _c, _d;
    const browserName = (_c = (_b = (_a = page.context()) === null || _a === void 0 ? void 0 : _a.browser()) === null || _b === void 0 ? void 0 : _b.browserType()) === null || _c === void 0 ? void 0 : _c.name();
    // Uncomment for verbose logging from browser console.
    // await page.on('console', (msg) => {
    //     if (msg && msg.text) {
    //       if (typeof msg.text === 'function') {
    //         console.log('PAGE LOG:', msg.text());
    //       } else {
    //         console.log('PAGE LOG:', msg.text);
    //       }
    //     } else {
    //         console.log('PAGE LOG:', msg);
    //     }
    // });
    const url = page.url();
    await page.goto(`http://${(_d = process.env.PLAYWRIGHT_HOST_ORIGIN) !== null && _d !== void 0 ? _d : 'localhost'}:6006`);
    await page.evaluate(() => {
        window.sessionStorage.setItem('omni-docs-theme-selection', 'light');
        window.localStorage.setItem('omni-docs-framework-selection', 'HTML');
    });
    await page.goBack();
    if (page.url() !== url) {
        await page.goto(url);
    }
    // Only chromium supports coverage
    if (page.coverage && browserName === 'chromium') {
        try {
            //Each test worker must start collecting coverage information for the duration of its tests
            await page.coverage.startJSCoverage();
        }
        catch (error) {
            if (!error.toString().includes('JSCoverage is already enabled')) {
                throw error;
            }
        }
    }
    let result;
    try {
        result = await testAction.apply(this);
    }
    finally {
        // Only chromium supports coverage
        if (page.coverage && browserName === 'chromium' && !page.isClosed()) {
            //Each test worker must collect and save its coverage information. The last worker will also report the coverage
            const coverage = await page.coverage.stopJSCoverage();
            //Save coverage information for current test worker
            fs.writeFileSync(`coverage/${v4()}.json`, JSON.stringify(coverage), {
                encoding: 'utf-8'
            });
        }
    }
    return result;
}
/**
 * Read story args from story renderer with provided key
 */
async function getStoryArgs(page, key, readySelector = '[data-testid]') {
    await page.waitForSelector(readySelector);
    const args = await page.locator(`story-renderer[key=${key}]`).evaluate((storyRenderer) => { var _a; return (_a = storyRenderer === null || storyRenderer === void 0 ? void 0 : storyRenderer.story) === null || _a === void 0 ? void 0 : _a.args; });
    return args;
}
async function mockEventListener(locatorOrHandle, eventName) {
    var _a;
    const tempFunction = `mock_${v4()}`;
    const eventFunction = fn();
    if (!locatorOrHandle) {
        return eventFunction;
    }
    let page;
    const evalFunc = (node, { tempFunction, eventName }) => {
        //@ts-ignore
        node.addEventListener(eventName, () => window[tempFunction]());
    };
    if (locatorOrHandle.ownerFrame) {
        const handle = locatorOrHandle;
        page = (_a = (await handle.ownerFrame())) === null || _a === void 0 ? void 0 : _a.page();
        await page.exposeFunction(tempFunction, () => eventFunction());
        await handle.evaluate(evalFunc, { tempFunction, eventName });
    }
    else {
        const locator = locatorOrHandle;
        page = locator.page();
        await page.exposeFunction(tempFunction, () => eventFunction());
        await locator.evaluate(evalFunc, { tempFunction, eventName });
    }
    return eventFunction;
}
export { expect, withCoverage, getStoryArgs, mockEventListener /*keyboardCopy, keyboardPaste, clipboardCopy*/ };
//# sourceMappingURL=JestPlaywright.js.map