import{a as v,b}from"./chunk.XQ6LOMNM.js";import{a as l}from"./chunk.LB764BBD.js";import{h as y}from"./chunk.QA3WYCV3.js";import{a as x,b as c,d as m}from"./chunk.S2K25ADN.js";import{a as u,b as i,g}from"./chunk.L3RZWW2F.js";import{j as r,m as f,p as h}from"./chunk.BF43NN75.js";f();h();var n=class extends y{constructor(){super(...arguments);this.position="bottom"}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}static create(t){if(t.parent||(t.parent=document.createElement("div"),t.parent.style.display="contents",document.body.appendChild(t.parent)),typeof t.parent=="string"&&(t.parent=document.getElementById(t.parent),!t.parent))return;let o=v();return g(i`        
            <omni-toast-stack
                    ${b(o)}
                    id="${l(t.id)}"
                    position="${l(t.position)}"
                    ?reverse="${t.reverse}">
            </omni-toast-stack>
        `,t.parent),o.value}showToast(t){let o=document.createElement("omni-toast");if(o.type=t.type,o.header=t.header,o.detail=t.detail,o.closeable=t.closeable,t.duration&&o.setAttribute("data-toast-duration",t.duration.toString()),t.prefix){let e=document.createElement("omni-render-element");e.slot="prefix",e.renderer=typeof t.prefix=="function"?t.prefix:()=>t.prefix,o.appendChild(e)}if(t.content){let e=document.createElement("omni-render-element");e.renderer=typeof t.content=="function"?t.content:()=>t.content,o.appendChild(e)}if(t.close&&t.closeable){let e=document.createElement("omni-render-element");e.slot="close",e.renderer=typeof t.close=="function"?t.close:()=>t.close,o.appendChild(e)}let{matches:a}=window.matchMedia("(prefers-reduced-motion: no-preference)");return a&&document.timeline?this.slideIn(o):this.appendChild(o),o}onSlotChange(t){let{matches:o}=window.matchMedia("(prefers-reduced-motion: no-preference)"),a=o&&document.timeline;this.slotElement.assignedElements({flatten:!0}).forEach(async e=>{var s;e.removeEventListener("close-click",this.closeToast),e.addEventListener("close-click",this.closeToast),e.hasAttribute("data-toast-loaded")||(e.setAttribute("data-toast-loaded",""),e.hasAttribute("data-toast-duration")?a?(await e.animate([{offset:0,opacity:0},{offset:.1,opacity:1},{offset:.9,opacity:1},{offset:1,opacity:0}],{duration:Number((s=e.getAttribute("data-toast-duration"))!=null?s:"5000"),easing:"ease"}).finished,e.parentElement&&e.remove()):(await new Promise(p=>{var d;return setTimeout(p,Number((d=e.getAttribute("data-toast-duration"))!=null?d:"5000"))}),e.parentElement&&e.remove()):a&&e.animate([{offset:0,opacity:0},{offset:1,opacity:1}],{duration:500,easing:"ease"}))})}async closeToast(t){let o=t.currentTarget,{matches:a}=window.matchMedia("(prefers-reduced-motion: no-preference)");if(a&&document.timeline){let e=Number(getComputedStyle(o).getPropertyValue("opacity"));await o.animate([{offset:0,opacity:e},{offset:1,opacity:0}],{duration:200,easing:"ease"}).finished}o.parentElement&&o.remove()}async slideIn(t){this.toastContainer||await this.updateComplete;let o=this.toastContainer.offsetHeight;this.appendChild(t);let e=this.toastContainer.offsetHeight-o,s=this.toastContainer.animate([{transform:`translateY(${e}px)`},{transform:"translateY(0)"}],{duration:150,easing:"ease-out"});s.startTime=document.timeline.currentTime}static get styles(){return[u`
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
		`]}render(){return i`
			<div class="toast-box">
                <slot @slotchange="${this.onSlotChange}"></slot>
            </div>
		`}};r([c({type:String,reflect:!0})],n.prototype,"position",2),r([c({type:String,reflect:!0})],n.prototype,"reverse",2),r([m(".toast-box")],n.prototype,"toastContainer",2),r([m("slot")],n.prototype,"slotElement",2),n=r([x("omni-toast-stack")],n);export{n as a};
//# sourceMappingURL=chunk.QERJGMPC.js.map
