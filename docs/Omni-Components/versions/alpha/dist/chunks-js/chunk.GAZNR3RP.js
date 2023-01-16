import{a as l}from"./chunk.MCIDFWAY.js";import{b as m}from"./chunk.TDEC2NDF.js";import{a,c as s,d as p}from"./chunk.CHYIO324.js";import{a as d,b as n}from"./chunk.3GEUDTAZ.js";import{j as t,l as o,o as r}from"./chunk.2ZZQBHAA.js";o();r();var i=class extends m{constructor(){super(...arguments);this.type="password"}connectedCallback(){super.connectedCallback(),this.addEventListener("input",this._keyInput.bind(this),{capture:!0}),this.addEventListener("keydown",this._keyDown.bind(this),{capture:!0})}_keyDown(e){if(e.key>="a"&&e.key<="z"){e.preventDefault();return}}_keyInput(){let e=this._inputElement;this.value=e.value}_iconClicked(e){if(this.disabled)return e.stopImmediatePropagation();this.type==="password"?this.type="number":this.type="password",e.stopPropagation()}static get styles(){return[super.styles,d`
        .control-box {
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;

          padding-right: var(--omni-pin-field-control-padding-right, 10px);
          padding-left: var(--omni-pin-field-control-padding-left, 10px);
          padding-top: var(--omni-pin-field-control-padding-top, 0px);
          padding-bottom: var(--omni-pin-field-control-padding-bottom, 0px);
        }

        .hide-icon,
        .show-icon {
          fill: var(--omni-pin-field-icon-color, var(--omni-primary-color));
        }

        .hide-icon,
        .show-icon,
        ::slotted([slot='show']),
        ::slotted([slot='hide']) {
          width: var(--omni-pin-field-icon-width, 24px);
        }

        /* Prevent default icon from displaying in pin field on Edge browser */
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

          text-align: var(--omni-pin-field-text-align, left);

          color: var(--omni-pin-field-font-color, var(--omni-font-color));
          font-family: var(--omni-pin-field-font-family, var(--omni-font-family));
          font-size: var(--omni-pin-field-font-size, var(--omni-font-size));
          font-weight: var(--omni-pin-field-font-weight, var(--omni-font-weight));
          height: var(--omni-pin-field-height, 100%);
          padding: var(--omni-pin-field-padding, 10px);
          width: var(--omni-pin-field-width);
        }

        /* Used to not display default stepper */
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          /* display: none; <- Crashes Chrome on hover */
          -webkit-appearance: none;
          margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
        }
        
        input[type='number'] {
          -moz-appearance: textfield; /* Firefox */
        }
      `]}renderControl(){return n`
      <div class="control-box" @click="${e=>this._iconClicked(e)}">
        ${this.type==="password"?n` <slot name="show"><omni-eye-visible-icon class="show-icon"></omni-eye-visible-icon></slot> `:n` <slot name="hide"><omni-eye-hidden-icon class="hide-icon"></omni-eye-hidden-icon></slot> `}
      </div>
    `}renderContent(){return n`
      <input
        class="field"
        id="inputField"
        inputmode="numeric"
        .type="${this.type}"
        .value=${l(this.value)}
        ?readOnly=${this.disabled}
        tabindex="${this.disabled?-1:0}" />
    `}};t([s()],i.prototype,"type",2),t([p("#inputField")],i.prototype,"_inputElement",2),i=t([a("omni-pin-field")],i);export{i as a};
//# sourceMappingURL=chunk.GAZNR3RP.js.map
