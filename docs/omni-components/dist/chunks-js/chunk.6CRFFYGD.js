import{a as p}from"./chunk.FOPCJEY3.js";import{a as b}from"./chunk.BMTJOHJJ.js";import{a as m}from"./chunk.DUTPH62F.js";import{a as f}from"./chunk.R7EUQMUJ.js";import{a as s,b as d,d as u}from"./chunk.Y6UVSDXK.js";import{a,d as l}from"./chunk.UDCULUBW.js";import{j as t,m as r,p as o}from"./chunk.BF43NN75.js";r();o();var n=class extends b{connectedCallback(){super.connectedCallback(),this.addEventListener("input",this._keyInput.bind(this),{capture:!0}),this.addEventListener("keydown",this._keyDown.bind(this),{capture:!0})}async attributeChangedCallback(e,c,i){super.attributeChangedCallback(e,c,i),e==="value"&&new RegExp("^[0-9]+$").test(i)}focus(e){this._inputElement?this._inputElement.focus(e):super.focus(e)}_keyDown(e){if(e.key>="a"&&e.key<="z"){e.preventDefault();return}}_keyInput(){let e=this._inputElement;this.value=e==null?void 0:e.value}static get styles(){return[super.styles,a`
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
            `]}renderContent(){let e={field:!0,disabled:this.disabled,error:this.error};return l`
      <input
        class=${f(e)}
        id="inputField"
        type="number"
        inputmode="${m(this.noNativeKeyboard?"none":void 0)}"
        .value=${p(this.value)}
        ?readOnly=${this.disabled}
        tabindex="${this.disabled?-1:0}" />
    `}};t([u("#inputField")],n.prototype,"_inputElement",2),t([d({type:Boolean,reflect:!0,attribute:"no-native-keyboard"})],n.prototype,"noNativeKeyboard",2),n=t([s("omni-number-field")],n);export{n as a};
//# sourceMappingURL=chunk.6CRFFYGD.js.map
