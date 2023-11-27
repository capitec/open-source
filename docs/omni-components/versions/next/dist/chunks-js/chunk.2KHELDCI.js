import{a as x,b,m as o,p as n}from"./chunk.BF43NN75.js";o();n();var A=t=>e=>typeof e=="function"?((r,i)=>(customElements.define(r,i),i))(t,e):((r,i)=>{let{kind:l,elements:s}=i;return{kind:l,elements:s,finisher(h){customElements.define(r,h)}}})(t,e);o();n();var E=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?b(x({},e),{finisher(r){r.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(r){r.createProperty(e.key,t)}},S=(t,e,r)=>{e.constructor.createProperty(r,t)};function P(t){return(e,r)=>r!==void 0?S(t,e,r):E(t,e)}o();n();function _(t){return P(b(x({},t),{state:!0}))}o();n();o();n();var g=({finisher:t,descriptor:e})=>(r,i)=>{var l;if(i===void 0){let s=(l=r.originalKey)!==null&&l!==void 0?l:r.key,h=e!=null?{kind:"method",placement:"prototype",key:s,descriptor:e(r.key)}:b(x({},r),{key:s});return t!=null&&(h.finisher=function(q){t(q,s)}),h}{let s=r.constructor;e!==void 0&&Object.defineProperty(r,i,e(i)),t==null||t(s,i)}};function I(t,e){return g({descriptor:r=>{let i={get(){var l,s;return(s=(l=this.renderRoot)===null||l===void 0?void 0:l.querySelector(t))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0};if(e){let l=typeof r=="symbol"?Symbol():"__"+r;i.get=function(){var s,h;return this[l]===void 0&&(this[l]=(h=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(t))!==null&&h!==void 0?h:null),this[l]}}return i}})}o();n();function W(t){return g({descriptor:e=>({get(){var r,i;return(i=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelectorAll(t))!==null&&i!==void 0?i:[]},enumerable:!0,configurable:!0})})}o();n();o();n();o();n();o();n();var k,ae=((k=window.HTMLSlotElement)===null||k===void 0?void 0:k.prototype.assignedElements)!=null?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter(r=>r.nodeType===Node.ELEMENT_NODE);o();n();export{A as a,P as b,_ as c,I as d,W as e};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
//# sourceMappingURL=chunk.2KHELDCI.js.map
