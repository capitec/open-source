import{a as m}from"./chunk.QZMZ3CLH.js";import{b as s}from"./chunk.ZP7U5EIB.js";import{a,d as l}from"./chunk.CHYIO324.js";import{b as o,c as r}from"./chunk.CDDA2I3H.js";import{j as n,l as t,o as i}from"./chunk.2ZZQBHAA.js";t();i();var e=class extends s{connectedCallback(){super.connectedCallback(),this.addEventListener("input",this._keyInput.bind(this))}_keyInput(){let d=this._inputElement;this.value=d.value}static get styles(){return[super.styles,o`
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
//# sourceMappingURL=chunk.L6TGDOE6.js.map
