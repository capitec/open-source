import{a as y}from"./chunk.DUTPH62F.js";import{h as T}from"./chunk.E2CUUU4Y.js";import{a as A,c as g}from"./chunk.Y6UVSDXK.js";import{a as v,d as l,g as p}from"./chunk.UDCULUBW.js";import{j as b,m as f,p as m}from"./chunk.BF43NN75.js";f();m();var n=class extends T{connectedCallback(){super.connectedCallback(),this._observer=new MutationObserver(e=>{var r;for(let t of e)t.type==="attributes"&&this.requestUpdate();(r=this._observer)==null||r.observe(this,{attributes:!0,attributeFilter:["header","active","disabled"],subtree:!0})})}disconnectedCallback(){this._observer&&this._observer.disconnect(),super.disconnectedCallback()}selectTab(e){var u,h;if(!e||e.classList.contains("tab-bar"))return;e=e.closest("omni-tab-header");let r=Array.from(this.children),t;if(e&&(t=r.find(a=>a.id&&a.id===e.for||a===e.data)),!t||t.hasAttribute(c))return;let i=[...r.filter(a=>a.slot==="header"),...((h=(u=this.shadowRoot)==null?void 0:u.querySelector("slot[name=header]"))==null?void 0:h.children)||[]],o=r.find(a=>a.hasAttribute(s));i.forEach(a=>{a.removeAttribute(d),a.requestUpdate()}),r.forEach(a=>{a.removeAttribute(s)}),t.setAttribute(s,""),e.setAttribute(d,""),e.requestUpdate(),this.dispatchEvent(new CustomEvent("tab-select",{detail:{previous:o,selected:t}})),this.requestUpdate()}static get styles(){return[super.styles,v`
                :host {
                    width:100%;
                    height:100%;
                    overflow: hidden;
                }

                /* Tab bar */
                :host > .tab-bar {
                    display: flex;
                    flex-shrink: 0;
                    flex-direction: row;
                    align-items: center;
                    overflow-x: var(--omni-tab-group-tab-bar-overflow-x, auto);
                    overflow-y: var(--omni-tab-group-tab-bar-overflow-y, hidden);
                    width: var(--omni-tab-group-tab-bar-width, 100%);
                    height: var(--omni-tab-group-tab-bar-height, 50px);
                    border-bottom: var(--omni-tab-group-tab-bar-border-bottom, none);
                    background: var(--omni-tab-group-tab-bar-background-color, transparent);
                }

                /* CONTENT */
                ::slotted(*:not([active]):not([slot])) {
                    display: none !important;
                }
            `]}render(){let e=Array.from(this.querySelectorAll("omni-tab-header")).filter(t=>t.slot==="header"),r=Array.from(this.querySelectorAll("omni-tab"));if(r.length>0){if(r.find(t=>t.hasAttribute(s)||t.active)){let t=r.find(o=>o.hasAttribute(s)||o.active),i=e.find(o=>o.for===(t==null?void 0:t.id));i&&(i.setAttribute(d,""),i.requestUpdate())}else{r[0].setAttribute(s,"");let t=e.find(i=>i.for===r[0].id);t&&(t.setAttribute(d,""),t.requestUpdate())}e.length>0&&r.filter(t=>t.hasAttribute(c)).forEach(t=>{let i=e.find(o=>o.for===t.id);i&&(i.setAttribute(q,""),i.requestUpdate())})}return l`
                <div class='tab-bar' @click="${t=>this.selectTab(t.target)}">
                    <slot name='header' @slotchange="${()=>this.requestUpdate()}">
                        ${r.map(t=>t.hasAttribute("header")?l`
                                    <omni-tab-header ?data-active="${t.hasAttribute(s)}" for="${y(t.id)}" .data="${t}"  ?data-disabled="${t.hasAttribute(c)}" >
                                    ${t.getAttribute("header")}
                                    </omni-tab-header>
                        `:p)}
                    </slot>
                </div>
                <slot @slotchange="${()=>this.requestUpdate()}"></slot>
        `}};b([g()],n.prototype,"_observer",2),n=b([A("omni-tab-group")],n);var s="active",c="disabled",d="data-active",q="data-disabled";export{n as a,s as b,c};
//# sourceMappingURL=chunk.HQSFQJTU.js.map
