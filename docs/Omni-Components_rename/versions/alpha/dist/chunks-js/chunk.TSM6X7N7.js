import{a as m}from"./chunk.MCIDFWAY.js";import{b as s}from"./chunk.EQAFL2KM.js";import{a as c,d}from"./chunk.CHYIO324.js";import{a,b as i}from"./chunk.3GEUDTAZ.js";import{j as t,l,o as r}from"./chunk.2ZZQBHAA.js";l();r();var e=class extends s{connectedCallback(){super.connectedCallback(),this.addEventListener("input",this._keyInput.bind(this),{capture:!0})}_keyInput(){let o=this._inputElement;this.value=o.value}static get styles(){return[super.styles,a`
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

        .color-input {
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

        :host(:not([value])) input[type='color']::-webkit-color-swatch,
        :host([value='']) input[type='color']::-webkit-color-swatch {
          background-color: transparent !important;
        }
      `]}renderContent(){var o,n;return i` <label for="inputField" class="field"> ${(n=(o=this.value)==null?void 0:o.toString())==null?void 0:n.toUpperCase()} </label> `}renderControl(){return i`
      <input
        class="color-input"
        id="inputField"
        type="color"
        .value=${m(this.value)}
        ?disabled=${this.disabled}
        ?readOnly=${this.disabled}
        tabindex="${this.disabled?-1:0}" />
    `}};t([d("#inputField")],e.prototype,"_inputElement",2),e=t([c("omni-color-field")],e);export{e as a};
//# sourceMappingURL=chunk.TSM6X7N7.js.map
