import{h as l}from"./chunk.ZTHUBORR.js";import{a as d,b as s}from"./chunk.4PFNWG2J.js";import{a as o,d as a}from"./chunk.63YMDT6M.js";import{j as t,m as r,p as i}from"./chunk.BF43NN75.js";r();i();var e=class extends l{constructor(){super(...arguments);this.expandMode="single"}connectedCallback(){super.connectedCallback(),this.addEventListener("expand",this._expanderExpanded.bind(this),{capture:!0})}disconnectedCallback(){this.removeEventListener("expand",this._expanderExpanded.bind(this),!0),super.disconnectedCallback()}_expanderExpanded(p){this.expandMode==="single"&&Array.from(this.children).forEach(n=>{n!==p.target&&n._collapse()})}static get styles(){return[super.styles,o`
                :host {
					display: flex;
					flex-direction: column;
					justify-content: stretch;
					align-items: stretch;
                    min-width: var(--omni-expander-group-container-min-width, 200px);
					min-height: var(--omni-expander-group-container-min-height, 100px);
                }

                .group-container {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: stretch;
                }

                ::slotted(*) {
					margin-bottom: var(--omni-expander-group-container-margin-bottom, 0px);
				}

				::slotted(*[expanded]) {
					flex: 1 1 auto;
				}
                
                ::slotted(omni-expander:not(:last-of-type)) {                  
                    --omni-expander-content-expanded-border-bottom : none;
                }
            `]}render(){return a`
            <div class="group-container">		
                <slot></slot>
            </div>
        `}};t([s({type:String,reflect:!0,attribute:"expand-mode"})],e.prototype,"expandMode",2),e=t([d("omni-expander-group")],e);export{e as a};
//# sourceMappingURL=chunk.6P7SUXXR.js.map
