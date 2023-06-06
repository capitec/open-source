import{h as s}from"./chunk.QA3WYCV3.js";import{a as l,b as r}from"./chunk.S2K25ADN.js";import{a as n,b as a}from"./chunk.L3RZWW2F.js";import{j as t,m as o,p as i}from"./chunk.BF43NN75.js";o();i();var e=class extends s{constructor(){super(...arguments);this.target="_self"}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._click.bind(this))}_click(m){if(this.disabled)return m.stopImmediatePropagation()}static get styles(){return[super.styles,n`
                :host {
                display: inline-block;
                }

                :host([disabled]) a {
                pointer-events: none;
                color: var(--omni-hyperlink-color-disabled, var(--omni-disabled-background-color));
                }

                :host([inline]) {
                text-decoration: underline;
                }

                .hyperlink {
                font-size: var(--omni-hyperlink-font-size, var(--omni-font-size));
                font-family: var(--omni-hyperlink-font-family, var(--omni-font-family));
                font-weight: var(--omni-hyperlink-font-weight, var(--omni-font-weight));
                color: var(--omni-hyperlink-color, var(--omni-primary-color));
                text-decoration: var(--omni-hyperlink-text-decorator, none);
                outline: none;
                }

                :host([size='small']) .hyperlink {
                font-size: var(--omni-hyperlink-font-size-small, 0.87em);
                font-family: var(--omni-hyperlink-font-family-small, var(--omni-font-family));
                font-weight: var(--omni-hyperlink-font-weight-small, var(--omni-font-weight));
                }

                .hyperlink:active {
                color: var(--omni-hyperlink-color-active, #3a3a3a);
                text-decoration: var(--omni-hyperlink-text-decorator-active, underline);
                }

                .hyperlink:hover {
                text-decoration: var(--omni-hyperlink-text-decorator-hover, underline);
                }

                .hyperlink:visited {
                color: var(--omni-hyperlink-color-visited, #3a3a3a);
                text-decoration: var(--omni-hyperlink-text-decorator-visited, none);
                }
            `]}render(){return a`
            <a class="hyperlink" href="${this.href?this.href:"javascript:void(0)"}" .target="${this.target}" tabindex="0">
                ${this.label}<slot></slot>
            </a>
        `}};t([r({type:String,reflect:!0})],e.prototype,"label",2),t([r({type:String,reflect:!0})],e.prototype,"href",2),t([r({type:String,reflect:!0})],e.prototype,"target",2),t([r({type:Boolean,reflect:!0})],e.prototype,"disabled",2),t([r({type:Boolean,reflect:!0})],e.prototype,"inline",2),t([r({type:String,reflect:!0})],e.prototype,"size",2),e=t([l("omni-hyperlink")],e);export{e as a};
//# sourceMappingURL=chunk.6XZV77YF.js.map
