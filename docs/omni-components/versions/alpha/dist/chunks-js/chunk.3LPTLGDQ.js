import{a as v}from"./chunk.K2UMXYHA.js";import{a as u}from"./chunk.SR577AVI.js";import{a as i}from"./chunk.MAHZ5XVK.js";import{a as n}from"./chunk.2HYOR3YM.js";import{a as m,b as h,c as r,d as f}from"./chunk.S2K25ADN.js";import{a as c,b as d,d as p}from"./chunk.F6MIXR4E.js";import{j as o,m as l,p as s}from"./chunk.BF43NN75.js";l();s();var t=class extends u{constructor(){super(...arguments);this.defaultLocale="en-US";this.locale=this.defaultLocale;this.date=this.value&&typeof this.value=="string"?i.fromISO(this.value).setLocale(this.locale):i.local();this._showCalendar=!1;this._bottomOfViewport=!1;this._isMobile=!1}connectedCallback(){super.connectedCallback(),this._mobileCheck(),this.addEventListener("click",this._inputClick.bind(this)),window.addEventListener("click",this._windowClick.bind(this))}async firstUpdated(){await this._dimensionsCheck(),window.addEventListener("resize",this._dimensionsCheck.bind(this)),window.addEventListener("scroll",this._dimensionsCheck.bind(this))}shouldUpdate(e){return e.has("value")&&(this.date=i.fromISO(this.value).setLocale(this.locale)),!0}focus(e){this._inputElement?this._inputElement.focus(e):super.focus(e)}async _dimensionsCheck(){await this._bottomCheck(),this._mobileCheck()}async _bottomCheck(){visualViewport.height-this.getBoundingClientRect().bottom<270?this._bottomOfViewport=!0:this._bottomOfViewport=!1}_mobileCheck(){(window.matchMedia?window.matchMedia("screen and (min-width: 767px)").matches:window.innerWidth>=767)?this._isMobile=!1:this._isMobile=!0}_inputClick(e){let a=this.renderRoot.querySelector("#picker-container");(!e.composedPath()||!a||!e.composedPath().includes(a))&&this._toggleCalendar()}_windowClick(e){e.composedPath()&&!e.composedPath().includes(this)&&this._showCalendar&&(this._showCalendar=!1)}_toggleCalendar(){this._showCalendar?this._showCalendar=!1:this._showCalendar=!0}_dateSelected(e){this.date=i.fromJSDate(e.detail.date),this.value=this.date.toISODate(),this.dispatchEvent(new CustomEvent("change",{detail:{date:this.date.toJSDate()}})),this._toggleCalendar()}static get styles(){return[super.styles,c`
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
                display: inline-flex;
                flex: 0 0 auto;
                align-items: center;
                cursor: pointer;
                padding: var(--omni-date-picker-control-padding, 10px 10px);
            }

            .control:hover  {
                background-color: var(--omni-date-picker-control-hover-color, var(--omni-accent-hover-color));
            }


            .control-icon,
            ::slotted([slot='calendar']){
                width: var(--omni-date-picker-control-icon-width, 20px);
                height: var(--omni-date-picker-control-icon-height, 20px);
                fill: var(--omni-date-picker-control-icon-color,  var(--omni-primary-color));
                cursor: pointer;
            }

            .control-icon.error {
                fill: var(--omni-date-picker-control-icon-error-color, var(--omni-error-font-color));
            }

            .left-border {
                width: var(--omni-date-picker-control-left-border-width, 1px);
                background-color: var(--omni-date-picker-control-left-border-color,var(--omni-form-border-color));
            }

            .layout:focus-within > .left-border {
                width: var(--omni-date-picker-control-left-focused-border-width, 2px);
                background-color: var(--omni-date-picker-control-left-focused-color, var(--omni-primary-color));
            }

            .left-border.error {
                background-color: var(--omni-date-picker-control-left-border-error-color, var(--omni-error-font-color));
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
        `]}renderContent(){let e={field:!0,disabled:this.disabled,error:this.error};return d`
            <input
                class=${n(e)}
                id="inputField"
                type="text"
                readonly
                ?disabled=${this.disabled}
                .value=${v(this.date&&this.date.isValid?this.date.toLocaleString(i.DATE_FULL):"")}
                tabindex="${this.disabled?-1:0}" />
        `}renderControl(){let e={"left-border":!0,disabled:this.disabled,error:this.error},a={control:!0,disabled:this.disabled,error:this.error},b={"control-icon":!0,disabled:this.disabled,error:this.error};return d` 
        <div class=${n(e)}></div>
        <div id="control" class=${n(a)} @click=${this.focus}>
                <slot name="calendar">
                    <omni-calendar-icon class=${n(b)}></omni-calendar-icon>
                </slot>            
         </div>
        `}renderPicker(){return this._showCalendar?d`
            <div id="picker-container" class="picker-container ${this._bottomOfViewport?"bottom":""}">
                <omni-calendar id="calendar" locale=${this.locale} .value=${this.value} @change=${e=>this._dateSelected(e)}></omni-calendar>
            </div>
        `:p}renderLabel(){return super.renderLabel(!0)}};o([f("#inputField")],t.prototype,"_inputElement",2),o([h({type:String,reflect:!0})],t.prototype,"locale",2),o([r()],t.prototype,"date",2),o([r()],t.prototype,"_showCalendar",2),o([r()],t.prototype,"_bottomOfViewport",2),o([r()],t.prototype,"_isMobile",2),t=o([m("omni-date-picker")],t);export{t as a};
//# sourceMappingURL=chunk.3LPTLGDQ.js.map
