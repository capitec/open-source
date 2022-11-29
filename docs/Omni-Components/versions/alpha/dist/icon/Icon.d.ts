import { TemplateResult } from 'lit';
import { OmniElement } from '../core/OmniElement.js';
/**
 * Component that displays an icon.
 *
 * @import
 * ```js
 * import '@capitec/omni-components/icon';
 * ```
 *
 * @example
 * ```html
 * <omni-icon
 *   size="default|extra-small|small|medium|large">
 * 	   <svg version="1.1" id="diagram" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="375px" height="150px"><path d="M45,11.5H33.333c0.735-1.159,1.167-2.528,1.167-4C34.5,3.364,31.136,0,27,0s-7.5,3.364-7.5,7.5c0,1.472,0.432,2.841,1.167,4H9l-9,32h54L45,11.5z M22.5,7.5C22.5,5.019,24.519,3,27,3s4.5,2.019,4.5,4.5c0,1.752-1.017,3.257-2.481,4h-4.037 C23.517,10.757,22.5,9.252,22.5,7.5z" id="control"/></svg>
 * </omni-icon>
 * ```
 *
 * @example
 * ```html
 * <omni-icon
 *   size="default|extra-small|small|medium|large"
 *   icon="＠material/person">
 * </omni-icon>
 * ```
 *
 * @element omni-icon
 *
 * Registry of all properties defined by the component.
 *
 * @slot - The icon to be displayed
 *
 * @cssprop --omni-icon-fill - Icon fill color.
 * @cssprop --omni-icon-background-color - Icon background color.
 * @cssprop --omni-icon-size-large - Icon large size.
 * @cssprop --omni-icon-size-medium - Icon medium size.
 * @cssprop --omni-icon-size-small - Icon small size.
 * @cssprop --omni-icon-size-extra-small - Icon extra small size.
 * @cssprop --omni-icon-size-default - Icon default size.
 *
 */
export declare class Icon extends OmniElement {
    /**
     * The size to display the icon at
     * @attr [size="default"]
     */
    size: 'default' | 'extra-small' | 'small' | 'medium' | 'large';
    /**
     * The name of the icon to display. Takes preference over the slotted icon.
     * @attr
     */
    icon: string;
    static get styles(): import("lit").CSSResultGroup[];
    render(): TemplateResult;
}
//# sourceMappingURL=Icon.d.ts.map