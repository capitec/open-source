import{a as h}from"./chunk.XMM72FEY.js";import{h as m}from"./chunk.ZO5UBYOG.js";import{a as s,b as n}from"./chunk.CHYIO324.js";import{a as d,b as i,d as c}from"./chunk.3GEUDTAZ.js";import{j as r,l as a,o as l}from"./chunk.2ZZQBHAA.js";a();l();var o=class extends m{connectedCallback(){super.connectedCallback(),this.tabIndex=this.disabled?-1:0,this.addEventListener("click",this._click)}focus(){this.shadowRoot.getElementById("content").focus()}_click(e){if(this.disabled)return e.stopImmediatePropagation();this._toggleChecked(e)}_keyDown(e){if(this.disabled)return e.stopImmediatePropagation();let t=(e.code||"").toUpperCase();if(t==="SPACE"||t==="ENTER")return this._toggleChecked(e),e.preventDefault()}_toggleChecked(e){let t=this.checked;this.checked=!t,this.dispatchEvent(new CustomEvent("value-change",{detail:{old:t,new:this.checked}})),e.stopPropagation()}static get styles(){return[super.styles,d`
        :host {
          outline: none;
        }

        /* CONTAINER STYLES */

        .container {
          display: flex;
          align-items: center;
        }

        /* LABEL STYLES */

        .container > .label {
          color: var(--omni-check-label-font-color, var(--omni-font-color));
          font-family: var(--omni-check-label-font-family, var(--omni-font-family));
          font-size: var(--omni-check-label-font-size, var(--omni-font-size));
          font-weight: var(--omni-check-label-font-weight, var(--omni-font-weight));

          margin-left: var(--omni-check-label-spacing, 8px);

          cursor: pointer;
        }

        .container > .label > .hint {
          color: var(--omni-check-hint-label-font-color, var(--omni-hint-font-color));
          font-family: var(--omni-check-hint-label-font-family, var(--omni-font-family));
          font-size: var(--omni-check-hint-label-font-size, 0.86em);
          font-weight: var(--omni-check-hint-label-font-weight, 300);

          padding-top: var(--omni-check-hint-label-padding-top, 4px);
        }

        .container > .label > .error {
          color: var(--omni-check-error-label-font-color, var(--omni-error-font-color));
          font-family: var(--omni-check-error-label-font-family, var(--omni-font-family));
          font-size: var(--omni-check-error-label-font-size, 0.86em);
          font-weight: var(--omni-check-error-label-font-weight, 300);

          padding-top: var(--omni-check-error-label-padding-top, 4px);
        }

        /* CHECK BOX STYLES */

        .container > #content {
          box-sizing: border-box;
          cursor: pointer;

          display: flex;
          align-items: center;
          justify-content: center;

          width: var(--omni-check-width, 22px);
          height: var(--omni-check-height, 22px);

          background-color: var(--omni-check-background-color, var(--omni-background-color));

          border-width: var(--omni-check-border-width, var(--omni-border-width));
          border-style: solid;
          border-color: var(--omni-check-border-color, var(--omni-primary-color));
          border-radius: var(--omni-check-border-radius, var(--omni-border-radius));

          outline: 0;
        }

        .indicator {
          width: 100%;
          height: 100%;
        }

        .container.checked > #content > .indicator {
          border-width: var(--omni-check-indicator-border-width, 1px);
          border-style: solid;
          border-color: var(--omni-check-indicator-border-color, var(--omni-primary-color));
          border-radius: var(--omni-check-border-radius, var(--omni-border-radius));

          color: var(--omni-check-indicator-color, var(--omni-background-color));

          display: flex;
          align-items: center;
          justify-content: center;

          fill: currentColor;
        }

        /* CHECKED STATE STYLES */

        .container.checked > #content {
          background-color: var(--omni-check-checked-background-color, var(--omni-primary-color));
        }
        /* INDETERMINATE STATE STYLES */

        .container.indeterminate > #content {
          background-color: var(--omni-check-indeterminate-background-color, var(--omni-primary-color));
          color: var(--omni-check-indicator-color, var(--omni-background-color));
        }

        .container.indeterminate > #content > .indicator {
          color: var(--omni-check-indicator-color, var(--omni-background-color));
          fill: currentColor;
        }

        /* HOVER STATE STYLES */

        .container > #content:hover {
          box-shadow: var(--omni-check-hover-box-shadow, var(--omni-box-shadow));
          background-color: var(--omni-check-hover-background-color, var(--omni-box-shadow-color));
        }

        .container.checked:hover > #content {
          background-color: var(--omni-check-checked-background-color, var(--omni-primary-color));
        }

        .container.checked.disabled:hover > #content {
          background-color: var(--omni-check-disabled-background-color, var(--omni-disabled-background-color));
        }

        .container.indeterminate:hover > #content {
          background-color: var(--omni-check-indeterminate-background-color, var(--omni-primary-color));
        }

        .container.disabled.indeterminate:hover > #content {
          background-color: var(--omni-check-disabled-background-color, var(--omni-disabled-background-color));
        }

        /* DISABLED STATE STYLES */

        .container.disabled > #content {
          cursor: default;
          border-color: var(--omni-check-disabled-border-color, var(--omni-disabled-background-color));
          background-color: var(--omni-check-disabled-background-color, var(--omni-disabled-background-color));
        }

        .container.disabled:hover > #content {
          box-shadow: none;
        }

        .container.checked.disabled > #content > .indicator {
          border-color: transparent;
        }
      `]}render(){return i`
      <div
        class=${h({container:!0,indeterminate:this.indeterminate,checked:this.checked,disabled:this.disabled})}>
        <div id="content" @keydown="${this._keyDown}">
          <div class="indicator">
            ${this.indeterminate?i`
                  <slot name="indeterminate_icon">
                    <omni-indeterminate-icon></omni-indeterminate-icon>
                  </slot>
                `:this.checked?i`
                  <slot name="check_icon">
                    <omni-check-icon></omni-check-icon>
                  </slot>
                `:c}
          </div>
        </div>
        <label class="label">
          ${this.label} ${this.hint&&!this.error?i`<div class="hint">${this.hint}</div>`:c}
          ${this.error?i`<div class="error">${this.error}</div>`:c}
        </label>
      </div>
    `}};r([n({type:String,reflect:!0})],o.prototype,"label",2),r([n({type:Object,reflect:!0})],o.prototype,"data",2),r([n({type:String,reflect:!0})],o.prototype,"hint",2),r([n({type:String,reflect:!0})],o.prototype,"error",2),r([n({type:Boolean,reflect:!0})],o.prototype,"checked",2),r([n({type:Boolean,reflect:!0})],o.prototype,"disabled",2),r([n({type:Boolean,reflect:!0})],o.prototype,"indeterminate",2),o=r([s("omni-check")],o);export{o as a};
//# sourceMappingURL=chunk.CY4Y3IGB.js.map
