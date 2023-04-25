import"../chunks-js/chunk.QE354CCS.js";import{a as N}from"../chunks-js/chunk.EQXGZ5KJ.js";import"../chunks-js/chunk.B2Y7HXQI.js";import"../chunks-js/chunk.TBKWSV63.js";import"../chunks-js/chunk.STJOQLHS.js";import"../chunks-js/chunk.5TKLJSC4.js";import"../chunks-js/chunk.FW2ICWR7.js";import{a as f}from"../chunks-js/chunk.K2UMXYHA.js";import"../chunks-js/chunk.WASXY5YJ.js";import"../chunks-js/chunk.E3RY574V.js";import"../chunks-js/chunk.V3AH72NQ.js";import"../chunks-js/chunk.PJH7M65U.js";import{a as P}from"../chunks-js/chunk.G3QHRCKP.js";import{C as S,D as O,a as M,b as I,c as F,d as q,r as A,s as D}from"../chunks-js/chunk.6VUVFGIV.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.5NFB2EUQ.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.HA6SUF3B.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import{a as H,b as y,c as v,d as b}from"../chunks-js/chunk.S2K25ADN.js";import{b as m,d as h,f as L,g as R}from"../chunks-js/chunk.F6MIXR4E.js";import{a as E,j as d,m as T,p as k}from"../chunks-js/chunk.BF43NN75.js";T();k();var c=class extends R{async connectedCallback(){var t;if(super.connectedCallback(),this.controller=new N(this,this.path),this.customCss=document.head.querySelector("#custom-css-vars"),!this.customCss){this.customCss=document.createElement("style"),this.customCss.id="custom-css-vars",document.head.appendChild(this.customCss);let s=sessionStorage.getItem(`custom-css-${this.tag}`);s&&(this.customCss.innerHTML=s)}this.modal||(this.modal=document.createElement("div"),document.body.appendChild(this.modal)),this.customElements=await D();let e=q(this.tag,this.customElements);this.cssVariables=Object.keys(e).filter(s=>e[s].subcategory==="Component Variables").map(s=>{let r=e[s];return E({name:s},r)}),document.addEventListener("omni-docs-theme-change",s=>{var i;this.theme=(i=getComputedStyle(document.documentElement).getPropertyValue("--code-editor-theme"))==null?void 0:i.trim();let r=this.renderRoot.querySelectorAll("code-editor");r&&r.forEach(o=>{o.updateExtensions()})}),document.addEventListener(C,()=>{this.requestUpdate()}),this.theme=(t=getComputedStyle(document.documentElement).getPropertyValue("--code-editor-theme"))==null?void 0:t.trim()}disconnectedCallback(){this.modal&&(document.body.removeChild(this.modal),this.modal=null)}render(){var s,r,i,o,l,u,p,$,x,_,w;if(!((s=this.controller)!=null&&s.story))return m`<omni-loading-icon style="max-height: 64px;"></omni-loading-icon>`;L(m`
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
                                ${(r=this.cssVariables)==null?void 0:r.sort((a,n)=>this._sortCssVariables(a,n)).map(a=>m`
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
        `,this.modal),this.story=this.controller.story[this.key],this.story.originalArgs=(l=(i=this.story)==null?void 0:i.originalArgs)!=null?l:JSON.parse(JSON.stringify((o=this.story)==null?void 0:o.args));let e=this.story.render(this.story.args),t=this.story.source?this.story.source():S(e);return m`
        <div class="story-description">
            ${((u=this.story)==null?void 0:u.description)&&typeof((p=this.story)==null?void 0:p.description)=="function"?this.story.description():($=this.story)==null?void 0:$.description}
        </div>
        <div class="story">
            <div class="preview">
                <div class="item">
                <div class="${this.key}${this.interactive?" interactive-story":""}" .data=${this.story}>
                    ${this.overrideInteractive?P(this._interactiveSrc):e}
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
                .transformSource="${a=>O(a)}"
                .extensions="${async()=>[this._currentCodeTheme(),M(await A())]}"
                .code="${f(t!=null?t:"")}"
                @codemirror-loaded="${a=>{let n=a.detail.source;this.originalInteractiveSrc=n,this._interactiveSrc=n}}"
                @codemirror-source-change="${a=>{let n=a.detail.source;this._interactiveSrc=n,this.overrideInteractive=this._interactiveSrc!==this.originalInteractiveSrc&&this._interactiveSrc!==t,this.requestUpdate(),this.dispatchEvent(new CustomEvent(C,{bubbles:!0,composed:!0}))}}"
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
    `}handleCustomThemeCSSVariableSearch(e){var i;let t=(i=e.target.value)!=null?i:"",r=document.querySelector(`[data-target=custom-css-table-${this.tag}]`).children;for(let o=0;o<r.length;o++){let l=r[o];l.innerText&&l.innerText.toLowerCase().includes(t.toLowerCase())?l.classList.remove("hidden"):l.classList.add("hidden")}}renderCssVariable(e){var s;let t=(s=this.customCss)==null?void 0:s.sheet;if(e.name){let r;if((t==null?void 0:t.cssRules.length)===0){let i=t.insertRule(":root {}");r=t.cssRules.item(i)}else for(let i=0;i<t.cssRules.length;i++){let o=t.cssRules[i];if(o.selectorText===":root"){r=o;break}}return r&&(e.value=r.style.getPropertyValue(`--${e.name}`)),e.control==="color"?m`
                    <omni-color-field
                        class="css-prop docs-omni-component"
                        .value="${f(e.value)}"
                        @input="${async i=>{var p;let u=((p=i.target.shadowRoot)==null?void 0:p.getElementById("inputField")).value;e.value=u,this._cssChanged(e)}}">
                    </omni-color-field>
                  `:m`
                    <omni-text-field
                        class="css-prop docs-omni-component"
                        .value="${f(e.value)}"
                        @input="${async i=>{var u;let l=((u=i.target.shadowRoot)==null?void 0:u.getElementById("inputField")).value;e.value=l,this._cssChanged(e)}}">
                    </omni-text-field>
                  `}return h}createRenderRoot(){return this}_sortCssVariables(e,t){var i;let s=(i=this.customCss)==null?void 0:i.sheet,r;if((s==null?void 0:s.cssRules.length)===0){let o=s.insertRule(":root {}");r=s.cssRules.item(o)}else for(let o=0;o<s.cssRules.length;o++){let l=s==null?void 0:s.cssRules[o];if(l.selectorText===":root"){r=l;break}}return r&&(e.value=r.style.getPropertyValue(`--${e.name}`),t.value=r.style.getPropertyValue(`--${t.name}`)),e.value?t.value?0:-1:t.value?1:0}_cssChanged(e){var i;let t=(i=this.customCss)==null?void 0:i.sheet,s;if((t==null?void 0:t.cssRules.length)===0){let o=t.insertRule(":root {}");s=t.cssRules.item(o)}else for(let o=0;o<t.cssRules.length;o++){let l=t==null?void 0:t.cssRules[o];if(l.selectorText===":root"){s=l;break}}e.value?s&&s.style.setProperty(`--${e.name}`,e.value):s&&s.style.removeProperty(`--${e.name}`);let r=s.cssText;sessionStorage.setItem(`custom-css-${this.tag}`,r)}_showComponentStyles(){this._showStylesDialog=!0}_checkCloseModal(e){var s;let t=(s=this.modal)==null?void 0:s.querySelector("div.modal-container");e.composedPath().includes(t)||(this._showStylesDialog=!1)}async _resetLivePropertyEditor(){var t,s,r;this.story.args=JSON.parse(JSON.stringify((t=this.story)==null?void 0:t.originalArgs)),this.overrideInteractive=!1;let e=(s=this.customCss)==null?void 0:s.sheet;for(let i=0;i<e.cssRules.length;i++)if((e==null?void 0:e.cssRules[i]).selectorText===":root"){e==null||e.deleteRule(i);break}sessionStorage.removeItem(`custom-css-${this.tag}`),this.requestUpdate(),this.dispatchEvent(new CustomEvent(C,{bubbles:!0,composed:!0})),await this.updateComplete,this.codeEditor&&!((r=this.story)!=null&&r.source)&&await this.codeEditor.refresh(()=>S(this.story.render(this.story.args))),this.propertyEditor&&this.propertyEditor.resetSlots()}async _play(e,t){var s,r,i;try{if(!e.play)return;this._isBusyPlaying=!0;let o=this._createStoryContext(e,t);await e.play(o),this.querySelector(t+"-result.success").style.display="flex",this.querySelector(t+"-result.failure").style.display="none"}catch(o){this.querySelector(t+"-result.failure").style.display="flex",this.querySelector(t+"-result.success").style.display="none",this._playError=(i=(r=(s=o==null?void 0:o.matcherResult)==null?void 0:s.message)!=null?r:o==null?void 0:o.message)==null?void 0:i.toString().replace(/\u001b[^m]*?m/g,"").replace(/\n \u001b[^m]*?m/g,"").replace(/\u001b[^m]*?m\n/g,"").replace(/\n\u001b[^m]*?m/g,"")}finally{this._isBusyPlaying=!1}}_createStoryContext(e,t){return{story:e,args:e.args,canvasElement:this.querySelector(t)}}_currentCodeTheme(){var e;return((e=this.theme)==null?void 0:e.toLowerCase())==="dark"?I:F}};d([y({type:String,reflect:!0})],c.prototype,"path",2),d([y({type:String,reflect:!0})],c.prototype,"tag",2),d([y({type:String,reflect:!0})],c.prototype,"key",2),d([y({type:Boolean,reflect:!0})],c.prototype,"interactive",2),d([v()],c.prototype,"_interactiveSrc",2),d([v()],c.prototype,"_isBusyPlaying",2),d([v()],c.prototype,"_playError",2),d([v()],c.prototype,"_showStylesDialog",2),d([b(".source-code")],c.prototype,"codeEditor",2),d([b(".live-props")],c.prototype,"propertyEditor",2),c=d([H("story-renderer")],c);var C="story-renderer-interactive-update";export{c as StoryRenderer};
//# sourceMappingURL=StoryRenderer.js.map
