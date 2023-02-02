import{a as f}from"./chunk.XMM72FEY.js";import{i as c}from"./chunk.ZO5UBYOG.js";import{b as i,d}from"./chunk.CHYIO324.js";import{a as m,b as t,d as r}from"./chunk.3GEUDTAZ.js";import{j as e,l,o as n}from"./chunk.2ZZQBHAA.js";l();n();l();n();l();n();var L=s=>s!=null?s:r;var o=class extends c{constructor(){super(...arguments);this.value=null;this.disabled=!1}connectedCallback(){super.connectedCallback(),this.addEventListener("focus",this._focusGained.bind(this)),this.addEventListener("focusout",this._focusLost.bind(this))}_focusGained(){if(this.disabled)return;let a=this._formContainerElement.offsetLeft;!this.value&&this._labelElement&&(this._labelElement.style.transform=`translateX(${a*-1}px)  translateY(-37.5%) scale(95%)`)}_focusLost(){this.disabled||!this.value&&this._labelElement&&(this._labelElement.style.transform="")}static get styles(){return[m`
                ${super.styles}

                :host {
                    display: flex;
                }

                :host([disabled]),
                :host([disabled]) > * {
                    pointer-events: none;
                }

                /* CONTAINER STYLES */

                .container {
                    display: flex;
                    flex-direction: column;
                    align-items: stretch;
                    justify-content: flex-start;

                    width: var(--omni-form-container-width, 100%);

                    /* added at a container level to apply to all child elements */
                    font-family: var(--omni-form-container-font-family, var(--omni-font-family));
                }

                /* LAYOUT STYLES */

                .layout {
                    position: relative;

                    display: flex;
                    flex-direction: row;
                    align-items: stretch;
                    justify-content: center;
                    border-radius: var(--omni-form-border-radius, 4px);
                    background-color: var(--omni-form-field-background-color, var(--omni-background-color));
                }

                .border {
                    position: absolute;
                    top: var(--omni-form-border-top, 0px);
                    bottom: var(--omni-form-border-bottom, 0px);
                    left: var(--omni-form-border-left, 0px);
                    right: var(--omni-form-border-right, 0px);

                    border-width: var(--omni-form-border-width, 1px);
                    border-radius: var(--omni-form-border-radius, 4px);
                    border-style: var(--omni-form-border-style, solid);
                    border-color: var(--omni-form-border-color, var(--omni-primary-color));
                    pointer-events: none;
                }

                /* INPUT CONTAINER STYLES */

                .form-container {
                    position: relative;
                    display: flex;
                    align-items: center;
                    width: var(--omni-form-container-width, 100%);
                }

                /* LABEL STYLES */

                .label {
                    position: absolute;
                    flex: 1 1 auto;
                    transform-origin: top var(--omni-form-label-transform-origin, left);

                    transition: all 150ms ease 0s;

                    line-height: 100%;

                    text-align: var(--omni-form-label-text-align, left);

                    pointer-events: none;
                    user-select: none;

                    color: var(--omni-form-label-color, var(--omni-font-color));
                    font-size: var(--omni-form-label-font-size, var(--omni-font-size));
                    font-weight: var(--omni-form-label-font-weight, var(--omni-font-weight));

                    left: var(--omni-form-label-left, 10px);

                    z-index: var(--omni-form-label-z-index, 410);
                }

                .layout > .label > span {
                    position: relative;
                }

                /* FOCUS STYLES */

                :host([value]:not([value=''])) .layout > .form-container > .label,
                :focus + .label {
                    top: 0px;
                    transform: translateY(-37.5%) scale(95%);
                    color: var(--omni-form-focussed-label-color, var(--omni-primary-color));
                }

                :host([value]) .layout > .form-container > .label::before,
                :focus + .label::before {
                    content: '';
                    background-color: var(--omni-form-field-background-color, var(--omni-background-color));
                    position: absolute;
                    left: var(--omni-label-focus-left, -3px);
                    right: var(--omni-label-focus-right, -3px);
                    top: 39%;
                    height: 50%;
                    z-index: -1;
                }

                .layout:focus-within > .border {
                    border-style: solid;
                    border-width: var(--omni-form-focussed-border-width, 2px);
                    border-color: var(--omni-form-focussed-border-color, var(--omni-primary-color));
                }

                /* ERROR STYLES */

                .label.error {
                    color: var(--omni-form-error-label-color, var(--omni-error-font-color));
                }

                .layout.error > .border {
                    border-color: var(--omni-form-error-border-color, var(--omni-error-border-color));
                }

                /* DISABLED STYLES */

                .layout.disabled {
                    pointer-events: none;
                }

                .label.disabled {
                    /*color: var(--omni-form-label-disabled-color, var(--omni-disabled-border-color));*/
                    pointer-events: none;
                }

                .layout.disabled > .border {
                    border-color: var(--omni-form-disabled-border-color, var(--omni-disabled-border-color));
                    background-color: var(--omni-form-disabled-background-color, var(--omni-disabled-background-color));
                }

                :host([value]) .layout.disabled > .form-container > .label::before {
                    background-color: var(--omni-form-disabled-focussed-label-background-color, var(--omni-disabled-background-color));
                }

                /* HINT LABEL STYLES */

                .hint-label {
                    color: var(--omni-form-hint-label-font-color, var(--omni-hint-font-color));
                    font-family: var(--omni-form-hint-label-font-family, var(--omni-font-family));
                    font-size: var(--omni-form-hint-label-font-size, 0.86em);
                    font-weight: var(--omni-form-hint-label-font-weight, 300);

                    padding-top: var(--omni-form-hint-label-padding-top, 2px);
                    padding-left: calc(var(--omni-form-hint-label-padding-left, 10px) + var(--omni-form-hint-label-border-width, 1px));
                }

                /* ERROR LABEL STYLES */

                .error-label {
                    color: var(--omni-form-error-label-font-color, var(--omni-error-font-color));
                    font-family: var(--omni-form-error-label-font-family, var(--omni-font-family));
                    font-size: var(--omni-form-error-label-font-size, var(--omni-font-size));
                    font-weight: var(--omni-form-error-label-font-weight, var(--omni-font-weight));

                    padding-top: var(--omni-form-error-label-padding-top, 2px);
                    padding-left: calc(var(--omni-form-error-label-padding-left, 10px) + var(--omni-form-error-label-border-width, 1px));
                }

                /* HOVER STYLES */

                .layout:hover > .border {
                    box-shadow: inset 0px 0px 0px 1px var(--omni-form-hover-color, var(--omni-primary-color));
                }

                .layout.disabled:hover > .border {
                    box-shadow: inset 0px 0px 0px 1px var(--omni-form-disabled-hover-color, var(--omni-disabled-border-color));
                }

                .layout.error:hover > .border {
                    box-shadow: inset 0px 0px 0px 1px var(--omni-form-error-hover-color, var(--omni-error-border-color));
                }

                slot[name='prefix'],
                slot[name='suffix'],
                ::slotted([slot='prefix']),
                ::slotted([slot='suffix']) {
                    display: flex;
                    align-items: center;
                }
            `]}render(){let a={layout:!0,error:this.error,disabled:this.disabled};return t`
            <div class="container">
                <div class=${f(a)}>
                    <div class="border"></div>
                    <slot name="prefix">${this.renderPrefix()}</slot>
                    <div class="form-container"> ${this.renderContent()} ${this.renderLabel()} </div>
                    <slot name="suffix"></slot>
                    ${this.renderControl()} ${this.renderPicker()}
                </div>
                ${this.renderHint()} ${this.renderError()}
            </div>
        `}renderPrefix(){return r}renderContent(){return r}renderLabel(){let a={label:!0,error:this.error,disabled:this.disabled};return t`${this.label?t`<div class=${f(a)}><span>${this.label}</span></div>`:r}`}renderControl(){return r}renderPicker(){return r}renderHint(){return t`${this.hint&&!this.error?t`<div class="hint-label">${this.hint}</div>`:r}`}renderError(){return t`${this.error?t`<div class="error-label">${this.error}</div>`:r} `}};e([i({type:String,reflect:!0})],o.prototype,"label",2),e([i({reflect:!0})],o.prototype,"value",2),e([i({type:Object,reflect:!0})],o.prototype,"data",2),e([i({type:String,reflect:!0})],o.prototype,"hint",2),e([i({type:String,reflect:!0})],o.prototype,"error",2),e([i({type:Boolean,reflect:!0})],o.prototype,"disabled",2),e([d(".form-container")],o.prototype,"_formContainerElement",2),e([d(".label")],o.prototype,"_labelElement",2);export{L as a,o as b};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
//# sourceMappingURL=chunk.GTCHYS4Z.js.map
