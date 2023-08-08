import{h as p}from"./chunk.6C4LMRM7.js";import{a as h,b as i}from"./chunk.S2K25ADN.js";import{a,b as n,e as l}from"./chunk.L3RZWW2F.js";import{j as t,m as r,p as d}from"./chunk.BF43NN75.js";r();d();var e=class extends p{constructor(){super(...arguments);this.buttonAlignment="right"}connectedCallback(){super.connectedCallback(),this.addEventListener("animationend",this._animationCompleted.bind(this),{capture:!0})}disconnectedCallback(){this.removeEventListener("animationend",this._animationCompleted.bind(this)),super.disconnectedCallback()}_headerClick(o){console.log("header clicked"),o.stopPropagation(),!this.disabled&&(this.expanded?this._collapse():this._expand())}_animationCompleted(){this.hasAttribute("expanding")&&(this.removeAttribute("expanding"),this.expanded=!0),this.hasAttribute("collapsing")&&(this.removeAttribute("collapsing"),this.expanded=!1)}_expand(){console.log("expander called"),!(this.expanded===!0||this.hasAttribute("expanding"))&&(this.removeAttribute("collapsing"),this.setAttribute("expanding",""),this.dispatchEvent(new CustomEvent("expand",{detail:{label:this.label}})))}_collapse(){console.log("collapse called"),!(this.expanded===!1||this.hasAttribute("collapsing"))&&(this.removeAttribute("expanding"),this.setAttribute("collapsing",""),this.dispatchEvent(new CustomEvent("collapse",{detail:{label:this.label}})))}static get styles(){return[super.styles,a`
				:host {
					min-height: var(--theme-expander-header-height, 50px);
					max-height: var(--theme-expander-header-height, 50px);
				}
			`,a`

            
                :host {
					display: flex;
					flex-direction: column;
					justify-content: flex-start;
					align-items: stretch;
					width: var(--omni-expander-width, 100%);
					background: var(--omni-expander-background-color, var(--omni-background-color));
                }

                :host([expanded]) {
					max-height: unset;
					height: var(--omni-expander-height, 200px);
				}

                /* HEADER STYLES */

                :host > .header {
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: center;
					width: var(--omni-expander-header-width, 100%);
					height: var(--omni-expander-header-height, 50px);
					padding: var(--omni-expander-header-padding, 10px);
					border-top: var(--omni-expander-border-top, 1px solid var(--omni-primary-color));
					cursor: pointer;
				}

                :host > .header:hover {
					background: var(--omni-expander-header-hover-color, var(--omni-background-hover-color));
				}

                
                :host > .header > omni-label {
                    /*
                    color: var(--omni-expander-header-font-color, black);
					font-size: var(--omni-expander-header-font-size, 14px);
					font-weight: var(--omni-expander-header-font-weight, bold);*/
					margin-right: auto;
					cursor: pointer;
                }

                :host([expanded]) > .header {
					border-bottom-left-radius: 0px;
					border-bottom-right-radius: 0px;
                }

                :host([disabled]) > .header {
                    background: var(--omni-expander-header-disabled-background ,var(--omni-disabled-background-color));
                }

                /* EXPANDER CONTENT STYLES */
                :host > .expander-content {
                    border-left: var(--omni-expander-content-border, 1px solid var(--omni-primary-color));
                    border-right: var(--omni-expander-content-border, 1px solid var(--omni-primary-color));
                    border-top: var(--omni-expander-content-border, 1px solid var(--omni-primary-color));
                    align-content: flex-start;
                    padding: var(--omni-expander-content-padding, 10px);
                }

                :host(:not([expanded])) > .expander-content {
					overflow: hidden;
					padding-top: var(--omni-expander-content-padding-top, 0px);
					padding-bottom: var(--omni-expander-content-padding-bottom, 0px);
				}



                /* HEADER ICON */

                .header-icon-container {
                    display: inline-flex;
                    flex: 0 0 auto;
                    align-items: center;
                    cursor: pointer;
                    padding: var(--omni-expander-header-icon-container-padding, 10px 10px);
                }

                ::slotted([slot='header_icon']) {
                    width: 20px;
                    height: 20px;
                }


                /* EXPAND ICON */
                .expand-icon-container {
                    display: inline-flex;
                    flex: 0 0 auto;
                    align-items: center;
                    cursor: pointer;
                    padding: var(--omni-expander-header-icon-container-padding, 10px 10px);
                }

                .expand-icon {
                    width: var(--omni-expander-header-icon-width, 20px);
                    height: var(--omni-expander-header-icon-height, 20px);
                    fill: var(--omni-expander-header-icon-color, var(--omni-primary-color));
                }

                ::slotted([slot='chip_icon']) {
                    width: var(--omni-chip-icon-width, 24px);
                  }

                /* ANIMATIONS */

				:host([expanding]) {
					animation: expand 0.5s;
					animation-timing-function: cubic-bezier(0.2, 0.8, 0.5, 1);
					animation-fill-mode: forwards;
				}

                :host([expanding]) > .expander-content {
					transition: padding linear 0.2s;
					padding-top: var(--theme-container-padding-top, 10px);
					padding-bottom: var(--theme-container-padding-bottom, 10px);
				}
                
				:host([collapsing]) > .expander-content {
					overflow: hidden;
				}

                /* Hide scrollbar for Chrome, Safari and Opera */
				:host([collapsing]) > .expander-content::-webkit-scrollbar {
					display: none;
				}

				/* Hide scrollbar for IE and Edge */
				:host([collapsing]) > .expander-content {
					-ms-overflow-style: none;
				}

				:host([collapsing]) {
					animation: collapse 0.5s;
					animation-timing-function: cubic-bezier(0.2, 0.8, 0.5, 1);
					animation-fill-mode: forwards;
				}

                @keyframes expand {
					0% {
						max-height: var(--omni-expander-header-height, 50px);
						height: var(--omni-expander-header-height, 50px);
					}
					99% {
						max-height: var(--omni-expander-expanding-max-height, 100vh);
						height: var(--omni-expander-height, 200px);
					}
					100% {
						max-height: unset;
						height: var(--omni-expander-height, 200px);
					}
				}

				@keyframes collapse {
					0% {
						max-height: var(--omni-expander-height, 200px);
						overflow: hidden;
					}
					100% {
						max-height: var(--omni-expander-header-height, 50px);
						overflow: hidden;
					}
				}

            `]}render(){return n`
        <div class="header" @click="${o=>this._headerClick(o)}">
            ${this._renderHeader()}
        </div>
        <div class="expander-content">
            <slot></slot>
        </div>		

        `}_renderHeader(){return n`
        ${this.buttonAlignment==="left"?n`<div class='expand-icon-container'><slot name='expand-icon'><omni-chevron-down-icon class='expand-icon'></omni-chevron-down-icon></slot></div>`:this._renderIcon()}
        ${this.label?n`<omni-label label="${this.label}"></omni-label>`:l}
        ${this.buttonAlignment==="right"?n`<div class='expand-icon-container'><slot name='expand-icon'><omni-chevron-down-icon class='expand-icon'></omni-chevron-down-icon></slot></div>`:this._renderIcon()}
        `}_renderIcon(){return n`
        <div class='header-icon-container'>
            <slot name='header-icon'></slot>
        </div>
        `}};t([i({type:String,reflect:!0})],e.prototype,"label",2),t([i({type:Boolean,reflect:!0})],e.prototype,"expanded",2),t([i({type:Boolean,reflect:!0})],e.prototype,"disabled",2),t([i({type:String,reflect:!0,attribute:"button-alignment"})],e.prototype,"buttonAlignment",2),e=t([h("omni-expander")],e);export{e as a};
//# sourceMappingURL=chunk.J3C6LRMJ.js.map
