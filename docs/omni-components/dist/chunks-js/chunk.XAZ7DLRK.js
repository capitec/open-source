import{a as h}from"./chunk.XMM72FEY.js";import{h as m}from"./chunk.ZO5UBYOG.js";import{a as s,b as e}from"./chunk.CHYIO324.js";import{a as c,b as n,d as t}from"./chunk.3GEUDTAZ.js";import{j as i,l as d,o as l}from"./chunk.2ZZQBHAA.js";d();l();var o=class extends m{focus(){this.shadowRoot.getElementById("content").focus()}_click(r){if(this.disabled)return r.stopImmediatePropagation();this._toggleChecked()}_keyDown(r){if(this.disabled)return r.stopImmediatePropagation();let a=(r.code||"").toUpperCase();if(a==="SPACE"||a==="ENTER")return this._toggleChecked(),r.preventDefault()}_toggleChecked(){let r=this.checked;this.checked=!r,this.dispatchEvent(new CustomEvent("value-change",{detail:{old:r,new:this.checked}}))}static get styles(){return[super.styles,c`
        :host {
          --omni-radio-width: 24px;
          --omni-radio-height: 24px;

          --omni-radio-padding: 2px;
        }

        /* CONTAINER STYLES */

        .container {
          display: flex;
          align-items: center;
        }

        .container > .label {
          color: var(--omni-label-font-color, var(--omni-font-color));
          font-family: var(--omni-label-font-family, var(--omni-font-family));
          font-size: var(--omni-label-font-size, var(--omni-font-size));
          font-weight: var(--omni-radio-label-font-weight, var(--omni-font-weight));
          line-height: var(--omni-radio-label-line-height, 20px);

          margin-left: var(--omni-radio-label-spacing, 8px);

          cursor: default;
        }

        .container > .label > .hint {
          color: var(--omni-input-hint-label-font-color, var(--omni-hint-font-color));
          font-family: var(--omni-input-hint-label-font-family, var(--omni-font-family));
          font-size: var(--omni-input-hint-label-font-size, 0.86em);
          font-weight: var(--omni-input-hint-label-font-weight, 300);

          padding-top: 4px;
        }

        .container > .label > .error {
          color: var(--omni-input-error-label-font-color, var(--omni-error-font-color));
          font-family: var(--omni-input-error-label-font-family, var(--omni-font-family));
          font-size: var(--omni-input-error-label-font-size, 0.86em);
          font-weight: var(--omni-input-error-label-font-weight, 300);

          padding-top: 4px;
        }

        /* RADIO BUTTON STYLES */

        .container > #content {
          box-sizing: border-box;
          cursor: pointer;

          display: flex;
          align-items: center;
          align-self: flex-start;
          justify-content: center;

          min-width: var(--omni-radio-width, 24px);
          min-height: var(--omni-radio-height, 24px);
          max-width: var(--omni-radio-width, 24px);
          max-height: var(--omni-radio-height, 24px);

          margin: var(--omni-radio-padding, 2px);

          background-color: var(--omni-radio-background-color, var(--omni-background-color));

          border-width: var(--omni-radio-border-width, var(--omni-border-width));
          border-style: var(--omni-radio-border-style, solid);
          border-color: var(--omni-radio-border-color, var(--omni-primary-color));
          border-radius: var(--omni-radio-border-radius, 50%);

          outline: 0;
        }

        .container.checked > #content > .indicator {
          width: calc(var(--omni-radio-width) - var(--omni-radio-padding) * 2);
          height: calc(var(--omni-radio-height) - var(--omni-radio-padding) * 2);

          border-width: var(--omni-radio-indicator-border-width, var(--omni-border-width));
          border-style: solid;
          border-color: var(--omni-radio-indicator-border-color, var(--omni-background-color));
          border-radius: var(--omni-radio-border-radius, 50%);

          color: var(--omni-radio-indicator-color, var(--omni-background-color));
        }

        /* CHECKED STATE STYLES */

        .container.checked > #content {
          background-color: var(--omni-radio-checked-background-color, var(--omni-primary-color));
        }

        /* HOVER STATE STYLES */

        .container > #content:hover {
          box-shadow: var(--omni-radio-hover-box-shadow, var(--omni-box-shadow));
          background-color: var(--omni-radio-hover-background-color, var(--omni-box-shadow-color));
        }

        .container.checked:hover > #content {
          background-color: var(--omni-radio-checked-background-color, var(--omni-primary-color));
        }
        /* DISABLED STATE STYLES */

        .container.disabled > #content {
          cursor: default;
          border-color: var(--omni-radio-disabled-border-color, var(--omni-disabled-border-color));
          background-color: var(--omni-radio-disabled-background-color, var(--omni-disabled-background-color));
        }

        .container.disabled.checked > #content {
          background-color: var(--omni-radio-disabled-background-color, var(--omni-disabled-background-color));
        }

        .container.disabled:hover > #content {
          box-shadow: none;
        }

        :host(:not([disabled])) .container > #label {
          cursor: pointer;
        }
      `]}render(){return n`
      <div
        class=${h({container:!0,checked:this.checked,disabled:this.disabled})}>
        <div id="content" tabindex="${this.disabled?"":0}" @click="${this._click}" @keydown="${this._keyDown}">
          ${this.checked?n`<div class="indicator"></div>`:t}
        </div>
        <label id="label" class="label" @click="${this._click}">
          ${this.label} ${this.hint&&!this.error?n`<div class="hint">${this.hint}</div>`:t}
          ${this.error?n`<div class="error">${this.error}</div>`:t}
        </label>
      </div>
    `}};i([e({type:String,reflect:!0})],o.prototype,"label",2),i([e({type:Object,reflect:!0})],o.prototype,"data",2),i([e({type:String,reflect:!0})],o.prototype,"hint",2),i([e({type:String,reflect:!0})],o.prototype,"error",2),i([e({type:Boolean,reflect:!0})],o.prototype,"checked",2),i([e({type:Boolean,reflect:!0})],o.prototype,"disabled",2),o=i([s("omni-radio")],o);export{o as a};
//# sourceMappingURL=chunk.XAZ7DLRK.js.map
