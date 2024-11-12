import{h as p}from"./chunk.O3UNTVN7.js";import{a as u,b as s}from"./chunk.4PFNWG2J.js";import{a as h,d as o,g as m}from"./chunk.63YMDT6M.js";import{j as l,m as c,p as d}from"./chunk.BF43NN75.js";c();d();var r=class extends p{constructor(){super(...arguments);this._selected=NaN;this.radios=[]}set selected(e){if(this.selected===e)return;if(isFinite(this.selected)){let i=this.radios[this.selected];i&&this._uncheckElement(i)}let t=this.radios[e];t&&this._checkElement(t),this.setAttribute("selected",e.toString()),this._selected=e}get selected(){return this._selected}_uncheckElement(e){e.removeAttribute("aria-checked"),"checked"in e&&(e.checked=!1),e.removeAttribute("checked")}_checkElement(e){e.focus(),e.setAttribute("aria-checked","true"),"checked"in e&&(e.checked=!0),e.setAttribute("checked","true")}connectedCallback(){this.setAttribute("role","radioGroup"),this.addEventListener("click",this._handleClick.bind(this)),super.connectedCallback()}firstUpdated(e){super.firstUpdated(e);let t=this.renderRoot.querySelector("slot");t&&t.addEventListener("slotchange",()=>{this._loadRadios()}),this._loadRadios()}_loadRadios(){var t;let e=this.renderRoot.querySelector("slot");if(this.radios=Array.from((t=e==null?void 0:e.assignedElements())!=null?t:[]),this.radios.length>0){let i=this.radios.find(a=>a.hasAttribute("checked"));i?(i.setAttribute("aria-checked","true"),this._selected=this.radios.indexOf(i)):this._selected=-1}}_handleClick(e){let t=e.target,i=this.radios.indexOf(t);if(i===-1||t.hasAttribute("disabled"))return;let a=this.radios[this.selected],n=this.selected===i;n&&this.allowDeselect&&(i=-1),this.selected=i;let b=this.radios[this.selected];!this.allowDeselect&&!t.hasAttribute("checked")&&this._checkElement(t),n&&this.allowDeselect&&t.hasAttribute("checked")&&this._uncheckElement(t),this.dispatchEvent(new CustomEvent("radio-change",{bubbles:!0,composed:!0,detail:{current:b,previous:a}})),this.requestUpdate()}static get styles(){return[super.styles,h`
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
    `}};l([s({type:String,reflect:!0})],r.prototype,"label",2),l([s({type:Boolean,attribute:"allow-deselect",reflect:!0})],r.prototype,"allowDeselect",2),l([s({type:Boolean,reflect:!0})],r.prototype,"horizontal",2),l([s({type:Object,reflect:!0})],r.prototype,"data",2),r=l([u("omni-radio-group")],r);export{r as a};
//# sourceMappingURL=chunk.FHC7E3LE.js.map
