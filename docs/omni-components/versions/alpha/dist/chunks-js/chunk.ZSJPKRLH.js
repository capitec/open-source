import{a as x}from"./chunk.QQ4KC6E2.js";import{a as b}from"./chunk.3F3IIFA7.js";import{a as w}from"./chunk.YTU7KEBB.js";import{a as g,b as s,c as y,d as r}from"./chunk.4PFNWG2J.js";import{a as v,d as n}from"./chunk.63YMDT6M.js";import{j as i,m as u,p as h}from"./chunk.BF43NN75.js";u();h();var t=class extends x{constructor(){super(...arguments);this.type="password"}connectedCallback(){super.connectedCallback(),this.addEventListener("input",this._keyInput.bind(this),{capture:!0}),this.addEventListener("focus",this._focusInput.bind(this),{capture:!0})}async firstUpdated(){this.value!==null&&this.value!==void 0&&this.maxLength&&(this._inputElement.value=String(this.value).slice(0,this.maxLength))}updated(e){var o,a,l,d,p,c,f,m;e.has("value")&&(this.value?((a=(o=this.container)==null?void 0:o.classList)==null||a.add("float-label"),(d=(l=this.container)==null?void 0:l.classList)==null||d.remove("no-float-label")):((c=(p=this.container)==null?void 0:p.classList)==null||c.remove("float-label"),(m=(f=this.container)==null?void 0:f.classList)==null||m.add("no-float-label")),this._setInputValue())}_setInputValue(){var e,o;this._inputElement&&(((e=this._inputElement)==null?void 0:e.value)&&this.maxLength&&this._inputElement.value.length>this.maxLength&&(this._inputElement.value=this._inputElement.value.slice(0,this.maxLength)),this.value=(o=this._inputElement)==null?void 0:o.value)}_focusInput(){let e=this._inputElement;e&&setTimeout(function(){e.selectionStart=e.selectionEnd=1e4},0)}focus(e){this._inputElement?this._inputElement.focus(e):super.focus(e)}_keyInput(){let e=this._inputElement;this.value=e==null?void 0:e.value}_iconClicked(e){if(this.disabled)return e.stopImmediatePropagation();this.type==="password"?this.type="text":this.type="password",e.stopPropagation()}static get styles(){return[super.styles,v`
                .control-box {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;

                    padding-right: var(--omni-password-field-control-padding-right, 10px);
                    padding-left: var(--omni-password-field-control-padding-left, 10px);
                    padding-top: var(--omni-password-field-control-padding-top, 0px);
                    padding-bottom: var(--omni-password-field-control-padding-bottom, 0px);
                }

                .hide-icon,
                .show-icon {
                    fill: var(--omni-password-field-icon-color, var(--omni-primary-color));
                }

                .hide-icon,
                .show-icon,
                ::slotted([slot='show']),
                ::slotted([slot='hide']) {
                    width: var(--omni-password-field-icon-width, 24px);
                    height: var(--omni-password-field-icon-height, 24px);
                }

                /* Prevent default icon from displaying in password field on Edge browser */
                input::-ms-reveal,
                input::-ms-clear {
                    display: none;
                }

                .field {
                    flex: 1 1 auto;

                    border: none;
                    background: none;
                    box-shadow: none;
                    outline: 0;
                    padding: 0;
                    margin: 0;

                    text-align: var(--omni-password-field-text-align, left);

                    color: var(--omni-password-field-font-color, var(--omni-font-color));
                    font-family: var(--omni-password-field-font-family, var(--omni-font-family));
                    font-size: var(--omni-password-field-font-size, var(--omni-font-size));
                    font-weight: var(--omni-password-field-font-weight, var(--omni-font-weight));
                    padding: var(--omni-password-field-padding, 10px);

                    height: var(--omni-password-field-height, 100%);
                    width: var(--omni-password-field-width, 100%);
                }

                .field.disabled {
                    color: var(--omni-password-field-disabled-font-color, #7C7C7C);
                }

                .field.error {
                    color: var(--omni-password-field-error-font-color, var(--omni-font-color));
                }
            `]}renderControl(){return n`
      <div class="control-box" @click="${e=>this._iconClicked(e)}">
        ${this.type==="password"?n` <slot name="show"><omni-eye-visible-icon class="show-icon"></omni-eye-visible-icon></slot> `:n` <slot name="hide"><omni-eye-hidden-icon class="hide-icon"></omni-eye-hidden-icon></slot> `}
      </div>
    `}renderContent(){let e={field:!0,disabled:this.disabled,error:this.error};return n`
      <input
        class=${w(e)}
        id="inputField"
        .type="${this.type}"
        inputmode="${b(this.noNativeKeyboard?"none":void 0)}"
        ?readOnly=${this.disabled}
        tabindex="${this.disabled?-1:0}" />
    `}};i([y()],t.prototype,"type",2),i([s({type:String,reflect:!1})],t.prototype,"value",2),i([s({type:Boolean,reflect:!0,attribute:"no-native-keyboard"})],t.prototype,"noNativeKeyboard",2),i([s({type:Number,reflect:!0,attribute:"max-length"})],t.prototype,"maxLength",2),i([r("#inputField")],t.prototype,"_inputElement",2),i([r(".container")],t.prototype,"container",2),t=i([g("omni-password-field")],t);export{t as a};
//# sourceMappingURL=chunk.ZSJPKRLH.js.map
