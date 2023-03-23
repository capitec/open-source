import{l as p,o as $}from"./chunk.2ZZQBHAA.js";p();$();var W=window,q=W.ShadowRoot&&(W.ShadyCSS===void 0||W.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,tt=Symbol(),at=new WeakMap,P=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==tt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(q&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=at.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&at.set(e,t))}return t}toString(){return this.cssText}},dt=n=>new P(typeof n=="string"?n:n+"",void 0,tt),Ut=(n,...t)=>{let e=n.length===1?n[0]:t.reduce((s,i,r)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+n[r+1],n[0]);return new P(e,n,tt)},et=(n,t)=>{q?n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{let s=document.createElement("style"),i=W.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,n.appendChild(s)})},K=q?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return dt(e)})(n):n;p();$();var st,Z=window,ct=Z.trustedTypes,Pt=ct?ct.emptyScript:"",ut=Z.reactiveElementPolyfillSupport,nt={toAttribute(n,t){switch(t){case Boolean:n=n?Pt:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch(s){e=null}}return e}},pt=(n,t)=>t!==n&&(t==t||n==n),it={attribute:!0,type:String,converter:nt,reflect:!1,hasChanged:pt},f=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,s)=>{let i=this._$Ep(s,e);i!==void 0&&(this._$Ev.set(i,s),t.push(i))}),t}static createProperty(t,e=it){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let s=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){let r=this[t];this[e]=i,this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||it}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let e=this.properties,s=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let i of s)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)e.unshift(K(i))}else t!==void 0&&e.push(K(t));return e}static _$Ep(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)===null||s===void 0||s.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return et(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostConnected)===null||s===void 0?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostDisconnected)===null||s===void 0?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e,s=it){var i;let r=this.constructor._$Ep(t,s);if(r!==void 0&&s.reflect===!0){let o=(((i=s.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?s.converter:nt).toAttribute(e,s.type);this._$El=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(t,e){var s;let i=this.constructor,r=i._$Ev.get(t);if(r!==void 0&&this._$El!==r){let o=i.getPropertyOptions(r),d=typeof o.converter=="function"?{fromAttribute:o.converter}:((s=o.converter)===null||s===void 0?void 0:s.fromAttribute)!==void 0?o.converter:nt;this._$El=r,this[r]=d.fromAttribute(e,o.type),this._$El=null}}requestUpdate(t,e,s){let i=!0;t!==void 0&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||pt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,r)=>this[r]=i),this._$Ei=void 0);let e=!1,s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var r;return(r=i.hostUpdate)===null||r===void 0?void 0:r.call(i)}),this.update(s)):this._$Ek()}catch(i){throw e=!1,this._$Ek(),i}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(s=>{var i;return(i=s.hostUpdated)===null||i===void 0?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,s)=>this._$EO(s,this[s],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};f.finalized=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},ut==null||ut({ReactiveElement:f}),((st=Z.reactiveElementVersions)!==null&&st!==void 0?st:Z.reactiveElementVersions=[]).push("1.6.1");p();$();var ot,J=window,w=J.trustedTypes,$t=w?w.createPolicy("lit-html",{createHTML:n=>n}):void 0,A=`lit$${(Math.random()+"").slice(9)}$`,rt="?"+A,Ht=`<${rt}>`,x=document,B=(n="")=>x.createComment(n),D=n=>n===null||typeof n!="object"&&typeof n!="function",yt=Array.isArray,St=n=>yt(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,vt=/-->/g,_t=/>/g,g=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ft=/'/g,At=/"/g,Et=/^(?:script|style|textarea|title)$/i,bt=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),Bt=bt(1),Dt=bt(2),y=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),mt=new WeakMap,C=x.createTreeWalker(x,129,null,!1),Ct=(n,t)=>{let e=n.length-1,s=[],i,r=t===2?"<svg>":"",o=j;for(let l=0;l<e;l++){let h=n[l],_,a,c=-1,v=0;for(;v<h.length&&(o.lastIndex=v,a=o.exec(h),a!==null);)v=o.lastIndex,o===j?a[1]==="!--"?o=vt:a[1]!==void 0?o=_t:a[2]!==void 0?(Et.test(a[2])&&(i=RegExp("</"+a[2],"g")),o=g):a[3]!==void 0&&(o=g):o===g?a[0]===">"?(o=i!=null?i:j,c=-1):a[1]===void 0?c=-2:(c=o.lastIndex-a[2].length,_=a[1],o=a[3]===void 0?g:a[3]==='"'?At:ft):o===At||o===ft?o=g:o===vt||o===_t?o=j:(o=g,i=void 0);let I=o===g&&n[l+1].startsWith("/>")?" ":"";r+=o===j?h+Ht:c>=0?(s.push(_),h.slice(0,c)+"$lit$"+h.slice(c)+A+I):h+A+(c===-2?(s.push(void 0),l):I)}let d=r+(n[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[$t!==void 0?$t.createHTML(d):d,s]},S=class{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,o=0,d=t.length-1,l=this.parts,[h,_]=Ct(t,e);if(this.el=S.createElement(h,s),C.currentNode=this.el.content,e===2){let a=this.el.content,c=a.firstChild;c.remove(),a.append(...c.childNodes)}for(;(i=C.nextNode())!==null&&l.length<d;){if(i.nodeType===1){if(i.hasAttributes()){let a=[];for(let c of i.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(A)){let v=_[o++];if(a.push(c),v!==void 0){let I=i.getAttribute(v.toLowerCase()+"$lit$").split(A),V=/([.?@])?(.*)/.exec(v);l.push({type:1,index:r,name:V[2],strings:I,ctor:V[1]==="."?G:V[1]==="?"?Q:V[1]==="@"?X:b})}else l.push({type:6,index:r})}for(let c of a)i.removeAttribute(c)}if(Et.test(i.tagName)){let a=i.textContent.split(A),c=a.length-1;if(c>0){i.textContent=w?w.emptyScript:"";for(let v=0;v<c;v++)i.append(a[v],B()),C.nextNode(),l.push({type:2,index:++r});i.append(a[c],B())}}}else if(i.nodeType===8)if(i.data===rt)l.push({type:2,index:r});else{let a=-1;for(;(a=i.data.indexOf(A,a+1))!==-1;)l.push({type:7,index:r}),a+=A.length-1}r++}}static createElement(t,e){let s=x.createElement("template");return s.innerHTML=t,s}};function E(n,t,e=n,s){var i,r,o,d;if(t===y)return t;let l=s!==void 0?(i=e._$Co)===null||i===void 0?void 0:i[s]:e._$Cl,h=D(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),h===void 0?l=void 0:(l=new h(n),l._$AT(n,e,s)),s!==void 0?((o=(d=e)._$Co)!==null&&o!==void 0?o:d._$Co=[])[s]=l:e._$Cl=l),l!==void 0&&(t=E(n,l._$AS(n,t.values),l,s)),t}var F=class{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;let{el:{content:s},parts:i}=this._$AD,r=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:x).importNode(s,!0);C.currentNode=r;let o=C.nextNode(),d=0,l=0,h=i[0];for(;h!==void 0;){if(d===h.index){let _;h.type===2?_=new m(o,o.nextSibling,this,t):h.type===1?_=new h.ctor(o,h.name,h.strings,this,t):h.type===6&&(_=new Y(o,this,t)),this.u.push(_),h=i[++l]}d!==(h==null?void 0:h.index)&&(o=C.nextNode(),d++)}return r}p(t){let e=0;for(let s of this.u)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},m=class{constructor(t,e,s,i){var r;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cm=(r=i==null?void 0:i.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),D(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==y&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):St(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==u&&D(this._$AH)?this._$AA.nextSibling.data=t:this.T(x.createTextNode(t)),this._$AH=t}$(t){var e;let{values:s,_$litType$:i}=t,r=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=S.createElement(i.h,this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.p(s);else{let o=new F(r,this),d=o.v(this.options);o.p(s),this.T(d),this._$AH=o}}_$AC(t){let e=mt.get(t.strings);return e===void 0&&mt.set(t.strings,e=new S(t)),e}k(t){yt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,i=0;for(let r of t)i===e.length?e.push(s=new m(this.O(B()),this.O(B()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this._$AB;){let i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cm=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},b=class{constructor(t,e,s,i,r){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){let r=this.strings,o=!1;if(r===void 0)t=E(this,t,e,0),o=!D(t)||t!==this._$AH&&t!==y,o&&(this._$AH=t);else{let d=t,l,h;for(t=r[0],l=0;l<r.length-1;l++)h=E(this,d[s+l],e,l),h===y&&(h=this._$AH[l]),o||(o=!D(h)||h!==this._$AH[l]),h===u?t=u:t!==u&&(t+=(h!=null?h:"")+r[l+1]),this._$AH[l]=h}o&&!i&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}},G=class extends b{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}},Ot=w?w.emptyScript:"",Q=class extends b{constructor(){super(...arguments),this.type=4}j(t){t&&t!==u?this.element.setAttribute(this.name,Ot):this.element.removeAttribute(this.name)}},X=class extends b{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){var s;if((t=(s=E(this,t,e,0))!==null&&s!==void 0?s:u)===y)return;let i=this._$AH,r=t===u&&i!==u||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==u&&(i===u||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}},Y=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}},It={P:"$lit$",A,M:rt,C:1,L:Ct,R:F,D:St,V:E,I:m,H:b,N:Q,U:X,B:G,F:Y},gt=J.litHtmlPolyfillSupport;gt==null||gt(S,m),((ot=J.litHtmlVersions)!==null&&ot!==void 0?ot:J.litHtmlVersions=[]).push("2.6.1");var wt=(n,t,e)=>{var s,i;let r=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:t,o=r._$litPart$;if(o===void 0){let d=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:null;r._$litPart$=o=new m(t.insertBefore(B(),d),d,void 0,e!=null?e:{})}return o._$AI(n),o};p();$();var lt,ht;var U=class extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;let s=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=s.firstChild),s}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=wt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return y}};U.finalized=!0,U._$litElement$=!0,(lt=globalThis.litElementHydrateSupport)===null||lt===void 0||lt.call(globalThis,{LitElement:U});var xt=globalThis.litElementPolyfillSupport;xt==null||xt({LitElement:U});((ht=globalThis.litElementVersions)!==null&&ht!==void 0?ht:globalThis.litElementVersions=[]).push("3.2.2");p();$();p();$();export{Ut as a,Bt as b,y as c,u as d,It as e,wt as f,U as g};
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
//# sourceMappingURL=chunk.CIM3NS6G.js.map