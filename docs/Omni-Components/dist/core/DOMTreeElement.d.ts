import { LitElement } from 'lit';
/**
 * An custom web component that renders the template directly into the main DOM tree instead of the ShadowRoot
 */
export declare abstract class DOMTreeElement extends LitElement {
    connectedCallback(): void;
    protected createRenderRoot(): this;
}
export default DOMTreeElement;
//# sourceMappingURL=DOMTreeElement.d.ts.map