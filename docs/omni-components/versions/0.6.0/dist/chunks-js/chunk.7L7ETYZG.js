import{a as f}from"./chunk.K2UMXYHA.js";import{a as h}from"./chunk.P5BVWJU5.js";import{a as m}from"./chunk.E3RY574V.js";import{a as d}from"./chunk.2HYOR3YM.js";import{a as s,b as l,d as c}from"./chunk.S2K25ADN.js";import{a,b as t}from"./chunk.F6MIXR4E.js";import{j as r,m as n,p as o}from"./chunk.BF43NN75.js";n();o();var i=class extends h{connectedCallback(){super.connectedCallback(),this.addEventListener("input",this._keyInput.bind(this),{capture:!0})}focus(e){this._inputElement?this._inputElement.focus(e):super.focus(e)}_keyInput(){let e=this._inputElement;this.value=e==null?void 0:e.value}static get styles(){return[super.styles,a`
                .field {
                    flex: 1 1 auto;

                    border: none;
                    background: none;
                    box-shadow: none;
                    outline: 0;
                    padding: 0;
                    margin: 0;

                    text-align: var(--omni-search-field-text-align, left);

                    color: var(--omni-search-field-font-color, var(--omni-font-color));
                    font-family: var(--omni-search-field-font-family, var(--omni-font-family));
                    font-size: var(--omni-search-field-font-size, var(--omni-font-size));
                    font-weight: var(--omni-search-field-font-weight, var(--omni-font-weight));
                    padding: var(--omni-search-field-padding, 10px);
                    height: var(--omni-search-field-height, 100%);
                    width: var(--omni-search-field-width, 100%);
                }

                .field.disabled {
                    color: var(--omni-search-field-disabled-font-color, #7C7C7C);
                }

                .field.error {
                    color: var(--omni-search-field-error-font-color);
                }

                .search-icon {
                    fill: var(--omni-search-field-search-icon-color, var(--omni-primary-color));
                    width: var(--omni-search-field-search-icon-width, 20px);   
                    margin-left: var(--omni-search-field-search-icon-margin-left,10px) !important;                                 
                }

                .label {
                    margin-left: var(--omni-search-field-label-left-margin, 42px);
                }
                
                /* Remove the default clear button from the input with type="search"*/
                input[type="search"]::-webkit-search-decoration,
                input[type="search"]::-webkit-search-cancel-button,
                input[type="search"]::-webkit-search-results-button,
                input[type="search"]::-webkit-search-results-decoration {
                  -webkit-appearance:none;
                }
                
            `]}renderPrefix(){return t`<omni-search-icon class="search-icon"></omni-search-icon>`}renderContent(){let e={field:!0,disabled:this.disabled,error:this.error};return t`
            <input
                class=${d(e)}
                id="inputField"
                type="search"
                inputmode="${m(this.noNativeKeyboard?"none":void 0)}"
                .value=${f(this.value)}
                ?readOnly=${this.disabled}
                tabindex="${this.disabled?-1:0}" />
        `}};r([c("#inputField")],i.prototype,"_inputElement",2),r([l({type:Boolean,reflect:!0,attribute:"no-native-keyboard"})],i.prototype,"noNativeKeyboard",2),i=r([s("omni-search-field")],i);export{i as a};
//# sourceMappingURL=chunk.7L7ETYZG.js.map
