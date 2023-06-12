import"../chunks-js/chunk.PRA3TVHK.js";import{a as Fe}from"../chunks-js/chunk.EQXGZ5KJ.js";import"../chunks-js/chunk.T2GWAZH7.js";import"../chunks-js/chunk.RTZAZGF5.js";import"../chunks-js/chunk.VAH5TOPR.js";import"../chunks-js/chunk.O4HNU4FO.js";import{a as re}from"../chunks-js/chunk.5DQX5M47.js";import"../chunks-js/chunk.DZCGDWRW.js";import"../chunks-js/chunk.Y2FNDKPS.js";import"../chunks-js/chunk.DXJESG3Z.js";import"../chunks-js/chunk.XCXCHO25.js";import{E as q,F as be,a as le,b as pe,c as ue,d as he,e as k,f as ge,t as ve,u as Se}from"../chunks-js/chunk.LSBYP56E.js";import"../chunks-js/chunk.Z5LIJAXH.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.VW2P7YAN.js";import"../chunks-js/chunk.MYG5FMLT.js";import"../chunks-js/chunk.2EDJFZZN.js";import"../chunks-js/chunk.N3FDHMD3.js";import"../chunks-js/chunk.YX3UUKJ3.js";import"../chunks-js/chunk.XUUOUKOL.js";import"../chunks-js/chunk.LB764BBD.js";import"../chunks-js/chunk.KRAWXAJA.js";import"../chunks-js/chunk.LUCH4Y6K.js";import"../chunks-js/chunk.PNTHLTQK.js";import{a as ye,b as te,c as se,d as oe}from"../chunks-js/chunk.S2K25ADN.js";import{b as R,e as A,g as de,h as me}from"../chunks-js/chunk.L3RZWW2F.js";import{a as ae,j as P,m as ne,p as ie}from"../chunks-js/chunk.BF43NN75.js";ne();ie();var C=class extends me{constructor(){super(...arguments);this.sourceFallbacks=[{fallbackFramework:"HTML",frameworks:["HTML","Lit","Vue"],allowRenderFromResult:!0}];this.noInteractiveCodePen=["React"]}async connectedCallback(){var s;if(super.connectedCallback(),this.controller=new Fe(this,this.path),this.customCss=document.head.querySelector("#custom-css-vars"),!this.customCss){this.customCss=document.createElement("style"),this.customCss.id="custom-css-vars",document.head.appendChild(this.customCss);let t=sessionStorage.getItem(`custom-css-${this.tag}`);t&&(this.customCss.innerHTML=t)}this.modal||(this.modal=document.createElement("div"),document.body.appendChild(this.modal)),this.customElements=await Se();let r=ge(this.tag,this.customElements);this.cssVariables=Object.keys(r).filter(t=>r[t].subcategory==="Component Variables").map(t=>{let c=r[t];return ae({name:t},c)}),document.addEventListener("omni-docs-theme-change",t=>{var a;this.theme=(a=getComputedStyle(document.documentElement).getPropertyValue("--code-editor-theme"))==null?void 0:a.trim();let c=this.renderRoot.querySelectorAll("code-editor");c&&c.forEach(e=>{e.updateExtensions()})}),document.addEventListener("omni-docs-framework-change",async t=>{var n,y,j,i,o;let c=this.renderRoot.querySelectorAll("code-editor");c&&c.forEach(m=>{m.updateExtensions()});let a=(n=window.localStorage.getItem(k))!=null?n:"HTML",e=(y=this.story.frameworkSources)==null?void 0:y.find(m=>m.framework===a);e||(a=(i=(j=this.sourceFallbacks.find(m=>m.frameworks.includes(a)))==null?void 0:j.fallbackFramework)!=null?i:a,e=(o=this.story.frameworkSources)==null?void 0:o.find(m=>m.framework===a)),this.codeEditor&&(await this.codeEditor.refresh(()=>{var g,S,F,b,u,$,p;let m=(g=e==null?void 0:e.sourceParts)!=null&&g.htmlFragment?typeof((S=e==null?void 0:e.sourceParts)==null?void 0:S.htmlFragment)=="string"?(F=e==null?void 0:e.sourceParts)==null?void 0:F.htmlFragment:(b=e==null?void 0:e.sourceParts)==null?void 0:b.htmlFragment(this.story.args):e!=null&&e.load?e.load(this.story.args,e):(u=this.sourceFallbacks.find(H=>H.frameworks.includes(a)))!=null&&u.allowRenderFromResult?q(this.story.render(this.story.args)):"";return m?($=this.renderRoot.querySelector(".primary-code-block"))==null||$.classList.remove("no-display"):(p=this.renderRoot.querySelector(".primary-code-block"))==null||p.classList.add("no-display"),m}),this.secondaryCodeEditor&&await this.secondaryCodeEditor.refresh(()=>{var g,S,F,b,u,$;let m=(g=e==null?void 0:e.sourceParts)!=null&&g.jsFragment?typeof((S=e==null?void 0:e.sourceParts)==null?void 0:S.jsFragment)=="string"?(F=e==null?void 0:e.sourceParts)==null?void 0:F.jsFragment:(b=e==null?void 0:e.sourceParts)==null?void 0:b.jsFragment(this.story.args):"";return m?((u=this.renderRoot.querySelector(".secondary-code-block"))==null||u.classList.remove("no-display"),this.renderRoot.querySelectorAll(".code-title").forEach(p=>p==null?void 0:p.classList.remove("no-display"))):(($=this.renderRoot.querySelector(".secondary-code-block"))==null||$.classList.add("no-display"),this.renderRoot.querySelectorAll(".code-title").forEach(p=>p==null?void 0:p.classList.add("no-display"))),m}));let d=this.renderRoot.querySelector(".code-pen-gen-btn");d&&((e==null?void 0:e.disableCodePen)||this.noInteractiveCodePen.includes(a)&&this.interactive?d==null||d.classList.add("no-display"):d==null||d.classList.remove("no-display"))}),document.addEventListener(ce,()=>{this.requestUpdate()}),this.theme=(s=getComputedStyle(document.documentElement).getPropertyValue("--code-editor-theme"))==null?void 0:s.trim()}disconnectedCallback(){this.modal&&(document.body.removeChild(this.modal),this.modal=null)}updated(r){var s;super.updated(r),(s=window.Prism)==null||s.highlightAll()}render(){var d,n,y,j,i,o,m,g,S,F,b,u,$,p,H,O,I,J,N,B,U,z,K,W,X,Y,Z,G,Q,D;if(!((d=this.controller)!=null&&d.story))return R`<omni-loading-icon style="max-height: 64px;"></omni-loading-icon>`;de(R`
        ${this._showStylesDialog?R`
          <div class="modal" role="dialog" aria-modal="true"
            @click="${l=>this._checkCloseModal(l)}" @touch="${l=>this._checkCloseModal(l)}">
            <div class="modal-container">
                <div class="modal-body">
                    <div class="docs-search-area">
                        <omni-search-field class="css-category" @input="${l=>this.handleCustomThemeCSSVariableSearch(l)}" @change="${l=>this.handleCustomThemeCSSVariableSearch(l)}"></omni-search-field>
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
                                ${(n=this.cssVariables)==null?void 0:n.sort((l,v)=>this._sortCssVariables(l,v)).map(l=>R`
                                    <tr>
                                        <td data-label="Name" scope="row"><pre><code class="language-css">--${l.name}</code></pre></td>
                                        <td data-label="Description">${l.description}</td>
                                        <td data-label="Override Value">${this.renderCssVariable(l)}</td>
                                    </tr>
                                `)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>`:A}
        `,this.modal),this.story=this.controller.story[this.key],this.story.originalArgs=(i=(y=this.story)==null?void 0:y.originalArgs)!=null?i:JSON.parse(JSON.stringify((j=this.story)==null?void 0:j.args)),Object.keys((m=(o=this.story)==null?void 0:o.args)!=null?m:{}).forEach(l=>{this.story.args[l]===void 0&&(this.story.originalArgs[l]=void 0)});let r=this.story.render(this.story.args),s=(g=window.localStorage.getItem(k))!=null?g:"HTML",t=(S=this.story.frameworkSources)==null?void 0:S.find(l=>l.framework===s),c=()=>{var l,v,T,x,L;return s=(l=window.localStorage.getItem(k))!=null?l:"HTML",t=(v=this.story.frameworkSources)==null?void 0:v.find(E=>E.framework===s),t||(s=(x=(T=this.sourceFallbacks.find(E=>E.frameworks.includes(s)))==null?void 0:T.fallbackFramework)!=null?x:s,t=(L=this.story.frameworkSources)==null?void 0:L.find(E=>E.framework===s)),s};c();let a=(F=t==null?void 0:t.sourceParts)!=null&&F.htmlFragment?typeof((b=t==null?void 0:t.sourceParts)==null?void 0:b.htmlFragment)=="string"?(u=t==null?void 0:t.sourceParts)==null?void 0:u.htmlFragment:($=t==null?void 0:t.sourceParts)==null?void 0:$.htmlFragment(this.story.args):t!=null&&t.load?t.load(this.story.args,t):(p=this.sourceFallbacks.find(l=>l.frameworks.includes(s)))!=null&&p.allowRenderFromResult?q(r):"",e=(H=t==null?void 0:t.sourceParts)!=null&&H.jsFragment?typeof((O=t==null?void 0:t.sourceParts)==null?void 0:O.jsFragment)=="string"?(I=t==null?void 0:t.sourceParts)==null?void 0:I.jsFragment:(J=t==null?void 0:t.sourceParts)==null?void 0:J.jsFragment(this.story.args):"";return R`
        <div class="story-description">
            ${((N=this.story)==null?void 0:N.description)&&typeof((B=this.story)==null?void 0:B.description)=="function"?this.story.description():(U=this.story)==null?void 0:U.description}
        </div>
        <div class="story">
            <div class="preview">
                <div class="item">
                <div class="${this.key}${this.interactive?" interactive-story":""}" .data=${this.story}>
                    ${r}
                </div>
                </div>

                ${this.interactive?R`
                    <div class="interactive">
                        <span class="docs-omni-component interactive-reset" @click="${this._resetLivePropertyEditor}">
                        <omni-icon class="docs-omni-component" style="cursor: pointer;" icon="@material/settings_backup_restore"></omni-icon>
                        </span>
                        <span class="docs-omni-component component-styles-btn" @click="${this._showComponentStyles}">
                        <omni-icon class="docs-omni-component" style="cursor: pointer;" icon="@material/format_color_fill"></omni-icon>
                        </span>
                        <live-property-editor
                        class="live-props docs-omni-component"
                        .data="${ae({},this.story)}"
                        element="${this.tag}"
                        ignore-attributes="dir,lang"
                        @property-change="${async l=>{let v=l.detail,T=!1;(!v.oldValue||!v.newValue||typeof v.newValue!="string"&&JSON.stringify(v.oldValue).trim()!==JSON.stringify(v.newValue).trim()||v.oldValue.toString().trim()!==v.newValue.toString().trim())&&(T=!0),T&&(this.story.args[v.property]=v.newValue,this.requestUpdate(),this.dispatchEvent(new CustomEvent(ce,{bubbles:!0,composed:!0})),await this.updateComplete,this.codeEditor&&(c(),await this.codeEditor.refresh(()=>{var x,L,E,f,_;return(x=t==null?void 0:t.sourceParts)!=null&&x.htmlFragment?typeof((L=t==null?void 0:t.sourceParts)==null?void 0:L.htmlFragment)=="string"?(E=t==null?void 0:t.sourceParts)==null?void 0:E.htmlFragment:(f=t==null?void 0:t.sourceParts)==null?void 0:f.htmlFragment(this.story.args):t!=null&&t.load?t.load(this.story.args,t):(_=this.sourceFallbacks.find(w=>w.frameworks.includes(s)))!=null&&_.allowRenderFromResult?q(this.story.render(this.story.args)):""}),this.secondaryCodeEditor&&await this.secondaryCodeEditor.refresh(()=>{var L,E,f,_,w,ee;let x=(L=t==null?void 0:t.sourceParts)!=null&&L.jsFragment?typeof((E=t==null?void 0:t.sourceParts)==null?void 0:E.jsFragment)=="string"?(f=t==null?void 0:t.sourceParts)==null?void 0:f.jsFragment:(_=t==null?void 0:t.sourceParts)==null?void 0:_.jsFragment(this.story.args):"";return x?((w=this.renderRoot.querySelector(".secondary-code-block"))==null||w.classList.remove("no-display"),this.renderRoot.querySelectorAll(".code-title").forEach(h=>h==null?void 0:h.classList.remove("no-display"))):((ee=this.renderRoot.querySelector(".secondary-code-block"))==null||ee.classList.add("no-display"),this.renderRoot.querySelectorAll(".code-title").forEach(h=>h==null?void 0:h.classList.add("no-display"))),x})))}}"></live-property-editor>
                    </div>
                    `:A}
            </div>
            <div class="code-title ${e?"":"no-display"}">HTML</div>
            <div class="code-block primary-code-block ${a?"":"no-display"}">
                <code-editor
                class="source-code primary-source-code"
                .transformSource="${l=>c()==="React"?l:be(l)}"
                .extensions="${async()=>[this._currentCodeTheme(),c()==="React"?le({jsx:!0}):pe(await ve())]}"
                .code="${re(a)}"
                ?read-only="${!0}">
                </code-editor>
            </div>

            <div class="code-title ${e?"":"no-display"}">JS</div>
            <div class="code-block secondary-code-block ${e?"":"no-display"}">
                <code-editor
                class="source-code secondary-js-source-code"
                .extensions="${async()=>[this._currentCodeTheme(),le({jsx:!0})]}"
                .code="${re(e)}"
                read-only>
                </code-editor>
            </div>

            <div class="two-part ${!((z=this.story)!=null&&z.play)&&((W=(K=this.story.frameworkSources)==null?void 0:K.find(l=>l.framework===s))==null?void 0:W.disableCodePen)?"no-display":""}">
            
                <div class="play-tests">
                    ${(X=this.story)!=null&&X.play?R`
                            <div style="display: flex;flex-direction: row;align-items: center;">
                            <omni-button
                                class="docs-omni-component"
                                ?disabled=${this._isBusyPlaying||JSON.stringify((Y=this.story)==null?void 0:Y.originalArgs).replaceAll(`
`,"").replaceAll("\\n","").replaceAll("	","").replaceAll(" ","")!==JSON.stringify((Z=this.story)==null?void 0:Z.args).replaceAll(`
`,"").replaceAll("\\n","").replaceAll("	","").replaceAll(" ","")}
                                @click="${()=>this._play(this.story,`.${this.key}`)}">
                                <omni-icon class="docs-omni-component" icon="@material/play_arrow"></omni-icon>
                            </omni-button>
                            <div class="${this.key+"-result"} success">
                                <span class="material-icons" style="color: #155724;">check</span>
                            </div>
                            </div>       
                    `:A}
                </div>     
                <omni-button 
                    class="code-pen-gen-btn docs-omni-component ${((Q=(G=this.story.frameworkSources)==null?void 0:G.find(l=>l.framework===s))==null?void 0:Q.disableCodePen)||this.noInteractiveCodePen.includes(s)&&this.interactive?"no-display":""}" 
                    @click="${()=>{var l;return this._generateCodePen((l=window.localStorage.getItem(k))!=null?l:"HTML")}}">
                    <omni-icon size="default">
                        <!-- <svg class="hidden-after-760" viewBox="0 0 138 26" fill="none" stroke="var(--omni-button-secondary-hover-border-color, currentColor)" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" width="100%" height="100%" title="CodePen">
                            <path d="M15 8a7 7 0 1 0 0 10m7-8.7L33 2l11 7.3v7.4L33 24l-11-7.3zm0 0 11 7.4 11-7.4m0 7.4L33 9.3l-11 7.4M33 2v7.3m0 7.4V24M52 6h5a7 7 0 0 1 0 14h-5zm28 0h-9v14h9m-9-7h6m11 1h6a4 4 0 0 0 0-8h-6v14m26-14h-9v14h9m-9-7h6m11 7V6l11 14V6"></path>
                        </svg> -->
                        <!-- class="hidden-until-760" -->
                        <svg style="height: 24px; stroke: var(--omni-theme-font-color); background: var(--omni-theme-background-color);" xmlns="http://www.w3.org/2000/svg" aria-label="CodePen" role="img" viewBox="0 0 512 512">
                            <g xmlns="http://www.w3.org/2000/svg" fill="none" stroke-width="33" stroke-linejoin="round">
                                <path d="M81 198v116l175 117 175-117V198L256 81z"/>
                                <path d="M81 198l175 116 175-116M256 81v117"/>
                                <path d="M81 314l175-116 175 116M256 431V314"/>
                            </g>
                        </svg>
                    </omni-icon>
                </omni-button>
            </div>
            ${(D=this.story)!=null&&D.play?R`
                <div class="${this.key+"-result"} failure">
                    <div class="play-tests-out">
                    <span class="material-icons" style="color: #721c24;">close</span>
                    <span style="margin-left: 8px;"><pre>${this._playError}</pre></span>
                    </div>
                </div>
                `:A}
        </div>
    `}handleCustomThemeCSSVariableSearch(r){var a;let s=(a=r.target.value)!=null?a:"",c=document.querySelector(`[data-target=custom-css-table-${this.tag}]`).children;for(let e=0;e<c.length;e++){let d=c[e];d.innerText&&d.innerText.toLowerCase().includes(s.toLowerCase())?d.classList.remove("hidden"):d.classList.add("hidden")}}renderCssVariable(r){var t;let s=(t=this.customCss)==null?void 0:t.sheet;if(r.name){let c;if((s==null?void 0:s.cssRules.length)===0){let a=s.insertRule(":root {}");c=s.cssRules.item(a)}else for(let a=0;a<s.cssRules.length;a++){let e=s.cssRules[a];if(e.selectorText===":root"){c=e;break}}return c&&(r.value=c.style.getPropertyValue(`--${r.name}`)),r.control==="color"?R`
                    <omni-color-field
                        class="css-prop docs-omni-component"
                        .value="${re(r.value)}"
                        @input="${async a=>{var y;let n=((y=a.target.shadowRoot)==null?void 0:y.getElementById("inputField")).value;r.value=n,this._cssChanged(r)}}">
                    </omni-color-field>
                  `:R`
                    <omni-text-field
                        class="css-prop docs-omni-component"
                        .value="${re(r.value)}"
                        @input="${async a=>{var n;let d=((n=a.target.shadowRoot)==null?void 0:n.getElementById("inputField")).value;r.value=d,this._cssChanged(r)}}">
                    </omni-text-field>
                  `}return A}createRenderRoot(){return this}_sortCssVariables(r,s){var a;let t=(a=this.customCss)==null?void 0:a.sheet,c;if((t==null?void 0:t.cssRules.length)===0){let e=t.insertRule(":root {}");c=t.cssRules.item(e)}else for(let e=0;e<t.cssRules.length;e++){let d=t==null?void 0:t.cssRules[e];if(d.selectorText===":root"){c=d;break}}return c&&(r.value=c.style.getPropertyValue(`--${r.name}`),s.value=c.style.getPropertyValue(`--${s.name}`)),r.value?s.value?0:-1:s.value?1:0}_cssChanged(r){var a;let s=(a=this.customCss)==null?void 0:a.sheet,t;if((s==null?void 0:s.cssRules.length)===0){let e=s.insertRule(":root {}");t=s.cssRules.item(e)}else for(let e=0;e<s.cssRules.length;e++){let d=s==null?void 0:s.cssRules[e];if(d.selectorText===":root"){t=d;break}}r.value?t&&t.style.setProperty(`--${r.name}`,r.value):t&&t.style.removeProperty(`--${r.name}`);let c=t.cssText;sessionStorage.setItem(`custom-css-${this.tag}`,c)}_showComponentStyles(){this._showStylesDialog=!0}_checkCloseModal(r){var t;let s=(t=this.modal)==null?void 0:t.querySelector("div.modal-container");r.composedPath().includes(s)||(this._showStylesDialog=!1)}async _resetLivePropertyEditor(){var s,t,c,a,e,d,n,y,j;this.story.args=JSON.parse(JSON.stringify((s=this.story)==null?void 0:s.originalArgs)),Object.keys((c=(t=this.story)==null?void 0:t.originalArgs)!=null?c:{}).forEach(i=>{this.story.originalArgs[i]===void 0&&(this.story.args[i]=void 0)});let r=(a=this.customCss)==null?void 0:a.sheet;for(let i=0;i<r.cssRules.length;i++)if((r==null?void 0:r.cssRules[i]).selectorText===":root"){r==null||r.deleteRule(i);break}if(sessionStorage.removeItem(`custom-css-${this.tag}`),this.requestUpdate(),this.dispatchEvent(new CustomEvent(ce,{bubbles:!0,composed:!0})),await this.updateComplete,this.codeEditor){let i=(e=window.localStorage.getItem(k))!=null?e:"HTML",o=(d=this.story.frameworkSources)==null?void 0:d.find(m=>m.framework===i);o||(i=(y=(n=this.sourceFallbacks.find(m=>m.frameworks.includes(i)))==null?void 0:n.fallbackFramework)!=null?y:i,o=(j=this.story.frameworkSources)==null?void 0:j.find(m=>m.framework===i)),await this.codeEditor.refresh(()=>{var m,g,S,F,b;return(m=o==null?void 0:o.sourceParts)!=null&&m.htmlFragment?typeof((g=o==null?void 0:o.sourceParts)==null?void 0:g.htmlFragment)=="string"?(S=o==null?void 0:o.sourceParts)==null?void 0:S.htmlFragment:(F=o==null?void 0:o.sourceParts)==null?void 0:F.htmlFragment(this.story.args):o!=null&&o.load?o.load(this.story.args,o):(b=this.sourceFallbacks.find(u=>u.frameworks.includes(i)))!=null&&b.allowRenderFromResult?q(this.story.render(this.story.args)):""}),this.secondaryCodeEditor&&this.secondaryCodeEditor.refresh(()=>{var g,S,F,b,u,$;let m=(g=o==null?void 0:o.sourceParts)!=null&&g.jsFragment?typeof((S=o==null?void 0:o.sourceParts)==null?void 0:S.jsFragment)=="string"?(F=o==null?void 0:o.sourceParts)==null?void 0:F.jsFragment:(b=o==null?void 0:o.sourceParts)==null?void 0:b.jsFragment(this.story.args):"";return m?((u=this.renderRoot.querySelector(".secondary-code-block"))==null||u.classList.remove("no-display"),this.renderRoot.querySelectorAll(".code-title").forEach(p=>p==null?void 0:p.classList.remove("no-display"))):(($=this.renderRoot.querySelector(".secondary-code-block"))==null||$.classList.add("no-display"),this.renderRoot.querySelectorAll(".code-title").forEach(p=>p==null?void 0:p.classList.add("no-display"))),m})}this.propertyEditor&&this.propertyEditor.resetSlots()}async _generateCodePen(r){var p,H,O,I,J,N,B,U,z,K,W,X,Y,Z,G,Q,D,l,v,T,x,L,E,f,_,w,ee;let s=((H=(p=document.getElementById("header-version-indicator"))==null?void 0:p.innerText)!=null?H:"").toLowerCase(),c=this.customElements.modules.find(h=>{var M;return(M=h.exports)==null?void 0:M.find(V=>V.name===this.tag)}).path.split("/"),a=c[c.length-2],e=(J=(O=this.story.frameworkSources)==null?void 0:O.find(h=>h.framework===r))!=null?J:(I=this.story.frameworkSources)==null?void 0:I.find(h=>{var M;return h.framework===((M=this.sourceFallbacks.find(V=>V.frameworks.includes(r)))==null?void 0:M.fallbackFramework)}),d=(N=e==null?void 0:e.sourceParts)!=null&&N.htmlFragment?typeof((B=e==null?void 0:e.sourceParts)==null?void 0:B.htmlFragment)=="string"?(U=e==null?void 0:e.sourceParts)==null?void 0:U.htmlFragment:(z=e==null?void 0:e.sourceParts)==null?void 0:z.htmlFragment(this.story.args):e!=null&&e.load?e.load(this.story.args,e):(K=this.sourceFallbacks.find(h=>h.frameworks.includes(r)))!=null&&K.allowRenderFromResult?q(this.story.render(this.story.args)):"",n=s&&s!=="latest"&&s!=="local"?["alpha","beta","next"].includes(s)?`esm-${s}`:`${s}-esm`:"esm-alpha",y="",j="";for(let h=0;h<document.styleSheets.length;h++){let M=document.styleSheets[h];try{if(M.cssRules)for(let V=0;V<M.cssRules.length;V++){let Ce=M.cssRules[V];j+=`
        ${Ce.cssText}`}}catch(V){continue}}let i=document.documentElement.getAttribute("theme"),o="",m="none",g="";switch(!0){case(r==="Vue"&&!((W=e==null?void 0:e.sourceParts)!=null&&W.fallbackFramework)):y=`
<html theme="${i!=null?i:"light"}">
    <body style="
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 24px;
    ">
            <div id="app">
                ${((X=e==null?void 0:e.sourceParts)!=null&&X.htmlFragment?typeof e.sourceParts.htmlFragment=="function"?e.sourceParts.htmlFragment(this.story.args):e.sourceParts.htmlFragment:d).replaceAll("@capitec/omni-components",`https://cdn.jsdelivr.net/npm/@capitec/omni-components@${n}`).replace(new RegExp(`(https://cdn.jsdelivr.net/npm/@capitec/omni-components@${n}/)([^/"'\`]+)`,"g"),"$1dist/$2/index.js")}
            </div>
    </body>
</html>`,o=`import 'https://cdn.jsdelivr.net/npm/@capitec/omni-components@${n}/dist/omni-components.js';
import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js';
${((Y=e==null?void 0:e.sourceParts)!=null&&Y.jsFragment?typeof e.sourceParts.jsFragment=="function"?e.sourceParts.jsFragment(this.story.args):e.sourceParts.jsFragment:"").replaceAll("@capitec/omni-components",`https://cdn.jsdelivr.net/npm/@capitec/omni-components@${n}`).replace(new RegExp(`(https://cdn.jsdelivr.net/npm/@capitec/omni-components@${n}/)([^/"'\`]+)`,"g"),"$1dist/$2/index.js")}

                
const app = createApp({
    data() {
        return window.vueData ?? {}
    }
});
app.config.compilerOptions.isCustomElement = (tag) => tag.includes('omni-');
app.mount('#app');`;break;case(r==="Lit"&&!((Z=e==null?void 0:e.sourceParts)!=null&&Z.fallbackFramework)):y=`
<html theme="${i!=null?i:"light"}">
    <body style="
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 24px;
    ">
        <div id="root" ></div>
    </body>
</html>`,o=`import 'https://cdn.jsdelivr.net/npm/@capitec/omni-components@${n}/dist/omni-components.js';
import { html, render } from 'https://unpkg.com/lit/index.js?module';
${((G=e==null?void 0:e.sourceParts)!=null&&G.jsFragment?typeof e.sourceParts.jsFragment=="function"?e.sourceParts.jsFragment(this.story.args):e.sourceParts.jsFragment:"").replaceAll("@capitec/omni-components",`https://cdn.jsdelivr.net/npm/@capitec/omni-components@${n}`).replace(new RegExp(`(https://cdn.jsdelivr.net/npm/@capitec/omni-components@${n}/)([^/"'\`]+)`,"g"),"$1dist/$2/index.js")}

const content = html\`
${((Q=e==null?void 0:e.sourceParts)!=null&&Q.htmlFragment?typeof e.sourceParts.htmlFragment=="function"?e.sourceParts.htmlFragment(this.story.args):e.sourceParts.htmlFragment:d).replaceAll("@capitec/omni-components",`https://cdn.jsdelivr.net/npm/@capitec/omni-components@${n}`).replace(new RegExp(`(https://cdn.jsdelivr.net/npm/@capitec/omni-components@${n}/)([^/"'\`]+)`,"g"),"$1dist/$2/index.js")}
\`;

render(content, document.getElementById('root'));
                `;break;case r==="Lit":case r==="Vue":case r==="HTML":y=`
<html theme="${i!=null?i:"light"}">
    <body style="
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 24px;
    ">
        ${((D=e==null?void 0:e.sourceParts)!=null&&D.htmlFragment?typeof e.sourceParts.htmlFragment=="function"?e.sourceParts.htmlFragment(this.story.args):e.sourceParts.htmlFragment:d).replaceAll("@capitec/omni-components",`https://cdn.jsdelivr.net/npm/@capitec/omni-components@${n}`).replace(new RegExp(`(https://cdn.jsdelivr.net/npm/@capitec/omni-components@${n}/)([^/"'\`]+)`,"g"),"$1dist/$2/index.js")}
    </body>
</html>`,o=`import 'https://cdn.jsdelivr.net/npm/@capitec/omni-components@${n}/dist/omni-components.js';
${((l=e==null?void 0:e.sourceParts)!=null&&l.jsFragment?typeof e.sourceParts.jsFragment=="function"?e.sourceParts.jsFragment(this.story.args):e.sourceParts.jsFragment:"").replaceAll("@capitec/omni-components",`https://cdn.jsdelivr.net/npm/@capitec/omni-components@${n}`).replace(new RegExp(`(https://cdn.jsdelivr.net/npm/@capitec/omni-components@${n}/)([^/"'\`]+)`,"g"),"$1dist/$2/index.js")}`;break;case r==="React":y=`
<html theme="${i!=null?i:"light"}">
    <body style="
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 24px;
    ">
        <div id="root"></div>
        ${((v=e==null?void 0:e.sourceParts)!=null&&v.htmlFragment?typeof e.sourceParts.htmlFragment=="function"?e.sourceParts.htmlFragment(this.story.args):e.sourceParts.htmlFragment:"").replaceAll("@capitec/omni-components-react",`https://cdn.jsdelivr.net/npm/@capitec/omni-components-react@${n}`).replace(new RegExp(`https://cdn.jsdelivr.net/npm/@capitec/omni-components-react@${n}/([^/"'\`]+)`,"g"),"$&/index.js")}
    </body>
</html>`,o=`
${((T=e==null?void 0:e.sourceParts)!=null&&T.jsFragment?typeof e.sourceParts.jsFragment=="function"?e.sourceParts.jsFragment(this.story.args):e.sourceParts.jsFragment:d).replaceAll("@capitec/omni-components-react",`https://cdn.jsdelivr.net/npm/@capitec/omni-components-react@${n}`).replace(new RegExp(`https://cdn.jsdelivr.net/npm/@capitec/omni-components-react@${n}/([^/"'\`]+)`,"g"),"$&/index.js")} 

const el = document.querySelector("#root");
ReactDOM.render(<App/>, el);`,m="babel",g="https://cdnjs.cloudflare.com/ajax/libs/react/16.7.0/umd/react.production.min.js;https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.7.0/umd/react-dom.production.min.js";break}let S={title:`${(E=(L=this.key)!=null?L:(x=this.story)==null?void 0:x.name)!=null?E:"Generated CodePen"} - ${r}`,description:((f=this.story)==null?void 0:f.description)&&typeof((_=this.story)==null?void 0:_.description)=="function"?this.story.description():(w=this.story)==null?void 0:w.description,private:!1,tags:[r,"Omni Components","web components","custom elements"],editors:"1011",layout:"top",html:y,html_pre_processor:"none",css:`${j}

${(ee=e==null?void 0:e.sourceParts)!=null&&ee.cssFragment?typeof e.sourceParts.cssFragment=="function"?e.sourceParts.cssFragment(this.story.args):e.sourceParts.cssFragment:""}`,css_pre_processor:"none",css_starter:"neither",css_prefix:"neither",js:o,js_pre_processor:m,head:`<link rel="stylesheet preload" href="https://fonts.googleapis.com/css?family=Hind Vadodara" as="style">
            <link rel="stylesheet preload" href="https://fonts.googleapis.com/icon?family=Material+Icons" as="style">`,js_external:g},b=`<form style="display: none;" action="https://codepen.io/pen/define" method="POST" target="_blank"> 
            <input type="hidden" name="data" value='${JSON.stringify(S).replace(/"/g,"&quot;").replace(/'/g,"&apos;")}'>
            <input type="submit" class="code-submit">
        </form>`,u=document.createElement("div");u.innerHTML=b,u.style.display="none",document.body.appendChild(u),u.querySelector(".code-submit").click(),document.body.removeChild(u)}async _play(r,s){var t,c,a;try{if(!r.play)return;this._isBusyPlaying=!0;let e=this._createStoryContext(r,s);await r.play(e),this.querySelector(s+"-result.success").style.display="flex",this.querySelector(s+"-result.failure").style.display="none"}catch(e){this.querySelector(s+"-result.failure").style.display="flex",this.querySelector(s+"-result.success").style.display="none",this._playError=(a=(c=(t=e==null?void 0:e.matcherResult)==null?void 0:t.message)!=null?c:e==null?void 0:e.message)==null?void 0:a.toString().replace(/\u001b[^m]*?m/g,"").replace(/\n \u001b[^m]*?m/g,"").replace(/\u001b[^m]*?m\n/g,"").replace(/\n\u001b[^m]*?m/g,"")}finally{this._isBusyPlaying=!1}}_createStoryContext(r,s){return{story:r,args:r.args,canvasElement:this.querySelector(s)}}_currentCodeTheme(){var r;return((r=this.theme)==null?void 0:r.toLowerCase())==="dark"?ue:he}};P([te({type:String,reflect:!0})],C.prototype,"path",2),P([te({type:String,reflect:!0})],C.prototype,"tag",2),P([te({type:String,reflect:!0})],C.prototype,"key",2),P([te({type:Boolean,reflect:!0})],C.prototype,"interactive",2),P([se()],C.prototype,"_interactiveSrc",2),P([se()],C.prototype,"_isBusyPlaying",2),P([se()],C.prototype,"_playError",2),P([se()],C.prototype,"_showStylesDialog",2),P([oe(".primary-source-code")],C.prototype,"codeEditor",2),P([oe(".secondary-js-source-code")],C.prototype,"secondaryCodeEditor",2),P([oe(".live-props")],C.prototype,"propertyEditor",2),C=P([ye("story-renderer")],C);var ce="story-renderer-interactive-update";export{C as StoryRenderer};
//# sourceMappingURL=StoryRenderer.js.map
