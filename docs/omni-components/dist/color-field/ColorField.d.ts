import { OmniFormElement } from '../core/OmniFormElement.js';
/**
 * Color input control.
 *
 * @import
 * ```js
 * import '@capitec/omni-components/color-field';
 * ```
 * @example
 *
 * ```html
 * <omni-color-field
 *   label="Enter a value"
 *   value="#F6B73C"
 *   data="{'id': 12345, 'name': 'Test'}"
 *   hint="Required"
 *   error="Field level error message"
 *   disabled>
 * </omni-color-field>
 * ```
 *
 * @element omni-color-field
 *
 * @cssprop --omni-color-field-text-align - Color field text align.
 * @cssprop --omni-color-field-font-color - Color field font color.
 * @cssprop --omni-color-field-font-family - Color field font family.
 * @cssprop --omni-color-field-font-size - Color field font size.
 * @cssprop --omni-color-field-font-weight - Color field font weight.
 * @cssprop --omni-color-field-picker-height - Color field picker height.
 * @cssprop --omni-color-field-picker-width - Color field picker width.
 * @cssprop --omni-color-field-height - Color field height.
 * @cssprop --omni-color-field-padding - Color field width.
 * @cssprop --omni-color-field-min-height - Color field min height.
 * @cssprop --omni-color-field-min-width - Color field min width.
 * @cssprop --omni-color-field-text-select - Color field text selection.
 *
 */
export declare class ColorField extends OmniFormElement {
    private _inputElement;
    connectedCallback(): void;
    _keyInput(): void;
    static get styles(): import("lit").CSSResultGroup[];
    protected renderContent(): import("lit-html").TemplateResult<1>;
    protected renderControl(): import("lit-html").TemplateResult<1>;
}
//# sourceMappingURL=ColorField.d.ts.map