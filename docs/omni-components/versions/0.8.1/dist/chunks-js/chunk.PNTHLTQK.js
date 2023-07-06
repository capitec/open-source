import{b as D}from"./chunk.S2K25ADN.js";import{a as B,b as R,d as S,f as L,h as I}from"./chunk.L3RZWW2F.js";import{j as P,m as n,p as s}from"./chunk.BF43NN75.js";n();s();n();s();n();s();n();s();var{I:W}=L,U=o=>o===null||typeof o!="object"&&typeof o!="function";var z=o=>o.strings===void 0;var K={},j=(o,e=K)=>o._$AH=e;n();s();n();s();var E={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},H=o=>(...e)=>({_$litDirective$:o,values:e}),b=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var g=(o,e)=>{var t,r;let i=o._$AN;if(i===void 0)return!1;for(let a of i)(r=(t=a)._$AO)===null||r===void 0||r.call(t,e,!1),g(a,e);return!0},y=o=>{let e,t;do{if((e=o._$AM)===void 0)break;t=e._$AN,t.delete(o),o=e}while((t==null?void 0:t.size)===0)},V=o=>{for(let e;e=o._$AM;o=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(o))break;t.add(o),G(e)}};function O(o){this._$AN!==void 0?(y(this),this._$AM=o,V(this)):this._$AM=o}function X(o,e=!1,t=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(e)if(Array.isArray(r))for(let a=t;a<r.length;a++)g(r[a],!1),y(r[a]);else r!=null&&(g(r,!1),y(r));else g(this,o)}var G=o=>{var e,t,r,i;o.type==E.CHILD&&((e=(r=o)._$AP)!==null&&e!==void 0||(r._$AP=X),(t=(i=o)._$AQ)!==null&&t!==void 0||(i._$AQ=O))},C=class extends b{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),V(this),this.isConnected=e._$AU}_$AO(e,t=!0){var r,i;e!==this.isConnected&&(this.isConnected=e,e?(r=this.reconnected)===null||r===void 0||r.call(this):(i=this.disconnected)===null||i===void 0||i.call(this)),t&&(g(this,e),y(this))}setValue(e){if(z(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};n();s();var w=class{constructor(e){this.Y=e}disconnect(){this.Y=void 0}reconnect(e){this.Y=e}deref(){return this.Y}},T=class{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){var e;(e=this.Z)!==null&&e!==void 0||(this.Z=new Promise(t=>this.q=t))}resume(){var e;(e=this.q)===null||e===void 0||e.call(this),this.Z=this.q=void 0}};var Y=o=>!U(o)&&typeof o.then=="function",M=class extends C{constructor(){super(...arguments),this._$Cwt=1073741823,this._$Cyt=[],this._$CK=new w(this),this._$CX=new T}render(...e){var t;return(t=e.find(r=>!Y(r)))!==null&&t!==void 0?t:S}update(e,t){let r=this._$Cyt,i=r.length;this._$Cyt=t;let a=this._$CK,N=this._$CX;this.isConnected||this.disconnected();for(let c=0;c<t.length&&!(c>this._$Cwt);c++){let _=t[c];if(!Y(_))return this._$Cwt=c,_;c<i&&_===r[c]||(this._$Cwt=1073741823,i=0,Promise.resolve(_).then(async q=>{for(;N.get();)await N.get();let A=a.deref();if(A!==void 0){let k=A._$Cyt.indexOf(_);k>-1&&k<A._$Cwt&&(A._$Cwt=k,A.setValue(q))}}))}return S}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}},Z=H(M);var x=class extends I{static get styles(){return B`
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
    `}render(){return R`${Z(this.renderAsync(),this.renderLoading())}`}renderLoading(){return R`<slot name="loading_indicator"></slot>`}async renderAsync(){return super.render()}};P([D()],x.prototype,"dir",2),P([D()],x.prototype,"lang",2);var He=x;export{E as a,H as b,b as c,z as d,j as e,C as f,Z as g,x as h,He as i};
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
//# sourceMappingURL=chunk.PNTHLTQK.js.map
