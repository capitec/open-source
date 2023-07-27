import{a as x}from"./chunk.KLTOWBHK.js";import{a as w}from"./chunk.LB764BBD.js";import{a as _}from"./chunk.LUCH4Y6K.js";import{a as b,b as s,c as y,d as r}from"./chunk.S2K25ADN.js";import{a as g,b as o}from"./chunk.L3RZWW2F.js";import{j as i,m as h,p as v}from"./chunk.BF43NN75.js";h();v();var t=class extends x{constructor(){var e;super();this.type="password";this._value="";this._value=(e=this.value)!=null?e:"",Object.defineProperty(this,"value",{get:()=>this._value,set:n=>{var a,l,d,p,c,f,m,u;this._value=n!=null?n:"",this._setInputValue(),this._value?((l=(a=this.container)==null?void 0:a.classList)==null||l.add("float-label"),(p=(d=this.container)==null?void 0:d.classList)==null||p.remove("no-float-label")):((f=(c=this.container)==null?void 0:c.classList)==null||f.remove("float-label"),(u=(m=this.container)==null?void 0:m.classList)==null||u.add("no-float-label")),this.requestUpdate()}})}connectedCallback(){super.connectedCallback(),this.addEventListener("input",this._keyInput.bind(this),{capture:!0}),this.addEventListener("focus",this._focusInput.bind(this),{capture:!0})}async firstUpdated(){this._setInputValue()}_setInputValue(){this._inputElement&&(this._inputElement.value=this.value)}_focusInput(){let e=this._inputElement;e&&setTimeout(function(){e.selectionStart=e.selectionEnd=1e4},0)}focus(e){this._inputElement?this._inputElement.focus(e):super.focus(e)}_keyInput(){let e=this._inputElement;this.value=e==null?void 0:e.value}_iconClicked(e){if(this.disabled)return e.stopImmediatePropagation();this.type==="password"?this.type="text":this.type="password",e.stopPropagation()}static get styles(){return[super.styles,g`
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
            `]}renderControl(){return o`
      <div class="control-box" @click="${e=>this._iconClicked(e)}">
        ${this.type==="password"?o` <slot name="show"><omni-eye-visible-icon class="show-icon"></omni-eye-visible-icon></slot> `:o` <slot name="hide"><omni-eye-hidden-icon class="hide-icon"></omni-eye-hidden-icon></slot> `}
      </div>
    `}renderContent(){let e={field:!0,disabled:this.disabled,error:this.error};return o`
      <input
        class=${_(e)}
        id="inputField"
        .type="${this.type}"
        inputmode="${w(this.noNativeKeyboard?"none":void 0)}"
        ?readOnly=${this.disabled}
        tabindex="${this.disabled?-1:0}" />
    `}};i([y()],t.prototype,"type",2),i([s({type:String,reflect:!1})],t.prototype,"value",2),i([s({type:Boolean,reflect:!0,attribute:"no-native-keyboard"})],t.prototype,"noNativeKeyboard",2),i([r("#inputField")],t.prototype,"_inputElement",2),i([r(".container")],t.prototype,"container",2),t=i([b("omni-password-field")],t);export{t as a};
//# sourceMappingURL=chunk.H4KJFOUS.js.map
