import{b as D}from"./chunk.2KHELDCI.js";import{a as B,b as R,d as S,f as L,h as I}from"./chunk.6H2RNHNO.js";import{j as P,m as n,p as s}from"./chunk.BF43NN75.js";n();s();n();s();n();s();n();s();var{I:F}=L,U=o=>o===null||typeof o!="object"&&typeof o!="function";var z=o=>o.strings===void 0;var O={},J=(o,e=O)=>o._$AH=e;n();s();n();s();var E={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},H=o=>(...e)=>({_$litDirective$:o,values:e}),b=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var g=(o,e)=>{var t,r;let i=o._$AN;if(i===void 0)return!1;for(let a of i)(r=(t=a)._$AO)===null||r===void 0||r.call(t,e,!1),g(a,e);return!0},C=o=>{let e,t;do{if((e=o._$AM)===void 0)break;t=e._$AN,t.delete(o),o=e}while((t==null?void 0:t.size)===0)},G=o=>{for(let e;e=o._$AM;o=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(o))break;t.add(o),W(e)}};function Z(o){this._$AN!==void 0?(C(this),this._$AM=o,G(this)):this._$AM=o}function Q(o,e=!1,t=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(e)if(Array.isArray(r))for(let a=t;a<r.length;a++)g(r[a],!1),C(r[a]);else r!=null&&(g(r,!1),C(r));else g(this,o)}var W=o=>{var e,t,r,i;o.type==E.CHILD&&((e=(r=o)._$AP)!==null&&e!==void 0||(r._$AP=Q),(t=(i=o)._$AQ)!==null&&t!==void 0||(i._$AQ=Z))},y=class extends b{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),G(this),this.isConnected=e._$AU}_$AO(e,t=!0){var r,i;e!==this.isConnected&&(this.isConnected=e,e?(r=this.reconnected)===null||r===void 0||r.call(this):(i=this.disconnected)===null||i===void 0||i.call(this)),t&&(g(this,e),C(this))}setValue(e){if(z(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};n();s();var w=class{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}},T=class{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){var e;(e=this.Y)!==null&&e!==void 0||(this.Y=new Promise(t=>this.Z=t))}resume(){var e;(e=this.Z)===null||e===void 0||e.call(this),this.Y=this.Z=void 0}};var V=o=>!U(o)&&typeof o.then=="function",Y=1073741823,M=class extends y{constructor(){super(...arguments),this._$C_t=Y,this._$Cwt=[],this._$Cq=new w(this),this._$CK=new T}render(...e){var t;return(t=e.find(r=>!V(r)))!==null&&t!==void 0?t:S}update(e,t){let r=this._$Cwt,i=r.length;this._$Cwt=t;let a=this._$Cq,N=this._$CK;this.isConnected||this.disconnected();for(let l=0;l<t.length&&!(l>this._$C_t);l++){let p=t[l];if(!V(p))return this._$C_t=l,p;l<i&&p===r[l]||(this._$C_t=Y,i=0,Promise.resolve(p).then(async K=>{for(;N.get();)await N.get();let A=a.deref();if(A!==void 0){let k=A._$Cwt.indexOf(p);k>-1&&k<A._$C_t&&(A._$C_t=k,A.setValue(K))}}))}return S}disconnected(){this._$Cq.disconnect(),this._$CK.pause()}reconnected(){this._$Cq.reconnect(this),this._$CK.resume()}},q=H(M);var x=class extends I{static get styles(){return B`
      * {
        box-sizing: border-box;
      }

      :host {
        /* ----- THEMES -----*/

        /* Handy tool for color lighten / darken: https://www.cssfontstack.com/oldsites/hexcolortool/. */

        --omni-primary-color: var(--omni-theme-primary-color, #808080);
        --omni-primary-hover-color: var(--omni-theme-primary-hover-color, #787878); /* 3% darker */
        --omni-primary-active-color: var(--omni-theme-primary-active-color, #717171); /* 6% darker */

        --omni-accent-color: var(--omni-theme-accent-color, #c3c3c3);
        --omni-accent-hover-color: var(--omni-theme-accent-hover-color, #bbbbbb1a); /* 3% darker with alpha blend */
        --omni-accent-active-color: var(--omni-theme-accent-active-color, #b4b4b4); /* 6% darker */

        --omni-background-color: var(--omni-theme-background-color, #ffffff);
        --omni-background-hover-color: var(--omni-theme-background-hover-color, #f7f7f71a); /* 3% darker with alpha blend */
        --omni-background-active-color: var(--omni-theme-background-active-color, #f0f0f0); /* 6% darker */

        --omni-font-color: var(--omni-theme-font-color, black);
        --omni-disabled-border-color: var(--omni-theme-disabled-border-color, #dedede44);
        --omni-disabled-background-color: var(--omni-theme-disabled-background-color, #dedede);
        --omni-error-font-color: var(--omni-theme-error-font-color, red);
        --omni-error-border-color: var(--omni-theme-error-border-color, red);
        --omni-hint-font-color: var(--omni-theme-hint-font-color, lightgrey);
        --omni-inactive-color: var(--omni-theme-inactive-color, #7c7c7c);
        --omni-box-shadow-color: var(--omni-theme-box-shadow-color, #f2f2f2);

        --omni-font-family: var(--omni-theme-font-family, Arial, Helvetica, sans-serif);
        --omni-font-size: var(--omni-theme-font-size, 14px);
        --omni-font-weight: var(--omni-theme-font-weight, normal);

        --omni-border-radius: var(--omni-theme-border-radius, 4px);
        --omni-border-width: var(--omni-theme-border-width, 2px);

        /*
            --omni-cursor: var(--omni-theme-cursor, default);
            --omni-cursor-target: var(--omni-theme-target-cursor, pointer);
            --omni-cursor-disabled: var(--omni-theme-cursor-disabled, not-allowed);
            */

        /*  
            --omni-margin: var(--omni-theme-margin, 1px);
            --omni-padding: var(--omni-theme-padding, 1px);
            --omni-outline: var(--omni-theme-outline, 1px);
            */

        --omni-box-shadow: var(--omni-theme-box-shadow, 0 0 4px 4px var(--omni-box-shadow-color));

        /* ----- -----*/

        display: flex;
        flex-direction: column;

        box-sizing: border-box;

        padding: 0px;
        margin: 0px;

        -webkit-touch-callout: var(--omni-theme-text-select, none);
        -webkit-user-select: var(--omni-theme-text-select, none);
        -khtml-user-select: var(--omni-theme-text-select, none);
        -moz-user-select: var(--omni-theme-text-select, none);
        -ms-user-select: var(--omni-theme-text-select, none);
        user-select: var(--omni-theme-text-select, none);
      }

      :host([hidden]) {
        display: none;
      }
    `}render(){return R`${q(this.renderAsync(),this.renderLoading())}`}renderLoading(){return R`<slot name="loading_indicator"></slot>`}async renderAsync(){return super.render()}};P([D()],x.prototype,"dir",2),P([D()],x.prototype,"lang",2);var Me=x;export{E as a,H as b,b as c,z as d,J as e,y as f,q as g,x as h,Me as i};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
//# sourceMappingURL=chunk.LAXESDIJ.js.map
