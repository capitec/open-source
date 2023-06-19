import{h as v}from"./chunk.PNTHLTQK.js";import{a as m,c as h}from"./chunk.S2K25ADN.js";import{a as c,b as o,e as d}from"./chunk.L3RZWW2F.js";import{j as b,m as s,p as l}from"./chunk.BF43NN75.js";s();l();var r=class extends v{connectedCallback(){super.connectedCallback(),this._observer=new MutationObserver(a=>{var t;for(let i of a)i.type==="attributes"&&this.requestUpdate();(t=this._observer)==null||t.observe(this,{attributes:!0,attributeFilter:["data-omni-tab-label"],subtree:!0})})}disconnectedCallback(){this._observer&&this._observer.disconnect(),super.disconnectedCallback()}selectTab(a){if(!a)return;let t=Array.from(this.children),i=t.find(n=>n.hasAttribute(e));t.forEach(n=>{n.removeAttribute(e)}),a.setAttribute(e,""),this.dispatchEvent(new CustomEvent("tab-select",{detail:{previous:i,selected:a}})),this.requestUpdate()}static get styles(){return[super.styles,c`
            :host {
                width:100%;
                height:100%;
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

            /* Tab */
            :host > .tab-bar > .tab {
                height: var(--omni-tab-group-tab-height, 100%);
                min-width: var(--omni-tab-group-tab-min-width, auto);
                max-width: var(--omni-tab-group-tab-max-width, auto);
                margin: var(--omni-tab-group-tab-margin, 6px);
            }

            /* Added to resolve sticky hover state on mobile devices */
            @media (hover: hover) {
                :host > .tab-bar > .tab:hover {
                    background-color: var(--omni-tab-group-tab-hover-background-color, var(--omni-accent-hover-color));
                }
            }

            :host > .tab-bar > .tab > .tab-label-container {
                display: flex;
                justify-content: center;
                align-items: center;
                height: calc(var(--omni-tab-group-tab-label-container-height, 100%) - var(--omni-tab-group-tab-tab-indicator-height, 4px));
                cursor: pointer;
            }

            :host > .tab-bar > .tab > .tab-label-container > .tab-label {
                font-size: var(--omni-tab-group-tab-label-font-size, var(--omni-font-size));
                font-weight: var(--omni-tab-group-tab-label-font-weight, var(--omni-font-weight));
                color: var(--omni-tab-group-tab-label-font-color, var(--omni-font-color));
                font-family: var(--omni-tab-group-tab-label-font-family, var(--omni-font-family));
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;

            }

            :host > .tab-bar > .tab > .tab-label-container > .tab-label.active {
                color: var(--omni-tab-group-tab-active-font-color, var(--omni-accent-color));
            }

            :host > .tab-bar > div > .indicator {
                height: var(--omni-tab-group-tab-indicator-height, 4px);
                background-color: var(--omni-tab-group-tab-indicator-color, var(--omni-primary-color));
                border-radius: var(--omni-tab-group-tab-indicator-border-radius, 100px 100px 0 0);
                width: var(--omni-tab-group-tab-indicator-width, auto);
            }

            ::slotted(*:not([data-omni-tab-active])) {
                display: none !important;
            }

        `]}render(){let a=Array.from(this.children);return!a.find(t=>t.hasAttribute(e))&&a.length>0&&a[0].setAttribute(e,""),o`
            <div class='tab-bar'>
                ${a.map(t=>o`
                    <div class='tab' @click='${()=>this.selectTab(t)}'>
                        <div class="tab-label-container">
                            <div class="tab-label ${t.hasAttribute(e)?"active":""}">${t.getAttribute("data-omni-tab-label")}</div>
                        </div>
                        ${t.hasAttribute(e)?o`<div class="indicator"></div>`:d}
                    </div>
                `)}
            </div>

			<slot @slotchange="${()=>this.requestUpdate()}"></slot>
        `}};b([h()],r.prototype,"_observer",2),r=b([m("omni-tab-group")],r);var e="data-omni-tab-active";export{r as a,e as b};
//# sourceMappingURL=chunk.VP6HATZ4.js.map
