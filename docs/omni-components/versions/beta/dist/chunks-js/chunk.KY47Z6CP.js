import{a as y,b as E}from"./chunk.MYG5FMLT.js";import{a as p}from"./chunk.LB764BBD.js";import{h as w}from"./chunk.PNTHLTQK.js";import{a as R,b as c,d as l}from"./chunk.S2K25ADN.js";import{a as v,b as m,g as x}from"./chunk.L3RZWW2F.js";import{j as s,m as g,p as b}from"./chunk.BF43NN75.js";g();b();var a=class extends w{constructor(){super(...arguments);this.position="bottom"}static create(t){if(t.parent||(t.parent=document.createElement("div"),t.parent.style.display="contents",document.body.appendChild(t.parent)),typeof t.parent=="string"&&(t.parent=document.getElementById(t.parent),!t.parent))return;let e=y();return x(m`        
            <omni-toast-stack
                    ${E(e)}
                    id="${p(t.id)}"
                    position="${p(t.position)}"
                    ?reverse="${t.reverse}">
            </omni-toast-stack>
        `,t.parent),e.value}showToast(t){let e=document.createElement("omni-toast");if(e.type=t.type,e.header=t.header,e.detail=t.detail,e.closeable=t.closeable,t.duration&&e.setAttribute(i,t.duration.toString()),t.prefix){let o=document.createElement("omni-render-element");o.slot="prefix",o.renderer=typeof t.prefix=="function"?t.prefix:()=>t.prefix,e.appendChild(o)}if(t.content){let o=document.createElement("omni-render-element");o.renderer=typeof t.content=="function"?t.content:()=>t.content,e.appendChild(o)}if(t.close&&t.closeable){let o=document.createElement("omni-render-element");o.slot="close",o.renderer=typeof t.close=="function"?t.close:()=>t.close,e.appendChild(o)}let{matches:r}=window.matchMedia(f);return r&&document.timeline?this.slideIn(e):this.appendChild(e),e}onSlotChange(){let t="close-click",e="data-toast-loaded",{matches:r}=window.matchMedia(f),o=r&&document.timeline;this.slotElement.assignedElements({flatten:!0}).forEach(async n=>{var d;n.removeEventListener(t,this.closeToast),n.addEventListener(t,this.closeToast),n.hasAttribute(e)||(n.setAttribute(e,""),n.hasAttribute(i)?o?(await n.animate([{offset:0,opacity:0},{offset:.1,opacity:1},{offset:.9,opacity:1},{offset:1,opacity:0}],{duration:Number((d=n.getAttribute(i))!=null?d:"5000"),easing:"ease"}).finished,n.parentElement&&n.remove()):(await new Promise(h=>{var u;return setTimeout(h,Number((u=n.getAttribute(i))!=null?u:"5000"))}),n.parentElement&&n.remove()):o&&n.animate([{offset:0,opacity:0},{offset:1,opacity:1}],{duration:500,easing:"ease"}))})}async closeToast(t){let e=t.currentTarget,{matches:r}=window.matchMedia(f);if(r&&document.timeline){let o=Number(getComputedStyle(e).getPropertyValue("opacity"));await e.animate([{offset:0,opacity:o},{offset:1,opacity:0}],{duration:200,easing:"ease"}).finished}e.parentElement&&e.remove()}async slideIn(t){this.toastContainer||await this.updateComplete;let e=this.toastContainer.offsetHeight;this.appendChild(t);let o=this.toastContainer.offsetHeight-e,n=this.toastContainer.animate([{transform:`translateY(${o}px)`},{transform:"translateY(0)"}],{duration:150,easing:"ease-out"});n.startTime=document.timeline.currentTime}static get styles(){return[v`
			:host {
				position: fixed;

				z-index: var(--omni-toast-stack-z-index, 10000);

				gap: 20px;
                color: var(--omni-toast-stack-font-color, var(--omni-font-color));
                
			}

            :host(:not([position])),
            :host([position=bottom]) {
				bottom: var(--omni-toast-stack-anchor-bottom, 20px);
                left: 50%;
                transform: translate(-50%, 0);
            }

            :host([position=top]) {
				top: var(--omni-toast-stack-anchor-top, 20px);
                left: 50%;
                transform: translate(-50%, 0);
            }

            :host([position=left]) {
				left: var(--omni-toast-stack-anchor-left, 20px);
                top: 50%;
                transform: translate(0, -50%);
            }

            :host([position=right]) {
				right: var(--omni-toast-stack-anchor-right, 20px);
                top: 50%;
                transform: translate(0, -50%);
            }

            :host([position=top-left]) {
				top: var(--omni-toast-stack-anchor-top, 20px);
				left: var(--omni-toast-stack-anchor-left, 20px);
            }

            :host([position=top-right]) {
				top: var(--omni-toast-stack-anchor-top, 20px);
				right: var(--omni-toast-stack-anchor-right, 20px);
            }

            :host([position=bottom-left]) {
				bottom: var(--omni-toast-stack-anchor-bottom, 20px);
				left: var(--omni-toast-stack-anchor-left, 20px);
            }
            
            :host([position=bottom-right]) {
				bottom: var(--omni-toast-stack-anchor-bottom, 20px);
				right: var(--omni-toast-stack-anchor-right, 20px);
            }

            .toast-box {
                display: flex;
                flex-direction: column;
            }

            :host([reverse]) .toast-box {
                flex-direction: column-reverse;
            }

            ::slotted(omni-toast),
			omni-toast {
				min-width: unset;
				max-width: unset;

				will-change: opacity;

				margin-top: var(--omni-toast-stack-gap, 10px) !important;
			}
		`]}render(){return m`
			<div class="toast-box">
                <slot @slotchange="${this.onSlotChange.bind(this)}"></slot>
            </div>
		`}};s([c({type:String,reflect:!0})],a.prototype,"position",2),s([c({type:String,reflect:!0})],a.prototype,"reverse",2),s([l(".toast-box")],a.prototype,"toastContainer",2),s([l("slot")],a.prototype,"slotElement",2),a=s([R("omni-toast-stack")],a);var f="(prefers-reduced-motion: no-preference)",i="data-toast-duration";export{a,i as b};
//# sourceMappingURL=chunk.KY47Z6CP.js.map
