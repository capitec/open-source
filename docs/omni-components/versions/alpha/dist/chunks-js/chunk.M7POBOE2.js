import{a as v}from"./chunk.APNKRDWQ.js";import{a as g}from"./chunk.QQ4KC6E2.js";import{a}from"./chunk.STNTOOHJ.js";import{a as d}from"./chunk.YTU7KEBB.js";import{a as f,b as c,c as l,d as u}from"./chunk.4PFNWG2J.js";import{a as p,d as n,g as s}from"./chunk.63YMDT6M.js";import{j as t,m as h,p as m}from"./chunk.BF43NN75.js";h();m();var o=class extends g{constructor(){super(...arguments);this.defaultLocale="en-US";this.locale=this.defaultLocale;this.date=this.value&&typeof this.value=="string"?a.fromISO(this.value).setLocale(this.locale):a.local();this._showCalendar=!1;this._bottomOfViewport=!1;this._isMobile=!1;this._windowClickBound=this._windowClick.bind(this);this._checkForBottomOfScreenBound=this._checkForBottomOfScreen.bind(this);this._checkForMobileBound=this._checkforMobile.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._inputClick.bind(this)),window.addEventListener("click",this._windowClickBound)}async firstUpdated(){await this._checkForBottomOfScreen(),await this._checkforMobile(),window.addEventListener("resize",this._checkForBottomOfScreenBound),window.addEventListener("scroll",this._checkForBottomOfScreenBound),window.addEventListener("resize",this._checkForMobileBound),window.addEventListener("scroll",this._checkForMobileBound)}disconnectedCallback(){window.removeEventListener("click",this._windowClickBound),window.removeEventListener("resize",this._checkForBottomOfScreenBound),window.removeEventListener("scroll",this._checkForBottomOfScreenBound),window.removeEventListener("resize",this._checkForMobileBound),window.removeEventListener("scroll",this._checkForMobileBound),super.disconnectedCallback()}shouldUpdate(e){return e.has("value")&&(this.date=a.fromISO(this.value).setLocale(this.locale)),!0}focus(e){this._inputElement?this._inputElement.focus(e):super.focus(e)}async _checkForBottomOfScreen(){(visualViewport==null?void 0:visualViewport.height)-this.getBoundingClientRect().bottom<270?this._bottomOfViewport=!0:this._bottomOfViewport=!1}async _checkforMobile(){(window.matchMedia?window.matchMedia("screen and (min-width: 767px)").matches:window.innerWidth>=767)?this._isMobile=!1:this._isMobile=!0}_inputClick(e){if(this.disabled){e.preventDefault(),e.stopImmediatePropagation();return}let r=this.renderRoot.querySelector("#picker-container"),i=this.renderRoot.querySelector("#picker-dialog");(!e.composedPath()||!(r||i)||!(e.composedPath().includes(r)||e.composedPath().includes(i)))&&this._toggleCalendar()}_windowClick(e){let r=this.renderRoot.querySelector("#picker-dialog"),i=e.composedPath();i&&(!i.includes(this)||this._isMobile&&r&&i.findIndex(k=>k===r)===0)&&this._showCalendar&&this._toggleCalendar()}_toggleCalendar(){if(this._showCalendar){if(this._showCalendar=!1,this._isMobile){let e=this.renderRoot.querySelector("#picker-dialog");e&&e.close()}}else if(this._showCalendar=!0,this._isMobile){let e=this.renderRoot.querySelector("#picker-dialog");e&&(console.log("Showing dialog"),e.showModal())}}_dateSelected(e){this.date=a.fromJSDate(e.detail.date).setLocale(this.locale),this.value=this.date.toISODate(),this.dispatchEvent(new CustomEvent("change",{detail:{date:this.date.toJSDate()}})),this._toggleCalendar()}static get styles(){return[super.styles,p`
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
                    color: var(--omni-date-picker-error-font-color, var(--omni-font-color));
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
                    width: var(--omni-date-picker-control-left-border-width, 2px);
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

                /* Picker dialog mobile*/
                @media screen and (max-width: 766px) {

                    .picker-dialog {
                        position: fixed;
                        top: inherit;
                        width: 100%;
                        margin: unset;
                        border-style: none;
                        padding: unset;
                        left: var(--omni-date-picker-mobile-picker-dialog-left, 0px);
                        right: var(--omni-date-picker-mobile-picker-dialog-right, 0px);
                        bottom: var(--omni-date-picker-mobile-picker-dialog-bottom, 0px);
                    }
                    
                    .picker-dialog:modal{
                        max-width: 100%;
                        overflow: none;
                    }

                    .picker-dialog::backdrop {
                        background: var(--omni-date-picker-mobile-picker-dialog-background-color, rgba(0, 0, 0, 0.1));
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
        `]}renderContent(){let e={field:!0,disabled:this.disabled,error:this.error};return n`
            <input
                class=${d(e)}
                id="inputField"
                type="text"
                readonly
                ?disabled=${this.disabled}
                .value=${v(this.date&&this.date.isValid?this.date.toLocaleString(a.DATE_FULL):"")}
                tabindex="${this.disabled?-1:0}" />
        `}renderControl(){let e={"left-border":!0,disabled:this.disabled,error:this.error},r={control:!0,disabled:this.disabled,error:this.error},i={"control-icon":!0,disabled:this.disabled,error:this.error};return n` 
        <div class=${d(e)}></div>
        <div id="control" class=${d(r)} @click=${this.focus}>
                <slot name="calendar">
                    <omni-calendar-icon class=${d(i)}></omni-calendar-icon>
                </slot>            
         </div>
        `}renderPicker(){return this._isMobile?n`
            <dialog id="picker-dialog" class="picker-dialog" @cancel="${e=>e.preventDefault()}">
                ${this._showCalendar?n`
                    <omni-calendar 
                        id="calendar" 
                        locale=${this.locale} 
                        .value=${this.value} 
                        .minDate=${this.minDate}
                        .maxDate=${this.maxDate} 
                        @change=${e=>this._dateSelected(e)}>
                    </omni-calendar>
                `:s}
            </dialog>`:this._showCalendar?n` 
            <div id="picker-container" class="picker-container ${this._bottomOfViewport?"bottom":""}">
                <omni-calendar 
                  id="calendar" 
                  locale=${this.locale} 
                  .value=${this.value}
                  .minDate=${this.minDate}
                  .maxDate=${this.maxDate} 
                  @change=${e=>this._dateSelected(e)}>
                </omni-calendar>
            </div>`:s}renderLabel(){return super.renderLabel(!0)}};t([u("#inputField")],o.prototype,"_inputElement",2),t([c({type:String,reflect:!0})],o.prototype,"locale",2),t([c({type:String,attribute:"min-date",reflect:!0})],o.prototype,"minDate",2),t([c({type:String,attribute:"max-date",reflect:!0})],o.prototype,"maxDate",2),t([l()],o.prototype,"date",2),t([l()],o.prototype,"_showCalendar",2),t([l()],o.prototype,"_bottomOfViewport",2),t([l()],o.prototype,"_isMobile",2),o=t([f("omni-date-picker")],o);export{o as a};
//# sourceMappingURL=chunk.M7POBOE2.js.map
