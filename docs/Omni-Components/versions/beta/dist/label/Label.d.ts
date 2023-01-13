import { TemplateResult } from 'lit';
import { OmniElement } from '../core/OmniElement.js';
/**
 * Label component that renders styled text.
 *
 * @import
 * ```js
 * import '@capitec/omni-components/label';
 * ```
 *
 * @example
 * ```html
 * <omni-label
 *   label="Hello World"
 *   type="strong">
 * </omni-label>
 * ```
 *
 * @element omni-label
 *
 * Registry of all properties defined by the component.
 *
 * @cssprop --omni-label-font-color - Label font color.
 * @cssprop --omni-label-font-family - Label font family.
 * @cssprop --omni-label-font-size - Label font size.
 * @cssprop --omni-label-font-weight - Label font weight.
 *
 * @cssprop --omni-label-cursor - Label cursor.
 *
 * @cssprop --omni-label-title-font-size - Title label font size.
 * @cssprop --omni-label-title-font-weight - Title label font weight.
 *
 * @cssprop --omni-label-subtitle-font-size - Subtitle label font size.
 * @cssprop --omni-label-subtitle-font-weight - Subtitle label font weight.
 *
 * @cssprop --omni-label-strong-font-size - Strong label font size.
 * @cssprop --omni-label-strong-font-weight - Strong label font weight.
 *
 * @cssprop --omni-label-default-font-size - Default label font size.
 * @cssprop --omni-label-default-font-weight - Default label font weight.
 */
export declare class Label extends OmniElement {
    /**
     * Text label.
     * @attr
     */
    label: string;
    /**
     * Type of label to display.
     * @attr [type="default"]
     */
    type: 'default' | 'title' | 'subtitle' | 'strong';
    static get styles(): import("lit").CSSResultGroup[];
    render(): TemplateResult;
}
//# sourceMappingURL=Label.d.ts.map