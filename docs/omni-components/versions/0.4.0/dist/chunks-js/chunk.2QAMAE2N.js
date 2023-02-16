import{a as b}from"./chunk.F27L6OQP.js";import{h}from"./chunk.7YN44Q4N.js";import{a as d,b as e}from"./chunk.CHYIO324.js";import{a as s,b as n,d as a}from"./chunk.CIM3NS6G.js";import{j as r,l as c,o as l}from"./chunk.2ZZQBHAA.js";c();l();var i=class extends h{focus(){var o,t;(t=(o=this.shadowRoot)==null?void 0:o.getElementById("track"))==null||t.focus()}_click(o){if(this.disabled)return o.stopImmediatePropagation();this._switchChecked()}_switchChecked(){let o=this.checked;this.checked=!o,this.dispatchEvent(new CustomEvent("value-change",{detail:{old:o,new:this.checked},bubbles:!0}))}_keyDown(o){if(this.disabled)return o.stopImmediatePropagation();let t=(o.code||"").toUpperCase();if(t==="SPACE"||t==="ENTER"||t==="NUMPADENTER")return this._switchChecked(),o.preventDefault()}static get styles(){return[super.styles,s`
        /* CONTAINER STYLES */
        .container {
          display: flex;
          align-items: center;
        }
        /* LABEL STYLES */

        .container > .label {
          color: var(--omni-switch-label-font-color, var(--omni-font-color));
          font-family: var(--omni-switch-label-font-family, var(--omni-font-family));
          font-size: var(--omni-switch-label-font-size, var(--omni-font-size));
          font-weight: var(--omni-switch-label-font-weight, var(--omni-font-weight));
          margin-left: var(--omni-switch-label-spacing, 8px);
          cursor: default;
        }
        .container > .label > .hint {
          color: var(--omni-switch-input-hint-label-font-color, var(--omni-hint-font-color));
          font-family: var(--omni-switch-input-hint-label-font-family, var(--omni-font-family));
          font-size: var(--omni-switch-input-hint-label-font-size, 0.86em);
          font-weight: var(--omni-switch-input-hint-label-font-weight, 300);
          padding-top: 4px;
        }
        .container > .label > .error {
          color: var(--omni-switch-input-error-label-font-color, var(--omni-error-font-color));
          font-family: var(--omni-switch-input-error-label-font-family, var(--omni-font-family));
          font-size: var(--omni-switch-input-error-label-font-size, 0.86em);
          font-weight: var(--omni-switch-input-error-label-font-weight, 300);
          padding-top: 4px;
        }
        /* SWITCH BUTTON STYLES */
        .container > #content {
          box-sizing: border-box;
          cursor: pointer;
          display: grid;
          align-items: center;
        }

        .container > #content > .track {
          width: var(--omni-switch-track-width, 23px);
          height: var(--omni-switch-track-height, 12px);
          grid-row: 1;
          grid-column: 1;

          background-color: var(--omni-switch-track-background-color, var(--omni-inactive-color));
          border-radius: var(--omni-switch-track-border-radius, 16px);
          margin-left: var(--omni-switch-track-inset, 8px);
          margin-right: var(--omni-switch-track-inset, 8px);
          outline: 0;
        }
        .container > #content > .knob {
          height: var(--omni-switch-knob-height, 14px);
          grid-row: 1;
          grid-column: 1;
          position: relative;
        }
        .container > #content > .knob > div {
          width: var(--omni-switch-knob-width, 14px);
          height: 100%;
          background-color: var(--omni-switch-knob-background-color, var(--omni-background-color));
          border-radius: 50%;
          box-shadow: var(--omni-switch-knob-box-shadow, 0 2px 4px 0 rgba(0, 0, 0, 0.25), 0 1px 3px rgba(0, 0, 0, 0.15));

          position: absolute;
          left: 0px;
          margin-top: auto;
          margin-bottom: auto;
          transition: 0.15s left ease-in-out;
        }

        .container > #content:hover > .knob > div {
          box-shadow: var(--omni-switch-knob-hover-box-shadow, 0 0 3px 3px var(--omni-box-shadow-color));
        }

        /* CHECKED STATE STYLES */
        .container.checked > #content > .track {
          background-color: var(--omni-switch-checked-track-background-color, var(--omni-accent-color));
        }

        .container.checked > #content > .knob > div {
          background-color: var(--omni-switch-checked-knob-background-color, var(--omni-primary-color));
          left: calc(100% - var(--omni-switch-knob-width, 14px));
          box-shadow: none;
        }
        .container.checked > #content:hover > .knob > div {
          background-color: var(--omni-switch-checked-knob-background-color, var(--omni-primary-color));
          left: calc(100% - var(--omni-switch-knob-width, 14px));
          box-shadow: var(--omni-switch-checked-hover-knob-box-shadow, 0 0 3px 3px var(--omni-box-shadow-color));
        }
        /* DISABLED STATE STYLES */
        .container.disabled > #content {
          cursor: default;
        }
        .container.disabled > #content > .track,
        .container.disabled > #content:hover > .track {
          background-color: var(--omni-switch-disabled-track-background-color, var(--omni-disabled-background-color));
        }
        .container.disabled > #content:hover > .knob > div,
        .container.disabled > #content > .knob > div {
          background-color: var(--omni-switch-disabled-knob-background-color, var(--omni-disabled-background-color));
          box-shadow: var(--omni-switch-disabled-knob-box-shadow, 0 2px 4px 0 rgba(0, 0, 0, 0.25), 0 1px 3px rgba(0, 0, 0, 0.15));
        }
      `]}render(){var o,t;return n`
      <div
        class=${b({container:!0,checked:(o=this.checked)!=null?o:!1,disabled:(t=this.disabled)!=null?t:!1})}>
        <div id="content" @click="${this._click}" @keydown="${this._keyDown}">
          <div id="track" class="track" tabindex="${this.disabled?"":0}"></div>
          <div class="knob">
            <div></div>
          </div>
        </div>
        <label class="label" @click="${this._click}">
          ${this.label} ${this.hint&&!this.error?n`<div class="hint">${this.hint}</div>`:a}
          ${this.error?n`<div class="error">${this.error}</div>`:a}
        </label>
      </div>
    `}};r([e({type:String,reflect:!0})],i.prototype,"label",2),r([e({type:Object,reflect:!0})],i.prototype,"data",2),r([e({type:String,reflect:!0})],i.prototype,"hint",2),r([e({type:String,reflect:!0})],i.prototype,"error",2),r([e({type:Boolean,reflect:!0})],i.prototype,"checked",2),r([e({type:Boolean,reflect:!0})],i.prototype,"disabled",2),i=r([d("omni-switch")],i);export{i as a};
//# sourceMappingURL=chunk.2QAMAE2N.js.map
