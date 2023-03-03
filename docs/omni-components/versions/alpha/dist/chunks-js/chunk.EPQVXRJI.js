import{a as m}from"./chunk.ZTJGZLZP.js";import{b as v}from"./chunk.3IXMT3AC.js";import{a as o}from"./chunk.QH3OLD6N.js";import{a as p,b as h,c as n}from"./chunk.CHYIO324.js";import{a as l,b as r,d as c}from"./chunk.CIM3NS6G.js";import{j as i,l as d,o as s}from"./chunk.2ZZQBHAA.js";d();s();var t=class extends v{constructor(){super(...arguments);this.defaultLocale="en-US";this.locale=this.defaultLocale;this.date=this.value&&typeof this.value=="string"?o.fromISO(this.value).setLocale(this.locale):o.local();this._showCalendar=!1;this._bottomOfViewport=!1;this._isMobile=!1}connectedCallback(){super.connectedCallback(),this._mobileCheck(),this.addEventListener("click",this._inputClick.bind(this)),window.addEventListener("click",this._windowClick.bind(this))}async firstUpdated(){await this._dimensionsCheck(),window.addEventListener("resize",this._dimensionsCheck.bind(this)),window.addEventListener("scroll",this._dimensionsCheck.bind(this))}shouldUpdate(e){return e.has("value")&&(this.date=o.fromISO(this.value).setLocale(this.locale)),!0}async _dimensionsCheck(){await this._bottomCheck(),this._mobileCheck()}async _bottomCheck(){visualViewport.height-this.getBoundingClientRect().bottom<270?this._bottomOfViewport=!0:this._bottomOfViewport=!1}_mobileCheck(){(window.matchMedia?window.matchMedia("screen and (min-width: 767px)").matches:window.innerWidth>=767)?this._isMobile=!1:this._isMobile=!0}_inputClick(e){let a=this.renderRoot.querySelector("#picker-container");(!e.composedPath()||!a||!e.composedPath().includes(a))&&this._toggleCalendar()}_windowClick(e){e.composedPath()&&!e.composedPath().includes(this)&&this._showCalendar&&(this._showCalendar=!1)}_toggleCalendar(){this._showCalendar?this._showCalendar=!1:this._showCalendar=!0}_dateSelected(e){this.date=o.fromJSDate(e.detail.date),this.value=this.date.toISODate(),this.dispatchEvent(new CustomEvent("change",{detail:{date:e.detail.date,ISO:e.detail.ISO}})),this._toggleCalendar()}static get styles(){return[super.styles,l`
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

                text-align: var(--omni-date-picker-text-align, left);

                color: var(--omni-date-picker-font-color, var(--omni-font-color));
                font-family: var(--omni-date-picker-font-family, var(--omni-font-family));
                font-size: var(--omni-date-picker-font-size, var(--omni-font-size));
                font-weight: var(--omni-date-picker-font-weight, var(--omni-font-weight));
                height: var(--omni-date-picker-height, 100%);
                padding: var(--omni-date-picker-padding, 10px);
                width: var(--omni-date-picker-width);
                min-width: var(--omni-date-picker-min-width, 242px);
                /* Added to stop the transforming of the label when the input is clicked*/
                pointer-events: none;
                cursor: pointer;
            }

            .field.disabled {
                color: var(--omni-date-picker-disabled-font-color, #7C7C7C);
            }
    
            .field.error {
                color: var(--omni-date-picker-error-font-color);
            }

            /* Styles for the control and control icon */
            .control {
                display: flex;
                cursor: pointer;
                justify-content: center;

                width: var(--omni-date-picker-control-width, 40px);
            }

            .control:hover  {
                background-color: var(--omni-date-picker-control-hover-color, var(--omni-accent-hover-color));
            }

            .control-icon {
                width: var(--omni-date-picker-control-icon-width, 20px);
                fill: var(--omni-date-picker-control-icon-color, var(--omni-primary-color));
            }

            /* Styles related to the picker container*/
            .picker-container {
                z-index: var(--omni-date-picker-container-z-index, 420);
            }

            /* Picker container mobile*/
            @media screen and (max-width: 766px) {
                .picker-container {
                    position: fixed;
                    top: none;
                    left: var(--omni-date-picker-mobile-picker-container-left, 0px);
                    right: var(--omni-date-picker-mobile-picker-container-right, 0px);
                    bottom: var(--omni-date-picker-mobile-picker-container-bottom, 0px);
                    box-shadow: var(--omni-date-picker-mobile-picker-container-box-shadow, 0px 0px 2px 2px rgba(0, 0, 0, 0.11));
                }
            }

            /* Desktop and landscape tablet device styling, if element is at the bottom of the screen make items render above the input */
            @media screen and (min-width: 767px) {
                .picker-container {
                    position: absolute;
                    cursor: default;
                    transition: 1s;
                    width: var(--omni-date-picker-container-width, 100%);
                    top: var(--omni-date-picker-container-top, 102%);
                }

               /* Styles if the element is at the bottom of the screen then render the picker on top of the element */
               .picker-container.bottom {
                   top: var(--omni-date-picker-container-render-bottom-top, -2%);
                   transform: translateY(-100%);
               }
            }
        `]}renderContent(){return r`
            <input
                class="field"
                id="inputField"
                type="text"
                readonly
                ?disabled=${this.disabled}
                .value=${m(this.date&&this.date.isValid?this.date.toLocaleString(o.DATE_FULL):"")}
                tabindex="${this.disabled?-1:0}" />
        `}renderControl(){return r` 
        <div class="divider"></div>
        <div id="control" class="control">
            <omni-calendar-icon class="control-icon"></omni-calendar-icon>
        </div>`}renderPicker(){return this._showCalendar?r`
            <div id="picker-container" class="picker-container ${this._bottomOfViewport?"bottom":""}">
                <omni-calendar id="calendar" locale=${this.locale} .value=${this.value} @change=${e=>this._dateSelected(e)}></omni-calendar>
            </div>
        `:c}};i([h({type:String,reflect:!0})],t.prototype,"locale",2),i([n()],t.prototype,"date",2),i([n()],t.prototype,"_showCalendar",2),i([n()],t.prototype,"_bottomOfViewport",2),i([n()],t.prototype,"_isMobile",2),t=i([p("omni-date-picker")],t);export{t as a};
//# sourceMappingURL=chunk.EPQVXRJI.js.map
