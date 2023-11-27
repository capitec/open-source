import{h as s}from"./chunk.LAXESDIJ.js";import{a as h,b as e}from"./chunk.2KHELDCI.js";import{a as d,b as r,e as n}from"./chunk.6H2RNHNO.js";import{j as t,m as i,p as o}from"./chunk.BF43NN75.js";i();o();var a=class extends s{static get styles(){return[super.styles,d`

                /* host styles */
                :host {
                    color: var(--omni-tab-header-font-color, var(--omni-font-color));
                    font-family: var(--omni-tab-header-font-family, var(--omni-font-family));
                    font-size: var(--omni-tab-header-font-size, var(--omni-font-size));
                    font-weight: var(--omni-tab-header-font-weight, var(--omni-font-weight));
                    min-width: var(--omni-tab-header-min-width, 50px);
                    width: var(--omni-tab-header-width, 100%);
                    height: var(--omni-tab-header-height, 100%);
                    padding: var(--omni-tab-header-padding);
                    cursor: pointer;
                }

                :host([data-disabled]){
                    cursor: var(--omni-tab-header-disabled-cursor, not-allowed);
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
                    height: calc(var(--omni-tab-header-height, 100%) - var(--omni-tab-header-indicator-height, 4px));
                }
            
                /* Tab */
                :host > .tab {
                    height: var(--omni-tab-header-tab-height, 100%);
                    min-width: var(--omni-tab-header-tab-min-width, auto);
                    max-width: var(--omni-tab-header-tab-max-width, auto);
                    margin: var(--omni-tab-header-tab-margin, 6px);
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
                    flex-shrink: 0;
                    height: var(--omni-tab-header-indicator-bar-height, 4px);
                    border-radius: var(--omni-tab-header-indicator-bar-border-radius, 100px 100px 0 0);
                    width: var(--omni-tab-header-indicator-bar-width, 100%);
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
                ${this.hasAttribute("data-active")?r`<div class="indicator"></div>`:n}
            </div>
        `}};t([e({type:String,reflect:!0})],a.prototype,"for",2),t([e({type:Object,reflect:!1})],a.prototype,"data",2),a=t([h("omni-tab-header")],a);export{a};
//# sourceMappingURL=chunk.5EHGB5Q2.js.map
