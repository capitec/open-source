import{a as T}from"./chunk.LB764BBD.js";import{h as q}from"./chunk.PNTHLTQK.js";import{a as A,c as g}from"./chunk.S2K25ADN.js";import{a as v,b as l,e as p}from"./chunk.L3RZWW2F.js";import{j as b,m as f,p as m}from"./chunk.BF43NN75.js";f();m();var n=class extends q{connectedCallback(){super.connectedCallback(),this._observer=new MutationObserver(e=>{var r;for(let t of e)t.type==="attributes"&&this.requestUpdate();(r=this._observer)==null||r.observe(this,{attributes:!0,attributeFilter:["header","active","disabled"],subtree:!0})})}disconnectedCallback(){this._observer&&this._observer.disconnect(),super.disconnectedCallback()}selectTab(e){var h,u;if(!e||e.classList.contains("tab-bar"))return;e=e.closest("omni-tab-header");let r=Array.from(this.children),t;if(e&&(t=r.find(a=>a.id&&a.id===e.for||a===e.data)),!t||t.hasAttribute(c))return;let i=[...r.filter(a=>a.slot==="header"),...((u=(h=this.shadowRoot)==null?void 0:h.querySelector("slot[name=header]"))==null?void 0:u.children)||[]],s=r.find(a=>a.hasAttribute(o));i.forEach(a=>{a.removeAttribute(d),a.requestUpdate()}),r.forEach(a=>{a.removeAttribute(o)}),t.setAttribute(o,""),e.setAttribute(d,""),e.requestUpdate(),this.dispatchEvent(new CustomEvent("tab-select",{detail:{previous:s,selected:t}})),this.requestUpdate()}static get styles(){return[super.styles,v`
                :host {
                    width:100%;
                    height:100%;
                    overflow: hidden;
                }

                /* Tab bar */
                :host > .tab-bar {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    width: var(--omni-tabs-tab-bar-width, 100%);
                    height: var(--omni-tabs-tab-bar-height, 50px);
                    border-bottom: var(--omni-tabs-tab-bar-border-bottom, none);
                    background: var(--omni-tabs-tab-bar-background-color, transparent);
                }

                /* CONTENT */
                ::slotted(*:not([active]):not([slot])) {
                    display: none !important;
                }
            `]}render(){let e=Array.from(this.querySelectorAll("omni-tab-header")).filter(t=>t.slot==="header"),r=Array.from(this.querySelectorAll("omni-tab"));if(r.length>0){if(r.find(t=>t.hasAttribute(o)||t.active)){let t=r.find(s=>s.hasAttribute(o)),i=e.find(s=>s.for===t.id);i&&(i.setAttribute(d,""),i.requestUpdate())}else{r[0].setAttribute(o,"");let t=e.find(i=>i.for===r[0].id);t&&(t.setAttribute(d,""),t.requestUpdate())}e.length>0&&r.filter(t=>t.hasAttribute(c)).forEach(t=>{let i=e.find(s=>s.for===t.id);i&&(i.setAttribute(E,""),i.requestUpdate())})}return l`
                <div class='tab-bar' @click="${t=>this.selectTab(t.target)}">
                    <slot name='header' @slotchange="${()=>this.requestUpdate()}">
                        ${r.map(t=>t.hasAttribute("header")?l`
                                    <omni-tab-header ?data-active="${t.hasAttribute(o)}" for="${T(t.id)}" .data="${t}"  ?data-disabled="${t.hasAttribute(c)}" >
                                    ${t.getAttribute("header")}
                                    </omni-tab-header>
                        `:p)}
                    </slot>
                </div>
                <slot @slotchange="${()=>this.requestUpdate()}"></slot>
        `}};b([g()],n.prototype,"_observer",2),n=b([A("omni-tab-group")],n);var o="active",c="disabled",d="data-active",E="data-disabled";export{n as a,o as b,c};
//# sourceMappingURL=chunk.3KRFWNJ7.js.map
