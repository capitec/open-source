import{a as p}from"./chunk.RWAXFZOX.js";import{h as c}from"./chunk.QA3WYCV3.js";import{a as m,b as o}from"./chunk.S2K25ADN.js";import{a as s,b as t}from"./chunk.L3RZWW2F.js";import{j as e,m as n,p as l}from"./chunk.BF43NN75.js";n();l();var i=class extends c{constructor(){super(...arguments);this.size="default"}static get styles(){return[super.styles,s`
                :host {
                    width: fit-content;
                    justify-content: center;
                    color: var(--omni-icon-fill, currentColor);
                    fill: var(--omni-icon-fill, currentColor);
                    background-color: var(--omni-icon-background-color);
                }

                /* MATERIAL ICON STYLES */

                .material-icon {
                    font-family: 'Material Icons';
                    font-weight: normal;
                    font-style: normal;
                    display: inline-block;
                    line-height: 1;
                    text-transform: none;
                    letter-spacing: normal;
                    word-wrap: normal;
                    white-space: nowrap;
                    direction: ltr;
                    padding: 0px;
                    margin: 0px;

                    align-self: center;
                    justify-self: center;

                    /* Support for all WebKit browsers. */
                    -webkit-font-smoothing: antialiased;

                    /* Support for Safari and Chrome. */
                    text-rendering: optimizeLegibility;

                    /* Support for Firefox. */
                    -moz-osx-font-smoothing: grayscale;

                    /* Support for IE. */
                    font-feature-settings: 'liga';
                }

                .material-icon.large {
                    font-size: var(--omni-icon-size-large, 48px);
                }

                .material-icon.medium {
                    font-size: var(--omni-icon-size-medium, 32px);
                }

                .material-icon.small {
                    font-size: var(--omni-icon-size-small, 16px);
                }

                .material-icon.extra-small {
                    font-size: var(--omni-icon-size-extra-small, 8.25px);
                }

                .material-icon.default {
                    font-size: var(--omni-icon-size-default, 24px);
                }

                /* SVG ICON STYLES */

                .svg-icon.large {
                    height: var(--omni-icon-size-large, 48px);
                }

                .svg-icon.large.symmetrical {
                    width: var(--omni-icon-size-large, 48px);
                }

                .svg-icon.medium {
                    height: var(--omni-icon-size-medium, 32px);
                }

                .svg-icon.medium.symmetrical {
                    width: var(--omni-icon-size-medium, 32px);
                }

                .svg-icon.small {
                    height: var(--omni-icon-size-small, 16px);
                }

                .svg-icon.small.symmetrical {
                    width: var(--omni-icon-size-small, 16px);
                }

                .svg-icon.extra-small {
                    height: var(--omni-icon-size-extra-small, 8.25px);
                }

                .svg-icon.extra-small.symmetrical {
                    width: var(--omni-icon-size-extra-small, 8.25px);
                }

                .svg-icon.default {
                    height: var(--omni-icon-size-default, 24px);
                }

                .svg-icon.default.symmetrical {
                    width: var(--omni-icon-size-default, 24px);
                }
            `]}render(){var a;let r=p({["svg-icon"]:!0,[`${this.size}`]:this.size,symmetrical:(a=this.symmetrical)!=null?a:!1});return this.icon?this.icon.startsWith("@material/")?t`<div class="material-icon ${this.size}">${this.icon.replace("@material/","")}</div>`:t`
                <img 
                    class=${r}
                    src="${this.icon}" 
                    alt="${this.icon}" />
            `:t`
            <div class=${r}>
                <slot></slot>
            </div>
        `}};e([o({type:String,reflect:!0})],i.prototype,"size",2),e([o({type:String,reflect:!0})],i.prototype,"icon",2),e([o({type:Boolean,reflect:!0})],i.prototype,"symmetrical",2),i=e([m("omni-icon")],i);export{i as a};
//# sourceMappingURL=chunk.6HAYHFHP.js.map
