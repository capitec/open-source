import{a as f}from"./chunk.ZTJGZLZP.js";import{b as m}from"./chunk.G4OP6JHJ.js";import{a as s}from"./chunk.F27L6OQP.js";import{a as d,d as c}from"./chunk.CHYIO324.js";import{a,b as i}from"./chunk.CIM3NS6G.js";import{j as t,l as n,o as l}from"./chunk.2ZZQBHAA.js";n();l();var o=class extends m{connectedCallback(){super.connectedCallback(),this.addEventListener("input",this._keyInput.bind(this),{capture:!0})}_keyInput(){let e=this._inputElement;this.value=e==null?void 0:e.value}static get styles(){return[super.styles,a`
        .field {
          display: flex;
          justify-content: center;
          align-items: center;

          flex: 1 1 auto;

          border: none;
          background: none;
          box-shadow: none;
          outline: 0;
          padding: 0;
          margin: 0;

          text-align: var(--omni-color-field-text-align, left);

          color: var(--omni-color-field-font-color, var(--omni-font-color));
          font-family: var(--omni-color-field-font-family, var(--omni-font-family));
          font-size: var(--omni-color-field-font-size, var(--omni-font-size));
          font-weight: var(--omni-color-field-font-weight, var(--omni-font-weight));
          height: var(--omni-color-field-height, 100%);
          min-height: var(--omni-color-field-min-height, 20px);
          min-width: var(--omni-color-field-min-width, 100px);
          padding: var(--omni-color-field-padding, 10px);

          -webkit-touch-callout: var(--omni-color-field-text-select, text);
          -webkit-user-select: var(--omni-color-field-text-select, text);
          -khtml-user-select: var(--omni-color-field-text-select, text);
          -moz-user-select: var(--omni-color-field-text-select, text);
          -ms-user-select: var(--omni-color-field-text-select, text);
          user-select: var(--omni-color-field-text-select, text);
        }

        .input {
          flex: 1 1 auto;

          border: none;
          background: none;
          box-shadow: none;
          outline: 0;
          padding: 0;
          margin: 0;

          text-align: var(--omni-color-field-text-align, left);

          color: var(--omni-color-field-font-color, var(--omni-font-color));
          font-family: var(--omni-color-field-font-family, var(--omni-font-family));
          font-size: var(--omni-color-field-font-size, var(--omni-font-size));
          font-weight: var(--omni-color-field-font-weight, var(--omni-font-weight));
          height: var(--omni-color-field-picker-height, 50px);
          width: var(--omni-color-field-picker-width, 50px);
          padding: var(--omni-color-field-padding, 10px);
        }

        .input.disabled {
            color: var(--omni-color-field-disabled-font-color, #7C7C7C);
        }

        .input.error {
            color: var(--omni-color-field-error-font-color);
        }

        :host(:not([value])) input[type='color']::-webkit-color-swatch,
        :host([value='']) input[type='color']::-webkit-color-swatch {
          background-color: transparent !important;
        }
      `]}renderContent(){var e,r;return i` <label for="inputField" class="field"> ${(r=(e=this.value)==null?void 0:e.toString())==null?void 0:r.toUpperCase()} </label> `}renderControl(){let e={input:!0,disabled:this.disabled,error:this.error};return i`
      <input
        class=${s(e)}
        id="inputField"
        type="color"
        .value=${f(this.value)}
        ?disabled=${this.disabled}
        ?readOnly=${this.disabled}
        tabindex="${this.disabled?-1:0}" />
    `}};t([c("#inputField")],o.prototype,"_inputElement",2),o=t([d("omni-color-field")],o);export{o as a};
//# sourceMappingURL=chunk.ON55PFTL.js.map
