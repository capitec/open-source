import{a as h}from"./chunk.MCIDFWAY.js";import{b as m}from"./chunk.ELQS25NN.js";import{a,c as l,d as p}from"./chunk.CHYIO324.js";import{a as d,b as t}from"./chunk.3GEUDTAZ.js";import{j as n,l as r,o as s}from"./chunk.2ZZQBHAA.js";r();s();var e=class extends m{constructor(){super(...arguments);this.type="number"}connectedCallback(){super.connectedCallback(),this.addEventListener("input",this._keyInput.bind(this),{capture:!0}),this.addEventListener("keydown",this._keyDown.bind(this),{capture:!0}),this.addEventListener("keyup",this._blurOnEnter.bind(this),{capture:!0})}async firstUpdated(){let i=window.getComputedStyle(this._inputElement);this.isWebkit=i.webkitTextSecurity,this.isWebkit||(this.type="password")}async attributeChangedCallback(i,c,o){super.attributeChangedCallback(i,c,o),i==="value"&&new RegExp("^[0-9]+$").test(o)}_blurOnEnter(i){(i.code==="Enter"||i.keyCode===13)&&i.currentTarget.blur()}_keyDown(i){if(i.key>="a"&&i.key<="z"){i.preventDefault();return}}_keyInput(){let i=this._inputElement;this.value=i.value}_iconClicked(i){if(this.disabled)return i.stopImmediatePropagation();this.showPin?(this.showPin=!1,this._inputElement.classList.add("field-hide-pin"),this.isWebkit||(this.type="password")):(this.showPin=!0,this._inputElement.classList.remove("field-hide-pin"),this.isWebkit||(this.type="number")),this.requestUpdate(),i.stopPropagation()}static get styles(){return[super.styles,d`
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
          height: var(--omni-pin-field-icon-height, 24px);
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
          padding: var(--omni-pin-field-padding, 10px);

          height: var(--omni-pin-field-height, 100%);
          width: var(--omni-pin-field-width, 100%);
      
        }

        .field-hide-pin {
            -webkit-text-security:disc;
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
      `]}renderControl(){return t`
      <div class="control-box" @click="${i=>this._iconClicked(i)}">
        ${this.showPin?t` <slot name="hide"><omni-eye-hidden-icon class="hide-icon"></omni-eye-hidden-icon></slot> `:t` <slot name="show"><omni-eye-visible-icon class="show-icon"></omni-eye-visible-icon></slot> `}
      </div>
    `}renderContent(){return t`
      <input
        class="field ${this.showPin?"":"field-hide-pin"}"
        id="inputField"
        inputmode="numeric"
        .type="${this.type}"
        .value=${h(this.value)}
        ?readOnly=${this.disabled}
        tabindex="${this.disabled?-1:0}" />
    `}};n([l()],e.prototype,"type",2),n([p("#inputField")],e.prototype,"_inputElement",2),e=n([a("omni-pin-field")],e);export{e as a};
//# sourceMappingURL=chunk.5RVXA3CA.js.map
