import{a as _}from"./chunk.SR577AVI.js";import{a as b}from"./chunk.2HYOR3YM.js";import{a as g,b as l,d as v}from"./chunk.S2K25ADN.js";import{a as d,b as h}from"./chunk.F6MIXR4E.js";import{j as s,m as p,p as m}from"./chunk.BF43NN75.js";p();m();var r=class extends _{constructor(){super(...arguments);this.currencySymbol="$";this.thousandsSeparator="";this.fractionalSeparator=".";this.fractionalPrecision=2;this.formatter="\\B(?=(\\d{3})+(?!\\d))"}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._clickInput.bind(this),{capture:!0}),this.addEventListener("focus",this._focusInput.bind(this),{capture:!0}),this.addEventListener("blur",this._blur.bind(this),{capture:!0}),this.addEventListener("beforeinput",this._beforeInput.bind(this),{capture:!0}),this.addEventListener("paste",this._onPaste.bind(this),{capture:!0})}async firstUpdated(){this.value!==null&&this.value!==void 0&&await this._formatToCurrency(this.value.toString()).then(e=>{this._inputElement.value=e})}focus(e){this._inputElement?this._inputElement.focus(e):super.focus(e)}async attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),e==="value"?typeof n=="string"&&this._inputElement?await this._formatToCurrency(n).then(i=>{this._inputElement.value=i}):typeof n=="number"&&this._inputElement&&await this._formatToCurrency(n).then(i=>{this._inputElement.value=i}):(e==="thousands-separator"||e==="fractional-separator")&&this._inputElement&&this.value&&await this._formatToCurrency(this.value.toString()).then(i=>{this._inputElement.value=i})}_isNumber(e){return/\d/.test(e)}_isAllZeros(e){return/^0*$/.test(e)}_parseAmount(e){let t="";for(let n=0;n<e.length;n++){let i=e.charAt(n);/\d/.test(i)&&(t+=i)}return t?parseInt(t):null}_parseFraction(e){let t="";for(let n=0;n<e.length;n++){let i=e.charAt(n);/\d/.test(i)&&(t+=i)}return t}async _formatToCurrency(e){if(e===0)return e.toString();if(!e)return"";let t=e.toString().replace(new RegExp(this.formatter,"g"),this.thousandsSeparator||"");if(await this.updateComplete,t.includes(this.fractionalSeparator)){let n=t.substring(0,t.indexOf(this.fractionalSeparator)),i=this._parseFraction(t.substring(t.indexOf(this.fractionalSeparator)+1));return i.length>=this.fractionalPrecision&&(i=i.substring(0,this.fractionalPrecision)),n+this.fractionalSeparator+i}else if(t.includes(".")){let n=t.substring(0,t.indexOf(".")),i=this._parseFraction(t.substring(t.indexOf(".")+1));return i.length>=this.fractionalPrecision&&(i=i.substring(0,this.fractionalPrecision)),n+this.fractionalSeparator+i}return t}_formatToFloat(e){if(e.length>0){let t="";return e.includes(this.fractionalSeparator)&&this.fractionalPrecision>0?(t=e.replace(new RegExp(this.thousandsSeparator,"g"),"").replace(this.fractionalSeparator,"."),console.log("Formatted float",Number(parseFloat(t).toFixed(this.fractionalPrecision)).toFixed(this.fractionalPrecision)),Number(parseFloat(t).toFixed(this.fractionalPrecision)).toFixed(this.fractionalPrecision)):(t=e.replace(new RegExp(this.thousandsSeparator,"g"),""),Number(parseFloat(t).toFixed(0)))}else return""}_focusInput(){let e=this._inputElement;if(!this.value){let t="0.";for(let n=0;n<this.fractionalPrecision;n++)t+="0";this.value=t}e&&setTimeout(function(){e.selectionStart=e.selectionEnd=1e4},0)}_clickInput(){let e=this._inputElement;e&&e.selectionStart===e.selectionEnd&&setTimeout(function(){e.selectionStart=e.selectionEnd=1e4},0)}async _blur(){this._inputElement&&this._inputElement.value==="0.00"&&(this._inputElement.value="",this.value=void 0)}_onPaste(e){let t=e.clipboardData,n=t==null?void 0:t.getData("Text"),i=this._parseAmount(n);if(this._inputElement&&i){if(e.preventDefault(),this._inputElement.value.length===this._inputElement.selectionEnd||this._inputElement.selectionStart===this._inputElement.value.length){let a=(this._inputElement.value+i).replace(this.fractionalSeparator,""),o=a.substring(0,a.length-this.fractionalPrecision),c=a.slice(-this.fractionalPrecision),f=this._parseAmount(o);this._inputElement.value=f+this.fractionalSeparator+c}else{let o=(this._inputElement.value.slice(0,this._inputElement.selectionStart)+i+this._inputElement.value.slice(this._inputElement.selectionEnd)).replace(this.fractionalSeparator,""),c=o.substring(0,o.length-this.fractionalPrecision),f=o.slice(-this.fractionalPrecision),E=this._parseAmount(c);this._inputElement.value=E+this.fractionalSeparator+f}let u=this._formatToFloat(this._inputElement.value);this.value=u;return}else{e.preventDefault();return}}_beforeInput(e){var n;let t=(n=this._inputElement)==null?void 0:n.value.replace(this.fractionalSeparator,"");if(t){if(this._isAllZeros(t)&&e.data==="0"){e.preventDefault();return}else if(this._isNumber(e.data)){e.preventDefault(),t=t+=e.data;let i=t.substring(0,t.length-this.fractionalPrecision),u=t.slice(-this.fractionalPrecision);if(this._isAllZeros(i)){i="0",this._inputElement.value=i+this.fractionalSeparator+u;let a=this._formatToFloat(this._inputElement.value);this.value=a}else{this._inputElement.value=i+this.fractionalSeparator+u;let a=this._formatToFloat(this._inputElement.value);this.value=a}return}if(e.inputType==="deleteContentBackward"&&!this._isAllZeros(t)){if(e.preventDefault(),t=t==null?void 0:t.substring(0,t.length-1),this._isAllZeros(t))this._inputElement.value="0.00";else{let i=t==null?void 0:t.substring(0,t.length-this.fractionalPrecision),u=t==null?void 0:t.slice(-this.fractionalPrecision),a=i?this._parseAmount(i):"0";this._inputElement.value=a+this.fractionalSeparator+u;let o=this._formatToFloat(this._inputElement.value);this.value=o}return}else{e.preventDefault();return}}}static get styles(){return[super.styles,d`
                .field {
                    flex: 1 1 auto;

                    border: none;
                    background: none;
                    box-shadow: none;
                    outline: 0;
                    margin: 0;

                    text-align: var(--omni-currency-field-text-align, left);

                    color: var(--omni-currency-field-font-color, var(--omni-font-color));
                    font-family: var(--omni-currency-field-font-family, var(--omni-font-family));
                    font-size: var(--omni-currency-field-font-size, var(--omni-font-size));
                    font-weight: var(--omni-currency-field-font-weight, var(--omni-font-weight));
                    padding: var(--omni-currency-field-padding, 10px);
                    height: var(--omni-currency-field-height, 100%);
                    width: var(--omni-currency-field-width, 100%);
                }

                .field.disabled {
                    color: var(--omni-currency-field-disabled-font-color, #7C7C7C);
                }

                .field.error {
                    color: var(--omni-currency-field-error-font-color);
                }

                .label {
                    margin-left: var(--omni-currency-field-label-left-margin, 25px);
                }

                .currency-symbol {
                    font-size: var(--omni-currency-field-symbol-font-size, 16px);
                    color: var(--omni-currency-field-symbol-color, var(--omni-font-color));
                    padding-left: var(--omni-currency-field-symbol-left-padding, 10px);
                    user-select: var(--omni-currency-field-symbol-select, text);
                }
            `]}renderPrefix(){return h`<omni-label class="currency-symbol" label="${this.currencySymbol}"></omni-label>`}renderContent(){let e={field:!0,disabled:this.disabled,error:this.error};return h`
            <input
                class=${b(e)}
                id="inputField"
                type="text"
                maxlength="21"
                inputmode="${this.noNativeKeyboard?"none":"decimal"}"
                data-omni-keyboard-mode="decimal"
                ?readOnly=${this.disabled}
                tabindex="${this.disabled?-1:0}" />
        `}};s([v("#inputField")],r.prototype,"_inputElement",2),s([l({type:String,reflect:!0,attribute:"currency-symbol"})],r.prototype,"currencySymbol",2),s([l({type:String,reflect:!0,attribute:"thousands-separator"})],r.prototype,"thousandsSeparator",2),s([l({type:String,reflect:!0,attribute:"fractional-separator"})],r.prototype,"fractionalSeparator",2),s([l({type:Number,reflect:!0,attribute:"fractional-precision"})],r.prototype,"fractionalPrecision",2),s([l({type:Boolean,reflect:!0,attribute:"no-native-keyboard"})],r.prototype,"noNativeKeyboard",2),s([l({type:String,reflect:!0})],r.prototype,"formatter",2),r=s([g("omni-currency-field")],r);export{r as a};
//# sourceMappingURL=chunk.LOFOKPFE.js.map
