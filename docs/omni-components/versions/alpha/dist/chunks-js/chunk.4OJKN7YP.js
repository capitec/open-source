import{a as m}from"./chunk.APNKRDWQ.js";import{a as v}from"./chunk.QQ4KC6E2.js";import{a as u}from"./chunk.3F3IIFA7.js";import{a as f}from"./chunk.YTU7KEBB.js";import{a as l,b as n,d}from"./chunk.4PFNWG2J.js";import{a,d as s}from"./chunk.63YMDT6M.js";import{j as i,m as r,p as o}from"./chunk.BF43NN75.js";r();o();var t=class extends v{constructor(){super();this._boundInputEventListener=this._keyInput.bind(this),this._boundKeyUpEventListener=this._blurOnEnter.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("input",this._boundInputEventListener,{capture:!0}),this.addEventListener("keyup",this._boundKeyUpEventListener,{capture:!0})}disconnectedCallback(){this.removeEventListener("input",this._boundInputEventListener,!0),this.removeEventListener("keyup",this._boundKeyUpEventListener,!0),super.disconnectedCallback()}async firstUpdated(){this.value!==null&&this.value!==void 0&&this.maxLength&&(this._inputElement.value=String(this.value).slice(0,this.maxLength))}focus(e){this._inputElement?this._inputElement.focus(e):super.focus(e)}_blurOnEnter(e){(e.code==="Enter"||e.keyCode===13)&&e.currentTarget.blur()}_keyInput(){let e=this._inputElement;(e==null?void 0:e.value)&&this.maxLength&&e.value.length>this.maxLength&&(e.value=e.value.slice(0,this.maxLength)),this.value=e==null?void 0:e.value,this.requestUpdate()}static get styles(){return[super.styles,a`
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

                input:-webkit-autofill,
                input:-webkit-autofill:focus {
                    transition: var(--omni-text-field-autofill-hover-transition) !important;
                }

            `]}renderContent(){let e={field:!0,disabled:this.disabled,error:this.error};return s`
      <input
        class=${f(e)}
        id="inputField"
        type="text"
        inputmode="${u(this.noNativeKeyboard?"none":void 0)}"
        .value=${m(this.value)}
        ?readOnly=${this.disabled}
        tabindex="${this.disabled?-1:0}" />
    `}};i([d("#inputField")],t.prototype,"_inputElement",2),i([n({type:Boolean,reflect:!0,attribute:"no-native-keyboard"})],t.prototype,"noNativeKeyboard",2),i([n({type:Number,reflect:!0,attribute:"max-length"})],t.prototype,"maxLength",2),t=i([l("omni-text-field")],t);export{t as a};
//# sourceMappingURL=chunk.4OJKN7YP.js.map
