import{b}from"./chunk.Y2FJIW7X.js";import{a as g}from"./chunk.K2UMXYHA.js";import{a as u}from"./chunk.WASXY5YJ.js";import{a as l}from"./chunk.2HYOR3YM.js";import{g as v}from"./chunk.CWNKFZ3E.js";import{a as p,b as r,c as a,d as f}from"./chunk.S2K25ADN.js";import{a as h,b as o,d}from"./chunk.F6MIXR4E.js";import{j as n,m as c,p as m}from"./chunk.BF43NN75.js";c();m();var t=class extends u{constructor(){super(...arguments);this.idField="id";this.emptyMessage="No items provided";this._popUp=!1;this._bottomOfViewport=!1;this._isMobile=!1}connectedCallback(){super.connectedCallback(),this._checkforMobile(),this.addEventListener("click",this._inputClick.bind(this)),window.addEventListener("click",this._windowClick.bind(this))}async firstUpdated(){await this._checkScreenDimensions(),window.addEventListener("resize",this._checkScreenDimensions.bind(this)),window.addEventListener("scroll",this._checkScreenDimensions.bind(this))}_inputClick(){this._togglePopup()}_windowClick(e){e.composedPath()&&!e.composedPath().includes(this)&&this._popUp&&this._togglePopup()}_controlClick(){this._togglePopup()}_togglePopup(){this._popUp?this._popUp=!1:this._popUp=!0}async _onItemClick(e){var i;this.value=e,await this.updateComplete,(i=this._selectElement)==null||i.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}async _checkScreenDimensions(){await this._checkForBottomOfScreen(),this._checkforMobile(),await this._itemsMaxHeightChange()}async _checkForBottomOfScreen(){visualViewport&&(visualViewport.height-this.getBoundingClientRect().bottom<150?this._bottomOfViewport=!0:this._bottomOfViewport=!1)}_checkforMobile(){(window.matchMedia?window.matchMedia("screen and (min-width: 767px)").matches:window.innerWidth>=767)?this._isMobile=!1:this._isMobile=!0}async _itemsMaxHeightChange(e){if(e&&(this._itemsContainer=e),this._itemsContainer&&!this._isMobile&&(await this.updateComplete,visualViewport))if(this._bottomOfViewport){let i=visualViewport.height-this.getBoundingClientRect().height-(visualViewport.height-this.getBoundingClientRect().top)-10+"px";this._itemsContainer.style.maxHeight=`var(--omni-select-items-max-height, ${i})`}else{let i=visualViewport.height-this.getBoundingClientRect().bottom-10+"px";this._itemsContainer.style.maxHeight=`var(--omni-select-items-max-height, ${i})`}}static get styles(){return[super.styles,h`
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
                    .items {
                       max-height: var(--omni-select-mobile-items-max-height, 240px);
                    }

                    .items-container {
                        position: fixed;

                        left: var(--omni-select-mobile-items-container-left, 0px);
                        right: var(--omni-select-mobile-items-container-right, 0px);
                        bottom: var(--omni-select-mobile-items-container-bottom, 0px);

                        border-top-left-radius: var(--omni-select-mobile-items-container-border-top-left-radius, 10px);
                        border-top-right-radius: var(--omni-select-mobile-items-container-border-top-right-radius, 10px);
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
            `]}renderContent(){var i,s;let e={field:!0,disabled:this.disabled,error:this.error};return o`
            <input
                class=${l(e)}
                data-omni-keyboard-hidden
                id="select"
                type="text"
                readonly
                ?disabled=${this.disabled}
                .value=${g((s=typeof this.value!="string"&&this.displayField?((i=this.value)!=null?i:{})[this.displayField]:this.value)!=null?s:"")}
                tabindex="${this.disabled?-1:0}" />
        `}renderPicker(){return this._popUp?o`
            <div id="items-container" class="items-container ${this._bottomOfViewport?"bottom":""}">
                ${this._isMobile&&this.label?o`<div class="header">${this.label}</div>`:d}
                <div ${b(this._itemsMaxHeightChange)} id="items" class="items"> ${v(this._renderOptions(),o`<div>${this.renderLoading()}</div>`)} </div>
            </div>
        `:d}renderControl(){let e={icon:!0,disabled:this.disabled,error:this.error};return o`<div id="control" class="control ${this._popUp?"expanded":"collapsed"}" @click="${()=>this._controlClick()}">
            ${this._isMobile?o`<slot name="more"><omni-more-icon class=${l(e)}></omni-more-icon></slot>`:o`<slot name="arrow"><omni-chevron-down-icon class=${l(e)}></omni-chevron-down-icon></slot>`}
        </div>`}async _renderOptions(){let e=[],i=0;return typeof this.items=="function"?e=await this.items():e=await this.items,Array.isArray(e)&&(i=e.length),i===0?o`<div class="none">${this.emptyMessage}</div>`:e.map(s=>this._renderOption(s))}_renderOption(e){return o` <div
            class="item ${this.value===(typeof e=="string"?e:e[this.displayField])||this.value===e?"selected":""}"
            @click="${()=>this._onItemClick(e)}">
            ${this.renderItem?o` <omni-render-element .data="${e}" .renderer="${this.renderItem}"></omni-render-element>`:typeof e!="string"&&this.displayField?e[this.displayField]:e}
        </div>`}renderLoading(){return o`<slot name="loading_indicator"><omni-loading-icon class="loading"></omni-loading-icon></slot>`}renderLabel(){return super.renderLabel(!0)}};n([f("#select")],t.prototype,"_selectElement",2),n([r({type:Array,reflect:!0})],t.prototype,"items",2),n([r({type:String,reflect:!0,attribute:"display-field"})],t.prototype,"displayField",2),n([r({type:String,reflect:!0,attribute:"id-field"})],t.prototype,"idField",2),n([r({type:String,reflect:!0,attribute:"empty-message"})],t.prototype,"emptyMessage",2),n([r({type:Object,reflect:!1})],t.prototype,"renderItem",2),n([a()],t.prototype,"_popUp",2),n([a()],t.prototype,"_bottomOfViewport",2),n([a()],t.prototype,"_isMobile",2),t=n([p("omni-select")],t);export{t as a};
//# sourceMappingURL=chunk.MPAJMFJ3.js.map
