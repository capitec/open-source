import{a as p}from"./chunk.APNKRDWQ.js";import{a as b}from"./chunk.QQ4KC6E2.js";import{a as f}from"./chunk.3F3IIFA7.js";import{a as m}from"./chunk.YTU7KEBB.js";import{a as s,b as d,d as u}from"./chunk.4PFNWG2J.js";import{a,d as l}from"./chunk.63YMDT6M.js";import{j as n,m as r,p as o}from"./chunk.BF43NN75.js";r();o();var t=class extends b{connectedCallback(){super.connectedCallback(),this.addEventListener("input",this._keyInput.bind(this),{capture:!0}),this.addEventListener("keydown",this._keyDown.bind(this),{capture:!0})}async attributeChangedCallback(e,c,i){super.attributeChangedCallback(e,c,i),e==="value"&&new RegExp("^[0-9]+$").test(i)}focus(e){this._inputElement?this._inputElement.focus(e):super.focus(e)}_keyDown(e){if(e.key>="a"&&e.key<="z"){e.preventDefault();return}}_keyInput(){let e=this._inputElement;this.value=e==null?void 0:e.value}static get styles(){return[super.styles,a`
                .field {
                    flex: 1 1 auto;

                    border: none;
                    background: none;
                    box-shadow: none;
                    outline: 0;
                    padding: 0;
                    margin: 0;

                    text-align: var(--omni-number-field-text-align, left);

                    color: var(--omni-number-field-font-color, var(--omni-font-color));
                    font-family: var(--omni-number-field-font-family, var(--omni-font-family));
                    font-size: var(--omni-number-field-font-size, var(--omni-font-size));
                    font-weight: var(--omni-number-field-font-weight, var(--omni-font-weight));
                    padding: var(--omni-number-field-padding, 10px);

                    height: var(--omni-number-field-height, 100%);
                    width: var(--omni-number-field-width, 100%);
                }

                .field.disabled {
                    color: var(--omni-number-field-disabled-font-color, #7C7C7C);
                }

                .field.error {
                    color: var(--omni-number-field-error-font-color, var(--omni-font-color));
                }

                /* Used to not display default stepper */
                input::-webkit-outer-spin-button,
                input::-webkit-inner-spin-button {
                /* display: none; <- Crashes Chrome on hover */
                -webkit-appearance: none;
                margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
                }

                input[type='number'] {
                -moz-appearance: textfield; /* Firefox */
                }

                /* Grant the ability to set the hover color when cursor hovers over auto selectable options */
                input:-webkit-autofill,
                input:-webkit-autofill:focus {
                    transition: var(--omni-number-field-autofill-hover-transition) !important;
                }
            `]}renderContent(){let e={field:!0,disabled:this.disabled,error:this.error};return l`
      <input
        class=${m(e)}
        id="inputField"
        type="number"
        inputmode="${f(this.noNativeKeyboard?"none":void 0)}"
        .value=${p(this.value)}
        ?readOnly=${this.disabled}
        tabindex="${this.disabled?-1:0}" />
    `}};n([u("#inputField")],t.prototype,"_inputElement",2),n([d({type:Boolean,reflect:!0,attribute:"no-native-keyboard"})],t.prototype,"noNativeKeyboard",2),t=n([s("omni-number-field")],t);export{t as a};
//# sourceMappingURL=chunk.CVNUOZHU.js.map
