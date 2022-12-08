import{a as v}from"./chunk.WRJTD4VD.js";import{b as f}from"./chunk.WDG3O524.js";import{c as h}from"./chunk.DYIGYEUP.js";import{a as m,b as n,c as a,d as p}from"./chunk.CHYIO324.js";import{b as c,c as t,e as s}from"./chunk.CDDA2I3H.js";import{j as o,l,o as d}from"./chunk.2ZZQBHAA.js";l();d();var i=class extends f{constructor(){super(...arguments);this.idField="id";this._popUp=!1;this._bottomOfScreen=!1;this._mobileWidth=!1}connectedCallback(){super.connectedCallback(),this._sizeCheck(),this.addEventListener("click",this._inputClick.bind(this)),window.addEventListener("click",this._windowClick.bind(this)),window.addEventListener("resize",this._sizeCheck.bind(this))}_inputClick(){this._togglePopup()}_windowClick(e){e.composedPath()&&!e.composedPath().includes(this)&&this._popUp&&this._togglePopup()}_controlClick(){this._togglePopup()}_togglePopup(){this._popUp?this._popUp=!1:this._popUp=!0}async _onItemClick(e){this.value=e,await this.updateComplete,this._selectElement.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}_sizeCheck(){this._heightCheck(),this._widthCheck()}_heightCheck(){window.innerHeight<200?this._bottomOfScreen=!0:this._bottomOfScreen=!1}_widthCheck(){window.innerWidth>=767?this._mobileWidth=!1:this._mobileWidth=!0}static get styles(){return[super.styles,c`
                /*Added to ensure that component has pointer cursor applied*/
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
                        max-height: var(--omni-select-items-max-height, 240px);
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

                /* Scroll bar styles*/
                .items::-webkit-scrollbar {
                    width: calc(
                        var(--omni-select-scrollbar-thumb-width, 10px) + var(--omni-select-scrollbar-track-padding-left, 2px) +
                            var(--omni-select-scrollbar-track-padding-right, 2px)
                    );
                }

                .items::-webkit-scrollbar-track {
                    border-radius: var(--omni-select-scrollbar-track-border-radius, 10px);
                    background-color: var(--omni-select-scrollbar-track-background-color, transparent);
                }

                .items::-webkit-scrollbar-thumb {
                    border-radius: var(--omni-select-scrollbar-thumb-border-radius, 10px);
                    background-color: var(--omni-select-scrollbar-thumb-background-color, #d9d9d9);

                    border-top: var(--omni-select-scrollbar-track-padding-top, 2px) solid transparent;
                    border-bottom: var(--omni-select-scrollbar-track-padding-bottom, 2px) solid transparent;
                    border-left: var(--omni-select-scrollbar-track-padding-left, 2px) solid transparent;
                    border-right: var(--omni-select-scrollbar-track-padding-right, 2px) solid transparent;

                    background-clip: padding-box;
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
            `]}renderContent(){var e,r;return t`
            <input
                class="field"
                id="select"
                type="text"
                readonly
                ?disabled=${this.disabled}
                .value=${v((r=typeof this.value!="string"&&this.displayField?((e=this.value)!=null?e:{})[this.displayField]:this.value)!=null?r:"")}
                tabindex="${this.disabled?-1:0}" />
        `}renderPicker(){return!this._popUp||!this.items?s:t`
            <div id="items-container" class="items-container ${this._bottomOfScreen?"bottom":""}">
                ${this._mobileWidth?t`<div class="header">${this.label}</div>`:s}
                <div id="items" class="items"> ${h(this._renderOptions(),t`<div>${this.renderLoading()}</div>`)} </div>
            </div>
        `}renderControl(){return t` <div id="control" class="control ${this._popUp?"expanded":"collapsed"}" @click="${()=>this._controlClick()}">
            ${this._mobileWidth?t`<omni-more-icon class="control-icon"></omni-more-icon>`:t`<omni-chevron-down-icon class="control-icon"></omni-chevron-down-icon>`}
        </div>`}async _renderOptions(){let e=[],r=0;return await this._sizeCheck(),typeof this.items=="function"?e=await this.items():e=await this.items,Array.isArray(e)&&(r=e.length),r===0?t`<div class="none">No items provided</div>`:e.map(g=>this._renderOption(g))}_renderOption(e){return t` <div
            class="item ${this.value===(typeof e=="string"?e:e[this.displayField])||this.value===e?"selected":""}"
            @click="${()=>this._onItemClick(e)}">
            ${this.renderItem?t` <omni-render-element .data="${e}" .renderer="${this.renderItem}"></omni-render-element>`:typeof e!="string"&&this.displayField?e[this.displayField]:e}
        </div>`}renderLoading(){return t`<slot name="loading_indicator"><omni-loading-icon class="loading"></omni-loading-icon></slot>`}};o([p("#select")],i.prototype,"_selectElement",2),o([n({type:Array,reflect:!0})],i.prototype,"items",2),o([n({type:String,reflect:!0,attribute:"display-field"})],i.prototype,"displayField",2),o([n({type:String,reflect:!0,attribute:"id-field"})],i.prototype,"idField",2),o([n({type:Object,reflect:!1})],i.prototype,"renderItem",2),o([a()],i.prototype,"_popUp",2),o([a()],i.prototype,"_bottomOfScreen",2),o([a()],i.prototype,"_mobileWidth",2),i=o([m("omni-select")],i);export{i as a};
//# sourceMappingURL=chunk.IELOWEIJ.js.map
