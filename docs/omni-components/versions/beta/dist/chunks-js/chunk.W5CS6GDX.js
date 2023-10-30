import{h as l}from"./chunk.PNTHLTQK.js";import{a as s,b as o}from"./chunk.S2K25ADN.js";import{a,b as t,e as p}from"./chunk.L3RZWW2F.js";import{j as i,m as r,p as d}from"./chunk.BF43NN75.js";r();d();var e=class extends l{constructor(){super(...arguments);this.buttonAlignment="right"}connectedCallback(){super.connectedCallback(),this.addEventListener("animationend",this._animationCompleted.bind(this),{capture:!0})}disconnectedCallback(){this.removeEventListener("animationend",this._animationCompleted.bind(this)),super.disconnectedCallback()}_headerClick(n){n.stopPropagation(),!this.disabled&&(this.expanded?this._collapse():this._expand())}_animationCompleted(){this.hasAttribute("expanding")&&(this.removeAttribute("expanding"),this.expanded=!0),this.hasAttribute("collapsing")&&(this.removeAttribute("collapsing"),this.expanded=!1)}_expand(){let{matches:n}=window.matchMedia("(prefers-reduced-motion: no-preference)");if(n){if(this.expanded===!0||this.hasAttribute("expanding"))return;this.removeAttribute("collapsing"),this.setAttribute("expanding","")}else this.expanded=!0;this.dispatchEvent(new CustomEvent("expand"))}_collapse(){let{matches:n}=window.matchMedia("(prefers-reduced-motion: no-preference)");if(n){if(this.expanded===!1||this.hasAttribute("collapsing"))return;this.removeAttribute("expanding"),this.setAttribute("collapsing","")}else this.expanded=!1;this.dispatchEvent(new CustomEvent("collapse"))}static get styles(){return[super.styles,a`
				:host {
					min-height: var(--omni-expander-header-min-height, 50px);
					max-height: var(--omni-expander-header-max-height, 50px);
				}
			`,a`

            
                :host {
					display: flex;
					flex-direction: column;
					justify-content: flex-start;
					align-items: stretch;
					width: var(--omni-expander-width, 100%);
					background: var(--omni-expander-background, var(--omni-background-color));
                }

                :host([expanded]) {
					max-height: unset;
					height: var(--omni-expander-expanded-height, 200px);
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
					border-top: var(--omni-expander-header-border-top, 1px solid var(--omni-primary-color));
					cursor: pointer;
				}

                :host > .header:hover {
					background: var(--omni-expander-header-hover-background, var(--omni-background-hover-color));
				}

                
                :host > .header > omni-label {
                    --omni-label-font-color: var(--omni-expander-header-label-font-color, var(--omni-font-color));
					--omni-label-default-font-size: var(--omni-expander-header-label-font-size, var(--omni-font-size));
					--omni-label-default-font-weight: var(--omni-expander-header-label-font-weight, var(--omni-font-weight));
					margin-right: auto;
					cursor: pointer;
                }

                :host([expanded]) > .header {
					border-bottom-left-radius: 0px;
					border-bottom-right-radius: 0px;
                }

                :host([expanded]) > .header > .expand-icon-container {
					transform: rotate(180deg);
				}

				:host(:not([expanded])) > .header > .expand-icon-container {
					transform: none;
				}

                :host([disabled]) > .header {
                    background: var(--omni-expander-header-disabled-background ,var(--omni-disabled-background-color));
                }

                /* EXPANDER CONTENT STYLES */
                :host > .expander-content {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: stretch;
                    width: var(--omni-expander-content-width, 100%);
                    height: var(--omni-expander-content-height, 100%);

                    flex: 1 1 auto;

                    border-left: var(--omni-expander-content-border, 1px solid var(--omni-primary-color));
                    border-right: var(--omni-expander-content-border, 1px solid var(--omni-primary-color));
                    border-top: var(--omni-expander-content-border, 1px solid var(--omni-primary-color));

                    padding: var(--omni-expander-content-padding, 10px);
                }

                :host(:not([expanded])) > .expander-content {
					overflow: hidden;
					padding-top: var(--omni-expander-content-closed-padding-top, 0px);
					padding-bottom: var(--omni-expander-content-closed-padding-bottom, 0px);
				}

                :host([expanding]) > .expander-content,
                :host([expanded]) > .expander-content {
                    border-bottom: var(--omni-expander-content-expanded-border-bottom, 1px solid var(--omni-primary-color));
				}



                /* HEADER ICON */

                .header-icon-container {
                    display: inline-flex;
                    flex: 0 0 auto;
                    align-items: center;
                    cursor: pointer;
                    padding: var(--omni-expander-header-icon-container-padding, 10px 10px);
                }

                ::slotted([slot='header-icon']) {
                    width: var(--omni-expander-header-icon-slot-width, 20px);
                    height: var(--omni-expander-header-icon-slot-height, 20px);
                }


                /* EXPAND ICON */
                .expand-icon-container {
                    display: inline-flex;
                    flex: 0 0 auto;
                    align-items: center;
                    cursor: pointer;
                    padding: var(--omni-expander-expand-icon-container-padding, 10px 10px);
                }

                .expand-icon {
                    width: var(--omni-expander-expand-icon-width, 20px);
                    height: var(--omni-expander-expand-icon-height, 20px);
                    fill: var(--omni-expander-expand-icon-color, var(--omni-primary-color));
                }

                ::slotted([slot='expand-icon']) {
                    height: var(--omni-expander-expand-icon-height, 20px);
                    width: var(--omni-expander-expand-icon-width, 20px);
                  }

                /* ANIMATIONS */

				:host([expanding]) {
					animation: expand 0.5s;
					animation-timing-function: cubic-bezier(0.2, 0.8, 0.5, 1);
					animation-fill-mode: forwards;
				}

                :host([expanding]) > .header > .expand-icon-container {
					transition: all 0.15s linear 0s;
					transform: rotate(180deg);
				}
                
				:host([collapsing]) > .header > .expand-icon-container {
					transition: all 0.15s linear 0s;
					transform: none;
				}

                :host([expanding]) > .expander-content {
					transition: padding linear 0.2s;
					padding-top: var(--omni-expander-expanding-container-padding-top, 10px);
					padding-bottom: var(--omni-expander-expanding-container-padding-bottom 10px);
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

                @media (prefers-reduced-motion) {
                    :host([expanding]) {
                        animation: unset;
                    }

                    :host([collapsing]) {
                        animation: unset;
                    }
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

            `]}render(){return t`
        <div class="header" @click="${n=>this._headerClick(n)}">
            ${this._renderHeader()}
        </div>
        <div class="expander-content">
            <slot></slot>
        </div>		

        `}_renderHeader(){return t`
        ${this.buttonAlignment==="left"?t`<div class='expand-icon-container'><slot name='expand-icon'><omni-chevron-down-icon class='expand-icon'></omni-chevron-down-icon></slot></div>`:this._renderIcon()}
        ${this.label?t`<omni-label label="${this.label}"></omni-label>`:p}
        ${this.buttonAlignment==="right"?t`<div class='expand-icon-container'><slot name='expand-icon'><omni-chevron-down-icon class='expand-icon'></omni-chevron-down-icon></slot></div>`:this._renderIcon()}
        `}_renderIcon(){return t`
        <div class='header-icon-container'>
            <slot name='header-icon'></slot>
        </div>
        `}};i([o({type:String,reflect:!0})],e.prototype,"label",2),i([o({type:Boolean,reflect:!0})],e.prototype,"expanded",2),i([o({type:Boolean,reflect:!0})],e.prototype,"disabled",2),i([o({type:String,reflect:!0,attribute:"button-alignment"})],e.prototype,"buttonAlignment",2),e=i([s("omni-expander")],e);export{e as a};
//# sourceMappingURL=chunk.W5CS6GDX.js.map
