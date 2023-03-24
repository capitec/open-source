import{a as _}from"./chunk.SR577AVI.js";import{a as b}from"./chunk.2HYOR3YM.js";import{a as v,b as u,d as g}from"./chunk.S2K25ADN.js";import{a as d,b as h}from"./chunk.F6MIXR4E.js";import{j as s,m as p,p as m}from"./chunk.BF43NN75.js";p();m();var a=class extends _{constructor(){super(...arguments);this.currencySymbol="$";this.thousandsSeparator="";this.fractionalSeparator=".";this.fractionalPrecision=2;this.formatter="\\B(?=(\\d{3})+(?!\\d))"}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._clickInput.bind(this),{capture:!0}),this.addEventListener("focus",this._focusInput.bind(this),{capture:!0}),this.addEventListener("blur",this._blur.bind(this),{capture:!0}),this.addEventListener("beforeinput",this._beforeInput.bind(this),{capture:!0}),this.addEventListener("paste",this._onPaste.bind(this),{capture:!0})}async firstUpdated(){this.value!==null&&this.value!==void 0&&await this._formatToCurrency(this.value.toString()).then(t=>{this._inputElement.value=t})}focus(t){this._inputElement?this._inputElement.focus(t):super.focus(t)}async attributeChangedCallback(t,e,n){super.attributeChangedCallback(t,e,n),t==="value"?typeof n=="string"&&this._inputElement?await this._formatToCurrency(n).then(i=>{this._inputElement.value=i}):typeof n=="number"&&this._inputElement&&await this._formatToCurrency(n).then(i=>{this._inputElement.value=i}):(t==="thousands-separator"||t==="fractional-separator")&&this._inputElement&&this.value&&await this._formatToCurrency(this.value.toString()).then(i=>{this._inputElement.value=i})}_dispatchCustomEvent(t){this.dispatchEvent(new CustomEvent("change",{detail:{value:t}}))}_isNumber(t){return/\d/.test(t)}_isAllZeros(t){return/^0*$/.test(t)}_setDefaultValue(t){t+=".";for(let e=0;e<this.fractionalPrecision;e++)t+="0";return t}_parseAmount(t){let e="";for(let n=0;n<t.length;n++){let i=t.charAt(n);/\d/.test(i)&&(e+=i)}return e?parseInt(e):null}_parseFraction(t){let e="";for(let n=0;n<t.length;n++){let i=t.charAt(n);/\d/.test(i)&&(e+=i)}return e}async _formatToCurrency(t){if(t===0)return t.toString();if(!t)return"";let e=t.toString().replace(new RegExp(this.formatter,"g"),this.thousandsSeparator||"");if(await this.updateComplete,e.includes(this.fractionalSeparator)){let n=e.substring(0,e.indexOf(this.fractionalSeparator)),i=this._parseFraction(e.substring(e.indexOf(this.fractionalSeparator)+1));if(i.length>=this.fractionalPrecision)i=i.substring(0,this.fractionalPrecision);else if(i.length<this.fractionalPrecision){let o=this.fractionalPrecision-i.length;for(let r=0;r<o;r++)i+="0"}return n+this.fractionalSeparator+i}else if(e.includes(".")){let n=e.substring(0,e.indexOf(".")),i=this._parseFraction(e.substring(e.indexOf(".")+1));return i.length>=this.fractionalPrecision&&(i=i.substring(0,this.fractionalPrecision)),n+this.fractionalSeparator+i}return this._setDefaultValue(e)}_formatToFloat(t){if(t.length>0){let e="";return t.includes(this.fractionalSeparator)&&this.fractionalPrecision>0?(e=t.replace(new RegExp(this.thousandsSeparator,"g"),"").replace(this.fractionalSeparator,"."),Number(parseFloat(e).toFixed(this.fractionalPrecision)).toFixed(this.fractionalPrecision)):(e=t.replace(new RegExp(this.thousandsSeparator,"g"),""),Number(parseFloat(e).toFixed(0)))}else return""}_focusInput(){let t=this._inputElement;this.value||(this.value=this._setDefaultValue("0")),t&&setTimeout(function(){t.selectionStart=t.selectionEnd=1e4},0)}_clickInput(){let t=this._inputElement;t&&t.selectionStart===t.selectionEnd&&setTimeout(function(){t.selectionStart=t.selectionEnd=1e4},0)}async _blur(){this._inputElement&&this._inputElement.value==="0.00"&&(this._inputElement.value="",this.value=void 0)}_onPaste(t){let e=t.clipboardData,n=e==null?void 0:e.getData("Text"),i=this._parseAmount(n);if(this._inputElement&&i){if(t.preventDefault(),this._inputElement.value.length===this._inputElement.selectionEnd||this._inputElement.selectionStart===this._inputElement.value.length){let r=(this._inputElement.value+i).replace(this.fractionalSeparator,""),l=r.substring(0,r.length-this.fractionalPrecision),c=r.slice(-this.fractionalPrecision),f=this._parseAmount(l);this._inputElement.value=f+this.fractionalSeparator+c}else{let l=(this._inputElement.value.slice(0,this._inputElement.selectionStart)+i+this._inputElement.value.slice(this._inputElement.selectionEnd)).replace(this.fractionalSeparator,""),c=l.substring(0,l.length-this.fractionalPrecision),f=l.slice(-this.fractionalPrecision),E=this._parseAmount(c);this._inputElement.value=E+this.fractionalSeparator+f}let o=this._formatToFloat(this._inputElement.value);this.value=o,this._dispatchCustomEvent(this.value);return}else{t.preventDefault();return}}_beforeInput(t){var n;let e=(n=this._inputElement)==null?void 0:n.value.replace(this.fractionalSeparator,"");if(e){if(this._isAllZeros(e)&&t.data==="0"){t.preventDefault();return}else if(this._isNumber(t.data)){t.preventDefault(),e=e+=t.data;let i=e.substring(0,e.length-this.fractionalPrecision),o=e.slice(-this.fractionalPrecision);if(this._isAllZeros(i)){i="0",this._inputElement.value=i+this.fractionalSeparator+o;let r=this._formatToFloat(this._inputElement.value);this.value=r}else{this._inputElement.value=i+this.fractionalSeparator+o;let r=this._formatToFloat(this._inputElement.value);this.value=r}this._dispatchCustomEvent(this.value);return}if(t.inputType==="deleteContentBackward"&&!this._isAllZeros(e)){if(t.preventDefault(),e=e==null?void 0:e.substring(0,e.length-1),this._isAllZeros(e)){this._inputElement.value="0.00";let i=this._formatToFloat(this._inputElement.value);this.value=i,this._dispatchCustomEvent(this.value)}else{let i=e==null?void 0:e.substring(0,e.length-this.fractionalPrecision),o=e==null?void 0:e.slice(-this.fractionalPrecision),r=i?this._parseAmount(i):"0";this._inputElement.value=r+this.fractionalSeparator+o;let l=this._formatToFloat(this._inputElement.value);this.value=l,this._dispatchCustomEvent(this.value)}return}else{t.preventDefault();return}}}static get styles(){return[super.styles,d`
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
            `]}renderPrefix(){return h`<omni-label class="currency-symbol" label="${this.currencySymbol}"></omni-label>`}renderContent(){let t={field:!0,disabled:this.disabled,error:this.error};return h`
            <input
                class=${b(t)}
                id="inputField"
                type="text"
                maxlength="21"
                inputmode="${this.noNativeKeyboard?"none":"decimal"}"
                data-omni-keyboard-mode="decimal"
                ?readOnly=${this.disabled}
                tabindex="${this.disabled?-1:0}" />
        `}};s([g("#inputField")],a.prototype,"_inputElement",2),s([u({type:String,reflect:!0,attribute:"currency-symbol"})],a.prototype,"currencySymbol",2),s([u({type:String,reflect:!0,attribute:"thousands-separator"})],a.prototype,"thousandsSeparator",2),s([u({type:String,reflect:!0,attribute:"fractional-separator"})],a.prototype,"fractionalSeparator",2),s([u({type:Number,reflect:!0,attribute:"fractional-precision"})],a.prototype,"fractionalPrecision",2),s([u({type:Boolean,reflect:!0,attribute:"no-native-keyboard"})],a.prototype,"noNativeKeyboard",2),s([u({type:String,reflect:!0})],a.prototype,"formatter",2),a=s([v("omni-currency-field")],a);export{a};
//# sourceMappingURL=chunk.DGFKLYA7.js.map
