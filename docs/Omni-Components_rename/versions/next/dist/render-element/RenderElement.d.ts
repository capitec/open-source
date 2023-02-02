import { TemplateResult, nothing } from 'lit';
import OmniElement from '../core/OmniElement.js';
import '../icons/Loading.icon.js';
/**
 * Element that defers content rendering to a provided function / promise.
 *
 * @import
 * ```js
 * import '@capitec/omni-components/render-element';
 * ```
 *
 * @example
 * ```html
 * <omni-render-element></omni-render-element>
 * ```
 *
 * @element omni-render-element
 *
 * @cssprop --omni-render-element-loading-indicator-width - Loading Indicator width
 */
export declare class RenderElement extends OmniElement {
    /**
     * The renderer function
     * @no_attribute
     */
    renderer: RenderFunction;
    /**
     * Data associated with the component.
     * @attr
     */
    data: object | Promise<object>;
    connectedCallback(): void;
    static get styles(): import("lit").CSSResultGroup[];
    protected renderLoading(): TemplateResult<1>;
    protected renderAsync(): Promise<typeof nothing | TemplateResult<2 | 1>>;
    private _setChildInstance;
    private _updateChildInstance;
    private _internalRenderer;
    private _clearElements;
}
export declare type RenderResult = TemplateResult | typeof nothing | HTMLElement | string;
export declare type RenderFunction = (...data: unknown[]) => RenderResult | Promise<RenderResult>;
//# sourceMappingURL=RenderElement.d.ts.map