import{a as m}from"./chunk.I4G3FJEU.js";import{i as u}from"./chunk.P6J7VJ5B.js";import{a as p,b as a}from"./chunk.Y6UVSDXK.js";import{a as c,d as o,g as i}from"./chunk.UDCULUBW.js";import{j as r,m as l,p as d}from"./chunk.BF43NN75.js";l();d();var n=class extends u{connectedCallback(){super.connectedCallback()}static get styles(){return[super.styles,c`
        .loading {
          width: var(--omni-render-element-loading-indicator-width, 50px);
        }
      `]}renderLoading(){return o`<slot name="loading_indicator"><omni-loading-icon class="loading"></omni-loading-icon></slot>`}async renderAsync(){return this._clearElements(),await this._internalRenderer()}_setChildInstance(e){this._clearElements(),e&&this.renderRoot.appendChild(e)}async _updateChildInstance(e){await this.updateComplete,this._setChildInstance(e)}async _internalRenderer(){try{let e=this.data?await this.data:void 0,t=this.renderer?await this.renderer(e):void 0;return t&&t instanceof HTMLElement?(this._updateChildInstance(t),i):t&&typeof t=="string"?o`${m(t)}`:t||i}catch(e){return console.error(e),i}}_clearElements(e=void 0){e||(e=this.renderRoot);let t=e.lastElementChild;for(;t;){let s=t;t=t.previousElementSibling,s.hasAttribute("slot")||e.removeChild(s)}}};r([a({type:Object,reflect:!1})],n.prototype,"renderer",2),r([a({type:Object,reflect:!0})],n.prototype,"data",2),n=r([p("omni-render-element")],n);export{n as a};
//# sourceMappingURL=chunk.VXWK2PFN.js.map
