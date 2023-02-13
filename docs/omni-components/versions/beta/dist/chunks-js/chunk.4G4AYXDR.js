import{a as d}from"./chunk.ZTJGZLZP.js";import{b as s}from"./chunk.TWX6WA6U.js";import{a as l,d as m}from"./chunk.CHYIO324.js";import{a,b as o}from"./chunk.CIM3NS6G.js";import{j as t,l as n,o as r}from"./chunk.2ZZQBHAA.js";n();r();var i=class extends s{connectedCallback(){super.connectedCallback(),this.addEventListener("input",this._keyInput.bind(this),{capture:!0}),this.addEventListener("keyup",this._blurOnEnter.bind(this),{capture:!0})}_blurOnEnter(e){(e.code==="Enter"||e.keyCode===13)&&e.currentTarget.blur()}_keyInput(){let e=this._inputElement;this.value=e.value}static get styles(){return[super.styles,a`
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
      `]}renderContent(){return o`
      <input
        class="field"
        id="inputField"
        inputmode="email"
        type="email"
        .value=${d(this.value)}
        ?readOnly=${this.disabled}
        tabindex="${this.disabled?-1:0}" />
    `}};t([m("#inputField")],i.prototype,"_inputElement",2),i=t([l("omni-email-field")],i);export{i as a};
//# sourceMappingURL=chunk.4G4AYXDR.js.map
