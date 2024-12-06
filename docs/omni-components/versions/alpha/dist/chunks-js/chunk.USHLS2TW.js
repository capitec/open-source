import{a as f}from"./chunk.APNKRDWQ.js";import{a as m}from"./chunk.QQ4KC6E2.js";import{a as c}from"./chunk.YTU7KEBB.js";import{a as s,d}from"./chunk.4PFNWG2J.js";import{a,d as i}from"./chunk.63YMDT6M.js";import{j as o,m as r,p as l}from"./chunk.BF43NN75.js";r();l();var t=class extends m{constructor(){super();this._boundInputEventListener=this._keyInput.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("input",this._boundInputEventListener,{capture:!0})}disconnectedCallback(){this.removeEventListener("input",this._boundInputEventListener,!0),super.disconnectedCallback()}_keyInput(){let e=this._inputElement;this.value=e==null?void 0:e.value}static get styles(){return[super.styles,a`
        .field {
          display: flex;
          justify-content: center;
          align-items: center;

          flex: 1 1 auto;

          border: none;
          background: none;
          box-shadow: none;
          outline: 0;
          padding: 0;
          margin: 0;

          text-align: var(--omni-color-field-text-align, left);

          color: var(--omni-color-field-font-color, var(--omni-font-color));
          font-family: var(--omni-color-field-font-family, var(--omni-font-family));
          font-size: var(--omni-color-field-font-size, var(--omni-font-size));
          font-weight: var(--omni-color-field-font-weight, var(--omni-font-weight));
          min-height: var(--omni-color-field-min-height, 20px);
          min-width: var(--omni-color-field-min-width, 100px);
          padding: var(--omni-color-field-padding, 10px);

          -webkit-touch-callout: var(--omni-color-field-text-select, text);
          -webkit-user-select: var(--omni-color-field-text-select, text);
          -khtml-user-select: var(--omni-color-field-text-select, text);
          -moz-user-select: var(--omni-color-field-text-select, text);
          -ms-user-select: var(--omni-color-field-text-select, text);
          user-select: var(--omni-color-field-text-select, text);
        }

        .input {
          flex: 1 1 auto;

          border: none;
          background: none;
          box-shadow: none;
          outline: 0;
          padding: 0;
          margin: 0;

          text-align: var(--omni-color-field-text-align, left);

          color: var(--omni-color-field-font-color, var(--omni-font-color));
          font-family: var(--omni-color-field-font-family, var(--omni-font-family));
          font-size: var(--omni-color-field-font-size, var(--omni-font-size));
          font-weight: var(--omni-color-field-font-weight, var(--omni-font-weight));
          height: var(--omni-color-field-picker-height, 50px);
          width: var(--omni-color-field-picker-width, 50px);
          padding: var(--omni-color-field-padding, 10px);
        }

        .input.disabled {
            color: var(--omni-color-field-disabled-font-color, #7C7C7C);
        }

        .input.error {
            color: var(--omni-color-field-error-font-color);
        }

        :host(:not([value])) input[type='color']::-webkit-color-swatch,
        :host([value='']) input[type='color']::-webkit-color-swatch {
          background-color: transparent !important;
        }
      `]}focus(e){this._inputElement?this._inputElement.focus(e):super.focus(e)}renderContent(){var e,n;return i` <label for="inputField" class="field"> ${(n=(e=this.value)==null?void 0:e.toString())==null?void 0:n.toUpperCase()} </label> `}renderControl(){let e={input:!0,disabled:this.disabled,error:this.error};return i`
      <input
        class=${c(e)}
        id="inputField"
        type="color"
        .value=${f(this.value)}
        ?disabled=${this.disabled}
        ?readOnly=${this.disabled}
        tabindex="${this.disabled?-1:0}" />
    `}};o([d("#inputField")],t.prototype,"_inputElement",2),t=o([s("omni-color-field")],t);export{t as a};
//# sourceMappingURL=chunk.USHLS2TW.js.map
