import{a as b}from"./chunk.SR577AVI.js";import{a as g}from"./chunk.2HYOR3YM.js";import{a as v,b as u,d as _}from"./chunk.S2K25ADN.js";import{a as d,b as p}from"./chunk.F6MIXR4E.js";import{j as o,m as h,p as m}from"./chunk.BF43NN75.js";h();m();var s=class extends b{constructor(){super(...arguments);this.currencySymbol="$";this.thousandsSeparator="";this.fractionalSeparator=".";this.fractionalPrecision=2;this.formatter="\\B(?=(\\d{3})+(?!\\d))"}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._clickInput.bind(this),{capture:!0}),this.addEventListener("focus",this._focusInput.bind(this),{capture:!0}),this.addEventListener("blur",this._blur.bind(this),{capture:!0}),this.addEventListener("beforeinput",this._beforeInput.bind(this),{capture:!0}),this.addEventListener("paste",this._onPaste.bind(this),{capture:!0})}async firstUpdated(){this.value!==null&&this.value!==void 0&&await this._formatToCurrency(this.value.toString()).then(t=>{this._inputElement.value=t})}focus(t){this._inputElement?this._inputElement.focus(t):super.focus(t)}async attributeChangedCallback(t,i,n){super.attributeChangedCallback(t,i,n),t==="value"?typeof n=="string"&&this._inputElement?await this._formatToCurrency(n).then(e=>{this._inputElement.value=e}):typeof n=="number"&&this._inputElement&&await this._formatToCurrency(n).then(e=>{this._inputElement.value=e}):(t==="thousands-separator"||t==="fractional-separator")&&this._inputElement&&this.value&&await this._formatToCurrency(this.value.toString()).then(e=>{this._inputElement.value=e})}_dispatchCustomEvent(t){this.dispatchEvent(new CustomEvent("change",{detail:{value:t}}))}_isNumber(t){return/\d/.test(t)}_isAllZeros(t){return/^0*$/.test(t)}_setDefaultValue(t){t+=".";for(let i=0;i<this.fractionalPrecision;i++)t+="0";return t}_parseAmount(t){let i="";for(let n=0;n<t.length;n++){let e=t.charAt(n);/\d/.test(e)&&(i+=e)}return i?parseInt(i):null}_parseFraction(t){let i="";for(let n=0;n<t.length;n++){let e=t.charAt(n);/\d/.test(e)&&(i+=e)}return i}async _formatToCurrency(t){if(t===0)return t.toString();if(!t)return"";let i=t.toString().replace(new RegExp(this.formatter,"g"),this.thousandsSeparator||"");if(await this.updateComplete,i.includes(this.fractionalSeparator)){let n=i.substring(0,i.indexOf(this.fractionalSeparator)),e=this._parseFraction(i.substring(i.indexOf(this.fractionalSeparator)+1));if(e.length>=this.fractionalPrecision)e=e.substring(0,this.fractionalPrecision);else if(e.length<this.fractionalPrecision){let r=this.fractionalPrecision-e.length;for(let a=0;a<r;a++)e+="0"}return n+this.fractionalSeparator+e}else if(i.includes(".")){let n=i.substring(0,i.indexOf(".")),e=this._parseFraction(i.substring(i.indexOf(".")+1));return e.length>=this.fractionalPrecision&&(e=e.substring(0,this.fractionalPrecision)),n+this.fractionalSeparator+e}return this._setDefaultValue(i)}_formatToFloat(t){if(t.length>0){let i="";return t.includes(this.fractionalSeparator)&&this.fractionalPrecision>0?(i=t.replace(new RegExp(this.thousandsSeparator,"g"),"").replace(this.fractionalSeparator,"."),Number(parseFloat(i).toFixed(this.fractionalPrecision)).toFixed(this.fractionalPrecision)):(i=t.replace(new RegExp(this.thousandsSeparator,"g"),""),Number(parseFloat(i).toFixed(0)))}else return""}_focusInput(){let t=this._inputElement;this.value||(this.value=this._setDefaultValue("0")),t&&setTimeout(function(){t.selectionStart=t.selectionEnd=1e4},0)}_clickInput(){let t=this._inputElement;t&&t.selectionStart===t.selectionEnd&&setTimeout(function(){t.selectionStart=t.selectionEnd=1e4},0)}async _blur(){this._inputElement&&this._inputElement.value==="0.00"&&(this._inputElement.value="",this.value=void 0)}_onPaste(t){let i=t.clipboardData,n=i==null?void 0:i.getData("Text"),e=this._parseAmount(n);if(this._inputElement&&e){if(t.preventDefault(),this._inputElement.value.length===this._inputElement.selectionEnd||this._inputElement.selectionStart===this._inputElement.value.length){let a=(this._inputElement.value+e).replace(this.fractionalSeparator,""),l=a.substring(0,a.length-this.fractionalPrecision),c=a.slice(-this.fractionalPrecision),f=this._parseAmount(l);this._inputElement.value=f+this.fractionalSeparator+c}else{let l=(this._inputElement.value.slice(0,this._inputElement.selectionStart)+e+this._inputElement.value.slice(this._inputElement.selectionEnd)).replace(this.fractionalSeparator,""),c=l.substring(0,l.length-this.fractionalPrecision),f=l.slice(-this.fractionalPrecision),E=this._parseAmount(c);this._inputElement.value=E+this.fractionalSeparator+f}let r=this._formatToFloat(this._inputElement.value);this.value=r,this._dispatchCustomEvent(this.value);return}else{t.preventDefault();return}}_beforeInput(t){var n;let i=(n=this._inputElement)==null?void 0:n.value.replace(this.fractionalSeparator,"");if(i){if(this._isAllZeros(i)&&t.data==="0"){t.preventDefault();return}else if(this._isNumber(t.data)){t.preventDefault(),i=i+=t.data;let e=i.substring(0,i.length-this.fractionalPrecision),r=i.slice(-this.fractionalPrecision);if(this._isAllZeros(e)){e="0",this._inputElement.value=e+this.fractionalSeparator+r;let a=this._formatToFloat(this._inputElement.value);this.value=a}else{this._inputElement.value=e+this.fractionalSeparator+r;let a=this._formatToFloat(this._inputElement.value);this.value=a}this._dispatchCustomEvent(this.value);return}if(t.inputType==="deleteContentBackward"&&!this._isAllZeros(i)){t.preventDefault(),i=i==null?void 0:i.substring(0,i.length-1);let e=this;setTimeout(function(){if(e._isAllZeros(i)){e._inputElement.value="0.00";let r=e._formatToFloat(e._inputElement.value);e.value=r,e._dispatchCustomEvent(e.value)}else{let r=i==null?void 0:i.substring(0,i.length-e.fractionalPrecision),a=i==null?void 0:i.slice(-e.fractionalPrecision),l=r?e._parseAmount(r):"0";e._inputElement.value=l+e.fractionalSeparator+a;let c=e._formatToFloat(e._inputElement.value);e.value=c,e._dispatchCustomEvent(e.value)}e._inputElement.selectionStart=e._inputElement.selectionEnd=1e4},0);return}else{t.preventDefault();let e=this;setTimeout(function(){e._inputElement.value="0.00";let r=e._formatToFloat(e._inputElement.value);e.value=r,e._inputElement.selectionStart=e._inputElement.selectionEnd=1e4},0);return}}}static get styles(){return[super.styles,d`
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
        `}};o([_("#inputField")],s.prototype,"_inputElement",2),o([u({type:String,reflect:!0,attribute:"currency-symbol"})],s.prototype,"currencySymbol",2),o([u({type:String,reflect:!0,attribute:"thousands-separator"})],s.prototype,"thousandsSeparator",2),o([u({type:String,reflect:!0,attribute:"fractional-separator"})],s.prototype,"fractionalSeparator",2),o([u({type:Number,reflect:!0,attribute:"fractional-precision"})],s.prototype,"fractionalPrecision",2),o([u({type:Boolean,reflect:!0,attribute:"no-native-keyboard"})],s.prototype,"noNativeKeyboard",2),o([u({type:String,reflect:!0})],s.prototype,"formatter",2),s=o([v("omni-currency-field")],s);export{s as a};
//# sourceMappingURL=chunk.QSN4HHRH.js.map
