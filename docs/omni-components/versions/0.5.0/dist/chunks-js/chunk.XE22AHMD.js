import{h as p}from"./chunk.7YN44Q4N.js";import{a as u,b as a}from"./chunk.CHYIO324.js";import{a as h,b as o,d as m}from"./chunk.CIM3NS6G.js";import{j as r,l as c,o as d}from"./chunk.2ZZQBHAA.js";c();d();var l=class extends p{constructor(){super(...arguments);this._selected=NaN;this.radios=[]}set selected(e){if(this.selected===e)return;if(isFinite(this.selected)){let i=this.radios[this.selected];i&&this._uncheckElement(i)}let t=this.radios[e];t&&this._checkElement(t),this.setAttribute("selected",e.toString()),this._selected=e}get selected(){return this._selected}_uncheckElement(e){e.removeAttribute("aria-checked"),"checked"in e&&(e.checked=!1),e.removeAttribute("checked")}_checkElement(e){e.focus(),e.setAttribute("aria-checked","true"),"checked"in e&&(e.checked=!0),e.setAttribute("checked","true")}connectedCallback(){this.setAttribute("role","radioGroup"),this.addEventListener("click",this._handleClick.bind(this)),super.connectedCallback()}firstUpdated(e){super.firstUpdated(e);let t=this.renderRoot.querySelector("slot");t&&t.addEventListener("slotchange",i=>{this._loadRadios()}),this._loadRadios()}_loadRadios(){var t;let e=this.renderRoot.querySelector("slot");if(this.radios=Array.from((t=e==null?void 0:e.assignedElements())!=null?t:[]),this.radios.length>0){let i=this.radios.find(s=>s.hasAttribute("checked"));i?(i.setAttribute("aria-checked","true"),this._selected=this.radios.indexOf(i)):this._selected=-1}}_handleClick(e){let t=e.target,i=this.radios.indexOf(t);if(i===-1||t.hasAttribute("disabled"))return;let s=this.radios[this.selected],n=this.selected===i;n&&this.allowDeselect&&(i=-1),this.selected=i;let b=this.radios[this.selected];!this.allowDeselect&&!t.hasAttribute("checked")&&this._checkElement(t),n&&this.allowDeselect&&t.hasAttribute("checked")&&this._uncheckElement(t),this.dispatchEvent(new CustomEvent("radio-change",{bubbles:!0,composed:!0,detail:{current:b,previous:s}})),this.requestUpdate()}static get styles(){return[super.styles,h`
				:host {
					flex-shrink: 0;				
					display: flex;
					flex-direction: column;
				}

				:host > .wrapper {
					flex-grow: 1;

					display: flex;
					flex-direction: column;
				}

				.label {
					--omni-label-default-font-size: var(--omni-radio-group-label-font-size, 14px);
					--omni-label-default-font-weight: var(--omni-radio-group-label-font-weight, 400);
					margin-bottom: var(--omni-radio-group-label-margin-bottom, 6px);
				}

                .radios:not([data-horizontal]) ::slotted(:not(:last-child)) {
                    margin-bottom: var(--omni-radio-group-vertical-margin, 10px) !important;
                }

                .radios[data-horizontal] {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                }

                .radios[data-horizontal] ::slotted(:not(:last-child)) {
                    margin-right: var(--omni-radio-group-horizontal-margin, 10px) !important;
                }
			`]}render(){return o`
        ${this.label?o`<omni-label class="label" label="${this.label}" type="default"></omni-label>`:m}
        <div class="radios" part="radios" ?data-horizontal="${this.horizontal}">
            <slot></slot>
        </div>
    `}};r([a({type:String,reflect:!0})],l.prototype,"label",2),r([a({type:Boolean,attribute:"allow-deselect",reflect:!0})],l.prototype,"allowDeselect",2),r([a({type:Boolean,reflect:!0})],l.prototype,"horizontal",2),r([a({type:Object,reflect:!0})],l.prototype,"data",2),l=r([u("omni-radio-group")],l);export{l as a};
//# sourceMappingURL=chunk.XE22AHMD.js.map
