import{a as T}from"./chunk.LB764BBD.js";import{h as q}from"./chunk.6C4LMRM7.js";import{a as A,c as g}from"./chunk.S2K25ADN.js";import{a as p,b,e as v}from"./chunk.L3RZWW2F.js";import{j as l,m as f,p as m}from"./chunk.BF43NN75.js";f();m();var d=class extends q{connectedCallback(){super.connectedCallback(),this._observer=new MutationObserver(e=>{var r;for(let t of e)t.type==="attributes"&&this.requestUpdate();(r=this._observer)==null||r.observe(this,{attributes:!0,attributeFilter:["header","active","disabled"],subtree:!0})})}disconnectedCallback(){this._observer&&this._observer.disconnect(),super.disconnectedCallback()}selectTab(e){var u,h;if(!e||e.classList.contains("tab-bar"))return;e=e.closest("omni-tab-header");let r=Array.from(this.children),t;if(e&&(t=r.find(i=>i.id&&i.id===e.for||i===e.data)),!t||t.hasAttribute(c))return;let a=[...r.filter(i=>i.slot==="header"),...((h=(u=this.shadowRoot)==null?void 0:u.querySelector("slot[name=header]"))==null?void 0:h.children)||[]],s=r.find(i=>i.hasAttribute(o));a.forEach(i=>{i.removeAttribute(n),i.requestUpdate()}),r.forEach(i=>{i.removeAttribute(o)}),t.setAttribute(o,""),e.setAttribute(n,""),e.requestUpdate(),this.dispatchEvent(new CustomEvent("tab-select",{detail:{previous:s,selected:t}})),this.requestUpdate()}static get styles(){return[super.styles,p`
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
                    width: var(--omni-tab-group-tab-bar-width, 100%);
                    height: var(--omni-tab-group-tab-bar-height, 50px);
                    border-bottom: var(--omni-tab-group-tab-bar-border-bottom, none);
                    background: var(--omni-tab-group-tab-bar-background-color, transparent);
                }

                /* CONTENT */
                ::slotted(*:not([active]):not([slot])) {
                    display: none !important;
                }
            `]}render(){let e=Array.from(this.querySelectorAll("omni-tab-header")).filter(t=>t.slot==="header"),r=Array.from(this.querySelectorAll("omni-tab"));if(r.length>0){if(r.find(t=>t.hasAttribute(o)||t.active)){let t=r.find(s=>s.hasAttribute(o)||s.active),a=e.find(s=>s.for===(t==null?void 0:t.id));a&&(a.setAttribute(n,""),a.requestUpdate())}else{r[0].setAttribute(o,"");let t=e.find(a=>a.for===r[0].id);t&&(t.setAttribute(n,""),t.requestUpdate())}e.length>0&&r.filter(t=>t.hasAttribute(c)).forEach(t=>{let a=e.find(s=>s.for===t.id);a&&(a.setAttribute(y,""),a.requestUpdate())})}return b`
                <div class='tab-bar' @click="${t=>this.selectTab(t.target)}">
                    <slot name='header' @slotchange="${()=>this.requestUpdate()}">
                        ${r.map(t=>t.hasAttribute("header")?b`
                                    <omni-tab-header ?data-active="${t.hasAttribute(o)}" for="${T(t.id)}" .data="${t}"  ?data-disabled="${t.hasAttribute(c)}" >
                                    ${t.getAttribute("header")}
                                    </omni-tab-header>
                        `:v)}
                    </slot>
                </div>
                <slot @slotchange="${()=>this.requestUpdate()}"></slot>
        `}};l([g()],d.prototype,"_observer",2),d=l([A("omni-tab-group")],d);var o="active",c="disabled",n="data-active",y="data-disabled";export{d as a,o as b,c};
//# sourceMappingURL=chunk.O4APVQFJ.js.map
