import{a as c}from"./chunk.K2UMXYHA.js";import{a as m}from"./chunk.SR577AVI.js";import{a as p}from"./chunk.2HYOR3YM.js";import{a as d,c as a,d as l}from"./chunk.S2K25ADN.js";import{a as s,b as e}from"./chunk.F6MIXR4E.js";import{j as t,m as n,p as r}from"./chunk.BF43NN75.js";n();r();var o=class extends m{constructor(){super(...arguments);this.type="password"}connectedCallback(){super.connectedCallback(),this.addEventListener("input",this._keyInput.bind(this),{capture:!0})}focus(i){this._inputElement?this._inputElement.focus(i):super.focus(i)}_keyInput(){let i=this._inputElement;this.value=i==null?void 0:i.value}_iconClicked(i){if(this.disabled)return i.stopImmediatePropagation();this.type==="password"?this.type="text":this.type="password",i.stopPropagation()}static get styles(){return[super.styles,s`
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
      `]}renderControl(){return e`
      <div class="control-box" @click="${i=>this._iconClicked(i)}">
        ${this.type==="password"?e` <slot name="show"><omni-eye-visible-icon class="show-icon"></omni-eye-visible-icon></slot> `:e` <slot name="hide"><omni-eye-hidden-icon class="hide-icon"></omni-eye-hidden-icon></slot> `}
      </div>
    `}renderContent(){let i={field:!0,disabled:this.disabled,error:this.error};return e`
      <input
        class=${p(i)}
        id="inputField"
        .type="${this.type}"
        .value=${c(this.value)}
        ?readOnly=${this.disabled}
        tabindex="${this.disabled?-1:0}" />
    `}};t([a()],o.prototype,"type",2),t([l("#inputField")],o.prototype,"_inputElement",2),o=t([d("omni-password-field")],o);export{o as a};
//# sourceMappingURL=chunk.PWJ2OD7J.js.map
