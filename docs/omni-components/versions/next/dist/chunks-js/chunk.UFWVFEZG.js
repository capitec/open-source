import{a as s}from"./chunk.VVHFAJKZ.js";import{h as p}from"./chunk.LAXESDIJ.js";import{a as d,b as r}from"./chunk.2KHELDCI.js";import{a as t,b as l,e as c}from"./chunk.6H2RNHNO.js";import{j as e,m as a,p as n}from"./chunk.BF43NN75.js";a();n();var o=class extends p{_removeClicked(i){if(this.disabled)return i.stopImmediatePropagation();this.dispatchEvent(new CustomEvent("remove",{detail:{}})),i.stopPropagation()}static get styles(){return[super.styles,t`
        :host {
          box-sizing: border-box;
          display: inline-flex;
        }

        :host([disabled]),
        :host([disabled]) > * {
          pointer-events: none;
        }

        :host(:not([closable])) .icon {
          display: none;
        }

        .chip {
          cursor: pointer;
          display: flex;
          flex-direction: row;
          align-items: center;
          box-sizing: border-box;

          height: var(--omni-chip-height, 32px);
          max-height: var(--omni-chip-max-height, 32px);

          border: var(--omni-chip-border, 1px solid #e1e1e1);
          border-radius: var(--omni-chip-border-radius, 16px);
          background-color: var(--omni-chip-background-color, var(--omni-background-color));
          padding: var(--omni-chip-padding, 4px);

        }

        .chip:hover {
          border: var(--omni-chip-hover-border, 1px solid var(--omni-primary-color));
          box-shadow: var(--omni-chip-hover-shadow, 0 2px 4px 0 rgba(0, 0, 0, 0.25), 0 1px 3px 0 rgba(0, 0, 0, 0.15));
        }

        .label {
          display: inline-block;
          padding-left: var(--omni-chip-label-padding-left, 8px);
          padding-right: var(--omni-chip-label-padding-right, 8px);
          color: var(--omni-chip-label-color, var(--omni-primary-color));
          font-family: var(--omni-chip-label-font-family, var(--omni-font-family));
          font-size: var(--omni-chip-label-font-size, var(--omni-font-size));
          font-weight: var(--omni-chip-label-font-weight, var(--omni-font-weight));
          line-height: var(--omni-chip-label-line-height, 20px);
        }

        ::slotted([slot='chip_icon']) {
          width: var(--omni-chip-icon-width, 24px);
        }

        .close-icon,
        ::slotted([slot='close_icon']) {
          width: var(--omni-chip-close-icon-width, 24px);
          fill: var(--omni-chip-close-icon-color, var(--omni-primary-color));
        }

        .chip.disabled {
          cursor: default;
          border-color: var(--omni-chip-disabled-border-color, var(--omni-disabled-border-color));
          background-color: var(--omni-chip-disabled-background-color, var(--omni-disabled-background-color));
        }

        .chip.disabled:hover,
        .chip.disabled:active {
          box-shadow: none;
          background-color: var(--omni-chip-disabled-hover-background-color, var(--omni-disabled-background-color));
        }

        .chip.disabled:focus {
          outline: 0;
        }

        .chip:focus {
          outline: none;
        }
      `]}render(){var i;return l`
      <button
        id="chip"
        class=${s({chip:!0,disabled:(i=this.disabled)!=null?i:!1})}
        ?disabled=${this.disabled}
        aria-disabled=${this.disabled?"true":"false"}>
        <slot name="chip_icon"></slot>
        <div id="label" class="label">${this.label}</div>
        <div id="closeButton" class="icon" @click="${h=>this._removeClicked(h)}">
          ${this.closable?l`<slot name="close_icon"><omni-close-icon class="close-icon"></omni-close-icon></slot>`:c}
        </div>
      </button>
    `}};e([r({type:String,reflect:!0})],o.prototype,"label",2),e([r({type:Boolean,reflect:!0})],o.prototype,"closable",2),e([r({type:Boolean,reflect:!0})],o.prototype,"disabled",2),o=e([d("omni-chip")],o);export{o as a};
//# sourceMappingURL=chunk.UFWVFEZG.js.map
