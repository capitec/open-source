import{a as m}from"./chunk.MCIDFWAY.js";import{b as d}from"./chunk.EQAFL2KM.js";import{a as l,d as r}from"./chunk.CHYIO324.js";import{a as o,b as a}from"./chunk.3GEUDTAZ.js";import{j as i,l as t,o as n}from"./chunk.2ZZQBHAA.js";t();n();var e=class extends d{connectedCallback(){super.connectedCallback(),this.addEventListener("input",this._keyInput.bind(this),{capture:!0})}_keyInput(){let f=this._inputElement;this.value=f.value}static get styles(){return[super.styles,o`
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
      `]}renderContent(){return a`
      <input
        class="field"
        id="inputField"
        inputmode="email"
        type="email"
        .value=${m(this.value)}
        ?readOnly=${this.disabled}
        tabindex="${this.disabled?-1:0}" />
    `}};i([r("#inputField")],e.prototype,"_inputElement",2),e=i([l("omni-email-field")],e);export{e as a};
//# sourceMappingURL=chunk.2PZJFJET.js.map