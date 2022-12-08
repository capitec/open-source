import{b as M}from"./chunk.CHYIO324.js";import{a as R,b as D,c as H}from"./chunk.2UFE7DL7.js";import{b as B,c as T,d as S,f as L,h as V}from"./chunk.CDDA2I3H.js";import{j as P,l as n,o as s}from"./chunk.2ZZQBHAA.js";n();s();n();s();n();s();n();s();var{I:j}=L,I=t=>t===null||typeof t!="object"&&typeof t!="function";var Z=t=>t.strings===void 0;var Y={},O=(t,e=Y)=>t._$AH=e;n();s();var b=(t,e)=>{var o,r;let i=t._$AN;if(i===void 0)return!1;for(let a of i)(r=(o=a)._$AO)===null||r===void 0||r.call(o,e,!1),b(a,e);return!0},x=t=>{let e,o;do{if((e=t._$AM)===void 0)break;o=e._$AN,o.delete(t),t=e}while((o==null?void 0:o.size)===0)},q=t=>{for(let e;e=t._$AM;t=e){let o=e._$AN;if(o===void 0)e._$AN=o=new Set;else if(o.has(t))break;o.add(t),E(e)}};function G(t){this._$AN!==void 0?(x(this),this._$AM=t,q(this)):this._$AM=t}function Q(t,e=!1,o=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(e)if(Array.isArray(r))for(let a=o;a<r.length;a++)b(r[a],!1),x(r[a]);else r!=null&&(b(r,!1),x(r));else b(this,t)}var E=t=>{var e,o,r,i;t.type==R.CHILD&&((e=(r=t)._$AP)!==null&&e!==void 0||(r._$AP=Q),(o=(i=t)._$AQ)!==null&&o!==void 0||(i._$AQ=G))},y=class extends H{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,o,r){super._$AT(e,o,r),q(this),this.isConnected=e._$AU}_$AO(e,o=!0){var r,i;e!==this.isConnected&&(this.isConnected=e,e?(r=this.reconnected)===null||r===void 0||r.call(this):(i=this.disconnected)===null||i===void 0||i.call(this)),o&&(b(this,e),x(this))}setValue(e){if(Z(this._$Ct))this._$Ct._$AI(e,this);else{let o=[...this._$Ct._$AH];o[this._$Ci]=e,this._$Ct._$AI(o,this,0)}}disconnected(){}reconnected(){}};n();s();var C=class{constructor(e){this.Y=e}disconnect(){this.Y=void 0}reconnect(e){this.Y=e}deref(){return this.Y}},w=class{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){var e;(e=this.Z)!==null&&e!==void 0||(this.Z=new Promise(o=>this.q=o))}resume(){var e;(e=this.q)===null||e===void 0||e.call(this),this.Z=this.q=void 0}};var K=t=>!I(t)&&typeof t.then=="function",N=class extends y{constructor(){super(...arguments),this._$Cwt=1073741823,this._$Cyt=[],this._$CK=new C(this),this._$CX=new w}render(...e){var o;return(o=e.find(r=>!K(r)))!==null&&o!==void 0?o:S}update(e,o){let r=this._$Cyt,i=r.length;this._$Cyt=o;let a=this._$CK,z=this._$CX;this.isConnected||this.disconnected();for(let c=0;c<o.length&&!(c>this._$Cwt);c++){let l=o[c];if(!K(l))return this._$Cwt=c,l;c<i&&l===r[c]||(this._$Cwt=1073741823,i=0,Promise.resolve(l).then(async X=>{for(;z.get();)await z.get();let d=a.deref();if(d!==void 0){let k=d._$Cyt.indexOf(l);k>-1&&k<d._$Cwt&&(d._$Cwt=k,d.setValue(X))}}))}return S}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}},U=D(N);var g=class extends V{static get styles(){return B`
      * {
        box-sizing: border-box;
      }

      :host {
        /* ----- THEMES -----*/

        /* Handy tool for color lighten / darken: https://www.cssfontstack.com/oldsites/hexcolortool/. */

        --omni-primary-color: var(--omni-theme-primary-color, #808080);
        --omni-primary-hover-color: var(--omni-theme-primary-hover-color, #7878781a); /* 3% darker */
        --omni-primary-active-color: var(--omni-theme-primary-active-color, #787878); /* 6% darker */

        --omni-accent-color: var(--omni-theme-accent-color, #c3c3c3);
        --omni-accent-hover-color: var(--omni-theme-accent-hover-color, #bbbbbb1a); /* 3% darker */
        --omni-accent-active-color: var(--omni-theme-accent-active-color, #b4b4b4); /* 6% darker */

        --omni-background-color: var(--omni-theme-background-color, #ffffff);
        --omni-background-hover-color: var(--omni-theme-background-hover-color, #f7f7f71a); /* 3% darker */
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
    `}render(){return T`${U(this.renderAsync(),this.renderLoading())}`}renderLoading(){return T`<slot name="loading_indicator"></slot>`}async renderAsync(){return super.render()}};P([M()],g.prototype,"dir",2),P([M()],g.prototype,"lang",2);var Re=g;export{Z as a,O as b,U as c,g as d,Re as e};
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
//# sourceMappingURL=chunk.DYIGYEUP.js.map
