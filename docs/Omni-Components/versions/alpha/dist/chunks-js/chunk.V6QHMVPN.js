import{a as p}from"./chunk.WRJTD4VD.js";import{b as m}from"./chunk.WDG3O524.js";import{a as d,c as a,d as l}from"./chunk.CHYIO324.js";import{b as s,c as e}from"./chunk.CDDA2I3H.js";import{j as t,l as n,o as r}from"./chunk.2ZZQBHAA.js";n();r();var o=class extends m{constructor(){super(...arguments);this.type="password"}connectedCallback(){super.connectedCallback(),this.addEventListener("input",this._keyInput.bind(this),{capture:!0})}_keyInput(){let i=this._inputElement;this.value=i.value}_iconClicked(i){if(this.disabled)return i.stopImmediatePropagation();this.type==="password"?this.type="text":this.type="password",i.stopPropagation()}static get styles(){return[super.styles,s`
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
          height: var(--omni-password-field-height, 100%);
          padding: var(--omni-password-field-padding, 10px);
          width: var(--omni-password-field-width);
        }
      `]}renderControl(){return e`
      <div class="control-box" @click="${i=>this._iconClicked(i)}">
        ${this.type==="password"?e` <slot name="show"><omni-eye-visible-icon class="show-icon"></omni-eye-visible-icon></slot> `:e` <slot name="hide"><omni-eye-hidden-icon class="hide-icon"></omni-eye-hidden-icon></slot> `}
      </div>
    `}renderContent(){return e`
      <input
        class="field"
        id="inputField"
        .type="${this.type}"
        .value=${p(this.value)}
        ?readOnly=${this.disabled}
        tabindex="${this.disabled?-1:0}" />
    `}};t([a()],o.prototype,"type",2),t([l("#inputField")],o.prototype,"_inputElement",2),o=t([d("omni-password-field")],o);export{o as a};
//# sourceMappingURL=chunk.V6QHMVPN.js.map
