import { OmniFormElement } from '../core/OmniFormElement.js';
import '../icons/Clear.icon';
import '../icons/Search.icon';
/**
 * Search input control.
 *
 * @import
 * ```js
 * import '@capitec/omni-components/search-field';
 * ```
 * @example
 *
 * ```html
 * <omni-search-field
 *   label="Enter a value"
 *   value="Hello World"
 *   hint="Required"
 *   error="Field level error message"
 *   disabled>
 * </omni-search-field>
 * ```
 *
 * @element omni-search-field
 *
 * @cssprop --omni-search-field-text-align - Search field text align.
 * @cssprop --omni-search-field-font-color - Search field font color.
 * @cssprop --omni-search-field-font-family - Search field font family.
 * @cssprop --omni-search-field-font-size - Search field font size.
 * @cssprop --omni-search-field-font-weight - Search field font weight.
 * @cssprop --omni-search-field-height - Search field height.
 * @cssprop --omni-search-field-padding - Search field padding.
 * @cssprop --omni-search-field-width - Search field width
 *
 * @cssprop --omni-search-field-control-margin-right - Search field control right margin.
 * @cssprop --omni-search-field-control-margin-left - Search field control left margin.
 * @cssprop --omni-search-field-control-width - Search field control width.
 *
 * @cssprop --omni-search-field-clear-icon-color - Search field clear icon color.
 * @cssprop --omni-search-field-clear-icon-width - Search field clear icon width.
 *
 * @cssprop --omni-search-field-search-icon-color - Search field search icon color.
 * @cssprop --omni-search-field-search-icon-width - Search field search icon width.
 * @cssprop --omni-search-field-search-icon-margin-left - Search field search icon left margin.
 *
 */
export declare class SearchField extends OmniFormElement {
    private _inputElement;
    connectedCallback(): void;
    _keyInput(): void;
    _clearField(e: MouseEvent): Promise<void>;
    static get styles(): import("lit").CSSResultGroup[];
    protected renderPrefix(): import("lit-html").TemplateResult<1>;
    protected renderControl(): import("lit-html").TemplateResult<1>;
    protected renderContent(): import("lit-html").TemplateResult<1>;
}
//# sourceMappingURL=SearchField.d.ts.map