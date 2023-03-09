import{a as f}from"./chunk.K2UMXYHA.js";import{a as m}from"./chunk.SR577AVI.js";import{a as s}from"./chunk.2HYOR3YM.js";import{a,d}from"./chunk.S2K25ADN.js";import{a as r,b as l}from"./chunk.F6MIXR4E.js";import{j as i,m as n,p as o}from"./chunk.BF43NN75.js";n();o();var t=class extends m{connectedCallback(){super.connectedCallback(),this.addEventListener("input",this._keyInput.bind(this),{capture:!0})}focus(e){this._inputElement?this._inputElement.focus(e):super.focus(e)}_keyInput(){let e=this._inputElement;this.value=e==null?void 0:e.value}static get styles(){return[super.styles,r`
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
            color: var(--omni-text-field-error-font-color);
        }
      `]}renderContent(){let e={field:!0,disabled:this.disabled,error:this.error};return l`
      <input
        class=${s(e)}
        id="inputField"
        type="text"
        .value=${f(this.value)}
        ?readOnly=${this.disabled}
        tabindex="${this.disabled?-1:0}" />
    `}};i([d("#inputField")],t.prototype,"_inputElement",2),t=i([a("omni-text-field")],t);export{t as a};
//# sourceMappingURL=chunk.XNZXB37F.js.map
