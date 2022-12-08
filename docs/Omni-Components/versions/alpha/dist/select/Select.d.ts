import { nothing } from 'lit';
import { OmniFormElement } from '../core/OmniFormElement.js';
import { RenderFunction } from '../render-element/RenderElement.js';
import '../icons/Loading.icon.js';
import '../render-element/RenderElement.js';
import '../icons/ChevronDown.icon.js';
import '../icons/More.icon.js';
/**
 * Control to get / set a value within a list of options.
 *
 * @import
 * ```js
 * import '@capitec/omni-components/select';
 * ```
 * @example
 *
 * ```html
 * <omni-select
 *   label="Enter a value"
 *   value="Hello World"
 *   data="{'id': 12345, 'name': 'Test'}"
 *   hint="Required"
 *   error="Field level error message"
 *   items={'item1','item2','item3','item4'}
 *   display-field="label"
 *   id-field="id"
 *   disabled>
 * </omni-select>
 * ```
 *
 * @element omni-select
 *
 * @cssprop --omni-select-field-text-align - Select component input field text align.
 * @cssprop --omni-select-field-font-color -  Select component input field font color.
 * @cssprop --omni-select-field-font-family - Select component input field font family.
 * @cssprop --omni-select-field-font-size - Select component input field font size.
 * @cssprop --omni-select-field-font-weight - Select component input field font weight.
 * @cssprop --omni-select-field-height - Select component input field height
 * @cssprop --omni-select-field-padding - Select component input field padding.
 *
 * @cssprop --omni-select-control-margin-right - Select control right margin.
 * @cssprop --omni-select-control-margin-left - Select control left margin.
 * @cssprop --omni-select-control-width - Select control width.
 *
 * @cssprop --omni-select-control-icon-width - Select control icon width.
 * @cssprop --omni-select-control-icon-color - Select control icon color.
 *
 * @cssprop --omni-select-items-container-box-shadow - Select items container box shadow.
 * @cssprop --omni-select-items-container-background-color - Select items container background color.
 *
 * @cssprop --omni-select-mobile-items-container-left - Select item container for mobile left.
 * @cssprop --omni-select-mobile-items-container-right - Select item container for mobile right.
 * @cssprop --omni-select-mobile-items-container-bottom - Select item container for mobile bottom.
 * @cssprop --omni-select-mobile-items-container-border-top-left-radius - Select item container for mobile top left radius.
 * @cssprop --omni-select-mobile-items-container-border-top-right-radius - Select item container for mobile right left radius.
 *
 * @cssprop --omni-select-items-container-width - Select items container width
 * @cssprop --omni-select-items-container-top - Select items container top.
 * @cssprop --omni-select-items-container-render-bottom-top - Select items container top when rendered at the bottom.
 *
 * @cssprop --omni-select-item-header-left - Select item header left.
 * @cssprop --omni-select-item-header-right - Select item header right.
 * @cssprop --omni-select-item-header-font-family - Select item header font family.
 * @cssprop --omni-select-item-header-font-size - Select item header font size.
 * @cssprop --omni-select-item-header-font-weight - Select item header font weight.
 * @cssprop --omni-select-item-header-font-background-color - Select item header font background color.
 *
 * @cssprop --omni-select-item-header-padding-top - Select item header top padding.
 * @cssprop --omni-select-item-header-padding-bottom - Select item head bottom padding.
 * @cssprop --omni-select-item-header-padding-right - Select item head right padding.
 * @cssprop --omni-select-item-header-padding-left - Select item head left padding.
 *
 * @cssprop --omni-select-item-header-item-border-top-left-radius - Select item header top left border radius.
 * @cssprop --omni-select-item-header-item-border-top-right-radius - Select item header top right border radius.
 *
 * @cssprop --omni-select-items-height - Select items height.
 * @cssprop --omni-select-items-width - Select items width.
 *
 * @cssprop --omni-select-scrollbar-thumb-width - Select items scroll bar thumb width.
 * @cssprop --omni-select-scrollbar-track-padding-left -  Select items scroll bar track left padding.
 * @cssprop --omni-select-scrollbar-track-padding-right - Select items scroll bar track right padding.
 *
 * @cssprop --omni-select-scrollbar-track-border-radius - Select items scroll bar track border radius.
 * @cssprop --omni-select-scrollbar-track-background-color - Select items scroll bar track background color.
 *
 * @cssprop --omni-select-scrollbar-thumb-border-radius - Select items scroll bar thumb border radius.
 * @cssprop --omni-select-scrollbar-thumb-background-color - Select items scroll bar thumb background color.
 * @cssprop --omni-select-scrollbar-track-padding-top - Select items scroll bar thumb top padding.
 * @cssprop --omni-select-scrollbar-track-padding-bottom - Select items scroll bar thumb bottom padding.
 * @cssprop --omni-select-scrollbar-track-padding-left - Select items scroll bar thumb left padding.
 * @cssprop --omni-select-scrollbar-track-padding-right - Select items scroll bar thumb right padding.
 *
 * @cssprop --omni-select-item-font-color - Select item font color.
 * @cssprop --omni-select-item-font-family - Select item font family.
 * @cssprop --omni-select-item-font-weight - Select item font weight.
 * @cssprop --omni-select-item-padding-top - Select item top padding.
 * @cssprop --omni-select-item-padding-bottom - Select item bottom padding.
 * @cssprop --omni-select-item-padding-left - Select item left padding.
 * @cssprop --omni-select-item-padding-right - Select item right padding.
 * @cssprop --omni-select-item-width - Select item width.
 *
 * @cssprop --omni-select-item-hover-background-color - Select item hover background color.
 * @cssprop --omni-select-item-selected-color - Selected item color.
 * @cssprop --omni-select-item-none-hover - Select item hover.
 *
 * @cssprop --omni-select-loading-indicator-width - Select loading indicator width.
 * @cssprop --omni-select-loading-indicator-height - Select loading indicator height.
 *
 */
export declare class Select extends OmniFormElement {
    private _selectElement;
    /**
     * Selectable items of the select component.
     * @attr
     */
    items: SelectItems | (() => SelectItems);
    /**
     * The field of the item to display as one of the selectable options.
     * @attr [display-field]
     */
    displayField: string;
    /**
     * The id field of the items provided.
     * @attr [id-field]
     */
    idField: string;
    /**
     * The render function for each item.
     * @no_attribute
     */
    renderItem: RenderFunction;
    private _popUp;
    private _bottomOfScreen;
    private _mobileWidth;
    connectedCallback(): void;
    _inputClick(): void;
    _windowClick(e: Event): void;
    _controlClick(): void;
    _togglePopup(): void;
    _onItemClick(item: Record<string, unknown> | string): Promise<void>;
    _sizeCheck(): void;
    _heightCheck(): void;
    _widthCheck(): void;
    static get styles(): import("lit").CSSResultGroup[];
    protected renderContent(): import("lit-html").TemplateResult<1>;
    protected renderPicker(): import("lit-html").TemplateResult<1> | typeof nothing;
    protected renderControl(): import("lit-html").TemplateResult<1>;
    _renderOptions(): Promise<import("lit-html").TemplateResult<1> | import("lit-html").TemplateResult<1>[]>;
    _renderOption(item: Record<string, unknown> | string): import("lit-html").TemplateResult<1>;
    protected renderLoading(): import("lit-html").TemplateResult<1>;
}
export declare type SelectTypes = string[] | Record<string, unknown>[];
export declare type SelectItems = SelectTypes | Promise<SelectTypes>;
//# sourceMappingURL=Select.d.ts.map