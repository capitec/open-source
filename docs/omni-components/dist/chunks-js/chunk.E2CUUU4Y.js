import{b as S}from"./chunk.Y6UVSDXK.js";import{a as B,d as R,f as D,h as L,j as U}from"./chunk.UDCULUBW.js";import{j as P,m as i,p as s}from"./chunk.BF43NN75.js";i();s();i();s();i();s();i();s();var{D:F}=L,z=t=>t===null||typeof t!="object"&&typeof t!="function";var G=t=>t.strings===void 0;var O={},J=(t,e=O)=>t._$AH=e;i();s();i();s();var E={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},H=t=>(...e)=>({_$litDirective$:t,values:e}),b=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,o){this._$Ct=e,this._$AM=r,this._$Ci=o}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};var g=(t,e)=>{var o;let r=t._$AN;if(r===void 0)return!1;for(let n of r)(o=n._$AO)==null||o.call(n,e,!1),g(n,e);return!0},C=t=>{let e,r;do{if((e=t._$AM)===void 0)break;r=e._$AN,r.delete(t),t=e}while((r==null?void 0:r.size)===0)},I=t=>{for(let e;e=t._$AM;t=e){let r=e._$AN;if(r===void 0)e._$AN=r=new Set;else if(r.has(t))break;r.add(t),Q(e)}};function Z(t){this._$AN!==void 0?(C(this),this._$AM=t,I(this)):this._$AM=t}function j(t,e=!1,r=0){let o=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(e)if(Array.isArray(o))for(let c=r;c<o.length;c++)g(o[c],!1),C(o[c]);else o!=null&&(g(o,!1),C(o));else g(this,t)}var Q=t=>{var e,r;t.type==E.CHILD&&((e=t._$AP)!=null||(t._$AP=j),(r=t._$AQ)!=null||(t._$AQ=Z))},y=class extends b{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,r,o){super._$AT(e,r,o),I(this),this.isConnected=e._$AU}_$AO(e,r=!0){var o,n;e!==this.isConnected&&(this.isConnected=e,e?(o=this.reconnected)==null||o.call(this):(n=this.disconnected)==null||n.call(this)),r&&(g(this,e),C(this))}setValue(e){if(G(this._$Ct))this._$Ct._$AI(e,this);else{let r=[...this._$Ct._$AH];r[this._$Ci]=e,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}};i();s();var w=class{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}},T=class{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){var e;(e=this.Y)!=null||(this.Y=new Promise(r=>this.Z=r))}resume(){var e;(e=this.Z)==null||e.call(this),this.Y=this.Z=void 0}};var V=t=>!z(t)&&typeof t.then=="function",Y=1073741823,M=class extends y{constructor(){super(...arguments),this._$C_t=Y,this._$Cwt=[],this._$Cq=new w(this),this._$CK=new T}render(...e){var r;return(r=e.find(o=>!V(o)))!=null?r:D}update(e,r){let o=this._$Cwt,n=o.length;this._$Cwt=r;let c=this._$Cq,N=this._$CK;this.isConnected||this.disconnected();for(let a=0;a<r.length&&!(a>this._$C_t);a++){let $=r[a];if(!V($))return this._$C_t=a,$;a<n&&$===o[a]||(this._$C_t=Y,n=0,Promise.resolve($).then(async K=>{for(;N.get();)await N.get();let A=c.deref();if(A!==void 0){let k=A._$Cwt.indexOf($);k>-1&&k<A._$C_t&&(A._$C_t=k,A.setValue(K))}}))}return D}disconnected(){this._$Cq.disconnect(),this._$CK.pause()}reconnected(){this._$Cq.reconnect(this),this._$CK.resume()}},q=H(M);var x=class extends U{static get styles(){return B`
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
    `}render(){return R`${q(this.renderAsync(),this.renderLoading())}`}renderLoading(){return R`<slot name="loading_indicator"></slot>`}async renderAsync(){return super.render()}};P([S()],x.prototype,"dir",2),P([S()],x.prototype,"lang",2);var Me=x;export{E as a,H as b,b as c,G as d,J as e,y as f,q as g,x as h,Me as i};
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
//# sourceMappingURL=chunk.E2CUUU4Y.js.map
