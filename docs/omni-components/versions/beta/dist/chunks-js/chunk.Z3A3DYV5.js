import{b as x}from"./chunk.TWX6WA6U.js";import{a as E}from"./chunk.F27L6OQP.js";import{a as _,b as c,d as S}from"./chunk.CHYIO324.js";import{a as y,b as g}from"./chunk.CIM3NS6G.js";import{j as u,l as v,o as b}from"./chunk.2ZZQBHAA.js";v();b();var o=class extends x{constructor(){super(...arguments);this.currencySymbol="$";this.thousandsSeparator="";this.fractionalSeparator=".";this.fractionalPrecision=2;this.formatter="\\B(?=(\\d{3})+(?!\\d))"}connectedCallback(){super.connectedCallback(),this.addEventListener("input",this._keyInput.bind(this),{capture:!0}),this.addEventListener("blur",this._blur.bind(this),{capture:!0}),this.addEventListener("keydown",this._keyDown.bind(this),{capture:!0})}async firstUpdated(){this.value&&await this._formatToCurrency(this.value.toString()).then(e=>{this._inputElement.value=e})}_isIOS(){return console.log("navigator platform",navigator.platform),["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")}_parseAmount(e){let t="";for(let a=0;a<e.length;a++){let i=e.charAt(a);/\d/.test(i)&&(t+=i)}return t?parseInt(t):null}_parseFraction(e){let t="";for(let a=0;a<e.length;a++){let i=e.charAt(a);/\d/.test(i)&&(t+=i)}return t}async _formatToCurrency(e){if(e===0)return e.toString();if(!e)return"";let t=e.toString().replace(new RegExp(this.formatter,"g"),this.thousandsSeparator||"");if(await this.updateComplete,t.includes(this.fractionalSeparator)){let a=t.substring(0,t.indexOf(this.fractionalSeparator)),i=this._parseFraction(t.substring(t.indexOf(this.fractionalSeparator)+1));return i.length>=this.fractionalPrecision&&(i=i.substring(0,this.fractionalPrecision)),a+this.fractionalSeparator+i}else if(t.includes(".")){let a=t.substring(0,t.indexOf(".")),i=this._parseFraction(t.substring(t.indexOf(".")+1));return i.length>=this.fractionalPrecision&&(i=i.substring(0,this.fractionalPrecision)),a+this.fractionalSeparator+i}return t}_formatToFloat(e){if(e.length>0){let t="";return e.includes(this.fractionalSeparator)&&this.fractionalPrecision>0?(t=e.replace(new RegExp(this.thousandsSeparator,"g"),"").replace(this.fractionalSeparator,"."),Number(parseFloat(t).toFixed(this.fractionalPrecision))):(t=e.replace(new RegExp(this.thousandsSeparator,"g"),""),Number(parseFloat(t).toFixed(0)))}else return""}async _blur(){var t,a;let e=(t=this._inputElement)==null?void 0:t.value;if(e!=null&&e.includes(this.fractionalSeparator)){let i=this._parseAmount(e.substring(0,e.indexOf(this.fractionalSeparator))),r=this._parseFraction(e.substring(e.indexOf(this.fractionalSeparator)+1)),n=this.fractionalPrecision-r.length;if(n>0)for(let s=0;s<n;s++)r+="0";await this._formatToCurrency(i).then(s=>{this._inputElement.value=s+(this.fractionalPrecision>0?this.fractionalSeparator+r:"")})}else await this._formatToCurrency(this._parseAmount(e)).then(i=>{this._inputElement.value=i});this.value=this._formatToFloat((a=this._inputElement)==null?void 0:a.value)}async _keyDown(e){var f;let t=this._inputElement,a=this._inputElement.selectionEnd,i=this._inputElement.selectionStart,r=t.selectionStart,n=a-i,s=0;if(this._isIOS()&&e.keyCode===188&&t.value.length===t.selectionEnd&&(t.value=t.value+this.fractionalSeparator),t.value.charAt(r-1)===this.thousandsSeparator&&(e.key.toLowerCase()==="backspace"||e.keyCode===229)){if(s=t.value.match(new RegExp(this.thousandsSeparator,"g")).length,t.value.includes(this.fractionalSeparator)){let l=this._parseFraction(t.value.substring(t.value.indexOf(this.fractionalSeparator)+1));n?await this._formatToCurrency(this._parseAmount(t.value.substring(0,r-1)+t.value.substring(r+n,t.value.indexOf(this.fractionalSeparator)))).then(d=>{t.value=d+this.fractionalSeparator+l}):await this._formatToCurrency(this._parseAmount(t.value.substring(0,r-2)+t.value.substring(r+n,t.value.indexOf(this.fractionalSeparator)))).then(d=>{t.value=d+this.fractionalSeparator+l})}else n?t.value.length===t.selectionEnd?await this._formatToCurrency(this._parseAmount(t.value.substring(0,r-1))).then(l=>{this._inputElement.value=l}):(console.log(t.value.substring(0,r-1)),console.log(t.value.substring(r+n,t.value.length+1)),await this._formatToCurrency(this._parseAmount(t.value.substring(0,r-1)+t.value.substring(t.selectionEnd,t.value.length+1))).then(l=>{this._inputElement.value=l}),console.log("Selection made in position that is not at the end")):await this._formatToCurrency(this._parseAmount(t.value.substring(0,r-2)+t.value.substring(r+n,t.value.length+1))).then(l=>{this._inputElement.value=l});e.preventDefault();let p=this._formatToFloat(t.value);this.value=p,await this.updateComplete;let h=t.value.match(new RegExp(this.thousandsSeparator,"g")).length,m=s-h;n?this._inputElement.setSelectionRange(r-1,r-1):this._inputElement.setSelectionRange(r-1-m,r-1-m)}if(t.value.charAt(r)===this.thousandsSeparator&&this.thousandsSeparator!==""&&e.key.toLowerCase()==="delete"){let p=a-i>0?a-i:2;if(t.value.includes(this.fractionalSeparator)){let h=this._parseFraction(t.value.substring(t.value.indexOf(this.fractionalSeparator)+1));await this._formatToCurrency(this._parseAmount(t.value.substring(0,r)+t.value.substring(r+p,t.value.indexOf(this.fractionalSeparator)))).then(m=>{t.value=m+this.fractionalSeparator+h})}else await this._formatToCurrency(t.value.substring(0,r)+t.value.substring(r+p,t.value.length+1)).then(h=>{t.value=h});e.preventDefault(),this.value=this._formatToFloat(t.value),await this.updateComplete,(f=this._inputElement)==null||f.setSelectionRange(r,r)}if(t.value.charAt(r)===this.fractionalSeparator&&e.key.toLowerCase()==="delete"){t.value=t.value.substring(0,t.value.indexOf(this.fractionalSeparator)),this.value=this._formatToFloat(t.value);return}if(e.ctrlKey&&e.key.toLowerCase()==="c"){navigator.clipboard.writeText(t.value);return}if(e.key>="a"&&e.key<="z"){e.preventDefault();return}}async _keyInput(){var r;let e=this._inputElement.value.length,t=this._inputElement.selectionStart,a=this._inputElement.value;if(a.includes(this.fractionalSeparator)){let n=this._parseAmount(a.substring(0,a.indexOf(this.fractionalSeparator))),s=this._parseFraction(a.substring(a.indexOf(this.fractionalSeparator)+1));s.length>=this.fractionalPrecision&&(s=s.substring(0,this.fractionalPrecision)),await this._formatToCurrency(n).then(f=>{this._inputElement.value=f+this.fractionalSeparator+s})}else await this._formatToCurrency(this._parseAmount(a)).then(n=>{this._inputElement.value=n});this.value=this._formatToFloat(a),await this.updateComplete;let i=(r=this._inputElement)==null?void 0:r.value.length;i>e?this._inputElement.setSelectionRange(t+1,t+1):e>i?this._inputElement.setSelectionRange(t-1,t-1):this._inputElement.setSelectionRange(t,t)}static get styles(){return[super.styles,y`
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
            `]}renderPrefix(){return g`<omni-label class="currency-symbol" label="${this.currencySymbol}"></omni-label>`}renderContent(){let e={field:!0,disabled:this.disabled,error:this.error};return g`
            <input
                class=${E(e)}
                id="inputField"
                type="text"
                maxlength="21"
                inputmode="decimal"
                ?readOnly=${this.disabled}
                tabindex="${this.disabled?-1:0}" />
        `}};u([S("#inputField")],o.prototype,"_inputElement",2),u([c({type:String,reflect:!0,attribute:"currency-symbol"})],o.prototype,"currencySymbol",2),u([c({type:String,reflect:!0,attribute:"thousands-separator"})],o.prototype,"thousandsSeparator",2),u([c({type:String,reflect:!0,attribute:"fractional-separator"})],o.prototype,"fractionalSeparator",2),u([c({type:Number,reflect:!0,attribute:"fractional-precision"})],o.prototype,"fractionalPrecision",2),u([c({type:String,reflect:!0})],o.prototype,"formatter",2),o=u([_("omni-currency-field")],o);export{o as a};
//# sourceMappingURL=chunk.Z3A3DYV5.js.map
