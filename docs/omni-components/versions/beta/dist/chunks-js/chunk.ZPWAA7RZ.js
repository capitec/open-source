import{b as c}from"./chunk.Y2FJIW7X.js";import{a as u}from"./chunk.K2UMXYHA.js";import{a as b}from"./chunk.P5BVWJU5.js";import{a as d}from"./chunk.2HYOR3YM.js";import{g as m}from"./chunk.CWNKFZ3E.js";import{a as f,b as s,c as l,d as v}from"./chunk.S2K25ADN.js";import{a as g,b as t,d as a}from"./chunk.F6MIXR4E.js";import{j as n,m as h,p}from"./chunk.BF43NN75.js";h();p();var o=class extends b{constructor(){super(...arguments);this.idField="id";this.emptyMessage="No items provided";this._popUp=!1;this._bottomOfViewport=!1;this._isMobile=!1}connectedCallback(){super.connectedCallback(),this._checkforMobile(),this.addEventListener("click",this._inputClick.bind(this)),window.addEventListener("click",this._windowClick.bind(this))}async firstUpdated(){await this._checkScreenDimensions(),window.addEventListener("resize",this._checkScreenDimensions.bind(this)),window.addEventListener("scroll",this._checkScreenDimensions.bind(this))}_inputClick(e){this._togglePopup()}_windowClick(e){let i=this.renderRoot.querySelector("#items-dialog"),r=e.composedPath();r&&(!r.includes(this)||this._isMobile&&i&&r.findIndex(w=>w===i)===0)&&this._popUp&&this._togglePopup()}_controlClick(){this._togglePopup()}_togglePopup(){if(this._popUp){if(this._popUp=!1,this._isMobile){let e=this.renderRoot.querySelector("#items-dialog");e&&e.close()}}else if(this._popUp=!0,this._isMobile){let e=this.renderRoot.querySelector("#items-dialog");e&&e.showModal()}}async _onItemClick(e){var i;this.value=e,await this.updateComplete,(i=this._selectElement)==null||i.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}async _checkScreenDimensions(){await this._checkForBottomOfScreen(),this._checkforMobile(),await this._itemsMaxHeightChange()}async _checkForBottomOfScreen(){visualViewport&&(visualViewport.height-this.getBoundingClientRect().bottom<150?this._bottomOfViewport=!0:this._bottomOfViewport=!1)}_checkforMobile(){(window.matchMedia?window.matchMedia("screen and (min-width: 767px)").matches:window.innerWidth>=767)?this._isMobile=!1:this._isMobile=!0}async _itemsMaxHeightChange(e){if(e&&(this._itemsContainer=e),this._itemsContainer&&!this._isMobile&&(await this.updateComplete,visualViewport))if(this._bottomOfViewport){let i=visualViewport.height-this.getBoundingClientRect().height-(visualViewport.height-this.getBoundingClientRect().top)-10+"px";this._itemsContainer.style.maxHeight=`var(--omni-select-items-max-height, ${i})`}else{let i=visualViewport.height-this.getBoundingClientRect().bottom-10+"px";this._itemsContainer.style.maxHeight=`var(--omni-select-items-max-height, ${i})`}}static get styles(){return[super.styles,g`
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
                    color: var(--omni-select-field-disabled-font-color,  #7C7C7C);
                }

                .field.error {
                    color: var(--omni-select-field-error-font-color);
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
                
                /* Mobile device styling */
                @media screen and (max-width: 766px) {
                    .items-dialog {
                        position: fixed;
                        top: inherit;
                        margin: unset;
                        border-style: none;
                        padding: unset;
                        width: 100%;
                        left: var(--omni-select-dialog-left, 0px);
                        right: var(--omni-select-dialog-right, 0px);
                        bottom: var(--omni-select-dialog-bottom, 0px);
                    }
                    
                    .items-dialog:modal{
                        max-width: var(--omni-select-dialog-modal-max-width, 100%);
                        max-height: var(--omni-select-dialog-modal-max-height, 240px);
                    }

                    .items-dialog::backdrop {
                        background: var(--omni-select-dialog-background-color, rgba(0, 0, 0, 0.1));
                    }
                }

                /* Should only display for mobile rendering */
                .header {
                    position: relative;
                    left: var(--omni-select-item-header-left, 0px);
                    right: var(--omni-select-item-header-right, 0px);

                    color: var(--omni-select-item-header-font-color, #ffffff);
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

                .items {
                    overflow-y: auto;
                    overflow-x: hidden;

                    height: var(--omni-select-items-height, auto);
                    width: var(--omni-select-items-width, 100%);
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
            `]}renderContent(){var i,r;let e={field:!0,disabled:this.disabled,error:this.error};return t`
            <input
                class=${d(e)}
                data-omni-keyboard-hidden
                id="select"
                type="text"
                readonly
                inputMode="none"
                ?disabled=${this.disabled}
                .value=${u((r=typeof this.value!="string"&&this.displayField?((i=this.value)!=null?i:{})[this.displayField]:this.value)!=null?r:"")}
                tabindex="${this.disabled?-1:0}" />
        `}renderPicker(){return this._isMobile?t`
            <dialog id="items-dialog" class="items-dialog">
                ${this._isMobile&&this.label?t`<div class="header">${this.label}</div>`:a}
                <div ${c(this._itemsMaxHeightChange)} id="items" class="items"> ${m(this._renderOptions(),t`<div>${this.renderLoading()}</div>`)} 
                </div>
            </dialog>
            `:this._popUp?t`
            <div id="items-container" class="items-container ${this._bottomOfViewport?"bottom":""}">
                ${this._isMobile&&this.label?t`<div class="header">${this.label}</div>`:a}
                <div ${c(this._itemsMaxHeightChange)} id="items" class="items"> ${m(this._renderOptions(),t`<div>${this.renderLoading()}</div>`)} 
                </div>
            </div>
        `:a}renderControl(){let e={icon:!0,disabled:this.disabled,error:this.error};return t`<div id="control" class="control ${this._popUp?"expanded":"collapsed"}" @click="${()=>this._controlClick()}">
            ${this._isMobile?t`<slot name="more"><omni-more-icon class=${d(e)}></omni-more-icon></slot>`:t`<slot name="arrow"><omni-chevron-down-icon class=${d(e)}></omni-chevron-down-icon></slot>`}
        </div>`}async _renderOptions(){let e=[],i=0;return typeof this.items=="function"?e=await this.items():e=await this.items,Array.isArray(e)&&(i=e.length),i===0?t`<div class="none">${this.emptyMessage}</div>`:e.map(r=>this._renderOption(r))}_renderOption(e){return t` <div
            class="item ${this.value===(typeof e=="string"?e:e[this.displayField])||this.value===e?"selected":""}"
            @click="${()=>this._onItemClick(e)}">
            ${this.renderItem?t` <omni-render-element .data="${e}" .renderer="${this.renderItem}"></omni-render-element>`:typeof e!="string"&&this.displayField?e[this.displayField]:e}
        </div>`}renderLoading(){return t`<slot name="loading_indicator"><omni-loading-icon class="loading"></omni-loading-icon></slot>`}renderLabel(){return super.renderLabel(!0)}};n([v("#select")],o.prototype,"_selectElement",2),n([s({type:Array,reflect:!0})],o.prototype,"items",2),n([s({type:String,reflect:!0,attribute:"display-field"})],o.prototype,"displayField",2),n([s({type:String,reflect:!0,attribute:"id-field"})],o.prototype,"idField",2),n([s({type:String,reflect:!0,attribute:"empty-message"})],o.prototype,"emptyMessage",2),n([s({type:Object,reflect:!1})],o.prototype,"renderItem",2),n([l()],o.prototype,"_popUp",2),n([l()],o.prototype,"_bottomOfViewport",2),n([l()],o.prototype,"_isMobile",2),o=n([f("omni-select")],o);export{o as a};
//# sourceMappingURL=chunk.ZPWAA7RZ.js.map
