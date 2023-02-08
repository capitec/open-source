import{a as s}from"./chunk.XMM72FEY.js";import{i as m}from"./chunk.ZO5UBYOG.js";import{b as l}from"./chunk.CHYIO324.js";import{a as f,b as o,d as r}from"./chunk.3GEUDTAZ.js";import{j as t,l as i,o as a}from"./chunk.2ZZQBHAA.js";i();a();i();a();i();a();var w=n=>n!=null?n:r;var e=class extends m{constructor(){super(...arguments);this.value=null;this.disabled=!1}static get styles(){return[f`
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

                    /* added at a container level to apply to all child elements */
                    font-family: var(--omni-container-font-family, var(--omni-font-family));
                    width: var(--omni-container-width, 100%);
                    height: var(--omni-container-height, 100%);
                }

                /* LAYOUT STYLES */

                .layout {
                    position: relative;
                    display: flex;
                    flex-direction: row;
                    align-items: stretch;

                    border-radius: var(--omni-form-layout-border-radius, 4px);
                    background-color: var(--omni-form-layout-background-color, var(--omni-background-color));
                    height: var(--omni-form-layout-height, 100%);
                    width: var(--omni-form-layout-width, 100%);
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

                /* LABEL STYLES */

                .label {
                    position: absolute;
                    transform-origin: top var(--omni-form-label-transform-origin, left);
                    transition: all 150ms ease 0s;
                    pointer-events: none;
                    user-select: none;
                    line-height: 100%;

                    /* Used to position the label in the middle of the y-axis*/
                    top:50%;
                    transform: translateY(-50%);

                    margin-left: var(--omni-form-label-margin-left, 10px);          
                    text-align: var(--omni-form-label-text-align, left);

                    color: var(--omni-form-label-color, var(--omni-font-color));
                    font-size: var(--omni-form-label-font-size, var(--omni-font-size));
                    font-weight: var(--omni-form-label-font-weight, var(--omni-font-weight));

                    z-index: var(--omni-form-label-z-index, 410);
                }

                .layout > .label > span {
                    position: relative;
                }

                /* FOCUS STYLES */

                .layout:focus-within > .border {
                    border-style: solid;
                    border-width: var(--omni-form-focussed-border-width, 2px);
                    border-color: var(--omni-form-focussed-border-color, var(--omni-primary-color));
                }

                :host([value]:not([value=''])) .layout  > .label,
                .layout:focus-within > .label
                {
                    transform: scale(var(--omni-form-focussed-label-transform-scale), 0.90);
                    top: var(--omni-form-focussed-label-top, -5px);
                    margin-left: var(--omni-form-focussed-label-margin-left, 10px);
                }

                .layout:focus-within > .label {
                    color: var(--omni-form-focussed-label-color, var(--omni-primary-color));
                }

                :host([value]:not([value=''])) .layout  > .label.error,
                .layout:focus-within > .label.error {
                    color: var(--omni-form-focussed-error-label-color, var(--omni-error-font-color));
                }
            
                :host([value]:not([value=''])) .layout  > .label::before,
                .layout:focus-within > .label::before 
                {
                    content: "";
					display: block;
					height: 100%;
					background-color: var(--omni-form-focussed-label-background-color, var(--omni-background-color));
					position: absolute;
					left: -3px;
					right: -3px;
    				height: 60%;
					z-index: -1;
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
                    background-color: var(--omni-form-disabled-background-color, var(--omni-disabled-background-color));
                }

                .label.disabled {
                    color: var(--omni-form-label-disabled-color, var(--omni-font-color));
                    pointer-events: none;
                }

                .layout.disabled > .border {
                    border-color: var(--omni-form-disabled-border-color, var(--omni-disabled-border-color));
                }

                :host([value]) .layout.disabled  > .label::before {
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

                .layout:focus-within:hover > .border,
                .layout.error:focus-within:hover > .border,
                .layout.disabled:focus-within:hover > .border {
                    box-shadow: none;
                }

                .layout:hover > .border {
                    border-color: var(--omni-form-hover-color, var(--omni-primary-color));
                }

                .layout.disabled:hover > .border {
                    border-color: var(--omni-form-disabled-hover-color, var(--omni-disabled-border-color));
                }

                .layout.error:hover > .border {
                    border-color: var(--omni-form-error-hover-color, var(--omni-error-border-color));
                }

                slot[name='prefix'],
                slot[name='suffix'],
                ::slotted([slot='prefix']),
                ::slotted([slot='suffix']) {
                    display: flex;
                    align-items: center;
                }
            `]}render(){let d={layout:!0,error:this.error,disabled:this.disabled};return o`
            <div class="container">
                <div class=${s(d)}>
                    <div class="border"></div>
                    <slot name="prefix">${this.renderPrefix()}</slot>
                    ${this.renderLabel()} 
                    ${this.renderContent()} 
                    <slot name="suffix"></slot>
                    ${this.renderControl()} ${this.renderPicker()}
                </div>
                ${this.renderHint()} ${this.renderError()}
            </div>
        `}renderPrefix(){return r}renderContent(){return r}renderLabel(){let d={label:!0,error:this.error,disabled:this.disabled};return o`${this.label?o`<div class=${s(d)}><span>${this.label}</span></div>`:r}`}renderControl(){return r}renderPicker(){return r}renderHint(){return o`${this.hint&&!this.error?o`<div class="hint-label">${this.hint}</div>`:r}`}renderError(){return o`${this.error?o`<div class="error-label">${this.error}</div>`:r} `}};t([l({type:String,reflect:!0})],e.prototype,"label",2),t([l({reflect:!0})],e.prototype,"value",2),t([l({type:Object,reflect:!0})],e.prototype,"data",2),t([l({type:String,reflect:!0})],e.prototype,"hint",2),t([l({type:String,reflect:!0})],e.prototype,"error",2),t([l({type:Boolean,reflect:!0})],e.prototype,"disabled",2);export{w as a,e as b};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
//# sourceMappingURL=chunk.SHYZA2TL.js.map
