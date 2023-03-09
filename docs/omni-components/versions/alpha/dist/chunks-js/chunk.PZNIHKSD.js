import{a as m}from"./chunk.K2UMXYHA.js";import{a as f}from"./chunk.SR577AVI.js";import{a as s}from"./chunk.2HYOR3YM.js";import{a,d}from"./chunk.S2K25ADN.js";import{a as o,b as l}from"./chunk.F6MIXR4E.js";import{j as t,m as n,p as r}from"./chunk.BF43NN75.js";n();r();var i=class extends f{connectedCallback(){super.connectedCallback(),this.addEventListener("input",this._keyInput.bind(this),{capture:!0}),this.addEventListener("keyup",this._blurOnEnter.bind(this),{capture:!0})}focus(e){this._inputElement?this._inputElement.focus(e):super.focus(e)}_blurOnEnter(e){(e.code==="Enter"||e.keyCode===13)&&e.currentTarget.blur()}_keyInput(){let e=this._inputElement;this.value=e.value}static get styles(){return[super.styles,o`
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
            color: var(--omni-email-field-error-font-color);
        }   
      `]}renderContent(){let e={field:!0,disabled:this.disabled,error:this.error};return l`
      <input
        class=${s(e)}
        id="inputField"
        inputmode="email"
        type="email"
        .value=${m(this.value)}
        ?readOnly=${this.disabled}
        tabindex="${this.disabled?-1:0}" />
    `}};t([d("#inputField")],i.prototype,"_inputElement",2),i=t([a("omni-email-field")],i);export{i as a};
//# sourceMappingURL=chunk.PZNIHKSD.js.map
