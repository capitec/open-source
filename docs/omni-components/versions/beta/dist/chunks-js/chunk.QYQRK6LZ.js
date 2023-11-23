import{a as A,b as M}from"./chunk.ZAPR5LYJ.js";import{a as h}from"./chunk.77M5452K.js";import{a as z}from"./chunk.PQH6VL5Y.js";import{i as F}from"./chunk.FMKVMQ43.js";import{a as R,b as k,c as g}from"./chunk.2KHELDCI.js";import{a as L,b as i,e as f,g as T}from"./chunk.6H2RNHNO.js";import{a as E,j as u,m as _,p as I}from"./chunk.BF43NN75.js";_();I();var b=class extends F{constructor(){super();this.attachMode="all";this.closeLabel="Close";this.spaceLabel="Space";this.clearLabel="Clear";this.actionLabel="Enter";this.mode="none";this.currentCase="lower";this.state="none";this.returnMode="change-value";this.focusNodes=[];this.globalClick=this._globalClick.bind(this);this.globalFocus=this._globalFocus.bind(this)}get displayValue(){var e,o,a;return!this.target||this.returnMode==="multi-line"||this.target.hasAttribute(H)||((e=this.targetComponent)==null?void 0:e.hasAttribute(H))?"":this.target.type==="password"||((o=this.targetComponent)==null?void 0:o.hasAttribute(w))||((a=this.target)==null?void 0:a.hasAttribute(w))?"*".repeat(this.target.value.length):this.target.value}get displayCase(){return this.currentCase==="upper"||this.currentCase==="upper-single"?"upper":"lower"}get currentEnterKeyHint(){var o,a,r;let e=(o=this.targetComponent)!=null&&o.hasAttribute("enterkeyhint")?this.targetComponent.getAttribute("enterkeyhint"):(a=this.target)==null?void 0:a.getAttribute("enterkeyhint");return e||(((r=this.target)==null?void 0:r.type)==="search"?"search":"enter")}static create(e){if(e.parent||(e.parent=document.createElement("div"),document.body.appendChild(e.parent)),typeof e.parent=="string"&&(e.parent=document.getElementById(e.parent),!e.parent))return;let o=A();return T(i`        
                <omni-keyboard ${M(o)} id="${h(e.id)}"
                    attach-mode="${h(e.attachMode)}" 
                    clear-label="${h(e.clearLabel)}" 
                    space-label="${h(e.spaceLabel)}" 
                    action-label="${h(e.actionLabel)}" 
                    close-label="${h(e.closeLabel)}">
                    <omni-render-element slot="clear" .renderer="${e.clear?e.clear:()=>i`${e.clearLabel}`}"></omni-render-element>
                    ${e.capsOff?i`<omni-render-element  slot="caps-off" .renderer="${e.capsOff}"></omni-render-element>`:i`<omni-caps-off-icon style="display: inherit;" slot="caps-off"></omni-caps-off-icon>`}
                    ${e.capsOn?i`<omni-render-element slot="caps-on" .renderer="${e.capsOn}"></omni-render-element>`:i`<omni-caps-on-icon style="display: inherit;" slot="caps-on"></omni-caps-on-icon>`}
                    ${e.capsLock?i`<omni-render-element slot="caps-lock" .renderer="${e.capsLock}"></omni-render-element>`:i`<omni-caps-lock-icon style="display: inherit;" slot="caps-lock"></omni-caps-lock-icon>`}
                    ${e.backspace?i`<omni-render-element slot="backspace" .renderer="${e.backspace}"></omni-render-element>`:i`<omni-backspace-icon style="display: inherit;" slot="backspace"></omni-backspace-icon>`}
                    ${e.close?i`<omni-render-element slot="close" .renderer="${e.close}"></omni-render-element>`:i`<omni-chevron-down-icon style="display: inherit;" slot="close"></omni-chevron-down-icon>`}
                    <omni-render-element slot="action-enter" .renderer="${e.actionEnter?e.actionEnter:()=>i`${e.actionLabel}`}"></omni-render-element>
                    ${e.actionDone?i`<omni-render-element slot="action-done" .renderer="${e.actionDone}"></omni-render-element>`:i`<omni-check-icon style="display: inherit;"  slot="action-done"></omni-check-icon>`}
                    ${e.actionGo?i`<omni-render-element slot="action-go" .renderer="${e.actionGo}"></omni-render-element>`:i`<omni-arrow-right-icon style="display: inherit;" slot="action-go"></omni-arrow-right-icon>`}
                    ${e.actionNext?i`<omni-render-element slot="action-next" .renderer="${e.actionNext}"></omni-render-element>`:i`<omni-next-icon style="display: inherit;"  slot="action-next"></omni-next-icon>`}
                    ${e.actionPrevious?i`<omni-render-element slot="action-previous" .renderer="${e.actionPrevious}"></omni-render-element>`:i`<omni-previous-icon style="display: inherit;" slot="action-previous"></omni-previous-icon>`}
                    ${e.actionSearch?i`<omni-render-element slot="action-search" .renderer="${e.actionSearch}"></omni-render-element>`:i`<omni-search-icon style="display: inherit;" slot="action-search"></omni-search-icon>`}
                    ${e.actionSend?i`<omni-render-element slot="action-send" .renderer="${e.actionSend}"></omni-render-element>`:i`<omni-send-icon style="display: inherit;" slot="action-send"></omni-send-icon>`}
                </omni-keyboard>
            `,e.parent),o.value}connectedCallback(){super.connectedCallback(),window.addEventListener("click",this.globalClick),document.addEventListener("focus",this.globalFocus,!0)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("click",this.globalClick),document.removeEventListener("focus",this.globalFocus,!0),this.focusNodes&&this.focusNodes.forEach(e=>{try{e&&e.removeEventListener("focus",this.globalFocus,!0)}catch(o){console.error(o)}})}_close(e=!1,o=!1){var t,l,m,s;e&&this.target&&this.target.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!0,composed:!0}));let a=this.currentEnterKeyHint==="previous",r=(t=this.targetComponent)!=null&&t.hasAttribute("tabindex")?this.targetComponent:this.target;(l=this.target)==null||l.blur(),this.target=void 0,(m=this.targetObserver)==null||m.disconnect(),this.targetObserver=void 0,this.targetComponent=void 0,(s=this.targetComponentObserver)==null||s.disconnect(),this.targetComponentObserver=void 0,this.state="none",this.mode="none",o&&r&&this._focusNext(r,a)}_focusNext(e,o=!1){let a=e,r=Number(a.getAttribute("tabindex")),t=this._findNextTabIndex(a,a,r,o,null);return t&&t.element&&t.element.focus(),t}_findNextTabIndex(e,o,a,r,t){return t=this._findNextTabIndexInChildren(e,o,a,r,t),e.parentElement?t=this._findNextTabIndex(e.parentElement,e,a,r,t):e.parentNode&&e.parentNode.host&&(t=this._findNextTabIndex(e.parentNode.host,e,a,r,t)),t}_findNextTabIndexInChildren(e,o,a,r,t){let l=e.getAttribute("tabindex");if(l){let s=Number(l),n=t&&s>a&&s<t.tabIndex||!t&&s>a;r&&(n=t&&s<a&&s>t.tabIndex||!t&&s<a),n&&(t={element:e,tabIndex:s})}let m=e.children;for(let s=0;s<m.length;s++){let n=m[s];n!==o&&(t=this._findNextTabIndexInChildren(n,n,a,r,t))}if(e.shadowRoot){let s=e.shadowRoot.children;for(let n=0;n<s.length;n++){let p=s[n];p!==o&&(t=this._findNextTabIndexInChildren(p,p,a,r,t))}}return t}async _keypress(e){var o,a,r;if(this.target){let t={start:(o=this.target.selectionStart)!=null?o:this.target.value.length,end:(a=this.target.selectionEnd)!=null?a:this.target.value.length},l=!1;if(e.detail){if(e.detail.value==="return"){let d={shiftKey:this.currentCase==="upper-single",modifierCapsLock:this.currentCase==="upper",key:"Enter",bubbles:!0,cancelable:!0,composed:!0},c=new KeyboardEvent("keydown",d);if(l=this.target.dispatchEvent(c),this.returnMode==="change-value"){this.target.dispatchEvent(new KeyboardEvent("keyup",d)),this._close(!0,!0);return}else if(this.returnMode==="multi-line"){if(!l){this.target.dispatchEvent(new KeyboardEvent("keyup",d));return}e.detail.value=`\r
`}}else if(e.detail.value==="backspace"){let d={shiftKey:this.currentCase==="upper-single",modifierCapsLock:this.currentCase==="upper",key:"Backspace",bubbles:!0,cancelable:!0,composed:!0},c={inputType:"deleteContentBackward",bubbles:!0,cancelable:!0,composed:!0},x=new KeyboardEvent("keydown",d);if(l=this.target.dispatchEvent(x),l){let B=new InputEvent("beforeinput",c);l=this.target.dispatchEvent(B)}if(!l){this.target.dispatchEvent(new KeyboardEvent("keyup",d)),this.target.focus(),this.requestUpdate();return}let v=this.target.value;if(t.start===0){this.target.focus(),this.requestUpdate();return}let C=v;t.start===t.end?C=`${v.substring(0,t.start-1)}${v.substring(t.start)}`:C=`${v.substring(0,t.start)}${v.substring(t.end)}`,this.target.value=C,this.target.dispatchEvent(new InputEvent("input",c)),this.target.focus(),this.target.dispatchEvent(new KeyboardEvent("keyup",d)),this.requestUpdate(),await this.updateComplete,O.includes(this.target.type)&&this.target.setSelectionRange(t.start===t.end?t.start-1:t.start,t.start===t.end?t.start-1:t.start),this.target.focus(),this.requestUpdate();return}else if(e.detail.value==="clear"){let d={inputType:"deleteContent",bubbles:!0,cancelable:!0,composed:!0},c="",x=new InputEvent("beforeinput",d);l=this.target.dispatchEvent(x),l&&(this.target.value=c,this.target.dispatchEvent(new InputEvent("input",d))),this.target.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!0,composed:!0})),this.target.focus(),this.requestUpdate();return}let m={shiftKey:this.currentCase==="upper-single",modifierCapsLock:this.currentCase==="upper",key:e.detail.value==="return"?"Enter":e.detail.value,bubbles:!0,cancelable:!0,composed:!0},s={inputType:"insertText",data:(r=e.detail.value)==null?void 0:r.toString(),bubbles:!0,cancelable:!0,composed:!0};if(!l){let d=new KeyboardEvent("keydown",m);l=this.target.dispatchEvent(d)}if(l){let d=new InputEvent("beforeinput",s);l=this.target.dispatchEvent(d)}if(!l){this.target.dispatchEvent(new KeyboardEvent("keyup",m)),this.target.focus(),this.requestUpdate();return}let n=this.target.value,p=n;t.start===t.end?p=`${n.substring(0,t.start)}${e.detail.value}${n.substring(t.start)}`:p=`${n.substring(0,t.start)}${e.detail.value}${n.substring(t.end)}`,this.target.value=p,this.target.dispatchEvent(new InputEvent("input",s)),this.target.dispatchEvent(new KeyboardEvent("keyup",m)),this.requestUpdate(),await this.updateComplete,O.includes(this.target.type)&&this.target.setSelectionRange(t.start+1,t.start+1),this.target.focus(),this.requestUpdate()}}this.currentCase==="upper-single"&&(this.currentCase="lower")}async _globalClick(e){var o;await this.updateComplete,e.composedPath()&&(e.composedPath().includes(this)?(o=this.target)==null||o.focus():this.target&&!e.composedPath().includes(this.target)&&this.targetComponent!==this._findActiveElement()&&this._close())}_globalFocus(){var a,r,t,l,m,s;let e=this._findActiveElement(),o=e==null?void 0:e.getRootNode();if(o&&o!==document&&!this.focusNodes.includes(o)&&(this.focusNodes.push(o),o==null||o.addEventListener("focus",this.globalFocus,!0)),e&&(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||((a=e==null?void 0:e.shadowRoot)==null?void 0:a.activeElement)instanceof HTMLInputElement||((r=e==null?void 0:e.shadowRoot)==null?void 0:r.activeElement)instanceof HTMLTextAreaElement)){let n=(l=(t=e==null?void 0:e.shadowRoot)==null?void 0:t.activeElement)!=null?l:e;if(this.target===n||!D.includes(n.type)||e.hasAttribute(S)||n.hasAttribute(S)||this.attachMode==="attribute"&&!(n.hasAttribute(y)||e.hasAttribute(y))||this.attachMode==="id"&&!(this.id&&(n.getAttribute(y)===this.id||e.getAttribute(y)===this.id))||n.getAttribute(y)&&n.getAttribute(y)!==this.id||e.getAttribute(y)&&e.getAttribute(y)!==this.id)return;this.target=n,this.targetComponent=e,"MutationObserver"in window&&(this.targetObserver=new MutationObserver(d=>{d.filter(c=>c.type==="attributes").find(c=>c.attributeName==="type"||c.attributeName===w)&&this.requestUpdate()}),this.targetObserver.observe(this.target,{attributes:!0}),this.targetComponentObserver=new MutationObserver(d=>{d.filter(c=>c.type==="attributes").find(c=>c.attributeName===w)&&this.requestUpdate()}),this.targetComponentObserver.observe(this.targetComponent,{attributes:!0}));let p=(s=(m=this.targetComponent.hasAttribute($)&&this.targetComponent.getAttribute($)?this.targetComponent.getAttribute($):this.target.getAttribute($))!=null?m:n.inputMode)!=null?s:"text";this.mode=n.type==="number"||n.type==="tel"||p==="decimal"||p==="numeric"||p==="tel"?"numeric":"alpha-numeric",this.state=this.mode,this.returnMode=this.targetComponent.hasAttribute(K)||n instanceof HTMLTextAreaElement?"multi-line":"change-value"}}_findActiveElement(e=!1){let o=document.activeElement;if(!o)return o;let a=document,r=a;for(;a;)(e||(o==null?void 0:o.shadowRoot))&&(r=a),a=o==null?void 0:o.shadowRoot,a?o=a.activeElement:o=r.activeElement;return o}_toggleCase(){this.currentCase==="lower"?this.currentCase="upper-single":this.currentCase==="upper-single"?this.currentCase="upper":this.currentCase="lower"}_toggleState(){this.state==="special"?this.state="alpha-numeric":this.state="special"}static get styles(){return[super.styles,L`
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

                .display-label {
                    white-space: nowrap; 
                    overflow: hidden;
                    text-overflow: ellipsis; 
                }

                .numeric-display {
                    max-width: var(--omni-keyboard-numeric-display-label-max-width,116px);
                }

                .special-display {
                    max-width: var(--omni-keyboard-special-display-label-max-width,246px);
                }

                .alpha-display {
                    max-width: var(--omni-keyboard-alpha-display-label-max-width,562px);                    
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

                    .numeric-display {
                        max-width: var(--omni-keyboard-mobile-numeric-display-label-max-width,310px);
                    }
    
                    .special-display {
                        max-width: var(--omni-keyboard-mobile-special-display-label-max-width,310px);
                    }
    
                    .alpha-display {
                        max-width: var(--omni-keyboard-mobile-alpha-display-label-max-width,310px);                    
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

                    .numeric-display {
                        max-width: var(--omni-keyboard-mobile-small-numeric-display-label-max-width,176px);
                    }
    
                    .special-display {
                        max-width: var(--omni-keyboard-mobile-small-special-display-label-max-width,176px);
                    }
    
                    .alpha-display {
                        max-width: var(--omni-keyboard-mobile-small-alpha-display-label-max-width,176px);                    
                    }
                }

			`]}render(){return this.mode==="alpha-numeric"&&this.state==="alpha-numeric"?i`
			<div class="footer">
				<div class="wrapperContainer">
					<div class="shadow">
						<div class="topbar">
							<omni-label><span class="display-label alpha-display">${this.displayValue}</span></omni-label>
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
			`:this.state==="special"?(this.state="special",i`
			<div class="footer">
				<div class="wrapperContainer">
					<div class="shadow">
						<div class="topbar">
							<omni-label><span class="display-label special-display">${this.displayValue}</span></omni-label>
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
										${this.mode==="alpha-numeric"?i`<omni-keyboard-button
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
			`):this.mode==="numeric"?i`
			<div class="footer">
				<div class="wrapperContainer">
					<div class="shadow">
						<div class="topbar">
							<omni-label><span class="display-label numeric-display">${this.displayValue}</span></omni-label>
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
			`:f}renderCaps(){return this.currentCase==="lower"?i`
                <omni-icon size="medium" class="themed-icon">
                    <div class="stretch-icon">
                        <slot name="caps-off">
                            <omni-caps-off-icon style="display: unset;"></omni-caps-off-icon>
                        </slot>
                    </div>
                </omni-icon>           
            `:this.currentCase==="upper-single"?i`
                <omni-icon size="medium" class="themed-icon">
                    <div class="stretch-icon">
                        <slot name="caps-on">
                            <omni-caps-on-icon style="display: unset;"></omni-caps-on-icon>
                        </slot>
                    </div>
                </omni-icon>
            `:this.currentCase==="upper"?i`
                <omni-icon size="medium" class="themed-icon">
                    <div class="stretch-icon">
                        <slot name="caps-lock">
                            <omni-caps-lock-icon style="display: unset;"></omni-caps-lock-icon>
                        </slot>
                    </div>
                </omni-icon>
            `:f}renderClose(){return i`
        <div class="close-icon">
            <slot name="close">
                <omni-chevron-down-icon style="display: unset;"></omni-chevron-down-icon>
            </slot>
        </div>
        `}renderBackspace(){return i`
            <div class="stretch-icon">
                <slot name="backspace">
                    <omni-backspace-icon style="display: unset;"></omni-backspace-icon>
                </slot>
            </div>
        `}renderClear(e="return"){return i`
        <omni-keyboard-button @keyboard-click="${this._keypress}" 
            mode="${e}" 
            character="clear" 
            case="custom">
            
            <slot name="clear">
                ${this.clearLabel}
            </slot>
        </omni-keyboard-button>
        `}renderCallToAction(e=void 0){let o=this.currentEnterKeyHint,a=E({"action-button":!0},e);return i`
            <button class="${z(a)}" @click="${()=>this._keypress({detail:{value:"return"}})}" mode="action">
                ${o==="done"?i`
                        <omni-icon size="medium" class="action-icon">
                            <div class="stretch-icon">
                                <slot name="action-done">
                                    <omni-check-icon  style="display: unset;"></omni-check-icon>
                                </slot>
                            </div>
                        </omni-icon>`:o==="go"?i`
                        <omni-icon size="medium" class="action-icon">
                            <div class="stretch-icon">
                                <slot name="action-go">
                                    <omni-arrow-right-icon style="display: unset;"></omni-arrow-right-icon>
                                </slot>
                            </div>
                        </omni-icon>`:o==="next"?i`
                        <omni-icon size="medium" class="action-icon">
                            <div class="stretch-icon">
                                <slot name="action-next">
                                    <omni-next-icon  style="display: unset;"></omni-next-icon>
                                </slot>
                            </div>
                        </omni-icon>`:o==="previous"?i`
                        <omni-icon size="medium" class="action-icon">
                            <div class="stretch-icon">
                                <slot name="action-previous">
                                    <omni-previous-icon  style="display: unset;"></omni-previous-icon>
                                </slot>
                            </div>
                        </omni-icon>`:o==="search"?i`
                        <omni-icon size="medium" class="action-icon">
                            <div class="stretch-icon">
                                <slot name="action-search">
                                    <omni-search-icon  style="display: unset;"></omni-search-icon>
                                </slot>
                            </div>
                        </omni-icon>`:o==="send"?i`
                        <omni-icon size="medium" class="action-icon">
                            <div class="stretch-icon">
                                <slot name="action-send">
                                    <omni-send-icon  style="display: unset;"></omni-send-icon>
                                </slot>
                            </div>
                        </omni-icon>`:i`
                        <omni-icon size="medium" class="action-icon">
                            <div class="stretch-icon flex-text-center">
                                <slot name="action-enter">
                                    ${this.actionLabel}
                                </slot>
                            </div>
                        </omni-icon>`}
            </button>
        `}};u([k({type:String,attribute:"attach-mode",reflect:!0})],b.prototype,"attachMode",2),u([k({type:String,attribute:"close-label",reflect:!0})],b.prototype,"closeLabel",2),u([k({type:String,attribute:"space-label",reflect:!0})],b.prototype,"spaceLabel",2),u([k({type:String,attribute:"clear-label",reflect:!0})],b.prototype,"clearLabel",2),u([k({type:String,attribute:"action-label",reflect:!0})],b.prototype,"actionLabel",2),u([g()],b.prototype,"mode",2),u([g()],b.prototype,"currentCase",2),u([g()],b.prototype,"state",2),u([g()],b.prototype,"target",2),b=u([R("omni-keyboard")],b);var w="data-omni-keyboard-mask",K="data-omni-keyboard-multi-line",S="data-omni-keyboard-hidden",H="data-omni-keyboard-no-display",y="data-omni-keyboard-attach",$="data-omni-keyboard-mode",D=["number","email","tel","password","search","text","url","textarea"],O=["tel","password","search","text","url","textarea"];export{b as a,w as b,K as c,S as d,H as e,y as f,$ as g};
//# sourceMappingURL=chunk.QYQRK6LZ.js.map
