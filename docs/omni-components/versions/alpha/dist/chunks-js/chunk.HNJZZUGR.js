import{h as m}from"./chunk.PNTHLTQK.js";import{a as p,c as h}from"./chunk.S2K25ADN.js";import{a as d,b as r,e as c}from"./chunk.L3RZWW2F.js";import{j as b,m as l,p as s}from"./chunk.BF43NN75.js";l();s();var o=class extends m{connectedCallback(){super.connectedCallback(),this._observer=new MutationObserver(a=>{var t;for(let i of a)i.type==="attributes"&&this.requestUpdate();(t=this._observer)==null||t.observe(this,{attributes:!0,attributeFilter:["data-omni-tab-label"],subtree:!0})})}disconnectedCallback(){this._observer&&this._observer.disconnect(),super.disconnectedCallback()}selectTab(a){if(!a)return;let t=Array.from(this.children),i=t.find(n=>n.hasAttribute(e));t.forEach(n=>{n.removeAttribute(e)}),a.setAttribute(e,""),this.dispatchEvent(new CustomEvent("tab-select",{detail:{previous:i,selected:a}})),this.requestUpdate()}static get styles(){return[super.styles,d`
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
                min-width: var(--omni-tab-group-tab-min-width, 100px);
                max-width: var(--omni-tab-group-tab-max-width, 300px);
            }

            :host > .tab-bar > .tab:hover {
                background-color: var(--omni-tab-group-tab-hover-background-color, var(--omni-accent-hover-color));
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

            :host > .tab-bar > .tab > .tab-label-container > .tab-label.selected {
                color: var(--omni-tab-group-tab-selected-font-color, var(--omni-accent-color));
            }

            :host > .tab-bar > div > .indicator {
                height: var(--omni-tab-group-tab-indicator-height, 4px);
                background-color: var(--omni-tab-group-tab-indicator-color, var(--omni-primary-color));
                border-radius: var(--omni-tab-group-tab-indicator-border-radius, 100px 100px 0 0);
                width: var(--omni-tab-group-tab-indicator-width, 100%);
            }

            :host > .tab-slot {
                display: flex;
                flex: 1 1 auto;
					
                width: 100%;
                height: 100%;

                padding-left: var(--omni-tab-group-tab-content-padding-left, 10px);
                padding-right: var(--omni-tab-group-tab-content-padding-right, 10px);
                padding-top: var(--omni-tab-group-tab-content-padding-top, 10px);
                padding-bottom: var(--omni-tab-group-tab-content-padding-bottom, 10px);
            }

            ::slotted(*:not([data-omni-tab-active])) {
                display: none !important;
            }

        `]}render(){let a=Array.from(this.children);return!a.find(t=>t.hasAttribute(e))&&a.length>0&&a[0].setAttribute(e,""),r`
            <div class='tab-bar'>
                ${a.map(t=>r`
                    <div class='tab' @click='${()=>this.selectTab(t)}'>
                        <div class="tab-label-container">
                            <div class="tab-label ${t.hasAttribute(e)?"selected":""}">${t.getAttribute("data-omni-tab-label")}</div>
                        </div>
                        ${t.hasAttribute(e)?r`<div class="indicator"></div>`:c}
                    </div>
                `)}
            </div>

			<slot @slotchange="${()=>this.requestUpdate()}"></slot>
        `}};b([h()],o.prototype,"_observer",2),o=b([p("omni-tab-group")],o);var e="data-omni-tab-active";export{o as a,e as b};
//# sourceMappingURL=chunk.HNJZZUGR.js.map
