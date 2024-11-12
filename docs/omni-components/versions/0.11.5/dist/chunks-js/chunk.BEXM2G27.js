import{a as w}from"./chunk.APNKRDWQ.js";import{a as _}from"./chunk.QQ4KC6E2.js";import{b as m}from"./chunk.YRSGKD7J.js";import{a as c}from"./chunk.YTU7KEBB.js";import{g}from"./chunk.ZTHUBORR.js";import{a as b,b as l,c as d,d as p}from"./chunk.4PFNWG2J.js";import{a as v,d as i,g as a}from"./chunk.63YMDT6M.js";import{j as o,m as f,p as u}from"./chunk.BF43NN75.js";f();u();var r=class extends _{constructor(){super(...arguments);this.value=null;this.idField="id";this.emptyMessage="No items provided";this.searchable=!1;this._popUp=!1;this._bottomOfViewport=!1;this._isMobile=!1;this._windowClickBound=this._windowClick.bind(this);this._checkScreenDimensionsBound=this._checkScreenDimensions.bind(this)}get bottomOfViewport(){return this._bottomOfViewport}get isMobile(){return this._isMobile}get searchValue(){return this._searchValue}get popUp(){return this._popUp}get searchElement(){return this._searchElement}get itemsContainer(){return this._itemsContainer}get selectElement(){return this._selectElement}connectedCallback(){super.connectedCallback(),this._checkforMobile(),this.addEventListener("click",this._inputClick.bind(this)),window.addEventListener("click",this._windowClickBound)}async firstUpdated(){await this._checkScreenDimensions(),window.addEventListener("resize",this._checkScreenDimensionsBound),window.addEventListener("scroll",this._checkScreenDimensionsBound)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("click",this._windowClickBound),window.removeEventListener("resize",this._checkScreenDimensionsBound),window.removeEventListener("scroll",this._checkScreenDimensionsBound)}_inputClick(e){if(this.disabled){e.preventDefault(),e.stopImmediatePropagation();return}let t=e.composedPath(),s=this.renderRoot.querySelector("#search-control");this.searchable&&t.includes(s)||this._togglePopup()}_windowClick(e){let t=this.renderRoot.querySelector("#items-dialog"),s=e.composedPath();s&&(!s.includes(this)||this._isMobile&&t&&s.findIndex(y=>y===t)===0)&&this._popUp&&this._togglePopup()}_controlClick(){this._togglePopup()}_togglePopup(){if(this._popUp){if(this._popUp=!1,this._onSearchFieldClear(),this._isMobile){let e=this.renderRoot.querySelector("#items-dialog");e&&e.close()}}else if(this._popUp=!0,this._isMobile){let e=this.renderRoot.querySelector("#items-dialog");e&&e.showModal()}}async _onItemClick(e){var t;this.value=e,await this.updateComplete,(t=this._selectElement)==null||t.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}async _checkScreenDimensions(){await this._checkForBottomOfScreen(),this._checkforMobile(),await this._itemsMaxHeightChange()}async _checkForBottomOfScreen(){visualViewport&&(visualViewport.height-this.getBoundingClientRect().bottom<150?this._bottomOfViewport=!0:this._bottomOfViewport=!1)}_checkforMobile(){(window.matchMedia?window.matchMedia("screen and (min-width: 767px)").matches:window.innerWidth>=767)?this._isMobile=!1:this._isMobile=!0}async _itemsMaxHeightChange(e){if(e&&(this._itemsContainer=e),this._itemsContainer&&!this._isMobile&&(await this.updateComplete,visualViewport)){let t="";this._bottomOfViewport?t=visualViewport.height-this.getBoundingClientRect().height-(this.searchable&&this._searchElement?this._searchElement.height:0)-(visualViewport.height-this.getBoundingClientRect().top)-10+"px":t=visualViewport.height-this.getBoundingClientRect().bottom-(this.searchable&&this._searchElement?this._searchElement.offsetHeight:0)-10+"px",this._itemsContainer.style.maxHeight=`var(--omni-select-items-max-height, ${t})`}}_onSearchFieldInput(){var e;this._searchValue=(e=this._searchElement)==null?void 0:e.value,this.requestUpdate()}_onSearchFieldClear(){this._searchValue=void 0,this._searchElement&&(this._searchElement.value=""),this.requestUpdate()}static get styles(){return[super.styles,v`
                /* Added to ensure that component has pointer cursor applied */
                :host {
                    cursor: pointer;
                }

                .field {
                    flex: 1 1 auto;

                    border: none;
                    background: none;
                    box-shadow: none;
                    outline: 0;
                    padding: 0;
                    margin: 0;

                    text-align: var(--omni-select-field-text-align, left);

                    color: var(--omni-select-field-font-color, var(--omni-font-color));
                    font-family: var(--omni-select-field-font-family, var(--omni-font-family));
                    font-size: var(--omni-select-field-font-size, var(--omni-font-size));
                    font-weight: var(--omni-select-field-font-weight, var(--omni-font-weight));
                    padding: var(--omni-select-field-padding, 10px);

                    height: var(--omni-select-field-height, 100%);
                    width: var(--omni-select-field-width, 100%);

                    cursor: pointer;
                }

                .field.disabled {
                    color: var(--omni-select-field-disabled-font-color,#7C7C7C);
                }

                .field.error {
                    color: var(--omni-select-field-error-font-color, var(--omni-font-color));
                }

                .control {
                    display: inline-flex;
                    flex: 0 0 auto;
                    align-items: center;
                    cursor: pointer;
                    padding: var(--omni-select-control-padding, 10px 10px);
                    /*Added to resolve issue of click event firing twice*/
                    pointer-events: none;
                }

                .icon {
                    width: var(--omni-select-control-icon-width, 20px);
                    height: var(--omni-select-control-icon-height, 20px);
                    fill: var(--omni-select-control-icon-color, var(--omni-primary-color));
                }

                .icon.error {
                    fill: var(--omni-select-control-icon-error-color, var(--omni-error-font-color));
                }

                /* Default item container styles*/
                .items-container {
                    box-shadow: var(--omni-select-items-container-box-shadow, 0 0 6px 0 rgba(0, 0, 0, 0.11));
                    background-color: var(--omni-select-items-container-background-color, var(--omni-background-color));
                    z-index: var(--omni-select-items-container-z-index, 420);
                }

                /* Desktop and landscape tablet device styling, if element is at the bottom of the screen make items render above the input */
                @media screen and (min-width: 767px) {
                    .items {
                        max-height: var(--omni-select-items-max-height, 100%);
                    }

                    .items-container {
                        position: absolute;
                        width: var(--omni-select-items-container-width, 100%);
                        top: var(--omni-select-items-container-top, 100%);
                        transition: 1s;
                    }

                    /* Styles if the element is at the bottom of the screen */
                    .items-container.bottom {
                        top: var(--omni-select-items-container-render-bottom-top, 0px);
                        transform: translateY(-100%);
                    }
                }

                /* Only applies styles to transform the control icon if on Desktop */
                @media screen and (min-width: 767px) {
                    .control.expanded .arrow,
                    .control.expanded ::slotted([slot='arrow']) {
                        transform: rotate(180deg);
                        transition: all linear 0.15s;
                    }

                    .control.collapsed .arrow,
                    .control.collapsed ::slotted([slot='arrow']) {
                        transform: none;
                        transition: all linear 0.15s;
                    }
                }

                .items {
                    overflow-y: auto;
                    overflow-x: hidden;

                    height: var(--omni-select-items-height, auto);
                    width: var(--omni-select-items-width, 100%);
                    background: var(--omni-select-items-background-color, var(--omni-background-color));              
                }

                .item,
                .none {
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;

                    color: var(--omni-select-item-font-color, var(--omni-font-color));

                    font-family: var(--omni-select-item-font-family, var(--omni-font-family));
                    font-size: var(--omni-select-item-font-size, var(--omni-font-size));
                    font-weight: var(--omni-select-item-font-weight, var(--omni-font-weight));

                    padding-top: var(--omni-select-item-padding-top, 14px);
                    padding-bottom: var(--omni-select-item-padding-bottom, 14px);
                    padding-left: var(--omni-select-item-padding-left, 10px);
                    padding-right: var(--omni-select-item-padding-right, 10px);
                    width: var(--omni-select-item-width, 100%);
                }

                .item:hover {
                    background-color: var(--omni-select-item-hover-background-color, var(--omni-accent-hover-color));
                }

                .item.selected {
                    color: var(--omni-select-item-selected-color, var(--omni-primary-color));
                }

                .none:hover {
                    background-color: var(--omni-select-item-none-hover, var(--omni-accent-hover-color));
                }

                .loading {
                    width: var(--omni-select-loading-indicator-width, 50px);
                    height: var(--omni-select-loading-indicator-height, 50px);
                }

                /* Search field styles */

                .searchField {
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;

                    color: var(--omni-select-search-field-font-color, var(--omni-font-color));

                    font-family: var(--omni-select-search-field-font-family, var(--omni-font-family));
                    font-size: var(--omni-select-search-field-font-size, var(--omni-font-size));
                    font-weight: var(--omni-select-search-field-font-weight,var(--omni-font-weight));
                    
                    padding-top: var(--omni-select-search-field-padding-top, 14px);
                    padding-bottom: var(--omni-select-search-field-padding-bottom, 14px);
                    padding-left: var(--omni-select-search-field-padding-left, 10px);
                    padding-right: var(--omni-select-search-field-padding-right, 10px);

                    width: var(--omni-select-search-field-width,100%);

                    border-top-width: var(--omni-select-search-field-top-border-width, 0);
                    border-left-width: var(--omni-select-search-field-left-border-width, 0);
                    border-right-width: var(--omni-select-search-field-right-border-width, 0);
                    border-bottom-width: var(--omni-select-search-field-bottom-border-width, 1px);
                    border-bottom-color: var(--omni-select-search-field-bottom-border-color, transparent);

                    background: var(--omni-select-search-field-background-color, var(--omni-background-color));   
                }

                .searchField:focus {
                    outline: none;
                }

                /* Search field clear icons styles */
                .search-control {
                    display: flex;
                    border-bottom: var(--omni-select-search-control-bottom-border, 1px solid var(--omni-primary-color));
                }

                .search-clear-click {
                    display: inline-flex;
                    align-items: center;
                    cursor: pointer;
                    padding-right: var(--omni-select-search-clear-div-right-padding, 10px);    
                    background: var(--omni-select-search-clear-div-background-color, var(--omni-background-color));
                }

                .search-clear-icon,
                ::slotted([slot='search-clear']) {
                    cursor: pointer;
                    height: var(--omni-select-search-clear-icon-height,20px);
                    width: var(--omni-select-search-clear-icon-width, 20px);
                    fill: var(--omni-select-search-clear-icon-color, var(--omni-primary-color));
                }

                /* Should only display for mobile rendering */
                .header {
                    left: var(--omni-select-item-header-left, 0px);
                    right: var(--omni-select-item-header-right, 0px);

                    color: var(--omni-select-item-header-font-color, var(--omni-font-color));
                    font-family: var(--omni-select-item-header-font-family, var(--omni-font-family));
                    font-size: var(--omni-select-item-header-font-size, var(--omni-font-size));
                    font-weight: var(--omni-select-item-header-font-weight, var(--omni-font-weight));
                    background-color: var(--omni-select-item-header-background-color, var(--omni-primary-color));

                    padding-top: var(--omni-select-item-header-padding-top, 14px);
                    padding-bottom: var(--omni-select-item-header-padding-bottom, 14px);
                    padding-right: var(--omni-select-item-header-padding-right, 10px);
                    padding-left: var(--omni-select-item-header-padding-left, 10px);

                    border-top-left-radius: var(--omni-select-item-header-border-top-left-radius, 10px);
                    border-top-right-radius: var(--omni-select-item-header-border-top-right-radius, 10px);
                }

                /* Mobile device styling */
                @media screen and (max-width: 766px) {
                    .items-dialog {
                        position: fixed;
                        top: inherit;
                        margin: unset;
                        border-style: none;
                        padding: unset;
                        width: var(--omni-select-dialog-width,100vw);
                        left: var(--omni-select-dialog-left, 0px);
                        right: var(--omni-select-dialog-right, 0px);
                        bottom: var(--omni-select-dialog-bottom, 0px);
                        background-color: var(--omni-select-dialog-background-color, transparent);
                    }
                    
                    .items-dialog:modal{
                        display: flex;
                        flex-direction: column;
                        max-width: var(--omni-select-dialog-modal-max-width, 100vw);
                        max-height: var(--omni-select-dialog-modal-max-height, 240px);                  
                    }

                    .items-dialog::backdrop {
                        background: var(--omni-select-dialog-backdrop-color, rgba(0, 0, 0, 0.1));
                    }

                    .items {
                        min-height: var(--omni-select-dialog-items-min-height, 150px);
                    }
                }
            `]}renderContent(){var t,s;let e={field:!0,disabled:this.disabled,error:this.error};return i`
            <input
                style="${this.renderSelection?"display: none":a}"
                class=${c(e)}
                data-omni-keyboard-hidden
                id="select"
                type="text"
                readonly
                inputMode="none"
                ?disabled=${this.disabled}
                .value=${w((s=typeof this.value!="string"&&this.displayField?((t=this.value)!=null?t:{})[this.displayField]:this.value)!=null?s:"")}
                tabindex="${this.disabled?-1:0}" />
            ${this.renderSelection?i`
                        <div 
                            class=${c(e)} 
                            style="pointer-events: none;">
                            ${this.value?i` 
                                        <omni-render-element 
                                            style="height: inherit; width: inherit;" 
                                            .data="${this.value}" 
                                            .renderer="${this.renderSelection}"
                                        >
                                            ${this._renderSelectionLoading()}
                                        </omni-render-element>
                                        `:a}
                        </div>`:a}
        `}_renderSelectionLoading(){let e=this.querySelector("[slot=loading_indicator]");if(e){let t=e.cloneNode(!0);return t.setAttribute("slot","loading_indicator"),t.setAttribute("style","height: 100%; max-width: 24px;"),t}return i`<omni-loading-icon slot="loading_indicator" style="height: 100%; max-width: 24px;"></omni-loading-icon>`}renderPicker(){return this._isMobile?this._renderMobilePicker():this._popUp?this._renderDesktopPicker():a}_renderDesktopPicker(){return i`
            <div id="items-container" class="items-container ${this._bottomOfViewport?"bottom":""}">
                ${this._renderSearchField()}
                <div ${m(this._itemsMaxHeightChange)} id="items" class="items"> 
                    ${g(this._renderOptions(),i`<div>${this.renderLoading()}</div>`)}
                </div>
            </div>
        `}_renderMobilePicker(){return i`
            <dialog id="items-dialog" class="items-dialog" @cancel="${e=>e.preventDefault()}">
                ${this._renderMobileHeader()}
                ${this._renderSearchField()}
                <div ${m(this._itemsMaxHeightChange)} id="items" class="items"> 
                    ${g(this._renderOptions(),i`<div>${this.renderLoading()}</div>`)}
                </div>
            </dialog>
            `}_renderMobileHeader(){return this.label?i`<div class="header">${this.label}</div>`:a}_renderSearchField(){return this.searchable?i`
            <div id="search-control" class='search-control'>
                <input type="text" class="searchField" id="searchField" placeholder="Search..." @input="${this._onSearchFieldInput}" />
                <div id="search-clear-click" class="search-clear-click" @click="${this._onSearchFieldClear}">
                    ${this._searchValue?i`
                        <slot name="search-clear">
                            ${this._renderSearchClear()}
                        </slot>
                    `:a}
                </div>
            </div>`:a}_renderSearchClear(){return i`<omni-clear-icon class="search-clear-icon"></omni-clear-icon>`}renderControl(){let e={arrow:!0,icon:!0,disabled:this.disabled,error:this.error};return i`
        <div id="control" class="control ${this._popUp?"expanded":"collapsed"}" @click="${()=>this._controlClick()}">
            ${this._isMobile?this._renderMobileControl(e):this._renderDesktopControl(e)}
        </div>`}_renderDesktopControl(e){return i`<slot name="arrow"><omni-chevron-down-icon class=${c(e)}></omni-chevron-down-icon></slot>`}_renderMobileControl(e){return i`<slot name="more"><omni-more-icon class=${c(e)}></omni-more-icon></slot>`}async _renderOptions(){let e=[],t=0;return typeof this.items=="function"?e=await this.items(this._searchValue):e=await this.items,Array.isArray(e)&&(this._searchValue&&this.filterItems&&typeof this.filterItems=="function"?e=await this.filterItems(this._searchValue,e):e=e.filter(s=>this._filterOption(s)),t=e.length),t===0?this._renderEmptyOptions():this._renderItems(e)}_renderItems(e){return e.map(t=>this._renderOption(t))}_renderEmptyOptions(){return i`<div class="none">${this.emptyMessage}</div>`}_filterOption(e){return this._searchValue?typeof e=="string"?e.toString().toLowerCase().includes(this._searchValue.toLowerCase()):!this.displayField||!e.hasOwnProperty(this.displayField)?!0:e[this.displayField].toString().toLowerCase().includes(this._searchValue.toLowerCase()):!0}_renderOption(e){return i` 
        <div
            class="item ${this.value===(typeof e=="string"?e:e[this.displayField])||this.value===e?"selected":""}"
            @click="${()=>this._onItemClick(e)}">
            ${this.renderItem?i` 
                        <omni-render-element .data="${e}" .renderer="${this.renderItem}">
                            ${this._renderItemLoading()}
                        </omni-render-element>
                    `:typeof e!="string"&&this.displayField?e[this.displayField]:e}
        </div>
        ${this._renderOptionSeparator(e)}
        `}_renderItemLoading(){let e=this.querySelector("[slot=loading_indicator]");if(e){let t=e.cloneNode(!0);return t.setAttribute("slot","loading_indicator"),t.setAttribute("style","height: 100%; max-width: 24px;"),t}return a}_renderOptionSeparator(e){return a}renderLoading(){return i`<slot name="loading_indicator"><omni-loading-icon class="loading"></omni-loading-icon></slot>`}renderLabel(){return super.renderLabel(!0)}};o([p("#select")],r.prototype,"_selectElement",2),o([p("#searchField")],r.prototype,"_searchElement",2),o([l({reflect:!0,converter:{toAttribute(n){var h;try{return!n||typeof n=="string"?n:(h=JSON.stringify(n))!=null?h:null}catch(e){return n}},fromAttribute(n){try{return n&&typeof n=="string"&&(n.includes("{")||n.includes("["))?JSON.parse(n):n}catch(h){return n}}}})],r.prototype,"value",2),o([l({type:Array,reflect:!0})],r.prototype,"items",2),o([l({type:String,reflect:!0,attribute:"display-field"})],r.prototype,"displayField",2),o([l({type:String,reflect:!0,attribute:"id-field"})],r.prototype,"idField",2),o([l({type:String,reflect:!0,attribute:"empty-message"})],r.prototype,"emptyMessage",2),o([l({type:Boolean,reflect:!0})],r.prototype,"searchable",2),o([l({type:Object,reflect:!1})],r.prototype,"renderItem",2),o([l({type:Object,reflect:!1})],r.prototype,"renderSelection",2),o([l({type:Object,reflect:!1})],r.prototype,"filterItems",2),o([d()],r.prototype,"_popUp",2),o([d()],r.prototype,"_bottomOfViewport",2),o([d()],r.prototype,"_isMobile",2),o([d()],r.prototype,"_searchValue",2),r=o([b("omni-select")],r);export{r as a};
//# sourceMappingURL=chunk.BEXM2G27.js.map
