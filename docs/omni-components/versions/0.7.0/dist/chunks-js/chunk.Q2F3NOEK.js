import{a as f}from"./chunk.K2UMXYHA.js";import{a as u}from"./chunk.AMDN2Z2F.js";import{a as m}from"./chunk.E3RY574V.js";import{a as c}from"./chunk.2HYOR3YM.js";import{a as d,b as a,c as l,d as p}from"./chunk.S2K25ADN.js";import{a as s,b as t}from"./chunk.F6MIXR4E.js";import{j as o,m as n,p as r}from"./chunk.BF43NN75.js";n();r();var i=class extends u{constructor(){super(...arguments);this.type="password"}connectedCallback(){super.connectedCallback(),this.addEventListener("input",this._keyInput.bind(this),{capture:!0}),this.addEventListener("focus",this._focusInput.bind(this),{capture:!0})}_focusInput(){let e=this._inputElement;e&&setTimeout(function(){e.selectionStart=e.selectionEnd=1e4},0)}focus(e){this._inputElement?this._inputElement.focus(e):super.focus(e)}_keyInput(){let e=this._inputElement;this.value=e==null?void 0:e.value}_iconClicked(e){if(this.disabled)return e.stopImmediatePropagation();this.type==="password"?this.type="text":this.type="password",e.stopPropagation()}static get styles(){return[super.styles,s`
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
            color: var(--omni-password-field-error-font-color);
        }
      `]}renderControl(){return t`
      <div class="control-box" @click="${e=>this._iconClicked(e)}">
        ${this.type==="password"?t` <slot name="show"><omni-eye-visible-icon class="show-icon"></omni-eye-visible-icon></slot> `:t` <slot name="hide"><omni-eye-hidden-icon class="hide-icon"></omni-eye-hidden-icon></slot> `}
      </div>
    `}renderContent(){let e={field:!0,disabled:this.disabled,error:this.error};return t`
      <input
        class=${c(e)}
        id="inputField"
        .type="${this.type}"
        inputmode="${m(this.noNativeKeyboard?"none":void 0)}"
        .value=${f(this.value)}
        ?readOnly=${this.disabled}
        tabindex="${this.disabled?-1:0}" />
    `}};o([l()],i.prototype,"type",2),o([a({type:Boolean,reflect:!0,attribute:"no-native-keyboard"})],i.prototype,"noNativeKeyboard",2),o([p("#inputField")],i.prototype,"_inputElement",2),i=o([d("omni-password-field")],i);export{i as a};
//# sourceMappingURL=chunk.Q2F3NOEK.js.map
