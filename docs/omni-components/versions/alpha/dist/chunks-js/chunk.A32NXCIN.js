import{a as y}from"./chunk.SR577AVI.js";import{a as E}from"./chunk.2HYOR3YM.js";import{a as _,b as l,d as b}from"./chunk.S2K25ADN.js";import{a as g,b as p}from"./chunk.F6MIXR4E.js";import{j as a,m as d,p as v}from"./chunk.BF43NN75.js";d();v();var o=class extends y{constructor(){super(...arguments);this.currencySymbol="$";this.thousandsSeparator="";this.fractionalSeparator=".";this.fractionalPrecision=2;this.formatter="\\B(?=(\\d{3})+(?!\\d))"}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._onClickInput.bind(this),{capture:!0}),this.addEventListener("focus",this._onFocusInput.bind(this),{capture:!0}),this.addEventListener("blur",this._onBlur.bind(this),{capture:!0}),this.addEventListener("beforeinput",this._beforeInput.bind(this),{capture:!0}),this.addEventListener("paste",this._onPaste.bind(this),{capture:!0})}async firstUpdated(){this.value!==null&&this.value!==void 0&&await this._formatToCurrency(this.value.toString()).then(t=>{this._inputElement.value=t})}focus(t){this._inputElement?this._inputElement.focus(t):super.focus(t)}async attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i),t==="value"?typeof i=="string"&&this._inputElement?await this._formatToCurrency(i).then(r=>{this._inputElement.value=r}):typeof i=="number"&&this._inputElement&&await this._formatToCurrency(i).then(r=>{this._inputElement.value=r}):(t==="thousands-separator"||t==="fractional-separator")&&this._inputElement&&this.value&&await this._formatToCurrency(this.value.toString()).then(r=>{this._inputElement.value=r})}_dispatchCustomEvent(t){this.dispatchEvent(new CustomEvent("change",{detail:{value:t}}))}_isNumber(t){return/\d/.test(t)}_isAllZeros(t){return/^0*$/.test(t)}_convertToCents(t){return t.replace(this.fractionalSeparator,"")}_formatToCurrencyValue(t){t+=".";for(let e=0;e<this.fractionalPrecision;e++)t+="0";return t}_parseAmount(t){let e="";for(let i=0;i<t.length;i++){let r=t.charAt(i);/\d/.test(r)&&(e+=r)}return e?parseInt(e):null}_parseFraction(t){let e="";for(let i=0;i<t.length;i++){let r=t.charAt(i);/\d/.test(r)&&(e+=r)}return e}async _formatToCurrency(t){if(t===0)return t.toString();if(!t)return"";let e=t.toString().replace(new RegExp(this.formatter,"g"),this.thousandsSeparator||"");if(await this.updateComplete,e.includes(this.fractionalSeparator)){let i=e.substring(0,e.indexOf(this.fractionalSeparator)),r=this._parseFraction(e.substring(e.indexOf(this.fractionalSeparator)+1));if(r.length>=this.fractionalPrecision)r=r.substring(0,this.fractionalPrecision);else if(r.length<this.fractionalPrecision){let n=this.fractionalPrecision-r.length;for(let s=0;s<n;s++)r+="0"}return i+this.fractionalSeparator+r}else if(e.includes(".")){let i=e.substring(0,e.indexOf(".")),r=this._parseFraction(e.substring(e.indexOf(".")+1));return r.length>=this.fractionalPrecision&&(r=r.substring(0,this.fractionalPrecision)),i+this.fractionalSeparator+r}return this._formatToCurrencyValue(e)}_formatToFloat(t){if(t.length>0){let e="";return t.includes(this.fractionalSeparator)&&this.fractionalPrecision>0?(e=t.replace(new RegExp(this.thousandsSeparator,"g"),"").replace(this.fractionalSeparator,"."),Number(parseFloat(e).toFixed(this.fractionalPrecision)).toFixed(this.fractionalPrecision)):(e=t.replace(new RegExp(this.thousandsSeparator,"g"),""),Number(parseFloat(e).toFixed(0)))}else return""}_onFocusInput(){let t=this._inputElement;this.value||(this.value=this._formatToCurrencyValue("0")),t&&setTimeout(function(){t.selectionStart=t.selectionEnd=1e4},0)}_onClickInput(){let t=this._inputElement;t&&t.selectionStart===t.selectionEnd&&setTimeout(function(){t.selectionStart=t.selectionEnd=1e4},0)}async _onBlur(){if(console.log("blur hit and value is",this.value),this._inputElement){let t=this._convertToCents(this._inputElement.value);this._isAllZeros(t)&&(this._inputElement.value="",this.value=void 0)}}_onPaste(t){let e=this._inputElement,i=t.clipboardData,r=i==null?void 0:i.getData("Text"),n="",s=this._parseAmount(r);if(e&&s){if(t.preventDefault(),e.value.length===e.selectionEnd&&e.selectionStart!==e.selectionEnd){let h="0";if(s.toString().length<this.fractionalPrecision+1){let S=this.fractionalPrecision+1-s.toString().length;for(let m=0;m<S;m++)h+="0";n=this._convertToCents(h+s.toString())}else n=this._convertToCents(s.toString())}else e.selectionStart===e.value.length?n=this._convertToCents(e.value+s):n=this._convertToCents(e.value.slice(0,e.selectionStart)+s+e.value.slice(e.selectionEnd));let u=n.substring(0,n.length-this.fractionalPrecision),c=n.slice(-this.fractionalPrecision),f=this._parseAmount(u);this._inputElement.value=f+this.fractionalSeparator+c;let T=this._formatToFloat(this._inputElement.value);this.value=T,this._dispatchCustomEvent(this.value);return}else{t.preventDefault(),setTimeout(function(){e.selectionStart=e.selectionEnd=1e4},0);return}}_beforeInput(t){var r;let e=this._inputElement,i=this._convertToCents((r=this._inputElement)==null?void 0:r.value);if(console.log("InputType",t.inputType),i&&this._inputElement){if(this._isAllZeros(i)&&t.data==="0"){t.preventDefault();return}else if(this._isNumber(t.data)){t.preventDefault(),i=i+=t.data;let n=i.substring(0,i.length-this.fractionalPrecision),s=i.slice(-this.fractionalPrecision);this._isAllZeros(n)&&(n="0"),this._inputElement.value=n+this.fractionalSeparator+s;let u=this._formatToFloat(this._inputElement.value);this.value=u,this._dispatchCustomEvent(this.value);return}if(t.inputType&&!this._isAllZeros(i)){t.preventDefault();let n=this;if(t.inputType==="deleteContentBackward"){i=i==null?void 0:i.substring(0,i.length-1),setTimeout(function(){if(n._isAllZeros(i)){n._inputElement.value=n._formatToCurrencyValue("0");let s=n._formatToFloat(n._inputElement.value);n.value=s,n._dispatchCustomEvent(n.value)}else{let s=i==null?void 0:i.substring(0,i.length-n.fractionalPrecision),u=i==null?void 0:i.slice(-n.fractionalPrecision),c=s?n._parseAmount(s):"0";n._inputElement.value=c+n.fractionalSeparator+u;let f=n._formatToFloat(n._inputElement.value);n.value=f,n._dispatchCustomEvent(n.value)}n._inputElement.selectionStart=n._inputElement.selectionEnd=1e4},0);return}else setTimeout(function(){n._inputElement.selectionStart=n._inputElement.selectionEnd=1e4},0)}else{t.preventDefault(),console.log("Else for input is hit InputType is",t.inputType);let n=this;setTimeout(function(){n._inputElement.value=n._formatToCurrencyValue("0");let s=n._formatToFloat(n._inputElement.value);n.value=s,n._inputElement.selectionStart=n._inputElement.selectionEnd=1e4},0);return}}}static get styles(){return[super.styles,g`
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
                class=${E(t)}
                id="inputField"
                type="text"
                maxlength="21"
                inputmode="${this.noNativeKeyboard?"none":"decimal"}"
                data-omni-keyboard-mode="decimal"
                ?readOnly=${this.disabled}
                tabindex="${this.disabled?-1:0}" />
        `}};a([b("#inputField")],o.prototype,"_inputElement",2),a([l({type:String,reflect:!0,attribute:"currency-symbol"})],o.prototype,"currencySymbol",2),a([l({type:String,reflect:!0,attribute:"thousands-separator"})],o.prototype,"thousandsSeparator",2),a([l({type:String,reflect:!0,attribute:"fractional-separator"})],o.prototype,"fractionalSeparator",2),a([l({type:Number,reflect:!0,attribute:"fractional-precision"})],o.prototype,"fractionalPrecision",2),a([l({type:Boolean,reflect:!0,attribute:"no-native-keyboard"})],o.prototype,"noNativeKeyboard",2),a([l({type:String,reflect:!0})],o.prototype,"formatter",2),o=a([_("omni-currency-field")],o);export{o as a};
//# sourceMappingURL=chunk.A32NXCIN.js.map
