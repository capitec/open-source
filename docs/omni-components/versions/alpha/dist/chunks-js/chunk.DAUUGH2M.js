import{a as m}from"./chunk.ZTJGZLZP.js";import{b as c}from"./chunk.5TKUKOJF.js";import{a as p}from"./chunk.F27L6OQP.js";import{a as d,c as a,d as l}from"./chunk.CHYIO324.js";import{a as s,b as e}from"./chunk.CIM3NS6G.js";import{j as t,l as n,o as r}from"./chunk.2ZZQBHAA.js";n();r();var i=class extends c{constructor(){super(...arguments);this.type="password"}connectedCallback(){super.connectedCallback(),this.addEventListener("input",this._keyInput.bind(this),{capture:!0})}_keyInput(){let o=this._inputElement;this.value=o==null?void 0:o.value}_iconClicked(o){if(this.disabled)return o.stopImmediatePropagation();this.type==="password"?this.type="text":this.type="password",o.stopPropagation()}static get styles(){return[super.styles,s`
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
      <div class="control-box" @click="${o=>this._iconClicked(o)}">
        ${this.type==="password"?e` <slot name="show"><omni-eye-visible-icon class="show-icon"></omni-eye-visible-icon></slot> `:e` <slot name="hide"><omni-eye-hidden-icon class="hide-icon"></omni-eye-hidden-icon></slot> `}
      </div>
    `}renderContent(){let o={field:!0,disabled:this.disabled,error:this.error};return e`
      <input
        class=${p(o)}
        id="inputField"
        .type="${this.type}"
        .value=${m(this.value)}
        ?readOnly=${this.disabled}
        tabindex="${this.disabled?-1:0}" />
    `}};t([a()],i.prototype,"type",2),t([l("#inputField")],i.prototype,"_inputElement",2),i=t([d("omni-password-field")],i);export{i as a};
//# sourceMappingURL=chunk.DAUUGH2M.js.map
