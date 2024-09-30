import{m as u,p as $}from"./chunk.BF43NN75.js";u();$();var q=globalThis,K=q.ShadowRoot&&(q.ShadyCSS===void 0||q.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,tt=Symbol(),dt=new WeakMap,U=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==tt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(K&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=dt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&dt.set(e,t))}return t}toString(){return this.cssText}},pt=o=>new U(typeof o=="string"?o:o+"",void 0,tt),Rt=(o,...t)=>{let e=o.length===1?o[0]:t.reduce((s,i,n)=>s+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[n+1],o[0]);return new U(e,o,tt)},et=(o,t)=>{if(K)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),i=q.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,o.appendChild(s)}},J=K?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return pt(e)})(o):o;u();$();var{is:Nt,defineProperty:Mt,getOwnPropertyDescriptor:kt,getOwnPropertyNames:Lt,getOwnPropertySymbols:zt,getPrototypeOf:It}=Object,g=globalThis,ut=g.trustedTypes,jt=ut?ut.emptyScript:"",st=g.reactiveElementPolyfillSupport,I=(o,t)=>o,it={toAttribute(o,t){switch(t){case Boolean:o=o?jt:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch(s){e=null}}return e}},At=(o,t)=>!Nt(o,t),$t={attribute:!0,type:String,converter:it,reflect:!1,hasChanged:At},_t,ft;(_t=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(ft=g.litPropertyMetadata)!=null||(g.litPropertyMetadata=new WeakMap);var f=class extends HTMLElement{static addInitializer(t){var e;this._$Ei(),((e=this.l)!=null?e:this.l=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$t){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Mt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){var r;let{get:i,set:n}=(r=kt(this.prototype,t))!=null?r:{get(){return this[e]},set(a){this[e]=a}};return{get(){return i==null?void 0:i.call(this)},set(a){let h=i==null?void 0:i.call(this);n.call(this,a),this.requestUpdate(t,h,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){var e;return(e=this.elementProperties.get(t))!=null?e:$t}static _$Ei(){if(this.hasOwnProperty(I("elementProperties")))return;let t=It(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(I("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(I("properties"))){let e=this.properties,s=[...Lt(e),...zt(e)];for(let i of s)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)e.unshift(J(i))}else t!==void 0&&e.push(J(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$EO)!=null?e:this._$EO=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)==null||s.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){var e;let t=(e=this.shadowRoot)!=null?e:this.attachShadow(this.constructor.shadowRootOptions);return et(t,this.constructor.elementStyles),t}connectedCallback(){var t,e;(t=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostConnected)==null?void 0:i.call(s)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){var n;let s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){let r=(((n=s.converter)==null?void 0:n.toAttribute)!==void 0?s.converter:it).toAttribute(e,s.type);this._$Em=t,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){var n;let s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let r=s.getPropertyOptions(i),a=typeof r.converter=="function"?{fromAttribute:r.converter}:((n=r.converter)==null?void 0:n.fromAttribute)!==void 0?r.converter:it;this._$Em=i,this[i]=a.fromAttribute(e,r.type),this._$Em=null}}requestUpdate(t,e,s){var i;if(t!==void 0){if(s!=null||(s=this.constructor.getPropertyOptions(t)),!((i=s.hasChanged)!=null?i:At)(this[t],e))return;this.P(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,s){var i;this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&((i=this._$Ej)!=null?i:this._$Ej=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s,i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if((s=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[r,a]of this._$Ep)this[r]=a;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[r,a]of n)a.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],a)}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(n=>{var r;return(r=n.hostUpdate)==null?void 0:r.call(n)}),this.update(e)):this._$EU()}catch(n){throw t=!1,this._$EU(),n}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}},mt;f.elementStyles=[],f.shadowRootOptions={mode:"open"},f[I("elementProperties")]=new Map,f[I("finalized")]=new Map,st==null||st({ReactiveElement:f}),((mt=g.reactiveElementVersions)!=null?mt:g.reactiveElementVersions=[]).push("2.0.4");u();$();var B=globalThis,F=B.trustedTypes,gt=F?F.createPolicy("lit-html",{createHTML:o=>o}):void 0,nt="$lit$",m=`lit$${Math.random().toFixed(9).slice(2)}$`,ht="?"+m,Bt=`<${ht}>`,E=document,D=()=>E.createComment(""),V=o=>o===null||typeof o!="object"&&typeof o!="function",at=Array.isArray,wt=o=>at(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",ot=`[ 	
\f\r]`,j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,yt=/-->/g,vt=/>/g,v=RegExp(`>|${ot}(?:([^\\s"'>=/]+)(${ot}*=${ot}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),St=/'/g,Et=/"/g,xt=/^(?:script|style|textarea|title)$/i,lt=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),Zt=lt(1),Xt=lt(2),Gt=lt(3),b=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),bt=new WeakMap,S=E.createTreeWalker(E,129);function Pt(o,t){if(!at(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return gt!==void 0?gt.createHTML(t):t}var Ut=(o,t)=>{let e=o.length-1,s=[],i,n=t===2?"<svg>":t===3?"<math>":"",r=j;for(let a=0;a<e;a++){let h=o[a],d,c,l=-1,_=0;for(;_<h.length&&(r.lastIndex=_,c=r.exec(h),c!==null);)_=r.lastIndex,r===j?c[1]==="!--"?r=yt:c[1]!==void 0?r=vt:c[2]!==void 0?(xt.test(c[2])&&(i=RegExp("</"+c[2],"g")),r=v):c[3]!==void 0&&(r=v):r===v?c[0]===">"?(r=i!=null?i:j,l=-1):c[1]===void 0?l=-2:(l=r.lastIndex-c[2].length,d=c[1],r=c[3]===void 0?v:c[3]==='"'?Et:St):r===Et||r===St?r=v:r===yt||r===vt?r=j:(r=v,i=void 0);let A=r===v&&o[a+1].startsWith("/>")?" ":"";n+=r===j?h+Bt:l>=0?(s.push(d),h.slice(0,l)+nt+h.slice(l)+m+A):h+m+(l===-2?a:A)}return[Pt(o,n+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]},C=class{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,r=0,a=t.length-1,h=this.parts,[d,c]=Ut(t,e);if(this.el=C.createElement(d,s),S.currentNode=this.el.content,e===2||e===3){let l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(i=S.nextNode())!==null&&h.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(let l of i.getAttributeNames())if(l.endsWith(nt)){let _=c[r++],A=i.getAttribute(l).split(m),W=/([.?@])?(.*)/.exec(_);h.push({type:1,index:n,name:W[2],strings:A,ctor:W[1]==="."?Z:W[1]==="?"?X:W[1]==="@"?G:x}),i.removeAttribute(l)}else l.startsWith(m)&&(h.push({type:6,index:n}),i.removeAttribute(l));if(xt.test(i.tagName)){let l=i.textContent.split(m),_=l.length-1;if(_>0){i.textContent=F?F.emptyScript:"";for(let A=0;A<_;A++)i.append(l[A],D()),S.nextNode(),h.push({type:2,index:++n});i.append(l[_],D())}}}else if(i.nodeType===8)if(i.data===ht)h.push({type:2,index:n});else{let l=-1;for(;(l=i.data.indexOf(m,l+1))!==-1;)h.push({type:7,index:n}),l+=m.length-1}n++}}static createElement(t,e){let s=E.createElement("template");return s.innerHTML=t,s}};function w(o,t,e=o,s){var r,a,h;if(t===b)return t;let i=s!==void 0?(r=e.o)==null?void 0:r[s]:e.l,n=V(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==n&&((a=i==null?void 0:i._$AO)==null||a.call(i,!1),n===void 0?i=void 0:(i=new n(o),i._$AT(o,e,s)),s!==void 0?((h=e.o)!=null?h:e.o=[])[s]=i:e.l=i),i!==void 0&&(t=w(o,i._$AS(o,t.values),i,s)),t}var Q=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var d;let{el:{content:e},parts:s}=this._$AD,i=((d=t==null?void 0:t.creationScope)!=null?d:E).importNode(e,!0);S.currentNode=i;let n=S.nextNode(),r=0,a=0,h=s[0];for(;h!==void 0;){if(r===h.index){let c;h.type===2?c=new y(n,n.nextSibling,this,t):h.type===1?c=new h.ctor(n,h.name,h.strings,this,t):h.type===6&&(c=new Y(n,this,t)),this._$AV.push(c),h=s[++a]}r!==(h==null?void 0:h.index)&&(n=S.nextNode(),r++)}return S.currentNode=E,i}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},y=class{get _$AU(){var t,e;return(e=(t=this._$AM)==null?void 0:t._$AU)!=null?e:this.v}constructor(t,e,s,i){var n;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this.v=(n=i==null?void 0:i.isConnected)!=null?n:!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=w(this,t,e),V(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==b&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):wt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&V(this._$AH)?this._$AA.nextSibling.data=t:this.T(E.createTextNode(t)),this._$AH=t}$(t){var n;let{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=C.createElement(Pt(s.h,s.h[0]),this.options)),s);if(((n=this._$AH)==null?void 0:n._$AD)===i)this._$AH.p(e);else{let r=new Q(i,this),a=r.u(this.options);r.p(e),this.T(a),this._$AH=r}}_$AC(t){let e=bt.get(t.strings);return e===void 0&&bt.set(t.strings,e=new C(t)),e}k(t){at(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,i=0;for(let n of t)i===e.length?e.push(s=new y(this.O(D()),this.O(D()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){let i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this.v=t,(e=this._$AP)==null||e.call(this,t))}},x=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}_$AI(t,e=this,s,i){let n=this.strings,r=!1;if(n===void 0)t=w(this,t,e,0),r=!V(t)||t!==this._$AH&&t!==b,r&&(this._$AH=t);else{let a=t,h,d;for(t=n[0],h=0;h<n.length-1;h++)d=w(this,a[s+h],e,h),d===b&&(d=this._$AH[h]),r||(r=!V(d)||d!==this._$AH[h]),d===p?t=p:t!==p&&(t+=(d!=null?d:"")+n[h+1]),this._$AH[h]=d}r&&!i&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}},Z=class extends x{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}},X=class extends x{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}},G=class extends x{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){var r;if((t=(r=w(this,t,e,0))!=null?r:p)===b)return;let s=this._$AH,i=t===p&&s!==p||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==p&&(s===p||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)==null?void 0:e.host)!=null?s:this.element,t):this._$AH.handleEvent(t)}},Y=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){w(this,t)}},Yt={M:nt,P:m,A:ht,C:1,L:Ut,R:Q,D:wt,V:w,I:y,H:x,N:X,U:G,B:Z,F:Y},rt=B.litHtmlPolyfillSupport,Ct;rt==null||rt(C,y),((Ct=B.litHtmlVersions)!=null?Ct:B.litHtmlVersions=[]).push("3.2.0");var Ht=(o,t,e)=>{var n,r;let s=(n=e==null?void 0:e.renderBefore)!=null?n:t,i=s._$litPart$;if(i===void 0){let a=(r=e==null?void 0:e.renderBefore)!=null?r:null;s._$litPart$=i=new y(t.insertBefore(D(),a),a,void 0,e!=null?e:{})}return i._$AI(o),i};u();$();var P=class extends f{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){var e,s;let t=super.createRenderRoot();return(s=(e=this.renderOptions).renderBefore)!=null||(e.renderBefore=t.firstChild),t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.o=Ht(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this.o)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.o)==null||t.setConnected(!1)}render(){return b}},Ot;P._$litElement$=!0,P.finalized=!0,(Ot=globalThis.litElementHydrateSupport)==null||Ot.call(globalThis,{LitElement:P});var ct=globalThis.litElementPolyfillSupport;ct==null||ct({LitElement:P});var Tt;((Tt=globalThis.litElementVersions)!=null?Tt:globalThis.litElementVersions=[]).push("4.1.0");u();$();u();$();export{Rt as a,it as b,At as c,Zt as d,Xt as e,b as f,p as g,Yt as h,Ht as i,P as j};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
//# sourceMappingURL=chunk.63YMDT6M.js.map