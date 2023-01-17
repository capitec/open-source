import{a as w}from"./chunk.MCIDFWAY.js";import{b as y}from"./chunk.2UZOXCV4.js";import{b as v,f as u,g as b}from"./chunk.ZO5UBYOG.js";import{a as g,b as m,c,d as f}from"./chunk.CHYIO324.js";import{a as p,b as n,d}from"./chunk.3GEUDTAZ.js";import{j as s,l as a,o as l}from"./chunk.2ZZQBHAA.js";a();l();a();l();a();l();var h=new WeakMap,F=v(class extends u{render(i){return d}update(i,[r]){var e;let t=r!==this.Y;return t&&this.Y!==void 0&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.Y=r,this.dt=(e=i.options)===null||e===void 0?void 0:e.host,this.rt(this.ct=i.element)),d}rt(i){var r;if(typeof this.Y=="function"){let e=(r=this.dt)!==null&&r!==void 0?r:globalThis,t=h.get(e);t===void 0&&(t=new WeakMap,h.set(e,t)),t.get(this.Y)!==void 0&&this.Y.call(this.dt,void 0),t.set(this.Y,i),i!==void 0&&this.Y.call(this.dt,i)}else this.Y.value=i}get lt(){var i,r,e;return typeof this.Y=="function"?(r=h.get((i=this.dt)!==null&&i!==void 0?i:globalThis))===null||r===void 0?void 0:r.get(this.Y):(e=this.Y)===null||e===void 0?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var o=class extends y{constructor(){super(...arguments);this.idField="id";this.emptyMessage="No items provided";this._popUp=!1;this._bottomOfViewport=!1;this._isMobile=!1}connectedCallback(){super.connectedCallback(),this._mobileCheck(),this.addEventListener("click",this._inputClick.bind(this)),window.addEventListener("click",this._windowClick.bind(this))}async firstUpdated(){await this._dimensionsCheck(),window.addEventListener("resize",this._dimensionsCheck.bind(this)),window.addEventListener("scroll",this._dimensionsCheck.bind(this))}_inputClick(){this._togglePopup()}_windowClick(e){e.composedPath()&&!e.composedPath().includes(this)&&this._popUp&&this._togglePopup()}_controlClick(){this._togglePopup()}_togglePopup(){this._popUp?this._popUp=!1:this._popUp=!0}async _onItemClick(e){this.value=e,await this.updateComplete,this._selectElement.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}async _dimensionsCheck(){await this._bottomCheck(),this._mobileCheck(),await this._itemsMaxHeightChange()}async _bottomCheck(){visualViewport.height-this.getBoundingClientRect().bottom<150?this._bottomOfViewport=!0:this._bottomOfViewport=!1}_mobileCheck(){(window.matchMedia?window.matchMedia("screen and (min-width: 767px)").matches:window.innerWidth>=767)?this._isMobile=!1:this._isMobile=!0}async _itemsMaxHeightChange(e){if(e&&(this._itemsContainer=e),this._itemsContainer&&!this._isMobile)if(await this.updateComplete,this._bottomOfViewport){let t=visualViewport.height-this.getBoundingClientRect().height-(visualViewport.height-this.getBoundingClientRect().top)-10+"px";this._itemsContainer.style.maxHeight=`var(--omni-select-items-max-height, ${t})`}else{let t=visualViewport.height-this.getBoundingClientRect().bottom-10+"px";this._itemsContainer.style.maxHeight=`var(--omni-select-items-max-height, ${t})`}}static get styles(){return[super.styles,p`
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
                    height: var(--omni-select-field-height, 100%);
                    padding: var(--omni-select-field-padding, 10px);

                    /* Added to stop the transforming of the label when the input is clicked */
                    pointer-events: none;
                    width: var(--omni-select-field-width);
                }

                .control {
                    display: flex;
                    cursor: pointer;
                    margin-right: var(--omni-select-control-margin-right, 10px);
                    margin-left: var(--omni-select-control-margin-left, 10px);
                    width: var(--omni-select-control-width, 20px);

                    /* Added to resolve issue of click event firing twice*/
                    pointer-events: none;
                }

                .control-icon {
                    width: var(--omni-select-control-icon-width, 20px);
                    fill: var(--omni-select-control-icon-color, var(--omni-primary-color));
                }

                /* Default item container styles*/
                .items-container {
                    box-shadow: var(--omni-select-items-container-box-shadow, 0 0 6px 0 rgba(0, 0, 0, 0.11));
                    background-color: var(--omni-select-items-container-background-color, var(--omni-theme-background-color));
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
                    background-color: var(--omni-select-item-hover-background-color, var(--omni-primary-hover-color));
                }

                .item.selected {
                    color: var(--omni-select-item-selected-color, var(--omni-primary-color));
                }

                .none:hover {
                    background-color: var(--omni-select-item-none-hover, var(--omni-primary-hover-color));
                }

                .loading {
                    width: var(--omni-select-loading-indicator-width, 50px);
                    height: var(--omni-select-loading-indicator-height, 50px);
                }
            `]}renderContent(){var e,t;return n`
            <input
                class="field"
                id="select"
                type="text"
                readonly
                ?disabled=${this.disabled}
                .value=${w((t=typeof this.value!="string"&&this.displayField?((e=this.value)!=null?e:{})[this.displayField]:this.value)!=null?t:"")}
                tabindex="${this.disabled?-1:0}" />
        `}renderPicker(){return!this._popUp||!this.items?d:n`
            <div id="items-container" class="items-container ${this._bottomOfViewport?"bottom":""}">
                ${this._isMobile&&this.label?n`<div class="header">${this.label}</div>`:d}
                <div ${F(this._itemsMaxHeightChange)} id="items" class="items"> ${b(this._renderOptions(),n`<div>${this.renderLoading()}</div>`)} </div>
            </div>
        `}renderControl(){return n` <div id="control" class="control ${this._popUp?"expanded":"collapsed"}" @click="${()=>this._controlClick()}">
            ${this._isMobile?n`<omni-more-icon class="control-icon"></omni-more-icon>`:n`<omni-chevron-down-icon class="control-icon"></omni-chevron-down-icon>`}
        </div>`}async _renderOptions(){let e=[],t=0;return typeof this.items=="function"?e=await this.items():e=await this.items,Array.isArray(e)&&(t=e.length),t===0?n`<div class="none">${this.emptyMessage}</div>`:e.map(O=>this._renderOption(O))}_renderOption(e){return n` <div
            class="item ${this.value===(typeof e=="string"?e:e[this.displayField])||this.value===e?"selected":""}"
            @click="${()=>this._onItemClick(e)}">
            ${this.renderItem?n` <omni-render-element .data="${e}" .renderer="${this.renderItem}"></omni-render-element>`:typeof e!="string"&&this.displayField?e[this.displayField]:e}
        </div>`}renderLoading(){return n`<slot name="loading_indicator"><omni-loading-icon class="loading"></omni-loading-icon></slot>`}};s([f("#select")],o.prototype,"_selectElement",2),s([m({type:Array,reflect:!0})],o.prototype,"items",2),s([m({type:String,reflect:!0,attribute:"display-field"})],o.prototype,"displayField",2),s([m({type:String,reflect:!0,attribute:"id-field"})],o.prototype,"idField",2),s([m({type:String,reflect:!0,attribute:"empty-message"})],o.prototype,"emptyMessage",2),s([m({type:Object,reflect:!1})],o.prototype,"renderItem",2),s([c()],o.prototype,"_popUp",2),s([c()],o.prototype,"_bottomOfViewport",2),s([c()],o.prototype,"_isMobile",2),o=s([g("omni-select")],o);export{o as a};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
//# sourceMappingURL=chunk.HR7NG6AQ.js.map
