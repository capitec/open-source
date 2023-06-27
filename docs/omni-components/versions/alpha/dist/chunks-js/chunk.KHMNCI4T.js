import{h as s}from"./chunk.PNTHLTQK.js";import{a as h,b as o}from"./chunk.S2K25ADN.js";import{a as n,b as r,e as d}from"./chunk.L3RZWW2F.js";import{j as a,m as e,p as i}from"./chunk.BF43NN75.js";e();i();var t=class extends s{static get styles(){return[super.styles,n`

            /* host styles */
            :host {
                color: var(--omni-tab-header-font-color, var(--omni-font-color));
                font-family: var(--omni-tab-header-font-family, var(--omni-font-family));
                font-size: var(--omni-tab-header-font-size, var(--omni-font-size));
                font-weight: var(--omni-tab-header-font-weight, var(--omni-font-weight));
                cursor: pointer;

            }

            :host([data-disabled]){
                cursor: not-allowed;
                background-color: var(--omni-tab-header-disabled-background-color, var(--omni-disabled-background-color)); 
            }

            /*Active styles*/
            :host([data-active]){
                color: var(--omni-tab-header-active-font-color, var(--omni-primary-color));
            }

            ::slotted(*) {
                display: flex;
                justify-content: center;
                align-items: center;
                height: calc(var(--omni-tab-header-group-tab-label-container-height, 100%) - var(--omni-tab-header-group-tab-tab-indicator-height, 4px));
            }
        
            /* Tab */
            :host > .tab {
                height: var(--omni-tab-header-height, 100%);
                min-width: var(--omni-tab-header-min-width, auto);
                max-width: var(--omni-tab-header-max-width, auto);
                margin: var(--omni-tab-header-margin, 6px);
                display: flex;
                justify-content: center;
                align-items: center;
            }
        
            /* Added to resolve sticky hover state on mobile devices */
            @media (hover: hover) {
                :host(:not([data-disabled]):hover) {
                    background-color: var(--omni-tab-header-hover-background-color, var(--omni-background-hover-color));
                }
            }
        

            :host > .indicator-bar {
                height: var(--omni-tab-header-indicator-bar-height, 4px);
                border-radius: var(--omni-tab-header-indicator-bar-border-radius, 100px 100px 0 0);
                width: var(--omni-tab-header-indicator-bar-width, auto);
            }


            :host > .indicator-bar > .indicator {
                height: var(--omni-tab-header-indicator-height, 4px);
                background-color: var(--omni-tab-header-indicator-color, var(--omni-primary-color));
                border-radius: var(--omni-tab-header-indicator-border-radius, 100px 100px 0 0);
                width: var(--omni-tab-header-indicator-width, auto);
            }
      `]}render(){return r`		
            <div class='tab ${this.hasAttribute("data-disabled")?"disabled":""}'>
                <slot></slot>
            </div>
            <div class="indicator-bar">
                ${this.hasAttribute("data-active")?r`<div class="indicator"></div>`:d}
            </div>
        `}};a([o({type:String,reflect:!0})],t.prototype,"for",2),a([o({type:Object,reflect:!1})],t.prototype,"data",2),t=a([h("omni-tab-header")],t);export{t as a};
//# sourceMappingURL=chunk.KHMNCI4T.js.map
