import{h as m}from"./chunk.6C4LMRM7.js";import{a as l,b as c,c as p}from"./chunk.S2K25ADN.js";import{a as s,b as d}from"./chunk.L3RZWW2F.js";import{j as i,m as a,p as o}from"./chunk.BF43NN75.js";a();o();var r=class extends m{constructor(){super(...arguments);this.expandMode="single"}connectedCallback(){super.connectedCallback(),this._observer=new MutationObserver(n=>{for(let e of n){let t=e.target;e.type==="attributes"&&(e.attributeName==="expanding"&&t.hasAttribute("expanding")||e.attributeName==="expanded"&&t.hasAttribute("expanded"))&&this._expanderExpanded(t)}}),this._observer.observe(this,{attributes:!0,attributeFilter:["expanded","expanding"],subtree:!0})}disconnectedCallback(){this._observer&&this._observer.disconnect(),super.disconnectedCallback()}_collapseAllExpanders(){Array.from(this.children).forEach(e=>{e.collapse()})}_expanderExpanded(n){console.log("expander expanded hit"),this.expandMode==="single"&&Array.from(this.children).forEach(t=>{t!==n&&t._collapse()})}static get styles(){return[super.styles,s`
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
            `]}render(){return d`
            <div class="group-container">		
                <slot></slot>
            </div>
        `}};i([c({type:String,reflect:!0,attribute:"expand-mode"})],r.prototype,"expandMode",2),i([p()],r.prototype,"_observer",2),r=i([l("omni-expander-group")],r);export{r as a};
//# sourceMappingURL=chunk.KEZPJAMB.js.map
