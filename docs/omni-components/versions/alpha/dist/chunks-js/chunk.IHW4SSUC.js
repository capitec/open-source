import{a as v}from"./chunk.CHB6HBKV.js";import{a as h}from"./chunk.B6J23Y56.js";import{a as c}from"./chunk.3F3IIFA7.js";import{a as m}from"./chunk.263MQTZQ.js";import{a as u,b as l,d as f}from"./chunk.4PFNWG2J.js";import{a as s,d}from"./chunk.63YMDT6M.js";import{j as r,m as o,p as a}from"./chunk.BF43NN75.js";o();a();var n=class extends h{constructor(){super(...arguments);this.formatter="^+27[0-9]{9}$"}connectedCallback(){super.connectedCallback(),this.addEventListener("input",this._keyInput.bind(this),{capture:!0}),this.addEventListener("keydown",this._keyDown.bind(this),{capture:!0})}async firstUpdated(){this.value!==null&&this.value!==void 0&&await this._sanitiseMobileValue(this.value.toString()).then(e=>{this._inputElement.value=e})}focus(e){this._inputElement?this._inputElement.focus(e):super.focus(e)}async attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e==="value"&&await this._sanitiseMobileValue(i).then(b=>{this._inputElement.value=b})}_keyDown(e){let t=this._inputElement;if(e.key>="a"&&e.key<="z"){e.preventDefault();return}if(t&&e.key&&!this._isValid(e.key)){e.preventDefault();return}}_keyInput(){let e=this._inputElement;((e==null?void 0:e.value)&&(e==null?void 0:e.value.includes("+"))&&(e==null?void 0:e.value.replace(/\D/g,"").length)>11||(e==null?void 0:e.value)&&(e==null?void 0:e.value.replace(/\D/g,"").length)>10&&!(e!=null&&e.value.includes("+")))&&(e.value=String(e==null?void 0:e.value).slice(0,(e==null?void 0:e.value.length)-1)),this.value=e==null?void 0:e.value,this._sanitiseMobileValue(e==null?void 0:e.value)}async _sanitiseMobileValue(e){let t=e.toString().replace(/\D/g,""),i=t.length;return e.toString().includes("+")?i>7?"+"+t.slice(0,2)+" "+t.slice(2,4)+" "+t.slice(4,7)+" "+t.slice(7,12):i>4?"+"+t.slice(0,2)+" "+t.slice(2,4)+" "+t.slice(4,10):i>2?"+"+t.slice(0,2)+" "+t.slice(2,10):e.toString():i>6?t.slice(0,3)+" "+t.slice(3,6)+" "+t.slice(6,10):i>3?t.slice(0,3)+" "+t.slice(3,10):t}_isValid(e){let t=this._inputElement;return e==="Backspace"||/\d/.test(e)||t.selectionStart===0&&t.selectionEnd===0&&e==="+"?!0:(t.value.toString().replace(/\D/g,"").length>=10,!1)}static get styles(){return[super.styles,s`
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
        class=${m(e)}
        id="inputField"
        data-omni-keyboard-mode="tel"
        type="tel"
        inputmode="${c(this.noNativeKeyboard?"none":void 0)}"
        .value=${v(this.value)}
        ?readOnly=${this.disabled}
        tabindex="${this.disabled?-1:0}" />
    `}};r([f("#inputField")],n.prototype,"_inputElement",2),r([l({type:Boolean,reflect:!0,attribute:"country-code"})],n.prototype,"countryCode",2),r([l({type:String,reflect:!0})],n.prototype,"formatter",2),r([l({type:Boolean,reflect:!0,attribute:"no-native-keyboard"})],n.prototype,"noNativeKeyboard",2),n=r([u("omni-mobile-field")],n);export{n as a};
//# sourceMappingURL=chunk.IHW4SSUC.js.map
