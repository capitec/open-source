import{a as c}from"./chunk.KGCS7GKM.js";import{a as b}from"./chunk.5OQBY5R4.js";import{a as f}from"./chunk.DUTPH62F.js";import{a as p}from"./chunk.ZJGON3BB.js";import{a as u,b as o,d as m}from"./chunk.Y6UVSDXK.js";import{a as s,d}from"./chunk.UDCULUBW.js";import{j as n,m as l,p as a}from"./chunk.BF43NN75.js";l();a();var i=class extends b{connectedCallback(){super.connectedCallback(),this.addEventListener("input",this._keyInput.bind(this),{capture:!0}),this.addEventListener("keydown",this._keyDown.bind(this),{capture:!0})}async attributeChangedCallback(e,t,r){super.attributeChangedCallback(e,t,r),e==="value"&&new RegExp("^[0-9]+$").test(r)}focus(e){this._inputElement?this._inputElement.focus(e):super.focus(e)}_keyDown(e){let t=this._inputElement;if(e.key>="a"&&e.key<="z"){e.preventDefault();return}if(console.log("event",e),console.log("event key",e.key),console.log("is number",this._isNumber(e.key)),t&&e.key&&!this._isValid(e.key)){e.preventDefault();return}}_keyInput(){let e=this._inputElement;this.value=e==null?void 0:e.value}_sanitiseMobileValue(){var e,t;this.value=(t=(e=this.value)==null?void 0:e.toString())==null?void 0:t.replace(/^([+]\d{2})?\d{10}$/gi,""),this._inputElement&&(this._inputElement.value=this.value)}_isMobileNumber(e){return/^([+]\d{2})?\d{10}$/.test(e)}_isNumber(e){return/\d/.test(e)}_isValid(e){let t=this._inputElement;return!!(e==="Backspace"||/\d/.test(e)||t.selectionStart===0&&t.selectionEnd===0&&e==="+")}static get styles(){return[super.styles,s`
                .field {
                    flex: 1 1 auto;

                    border: none;
                    background: none;
                    box-shadow: none;
                    outline: 0;
                    padding: 0;
                    margin: 0;

                    text-align: var(--omni-mobile-field-text-align, left);

                    color: var(--omni-mobile-field-font-color, var(--omni-font-color));
                    font-family: var(--omni-mobile-field-font-family, var(--omni-font-family));
                    font-size: var(--omni-mobile-field-font-size, var(--omni-font-size));
                    font-weight: var(--omni-mobile-field-font-weight, var(--omni-font-weight));
                    padding: var(--omni-mobile-field-padding, 10px);

                    height: var(--omni-mobile-field-height, 100%);
                    width: var(--omni-mobile-field-width, 100%);
                }

                .field.disabled {
                    color: var(--omni-mobile-field-disabled-font-color, #7C7C7C);
                }

                .field.error {
                    color: var(--omni-mobile-field-error-font-color, var(--omni-font-color));
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
            `]}renderContent(){let e={field:!0,disabled:this.disabled,error:this.error};return d`
      <input
        class=${p(e)}
        id="inputField"
        data-omni-keyboard-mode="tel"
        type="tel"
        inputmode="${f(this.noNativeKeyboard?"none":void 0)}"
        .value=${c(this.value)}
        ?readOnly=${this.disabled}
        tabindex="${this.disabled?-1:0}" />
    `}};n([m("#inputField")],i.prototype,"_inputElement",2),n([o({type:Boolean,reflect:!0,attribute:"country-code"})],i.prototype,"countryCode",2),n([o({type:Boolean,reflect:!0,attribute:"no-native-keyboard"})],i.prototype,"noNativeKeyboard",2),i=n([u("omni-mobile-field")],i);export{i as a};
//# sourceMappingURL=chunk.KZ76DPPP.js.map
