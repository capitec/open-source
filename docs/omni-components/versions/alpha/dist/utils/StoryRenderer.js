import"../chunks-js/chunk.QE354CCS.js";import{a as N}from"../chunks-js/chunk.EQXGZ5KJ.js";import"../chunks-js/chunk.B2JXCMDG.js";import"../chunks-js/chunk.FYHSNAQ7.js";import"../chunks-js/chunk.STJOQLHS.js";import"../chunks-js/chunk.UG7N6GYS.js";import"../chunks-js/chunk.D5IZESHV.js";import{a as f}from"../chunks-js/chunk.K2UMXYHA.js";import"../chunks-js/chunk.SVECC7PQ.js";import"../chunks-js/chunk.E3RY574V.js";import"../chunks-js/chunk.WV2GEXQ2.js";import"../chunks-js/chunk.PJH7M65U.js";import{a as R}from"../chunks-js/chunk.G3QHRCKP.js";import{C as S,D,a as M,b as I,c as F,d as H,r as O,s as q}from"../chunks-js/chunk.6VUVFGIV.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.5NFB2EUQ.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.CFGXHLKC.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import{a as A,b as y,c as v,d as b}from"../chunks-js/chunk.S2K25ADN.js";import{b as m,d as h,f as L,g as P}from"../chunks-js/chunk.F6MIXR4E.js";import{a as E,j as d,m as T,p as k}from"../chunks-js/chunk.BF43NN75.js";T();k();var c=class extends P{async connectedCallback(){var s;if(super.connectedCallback(),this.controller=new N(this,this.path),this.customCss=document.head.querySelector("#custom-css-vars"),!this.customCss){this.customCss=document.createElement("style"),this.customCss.id="custom-css-vars",document.head.appendChild(this.customCss);let t=sessionStorage.getItem(`custom-css-${this.tag}`);t&&(this.customCss.innerHTML=t)}this.modal||(this.modal=document.createElement("div"),document.body.appendChild(this.modal)),this.customElements=await q();let e=H(this.tag,this.customElements);this.cssVariables=Object.keys(e).filter(t=>e[t].subcategory==="Component Variables").map(t=>{let i=e[t];return E({name:t},i)}),document.addEventListener("omni-docs-theme-change",t=>{var o;this.theme=(o=getComputedStyle(document.documentElement).getPropertyValue("--code-editor-theme"))==null?void 0:o.trim();let i=this.renderRoot.querySelectorAll("code-editor");i&&i.forEach(r=>{r.updateExtensions()})}),document.addEventListener(C,()=>{this.requestUpdate()}),this.theme=(s=getComputedStyle(document.documentElement).getPropertyValue("--code-editor-theme"))==null?void 0:s.trim()}disconnectedCallback(){this.modal&&(document.body.removeChild(this.modal),this.modal=null)}render(){var t,i,o,r,l,u,p,$,x,_,w;if(!((t=this.controller)!=null&&t.story))return m`<omni-loading-icon style="max-height: 64px;"></omni-loading-icon>`;L(m`
        ${this._showStylesDialog?m`
          <div class="modal" role="dialog" aria-modal="true"
            @click="${a=>this._checkCloseModal(a)}" @touch="${a=>this._checkCloseModal(a)}">
            <div class="modal-container">
                <div class="modal-body">
                    <div class="docs-search-area">
                        <omni-search-field class="css-category" @input="${a=>this.handleCustomThemeCSSVariableSearch(a)}" @change="${a=>this.handleCustomThemeCSSVariableSearch(a)}"></omni-search-field>
                    </div>
                    <div class="component-props-table-wrapper">
                        <table class="component-props-table">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Override Value</th>
                                </tr>
                            </thead>
                            <tbody data-target="custom-css-table-${this.tag}" class="component-css-props">
                                ${(i=this.cssVariables)==null?void 0:i.sort((a,n)=>this._sortCssVariables(a,n)).map(a=>m`
                                    <tr>
                                        <td data-label="Name" scope="row"><pre><code class="language-css">--${a.name}</code></pre></td>
                                        <td data-label="Description">${a.description}</td>
                                        <td data-label="Override Value">${this.renderCssVariable(a)}</td>
                                    </tr>
                                `)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>`:h}
        `,this.modal),this.story=this.controller.story[this.key],this.story.originalArgs=(l=(o=this.story)==null?void 0:o.originalArgs)!=null?l:JSON.parse(JSON.stringify((r=this.story)==null?void 0:r.args));let e=this.story.render(this.story.args),s=this.story.source?this.story.source():S(e);return m`
        <div class="story-description">
            ${((u=this.story)==null?void 0:u.description)&&typeof((p=this.story)==null?void 0:p.description)=="function"?this.story.description():($=this.story)==null?void 0:$.description}
        </div>
        <div class="story">
            <div class="preview">
                <div class="item">
                <div class="${this.key}${this.interactive?" interactive-story":""}" .data=${this.story}>
                    ${this.overrideInteractive?R(this._interactiveSrc):e}
                </div>
                </div>

                ${this.interactive?m`
                    <div class="interactive">
                        <span class="docs-omni-component interactive-reset" @click="${this._resetLivePropertyEditor}">
                        <omni-icon class="docs-omni-component" style="cursor: pointer;" icon="@material/settings_backup_restore"></omni-icon>
                        </span>
                        <span class="docs-omni-component component-styles-btn" @click="${this._showComponentStyles}">
                        <omni-icon class="docs-omni-component" style="cursor: pointer;" icon="@material/format_color_fill"></omni-icon>
                        </span>
                        <live-property-editor
                        class="live-props docs-omni-component"
                        ?disabled=${this.overrideInteractive&&!1}
                        .data="${E({},this.story)}"
                        element="${this.tag}"
                        ignore-attributes="dir,lang"
                        @property-change="${async a=>{var V;let n=a.detail,g=!1;(!n.oldValue||!n.newValue||typeof n.newValue!="string"&&JSON.stringify(n.oldValue).trim()!==JSON.stringify(n.newValue).trim()||n.oldValue.toString().trim()!==n.newValue.toString().trim())&&(g=!0),g&&(this.story.args[n.property]=n.newValue,this.requestUpdate(),this.dispatchEvent(new CustomEvent(C,{bubbles:!0,composed:!0})),await this.updateComplete,this.codeEditor&&!((V=this.story)!=null&&V.source)&&await this.codeEditor.refresh(()=>S(this.story.render(this.story.args))))}}"></live-property-editor>
                    </div>
                    `:h}
            </div>
            <!-- <div style="border-top: 1px solid #e1e1e1;max-width: 600px;"> -->
            <div class="code-block">
                <code-editor
                class="source-code"
                .transformSource="${a=>D(a)}"
                .extensions="${async()=>[this._currentCodeTheme(),M(await O())]}"
                .code="${f(s!=null?s:"")}"
                @codemirror-loaded="${a=>{let n=a.detail.source;this.originalInteractiveSrc=n,this._interactiveSrc=n}}"
                @codemirror-source-change="${a=>{let n=a.detail.source;this._interactiveSrc=n,this.overrideInteractive=this._interactiveSrc!==this.originalInteractiveSrc&&this._interactiveSrc!==s,this.requestUpdate(),this.dispatchEvent(new CustomEvent(C,{bubbles:!0,composed:!0}))}}"
                ?read-only="${!0}">
                </code-editor>
            </div>
            ${(x=this.story)!=null&&x.play?m`
                <div class="play-tests">
                    <div style="display: flex; flex-direction: row;">
                    <omni-button
                        class="docs-omni-component"
                        label="Run Tests"
                        slot-position="left"
                        ?disabled=${this.overrideInteractive||this._isBusyPlaying||JSON.stringify((_=this.story)==null?void 0:_.originalArgs).replaceAll(`
`,"").replaceAll("\\n","").replaceAll("	","").replaceAll(" ","")!==JSON.stringify((w=this.story)==null?void 0:w.args).replaceAll(`
`,"").replaceAll("\\n","").replaceAll("	","").replaceAll(" ","")}
                        @click="${()=>this._play(this.story,`.${this.key}`)}">
                        <omni-icon class="docs-omni-component" icon="@material/play_arrow" style="margin-right: 8px;"></omni-icon>
                    </omni-button>
                    <div class="${this.key+"-result"} success">
                        <span class="material-icons" style="color: #155724;">check</span>
                        <span style="margin-left: 8px;">Passed</span>
                    </div>
                    </div>
                    <div class="${this.key+"-result"} failure">
                    <span class="material-icons" style="color: #721c24;">close</span>
                    <span style="margin-left: 8px;"><pre>${this._playError}</pre></span>
                    </div>
                </div>            
            `:h}
        </div>
    `}handleCustomThemeCSSVariableSearch(e){var o;let s=(o=e.target.value)!=null?o:"",i=document.querySelector(`[data-target=custom-css-table-${this.tag}]`).children;for(let r=0;r<i.length;r++){let l=i[r];l.innerText&&l.innerText.toLowerCase().includes(s.toLowerCase())?l.classList.remove("hidden"):l.classList.add("hidden")}}renderCssVariable(e){var t;let s=(t=this.customCss)==null?void 0:t.sheet;if(e.name){let i;if((s==null?void 0:s.cssRules.length)===0){let o=s.insertRule(":root {}");i=s.cssRules.item(o)}else for(let o=0;o<s.cssRules.length;o++){let r=s.cssRules[o];if(r.selectorText===":root"){i=r;break}}return i&&(e.value=i.style.getPropertyValue(`--${e.name}`)),e.control==="color"?m`
                    <omni-color-field
                        class="css-prop docs-omni-component"
                        .value="${f(e.value)}"
                        @input="${async o=>{var p;let u=((p=o.target.shadowRoot)==null?void 0:p.getElementById("inputField")).value;e.value=u,this._cssChanged(e)}}">
                    </omni-color-field>
                  `:m`
                    <omni-text-field
                        class="css-prop docs-omni-component"
                        .value="${f(e.value)}"
                        @input="${async o=>{var u;let l=((u=o.target.shadowRoot)==null?void 0:u.getElementById("inputField")).value;e.value=l,this._cssChanged(e)}}">
                    </omni-text-field>
                  `}return h}createRenderRoot(){return this}_sortCssVariables(e,s){var o;let t=(o=this.customCss)==null?void 0:o.sheet,i;if((t==null?void 0:t.cssRules.length)===0){let r=t.insertRule(":root {}");i=t.cssRules.item(r)}else for(let r=0;r<t.cssRules.length;r++){let l=t==null?void 0:t.cssRules[r];if(l.selectorText===":root"){i=l;break}}return i&&(e.value=i.style.getPropertyValue(`--${e.name}`),s.value=i.style.getPropertyValue(`--${s.name}`)),e.value?s.value?0:-1:s.value?1:0}_cssChanged(e){var o;let s=(o=this.customCss)==null?void 0:o.sheet,t;if((s==null?void 0:s.cssRules.length)===0){let r=s.insertRule(":root {}");t=s.cssRules.item(r)}else for(let r=0;r<s.cssRules.length;r++){let l=s==null?void 0:s.cssRules[r];if(l.selectorText===":root"){t=l;break}}e.value?t&&t.style.setProperty(`--${e.name}`,e.value):t&&t.style.removeProperty(`--${e.name}`);let i=t.cssText;sessionStorage.setItem(`custom-css-${this.tag}`,i)}_showComponentStyles(){this._showStylesDialog=!0}_checkCloseModal(e){var t;let s=(t=this.modal)==null?void 0:t.querySelector("div.modal-container");e.composedPath().includes(s)||(this._showStylesDialog=!1)}async _resetLivePropertyEditor(){var s,t,i;this.story.args=JSON.parse(JSON.stringify((s=this.story)==null?void 0:s.originalArgs)),this.overrideInteractive=!1;let e=(t=this.customCss)==null?void 0:t.sheet;for(let o=0;o<e.cssRules.length;o++)if((e==null?void 0:e.cssRules[o]).selectorText===":root"){e==null||e.deleteRule(o);break}sessionStorage.removeItem(`custom-css-${this.tag}`),this.requestUpdate(),this.dispatchEvent(new CustomEvent(C,{bubbles:!0,composed:!0})),await this.updateComplete,this.codeEditor&&!((i=this.story)!=null&&i.source)&&await this.codeEditor.refresh(()=>S(this.story.render(this.story.args))),this.propertyEditor&&this.propertyEditor.resetSlots()}async _play(e,s){try{if(!e.play)return;this._isBusyPlaying=!0;let t=this._createStoryContext(e,s);await e.play(t),this.querySelector(s+"-result.success").style.display="flex"}catch(t){this.querySelector(s+"-result.failure").style.display="flex",this._playError=t==null?void 0:t.toString()}finally{this._isBusyPlaying=!1}}_createStoryContext(e,s){return{story:e,args:e.args,canvasElement:this.querySelector(s)}}_currentCodeTheme(){var e;return((e=this.theme)==null?void 0:e.toLowerCase())==="dark"?I:F}};d([y({type:String,reflect:!0})],c.prototype,"path",2),d([y({type:String,reflect:!0})],c.prototype,"tag",2),d([y({type:String,reflect:!0})],c.prototype,"key",2),d([y({type:Boolean,reflect:!0})],c.prototype,"interactive",2),d([v()],c.prototype,"_interactiveSrc",2),d([v()],c.prototype,"_isBusyPlaying",2),d([v()],c.prototype,"_playError",2),d([v()],c.prototype,"_showStylesDialog",2),d([b(".source-code")],c.prototype,"codeEditor",2),d([b(".live-props")],c.prototype,"propertyEditor",2),c=d([A("story-renderer")],c);var C="story-renderer-interactive-update";export{c as StoryRenderer};
//# sourceMappingURL=StoryRenderer.js.map
