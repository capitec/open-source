import{a as b}from"./chunk.2HYOR3YM.js";import{h}from"./chunk.CWNKFZ3E.js";import{a as m,b as i}from"./chunk.S2K25ADN.js";import{a as s,b as t,d as c}from"./chunk.F6MIXR4E.js";import{j as n,m as l,p as d}from"./chunk.BF43NN75.js";l();d();var r=class extends h{connectedCallback(){super.connectedCallback(),this.tabIndex=this.disabled?-1:0,this.addEventListener("click",this._click)}focus(){var o,e;(e=(o=this.shadowRoot)==null?void 0:o.getElementById("content"))==null||e.focus()}_click(o){if(this.disabled)return o.stopImmediatePropagation();this._toggleChecked(o)}_keyDown(o){if(this.disabled)return o.stopImmediatePropagation();let e=(o.code||"").toUpperCase();if(e==="SPACE"||e==="ENTER")return this._toggleChecked(o),o.preventDefault()}_toggleChecked(o){let e=this.checked;this.checked=!e,this.dispatchEvent(new CustomEvent("value-change",{detail:{old:e,new:this.checked}})),o.stopPropagation()}static get styles(){return[super.styles,s`
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
      `]}render(){var o,e,a;return t`
      <div
        class=${b({container:!0,indeterminate:(o=this.indeterminate)!=null?o:!1,checked:(e=this.checked)!=null?e:!1,disabled:(a=this.disabled)!=null?a:!1})}>
        <div id="content" @keydown="${this._keyDown}">
          <div class="indicator">
            ${this.indeterminate?t`
                  <slot name="indeterminate_icon">
                    <omni-indeterminate-icon></omni-indeterminate-icon>
                  </slot>
                `:this.checked?t`
                  <slot name="check_icon">
                    <omni-check-icon></omni-check-icon>
                  </slot>
                `:c}
          </div>
        </div>
        <label class="label">
          ${this.label} ${this.hint&&!this.error?t`<div class="hint">${this.hint}</div>`:c}
          ${this.error?t`<div class="error">${this.error}</div>`:c}
        </label>
      </div>
    `}};n([i({type:String,reflect:!0})],r.prototype,"label",2),n([i({type:Object,reflect:!0})],r.prototype,"data",2),n([i({type:String,reflect:!0})],r.prototype,"hint",2),n([i({type:String,reflect:!0})],r.prototype,"error",2),n([i({type:Boolean,reflect:!0})],r.prototype,"checked",2),n([i({type:Boolean,reflect:!0})],r.prototype,"disabled",2),n([i({type:Boolean,reflect:!0})],r.prototype,"indeterminate",2),r=n([m("omni-check")],r);export{r as a};
//# sourceMappingURL=chunk.OU4BG63S.js.map
