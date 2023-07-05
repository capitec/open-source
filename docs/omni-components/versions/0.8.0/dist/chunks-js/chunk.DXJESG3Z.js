import{a as s}from"./chunk.LUCH4Y6K.js";import{h as c}from"./chunk.PNTHLTQK.js";import{a as l,b as t}from"./chunk.S2K25ADN.js";import{a as b,b as e,e as d}from"./chunk.L3RZWW2F.js";import{j as r,m as a,p as i}from"./chunk.BF43NN75.js";a();i();var o=class extends c{constructor(){super(...arguments);this.type="secondary";this.slotPosition="left"}static get styles(){return[super.styles,b`
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

                /* PRIMARY */

                .button.primary {
                    background: var(--omni-button-primary-background, var(--omni-primary-color));
                    border-color: var(--omni-button-primary-border-color, var(--omni-primary-color));
                    border-width: var(--omni-button-primary-border-width, var(--omni-border-width));
                    color: var(--omni-button-primary-color, var(--omni-background-color));
                }

                .button.primary:hover {
                    background: var(--omni-button-primary-hover-background, var(--omni-primary-hover-color));
                    border-color: var(--omni-button-primary-hover-border-color, var(--omni-primary-hover-color));
                    border-width: var(--omni-button-primary-hover-border-width, var(--omni-border-width));
                    box-shadow: var(--omni-button-primary-hover-box-shadow, 0 2px 4px 0 rgba(0, 0, 0, 0.25), 0 1px 3px rgba(0, 0, 0, 0.15));
                }

                .button.primary:active {
                    background: var(--omni-button-primary-active-background, var(--omni-primary-active-color));
                    box-shadow: none;
                }

                /* SECONDARY */

                .button.secondary {
                    background: var(--omni-button-secondary-background, var(--omni-background-color));
                    border-color: var(--omni-button-secondary-border-color, var(--omni-primary-color));
                    border-width: var(--omni-button-secondary-border-width, var(--omni-border-width));
                    color: var(--omni-button-secondary-color, var(--omni-primary-color));
                }

                .button.secondary:hover {
                    background: var(--omni-button-secondary-hover-background, var(--omni-background-hover-color));
                    border-color: var(--omni-button-secondary-hover-border-color, var(--omni-primary-hover-color));
                    border-width: var(--omni-button-secondary-hover-border-width, var(--omni-border-width));
                    box-shadow: var(--omni-button-secondary-hover-box-shadow, 0 2px 4px 0 rgba(0, 0, 0, 0.25), 0 1px 3px rgba(0, 0, 0, 0.15));
                }

                .button.secondary:active {
                    background: var(--omni-button-secondary-active-background, var(--omni-background-active-color));
                    box-shadow: none;
                }

                /* CLEAR */

                .button.clear {
                    background: var(--omni-button-clear-background, transparent);
                    border-color: var(--omni-button-clear-border-color, transparent);
                    border-width: var(--omni-button-clear-border-width, var(--omni-border-width));
                    color: var(--omni-button-clear-color, var(--omni-primary-color));
                }

                .button.clear:hover {
                    background: var(--omni-button-clear-hover-background, var(--omni-background-hover-color));
                    border-color: var(--omni-button-clear-hover-border-color, transparent);
                    border-width: var(--omni-button-clear-hover-border-width, var(--omni-border-width));
                    color: var(--omni-button-clear-hover-color, var(--omni-primary-color));
                }

                .button.clear:active {
                    background: var(--omni-button-clear-active-background, var(--omni-background-active-color));
                    border-color: var(--omni-button-clear-active-border-color, transparent);
                    border-width: var(--omni-button-clear-active-border-width, var(--omni-border-width));
                    box-shadow: none;
                    outline: none;
                }

                /* WHITE */

                .button.white {
                    background: var(--omni-button-white-background, white);
                    border-color: var(--omni-button-white-border-color, white);
                    border-width: var(--omni-button-white-border-width, var(--omni-border-width));
                    color: var(--omni-button-white-color, var(--omni-primary-color));
                }

                .button.white:hover {
                    background: var(--omni-button-white-hover-background, white);
                    border-color: var(--omni-button-white-hover-border-color, white);
                    border-width: var(--omni-button-white-hover-border-width, var(--omni-border-width));
                    box-shadow: var(--omni-button-white-hover-box-shadow, 0 2px 4px 0 rgba(0, 0, 0, 0.25), 0 1px 3px rgba(0, 0, 0, 0.15));
                }

                .button.white:active {
                    background: var(--omni-button-white-active-background, var(--omni-background-active-color));
                    border-color: var(--omni-button-white-active-border-color, transparent);
                    border-width: var(--omni-button-white-active-border-width, var(--omni-border-width));
                    box-shadow: none;
                    outline: none;
                }

                /* DISABLED */

                .button.disabled {
                    cursor: default;
                    border-color: var(--omni-button-disabled-border-color, var(--omni-disabled-border-color));
                    background: var(--omni-button-disabled-background, var(--omni-disabled-background-color));
                }

                .button.disabled:hover,
                .button.disabled:active {
                    box-shadow: none;
                    background: var(--omni-button-disabled-active-hover-background, var(--omni-disabled-background-color));
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
                        background: var(--omni-button-clear-hover-background, unset);
                    }

                    .button.primary:hover,
                    .button.secondary:hover,
                    .button.clear:hover,
                    .button.white:hover {
                        box-shadow: unset;
                    }
                }

                /* SLOT POSITION */

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

                /* SLOT MARGINS */

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
            `]}render(){var n;return e`
            <button
                id="button"
                class=${s({button:!0,[`slot-${this.slotPosition}`]:this.label?this.slotPosition:!1,[`${this.type}`]:this.type,disabled:(n=this.disabled)!=null?n:!1})}
                ?disabled=${this.disabled}
                aria-disabled=${this.disabled?"true":"false"}
                tabindex=${this.disabled?"-1":"0"}>
                <slot></slot>
                ${this.label?e`<label id="label" class="label">${this.label}</label>`:d}
            </button>
        `}};r([t({type:String,reflect:!0})],o.prototype,"type",2),r([t({type:String,reflect:!0})],o.prototype,"label",2),r([t({type:String,reflect:!0,attribute:"slot-position"})],o.prototype,"slotPosition",2),r([t({type:Boolean,reflect:!0})],o.prototype,"disabled",2),o=r([l("omni-button")],o);export{o as a};
//# sourceMappingURL=chunk.DXJESG3Z.js.map
