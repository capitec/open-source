import{h as s}from"./chunk.ZTHUBORR.js";import{a,b as i}from"./chunk.4PFNWG2J.js";import{a as n,d as l}from"./chunk.63YMDT6M.js";import{j as t,m as r,p as o}from"./chunk.BF43NN75.js";r();o();var e=class extends s{constructor(){super(...arguments);this.target="_self"}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._click.bind(this))}disconnectedCallback(){this.removeEventListener("click",this._click.bind(this)),super.disconnectedCallback()}_click(c){if(this.disabled)return c.stopImmediatePropagation()}static get styles(){return[super.styles,n`
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
            `]}render(){return l`
            <a class="hyperlink" href="${this.href?this.href:"javascript:void(0)"}" .target="${this.target}" tabindex="0">
                ${this.label}<slot></slot>
            </a>
        `}};t([i({type:String,reflect:!0})],e.prototype,"label",2),t([i({type:String,reflect:!0})],e.prototype,"href",2),t([i({type:String,reflect:!0})],e.prototype,"target",2),t([i({type:Boolean,reflect:!0})],e.prototype,"disabled",2),t([i({type:Boolean,reflect:!0})],e.prototype,"inline",2),t([i({type:String,reflect:!0})],e.prototype,"size",2),e=t([a("omni-hyperlink")],e);export{e as a};
//# sourceMappingURL=chunk.ZY7J4C7S.js.map
