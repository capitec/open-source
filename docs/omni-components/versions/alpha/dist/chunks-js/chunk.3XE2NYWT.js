import{h as s}from"./chunk.AVPPSB5Z.js";import{a as l,b as o}from"./chunk.S2K25ADN.js";import{a,b as t}from"./chunk.F6MIXR4E.js";import{j as e,m as r,p as n}from"./chunk.BF43NN75.js";r();n();var i=class extends s{constructor(){super(...arguments);this.size="default"}static get styles(){return[super.styles,a`
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
          /*width: 48px;*/
        }

        .svg-icon.medium {
          height: var(--omni-icon-size-medium, 32px);
          /*width: 32px;*/
        }

        .svg-icon.small {
          height: var(--omni-icon-size-small, 16px);
          /*width: 16px;*/
        }

        .svg-icon.extra-small {
          height: var(--omni-icon-size-extra-small, 8.25px);
          /*width: 16px;*/
        }

        .svg-icon.default {
          height: var(--omni-icon-size-default, 24px);
          /*width: 24px;*/
        }
      `]}render(){return this.icon?this.icon.startsWith("@material/")?t`<div class="material-icon ${this.size}">${this.icon.replace("@material/","")}</div>`:t`<img class="svg-icon ${this.size}" src="${this.icon}" alt="${this.icon}" />`:t`
      <div class="svg-icon ${this.size}">
        <slot></slot>
      </div>
    `}};e([o({type:String,reflect:!0})],i.prototype,"size",2),e([o({type:String,reflect:!0})],i.prototype,"icon",2),i=e([l("omni-icon")],i);export{i as a};
//# sourceMappingURL=chunk.3XE2NYWT.js.map
