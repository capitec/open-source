import{a as f}from"./chunk.APNKRDWQ.js";import{a as m}from"./chunk.QQ4KC6E2.js";import{a as d}from"./chunk.3F3IIFA7.js";import{a as h}from"./chunk.YTU7KEBB.js";import{a as l,b as n,d as c}from"./chunk.4PFNWG2J.js";import{a as s,d as r}from"./chunk.63YMDT6M.js";import{j as i,m as o,p as a}from"./chunk.BF43NN75.js";o();a();var t=class extends m{connectedCallback(){super.connectedCallback(),this.addEventListener("input",this._keyInput.bind(this),{capture:!0})}async firstUpdated(){this.value!==null&&this.value!==void 0&&this.maxLength&&(this._inputElement.value=String(this.value).slice(0,this.maxLength))}focus(e){this._inputElement?this._inputElement.focus(e):super.focus(e)}_keyInput(){let e=this._inputElement;(e==null?void 0:e.value)&&this.maxLength&&e.value.length>this.maxLength&&(e.value=e.value.slice(0,this.maxLength)),this.value=e==null?void 0:e.value}static get styles(){return[super.styles,s`
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
                    color: var(--omni-search-field-error-font-color, var(--omni-font-color));
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

                /* Grant the ability to set the hover color when cursor hovers over auto selectable options */
                input:-webkit-autofill,
                input:-webkit-autofill:focus {
                    transition: var(--omni-search-field-autofill-hover-transition) !important;
                }
                
            `]}renderPrefix(){return r`<omni-search-icon class="search-icon"></omni-search-icon>`}renderContent(){let e={field:!0,disabled:this.disabled,error:this.error};return r`
            <input
                class=${h(e)}
                id="inputField"
                type="search"
                inputmode="${d(this.noNativeKeyboard?"none":void 0)}"
                .value=${f(this.value)}
                ?readOnly=${this.disabled}
                tabindex="${this.disabled?-1:0}" />
        `}};i([c("#inputField")],t.prototype,"_inputElement",2),i([n({type:Boolean,reflect:!0,attribute:"no-native-keyboard"})],t.prototype,"noNativeKeyboard",2),i([n({type:Number,reflect:!0,attribute:"max-length"})],t.prototype,"maxLength",2),t=i([l("omni-search-field")],t);export{t as a};
//# sourceMappingURL=chunk.K4CR7SFV.js.map
