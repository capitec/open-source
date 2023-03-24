import{a as _}from"./chunk.SR577AVI.js";import{a as g}from"./chunk.2HYOR3YM.js";import{a as v,b as l,d as b}from"./chunk.S2K25ADN.js";import{a as m,b as p}from"./chunk.F6MIXR4E.js";import{j as s,m as h,p as d}from"./chunk.BF43NN75.js";h();d();var r=class extends _{constructor(){super(...arguments);this.currencySymbol="$";this.thousandsSeparator="";this.fractionalSeparator=".";this.fractionalPrecision=2;this.formatter="\\B(?=(\\d{3})+(?!\\d))"}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._clickInput.bind(this),{capture:!0}),this.addEventListener("focus",this._focusInput.bind(this),{capture:!0}),this.addEventListener("blur",this._blur.bind(this),{capture:!0}),this.addEventListener("beforeinput",this._beforeInput.bind(this),{capture:!0}),this.addEventListener("paste",this._onPaste.bind(this),{capture:!0})}async firstUpdated(){this.value!==null&&this.value!==void 0&&await this._formatToCurrency(this.value.toString()).then(t=>{this._inputElement.value=t})}focus(t){this._inputElement?this._inputElement.focus(t):super.focus(t)}async attributeChangedCallback(t,e,n){super.attributeChangedCallback(t,e,n),t==="value"?typeof n=="string"&&this._inputElement?await this._formatToCurrency(n).then(i=>{this._inputElement.value=i}):typeof n=="number"&&this._inputElement&&await this._formatToCurrency(n).then(i=>{this._inputElement.value=i}):(t==="thousands-separator"||t==="fractional-separator")&&this._inputElement&&this.value&&await this._formatToCurrency(this.value.toString()).then(i=>{this._inputElement.value=i})}_isNumber(t){return/\d/.test(t)}_isAllZeros(t){return/^0*$/.test(t)}_parseAmount(t){let e="";for(let n=0;n<t.length;n++){let i=t.charAt(n);/\d/.test(i)&&(e+=i)}return e?parseInt(e):null}_parseFraction(t){let e="";for(let n=0;n<t.length;n++){let i=t.charAt(n);/\d/.test(i)&&(e+=i)}return e}async _formatToCurrency(t){if(t===0)return t.toString();if(!t)return"";let e=t.toString().replace(new RegExp(this.formatter,"g"),this.thousandsSeparator||"");if(await this.updateComplete,e.includes(this.fractionalSeparator)){let n=e.substring(0,e.indexOf(this.fractionalSeparator)),i=this._parseFraction(e.substring(e.indexOf(this.fractionalSeparator)+1));return i.length>=this.fractionalPrecision&&(i=i.substring(0,this.fractionalPrecision)),n+this.fractionalSeparator+i}else if(e.includes(".")){let n=e.substring(0,e.indexOf(".")),i=this._parseFraction(e.substring(e.indexOf(".")+1));return i.length>=this.fractionalPrecision&&(i=i.substring(0,this.fractionalPrecision)),n+this.fractionalSeparator+i}return e}_formatToFloat(t){if(t.length>0){let e="";return t.includes(this.fractionalSeparator)&&this.fractionalPrecision>0?(e=t.replace(new RegExp(this.thousandsSeparator,"g"),"").replace(this.fractionalSeparator,"."),Number(parseFloat(e).toFixed(this.fractionalPrecision))):(e=t.replace(new RegExp(this.thousandsSeparator,"g"),""),Number(parseFloat(e).toFixed(0)))}else return""}_focusInput(){let t=this._inputElement;if(!this.value){let e="0.";for(let n=0;n<this.fractionalPrecision;n++)e+="0";this.value=e}t&&setTimeout(function(){t.selectionStart=t.selectionEnd=1e4},0)}_clickInput(){let t=this._inputElement;t&&t.selectionStart===t.selectionEnd&&setTimeout(function(){t.selectionStart=t.selectionEnd=1e4},0)}async _blur(){this._inputElement&&this._inputElement.value==="0.00"&&(this._inputElement.value="",this.value=void 0)}_onPaste(t){let e=t.clipboardData,n=e==null?void 0:e.getData("Text"),i=this._parseAmount(n);if(this._inputElement&&i){if(t.preventDefault(),this._inputElement.value.length===this._inputElement.selectionEnd||this._inputElement.selectionStart===this._inputElement.value.length){let a=(this._inputElement.value+i).replace(this.fractionalSeparator,""),o=a.substring(0,a.length-this.fractionalPrecision),c=a.slice(-this.fractionalPrecision),f=this._parseAmount(o);this._inputElement.value=f+this.fractionalSeparator+c}else{let o=(this._inputElement.value.slice(0,this._inputElement.selectionStart)+i+this._inputElement.value.slice(this._inputElement.selectionEnd)).replace(this.fractionalSeparator,""),c=o.substring(0,o.length-this.fractionalPrecision),f=o.slice(-this.fractionalPrecision),y=this._parseAmount(c);this._inputElement.value=y+this.fractionalSeparator+f}let u=this._formatToFloat(this._inputElement.value);this.value=u;return}else{t.preventDefault();return}}_beforeInput(t){var n;let e=(n=this._inputElement)==null?void 0:n.value.replace(this.fractionalSeparator,"");if(e){if(this._isAllZeros(e)&&t.data==="0"){t.preventDefault();return}else if(this._isNumber(t.data)){t.preventDefault(),e=e+=t.data;let i=e.substring(0,e.length-this.fractionalPrecision),u=e.slice(-this.fractionalPrecision);if(this._isAllZeros(i)){i="0",this._inputElement.value=i+this.fractionalSeparator+u;let a=this._formatToFloat(this._inputElement.value);this.value=a}else{this._inputElement.value=i+this.fractionalSeparator+u;let a=this._formatToFloat(this._inputElement.value);this.value=a}return}switch(t.inputType){case"deleteContentBackward":break;case"deleteContentForward":break;case"deleteContent":break;default:break}if(t.inputType==="deleteContentBackward"&&!this._isAllZeros(e)){if(t.preventDefault(),e=e==null?void 0:e.substring(0,e.length-1),this._isAllZeros(e))this._inputElement.value="0.00";else{let i=e==null?void 0:e.substring(0,e.length-this.fractionalPrecision),u=e==null?void 0:e.slice(-this.fractionalPrecision),a=i?this._parseAmount(i):"0";this._inputElement.value=a+this.fractionalSeparator+u;let o=this._formatToFloat(this._inputElement.value);this.value=o}return}else{t.preventDefault();return}}}static get styles(){return[super.styles,m`
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
            `]}renderPrefix(){return p`<omni-label class="currency-symbol" label="${this.currencySymbol}"></omni-label>`}renderContent(){let t={field:!0,disabled:this.disabled,error:this.error};return p`
            <input
                class=${g(t)}
                id="inputField"
                type="text"
                maxlength="21"
                inputmode="${this.noNativeKeyboard?"none":"decimal"}"
                data-omni-keyboard-mode="decimal"
                ?readOnly=${this.disabled}
                tabindex="${this.disabled?-1:0}" />
        `}};s([b("#inputField")],r.prototype,"_inputElement",2),s([l({type:String,reflect:!0,attribute:"currency-symbol"})],r.prototype,"currencySymbol",2),s([l({type:String,reflect:!0,attribute:"thousands-separator"})],r.prototype,"thousandsSeparator",2),s([l({type:String,reflect:!0,attribute:"fractional-separator"})],r.prototype,"fractionalSeparator",2),s([l({type:Number,reflect:!0,attribute:"fractional-precision"})],r.prototype,"fractionalPrecision",2),s([l({type:Boolean,reflect:!0,attribute:"no-native-keyboard"})],r.prototype,"noNativeKeyboard",2),s([l({type:String,reflect:!0})],r.prototype,"formatter",2),r=s([v("omni-currency-field")],r);export{r as a};
//# sourceMappingURL=chunk.W4KG2RQX.js.map
