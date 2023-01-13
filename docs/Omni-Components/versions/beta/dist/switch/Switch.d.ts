import { TemplateResult } from 'lit';
import { OmniElement } from '../core/OmniElement.js';
/**
 * Control to switch a value on or off.
 *
 * @import
 * ```js
 * import '@capitec/omni-components/switch';
 * ```
 *
 * @example
 * ```html
 * <omni-switch
 *   label="My Switch Value"
 *   data="{'id': 12345, 'name': 'Test'}"
 *   hint="Required"
 *   error="Field level error message"
 *   checked>
 * </omni-switch>
 * ```
 *
 * @element omni-switch
 *
 * Registry of all properties defined by the component.
 *
 * @fires {CustomEvent<{ old: Boolean; new: Boolean; }>} value-change - Dispatched when the switch checked state is changed.
 *
 * @cssprop --omni-switch-label-font-color - Label font color.
 * @cssprop --omni-switch-label-font-family - Label font family.
 * @cssprop --omni-switch-label-font-size - Label font size.
 * @cssprop --omni-switch-label-font-weight - Label font weight.
 * @cssprop --omni-switch-label-spacing - Label left margin spacing.
 *
 * @cssprop --omni-switch-input-hint-label-font-color - Hint text font color.
 * @cssprop --omni-switch-input-hint-label-font-family - Hint text font family.
 * @cssprop --omni-switch-input-hint-label-font-size - Hint text font size.
 * @cssprop --omni-switch-input-hint-label-font-weight - Hint text font weight.
 *
 * @cssprop --omni-switch-input-error-label-font-color - Error text font color.
 * @cssprop --omni-switch-input-error-label-font-family - Error text font family.
 * @cssprop --omni-switch-input-error-label-font-size - Error text font size.
 * @cssprop --omni-switch-input-error-label-font-weight - Error text font weight.
 *
 * @cssprop --omni-switch-track-width - Track width.
 * @cssprop --omni-switch-track-height - Track height.
 * @cssprop --omni-switch-track-background-color - Track background color.
 * @cssprop --omni-switch-checked-track-background-color - Track checked background color.
 * @cssprop --omni-switch-disabled-track-background-color - Track disabled background color.
 * @cssprop --omni-switch-track-border-radius - Track border radius.
 * @cssprop --omni-switch-track-inset - Track inset margins.
 *
 * @cssprop --omni-switch-knob-height - Knob height.
 * @cssprop --omni-switch-knob-width - Knob width.
 * @cssprop --omni-switch-knob-background-color - Knob background color.
 * @cssprop --omni-switch-checked-knob-background-color - Knob checked background color.
 * @cssprop --omni-switch-disabled-knob-background-color - Knob disabled background color.
 * @cssprop --omni-switch-knob-box-shadow - Knob box shadow.
 * @cssprop --omni-switch-knob-hover-box-shadow - Knob hover box shadow.
 * @cssprop --omni-switch-checked-hover-knob-box-shadow - Knob checked hover box shadow.
 * @cssprop --omni-switch-disabled-knob-box-shadow - Knob disabled hover box shadow.
 *
 */
export declare class Switch extends OmniElement {
    /**
     * Text label.
     * @attr
     */
    label: string;
    /**
     * Data associated with the component.
     * @attr
     */
    data: object;
    /**
     * Hint message to assist the user.
     * @attr
     */
    hint: string;
    /**
     * An error message to guide users to correct a mistake.
     * @attr
     */
    error: string;
    /**
     * Indicator if the component is checked or not.
     * @attr
     */
    checked: boolean;
    /**
     * Indicator if the component is disabled.
     * @attr
     */
    disabled: boolean;
    focus(): void;
    _click(event: MouseEvent): void;
    _switchChecked(): void;
    _keyDown(event: KeyboardEvent): void;
    static get styles(): import("lit").CSSResultGroup[];
    render(): TemplateResult;
}
//# sourceMappingURL=Switch.d.ts.map