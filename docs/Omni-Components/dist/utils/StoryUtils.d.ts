import { TagSpec } from '@codemirror/lang-html';
import { Package } from 'custom-elements-manifest/schema';
export { Package, ClassDeclaration, CustomElementDeclaration, Declaration, CustomElement } from 'custom-elements-manifest/schema';
export { ComponentStoryFormat, CSFIdentifier } from './ComponentStoryFormat.js';
export { PlayFunction, PlayFunctionContext } from './PlayFunction.js';
import './CodeEditor.js';
declare function loadCssProperties(element: string, customElements: Package, cssDeclarations?: Record<string, {
    control: 'color' | 'text';
    description: string;
    category: string;
    subcategory: string;
    value: string;
}>): Record<string, {
    control: 'color' | 'text';
    description: string;
    category: string;
    subcategory: string;
    value: string;
}>;
declare function loadCustomElementsModuleByFileFor(moduleName: string, customElements: Package): import("custom-elements-manifest/schema").JavaScriptModule;
declare function loadCustomElementsModuleFor(elementName: string, customElements: Package): import("custom-elements-manifest/schema").JavaScriptModule;
declare function loadSlotFor(elementName: string, slotName: string, customElements: Package): {
    name: string;
    description: string;
};
declare function loadSlotForModule(elementModule: any, slotName: string): {
    name: string;
    description: string;
};
declare function loadDefaultSlotFor(elementName: string, customElements: Package): {
    name: string;
    description: string;
};
declare function loadDefaultSlotForModule(elementModule: any): {
    name: string;
    description: string;
};
declare function assignToSlot(slotName: string, rawHtml: string): string;
declare function markdownCode(code: string, lang?: string): string;
declare function loadFileRemote(src: string): Promise<string>;
declare function formatMarkdownCodeElements(str: string, lang?: string): string;
declare function markdownCodeToHtml(str: string, lang?: string): string;
declare function enhanceCodeBlocks(parent: Element): void;
declare function loadCustomElementsCodeMirrorCompletions(customElements: Package): {
    /**
    Add additional tags that can be completed.
    */
    extraTags?: Record<string, TagSpec>;
    /**
    Add additional completable attributes to all tags.
    */
    extraGlobalAttributes?: Record<string, readonly string[]>;
};
declare function loadCustomElementsCodeMirrorCompletionsRemote(path?: string): Promise<{
    /**
    Add additional tags that can be completed.
    */
    extraTags?: Record<string, TagSpec>;
    /**
    Add additional completable attributes to all tags.
    */
    extraGlobalAttributes?: Record<string, readonly string[]>;
}>;
declare function loadCustomElements(path?: string): Promise<Package>;
declare function filterJsDocLinks(jsdoc: string): string;
/**
 * Interprets a template literal as a raw HTML string.
 *
 * ```ts
 * const header = (title: string) => raw`<h1>${title}</h1>`;
 * ```
 *
 * The `raw` tag returns a string that can be used directly as ```innerHTML``` or as ```unsafeHTML``` via lit.
 */
declare const raw: (strings: TemplateStringsArray, ...values: unknown[]) => string;
declare const asRenderString: (strings: TemplateStringsArray, values: unknown[]) => string;
declare function querySelectorAsync(parent: Element | ShadowRoot, selector: any, checkFrequencyMs?: number, timeoutMs?: number): Promise<unknown>;
declare function setupThemes(): Promise<void>;
declare function setupEleventy(): Promise<void>;
declare function setupTheming(): Promise<void>;
declare function uploadTheme(e: Event): Promise<void>;
declare global {
    interface Window {
        srCount: number;
        srCompleteCount: number;
    }
}
export { loadCustomElements, loadCustomElementsModuleByFileFor, loadCustomElementsModuleFor, loadCustomElementsCodeMirrorCompletions, loadCustomElementsCodeMirrorCompletionsRemote, loadSlotFor, loadSlotForModule, loadDefaultSlotFor, loadDefaultSlotForModule, loadCssProperties, loadFileRemote, markdownCode, asRenderString, filterJsDocLinks, formatMarkdownCodeElements, markdownCodeToHtml, assignToSlot, enhanceCodeBlocks, raw, querySelectorAsync, setupThemes, setupEleventy, setupTheming, uploadTheme };
//# sourceMappingURL=StoryUtils.d.ts.map