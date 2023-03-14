import{a as z,b as F}from"./chunk.Y2FJIW7X.js";import{a as y}from"./chunk.E3RY574V.js";import{a as R}from"./chunk.2HYOR3YM.js";import{i as M}from"./chunk.CWNKFZ3E.js";import{a as A,b as k,c as g}from"./chunk.S2K25ADN.js";import{a as T,b as n,d as f,f as L}from"./chunk.F6MIXR4E.js";import{a as E,j as p,m as _,p as I}from"./chunk.BF43NN75.js";_();I();var m=class extends M{constructor(){super();this.attachMode="all";this.closeLabel="Close";this.spaceLabel="Space";this.clearLabel="Clear";this.ctaLabel="Enter";this.mode="none";this.currentCase="lower";this.state="none";this.returnMode="change-value";this.globalClick=this._globalClick.bind(this);this.globalFocus=this._globalFocus.bind(this)}get displayValue(){var e,o,i;return!this.target||this.returnMode==="multi-line"||this.target.hasAttribute(H)||((e=this.targetComponent)==null?void 0:e.hasAttribute(H))?"":this.target.type==="password"||((o=this.targetComponent)==null?void 0:o.hasAttribute($))||((i=this.target)==null?void 0:i.hasAttribute($))?"*".repeat(this.target.value.length):this.target.value}get displayCase(){return this.currentCase==="upper"||this.currentCase==="upper-single"?"upper":"lower"}get currentEnterKeyHint(){var o,i,a;let e=(o=this.targetComponent)!=null&&o.hasAttribute("enterkeyhint")?this.targetComponent.getAttribute("enterkeyhint"):(i=this.target)==null?void 0:i.getAttribute("enterkeyhint");return e||(((a=this.target)==null?void 0:a.type)==="search"?"search":"enter")}static create(e){if(e.parent||(e.parent=document.createElement("div"),document.body.appendChild(e.parent)),typeof e.parent=="string"&&(e.parent=document.getElementById(e.parent),!e.parent))return;let o=z();return L(n`        
                <omni-keyboard ${F(o)} id="${y(e.id)}"
                    attach-mode="${y(e.attachMode)}" 
                    clear-label="${y(e.clearLabel)}" 
                    space-label="${y(e.spaceLabel)}" 
                    action-label="${y(e.ctaLabel)}" 
                    close-label="${y(e.closeLabel)}">
                    <omni-render-element slot="clear" .renderer="${e.clear?e.clear:()=>n`${e.clearLabel}`}"></omni-render-element>
                    ${e.capsOff?n`<omni-render-element  slot="caps-off" .renderer="${e.capsOff}"></omni-render-element>`:n`<omni-caps-off-icon style="display: inherit;" slot="caps-off"></omni-caps-off-icon>`}
                    ${e.capsOn?n`<omni-render-element slot="caps-on" .renderer="${e.capsOn}"></omni-render-element>`:n`<omni-caps-on-icon style="display: inherit;" slot="caps-on"></omni-caps-on-icon>`}
                    ${e.capsOnPermanent?n`<omni-render-element slot="caps-on-permanent" .renderer="${e.capsOnPermanent}"></omni-render-element>`:n`<omni-caps-on-permanent-icon style="display: inherit;" slot="caps-on-permanent"></omni-caps-on-permanent-icon>`}
                    ${e.backspace?n`<omni-render-element slot="backspace" .renderer="${e.backspace}"></omni-render-element>`:n`<omni-backspace-icon style="display: inherit;" slot="backspace"></omni-backspace-icon>`}
                    ${e.close?n`<omni-render-element slot="close" .renderer="${e.close}"></omni-render-element>`:n`<omni-chevron-down-icon style="display: inherit;" slot="close"></omni-chevron-down-icon>`}
                    <omni-render-element slot="action-enter" .renderer="${e.ctaEnter?e.ctaEnter:()=>n`${e.ctaLabel}`}"></omni-render-element>
                    ${e.ctaDone?n`<omni-render-element slot="action-done" .renderer="${e.ctaDone}"></omni-render-element>`:n`<omni-check-icon style="display: inherit;"  slot="action-done"></omni-check-icon>`}
                    ${e.ctaGo?n`<omni-render-element slot="action-go" .renderer="${e.ctaGo}"></omni-render-element>`:n`<omni-arrow-right-icon style="display: inherit;" slot="action-go"></omni-arrow-right-icon>`}
                    ${e.ctaNext?n`<omni-render-element slot="action-next" .renderer="${e.ctaNext}"></omni-render-element>`:n`<omni-next-icon style="display: inherit;"  slot="action-next"></omni-next-icon>`}
                    ${e.ctaPrevious?n`<omni-render-element slot="action-previous" .renderer="${e.ctaPrevious}"></omni-render-element>`:n`<omni-previous-icon style="display: inherit;" slot="action-previous"></omni-previous-icon>`}
                    ${e.ctaSearch?n`<omni-render-element slot="action-search" .renderer="${e.ctaSearch}"></omni-render-element>`:n`<omni-search-icon style="display: inherit;" slot="action-search"></omni-search-icon>`}
                    ${e.ctaSend?n`<omni-render-element slot="action-send" .renderer="${e.ctaSend}"></omni-render-element>`:n`<omni-send-icon style="display: inherit;" slot="action-send"></omni-send-icon>`}
                </omni-keyboard>
            `,e.parent),o.value}connectedCallback(){super.connectedCallback(),window.addEventListener("click",this.globalClick),document.addEventListener("focus",this.globalFocus,!0)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("click",this.globalClick),document.removeEventListener("focus",this.globalFocus,!0)}_close(e=!1,o=!1){var t,s,l,r;e&&this.target&&this.target.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!0,composed:!0}));let i=this.currentEnterKeyHint==="previous",a=(t=this.targetComponent)!=null&&t.hasAttribute("tabindex")?this.targetComponent:this.target;(s=this.target)==null||s.blur(),this.target=void 0,(l=this.targetObserver)==null||l.disconnect(),this.targetObserver=void 0,this.targetComponent=void 0,(r=this.targetComponentObserver)==null||r.disconnect(),this.targetComponentObserver=void 0,this.state="none",this.mode="none",o&&a&&this._focusNext(a,i)}_focusNext(e,o=!1){let i=e,a=Number(i.getAttribute("tabindex")),t=this._findNextTabIndex(i,i,a,o,null);return t&&t.element&&t.element.focus(),t}_findNextTabIndex(e,o,i,a,t){return t=this._findNextTabIndexInChildren(e,o,i,a,t),e.parentElement?t=this._findNextTabIndex(e.parentElement,e,i,a,t):e.parentNode&&e.parentNode.host&&(t=this._findNextTabIndex(e.parentNode.host,e,i,a,t)),t}_findNextTabIndexInChildren(e,o,i,a,t){let s=e.getAttribute("tabindex");if(s){let r=Number(s),c=t&&r>i&&r<t.tabIndex||!t&&r>i;a&&(c=t&&r<i&&r>t.tabIndex||!t&&r<i),c&&(t={element:e,tabIndex:r})}let l=e.children;for(let r=0;r<l.length;r++){let c=l[r];c!==o&&(t=this._findNextTabIndexInChildren(c,c,i,a,t))}if(e.shadowRoot){let r=e.shadowRoot.children;for(let c=0;c<r.length;c++){let d=r[c];d!==o&&(t=this._findNextTabIndexInChildren(d,d,i,a,t))}}return t}async _keypress(e){var o,i,a;if(this.target){let t={start:(o=this.target.selectionStart)!=null?o:this.target.value.length,end:(i=this.target.selectionEnd)!=null?i:this.target.value.length},s=!1;if(e.detail){if(e.detail.value==="return"){let b={shiftKey:this.currentCase==="upper-single",modifierCapsLock:this.currentCase==="upper",key:"Enter",bubbles:!0,cancelable:!0,composed:!0},h=new KeyboardEvent("keydown",b);if(s=this.target.dispatchEvent(h),this.returnMode==="change-value"){this.target.dispatchEvent(new KeyboardEvent("keyup",b)),this._close(!0,!0);return}else if(this.returnMode==="multi-line"){if(!s){this.target.dispatchEvent(new KeyboardEvent("keyup",b));return}e.detail.value=`\r
`}}else if(e.detail.value==="backspace"){let b={shiftKey:this.currentCase==="upper-single",modifierCapsLock:this.currentCase==="upper",key:"Backspace",bubbles:!0,cancelable:!0,composed:!0},h={inputType:"deleteContentBackward",bubbles:!0,cancelable:!0,composed:!0},w=new KeyboardEvent("keydown",b);if(s=this.target.dispatchEvent(w),s){let B=new InputEvent("beforeinput",h);s=this.target.dispatchEvent(B)}if(!s){this.target.dispatchEvent(new KeyboardEvent("keyup",b));return}let v=this.target.value;if(t.start===0)return;let x=v;t.start===t.end?x=`${v.substring(0,t.start-1)}${v.substring(t.start)}`:x=`${v.substring(0,t.start)}${v.substring(t.end)}`,this.target.value=x,this.target.dispatchEvent(new InputEvent("input",h)),this.target.focus(),this.target.dispatchEvent(new KeyboardEvent("keyup",b)),this.requestUpdate(),await this.updateComplete,O.includes(this.target.type)&&this.target.setSelectionRange(t.start===t.end?t.start-1:t.start,t.start===t.end?t.start-1:t.start),this.target.focus(),this.requestUpdate();return}else if(e.detail.value==="clear"){let b={inputType:"deleteContent",bubbles:!0,cancelable:!0,composed:!0},h="";this.target.value=h;let w=new InputEvent("beforeinput",b);s=this.target.dispatchEvent(w),s&&this.target.dispatchEvent(new InputEvent("input",b)),this.target.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!0,composed:!0})),this.requestUpdate();return}let l={shiftKey:this.currentCase==="upper-single",modifierCapsLock:this.currentCase==="upper",key:e.detail.value==="return"?"Enter":e.detail.value,bubbles:!0,cancelable:!0,composed:!0},r={inputType:"insertText",data:e.detail.value==="return"?null:(a=e.detail.value)==null?void 0:a.toString(),bubbles:!0,cancelable:!0,composed:!0};if(!s){let b=new KeyboardEvent("keydown",l);s=this.target.dispatchEvent(b)}if(s){let b=new InputEvent("beforeinput",r);s=this.target.dispatchEvent(b)}if(!s){this.target.dispatchEvent(new KeyboardEvent("keyup",l));return}let c=this.target.value,d=c;t.start===t.end?d=`${c.substring(0,t.start)}${e.detail.value}${c.substring(t.start)}`:d=`${c.substring(0,t.start)}${e.detail.value}${c.substring(t.end)}`,this.target.value=d,this.target.dispatchEvent(new InputEvent("input",r)),this.target.dispatchEvent(new KeyboardEvent("keyup",l)),this.requestUpdate(),await this.updateComplete,O.includes(this.target.type)&&this.target.setSelectionRange(t.start+1,t.start+1),this.target.focus(),this.requestUpdate()}}this.currentCase==="upper-single"&&(this.currentCase="lower")}async _globalClick(e){var o;await this.updateComplete,e.composedPath()&&(e.composedPath().includes(this)?(o=this.target)==null||o.focus():this.target&&!e.composedPath().includes(this.target)&&this.targetComponent!==this._findActiveElement()&&this._close())}_globalFocus(){var o,i,a,t,s;let e=this._findActiveElement();if(e&&(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||((o=e==null?void 0:e.shadowRoot)==null?void 0:o.activeElement)instanceof HTMLInputElement||((i=e==null?void 0:e.shadowRoot)==null?void 0:i.activeElement)instanceof HTMLTextAreaElement)){let l=(t=(a=e==null?void 0:e.shadowRoot)==null?void 0:a.activeElement)!=null?t:e;if(this.target===l||!D.includes(l.type)||e.hasAttribute(S)||l.hasAttribute(S)||this.attachMode==="attribute"&&!(l.hasAttribute(u)||e.hasAttribute(u))||this.attachMode==="id"&&!(this.id&&(l.getAttribute(u)===this.id||e.getAttribute(u)===this.id))||l.getAttribute(u)&&l.getAttribute(u)!==this.id||e.getAttribute(u)&&e.getAttribute(u)!==this.id)return;this.target=l,this.targetComponent=e,"MutationObserver"in window&&(this.targetObserver=new MutationObserver(c=>{c.filter(d=>d.type==="attributes").find(d=>d.attributeName==="type"||d.attributeName===$)&&this.requestUpdate()}),this.targetObserver.observe(this.target,{attributes:!0}),this.targetComponentObserver=new MutationObserver(c=>{c.filter(d=>d.type==="attributes").find(d=>d.attributeName===$)&&this.requestUpdate()}),this.targetComponentObserver.observe(this.targetComponent,{attributes:!0}));let r=(s=this.targetComponent.hasAttribute(C)?this.targetComponent.getAttribute(C):this.target.getAttribute(C))!=null?s:l.inputMode;this.mode=l.type==="number"||l.type==="tel"||r==="decimal"||r==="numeric"||r==="tel"?"numeric":"alpha-numeric",this.state=this.mode,this.returnMode=this.targetComponent.hasAttribute(K)||l instanceof HTMLTextAreaElement?"multi-line":"change-value"}}_findActiveElement(e=!1){let o=document.activeElement;if(!o)return o;let i=document,a=i;for(;i;)(e||(o==null?void 0:o.shadowRoot))&&(a=i),i=o==null?void 0:o.shadowRoot,i?o=i.activeElement:o=a.activeElement;return o}_toggleCase(){this.currentCase==="lower"?this.currentCase="upper-single":this.currentCase==="upper-single"?this.currentCase="upper":this.currentCase="lower"}_toggleState(){this.state==="special"?this.state="alpha-numeric":this.state="special"}static get styles(){return[super.styles,T`
				:host {
					/* Keyboard needs to have a very high z index in order to be always on top */
					z-index: var(--omni-keyboard-z-index, 9999);
                    position: absolute;
				}

				.footer{
					position: fixed;
					left: 0;
					bottom: 0;
					width: 100%;
					background-color: transparent;
					color: white;
					text-align: center;
				}

				.shadow {
					box-shadow: -5px 0px 30px var(--omni-box-shadow-color);
					border-radius: var(--omni-keyboard-shadow-border-radius,16px 16px 0px 0px);
					padding-bottom: var(--omni-keyboard-shadow-padding-bottom,-10px);
					background: var(--omni-keyboard-shadow-background-color,var(--omni-background-color));

                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
				}

				.topbar{
					width: var(--omni-keyboard-top-bar-width, 100%);
                    padding-left: var(--omni-keyboard-top-bar-padding-left, 12px);
                    padding-right: var(--omni-keyboard-top-bar-padding-right, 5px);
					background-color: var(--omni-keyboard-top-bar-background-color,var(--omni-background-active-color));
					list-style: none;
					display: flex;
					border-radius: var(--omni-keyboard-top-bar-border-radius,10px 10px 0px 0px);
					align-items: center;
					justify-content: space-between;
					border-bottom: 3px solid var(--omni-keyboard-top-bar-border-bottom-color,var(--omni-accent-color));
				}

                
				.action-button {
					width: var(--omni-keyboard-action-button-width, 100%);
                    max-width: var(--omni-keyboard-action-button-max-width,114px);
					color: var(--omni-keyboard-action-button-color,var(--omni-background-color));
					background-color: var(--omni-keyboard-action-button-background-color,var(--omni-primary-color));
					border: none;
					text-align: center;
					font-size: var(--omni-keyboard-action-button-font-size,15px);
					font-weight: var(--omni-keyboard-action-button-font-weight,600);
					border-radius: var(--omni-keyboard-action-button-border-radius,8px);
					margin: var(--omni-keyboard-action-button-margin,var(--omni-keyboard-button-margin, 6px 7px));
					float: right;
                    cursor: pointer;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: row;
				}

                .action-fill {
                    height: var(--omni-keyboard-button-height, 40px);
                    margin: var(--omni-keyboard-button-margin, 6px 7px);
                    max-width: unset !important;
                }


                .action-icon {
                    --omni-icon-fill: var(--omni-keyboard-action-button-color,var(--omni-background-color));
                }

                .fill-space {
                    width: 100%;
                }

                .close-icon {
                    width: var(--omni-keyboard-close-icon-width, 32px);
                }

				.closeButton{
					cursor: pointer; 
					font-weight: var(--omni-keyboard-close-button-font-weight,600); 
					color: var(--omni-keyboard-close-button-color,var(--omni-primary-color)); 
					font-size: var(--omni-keyboard-close-button-font-size,16px);
				}
				
				.closer{
					display: flex;
					flex-direction: row; 
					align-items: center;
					justify-content: space-between;
					width: var(--omni-keyboard-closer-width,68px);
					padding-right: var(--omni-keyboard-closer-padding-right,81px);
                    cursor: pointer;
                    box-sizing: border-box;
				}

				.items {
					padding: 0;
					margin: 0;
					list-style: none;
					display: flex;
				}

				.firstItem{
					justify-content: flex-start; 
				}

				.secondItem{
					justify-content: flex-end; 
				}

				.wrapperContainer{
					display: flex;
					flex-direction: column; 
					align-items: center; 
					background-color: transparent;
				}

				.subWrapper{
					display: flex;
					flex-direction: row;
					justify-content: space-between;
				}

				.wrapper {
                    width: var(--omni-keyboard-wrapper-width,672px);
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: stretch;

					background: var(--omni-keyboard-background-color,var(--omni-background-color));
				}

                .special-wrapper {
                    width: var(--omni-keyboard-special-wrapper-width,355px);
                }

                .numeric-wrapper {
                    width: var(--omni-keyboard-numeric-wrapper-width,224px);
                }

				.wrapper:first-child {
					margin-top: 0;
				}
				
				.keyrow {
					display: flex; 
					justify-content: center; /* space-between ? */
					margin: var(--omni-keyboard-key-row-margin, 0px 15px);
					width: var(--omni-keyboard-key-row-width,auto);
                    align-items: stretch;
				}

                .pad-top {
                    padding-top: var(--omni-keyboard-row-padding-top, 10px);
                }

                .pad-bottom {
                    padding-bottom: var(--omni-keyboard-row-padding-bottom, 10px);
                }

                .themed-icon {
                    --omni-icon-fill: var(--omni-keyboard-icons-color,var(--omni-primary-color, currentColor));
                }

                .stretch-icon {
                    height: 100%;
                }

                .flex-text-center {                    
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    display: flex;
                }
            
                /* Mobile device styling */
                @media screen and (max-width: 766px) {

                    .topbar{
                        height: var(--omni-keyboard-top-bar-mobile-height, 24px);
                        border-radius: var(--omni-keyboard-top-bar-mobile-border-radius,8px 8px 0px 0px);
                        padding-right: 0px;
                    }

                    :host {
                        --omni-icon-size-medium: 20px;
                    }

                    .wrapper {
                        width: var(--omni-keyboard-wrapper-width,auto);
                        background: var(--omni-keyboard-background-color,var(--omni-background-color));
                    }

                    .keyrow {
                        margin: var(--omni-keyboard-mobile-key-row-margin,8px 36px);
                        width: var(--omni-keyboard-key-row-width,auto);
                        align-items: center;
                    }

                    .pad-top {
                        padding-top: 0px;
                    }

                    .pad-bottom {
                        padding-bottom: 0px;
                    }

                    .special-row {
                        margin: var(--omni-keyboard-mobile-special-key-row-margin,8px 59px);
                    }

                    .shadow {
                        width:100%
                    }

                   .action-button {
                        height: var(--omni-keyboard-mobile-action-button-height, 28px);
                        margin: var(--omni-keyboard-mobile-action-button-margin, 2px);
                        max-width: var(--omni-keyboard-mobile-action-button-max-width, 60px);
                        
                   }

                   .close-icon {
                        width: var(--omni-keyboard-mobile-close-icon-width, 24px);
                   }

                   .closeButton {
                        font-size: var(--omni-keyboard-close-button-font-size,16px);
                    }
                
                }

                /* Small mobile device */
                @media screen and (max-width: 355px) {

                    :host {
                        --omni-icon-size-medium: 20px;
                    }
                    
                    .keyrow {
                        margin: var(--omni-keyboard-mobile-small-key-row-margin,8px 9px);
                    }

                    .special-row {
                        margin: var(--omni-keyboard-mobile-small-key-row-margin,8px 17px);
                    }

                    .action-button {
                        font-size: x-small;
                        height: var(--omni-keyboard-mobile-small-action-button-height, 20px);
                        max-width: var(--omni-keyboard-mobile-small-action-button-max-width, 36px);
                        --omni-icon-size-medium: 15px;
                    }

                    .topbar > omni-label {
                        --omni-label-default-font-size: x-small;
                    }
                }

			`]}render(){return this.mode==="alpha-numeric"&&this.state==="alpha-numeric"?n`
			<div class="footer">
				<div class="wrapperContainer">
					<div class="shadow">
						<div class="topbar">
							<omni-label label="${this.displayValue}"></omni-label>
							<div class="closer" @click="${this._close}">
								<omni-label class="closeButton" label="${this.closeLabel}"></omni-label>
								<omni-icon size="medium" class="themed-icon">${this.renderClose()}</omni-icon>
							</div>
						</div>
						<div class="wrapper">
							<div class="keyrow pad-top" >
								<omni-keyboard-button @keyboard-click="${this._keypress}" mode="alpha" label="1"
									case="${this.displayCase}">
								</omni-keyboard-button>
								<omni-keyboard-button @keyboard-click="${this._keypress}" mode="alpha" label="2"
									case="${this.displayCase}">
								</omni-keyboard-button>
								<omni-keyboard-button @keyboard-click="${this._keypress}" mode="alpha" label="3"
									case="${this.displayCase}">
								</omni-keyboard-button>
								<omni-keyboard-button @keyboard-click="${this._keypress}" mode="alpha" label="4"
									case="${this.displayCase}">
								</omni-keyboard-button>
								<omni-keyboard-button @keyboard-click="${this._keypress}" mode="alpha" label="5"
									case="${this.displayCase}">
								</omni-keyboard-button>
								<omni-keyboard-button @keyboard-click="${this._keypress}" mode="alpha" label="6"
									case="${this.displayCase}">
								</omni-keyboard-button>
								<omni-keyboard-button @keyboard-click="${this._keypress}" mode="alpha" label="7"
									case="${this.displayCase}">
								</omni-keyboard-button>
								<omni-keyboard-button @keyboard-click="${this._keypress}" mode="alpha" label="8"
									case="${this.displayCase}">
								</omni-keyboard-button>
								<omni-keyboard-button @keyboard-click="${this._keypress}" mode="alpha" label="9"
									case="${this.displayCase}">
								</omni-keyboard-button>
								<omni-keyboard-button @keyboard-click="${this._keypress}" mode="alpha" label="0"
									case="${this.displayCase}">
								</omni-keyboard-button>
							</div>
							<div class="keyrow">
								<omni-keyboard-button @keyboard-click="${this._keypress}" mode="alpha" label="q"
									case="${this.displayCase}">
								</omni-keyboard-button>
								<omni-keyboard-button @keyboard-click="${this._keypress}" mode="alpha" label="w"
									case="${this.displayCase}">
								</omni-keyboard-button>
								<omni-keyboard-button @keyboard-click="${this._keypress}" mode="alpha" label="e"
									case="${this.displayCase}">
								</omni-keyboard-button>
								<omni-keyboard-button @keyboard-click="${this._keypress}" mode="alpha" label="r"
									case="${this.displayCase}">
								</omni-keyboard-button>
								<omni-keyboard-button @keyboard-click="${this._keypress}" mode="alpha" label="t"
									case="${this.displayCase}">
								</omni-keyboard-button>
								<omni-keyboard-button @keyboard-click="${this._keypress}" mode="alpha" label="y"
									case="${this.displayCase}">
								</omni-keyboard-button>
								<omni-keyboard-button @keyboard-click="${this._keypress}" mode="alpha" label="u"
									case="${this.displayCase}">
								</omni-keyboard-button>
								<omni-keyboard-button @keyboard-click="${this._keypress}" mode="alpha" label="i"
									case="${this.displayCase}">
								</omni-keyboard-button>
								<omni-keyboard-button @keyboard-click="${this._keypress}" mode="alpha" label="o"
									case="${this.displayCase}">
								</omni-keyboard-button>
								<omni-keyboard-button @keyboard-click="${this._keypress}" mode="alpha" label="p"
									case="${this.displayCase}">
								</omni-keyboard-button>
							</div>
							<div class="keyrow">
								<omni-keyboard-button @keyboard-click="${this._keypress}" mode="alpha" label="a"
									case="${this.displayCase}">
								</omni-keyboard-button>
								<omni-keyboard-button @keyboard-click="${this._keypress}" mode="alpha" label="s"
									case="${this.displayCase}">
								</omni-keyboard-button>
								<omni-keyboard-button @keyboard-click="${this._keypress}" mode="alpha" label="d"
									case="${this.displayCase}">
								</omni-keyboard-button>
								<omni-keyboard-button @keyboard-click="${this._keypress}" mode="alpha" label="f"
									case="${this.displayCase}">
								</omni-keyboard-button>
								<omni-keyboard-button @keyboard-click="${this._keypress}" mode="alpha" label="g"
									case="${this.displayCase}">
								</omni-keyboard-button>
								<omni-keyboard-button @keyboard-click="${this._keypress}" mode="alpha" label="h"
									case="${this.displayCase}">
								</omni-keyboard-button>
								<omni-keyboard-button @keyboard-click="${this._keypress}" mode="alpha" label="j"
									case="${this.displayCase}">
								</omni-keyboard-button>
								<omni-keyboard-button @keyboard-click="${this._keypress}" mode="alpha" label="k"
									case="${this.displayCase}">
								</omni-keyboard-button>
								<omni-keyboard-button @keyboard-click="${this._keypress}" mode="alpha" label="l"
									case="${this.displayCase}">
								</omni-keyboard-button>
								<omni-keyboard-button @keyboard-click="${this._keypress}" mode="alpha" label="z"
									case="${this.displayCase}">
								</omni-keyboard-button>
							</div>
							<div class="keyrow">
								<omni-keyboard-button class="fill-space" @keyboard-click="${this._toggleCase}" mode="action"
									character="caps" case="custom">${this.renderCaps()}</omni-keyboard-button>
								<omni-keyboard-button @keyboard-click="${this._keypress}" mode="alpha" label="x"
									case="${this.displayCase}">
								</omni-keyboard-button>
								<omni-keyboard-button @keyboard-click="${this._keypress}" mode="alpha" label="c"
									case="${this.displayCase}">
								</omni-keyboard-button>
								<omni-keyboard-button @keyboard-click="${this._keypress}" mode="alpha" label="v"
									case="${this.displayCase}">
								</omni-keyboard-button>
								<omni-keyboard-button @keyboard-click="${this._keypress}" mode="alpha" label="b"
									case="${this.displayCase}">
								</omni-keyboard-button>
								<omni-keyboard-button @keyboard-click="${this._keypress}" mode="alpha" label="n"
									case="${this.displayCase}">
								</omni-keyboard-button>
								<omni-keyboard-button @keyboard-click="${this._keypress}" mode="alpha" label="m"
									case="${this.displayCase}">
								</omni-keyboard-button>
								<omni-keyboard-button class="fill-space" @keyboard-click="${this._keypress}" mode="action" character="backspace" case="custom">                                    
                                    <omni-icon size="medium"  class="themed-icon">${this.renderBackspace()}</omni-icon>
                                </omni-keyboard-button>
							</div>
							<div class="keyrow pad-bottom" >
								<omni-keyboard-button @keyboard-click="${this._keypress}" mode="alpha" label="."
									case="${this.displayCase}">
								</omni-keyboard-button>
								<omni-keyboard-button @keyboard-click="${this._keypress}" mode="alpha" label="@"
									case="${this.displayCase}">
								</omni-keyboard-button>
								<omni-keyboard-button @keyboard-click="${this._toggleState}" mode="alpha" label="!#$"
									case="custom"></omni-keyboard-button>
								<omni-keyboard-button class="fill-space" @keyboard-click="${this._keypress}" mode="space" label="${this.spaceLabel}"
									character=" " case="custom"></omni-keyboard-button>
								${this.renderClear()}
                                ${this.renderCallToAction()}
							</div>
						</div>
					</div>
				</div>
			</div>
			`:this.state==="special"?(this.state="special",n`
			<div class="footer">
				<div class="wrapperContainer">
					<div class="shadow">
						<div class="topbar">
							<omni-label label="${this.displayValue}"></omni-label>
							<div class="closer" @click="${this._close}">
								<omni-label class="closeButton" label="${this.closeLabel}"></omni-label>
								<omni-icon size="medium" class="themed-icon">${this.renderClose()}</omni-icon>
							</div>
						</div>
						<div class="wrapper special-wrapper">
							<div>
								<div>
									<div class="keyrow pad-top special-row" >
										<omni-keyboard-button @keyboard-click="${this._keypress}" mode="numeric" label="!">
										</omni-keyboard-button>
										<omni-keyboard-button @keyboard-click="${this._keypress}" mode="numeric" label="|">
										</omni-keyboard-button>
										<omni-keyboard-button @keyboard-click="${this._keypress}" mode="numeric" label="#">
										</omni-keyboard-button>
										<omni-keyboard-button @keyboard-click="${this._keypress}" mode="numeric" label="_">
										</omni-keyboard-button>
										<omni-keyboard-button @keyboard-click="${this._keypress}" mode="numeric" character="backspace" case="custom">
                                            <omni-icon size="medium"  class="themed-icon">${this.renderBackspace()}</omni-icon>
										</omni-keyboard-button>
									</div>
									<div class="keyrow special-row">
										<omni-keyboard-button @keyboard-click="${this._keypress}" mode="numeric" label="%">
										</omni-keyboard-button>
										<omni-keyboard-button @keyboard-click="${this._keypress}" mode="numeric" label="&gt;">
										</omni-keyboard-button>
										<omni-keyboard-button @keyboard-click="${this._keypress}" mode="numeric" label="'">
										</omni-keyboard-button>
										<omni-keyboard-button @keyboard-click="${this._keypress}" mode="numeric" label="^">
										</omni-keyboard-button>
										<omni-keyboard-button @keyboard-click="${this._keypress}" mode="numeric" label="$">
										</omni-keyboard-button>
									</div>
									<div class="keyrow special-row">
										<omni-keyboard-button @keyboard-click="${this._keypress}" mode="numeric" label="*">
										</omni-keyboard-button>
										<omni-keyboard-button @keyboard-click="${this._keypress}" mode="numeric" label="+">
										</omni-keyboard-button>
										<omni-keyboard-button @keyboard-click="${this._keypress}" mode="numeric" label="-">
										</omni-keyboard-button>
										<omni-keyboard-button @keyboard-click="${this._keypress}" mode="numeric" label="\'">
										</omni-keyboard-button>
										<omni-keyboard-button @keyboard-click="${this._keypress}" mode="numeric" label="~">
										</omni-keyboard-button>
									</div>
									<div class="keyrow special-row">
										<omni-keyboard-button @keyboard-click="${this._keypress}" mode="numeric" label="/">
										</omni-keyboard-button>
										<omni-keyboard-button @keyboard-click="${this._keypress}" mode="numeric" label="=">
										</omni-keyboard-button>
										<omni-keyboard-button @keyboard-click="${this._keypress}" mode="numeric" label="?">
										</omni-keyboard-button>
										<omni-keyboard-button @keyboard-click="${this._keypress}" mode="numeric" label="{">
										</omni-keyboard-button>
										<omni-keyboard-button @keyboard-click="${this._keypress}" mode="numeric" label="}">
										</omni-keyboard-button>
									</div>
									<div class="keyrow pad-bottom special-row">
										${this.mode==="alpha-numeric"?n`<omni-keyboard-button
											@keyboard-click="${this._toggleState}" mode="numeric" label="abc" case="custom">
										</omni-keyboard-button>`:f}
										<omni-keyboard-button @keyboard-click="${this._keypress}" mode="numeric" label="@">
										</omni-keyboard-button>
										<omni-keyboard-button @keyboard-click="${this._keypress}" mode="numeric" label=".">
										</omni-keyboard-button>
										${this.renderClear("numeric")}
                                        ${this.renderCallToAction({"action-fill":!0})}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			`):this.mode==="numeric"?n`
			<div class="footer">
				<div class="wrapperContainer">
					<div class="shadow">
						<div class="topbar">
							<omni-label label="${this.displayValue}"></omni-label>
							<div class="closer" @click="${this._close}">
								<omni-label class="closeButton" label="${this.closeLabel}"></omni-label>
								<omni-icon size="medium" class="themed-icon">${this.renderClose()}</omni-icon>
							</div>
						</div>
						<div class="wrapper numeric-wrapper">
							<div>
								<div>
									<div class="keyrow pad-top" >
										<omni-keyboard-button @keyboard-click="${this._keypress}" mode="numeric" label="1">
										</omni-keyboard-button>
										<omni-keyboard-button @keyboard-click="${this._keypress}" mode="numeric" label="2">
										</omni-keyboard-button>
										<omni-keyboard-button @keyboard-click="${this._keypress}" mode="numeric" label="3">
										</omni-keyboard-button>
									</div>
									<div class="keyrow">
										<omni-keyboard-button @keyboard-click="${this._keypress}" mode="numeric" label="4">
										</omni-keyboard-button>
										<omni-keyboard-button @keyboard-click="${this._keypress}" mode="numeric" label="5">
										</omni-keyboard-button>
										<omni-keyboard-button @keyboard-click="${this._keypress}" mode="numeric" label="6">
										</omni-keyboard-button>
									</div>
									<div class="keyrow">
										<omni-keyboard-button @keyboard-click="${this._keypress}" mode="numeric" label="7">
										</omni-keyboard-button>
										<omni-keyboard-button @keyboard-click="${this._keypress}" mode="numeric" label="8">
										</omni-keyboard-button>
										<omni-keyboard-button @keyboard-click="${this._keypress}" mode="numeric" label="9">
										</omni-keyboard-button>
									</div>
									<div class="keyrow">
										${this.renderClear("numeric")}
										<omni-keyboard-button @keyboard-click="${this._keypress}" mode="numeric" label="0">
										</omni-keyboard-button>
										<omni-keyboard-button @keyboard-click="${this._keypress}" mode="numeric" character="backspace" case="custom">            
                                            <omni-icon size="medium" class="themed-icon">${this.renderBackspace()}</omni-icon>
                                        </omni-keyboard-button>
									</div>
									<div class="keyrow pad-bottom numeric-row">
                                        ${this.renderCallToAction({"action-fill":!0})}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			</div>
			`:f}renderCaps(){return this.currentCase==="lower"?n`
                <omni-icon size="medium" class="themed-icon">
                    <div class="stretch-icon">
                        <slot name="caps-off">
                            <omni-caps-off-icon style="display: unset;"></omni-caps-off-icon>
                        </slot>
                    </div>
                </omni-icon>           
            `:this.currentCase==="upper-single"?n`
                <omni-icon size="medium" class="themed-icon">
                    <div class="stretch-icon">
                        <slot name="caps-on">
                            <omni-caps-on-icon style="display: unset;"></omni-caps-on-icon>
                        </slot>
                    </div>
                </omni-icon>
            `:this.currentCase==="upper"?n`
                <omni-icon size="medium" class="themed-icon">
                    <div class="stretch-icon">
                        <slot name="caps-on-permanent">
                            <omni-caps-on-permanent-icon style="display: unset;"></omni-caps-on-permanent-icon>
                        </slot>
                    </div>
                </omni-icon>
            `:f}renderClose(){return n`
        <div class="close-icon">
            <slot name="close">
                <omni-chevron-down-icon style="display: unset;"></omni-chevron-down-icon>
            </slot>
        </div>
        `}renderBackspace(){return n`
            <div class="stretch-icon">
                <slot name="backspace">
                    <omni-backspace-icon style="display: unset;"></omni-backspace-icon>
                </slot>
            </div>
        `}renderClear(e="return"){return n`
        <omni-keyboard-button @keyboard-click="${this._keypress}" 
            mode="${e}" 
            character="clear" 
            case="custom">
            
            <slot name="clear">
                ${this.clearLabel}
            </slot>
        </omni-keyboard-button>
        `}renderCallToAction(e=void 0){let o=this.currentEnterKeyHint,i=E({"action-button":!0},e);return n`
            <button class="${R(i)}" @click="${()=>this._keypress({detail:{value:"return"}})}" mode="action">
                ${o==="done"?n`
                        <omni-icon size="medium" class="action-icon">
                            <div class="stretch-icon">
                                <slot name="action-done">
                                    <omni-check-icon  style="display: unset;"></omni-check-icon>
                                </slot>
                            </div>
                        </omni-icon>`:o==="go"?n`
                        <omni-icon size="medium" class="action-icon">
                            <div class="stretch-icon">
                                <slot name="action-go">
                                    <omni-arrow-right-icon style="display: unset;"></omni-arrow-right-icon>
                                </slot>
                            </div>
                        </omni-icon>`:o==="next"?n`
                        <omni-icon size="medium" class="action-icon">
                            <div class="stretch-icon">
                                <slot name="action-next">
                                    <omni-next-icon  style="display: unset;"></omni-next-icon>
                                </slot>
                            </div>
                        </omni-icon>`:o==="previous"?n`
                        <omni-icon size="medium" class="action-icon">
                            <div class="stretch-icon">
                                <slot name="action-previous">
                                    <omni-previous-icon  style="display: unset;"></omni-previous-icon>
                                </slot>
                            </div>
                        </omni-icon>`:o==="search"?n`
                        <omni-icon size="medium" class="action-icon">
                            <div class="stretch-icon">
                                <slot name="action-search">
                                    <omni-search-icon  style="display: unset;"></omni-search-icon>
                                </slot>
                            </div>
                        </omni-icon>`:o==="send"?n`
                        <omni-icon size="medium" class="action-icon">
                            <div class="stretch-icon">
                                <slot name="action-send">
                                    <omni-send-icon  style="display: unset;"></omni-send-icon>
                                </slot>
                            </div>
                        </omni-icon>`:n`
                        <omni-icon size="medium" class="action-icon">
                            <div class="stretch-icon flex-text-center">
                                <slot name="action-enter">
                                    ${this.ctaLabel}
                                </slot>
                            </div>
                        </omni-icon>`}
            </button>
        `}};p([k({type:String,attribute:"attach-mode",reflect:!0})],m.prototype,"attachMode",2),p([k({type:String,attribute:"close-label",reflect:!0})],m.prototype,"closeLabel",2),p([k({type:String,attribute:"space-label",reflect:!0})],m.prototype,"spaceLabel",2),p([k({type:String,attribute:"clear-label",reflect:!0})],m.prototype,"clearLabel",2),p([k({type:String,attribute:"action-label",reflect:!0})],m.prototype,"ctaLabel",2),p([g()],m.prototype,"mode",2),p([g()],m.prototype,"currentCase",2),p([g()],m.prototype,"state",2),p([g()],m.prototype,"target",2),m=p([A("omni-keyboard")],m);var $="data-omni-keyboard-mask",K="data-omni-keyboard-multi-line",S="data-omni-keyboard-hidden",H="data-omni-keyboard-no-display",u="data-omni-keyboard-attach",C="data-omni-keyboard-mode",D=["number","email","tel","password","search","text","url","textarea"],O=["tel","password","search","text","url","textarea"];export{m as a,$ as b,K as c,S as d,H as e,u as f,C as g};
//# sourceMappingURL=chunk.6VPHJ4AM.js.map
