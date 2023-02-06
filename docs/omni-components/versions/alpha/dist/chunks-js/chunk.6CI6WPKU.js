import{b as _}from"./chunk.7QECXFLM.js";import{a as v,b as c,d as b}from"./chunk.CHYIO324.js";import{a as g,b as p}from"./chunk.3GEUDTAZ.js";import{j as l,l as m,o as d}from"./chunk.2ZZQBHAA.js";m();d();var n=class extends _{constructor(){super(...arguments);this.currencySymbol="$";this.thousandsSeparator="";this.fractionalSeparator=".";this.fractionalPrecision=2;this.formatter="\\B(?=(\\d{3})+(?!\\d))"}connectedCallback(){super.connectedCallback(),this.addEventListener("input",this._keyInput.bind(this),{capture:!0}),this.addEventListener("blur",this._blur.bind(this),{capture:!0}),this.addEventListener("keydown",this._keyDown.bind(this),{capture:!0})}async firstUpdated(){this.value&&await this._formatToCurrency(this.value.toString()).then(i=>{this._inputElement.value=i})}_isIOS(){return console.log("navigator platform",navigator.platform),["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")}_parseAmount(i){let t="";for(let e=0;e<i.length;e++){let a=i.charAt(e);/\d/.test(a)&&(t+=a)}return t?parseInt(t):null}_parseFraction(i){let t="";for(let e=0;e<i.length;e++){let a=i.charAt(e);/\d/.test(a)&&(t+=a)}return t}async _formatToCurrency(i){if(i===0)return i.toString();if(!i)return"";let t=i.toString().replace(new RegExp(this.formatter,"g"),this.thousandsSeparator||"");if(await this.updateComplete,t.includes(this.fractionalSeparator)){let e=t.substring(0,t.indexOf(this.fractionalSeparator)),a=this._parseFraction(t.substring(t.indexOf(this.fractionalSeparator)+1));return a.length>=this.fractionalPrecision&&(a=a.substring(0,this.fractionalPrecision)),e+this.fractionalSeparator+a}else if(t.includes(".")){let e=t.substring(0,t.indexOf(".")),a=this._parseFraction(t.substring(t.indexOf(".")+1));return a.length>=this.fractionalPrecision&&(a=a.substring(0,this.fractionalPrecision)),e+this.fractionalSeparator+a}return t}_formatToFloat(i){if(i.length>0){let t="";return i.includes(this.fractionalSeparator)&&this.fractionalPrecision>0?(t=i.replace(new RegExp(this.thousandsSeparator,"g"),"").replace(this.fractionalSeparator,"."),Number(parseFloat(t).toFixed(this.fractionalPrecision))):(t=i.replace(new RegExp(this.thousandsSeparator,"g"),""),Number(parseFloat(t).toFixed(0)))}else return""}async _blur(){let i=this._inputElement.value;if(i.includes(this.fractionalSeparator)){let t=this._parseAmount(i.substring(0,i.indexOf(this.fractionalSeparator))),e=this._parseFraction(i.substring(i.indexOf(this.fractionalSeparator)+1)),a=this.fractionalPrecision-e.length;if(a>0)for(let r=0;r<a;r++)e+="0";await this._formatToCurrency(t).then(r=>{this._inputElement.value=r+(this.fractionalPrecision>0?this.fractionalSeparator+e:"")})}else await this._formatToCurrency(this._parseAmount(i)).then(t=>{this._inputElement.value=t});this.value=this._formatToFloat(this._inputElement.value)}async _keyDown(i){let t=this._inputElement,e=t.selectionStart,a=this._inputElement.selectionEnd-this._inputElement.selectionStart,r=0;if(this._isIOS()&&i.keyCode===188&&t.value.length===t.selectionEnd&&(t.value=t.value+this.fractionalSeparator),t.value.charAt(e-1)===this.thousandsSeparator&&(i.key.toLowerCase()==="backspace"||i.keyCode===229)){if(r=t.value.match(new RegExp(this.thousandsSeparator,"g")).length,t.value.includes(this.fractionalSeparator)){let s=this._parseFraction(t.value.substring(t.value.indexOf(this.fractionalSeparator)+1));a?await this._formatToCurrency(this._parseAmount(t.value.substring(0,e-1)+t.value.substring(e+a,t.value.indexOf(this.fractionalSeparator)))).then(f=>{t.value=f+this.fractionalSeparator+s}):await this._formatToCurrency(this._parseAmount(t.value.substring(0,e-2)+t.value.substring(e+a,t.value.indexOf(this.fractionalSeparator)))).then(f=>{t.value=f+this.fractionalSeparator+s})}else a?t.value.length===t.selectionEnd?await this._formatToCurrency(this._parseAmount(t.value.substring(0,e-1))).then(s=>{this._inputElement.value=s}):(console.log(t.value.substring(0,e-1)),console.log(t.value.substring(e+a,t.value.length+1)),await this._formatToCurrency(this._parseAmount(t.value.substring(0,e-1)+t.value.substring(t.selectionEnd,t.value.length+1))).then(s=>{this._inputElement.value=s}),console.log("Selection made in position that is not at the end")):await this._formatToCurrency(this._parseAmount(t.value.substring(0,e-2)+t.value.substring(e+a,t.value.length+1))).then(s=>{this._inputElement.value=s});i.preventDefault();let o=this._formatToFloat(t.value);this.value=o,await this.updateComplete;let u=t.value.match(new RegExp(this.thousandsSeparator,"g")).length,h=r-u;a?this._inputElement.setSelectionRange(e-1,e-1):this._inputElement.setSelectionRange(e-1-h,e-1-h)}if(t.value.charAt(e)===this.thousandsSeparator&&this.thousandsSeparator!==""&&i.key.toLowerCase()==="delete"){let o=t.selectionEnd-t.selectionStart>0?t.selectionEnd-t.selectionStart:2;if(t.value.includes(this.fractionalSeparator)){let u=this._parseFraction(t.value.substring(t.value.indexOf(this.fractionalSeparator)+1));await this._formatToCurrency(this._parseAmount(t.value.substring(0,e)+t.value.substring(e+o,t.value.indexOf(this.fractionalSeparator)))).then(h=>{t.value=h+this.fractionalSeparator+u})}else await this._formatToCurrency(t.value.substring(0,e)+t.value.substring(e+o,t.value.length+1)).then(u=>{t.value=u});i.preventDefault(),this.value=this._formatToFloat(t.value),await this.updateComplete,this._inputElement.setSelectionRange(e,e)}if(t.value.charAt(e)===this.fractionalSeparator&&i.key.toLowerCase()==="delete"){t.value=t.value.substring(0,t.value.indexOf(this.fractionalSeparator)),this.value=this._formatToFloat(t.value);return}if(i.ctrlKey&&i.key.toLowerCase()==="c"){navigator.clipboard.writeText(t.value);return}if(i.key>="a"&&i.key<="z"){i.preventDefault();return}}async _keyInput(){let i=this._inputElement.value.length,t=this._inputElement.selectionStart,e=this._inputElement.value;if(e.includes(this.fractionalSeparator)){let r=this._parseAmount(e.substring(0,e.indexOf(this.fractionalSeparator))),o=this._parseFraction(e.substring(e.indexOf(this.fractionalSeparator)+1));o.length>=this.fractionalPrecision&&(o=o.substring(0,this.fractionalPrecision)),await this._formatToCurrency(r).then(u=>{this._inputElement.value=u+this.fractionalSeparator+o})}else await this._formatToCurrency(this._parseAmount(e)).then(r=>{this._inputElement.value=r});this.value=this._formatToFloat(e),await this.updateComplete;let a=this._inputElement.value.length;a>i?this._inputElement.setSelectionRange(t+1,t+1):i>a?this._inputElement.setSelectionRange(t-1,t-1):this._inputElement.setSelectionRange(t,t)}static get styles(){return[super.styles,g`
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

                .label {
                    margin-left: var(--omni-currency-field-label-left-margin, 25px);
                }

                .currency-symbol {
                    font-size: var(--omni-currency-field-symbol-font-size, 16px);
                    color: var(--omni-currency-field-symbol-color, var(--omni-font-color));
                    padding-left: var(--omni-currency-field-symbol-left-padding, 10px);
                    user-select: var(--omni-currency-field-symbol-select, text);
                }
            `]}renderPrefix(){return p`<omni-label class="currency-symbol" label="${this.currencySymbol}"></omni-label>`}renderContent(){return p`
            <input
                class="field"
                id="inputField"
                type="text"
                maxlength="21"
                inputmode="decimal"
                ?readOnly=${this.disabled}
                tabindex="${this.disabled?-1:0}" />
        `}};l([b("#inputField")],n.prototype,"_inputElement",2),l([c({type:String,reflect:!0,attribute:"currency-symbol"})],n.prototype,"currencySymbol",2),l([c({type:String,reflect:!0,attribute:"thousands-separator"})],n.prototype,"thousandsSeparator",2),l([c({type:String,reflect:!0,attribute:"fractional-separator"})],n.prototype,"fractionalSeparator",2),l([c({type:Number,reflect:!0,attribute:"fractional-precision"})],n.prototype,"fractionalPrecision",2),l([c({type:String,reflect:!0})],n.prototype,"formatter",2),n=l([v("omni-currency-field")],n);export{n as a};
//# sourceMappingURL=chunk.6CI6WPKU.js.map
