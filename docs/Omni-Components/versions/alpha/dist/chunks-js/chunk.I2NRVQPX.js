import{a as u}from"./chunk.MCIDFWAY.js";import{b as m}from"./chunk.CTDWZZOC.js";import{a as d,d as s}from"./chunk.CHYIO324.js";import{a,b as l}from"./chunk.3GEUDTAZ.js";import{j as t,l as r,o}from"./chunk.2ZZQBHAA.js";r();o();var n=class extends m{connectedCallback(){super.connectedCallback(),this.addEventListener("input",this._keyInput.bind(this),{capture:!0}),this.addEventListener("keydown",this._keyDown.bind(this),{capture:!0})}async attributeChangedCallback(e,p,i){super.attributeChangedCallback(e,p,i),e==="value"&&new RegExp("^[0-9]+$").test(i)}_keyDown(e){if(e.key>="a"&&e.key<="z"){e.preventDefault();return}}_keyInput(){let e=this._inputElement;this.value=e.value}static get styles(){return[super.styles,a`
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
          padding: var(--omni-number-field-padding, 10px);

          height: var(--omni-number-field-height, 100%);
          width: var(--omni-number-field-weight, 100%);
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
      `]}renderContent(){return l`
      <input
        class="field"
        id="inputField"
        type="number"
        .value=${u(this.value)}
        ?readOnly=${this.disabled}
        tabindex="${this.disabled?-1:0}" />
    `}};t([s("#inputField")],n.prototype,"_inputElement",2),n=t([d("omni-number-field")],n);export{n as a};
//# sourceMappingURL=chunk.I2NRVQPX.js.map
