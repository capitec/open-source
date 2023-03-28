import{a as y}from"./chunk.SR577AVI.js";import{a as E}from"./chunk.2HYOR3YM.js";import{a as _,b as l,d as b}from"./chunk.S2K25ADN.js";import{a as g,b as p}from"./chunk.F6MIXR4E.js";import{j as a,m as d,p as v}from"./chunk.BF43NN75.js";d();v();var o=class extends y{constructor(){super(...arguments);this.currencySymbol="$";this.thousandsSeparator="";this.fractionalSeparator=".";this.fractionalPrecision=2;this.formatter="\\B(?=(\\d{3})+(?!\\d))"}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._onClickInput.bind(this),{capture:!0}),this.addEventListener("focus",this._onFocusInput.bind(this),{capture:!0}),this.addEventListener("blur",this._onBlur.bind(this),{capture:!0}),this.addEventListener("beforeinput",this._beforeInput.bind(this),{capture:!0}),this.addEventListener("paste",this._onPaste.bind(this),{capture:!0}),this.addEventListener("keyup",this._blurOnEnter.bind(this),{capture:!0})}async firstUpdated(){this.value!==null&&this.value!==void 0&&await this._formatToCurrency(this.value.toString()).then(t=>{this._inputElement.value=t})}focus(t){this._inputElement?this._inputElement.focus(t):super.focus(t)}async attributeChangedCallback(t,e,n){super.attributeChangedCallback(t,e,n),t==="value"?typeof n=="string"&&this._inputElement?await this._formatToCurrency(n).then(r=>{this._inputElement.value=r}):typeof n=="number"&&this._inputElement&&await this._formatToCurrency(n).then(r=>{this._inputElement.value=r}):(t==="thousands-separator"||t==="fractional-separator")&&this._inputElement&&this.value&&await this._formatToCurrency(this.value.toString()).then(r=>{this._inputElement.value=r})}_dispatchCustomEvent(t){this.dispatchEvent(new CustomEvent("change",{detail:{value:t}}))}_isNumber(t){return/\d/.test(t)}_isAllZeros(t){return/^0*$/.test(t)}_convertToCents(t){return t.replace(this.fractionalSeparator,"")}_formatToCurrencyValue(t){t+=".";for(let e=0;e<this.fractionalPrecision;e++)t+="0";return t}_parseAmount(t){let e="";for(let n=0;n<t.length;n++){let r=t.charAt(n);/\d/.test(r)&&(e+=r)}return e?parseInt(e):null}_parseFraction(t){let e="";for(let n=0;n<t.length;n++){let r=t.charAt(n);/\d/.test(r)&&(e+=r)}return e}_blurOnEnter(t){(t.code==="Enter"||t.keyCode===13)&&t.currentTarget.blur()}async _formatToCurrency(t){if(t===0)return t.toString();if(!t)return"";let e=t.toString().replace(new RegExp(this.formatter,"g"),this.thousandsSeparator||"");if(await this.updateComplete,e.includes(this.fractionalSeparator)){let n=e.substring(0,e.indexOf(this.fractionalSeparator)),r=this._parseFraction(e.substring(e.indexOf(this.fractionalSeparator)+1));if(r.length>=this.fractionalPrecision)r=r.substring(0,this.fractionalPrecision);else if(r.length<this.fractionalPrecision){let i=this.fractionalPrecision-r.length;for(let s=0;s<i;s++)r+="0"}return n+this.fractionalSeparator+r}else if(e.includes(".")){let n=e.substring(0,e.indexOf(".")),r=this._parseFraction(e.substring(e.indexOf(".")+1));return r.length>=this.fractionalPrecision&&(r=r.substring(0,this.fractionalPrecision)),n+this.fractionalSeparator+r}return this._formatToCurrencyValue(e)}_formatToFloat(t){if(t.length>0){let e="";return t.includes(this.fractionalSeparator)&&this.fractionalPrecision>0?(e=t.replace(new RegExp(this.thousandsSeparator,"g"),"").replace(this.fractionalSeparator,"."),Number(parseFloat(e).toFixed(this.fractionalPrecision)).toFixed(this.fractionalPrecision)):(e=t.replace(new RegExp(this.thousandsSeparator,"g"),""),Number(parseFloat(e).toFixed(0)))}else return""}_onFocusInput(){let t=this._inputElement;this.value||(this.value=this._formatToCurrencyValue("0")),t&&setTimeout(function(){t.selectionStart=t.selectionEnd=1e4},0)}_onClickInput(){let t=this._inputElement;t&&t.selectionStart===t.selectionEnd&&setTimeout(function(){t.selectionStart=t.selectionEnd=1e4},0)}async _onBlur(){if(console.log("blur hit and value is",this.value),this._inputElement){let t=this._convertToCents(this._inputElement.value);this._isAllZeros(t)&&(this._inputElement.value="",this.value=void 0)}}_onPaste(t){let e=this._inputElement,n=t.clipboardData,r=n==null?void 0:n.getData("Text"),i="",s=this._parseAmount(r);if(e&&s){if(t.preventDefault(),e.value.length===e.selectionEnd&&e.selectionStart!==e.selectionEnd){let h="0";if(s.toString().length<this.fractionalPrecision+1){let P=this.fractionalPrecision+1-s.toString().length;for(let m=0;m<P;m++)h+="0";i=this._convertToCents(h+s.toString())}else i=this._convertToCents(s.toString())}else e.selectionStart===e.value.length?i=this._convertToCents(e.value+s):i=this._convertToCents(e.value.slice(0,e.selectionStart)+s+e.value.slice(e.selectionEnd));let u=i.substring(0,i.length-this.fractionalPrecision),c=i.slice(-this.fractionalPrecision),f=this._parseAmount(u);this._inputElement.value=f+this.fractionalSeparator+c;let T=this._formatToFloat(this._inputElement.value);this.value=T,this._dispatchCustomEvent(this.value);return}else{t.preventDefault(),setTimeout(function(){e.selectionStart=e.selectionEnd=1e4},0);return}}_beforeInput(t){var r;let e=this._inputElement,n=this._convertToCents((r=this._inputElement)==null?void 0:r.value);if(console.log("InputType",t.inputType),n&&this._inputElement){if(this._isAllZeros(n)&&t.data==="0"){t.preventDefault();return}else if(this._isNumber(t.data)){t.preventDefault(),n=n+=t.data;let i=n.substring(0,n.length-this.fractionalPrecision),s=n.slice(-this.fractionalPrecision);this._isAllZeros(i)&&(i="0"),this._inputElement.value=i+this.fractionalSeparator+s;let u=this._formatToFloat(this._inputElement.value);this.value=u,this._dispatchCustomEvent(this.value);return}if(t.inputType&&!this._isAllZeros(n)){let i=this;if(t.inputType==="deleteContentBackward"){t.preventDefault(),n=n==null?void 0:n.substring(0,n.length-1),setTimeout(function(){if(i._isAllZeros(n)){i._inputElement.value=i._formatToCurrencyValue("0");let s=i._formatToFloat(i._inputElement.value);i.value=s,i._dispatchCustomEvent(i.value)}else{let s=n==null?void 0:n.substring(0,n.length-i.fractionalPrecision),u=n==null?void 0:n.slice(-i.fractionalPrecision),c=s?i._parseAmount(s):"0";i._inputElement.value=c+i.fractionalSeparator+u;let f=i._formatToFloat(i._inputElement.value);i.value=f,i._dispatchCustomEvent(i.value)}i._inputElement.selectionStart=i._inputElement.selectionEnd=1e4},0);return}}else{t.preventDefault(),console.log("Else for input is hit InputType is",t.inputType);let i=this;setTimeout(function(){i._inputElement.value=i._formatToCurrencyValue("0");let s=i._formatToFloat(i._inputElement.value);i.value=s,i._inputElement.selectionStart=i._inputElement.selectionEnd=1e4},0);return}console.log("Default behavior")}}static get styles(){return[super.styles,g`
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
//# sourceMappingURL=chunk.653UMFWC.js.map
