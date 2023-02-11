import{a as m}from"./chunk.MCIDFWAY.js";import{b as c}from"./chunk.OLTCQXBT.js";import{a as l,c as p,d as h}from"./chunk.CHYIO324.js";import{a,b as n}from"./chunk.3GEUDTAZ.js";import{j as r,l as s,o as d}from"./chunk.2ZZQBHAA.js";s();d();var e=class extends c{constructor(){super(...arguments);this.type="number"}connectedCallback(){super.connectedCallback(),this.addEventListener("input",this._keyInput.bind(this),{capture:!0}),this.addEventListener("keydown",this._keyDown.bind(this),{capture:!0}),this.addEventListener("keyup",this._blurOnEnter.bind(this),{capture:!0})}async firstUpdated(){let i=window.getComputedStyle(this._inputElement);this.isWebkit=i.webkitTextSecurity,this.isWebkit||(this.type="password")}async attributeChangedCallback(i,o,t){super.attributeChangedCallback(i,o,t),i==="value"&&new RegExp("^[0-9]+$").test(t)}_blurOnEnter(i){(i.code==="Enter"||i.keyCode===13)&&i.currentTarget.blur()}_keyDown(i){if(i.key>="a"&&i.key<="z"){i.preventDefault();return}}_keyInput(){let i=this._inputElement;this.value=i==null?void 0:i.value}_iconClicked(i){var o,t;if(this.disabled)return i.stopImmediatePropagation();this.showPin?(this.showPin=!1,(o=this._inputElement)==null||o.classList.add("field-hide-pin"),this.isWebkit||(this.type="password")):(this.showPin=!0,(t=this._inputElement)==null||t.classList.remove("field-hide-pin"),this.isWebkit||(this.type="number")),this.requestUpdate(),i.stopPropagation()}static get styles(){return[super.styles,a`
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
      `]}renderControl(){return n`
      <div class="control-box" @click="${i=>this._iconClicked(i)}">
        ${this.showPin?n` <slot name="hide"><omni-eye-hidden-icon class="hide-icon"></omni-eye-hidden-icon></slot> `:n` <slot name="show"><omni-eye-visible-icon class="show-icon"></omni-eye-visible-icon></slot> `}
      </div>
    `}renderContent(){return n`
      <input
        class="field ${this.showPin?"":"field-hide-pin"}"
        id="inputField"
        inputmode="numeric"
        .type="${this.type}"
        .value=${m(this.value)}
        ?readOnly=${this.disabled}
        tabindex="${this.disabled?-1:0}" />
    `}};r([p()],e.prototype,"type",2),r([h("#inputField")],e.prototype,"_inputElement",2),e=r([l("omni-pin-field")],e);export{e as a};
//# sourceMappingURL=chunk.NY2XEUYC.js.map
