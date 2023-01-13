import{a as m}from"./chunk.MCIDFWAY.js";import{b as d}from"./chunk.TDEC2NDF.js";import{a,d as l}from"./chunk.CHYIO324.js";import{a as o,b as r}from"./chunk.3GEUDTAZ.js";import{j as n,l as t,o as i}from"./chunk.2ZZQBHAA.js";t();i();var e=class extends d{connectedCallback(){super.connectedCallback(),this.addEventListener("input",this._keyInput.bind(this),{capture:!0})}_keyInput(){let s=this._inputElement;this.value=s.value}static get styles(){return[super.styles,o`
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
          height: var(--omni-number-field-height, 100%);
          padding: var(--omni-number-field-padding, 10px);
          width: var(--omni-number-field-width);
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
      `]}renderContent(){return r`
      <input
        class="field"
        id="inputField"
        type="number"
        .value=${m(this.value)}
        ?readOnly=${this.disabled}
        tabindex="${this.disabled?-1:0}" />
    `}};n([l("#inputField")],e.prototype,"_inputElement",2),e=n([a("omni-number-field")],e);export{e as a};
//# sourceMappingURL=chunk.COGFDRAA.js.map
