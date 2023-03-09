import{a as c}from"./chunk.I42QKPBU.js";import{a as u}from"./chunk.H65S73QJ.js";import{a as h}from"./chunk.SDJAFYHN.js";import{a as l,c as p,d as m}from"./chunk.S2K25ADN.js";import{a as d,b as n}from"./chunk.F6MIXR4E.js";import{j as r,m as s,p as a}from"./chunk.BF43NN75.js";s();a();var i=class extends u{constructor(){super(...arguments);this.type="number";this.showPin=!1}connectedCallback(){super.connectedCallback(),this.addEventListener("input",this._keyInput.bind(this),{capture:!0}),this.addEventListener("keydown",this._keyDown.bind(this),{capture:!0}),this.addEventListener("keyup",this._blurOnEnter.bind(this),{capture:!0})}async firstUpdated(){let e=window.getComputedStyle(this._inputElement);this.isWebkit=e.webkitTextSecurity,this.isWebkit||(this.type="password")}async attributeChangedCallback(e,o,t){super.attributeChangedCallback(e,o,t),e==="value"&&new RegExp("^[0-9]+$").test(t)}focus(e){this._inputElement?this._inputElement.focus(e):super.focus(e)}_blurOnEnter(e){(e.code==="Enter"||e.keyCode===13)&&e.currentTarget.blur()}_keyDown(e){if(e.key>="a"&&e.key<="z"){e.preventDefault();return}}_keyInput(){let e=this._inputElement;this.value=e==null?void 0:e.value}_iconClicked(e){var o,t;if(this.disabled)return e.stopImmediatePropagation();this.showPin?(this.showPin=!1,(o=this._inputElement)==null||o.setAttribute("data-omni-keyboard-mask",""),this.isWebkit||(this.type="password")):(this.showPin=!0,(t=this._inputElement)==null||t.removeAttribute("data-omni-keyboard-mask"),this.isWebkit||(this.type="number")),this.requestUpdate(),e.stopPropagation()}static get styles(){return[super.styles,d`
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

          -webkit-text-security:disc;
      
        }

        .field.disabled {
            color: var(--omni-pin-field-disabled-font-color, #7C7C7C);
        }

        .field.error {
            color: var(--omni-pin-field-error-font-color);
        }

        .show {
            -webkit-text-security:none;
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
        ${this.showPin?n` <slot name="hide"><omni-eye-hidden-icon class="hide-icon"></omni-eye-hidden-icon></slot> `:n` <slot name="show"><omni-eye-visible-icon class="show-icon"></omni-eye-visible-icon></slot> `}
      </div>
    `}renderContent(){let e={field:!0,disabled:this.disabled,show:this.showPin,error:this.error};return n`
      <input
        class=${h(e)}
        id="inputField"
        inputmode="numeric"
        .type="${this.type}"
        .value=${c(this.value)}
        ?readOnly=${this.disabled}
        tabindex="${this.disabled?-1:0}" 
        data-omni-keyboard-mask />
    `}};r([p()],i.prototype,"type",2),r([m("#inputField")],i.prototype,"_inputElement",2),i=r([l("omni-pin-field")],i);export{i as a};
//# sourceMappingURL=chunk.IPP6H7DN.js.map
