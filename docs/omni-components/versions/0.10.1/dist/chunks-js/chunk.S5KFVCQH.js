import{h as l}from"./chunk.FMKVMQ43.js";import{a as d,b as s}from"./chunk.2KHELDCI.js";import{a as i,b as a}from"./chunk.6H2RNHNO.js";import{j as t,m as r,p as o}from"./chunk.BF43NN75.js";r();o();var e=class extends l{constructor(){super(...arguments);this.expandMode="single"}connectedCallback(){super.connectedCallback(),this.addEventListener("expand",this._expanderExpanded.bind(this),{capture:!0})}disconnectedCallback(){super.disconnectedCallback()}_expanderExpanded(p){this.expandMode==="single"&&Array.from(this.children).forEach(n=>{n!==p.target&&n._collapse()})}static get styles(){return[super.styles,i`
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
//# sourceMappingURL=chunk.S5KFVCQH.js.map
