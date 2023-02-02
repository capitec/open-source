import { CSSResultGroup, LitElement, nothing, TemplateResult } from 'lit';
/**
 * Base element class that manages element properties and attributes, and
 * renders a lit template with asynchronous rendering support and themed styles.
 *
 * @slot loading_indicator - Used to define content that is displayed while async rendering is awaiting, or when renderLoading() is implicitly called
 *
 * @csscat Theme Variables
 *
 * @cssprop --omni-theme-primary-color - Theme primary color.
 * @cssprop --omni-theme-primary-hover-color - Theme primary hover color.
 * @cssprop --omni-theme-primary-active-color - Theme primary active color.
 *
 * @cssprop --omni-theme-accent-color - Theme accent color.
 * @cssprop --omni-theme-accent-hover-color - Theme accent hover color.
 * @cssprop --omni-theme-accent-active-color - Theme accent active color.
 *
 * @cssprop --omni-theme-background-color - Theme background color.
 * @cssprop --omni-theme-background-hover-color - Theme background hover color.
 * @cssprop --omni-theme-background-active-color - Theme background active color.
 *
 * @cssprop --omni-theme-font-color - Theme font color.
 *
 * @cssprop --omni-theme-disabled-border-color - Theme disabled border color.
 * @cssprop --omni-theme-disabled-background-color - Theme disabled background color.
 * @cssprop --omni-theme-error-font-color - Theme disabled background color.
 * @cssprop --omni-theme-error-border-color - Theme error border color.
 * @cssprop --omni-theme-hint-font-color - Theme hint font color.
 * @cssprop --omni-theme-inactive-color - Theme inactive color.
 * @cssprop --omni-theme-box-shadow-color - Theme inactive color.
 *
 * @cssprop --omni-theme-font-family - Theme font family.
 * @cssprop --omni-theme-font-size - Theme font size.
 * @cssprop --omni-theme-font-weight - Theme font weight.
 *
 * @cssprop --omni-theme-border-radius - Theme border radius.
 * @cssprop --omni-theme-border-width - Theme border width.
 *
 * @cssprop --omni-theme-box-shadow - Theme box shadow.
 */
export declare abstract class OmniElement extends LitElement {
    /**
     * Used to set the base direction of text for display
     * @attr
     */
    dir: string;
    /**
     * Used to identify the language of text content on the web
     * @attr
     */
    lang: string;
    static get styles(): CSSResultGroup;
    protected render(): TemplateResult | typeof nothing;
    protected renderLoading(): TemplateResult | typeof nothing;
    protected renderAsync(): Promise<unknown>;
}
export default OmniElement;
//# sourceMappingURL=OmniElement.d.ts.map