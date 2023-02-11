import{a as m}from"./chunk.MCIDFWAY.js";import{b as f}from"./chunk.OLTCQXBT.js";import{a as l,d}from"./chunk.CHYIO324.js";import{a as r,b as a}from"./chunk.3GEUDTAZ.js";import{j as i,l as n,o}from"./chunk.2ZZQBHAA.js";n();o();var e=class extends f{connectedCallback(){super.connectedCallback(),this.addEventListener("input",this._keyInput.bind(this),{capture:!0})}_keyInput(){let t=this._inputElement;this.value=t==null?void 0:t.value}static get styles(){return[super.styles,r`
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
      `]}renderContent(){return a`
      <input
        class="field"
        id="inputField"
        type="text"
        .value=${m(this.value)}
        ?readOnly=${this.disabled}
        tabindex="${this.disabled?-1:0}" />
    `}};i([d("#inputField")],e.prototype,"_inputElement",2),e=i([l("omni-text-field")],e);export{e as a};
//# sourceMappingURL=chunk.CRXO7TLG.js.map
