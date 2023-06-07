import{a as f}from"./chunk.55232CD4.js";import{a as u}from"./chunk.RWAXFZOX.js";import{a as p,b as s,c as h,d as m}from"./chunk.S2K25ADN.js";import{a as l,b as r}from"./chunk.L3RZWW2F.js";import{j as o,m as a,p as d}from"./chunk.BF43NN75.js";a();d();var i=class extends f{constructor(){super(...arguments);this.type="text";this.showPin=!1}connectedCallback(){super.connectedCallback(),this.addEventListener("beforeinput",this._beforeInput.bind(this),{capture:!0}),this.addEventListener("input",this._onInput.bind(this),{capture:!0}),this.addEventListener("keyup",this._blurOnEnter.bind(this),{capture:!0})}async firstUpdated(){let e=window.getComputedStyle(this._inputElement);this.isWebkit=e.webkitTextSecurity,this.isWebkit||(this.type="password")}async attributeChangedCallback(e,n,t){super.attributeChangedCallback(e,n,t),e==="value"&&(t!=null&&t!==""&&(new RegExp("^[0-9]+$").test(t)===!1?this.removeAttribute("value"):this.maxLength&&t.length>this.maxLength&&(this.value=t==null?void 0:t.slice(0,this.maxLength))),this._inputElement&&(this._inputElement.value=this.value))}focus(e){this._inputElement?this._inputElement.focus(e):super.focus(e)}_blurOnEnter(e){(e.code==="Enter"||e.keyCode===13)&&e.currentTarget.blur()}_isNumber(e){return/\d/.test(e)}_beforeInput(e){let n=this._inputElement;if(n&&n&&!this._isNumber(e.data)){e.preventDefault();return}}_onInput(){let e=this._inputElement;(e==null?void 0:e.value)&&this.maxLength&&typeof this.maxLength=="number"&&String(e==null?void 0:e.value).length>this.maxLength&&(e.value=String(e==null?void 0:e.value).slice(0,this.maxLength)),this.value=e==null?void 0:e.value}_iconClicked(e){var n,t;if(this.disabled)return e.stopImmediatePropagation();this.showPin?(this.showPin=!1,(n=this._inputElement)==null||n.setAttribute("data-omni-keyboard-mask",""),this.isWebkit||(this.type="password")):(this.showPin=!0,(t=this._inputElement)==null||t.removeAttribute("data-omni-keyboard-mask"),this.isWebkit||(this.type="text")),this.requestUpdate(),e.stopPropagation()}static get styles(){return[super.styles,l`
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
      `]}renderControl(){return r`
      <div class="control-box" @click="${e=>this._iconClicked(e)}">
        ${this.showPin?r` <slot name="hide"><omni-eye-hidden-icon class="hide-icon"></omni-eye-hidden-icon></slot> `:r` <slot name="show"><omni-eye-visible-icon class="show-icon"></omni-eye-visible-icon></slot> `}
      </div>
    `}renderContent(){let e={field:!0,disabled:this.disabled,show:this.showPin,error:this.error};return r`
      <input
        class=${u(e)}
        id="inputField"
        inputmode="${this.noNativeKeyboard?"none":"numeric"}"
        data-omni-keyboard-mode="numeric"
        type="${this.type}"
        ?readOnly=${this.disabled}
        tabindex="${this.disabled?-1:0}"
        data-omni-keyboard-mask />
    `}};o([h()],i.prototype,"type",2),o([s({type:Boolean,reflect:!0,attribute:"no-native-keyboard"})],i.prototype,"noNativeKeyboard",2),o([s({type:Number,reflect:!0,attribute:"max-length"})],i.prototype,"maxLength",2),o([m("#inputField")],i.prototype,"_inputElement",2),i=o([p("omni-pin-field")],i);export{i as a};
//# sourceMappingURL=chunk.6AVU7IYN.js.map
