import{a as f}from"./chunk.K2UMXYHA.js";import{a as g}from"./chunk.CQEQBUXK.js";import{a as c}from"./chunk.2HYOR3YM.js";import{a as p,b as a,c as m,d as u}from"./chunk.S2K25ADN.js";import{a as h,b as r}from"./chunk.F6MIXR4E.js";import{j as s,m as l,p as d}from"./chunk.BF43NN75.js";l();d();var i=class extends g{constructor(){super(...arguments);this.type="number";this.showPin=!1}connectedCallback(){super.connectedCallback(),this.addEventListener("input",this._keyInput.bind(this),{capture:!0}),this.addEventListener("keydown",this._keyDown.bind(this),{capture:!0}),this.addEventListener("keyup",this._blurOnEnter.bind(this),{capture:!0}),this.addEventListener("paste",this._onPaste.bind(this),{capture:!0})}async firstUpdated(){let e=window.getComputedStyle(this._inputElement);this.isWebkit=e.webkitTextSecurity,this.isWebkit||(this.type="password"),this.value!==null&&this.value!==void 0&&this.value!==""&&(new RegExp("^[0-9]+$").test(this.value)===!1?this.value="":this.maxLength&&this.value.length>this.maxLength&&(this.value=String(this.value).slice(0,this.maxLength)))}async attributeChangedCallback(e,n,t){super.attributeChangedCallback(e,n,t),e==="value"&&t!==null&&t!==void 0&&t!==""&&(new RegExp("^[0-9]+$").test(t)===!1?this.value=n:this.maxLength&&t.length>this.maxLength&&(this.value=t==null?void 0:t.slice(0,this.maxLength)))}focus(e){this._inputElement?this._inputElement.focus(e):super.focus(e)}_blurOnEnter(e){(e.code==="Enter"||e.keyCode===13)&&e.currentTarget.blur()}_keyDown(e){if(!e.ctrlKey&&e.key>="a"&&e.key<="z"){e.preventDefault();return}}_keyInput(){let e=this._inputElement;(e==null?void 0:e.value)&&this.maxLength&&typeof this.maxLength=="number"&&String(e==null?void 0:e.value).length>this.maxLength&&(e.value=String(e==null?void 0:e.value).slice(0,this.maxLength)),this.value=e==null?void 0:e.value}_onPaste(e){let n=this._inputElement,t=e.clipboardData,o=t==null?void 0:t.getData("Text");if(o&&new RegExp("^[0-9]+$").test(o)===!1)this.maxLength&&o.length>this.maxLength&&(o=o.slice(0,this.maxLength)),n.value=o;else return}_iconClicked(e){var n,t;if(this.disabled)return e.stopImmediatePropagation();this.showPin?(this.showPin=!1,(n=this._inputElement)==null||n.setAttribute("data-omni-keyboard-mask",""),this.isWebkit||(this.type="password")):(this.showPin=!0,(t=this._inputElement)==null||t.removeAttribute("data-omni-keyboard-mask"),this.isWebkit||(this.type="number")),this.requestUpdate(),e.stopPropagation()}static get styles(){return[super.styles,h`
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
        class=${c(e)}
        id="inputField"
        inputmode="${this.noNativeKeyboard?"none":"numeric"}"
        data-omni-keyboard-mode="numeric"
        type="${this.type}"
        value=${f(this.value)}
        ?readOnly=${this.disabled}
        tabindex="${this.disabled?-1:0}"
        data-omni-keyboard-mask />
    `}};s([m()],i.prototype,"type",2),s([a({type:Boolean,reflect:!0,attribute:"no-native-keyboard"})],i.prototype,"noNativeKeyboard",2),s([a({type:Number,reflect:!0,attribute:"max-length"})],i.prototype,"maxLength",2),s([u("#inputField")],i.prototype,"_inputElement",2),i=s([p("omni-pin-field")],i);export{i as a};
//# sourceMappingURL=chunk.7RQACD5G.js.map
