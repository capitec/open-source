import{a as u}from"./chunk.FOPCJEY3.js";import{a as p}from"./chunk.BMTJOHJJ.js";import{a as m}from"./chunk.DUTPH62F.js";import{a as f}from"./chunk.R7EUQMUJ.js";import{a as l,b as d,d as s}from"./chunk.Y6UVSDXK.js";import{a as r,d as a}from"./chunk.UDCULUBW.js";import{j as i,m as n,p as o}from"./chunk.BF43NN75.js";n();o();var t=class extends p{connectedCallback(){super.connectedCallback(),this.addEventListener("input",this._keyInput.bind(this),{capture:!0}),this.addEventListener("keyup",this._blurOnEnter.bind(this),{capture:!0})}focus(e){this._inputElement?this._inputElement.focus(e):super.focus(e)}_blurOnEnter(e){(e.code==="Enter"||e.keyCode===13)&&e.currentTarget.blur()}_keyInput(){let e=this._inputElement;this.value=e==null?void 0:e.value,this.requestUpdate()}static get styles(){return[super.styles,r`
                .field {
                    flex: 1 1 auto;

                    border: none;
                    background: none;
                    box-shadow: none;
                    outline: 0;
                    padding: 0;
                    margin: 0;

                    text-align: var(--omni-text-field-text-align, left);

                    color: var(--omni-text-field-font-color, var(--omni-font-color));
                    font-family: var(--omni-text-field-font-family, var(--omni-font-family));
                    font-size: var(--omni-text-field-font-size, var(--omni-font-size));
                    font-weight: var(--omni-text-field-font-weight, var(--omni-font-weight));
                    padding: var(--omni-text-field-padding, 10px);
                    height: var(--omni-text-field-height, 100%);
                    width: var(--omni-text-field-width, 100%);
                }

                .field.disabled {
                    color: var(--omni-text-field-disabled-font-color, #7C7C7C);
                }

                .field.error {
                    color: var(--omni-text-field-error-font-color, var(--omni-font-color));
                }
            `]}renderContent(){let e={field:!0,disabled:this.disabled,error:this.error};return a`
      <input
        class=${f(e)}
        id="inputField"
        type="text"
        inputmode="${m(this.noNativeKeyboard?"none":void 0)}"
        .value=${u(this.value)}
        ?readOnly=${this.disabled}
        tabindex="${this.disabled?-1:0}" />
    `}};i([s("#inputField")],t.prototype,"_inputElement",2),i([d({type:Boolean,reflect:!0,attribute:"no-native-keyboard"})],t.prototype,"noNativeKeyboard",2),t=i([l("omni-text-field")],t);export{t as a};
//# sourceMappingURL=chunk.CLV5KZPK.js.map
