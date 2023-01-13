import { CSSResultGroup, nothing, TemplateResult } from 'lit';
export { ifDefined } from 'lit/directives/if-defined.js';
import OmniElement from './OmniElement.js';
/**
 * Base class used by form components to share common properties, styles and functionality.
 *
 * @slot prefix - Replaces the icon for the prefix slot.
 * @slot suffix - Replaces the icon for the suffix slot.
 *
 * @csscat Base Form Variables
 * @cssprop --omni-form-container-width - Form container width.
 * @cssprop --omni-form-container-font-family - Form container font family.
 *
 * @cssprop --omni-form-field-background-color - Form layout background color.
 *
 * @cssprop --omni-form-border-top - Form border top.
 * @cssprop --omni-form-border-bottom - Form border bottom.
 * @cssprop --omni-form-border-left - Form border left.
 * @cssprop --omni-form-border-right - Form border right.
 * @cssprop --omni-form-border-width - Form border width.
 * @cssprop --omni-form-border-radius - Form border radius.
 * @cssprop --omni-form-border-style - Form border style.
 * @cssprop --omni-form-border-color - Form border color.
 *
 * @cssprop --omni-form-label-transform-origin - Form label text align
 * @cssprop --omni-form-label-text-align - Form label text align.
 * @cssprop --omni-form-label-color - Form label color.
 * @cssprop --omni-form-label-font-size - Form label font size.
 * @cssprop --omni-form-label-font-weight - Form label font weight.
 * @cssprop --omni-form-label-left - Form label left margin.
 * @cssprop --omni-form-label-z-index - Form label z-index.
 *
 * @cssprop --omni-form-focussed-border-width - Form focussed border width.
 * @cssprop --omni-form-focussed-border-color - Form focussed border color.
 * @cssprop --omni-form-focussed-label-color - Form focussed label color.
 *
 * @cssprop --omni-form-error-label-color - Form error label color.
 * @cssprop --omni-form-error-border-color - Form error border color.
 *
 * @cssprop --omni-form-label-disabled-color - Form label disabled color.
 * @cssprop --omni-form-disabled-border-color - Form disabled border color.
 * @cssprop --omni-form-disabled-background-color - Form disabled background color.
 * @cssprop --omni-form-disabled-focussed-label-background-color - Form disabled label focussed background color.
 *
 * @cssprop --omni-form-hint-label-font-color - Form hint label font color.
 * @cssprop --omni-form-hint-label-font-family - Form hint label font family.
 * @cssprop --omni-form-hint-label-font-size - Form hint label font size.
 * @cssprop --omni-form-hint-label-font-weight - Form hint label font weight.
 * @cssprop --omni-form-hint-label-padding-top - Form hint label top padding.
 * @cssprop --omni-form-hint-label-padding-left - Form hint label left padding.
 * @cssprop --omni-form-hint-label-border-width - Form hint label border width.
 *
 * @cssprop --omni-form-error-label-font-color - Form error label font color.
 * @cssprop --omni-form-error-label-font-family - Form error label font family.
 * @cssprop --omni-form-error-label-font-size - Form error label font size.
 * @cssprop --omni-form-error-label-font-weight - Form error label font weight.
 * @cssprop --omni-form-error-label-padding-top - Form error label top padding.
 * @cssprop --omni-form-error-label-padding-left - Form error label left padding.
 * @cssprop --omni-form-error-label-border-width
 *
 * @cssprop --omni-form-hover-color - Form hover color.
 * @cssprop --omni-form-disabled-hover-color - Form disabled hover color.
 * @cssprop --omni-form-error-hover-color - Form error hover color.
 *
 */
export declare class OmniFormElement extends OmniElement {
    /**
     * Text label.
     * @attr
     */
    label: string;
    /**
     * Value entered into the form component.
     * @attr
     */
    value: string | number | Record<string, unknown>;
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
     * Error message guiding a user to correct a mistake.
     * @attr
     */
    error: string;
    /**
     * Indicator if the component should be disabled.
     * @attr
     */
    disabled: boolean;
    private _formContainerElement;
    private _labelElement;
    private _prefixSlot;
    protected hasFocus: boolean;
    connectedCallback(): void;
    protected firstUpdated(): Promise<void>;
    attributeChangedCallback(name: string, _old: string | null, value: string | null): Promise<void>;
    _setLabelPosition(): void;
    _focusGained(): void;
    _focusLost(): void;
    static get styles(): CSSResultGroup;
    protected render(): TemplateResult<1>;
    protected renderPrefix(): typeof nothing | TemplateResult;
    protected renderContent(): typeof nothing | TemplateResult;
    protected renderLabel(): TemplateResult<1>;
    protected renderControl(): typeof nothing | TemplateResult;
    protected renderPicker(): typeof nothing | TemplateResult;
    protected renderHint(): TemplateResult<1>;
    protected renderError(): TemplateResult<1>;
}
//# sourceMappingURL=OmniFormElement.d.ts.map