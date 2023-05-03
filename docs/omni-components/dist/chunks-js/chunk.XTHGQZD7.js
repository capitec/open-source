import{a as f}from"./chunk.K2UMXYHA.js";import{a as m}from"./chunk.P5BVWJU5.js";import{a as c}from"./chunk.2HYOR3YM.js";import{a as s,d}from"./chunk.S2K25ADN.js";import{a,b as i}from"./chunk.F6MIXR4E.js";import{j as t,m as r,p as l}from"./chunk.BF43NN75.js";r();l();var o=class extends m{connectedCallback(){super.connectedCallback(),this.addEventListener("input",this._keyInput.bind(this),{capture:!0})}_keyInput(){let e=this._inputElement;this.value=e==null?void 0:e.value}static get styles(){return[super.styles,a`
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
      `]}focus(e){this._inputElement?this._inputElement.focus(e):super.focus(e)}renderContent(){var e,n;return i` <label for="inputField" class="field"> ${(n=(e=this.value)==null?void 0:e.toString())==null?void 0:n.toUpperCase()} </label> `}renderControl(){let e={input:!0,disabled:this.disabled,error:this.error};return i`
      <input
        class=${c(e)}
        id="inputField"
        type="color"
        .value=${f(this.value)}
        ?disabled=${this.disabled}
        ?readOnly=${this.disabled}
        tabindex="${this.disabled?-1:0}" />
    `}};t([d("#inputField")],o.prototype,"_inputElement",2),o=t([s("omni-color-field")],o);export{o as a};
//# sourceMappingURL=chunk.XTHGQZD7.js.map
