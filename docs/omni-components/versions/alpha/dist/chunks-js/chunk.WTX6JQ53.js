import{a as d}from"./chunk.MCIDFWAY.js";import{b as m}from"./chunk.ILWNZZ2I.js";import{a,d as l}from"./chunk.CHYIO324.js";import{a as o,b as r}from"./chunk.3GEUDTAZ.js";import{j as e,l as i,o as n}from"./chunk.2ZZQBHAA.js";i();n();var t=class extends m{connectedCallback(){super.connectedCallback(),this.addEventListener("input",this._keyInput.bind(this),{capture:!0})}_keyInput(){let f=this._inputElement;this.value=f.value}static get styles(){return[super.styles,o`
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
      `]}renderContent(){return r`
      <input
        class="field"
        id="inputField"
        type="text"
        .value=${d(this.value)}
        ?readOnly=${this.disabled}
        tabindex="${this.disabled?-1:0}" />
    `}};e([l("#inputField")],t.prototype,"_inputElement",2),t=e([a("omni-text-field")],t);export{t as a};
//# sourceMappingURL=chunk.WTX6JQ53.js.map
