import{a as n}from"./chunk.ZJGON3BB.js";import{i as m}from"./chunk.P6J7VJ5B.js";import{b as a}from"./chunk.Y6UVSDXK.js";import{a as f,d as o,g as r}from"./chunk.UDCULUBW.js";import{j as t,m as s,p as c}from"./chunk.BF43NN75.js";s();c();var e=class extends m{constructor(){super(...arguments);this.value=null;this.disabled=!1;this.clearable=!1}_clearValue(l){if(this.disabled)return l.stopImmediatePropagation();this.value="",this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),l.stopPropagation()}static get styles(){return[f`
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
                    border-color: var(--omni-form-focussed-border-color, var(--omni-primary-active-color));
                }

                :host([value]:not([value=''])) .container:not(.no-float-label) .layout  > .label,
                .container.float-label .layout  > .label,
                .layout:focus-within > .label:not(.focused-static)
                {
                    top: 0px;
                    margin-left: var(--omni-form-focussed-label-margin-left, 10px);
                }
                
                .layout:focus-within > .label {
                    color: var(--omni-form-focussed-label-color, var(--omni-primary-color));
                }
                
                :host([value]:not([value=''])) .container:not(.no-float-label) .layout  > .label.error,
                .container.float-label .layout  > .label.error,
                .layout:focus-within > .label.error {
                    color: var(--omni-form-focussed-error-label-color, var(--omni-error-font-color));
                }
                
                :host([value]:not([value=''])) .container:not(.no-float-label) .layout  > .label > div::before,
                .container.float-label .layout  > .label > div::before,
                .layout:focus-within > .label:not(.focused-static) > div::before
                {
                    content: "";
                    display: block;           
                    background-color: var(--omni-form-focussed-label-background-color, var(--omni-background-color));
                    position: absolute;
                    left: calc(var(--omni-form-focussed-label-padding-left, 3px) * -1);
                    right: calc(var(--omni-form-focussed-label-padding-right, 3px) * -1);
                    height: 50%;
                    z-index: -1;
                    top:50%;
                    width: calc(100% + var(--omni-form-focussed-label-padding-left, 3px) + var(--omni-form-focussed-label-padding-right, 3px));
                }
                
                :host([value]:not([value=''])) .container:not(.no-float-label) .layout.disabled  > .label > div::before,
                .container.float-label .layout.disabled  > .label > div::before,
                .layout.disabled:focus-within > .label > div::before 
                {
                    background-color: var(--omni-form-focussed-label-disabled-background-color, var(--omni-disabled-background-color));
                }
                
                :host([value]:not([value=''])) .container:not(.no-float-label) .layout  > .label > div,
                .container.float-label .layout  > .label > div,
                .layout:focus-within > .label > div {
                    transform: scale(var(--omni-form-focussed-label-transform-scale), 0.9);
                    transform-origin: center left;
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
                    height: 0%;
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

                /* Make this border wider half of focussed*/
                /* Added to resolve sticky hover state on mobile devices */
                @media (hover: hover) {
                    .layout:hover > .border {
                        border-color: var(--omni-form-hover-color, var(--omni-primary-hover-color));
                    }

                    .layout.disabled:hover > .border {
                        border-color: var(--omni-form-disabled-hover-color, var(--omni-disabled-border-color));
                    }

                    .layout.error:hover > .border {
                        border-color: var(--omni-form-error-hover-color, var(--omni-error-border-color));
                    }
                }

                .clear-control {
                    display: flex;
                    margin-right: var(--omni-form-clear-control-margin-right, 10px);
                    margin-left: var(--omni-form-clear-control-margin-left, 10px);
                    width: var(--omni-form-clear-control-width, 20px);
                    align-items: center;
                }

                .clear-click {
                    display: inline-flex;
                    align-items: center;
                    cursor: pointer;
                }

                .clear-icon {
                    fill: var(--omni-form-clear-slot-color, var(--omni-primary-color));
                }

                .clear-icon,
                ::slotted([slot='clear']){
                    height: var(--omni-form-clear-slot-height,20px);
                    width: var(--omni-form-clear-slot-width, 20px);
                    cursor: pointer;
                    pointer-events: none;
                }

                slot[name='prefix'],
                slot[name='suffix'],
                ::slotted([slot='prefix']),
                ::slotted([slot='suffix']) {
                    display: flex;
                    align-items: center;
                }
            `]}render(){var i;let l={layout:!0,error:(i=this.error)!=null?i:!1,disabled:this.disabled};return o`
            <div class="container">
                <div class=${n(l)}>
                    <div class="border"></div>
                    <slot name="prefix">${this.renderPrefix()}</slot>
                    ${this.renderLabel()} 
                    ${this.renderContent()} 
                    ${this.renderClear()}
                    <slot name="suffix"></slot>
                    ${this.renderControl()} ${this.renderPicker()}
                </div>
                ${this.renderHint()} ${this.renderError()}
            </div>
        `}renderPrefix(){return r}renderContent(){return r}renderLabel(l=!1){var d;let i={label:!0,error:(d=this.error)!=null?d:!1,disabled:this.disabled,"focused-static":l};return o`${this.label?o`<div class=${n(i)}><div>${this.label}</div></div>`:r}`}renderControl(){return r}renderPicker(){return r}renderHint(){return o`${this.hint&&!this.error?o`<div class="hint-label">${this.hint}</div>`:r}`}renderError(){return o`${this.error?o`<div class="error-label">${this.error}</div>`:r} `}renderClear(){return o`
            ${this.clearable?o`
                <div class="clear-control">
                    ${this.clearable&&this.value&&!this.disabled?o`
                    <div id="clear-click" class="clear-click" @click="${l=>this._clearValue(l)}">
                        <slot name="clear">
                            <omni-clear-icon class="clear-icon"></omni-clear-icon>
                        </slot>
                    </div>                    
                    `:r}
                </div>
            `:r}
        `}};t([a({type:String,reflect:!0})],e.prototype,"label",2),t([a({reflect:!0})],e.prototype,"value",2),t([a({type:Object,reflect:!0})],e.prototype,"data",2),t([a({type:String,reflect:!0})],e.prototype,"hint",2),t([a({type:String,reflect:!0})],e.prototype,"error",2),t([a({type:Boolean,reflect:!0})],e.prototype,"disabled",2),t([a({type:Boolean,reflect:!0})],e.prototype,"clearable",2);export{e as a};
//# sourceMappingURL=chunk.5OQBY5R4.js.map
