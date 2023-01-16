import{a as m}from"./chunk.MCIDFWAY.js";import{b as d}from"./chunk.TDEC2NDF.js";import{a,d as l}from"./chunk.CHYIO324.js";import{a as o,b as r}from"./chunk.3GEUDTAZ.js";import{j as i,l as t,o as n}from"./chunk.2ZZQBHAA.js";t();n();var e=class extends d{connectedCallback(){super.connectedCallback(),this.addEventListener("input",this._keyInput.bind(this),{capture:!0})}_keyInput(){let s=this._inputElement;this.value=s.value}static get styles(){return[super.styles,o`
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
          height: var(--omni-email-field-height, 100%);
          padding: var(--omni-email-field-padding, 10px);
          width: var(--omni-email-field-width);
        }
      `]}renderContent(){return r`
      <input
        class="field"
        id="inputField"
        inputmode="email"
        type="email"
        .value=${m(this.value)}
        ?readOnly=${this.disabled}
        tabindex="${this.disabled?-1:0}" />
    `}};i([l("#inputField")],e.prototype,"_inputElement",2),e=i([a("omni-email-field")],e);export{e as a};
//# sourceMappingURL=chunk.YFNR3RDP.js.map
