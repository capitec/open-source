import { OmniFormElement } from '../core/OmniFormElement.js';
/**
 * Control to input text.
 *
 * @import
 * ```js
 * import '@capitec/omni-components/text-field';
 * ```
 *
 * @example
 * ```html
 * <omni-text-field
 *   label="Enter a value"
 *   value="Hello World"
 *   hint="Required"
 *   error="Field level error message"
 *   disabled>
 * </omni-text-field>
 * ```
 *
 * @element omni-text-field
 *
 * @cssprop --omni-text-field-text-align - Text field text align.
 * @cssprop --omni-text-field-font-color - Text field font color.
 * @cssprop --omni-text-field-font-family - Text field font family.
 * @cssprop --omni-text-field-font-size - Text field font size.
 * @cssprop --omni-text-field-font-weight - Text field font weight.
 * @cssprop --omni-text-field-height - Text field height.
 * @cssprop --omni-text-field-padding - Text field width.
 *
 */
export declare class TextField extends OmniFormElement {
    private _inputElement;
    connectedCallback(): void;
    _keyInput(): void;
    static get styles(): import("lit").CSSResultGroup[];
    protected renderContent(): import("lit-html").TemplateResult<1>;
}
//# sourceMappingURL=TextField.d.ts.map