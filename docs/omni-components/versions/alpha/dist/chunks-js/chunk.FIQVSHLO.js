import{a as y,b as E}from"./chunk.MYG5FMLT.js";import{a as p}from"./chunk.LB764BBD.js";import{h as k}from"./chunk.PNTHLTQK.js";import{a as R,b as c,d as l}from"./chunk.S2K25ADN.js";import{a as g,b as m,g as x}from"./chunk.L3RZWW2F.js";import{j as s,m as v,p as b}from"./chunk.BF43NN75.js";v();b();var a=class extends k{constructor(){super(...arguments);this.position="bottom";this.toastCloseClickBound=this.closeToast.bind(this)}static create(t){if(t.parent||(t.parent=document.createElement("div"),t.parent.style.display="contents",document.body.appendChild(t.parent)),typeof t.parent=="string"&&(t.parent=document.getElementById(t.parent),!t.parent))return;let e=y();return x(m`        
            <omni-toast-stack
                    ${E(e)}
                    id="${p(t.id)}"
                    position="${p(t.position)}"
                    ?reverse="${t.reverse}">
            </omni-toast-stack>
        `,t.parent),e.value}showToast(t){let e=document.createElement("omni-toast");if(e.type=t.type,e.header=t.header,e.detail=t.detail,e.closeable=t.closeable,t.duration&&e.setAttribute(i,t.duration.toString()),t.prefix){let n=document.createElement("omni-render-element");n.slot="prefix",n.renderer=typeof t.prefix=="function"?t.prefix:()=>t.prefix,e.appendChild(n)}if(t.content){let n=document.createElement("omni-render-element");n.renderer=typeof t.content=="function"?t.content:()=>t.content,e.appendChild(n)}if(t.close&&t.closeable){let n=document.createElement("omni-render-element");n.slot="close",n.renderer=typeof t.close=="function"?t.close:()=>t.close,e.appendChild(n)}let{matches:r}=window.matchMedia(d);return r&&document.timeline?this.slideIn(e):this.appendChild(e),e}onSlotChange(){let t="close-click",e="data-toast-loaded",{matches:r}=window.matchMedia(d),n=r&&document.timeline;this.slotElement.assignedElements({flatten:!0}).forEach(async o=>{var f;o.removeEventListener(t,this.toastCloseClickBound),o.addEventListener(t,this.toastCloseClickBound),o.hasAttribute(e)||(o.setAttribute(e,""),o.hasAttribute(i)?n?(await o.animate([{offset:0,opacity:0},{offset:.1,opacity:1},{offset:.9,opacity:1},{offset:1,opacity:0}],{duration:Number((f=o.getAttribute(i))!=null?f:"5000"),easing:"ease"}).finished,o.parentElement&&(o.remove(),this.raiseToastRemove(o))):(await new Promise(h=>{var u;return setTimeout(h,Number((u=o.getAttribute(i))!=null?u:"5000"))}),o.parentElement&&(o.remove(),this.raiseToastRemove(o))):n&&o.animate([{offset:0,opacity:0},{offset:1,opacity:1}],{duration:500,easing:"ease"}))})}async closeToast(t){let e=t.currentTarget,{matches:r}=window.matchMedia(d);if(r&&document.timeline){let n=Number(getComputedStyle(e).getPropertyValue("opacity"));await e.animate([{offset:0,opacity:n},{offset:1,opacity:0}],{duration:200,easing:"ease"}).finished}e.parentElement&&(e.remove(),this.raiseToastRemove(e))}raiseToastRemove(t){this.dispatchEvent(new CustomEvent("toast-remove",{bubbles:!0,composed:!0,cancelable:!1,detail:t})),t==null||t.dispatchEvent(new CustomEvent("toast-stack-remove",{bubbles:!0,composed:!0,cancelable:!1,detail:this}))}async slideIn(t){this.toastContainer||await this.updateComplete;let e=this.toastContainer.offsetHeight;this.appendChild(t);let n=this.toastContainer.offsetHeight-e,o=this.toastContainer.animate([{transform:`translateY(${n}px)`},{transform:"translateY(0)"}],{duration:150,easing:"ease-out"});o.startTime=document.timeline.currentTime}static get styles(){return[g`
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
		`}};s([c({type:String,reflect:!0})],a.prototype,"position",2),s([c({type:Boolean,reflect:!0})],a.prototype,"reverse",2),s([l(".toast-box")],a.prototype,"toastContainer",2),s([l("slot")],a.prototype,"slotElement",2),a=s([R("omni-toast-stack")],a);var d="(prefers-reduced-motion: no-preference)",i="data-toast-duration";export{a,i as b};
//# sourceMappingURL=chunk.FIQVSHLO.js.map
