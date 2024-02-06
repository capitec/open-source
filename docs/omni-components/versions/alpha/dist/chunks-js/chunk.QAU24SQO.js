import{a as p}from"./chunk.KGCS7GKM.js";import{a as h}from"./chunk.5OQBY5R4.js";import{a as m}from"./chunk.DUTPH62F.js";import{a as c}from"./chunk.ZJGON3BB.js";import{a as d,b as o,d as f}from"./chunk.Y6UVSDXK.js";import{a,d as u}from"./chunk.UDCULUBW.js";import{j as r,m as l,p as s}from"./chunk.BF43NN75.js";l();s();var n=class extends h{constructor(){super(...arguments);this.formatter="^+27[0-9]{9}$"}connectedCallback(){super.connectedCallback(),this.addEventListener("input",this._keyInput.bind(this),{capture:!0}),this.addEventListener("keydown",this._keyDown.bind(this),{capture:!0})}async firstUpdated(){this.value!==null&&this.value!==void 0&&await this._sanitiseMobileValue(this.value.toString()).then(e=>{this._inputElement.value=e})}focus(e){this._inputElement?(this._inputElement.focus(e),this._inputElement.value.trim()):super.focus(e)}async attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e==="value"&&await this._sanitiseMobileValue(i).then(b=>{this._inputElement.value=b})}_keyDown(e){let t=this._inputElement;if(e.key>="a"&&e.key<="z"){e.preventDefault();return}if(t&&e.key&&!this._isValid(e.key)){e.preventDefault();return}}_keyInput(){let e=this._inputElement;this.value=e==null?void 0:e.value,this._sanitiseMobileValue(this.value)}async _sanitiseMobileValue(e){let t=e.toString().replace(/\D/g,""),i=t.length;return e.toString().includes("+")?i>7?"+"+t.slice(0,2)+" "+t.slice(2,4)+" "+t.slice(4,7)+" "+t.slice(7,11):i>4?"+"+t.slice(0,2)+" "+t.slice(2,4)+" "+t.slice(4,10):i>2?"+"+t.slice(0,2)+" "+t.slice(2,10):e.toString():i>6?t.slice(0,3)+" "+t.slice(3,6)+" "+t.slice(6,10):i>3?t.slice(0,3)+" "+t.slice(3,10):t}_isValid(e){let t=this._inputElement;return!!(e==="Backspace"||/\d/.test(e)||t.selectionStart===0&&t.selectionEnd===0&&e==="+")}static get styles(){return[super.styles,a`
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
            `]}renderContent(){let e={field:!0,disabled:this.disabled,error:this.error};return u`
      <input
        class=${c(e)}
        id="inputField"
        data-omni-keyboard-mode="tel"
        type="tel"
        inputmode="${m(this.noNativeKeyboard?"none":void 0)}"
        .value=${p(this.value)}
        ?readOnly=${this.disabled}
        tabindex="${this.disabled?-1:0}" />
    `}};r([f("#inputField")],n.prototype,"_inputElement",2),r([o({type:Boolean,reflect:!0,attribute:"country-code"})],n.prototype,"countryCode",2),r([o({type:String,reflect:!0})],n.prototype,"formatter",2),r([o({type:Boolean,reflect:!0,attribute:"no-native-keyboard"})],n.prototype,"noNativeKeyboard",2),n=r([d("omni-mobile-field")],n);export{n as a};
//# sourceMappingURL=chunk.QAU24SQO.js.map
