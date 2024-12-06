import{a as v}from"./chunk.APNKRDWQ.js";import{a as h}from"./chunk.QQ4KC6E2.js";import{a as m}from"./chunk.3F3IIFA7.js";import{a as f}from"./chunk.YTU7KEBB.js";import{a as u,b as i,d}from"./chunk.4PFNWG2J.js";import{a as s,d as l}from"./chunk.63YMDT6M.js";import{j as n,m as o,p as a}from"./chunk.BF43NN75.js";o();a();var t=class extends h{constructor(){super();this._boundInputEventListener=this._keyInput.bind(this),this._boundKeyDownEventListener=this._keyDown.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("input",this._boundInputEventListener,{capture:!0}),this.addEventListener("keydown",this._boundKeyDownEventListener,{capture:!0})}disconnectedCallback(){this.removeEventListener("input",this._boundInputEventListener,!0),this.removeEventListener("keydown",this._boundKeyDownEventListener,!0),super.disconnectedCallback()}async firstUpdated(){this.value!==null&&this.value!==void 0&&this.maxLength&&(this._inputElement.value=String(this.value).slice(0,this.maxLength))}async attributeChangedCallback(e,p,r){super.attributeChangedCallback(e,p,r),e==="value"&&new RegExp("^[0-9]+$").test(r)}focus(e){this._inputElement?this._inputElement.focus(e):super.focus(e)}_keyDown(e){if(e.key>="a"&&e.key<="z"){e.preventDefault();return}}_keyInput(){let e=this._inputElement;(e==null?void 0:e.value)&&this.maxLength&&e.value.length>this.maxLength&&(e.value=e.value.slice(0,this.maxLength)),this.value=e==null?void 0:e.value}static get styles(){return[super.styles,s`
                .field {
                    flex: 1 1 auto;

                    border: none;
                    background: none;
                    box-shadow: none;
                    outline: 0;
                    padding: 0;
                    margin: 0;

                    text-align: var(--omni-number-field-text-align, left);

                    color: var(--omni-number-field-font-color, var(--omni-font-color));
                    font-family: var(--omni-number-field-font-family, var(--omni-font-family));
                    font-size: var(--omni-number-field-font-size, var(--omni-font-size));
                    font-weight: var(--omni-number-field-font-weight, var(--omni-font-weight));
                    padding: var(--omni-number-field-padding, 10px);

                    height: var(--omni-number-field-height, 100%);
                    width: var(--omni-number-field-width, 100%);
                }

                .field.disabled {
                    color: var(--omni-number-field-disabled-font-color, #7C7C7C);
                }

                .field.error {
                    color: var(--omni-number-field-error-font-color, var(--omni-font-color));
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

                /* Grant the ability to set the hover color when cursor hovers over auto selectable options */
                input:-webkit-autofill,
                input:-webkit-autofill:focus {
                    transition: var(--omni-number-field-autofill-hover-transition) !important;
                }
            `]}renderContent(){let e={field:!0,disabled:this.disabled,error:this.error};return l`
      <input
        class=${f(e)}
        id="inputField"
        type="number"
        inputmode="${m(this.noNativeKeyboard?"none":void 0)}"
        .value=${v(this.value)}
        ?readOnly=${this.disabled}
        tabindex="${this.disabled?-1:0}" />
    `}};n([d("#inputField")],t.prototype,"_inputElement",2),n([i({type:Boolean,reflect:!0,attribute:"no-native-keyboard"})],t.prototype,"noNativeKeyboard",2),n([i({type:Number,reflect:!0,attribute:"max-length"})],t.prototype,"maxLength",2),t=n([u("omni-number-field")],t);export{t as a};
//# sourceMappingURL=chunk.O2LC27SF.js.map
