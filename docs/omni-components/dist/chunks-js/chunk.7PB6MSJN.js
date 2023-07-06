import{a as u}from"./chunk.5DQX5M47.js";import{a as b}from"./chunk.DZCGDWRW.js";import{b as c}from"./chunk.MYG5FMLT.js";import{a as d}from"./chunk.LUCH4Y6K.js";import{g as m}from"./chunk.PNTHLTQK.js";import{a as v,b as s,c as l,d as h}from"./chunk.S2K25ADN.js";import{a as g,b as i,e as a}from"./chunk.L3RZWW2F.js";import{j as r,m as p,p as f}from"./chunk.BF43NN75.js";p();f();var t=class extends b{constructor(){super(...arguments);this.idField="id";this.emptyMessage="No items provided";this.searchable=!1;this._popUp=!1;this._bottomOfViewport=!1;this._isMobile=!1}connectedCallback(){super.connectedCallback(),this._checkforMobile(),this.addEventListener("click",this._inputClick.bind(this)),window.addEventListener("click",this._windowClick.bind(this))}async firstUpdated(){await this._checkScreenDimensions(),window.addEventListener("resize",this._checkScreenDimensions.bind(this)),window.addEventListener("scroll",this._checkScreenDimensions.bind(this))}_inputClick(e){let o=e.composedPath(),n=this.renderRoot.querySelector("#search-control");this.searchable&&o.includes(n)||this._togglePopup()}_windowClick(e){let o=this.renderRoot.querySelector("#items-dialog"),n=e.composedPath();n&&(!n.includes(this)||this._isMobile&&o&&n.findIndex(w=>w===o)===0)&&this._popUp&&this._togglePopup()}_controlClick(){this._togglePopup()}_togglePopup(){if(this._popUp){if(this._popUp=!1,this._searchValue=void 0,this._isMobile){let e=this.renderRoot.querySelector("#items-dialog");e&&e.close()}}else if(this._popUp=!0,this._isMobile){let e=this.renderRoot.querySelector("#items-dialog");e&&e.showModal()}}async _onItemClick(e){var o;this.value=e,await this.updateComplete,(o=this._selectElement)==null||o.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}async _checkScreenDimensions(){await this._checkForBottomOfScreen(),this._checkforMobile(),await this._itemsMaxHeightChange()}async _checkForBottomOfScreen(){visualViewport&&(visualViewport.height-this.getBoundingClientRect().bottom<150?this._bottomOfViewport=!0:this._bottomOfViewport=!1)}_checkforMobile(){(window.matchMedia?window.matchMedia("screen and (min-width: 767px)").matches:window.innerWidth>=767)?this._isMobile=!1:this._isMobile=!0}async _itemsMaxHeightChange(e){if(e&&(this._itemsContainer=e),this._itemsContainer&&!this._isMobile&&(await this.updateComplete,visualViewport)){let o="";this._bottomOfViewport?o=visualViewport.height-this.getBoundingClientRect().height-(this.searchable&&this._searchElement?this._searchElement.height:0)-(visualViewport.height-this.getBoundingClientRect().top)-10+"px":o=visualViewport.height-this.getBoundingClientRect().bottom-(this.searchable&&this._searchElement?this._searchElement.offsetHeight:0)-10+"px",this._itemsContainer.style.maxHeight=`var(--omni-select-items-max-height, ${o})`}}_onSearchFieldInput(){var e;this._searchValue=(e=this._searchElement)==null?void 0:e.value,this.requestUpdate()}_onSearchFieldClear(){this._searchValue=void 0,this._searchElement&&(this._searchElement.value=""),this.requestUpdate()}static get styles(){return[super.styles,g`
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
                    .control.expanded {
                        transform: rotate(180deg);
                        transition: all linear 0.15s;
                    }

                    .control.collapsed {
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
            `]}renderContent(){var o,n;let e={field:!0,disabled:this.disabled,error:this.error};return i`
            <input
                style="${this.renderSelection?"display: none":a}"
                class=${d(e)}
                data-omni-keyboard-hidden
                id="select"
                type="text"
                readonly
                inputMode="none"
                ?disabled=${this.disabled}
                .value=${u((n=typeof this.value!="string"&&this.displayField?((o=this.value)!=null?o:{})[this.displayField]:this.value)!=null?n:"")}
                tabindex="${this.disabled?-1:0}" />
            ${this.renderSelection?i`
                        <div 
                            class=${d(e)} 
                            style="pointer-events: none;">
                            ${this.value?i` 
                                        <omni-render-element style="height: inherit; width: inherit;" .data="${this.value}" .renderer="${this.renderSelection}">
                                            <omni-loading-icon slot="loading_indicator" style="height: 100%; max-width: 24px;"></omni-loading-icon>
                                        </omni-render-element>
                                        `:a}
                        </div>`:a}
        `}renderPicker(){return this._isMobile?i`
            <dialog id="items-dialog" class="items-dialog">
                ${this._isMobile&&this.label?i`<div class="header">${this.label}</div>`:a}
                ${this._renderSearchField()}
                <div ${c(this._itemsMaxHeightChange)} id="items" class="items"> ${m(this._renderOptions(),i`<div>${this.renderLoading()}</div>`)}</div>
            </dialog>
            `:this._popUp?i`
            <div id="items-container" class="items-container ${this._bottomOfViewport?"bottom":""}">
                ${this._renderSearchField()}
                <div ${c(this._itemsMaxHeightChange)} id="items" class="items"> ${m(this._renderOptions(),i`<div>${this.renderLoading()}</div>`)}</div>
            </div>
        `:a}_renderSearchField(){return this.searchable?i`
            <div id="search-control" class='search-control'>
                <input type="text" class="searchField" id="searchField" placeholder="Search..." @input="${this._onSearchFieldInput}" />
                <div id="search-clear-click" class="search-clear-click" @click="${this._onSearchFieldClear}">
                    ${this._searchValue?i`
                        <slot name="search-clear">
                            <omni-clear-icon class="search-clear-icon"></omni-clear-icon>
                        </slot>
                    `:a}
                </div>
            </div>`:a}renderControl(){let e={icon:!0,disabled:this.disabled,error:this.error};return i`
        <div id="control" class="control ${this._popUp?"expanded":"collapsed"}" @click="${()=>this._controlClick()}">
            ${this._isMobile?i`<slot name="more"><omni-more-icon class=${d(e)}></omni-more-icon></slot>`:i`<slot name="arrow"><omni-chevron-down-icon class=${d(e)}></omni-chevron-down-icon></slot>`}
        </div>`}async _renderOptions(){let e=[],o=0;return typeof this.items=="function"?e=await this.items(this._searchValue):e=await this.items,Array.isArray(e)&&(this._searchValue&&this.filterItems&&typeof this.filterItems=="function"?e=await this.filterItems(this._searchValue,e):e=e.filter(n=>this._filterOption(n)),o=e.length),o===0?i`<div class="none">${this.emptyMessage}</div>`:e.map(n=>this._renderOption(n))}_filterOption(e){return this._searchValue?typeof e=="string"?e.toString().toLowerCase().includes(this._searchValue.toLowerCase()):!this.displayField||!e.hasOwnProperty(this.displayField)?!0:e[this.displayField].toString().toLowerCase().includes(this._searchValue.toLowerCase()):!0}_renderOption(e){return i` <div
            class="item ${this.value===(typeof e=="string"?e:e[this.displayField])||this.value===e?"selected":""}"
            @click="${()=>this._onItemClick(e)}">
            ${this.renderItem?i` <omni-render-element .data="${e}" .renderer="${this.renderItem}"></omni-render-element>`:typeof e!="string"&&this.displayField?e[this.displayField]:e}
        </div>`}renderLoading(){return i`<slot name="loading_indicator"><omni-loading-icon class="loading"></omni-loading-icon></slot>`}renderLabel(){return super.renderLabel(!0)}};r([h("#select")],t.prototype,"_selectElement",2),r([h("#searchField")],t.prototype,"_searchElement",2),r([s({type:Array,reflect:!0})],t.prototype,"items",2),r([s({type:String,reflect:!0,attribute:"display-field"})],t.prototype,"displayField",2),r([s({type:String,reflect:!0,attribute:"id-field"})],t.prototype,"idField",2),r([s({type:String,reflect:!0,attribute:"empty-message"})],t.prototype,"emptyMessage",2),r([s({type:Boolean,reflect:!0})],t.prototype,"searchable",2),r([s({type:Object,reflect:!1})],t.prototype,"renderItem",2),r([s({type:Object,reflect:!1})],t.prototype,"renderSelection",2),r([s({type:Object,reflect:!1})],t.prototype,"filterItems",2),r([l()],t.prototype,"_popUp",2),r([l()],t.prototype,"_bottomOfViewport",2),r([l()],t.prototype,"_isMobile",2),r([l()],t.prototype,"_searchValue",2),t=r([v("omni-select")],t);export{t as a};
//# sourceMappingURL=chunk.7PB6MSJN.js.map
