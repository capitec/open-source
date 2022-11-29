import{a as d}from"./chunk.FS4G6H4L.js";import{c}from"./chunk.63F4QTY7.js";import{a as l,b as t}from"./chunk.CHYIO324.js";import{b as a,c as e,e as b}from"./chunk.CDDA2I3H.js";import{j as r,l as n,o as i}from"./chunk.2ZZQBHAA.js";n();i();var o=class extends c{constructor(){super(...arguments);this.type="secondary";this.slotPosition="left"}static get styles(){return[super.styles,a`
        :host {
          box-sizing: border-box;
          display: inline-flex;
        }

        :host([disabled]),
        :host([disabled]) > * {
          pointer-events: none;
        }

        .button {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;

          text-align: left;

          font-family: var(--omni-button-font-family, var(--omni-font-family));
          font-size: var(--omni-button-font-size, var(--omni-font-size));
          font-weight: var(--omni-button-font-weight, bolder);
          line-height: var(--omni-button-line-height);
          border-radius: var(--omni-button-border-radius, var(--omni-border-radius));
          border-style: solid;

          padding-top: var(--omni-button-padding-top, 10px);
          padding-bottom: var(--omni-button-padding-bottom, 10px);
          padding-left: var(--omni-button-padding-left, 10px);
          padding-right: var(--omni-button-padding-right, 10px);

          cursor: pointer;

          /* prettier-ignore */
          transition:
						opacity .1s ease,
						background-color .1s ease,
						border .1s ease,
						color .1s ease,
						box-shadow .1s ease,
						background .1s ease,
						-webkit-box-shadow .1s ease;
        }

        .button > .label {
          cursor: pointer;
        }

        .button.disabled > .label {
          cursor: default;
        }

        /* primary */

        .button.primary {
          background-color: var(--omni-button-primary-background-color, var(--omni-primary-color));
          border-color: var(--omni-button-primary-border-color, var(--omni-primary-color));
          border-width: var(--omni-button-primary-border-width, var(--omni-border-width));
          color: var(--omni-button-primary-color, var(--omni-background-color));
        }

        .button.primary:hover {
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25), 0 1px 3px rgba(0, 0, 0, 0.15);
        }

        .button.primary:active {
          background-color: var(--omni-button-primary-active-background-color, var(--omni-primary-active-color));
          box-shadow: none;
        }

        /* secondary */

        .button.secondary {
          background-color: var(--omni-button-secondary-background-color, var(--omni-background-color));
          border-color: var(--omni-button-secondary-border-color, var(--omni-primary-color));
          border-width: var(--omni-button-secondary-border-width, var(--omni-border-width));
          color: var(--omni-button-secondary-color, var(--omni-primary-color));
        }

        .button.secondary:hover {
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25), 0 1px 3px rgba(0, 0, 0, 0.15);
        }

        .button.secondary:active {
          background-color: var(--omni-button-secondary-active-background-color, var(--omni-background-active-color));
          box-shadow: none;
        }

        /* clear */

        .button.clear {
          background-color: var(--omni-button-clear-background-color, transparent);
          border-color: var(--omni-button-clear-border-color, transparent);
          border-width: var(--omni-button-clear-border-width, var(--omni-border-width));
          color: var(--omni-button-clear-color, var(--omni-primary-color));
        }

        .button.clear:hover {
          background-color: var(--omni-button-clear-hover-background-color, var(--omni-background-hover-color));
        }

        .button.clear:active {
          background-color: var(--omni-button-clear-active-background-color, var(--omni-background-active-color));
          box-shadow: none;
          border-color: var(--omni-button-clear-active-border-color, transparent);
          border-width: var(--omni-button-clear-active-border-width, var(--omni-border-width));
          outline: none;
        }

        /* white */

        .button.white {
          background-color: var(--omni-button-white-background-color, white);
          border-color: var(--omni-button-white-border-color, white);
          border-width: var(--omni-button-white-border-width, var(--omni-border-width));
          color: var(--omni-button-white-color, var(--omni-primary-color));
        }

        .button.white:hover {
          background-color: var(--omni-button-white-hover-background-color, white);
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25), 0 1px 3px rgba(0, 0, 0, 0.15);
        }

        .button.white:active {
          background-color: var(--omni-button-white-active-background-color, var(--omni-background-active-color));
          box-shadow: none;
          border-color: var(--omni-button-white-active-border-color, transparent);
          border-width: var(--omni-button-white-active-border-width, var(--omni-border-width));
          outline: none;
        }

        /* disabled */

        .button.disabled {
          cursor: default;
          border-color: var(--omni-button-disabled-border-color, var(--omni-disabled-border-color));
          background-color: var(--omni-button-disabled-background-color, var(--omni-disabled-background-color));
        }

        .button.disabled:hover,
        .button.disabled:active {
          box-shadow: none;
          background-color: var(--omni-button-disabled-active-hover-background-color, var(--omni-disabled-background-color));
        }

        .button.disabled:focus {
          outline: 0;
        }

        .button:focus {
          outline: none;
        }

        /**
				 * Disable the hover state on touch enabled devices, e.g. mobile phones.
				 * On these devices hover acts like focus instead which keeps the button looking like it is in a pressed state.
				 * Learn more here: https://webdevpuneet.com/how-to-remove-hover-on-touch-devices.
				 */
        @media (hover: none) {
          .button.clear:hover:not(.disabled) {
            background-color: unset;
          }

          .button.primary:hover,
          .button.secondary:hover,
          .button.clear:hover,
          .button.white:hover {
            box-shadow: unset;
          }
        }

        /* slot position */

        .button.slot-left {
          flex-direction: row;
          text-align: left;
        }

        .button.slot-right {
          flex-direction: row-reverse;
          text-align: left;
        }

        .button.slot-top {
          flex-direction: column;
          text-align: center;
        }

        .button.slot-bottom {
          flex-direction: column-reverse;
          text-align: center;
        }

        /* slot margins */

        .button.slot-left > ::slotted(*) {
          margin-right: var(--omni-button-slot-margin-right, 10px);
        }

        .button.slot-top > ::slotted(*) {
          margin-bottom: var(--omni-button-slot-margin-bottom, 10px);
        }

        .button.slot-right > ::slotted(*) {
          margin-left: var(--omni-button-slot-margin-left, 10px);
        }

        .button.slot-bottom > ::slotted(*) {
          margin-top: var(--omni-button-slot-margin-top, 10px);
        }
      `]}render(){return e`
      <button
        id="button"
        class=${d({button:!0,[`slot-${this.slotPosition}`]:this.slotPosition,[`${this.type}`]:this.type,disabled:this.disabled})}
        ?disabled=${this.disabled}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}>
        <slot></slot>
        ${this.label?e`<label id="label" class="label">${this.label}</label>`:b}
      </button>
    `}};r([t({type:String,reflect:!0})],o.prototype,"type",2),r([t({type:String,reflect:!0})],o.prototype,"label",2),r([t({type:String,reflect:!0,attribute:"slot-position"})],o.prototype,"slotPosition",2),r([t({type:Boolean,reflect:!0})],o.prototype,"disabled",2),o=r([l("omni-button")],o);export{o as a};
//# sourceMappingURL=chunk.XN32YQMX.js.map
