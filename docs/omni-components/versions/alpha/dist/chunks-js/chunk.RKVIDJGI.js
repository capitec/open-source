import{h}from"./chunk.6C4LMRM7.js";import{a as m,b as a,d as g}from"./chunk.S2K25ADN.js";import{a as p,b as d,e as s}from"./chunk.L3RZWW2F.js";import{j as i,m as l,p as c}from"./chunk.BF43NN75.js";l();c();var r=class extends h{constructor(){super(...arguments);this.status="none"}static create(t){var o;let e=document.body.appendChild(document.createElement("omni-alert"));if(t||(t={}),e.status=(o=t.status)!=null?o:"none",e.message=t.message,e.headerAlign=t.headerAlign,e.descriptionAlign=t.descriptionAlign,e.description=t.description,e.primaryAction=t.primaryAction,e.secondaryAction=t.secondaryAction,e.enableSecondary=t.enableSecondary,e.actionAlign=t.actionAlign,t.id&&(e.id=t.id),t.statusIndicator){let n=document.createElement("omni-render-element");n.slot="status-indicator",n.renderer=typeof t.statusIndicator=="function"?t.statusIndicator:()=>t.statusIndicator,e.appendChild(n)}if(t.header){let n=document.createElement("omni-render-element");n.slot="header",n.renderer=typeof t.header=="function"?t.header:()=>t.header,e.appendChild(n)}if(t.body){let n=document.createElement("omni-render-element");n.renderer=typeof t.body=="function"?t.body:()=>t.body,e.appendChild(n)}if(t.primary){let n=document.createElement("omni-render-element");n.slot="primary",n.renderer=typeof t.primary=="function"?t.primary:()=>t.primary,e.appendChild(n)}if(t.secondary){let n=document.createElement("omni-render-element");n.slot="secondary",n.renderer=typeof t.secondary=="function"?t.secondary:()=>t.secondary,e.appendChild(n)}return e}static show(t){let e=r.create(t);if(t.onClose){let o="auto";e.addEventListener("alert-action-click",n=>{o=n.detail.secondary?"secondary":"primary"}),e.addEventListener("alert-close",()=>{var n;(n=t.onClose)==null||n.apply(e,[o])})}return e.show()}static showAsync(t){return r.create(t).showAsync()}showAsync(){return new Promise((t,e)=>{try{this.show();let o="auto";this.addEventListener("alert-action-click",n=>{o=n.detail.secondary?"secondary":"primary"}),this.addEventListener("alert-close",()=>{t==null||t.apply(this,[o])})}catch(o){e.apply(this,[o])}})}show(){return this.updateComplete.then(()=>{this.modal.hide=!1}),this}hide(){this.updateComplete.then(async()=>{let{matches:t}=window.matchMedia("(prefers-reduced-motion: no-preference)");if(t&&document.timeline){let e=Number(getComputedStyle(this.modal).getPropertyValue("opacity"));await this.modal.animate([{offset:0,opacity:e},{offset:1,opacity:0}],{duration:500,easing:"ease"}).finished}this.modal.hide=!0,this.dispatchEvent(new CustomEvent("alert-close")),this.parentElement&&this.remove()})}onActionClick(t){this.dispatchEvent(new CustomEvent("alert-action-click",{detail:{secondary:t!=null?t:!1}})),this.hide()}static get styles(){return[super.styles,p`
			:host {
				box-sizing: border-box;
			}

            omni-modal {
                --omni-modal-body-padding: 0px;
            }

            omni-modal::part(container) {               

				min-width: var(--omni-alert-min-width, 10%);
				max-width: var(--omni-alert-max-width, 80%);
            }

			/** Dialog */

			.container {
				display: flex;
				flex-direction: column;
				align-items: stretch;
				justify-content: flex-start;

				padding: 0px;

				border: var(--omni-alert-border, none);

				box-shadow: var(--omni-alert-box-shadow, 0px 0px 3px rgba(0, 0, 0, 0.1));
				border-radius: var(--omni-alert-border-radius, 10px);
			}
			
			omni-modal:not([hide]) {
				animation: fadein var(--omni-alert-animation-duration, 0.2s) ease-in-out;
				animation-fill-mode: forwards;
			}

            @media (prefers-reduced-motion) {
                /* styles to apply if a user's device settings are set to reduced motion */
                omni-modal:not([hide]) {
                    animation: unset;
                    opacity: 1;
                }
            }

			@keyframes fadein {
				from {
					opacity: 0;
				}
				to {
					opacity: 1;
				}
			}

			/* Content */

			.content {
				display: flex;
				flex-direction: column;
				justify-content: center;

				padding-top: var(--omni-alert-padding-top, 10px);
				padding-bottom: var(--omni-alert-padding-bottom, 10px);
				padding-left: var(--omni-alert-padding-left, 10px);
				padding-right: var(--omni-alert-padding-right, 10px);
			}

            .header {
                display: inline-flex;
                align-items: center;
				text-align: center;
                justify-content: center;
                color: var(--omni-alert-header-font-color,var(--omni-font-color));
                background: var(--omni-alert-header-background, var(--omni-background-color));
                font-family: var(--omni-alert-header-font-family, var(--omni-font-family));
                font-size: var(--omni-alert-header-font-size, var(--omni-font-size));
				line-height: var(--omni-alert-header-line-height, 1.2);
                font-weight: var(--omni-alert-header-font-weight, bold);
                
                position: relative;

				margin-top: var(--omni-alert-header-padding-top, 10px);
				margin-bottom: var(--omni-alert-header-padding-bottom, 0px);
				margin-left: var(--omni-alert-header-padding-left, 0px);
				margin-right: var(--omni-alert-header-padding-right, 0px);
            }

            .header.left {
                justify-content: left;
            }

            .header.right {
                justify-content: right;
                text-align: right;
            }

            ::slotted(*:not([slot])),
			.description {
				font-family: var(--omni-alert-description-font-family, sans-serif);
				font-size: var(--omni-alert-description-font-size, 16px);
				font-weight: var(--omni-alert-description-font-weight, normal);
				line-height: var(--omni-alert-description-line-height, 1.2);

				color: var(--omni-alert-description-font-color, var(--omni-font-color));

				text-align: center;

				margin-top: var(--omni-alert-description-padding-top, 10px);
				margin-bottom: var(--omni-alert-description-padding-bottom, 0px);
				margin-left: var(--omni-alert-description-padding-left, 0px);
				margin-right: var(--omni-alert-description-padding-right, 0px);
			}

            .description.left {
                justify-content: left;
				text-align: left;
            }

            .description.right {
                justify-content: right;
                text-align: right;
            }

			.actions {
				display: flex;
				flex-direction: row;
				justify-content: flex-end;
				align-items: center;
			}

            .actions.center {
                justify-content: center;
                text-align: center;
            }

            .actions.left {
                flex-direction: row-reverse;
                text-align: left;
            }

            .actions.left .action-btn {
                padding-left: var(--omni-alert-action-button-padding-left, 4px);
				padding-right: var(--omni-alert-action-button-padding-right);
            }

            .actions.stretch .action-btn,
            .actions.stretch .clear-btn {
                padding-left: var(--omni-alert-action-button-padding-left, 4px);
				padding-right: var(--omni-alert-action-button-padding-right, 4px);
                width: 100%;
            }

			.action-btn {
				padding-top: var(--omni-alert-action-button-padding-top);
				padding-bottom: var(--omni-alert-action-button-padding-bottom, 4px);
				padding-left: var(--omni-alert-action-button-padding-left);
				padding-right: var(--omni-alert-action-button-padding-right, 4px);
                
                --omni-button-padding-top:var(--omni-alert-action-button-internal-padding-top, 0px);
                --omni-button-padding-bottom:var(--omni-alert-action-button-internal-padding-bottom, 0px);
                --omni-button-padding-left:var(--omni-alert-action-button-internal-padding-left, 4px);
                --omni-button-padding-right:var(--omni-alert-action-button-internal-padding-right, 4px);
			}

			.clear-btn {
                line-height: normal;
				padding-top: var(--omni-alert-action-button-padding-top, 4px);
				padding-bottom: var(--omni-alert-action-button-padding-bottom);
				padding-left: var(--omni-alert-action-button-padding-left);
				padding-right: var(--omni-alert-action-button-padding-right);
                
                --omni-button-padding-top:var(--omni-alert-action-button-internal-padding-top);
                --omni-button-padding-bottom:var(--omni-alert-action-button-internal-padding-bottom);
                --omni-button-padding-left:var(--omni-alert-action-button-internal-padding-left);
                --omni-button-padding-right:var(--omni-alert-action-button-internal-padding-right);
			}

			.status-icon {

				margin-right: var(--omni-alert-header-horizontal-gap, 10px);

				width: var(--omni-alert-header-status-size, 24px);
				height: var(--omni-alert-header-status-size, 24px);

				min-width: var(--omni-alert-header-status-size, 24px);
				min-height: var(--omni-alert-header-status-size, 24px);

				max-width: var(--omni-alert-header-status-size, 24px);
				max-height: var(--omni-alert-header-status-size, 24px);
			}
		`]}render(){let t=s;switch(this.status){case"info":t=d`
					<svg class="status-icon" width="24px" height="24px" viewBox="0 0 24 24">
						<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<circle id="shape" stroke="var(--omni-alert-info-status-indicator-color, var(--omni-primary-color, currentColor))" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" cx="12" cy="12" r="11"></circle>
							<path id="icon" fill="var(--omni-alert-info-status-indicator-color, var(--omni-primary-color, currentColor))" fill-rule="nonzero" d="M12,9.25 C12.3796958,9.25 12.693491,9.53215388 12.7431534,9.89822944 L12.75,10 L12.75,17 C12.75,17.4142136 12.4142136,17.75 12,17.75 C11.6203042,17.75 11.306509,17.4678461 11.2568466,17.1017706 L11.25,17 L11.25,10 C11.25,9.58578644 11.5857864,9.25 12,9.25 Z M12,6 C12.5522847,6 13,6.44771525 13,7 C13,7.55228475 12.5522847,8 12,8 C11.4477153,8 11,7.55228475 11,7 C11,6.44771525 11.4477153,6 12,6 Z"></path>
						</g>
					</svg>
				`;break;case"success":t=d`
					<svg class="status-icon" width="24px" height="24px" viewBox="0 0 24 24">
						<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<path id="shape" stroke="var(--omni-alert-success-status-indicator-color, darkgreen)" stroke-width="1.5" d="M12,1.75 C9.16954066,1.75 6.60704066,2.89727033 4.75215549,4.75215549 C2.89727033,6.60704066 1.75,9.16954066 1.75,12 C1.75,14.8304593 2.89727033,17.3929593 4.75215549,19.2478445 C6.60704066,21.1027297 9.16954066,22.25 12,22.25 C14.8304593,22.25 17.3929593,21.1027297 19.2478445,19.2478445 C21.1027297,17.3929593 22.25,14.8304593 22.25,12 C22.25,9.16954066 21.1027297,6.60704066 19.2478445,4.75215549 C17.3929593,2.89727033 14.8304593,1.75 12,1.75 Z"></path>
							<path id="icon" fill="var(--omni-alert-success-status-indicator-color, darkgreen)" fill-rule="nonzero" d="M16.4696699,8.46966991 C16.7625631,8.1767767 17.2374369,8.1767767 17.5303301,8.46966991 C17.7965966,8.73593648 17.8208027,9.15260016 17.6029482,9.44621165 L17.5303301,9.53033009 L10.5303301,16.5303301 C10.2640635,16.7965966 9.84739984,16.8208027 9.55378835,16.6029482 L9.46966991,16.5303301 L6.46966991,13.5303301 C6.1767767,13.2374369 6.1767767,12.7625631 6.46966991,12.4696699 C6.73593648,12.2034034 7.15260016,12.1791973 7.44621165,12.3970518 L7.53033009,12.4696699 L10,14.939 L16.4696699,8.46966991 Z"></path>
						</g>
					</svg>
				`;break;case"error":t=d`
					<svg class="status-icon" width="24px" height="24px" viewBox="0 0 24 24">
						<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<circle id="shape" stroke="var(--omni-alert-error-status-indicator-color, darkred)" stroke-width="1.5" fill-opacity="0.0991586538" cx="12" cy="12" r="10.25"></circle>
							<path id="icon" fill="var(--omni-alert-error-status-indicator-color, darkred)" fill-rule="nonzero" d="M12,9.5 C12.3796958,9.5 12.693491,9.78215388 12.7431534,10.1482294 L12.75,10.25 L12.75,17.25 C12.75,17.6642136 12.4142136,18 12,18 C11.6203042,18 11.306509,17.7178461 11.2568466,17.3517706 L11.25,17.25 L11.25,10.25 C11.25,9.83578644 11.5857864,9.5 12,9.5 Z M12,6.25 C12.5522847,6.25 13,6.69771525 13,7.25 C13,7.80228475 12.5522847,8.25 12,8.25 C11.4477153,8.25 11,7.80228475 11,7.25 C11,6.69771525 11.4477153,6.25 12,6.25 Z" transform="translate(12.000000, 12.125000) scale(1, -1) translate(-12.000000, -12.125000)"></path>
						</g>
					</svg>
				`;break;case"warning":t=d`
					<svg class="status-icon" width="24px" height="24px" viewBox="0 0 24 24">
						<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<path id="shape" stroke="var(--omni-alert-warning-status-indicator-color, orange)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M10.2243339,2.95957541 L1.2821787,18.2598736 C0.908046333,18.8732479 0.905812547,19.6285012 1.27631077,20.2438493 C1.64680899,20.8591973 2.33439082,21.2422155 3.08252,21.25 L20.91748,21.25 C21.6656092,21.2422155 22.353191,20.8591973 22.7236892,20.2438493 C23.0941875,19.6285012 23.0919537,18.8732479 22.7178213,18.2598736 L13.8250165,2.95957541 C13.443296,2.36382395 12.7606949,2 12.0246752,2 C11.2886555,2 10.6060543,2.36382395 10.2243339,2.95957541 Z"></path>
							<path id="icon" fill="var(--omni-alert-warning-status-indicator-color, orange)" fill-rule="nonzero" d="M12,16 C12.5522847,16 13,16.4477153 13,17 C13,17.5522847 12.5522847,18 12,18 C11.4477153,18 11,17.5522847 11,17 C11,16.4477153 11.4477153,16 12,16 Z M12,6.25 C12.3796958,6.25 12.693491,6.53215388 12.7431534,6.89822944 L12.75,7 L12.75,14 C12.75,14.4142136 12.4142136,14.75 12,14.75 C11.6203042,14.75 11.306509,14.4678461 11.2568466,14.1017706 L11.25,14 L11.25,7 C11.25,6.58578644 11.5857864,6.25 12,6.25 Z"></path>
						</g>
					</svg>
				`;break;case"none":default:t=s;break}return d`
			<omni-modal part="modal" no-fullscreen no-header no-footer hide>
                    <div part="content" class="content">
                        <div part="header" class="header ${this.headerAlign}">
                            <slot name="status-indicator">
                                ${t}
                            </slot>
                            <slot name="header">
                                ${this.message?d`<div class="message">${this.message}</div>`:s}
                            </slot>
                        </div>
                        ${this.description?this.description.split(`
`).map(e=>d`<div part="description" class="description ${this.descriptionAlign}">${e}</div>`):s}
                        <slot>
                        </slot>
                    </div>
                    <div part="actions" class="actions ${this.actionAlign}">
                        ${this.enableSecondary?d`
                                    <div style="display: contents; cursor: pointer;" @click="${()=>this.onActionClick(!0)}">
                                        <slot name="secondary">
                                            <omni-button class="action-btn" label="${this.secondaryAction||"Cancel"}" type="secondary"></omni-button>
                                        </slot>
                                    </div>
                                `:s}
                        <div style="display: contents; cursor: pointer;" @click="${()=>this.onActionClick()}">
                            <slot name="primary">
                                <omni-button class="${this.enableSecondary?"action-btn":"clear-btn"}" label="${this.primaryAction||"Ok"}" type="${this.enableSecondary?"primary":"clear"}"></omni-button>
                            </slot>
                        </div>
                    </div>
			</omni-modal>
		`}};i([g("omni-modal")],r.prototype,"modal",2),i([a({type:String,reflect:!0})],r.prototype,"status",2),i([a({type:String,reflect:!0})],r.prototype,"message",2),i([a({type:String,attribute:"header-align",reflect:!0})],r.prototype,"headerAlign",2),i([a({type:String,reflect:!0})],r.prototype,"description",2),i([a({type:String,attribute:"description-align",reflect:!0})],r.prototype,"descriptionAlign",2),i([a({type:String,reflect:!0,attribute:"primary-action"})],r.prototype,"primaryAction",2),i([a({type:String,reflect:!0,attribute:"secondary-action"})],r.prototype,"secondaryAction",2),i([a({type:Boolean,reflect:!0,attribute:"enable-secondary"})],r.prototype,"enableSecondary",2),i([a({type:String,attribute:"action-align",reflect:!0})],r.prototype,"actionAlign",2),r=i([m("omni-alert")],r);export{r as a};
//# sourceMappingURL=chunk.RKVIDJGI.js.map
