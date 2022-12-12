import{a as l}from"./chunk.THZL7OFV.js";import{b as d}from"./chunk.DPILG6RJ.js";import{a,d as s}from"./chunk.CHYIO324.js";import{b as r,c as n}from"./chunk.CDDA2I3H.js";import{j as e,l as t,o}from"./chunk.2ZZQBHAA.js";t();o();var i=class extends d{connectedCallback(){super.connectedCallback(),this.addEventListener("input",this._keyInput.bind(this),{capture:!0})}_keyInput(){let u=this._inputElement;this.value=u.value}_onAddClick(){this.disabled||(!this.value||this.value==="NaN"||this.value===""||this.value==="0"?this.value="1":this.value=`${parseInt(this.value)+1}`)}_onMinusClick(){this.disabled||(!this.value||this.value==="NaN"||this.value===""||this.value==="0"?this.value="0":this.value=`${parseInt(this.value)-1}`)}static get styles(){return[super.styles,r`
        .quantity {
          display: flex;
          height: var(--omni-numeric-input-quantity-height, 100%);
        }

        .plus-icon,
        .minus-icon,
        ::slotted([slot='increase']),
        ::slotted([slot='decrease']) {
          width: var(--omni-numeric-input-slot-width, 36px);
          height: var(--omni-numeric-input-slot-height, 36px);
          cursor: pointer;
        }

        .divider {
          background-color: var(--omni-numeric-input-divider-color, var(--omni-primary-color));
          width: var(--omni-numeric-input-divider-width, 1px);
        }

        .field {
          flex: 1 1 auto;

          border: none;
          background: none;
          box-shadow: none;
          outline: 0;
          padding: 0;
          margin: 0;

          text-align: var(--omni-numeric-field-text-align, left);

          color: var(--omni-numeric-field-font-color, var(--omni-font-color));
          font-family: var(--omni-numeric-field-font-family, var(--omni-font-family));
          font-size: var(--omni-numeric-field-font-size, var(--omni-font-size));
          font-weight: var(--omni-numeric-field-font-weight, var(--omni-font-weight));
          height: var(--omni-numeric-field-height, 100%);
          padding: var(--omni-numeric-field-padding, 10px);
          width: var(--omni-numeric-field-width);
        }

        .control {
          display: inline-flex;
          flex: 0 0 auto;
          align-items: center;
          cursor: default;
        }

        .increase-container:hover,
        .decrease-container:hover {
          background-color: var(--omni-numeric-control-hover, var(--omni-accent-hover-color));
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
      `]}renderControl(){return n`
      <span class="control">
        <div class="quantity">
          <div class="increase-container" @click="${this._onAddClick}"
            ><slot name="increase"><omni-plus-icon class="plus-icon"></omni-plus-icon></slot
          ></div>
          <div class="divider"></div>
          <div class="decrease-container" @click="${this._onMinusClick}"
            ><slot name="decrease"><omni-minus-icon class="minus-icon"></omni-minus-icon></slot
          ></div>
        </div>
      </span>
    `}renderContent(){return n`
      <input
        class="field"
        id="inputField"
        type="number"
        .value=${l(this.value)}
        ?readOnly=${this.disabled}
        tabindex="${this.disabled?-1:0}" />
    `}};e([s("#inputField")],i.prototype,"_inputElement",2),i=e([a("omni-numeric-field")],i);export{i as a};
//# sourceMappingURL=chunk.F2K3FLJX.js.map
