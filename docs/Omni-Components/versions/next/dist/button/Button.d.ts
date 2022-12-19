import { TemplateResult } from 'lit';
import { OmniElement } from '../core/OmniElement.js';
/**
 * Control that allows an action to be executed.
 *
 * @import
 * ```js
 * import '@capitec/omni-components/button';
 * ```
 *
 * @example
 * ```html
 * <omni-button
 *   label="Some Action"
 *   type="primary">
 * </omni-button>
 * ```
 *
 * @element omni-button
 *
 * @slot - Content to render inside button, can be positioned using {@link slotPosition} property.
 *
 * @cssprop --omni-button-font-family - Component font family.
 * @cssprop --omni-button-font-size - Component font size.
 * @cssprop --omni-button-font-weight - Component font weight.
 * @cssprop --omni-button-line-height - Component line height.
 * @cssprop --omni-button-border-radius - Component border radius.
 * @cssprop --omni-button-padding-top - Component padding top.
 * @cssprop --omni-button-padding-bottom - Component padding bottom.
 * @cssprop --omni-button-padding-left - Component padding left.
 * @cssprop --omni-button-padding-right - Component padding right.
 * @cssprop --omni-button-primary-background-color - Primary "type" background color.
 * @cssprop --omni-button-primary-border-color - Primary "type" border color.
 * @cssprop --omni-button-primary-border-width - Primary "type" border width.
 * @cssprop --omni-button-primary-color - Primary "type" color.
 * @cssprop --omni-button-primary-active-background-color - Primary "type" active back color.
 * @cssprop --omni-button-secondary-background-color - Secondary "type" background color.
 * @cssprop --omni-button-secondary-border-color - Secondary "type" border color.
 * @cssprop --omni-button-secondary-border-width - Secondary "type" border width.
 * @cssprop --omni-button-secondary-color - Secondary "type" color.
 * @cssprop --omni-button-secondary-active-background-color - Secondary "type" active background color.
 * @cssprop --omni-button-clear-background-color - Clear "type" background color.
 * @cssprop --omni-button-clear-border-color - Clear "type" border color.
 * @cssprop --omni-button-clear-border-width - Clear "type" border width.
 * @cssprop --omni-button-clear-color - Clear "type" color.
 * @cssprop --omni-button-clear-hover-background-color - Clear "type" hover background color.
 * @cssprop --omni-button-clear-active-background-color - Clear "type" active background color.
 * @cssprop --omni-button-clear-active-border-color - Clear "type" active border color.
 * @cssprop --omni-button-clear-active-border-width - Clear "type" active border width.
 * @cssprop --omni-button-white-background-color - White "type" background color.
 * @cssprop --omni-button-white-border-color - White "type" border color.
 * @cssprop --omni-button-white-border-width - White "type" border width.
 * @cssprop --omni-button-white-color - White "type" color.
 * @cssprop --omni-button-white-hover-background-color - White "type" hover background color.
 * @cssprop --omni-button-white-active-background-color - White "type" active background color.
 * @cssprop --omni-button-white-active-border-color - White "type" active border color.
 * @cssprop --omni-button-white-active-border-width - White "type" active border width.
 * @cssprop --omni-button-disabled-border-color - Disabled border color.
 * @cssprop --omni-button-disabled-background-color - Disabled background color.
 * @cssprop --omni-button-disabled-active-hover-background-color - Disabled active background color.
 * @cssprop --omni-button-slot-margin-right - Slot margin left (When positioned right of label).
 * @cssprop --omni-button-slot-margin-bottom - Slot margin bottom (When positioned top of label).
 * @cssprop --omni-button-slot-margin-left - Slot margin left (When positioned right of label).
 * @cssprop --omni-button-slot-margin-top - Slot margin top (When positioned bottom of label).
 */
export declare class Button extends OmniElement {
    /**
     * Display type.
     * @attr
     */
    type: 'primary' | 'secondary' | 'clear' | 'white';
    /**
     * Text label.
     * @attr
     */
    label: string;
    /**
     * Position of slotted content.
     * @attr [slot-position="left"]
     */
    slotPosition: 'left' | 'top' | 'right' | 'bottom';
    /**
     * Indicator if the component is disabled.
     * @attr
     */
    disabled: boolean;
    static get styles(): import("lit").CSSResultGroup[];
    protected render(): TemplateResult;
}
//# sourceMappingURL=Button.d.ts.map