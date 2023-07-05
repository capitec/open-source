import{i as h}from"./chunk.PNTHLTQK.js";import{a as s,b as i}from"./chunk.S2K25ADN.js";import{a as b,b as a}from"./chunk.L3RZWW2F.js";import{j as o,m as n,p as l}from"./chunk.BF43NN75.js";n();l();var e=class extends h{constructor(){super(...arguments);this.label="";this.character="";this.mode="none";this.case="lower"}_click(r){if(this.disabled)return r.stopImmediatePropagation();let t="";this.character?this.case==="custom"?t=this.character:this.case!=="lower"?t=this.character.toUpperCase():t=this.character.toLowerCase():this.case==="custom"?t=this.label:this.case!=="lower"?t=this.label.toUpperCase():t=this.label.toLowerCase(),this.dispatchEvent(new CustomEvent("keyboard-click",{detail:{value:t}})),r.stopPropagation()}static get styles(){return[super.styles,b`
				:host {
					box-sizing: border-box;
					display: inline-flex;
				}

				::slotted() {
					max-height: var(--omni-keyboard-button-icon-max-height,40px);
					max-width: var(--omni-keyboard-button-icon-max-width,40px);
				}

                .button {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    
                    font-family: var(--omni-keyboard-button-font-family, var(--omni-font-family));
                    color: var(--omni-keyboard-button-font-color, var(--omni-font-color));
                    font-size: var(--omni-keyboard-button-font-size, 15px);
                    /*Common styles for keyboard button types*/

                    background-color: var(--omni-keyboard-button-background-color, var(--omni-background-color));
                    border: var(--omni-keyboard-button-border, 1.5px solid var(--omni-background-color));
                    margin: var(--omni-keyboard-button-margin, 6px 7px);
                    font-weight: var(--omni-keyboard-button-font-weight, 600);
                    height: var(--omni-keyboard-button-height, 40px);
                    width: var(--omni-keyboard-button-width, 50px);
                    
                    line-height: var(--omni-keyboard-button-line-height, 30px);
                    border-radius: var(--omni-keyboard-button-border-radius, 8px);

                    box-shadow: 2px 2px 5px 0 rgba(109,109,109,0.35), -10px -10px 20px -10px var(--omni-box-shadow-color);

                    cursor: pointer;
                    
                    transition:
                        opacity .1s ease,
                        background-color .1s ease,
                        border .1s ease,
                        color .1s ease,
                        box-shadow .1s ease,
                        background .1s ease,
                        -webkit-box-shadow .1s ease;
                }

                .action {
                    width: auto;
                }

                .space {
                    width: auto;
                }

                /* Mobile device styling */
                @media screen and (max-width: 766px) {

                    .button {
                        margin: var(--omni-keyboard-button-mobile-margin, 2px 2px);
                        height: var(--omni-keyboard-button-mobile-height, 30px);
                        width: var(--omni-keyboard-button-mobile-width, 32px);                        
                    }

                    .space {
                        width: auto;
                        height: var(--omni-keyboard-button-mobile-height, 30px);
                    }

                    .alpha {
                        height: var(--omni-keyboard-button-mobile-height, 30px);
                        width: var(--omni-keyboard-button-mobile-width, 32px);               
                    }

                    .action {
                        width: auto;
                    }

                    .return{
                        height: var(--omni-keyboard-button-mobile-height, 30px);
                        width: var(--omni-return-keyboard-button-mobile-width, 60px);
                    }

                    .numeric {
                        height: var(--omni-keyboard-button-mobile-height, 30px);
                        width: var(--omni-numeric-keyboard-button-mobile-width, 55px);
                    }
                }

                /* Small mobile device */
                @media screen and (max-width: 355px) {
                    .button {
                        height: var(--omni-keyboard-button-mobile-small-height, 22px);
                        width: var(--omni-keyboard-button-mobile-small-width, 22px);
                        
                        font-size: var(--omni-keyboard-button-mobile-small-font-size, 12px);
                        border-radius: var(--omni-keyboard-button-mobile-small-border-radius, 6px);
                    }

                    .space {
                        width: auto;
                        height: var(--omni-keyboard-button-mobile-small-height, 22px);
                    }

                    .alpha {
                        height: var(--omni-keyboard-button-mobile-small-height, 22px);
                        width: var(--omni-keyboard-button-mobile-small-width, 22px);
                    }

                    .action {
                        width: auto;
                        height: var(--omni-keyboard-button-mobile-small-height, 22px);
                    }

                    .numeric {
                        height: var(--omni-keyboard-button-mobile-small-height, 22px);
                        width: var(--omni-numeric-keyboard-button-mobile-small-width, 45px);
                    }

                    .return {
                        height: var(--omni-keyboard-button-mobile-small-height, 22px);
                        width: var(--omni-return-keyboard-button-mobile-small-width, 36px);
                    }
                }
			`]}render(){return this.label=this.case!=="lower"?this.case==="custom"?this.label:this.label.toUpperCase():this.label.toLowerCase(),a`
			<button class="button ${this.mode==="alpha"?"alpha":""}${this.mode==="return"?"return":""} ${this.mode==="numeric"?"numeric":""} ${this.mode==="action"?"action":""} ${this.mode==="space"?"space":""} ${this.disabled?"disabled":""} " 
				@click="${this._click}">
                <slot></slot>
				${this.label?a`<div class="label">${this.label}</div>`:""}
			</button>
		`}};o([i({type:String,reflect:!0})],e.prototype,"label",2),o([i({type:String,reflect:!0})],e.prototype,"character",2),o([i({type:String,reflect:!0})],e.prototype,"mode",2),o([i({type:String,reflect:!0})],e.prototype,"case",2),o([i({type:Boolean,reflect:!0})],e.prototype,"disabled",2),e=o([s("omni-keyboard-button")],e);export{e as a};
//# sourceMappingURL=chunk.6IDUWNO5.js.map
