import{a as p,b as c}from"./chunk.MDYAUJ3Z.js";import{a as i}from"./chunk.LB764BBD.js";import{h as g}from"./chunk.6C4LMRM7.js";import{a as h,b as n,d as u}from"./chunk.S2K25ADN.js";import{a as s,b as t,e as d,g as f}from"./chunk.L3RZWW2F.js";import{j as r,m as l,p as m}from"./chunk.BF43NN75.js";l();m();var o=class extends g{constructor(){super(...arguments);this.headerLabel=""}static show(e){if(e.parent||(e.parent=document.createElement("div"),document.body.appendChild(e.parent)),typeof e.parent=="string"&&(e.parent=document.getElementById(e.parent),!e.parent))return;let a=p();return f(t`        
                <omni-modal ${c(a)} id="${i(e.id)}" ?no-header="${e.noHeader}" ?no-footer="${e.noFooter}" ?no-fullscreen="${e.noFullscreen}" header-align="${i(e.headerAlign)}">
                    ${e.header?t`<omni-render-element slot="header" .renderer="${typeof e.header=="function"?e.header:()=>e.header}"></omni-render-element>`:d}
                    <omni-render-element .renderer="${typeof e.body=="function"?e.body:()=>e.body}"></omni-render-element>
                    ${e.footer?t`<omni-render-element slot="footer" .renderer="${typeof e.footer=="function"?e.footer:()=>e.footer}"></omni-render-element>`:d}
                </omni-modal>
            `,e.parent),a.value}notifyClickOutside(e){let a=this.dialog.querySelector(".container");a&&!e.composedPath().includes(a)&&this.dispatchEvent(new CustomEvent("click-outside"))}updated(e){super.updated(e),!this.hide&&!this.dialog.open&&this.dialog.showModal(),this.hide&&this.dialog.open&&this.dialog.close()}static get styles(){return[super.styles,s`
                :host([hide]){
                    display: none;
                }

                .modal {
                    display: flex;
                    position: fixed;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    left: 0;
                    top: 0;
                    max-width: 100%;
                    max-height: 100%;
                    width: 100%;
                    height: 100%;
                    background: transparent;
                    cursor: default;
                    
                    margin: unset;
                    border-style: none;
                    padding: unset;
                    top: var(--omni-modal-dialog-top, inherit);
                    left: var(--omni-modal-dialog-left, 0px);
                    right: var(--omni-modal-dialog-right, 0px);
                    bottom: var(--omni-modal-dialog-bottom, 0px);

                    opacity: inherit;
                }

                ::backdrop {                    
                    background: transparent;
                }

                .backdrop {
                    background: var(--omni-modal-dialog-background, rgba(0, 0, 0, 0.3));
                }

                .container {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: stretch;
                    padding: var(--omni-modal-container-padding, 0px);
                    background: transparent;
                    box-shadow: var(--omni-modal-container-box-shadow);
                    max-width: var(--omni-modal-max-width,100%);
                    max-height: var(--omni-modal-max-height, 100%);
                }

                .header {
                    display: inline-flex;
                    align-items: center;
                    color: var(--omni-modal-header-font-color,var(--omni-font-color));
                    background: var(--omni-modal-header-background, var(--omni-background-active-color));
                    font-family: var(--omni-modal-header-font-family, var(--omni-font-family));
                    font-size: var(--omni-modal-header-font-size, var(--omni-font-size));
                    font-weight: var(--omni-modal-header-font-weight, var(--omni-font-weight));
                    
                    padding-left: var(--omni-modal-header-padding-left, 24px);
                    padding-top: var(--omni-modal-header-padding-top, 24px);
                    padding-right: var(--omni-modal-header-padding-right, 24px);
                    padding-bottom: var(--omni-modal-header-padding-bottom, 24px);
                    position: relative;
                }

                .header.center {
                    justify-content: center;
                    text-align: center;
                }

                .header.right {
                    justify-content: right;
                    text-align: right;
                }

                .body {
                    margin-top:0px;
                    padding: var(--omni-modal-body-padding, 24px 24px 24px 24px);
                    color: var(--omni-modal-body-font-color, var(--omni-font-color));
                    font-size: var(--omni-modal-body-font-size, var(--omni-font-size));
                    font-family: var(--omni-modal-body-font-family, var(--omni-font-family));
                    font-weight: var(--omni-modal-body-font-weight, var(--omni-font-weight));
                    background: var(--omni-modal-body-background, var(--omni-background-color));
                    line-height: 24px;
                    overflow: var(--omni-modal-body-overflow, auto);
                }

                .body[no-header] {                    
                    border-top-left-radius: var(--omni-modal-no-header-body-border-top-radius, 4px);
                    border-top-right-radius: var(--omni-modal-no-header-body-border-top-radius, 4px);
                }

                .body[no-footer] {                    
                    border-bottom-left-radius: var(--omni-modal-no-footer-body-border-bottom-radius, 4px);
                    border-bottom-right-radius: var(--omni-modal-no-footer-body-border-bottom-radius, 4px);
                }

                .footer {
                    align-self: stretch;
                    text-align: var(--omni-modal-footer-text-align, right);
                    padding: var(--omni-modal-footer-padding, 12px 12px 12px 0px);
                    color: var(--omni-modal-footer-font-color,var(--omni-font-color));
                    font-size: var(--omni-modal-footer-font-size, var(--omni-font-size));
                    font-family: var(--omni-modal-footer-font-family, var(--omni-font-family));
                    font-weight: var(--omni-modal-footer-font-weight, var(--omni-font-weight));
                    background: var(--omni-modal-footer-background, var(--omni-background-active-color));
                }

                ::slotted(omni-render-element) {
                    width: 100%;
                }

                @media screen and (min-width: 767px) {
                    
                    .header {
                        border-radius: var(--omni-modal-header-border-radius, 4px 4px 0px 0px);
                    }
                }

                @media screen and (max-width: 767px) {
                    
                    .container:not([no-fullscreen]) {
                        height: 100%;
                    }
                    
                    .body:not([no-fullscreen]) {
                        height: inherit;
                    }

                }
      `]}render(){return t`
            <dialog part="dialog" class="modal" role="dialog" aria-modal="true"
                    @cancel="${e=>e.preventDefault()}"
                    @click="${e=>this.notifyClickOutside(e)}" @touch="${e=>this.notifyClickOutside(e)}">
                <div class="modal backdrop" part="backdrop">
                    <div class="container" ?no-fullscreen="${this.noFullscreen}" part="container">
                        ${this._renderHeader()}
                        <div class="body" ?no-header="${this.noHeader}" ?no-footer="${this.noFooter}" ?no-fullscreen="${this.noFullscreen}" part="body">
                            <slot></slot>
                        </div>
                        ${this._renderFooter()}
                    </div>
                </div>
            </dialog>
        `}_renderHeader(){var e;return this.noHeader?d:t`
            <div class="header ${(e=this.headerAlign)!=null?e:""}" part="header">
                ${this.headerLabel}

                <slot name="header"></slot>
            </div>
		`}_renderFooter(){return this.noFooter?d:t`
            <div class="footer" part="footer">
                <slot name="footer"></slot>
            </div>`}};r([n({type:String,attribute:"header-label",reflect:!0})],o.prototype,"headerLabel",2),r([n({type:String,attribute:"header-align",reflect:!0})],o.prototype,"headerAlign",2),r([n({type:Boolean,reflect:!0})],o.prototype,"hide",2),r([n({type:Boolean,attribute:"no-header",reflect:!0})],o.prototype,"noHeader",2),r([n({type:Boolean,attribute:"no-footer",reflect:!0})],o.prototype,"noFooter",2),r([n({type:Boolean,attribute:"no-fullscreen",reflect:!0})],o.prototype,"noFullscreen",2),r([u("dialog")],o.prototype,"dialog",2),o=r([h("omni-modal")],o);export{o as a};
//# sourceMappingURL=chunk.R74VGS2O.js.map
