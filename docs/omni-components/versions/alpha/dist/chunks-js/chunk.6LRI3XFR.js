import{a as f}from"./chunk.KGCS7GKM.js";import{a as u}from"./chunk.5OQBY5R4.js";import{a as m}from"./chunk.ZJGON3BB.js";import{a as l,b as d,d as s}from"./chunk.Y6UVSDXK.js";import{a as r,d as a}from"./chunk.UDCULUBW.js";import{j as t,m as n,p as o}from"./chunk.BF43NN75.js";n();o();var i=class extends u{connectedCallback(){super.connectedCallback(),this.addEventListener("input",this._keyInput.bind(this),{capture:!0}),this.addEventListener("keyup",this._blurOnEnter.bind(this),{capture:!0})}focus(e){this._inputElement?this._inputElement.focus(e):super.focus(e)}_blurOnEnter(e){(e.code==="Enter"||e.keyCode===13)&&e.currentTarget.blur()}_keyInput(){let e=this._inputElement;this.value=e.value}static get styles(){return[super.styles,r`
                .field {
                flex: 1 1 auto;

                border: none;
                background: none;
                box-shadow: none;
                outline: 0;
                padding: 0;
                margin: 0;

                text-align: var(--omni-email-field-text-align, left);

                color: var(--omni-email-field-font-color, var(--omni-font-color));
                font-family: var(--omni-email-field-font-family, var(--omni-font-family));
                font-size: var(--omni-email-field-font-size, var(--omni-font-size));
                font-weight: var(--omni-email-field-font-weight, var(--omni-font-weight));
                padding: var(--omni-email-field-padding, 10px);

                height: var(--omni-email-field-height, 100%);
                width: var(--omni-email-field-width, 100%);
                }
                
                .field.disabled {
                    color: var(--omni-email-field-disabled-font-color, #7C7C7C);
                }

                .field.error {
                    color: var(--omni-email-field-error-font-color, var(--omni-font-color));
                }   
            `]}renderContent(){let e={field:!0,disabled:this.disabled,error:this.error};return a`
      <input
        class=${m(e)}
        id="inputField"
        inputmode="${this.noNativeKeyboard?"none":"email"}"
        data-omni-keyboard-mode="email"
        type="email"
        .value=${f(this.value)}
        ?readOnly=${this.disabled}
        tabindex="${this.disabled?-1:0}" />
    `}};t([s("#inputField")],i.prototype,"_inputElement",2),t([d({type:Boolean,reflect:!0,attribute:"no-native-keyboard"})],i.prototype,"noNativeKeyboard",2),i=t([l("omni-email-field")],i);export{i as a};
//# sourceMappingURL=chunk.6LRI3XFR.js.map
