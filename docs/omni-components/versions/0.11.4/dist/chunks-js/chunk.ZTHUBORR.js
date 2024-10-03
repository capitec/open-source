import{b as D}from"./chunk.4PFNWG2J.js";import{a as N,d as C,f as S,h as L,j as B}from"./chunk.63YMDT6M.js";import{j as R,m as i,p as n}from"./chunk.BF43NN75.js";i();n();i();n();i();n();i();n();var{I:j}=L,I=t=>t===null||typeof t!="object"&&typeof t!="function";var U=t=>t.strings===void 0;var X={},F=(t,e=X)=>t._$AH=e;i();n();i();n();var z={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},M=t=>(...e)=>({_$litDirective$:t,values:e}),x=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,o){this.t=e,this._$AM=r,this.i=o}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};var _=(t,e)=>{var o;let r=t._$AN;if(r===void 0)return!1;for(let s of r)(o=s._$AO)==null||o.call(s,e,!1),_(s,e);return!0},y=t=>{let e,r;do{if((e=t._$AM)===void 0)break;r=e._$AN,r.delete(t),t=e}while((r==null?void 0:r.size)===0)},V=t=>{for(let e;e=t._$AM;t=e){let r=e._$AN;if(r===void 0)e._$AN=r=new Set;else if(r.has(t))break;r.add(t),Q(e)}};function Z(t){this._$AN!==void 0?(y(this),this._$AM=t,V(this)):this._$AM=t}function G(t,e=!1,r=0){let o=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(o))for(let c=r;c<o.length;c++)_(o[c],!1),y(o[c]);else o!=null&&(_(o,!1),y(o));else _(this,t)}var Q=t=>{var e,r;t.type==z.CHILD&&((e=t._$AP)!=null||(t._$AP=G),(r=t._$AQ)!=null||(t._$AQ=Z))},w=class extends x{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,r,o){super._$AT(e,r,o),V(this),this.isConnected=e._$AU}_$AO(e,r=!0){var o,s;e!==this.isConnected&&(this.isConnected=e,e?(o=this.reconnected)==null||o.call(this):(s=this.disconnected)==null||s.call(this)),r&&(_(this,e),y(this))}setValue(e){if(U(this.t))this.t._$AI(e,this);else{let r=[...this.t._$AH];r[this.i]=e,this.t._$AI(r,this,0)}}disconnected(){}reconnected(){}};i();n();var T=class{constructor(e){this.Y=e}disconnect(){this.Y=void 0}reconnect(e){this.Y=e}deref(){return this.Y}},k=class{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){var e;(e=this.Z)!=null||(this.Z=new Promise(r=>this.q=r))}resume(){var e;(e=this.q)==null||e.call(this),this.Z=this.q=void 0}};var Y=t=>!I(t)&&typeof t.then=="function",q=1073741823,H=class extends w{constructor(){super(...arguments),this.wt=q,this.bt=[],this.K=new T(this),this.X=new k}render(...e){var r;return(r=e.find(o=>!Y(o)))!=null?r:S}update(e,r){let o=this.bt,s=o.length;this.bt=r;let c=this.K,E=this.X;this.isConnected||this.disconnected();for(let a=0;a<r.length&&!(a>this.wt);a++){let b=r[a];if(!Y(b))return this.wt=a,b;a<s&&b===o[a]||(this.wt=q,s=0,Promise.resolve(b).then(async O=>{for(;E.get();)await E.get();let $=c.deref();if($!==void 0){let P=$.bt.indexOf(b);P>-1&&P<$.wt&&($.wt=P,$.setValue(O))}}))}return S}disconnected(){this.K.disconnect(),this.X.pause()}reconnected(){this.K.reconnect(this),this.X.resume()}},K=M(H);var g=class extends B{static get styles(){return N`
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
    `}render(){return C`${K(this.renderAsync(),this.renderLoading())}`}renderLoading(){return C`<slot name="loading_indicator"></slot>`}async renderAsync(){return super.render()}};R([D()],g.prototype,"dir",2),R([D()],g.prototype,"lang",2);var Ee=g;export{U as a,F as b,z as c,M as d,x as e,w as f,K as g,g as h,Ee as i};
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
//# sourceMappingURL=chunk.ZTHUBORR.js.map
