import"../chunks-js/chunk.ZY3A4E2C.js";import{a as ge}from"../chunks-js/chunk.EQXGZ5KJ.js";import"../chunks-js/chunk.3SKAMJVS.js";import"../chunks-js/chunk.2QXGMML4.js";import"../chunks-js/chunk.S45PKFPQ.js";import"../chunks-js/chunk.K5WF6YMP.js";import{a as Q}from"../chunks-js/chunk.QHXD4ILF.js";import"../chunks-js/chunk.55232CD4.js";import"../chunks-js/chunk.Y2FNDKPS.js";import"../chunks-js/chunk.SMKXXBV2.js";import"../chunks-js/chunk.XCXCHO25.js";import{E as Z,F as ye,a as te,b as ne,c as ie,d as de,e as w,f as pe,t as ue,u as he}from"../chunks-js/chunk.BQ6JZBYB.js";import"../chunks-js/chunk.Z5LIJAXH.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.KSLF5GY7.js";import"../chunks-js/chunk.XQ6LOMNM.js";import"../chunks-js/chunk.DVHQDKY6.js";import"../chunks-js/chunk.SUFNDWVH.js";import"../chunks-js/chunk.QFUUHCSV.js";import"../chunks-js/chunk.6HAYHFHP.js";import"../chunks-js/chunk.LB764BBD.js";import"../chunks-js/chunk.KRAWXAJA.js";import"../chunks-js/chunk.RWAXFZOX.js";import"../chunks-js/chunk.QA3WYCV3.js";import{a as me,b as X,c as Y,d as D}from"../chunks-js/chunk.S2K25ADN.js";import{b as R,e as V,g as le,h as ce}from"../chunks-js/chunk.L3RZWW2F.js";import{a as ee,j as P,m as re,p as ae}from"../chunks-js/chunk.BF43NN75.js";re();ae();var b=class extends ce{constructor(){super(...arguments);this.sourceFallbacks=[{fallbackFramework:"HTML",frameworks:["HTML","Lit","Vue"],allowRenderFromResult:!0}];this.noInteractiveCodePen=["React"]}async connectedCallback(){var s;if(super.connectedCallback(),this.controller=new ge(this,this.path),this.customCss=document.head.querySelector("#custom-css-vars"),!this.customCss){this.customCss=document.createElement("style"),this.customCss.id="custom-css-vars",document.head.appendChild(this.customCss);let e=sessionStorage.getItem(`custom-css-${this.tag}`);e&&(this.customCss.innerHTML=e)}this.modal||(this.modal=document.createElement("div"),document.body.appendChild(this.modal)),this.customElements=await he();let o=pe(this.tag,this.customElements);this.cssVariables=Object.keys(o).filter(e=>o[e].subcategory==="Component Variables").map(e=>{let n=o[e];return ee({name:e},n)}),document.addEventListener("omni-docs-theme-change",e=>{var c;this.theme=(c=getComputedStyle(document.documentElement).getPropertyValue("--code-editor-theme"))==null?void 0:c.trim();let n=this.renderRoot.querySelectorAll("code-editor");n&&n.forEach(l=>{l.updateExtensions()})}),document.addEventListener("omni-docs-framework-change",async e=>{var c,l,t,d,m;let n=this.renderRoot.querySelectorAll("code-editor");if(n&&n.forEach(a=>{a.updateExtensions()}),this.codeEditor){let a=(c=window.localStorage.getItem(w))!=null?c:"HTML",r=(l=this.story.frameworkSources)==null?void 0:l.find(p=>p.framework===a);r||(a=(d=(t=this.sourceFallbacks.find(p=>p.frameworks.includes(a)))==null?void 0:t.fallbackFramework)!=null?d:a,r=(m=this.story.frameworkSources)==null?void 0:m.find(p=>p.framework===a)),await this.codeEditor.refresh(()=>{var y,g,S,E,F,u,C;let p=(y=r==null?void 0:r.sourceParts)!=null&&y.htmlFragment?typeof((g=r==null?void 0:r.sourceParts)==null?void 0:g.htmlFragment)=="string"?(S=r==null?void 0:r.sourceParts)==null?void 0:S.htmlFragment:(E=r==null?void 0:r.sourceParts)==null?void 0:E.htmlFragment(this.story.args):r!=null&&r.load?r.load(this.story.args,r):(F=this.sourceFallbacks.find(M=>M.frameworks.includes(a)))!=null&&F.allowRenderFromResult?Z(this.story.render(this.story.args)):"";return p?(u=this.renderRoot.querySelector(".primary-code-block"))==null||u.classList.remove("no-display"):(C=this.renderRoot.querySelector(".primary-code-block"))==null||C.classList.add("no-display"),p}),this.secondaryCodeEditor&&await this.secondaryCodeEditor.refresh(()=>{var y,g,S,E,F,u;let p=(y=r==null?void 0:r.sourceParts)!=null&&y.jsFragment?typeof((g=r==null?void 0:r.sourceParts)==null?void 0:g.jsFragment)=="string"?(S=r==null?void 0:r.sourceParts)==null?void 0:S.jsFragment:(E=r==null?void 0:r.sourceParts)==null?void 0:E.jsFragment(this.story.args):"";return p?((F=this.renderRoot.querySelector(".secondary-code-block"))==null||F.classList.remove("no-display"),this.renderRoot.querySelectorAll(".code-title").forEach(C=>C==null?void 0:C.classList.remove("no-display"))):((u=this.renderRoot.querySelector(".secondary-code-block"))==null||u.classList.add("no-display"),this.renderRoot.querySelectorAll(".code-title").forEach(C=>C==null?void 0:C.classList.add("no-display"))),p})}}),document.addEventListener(se,()=>{this.requestUpdate()}),this.theme=(s=getComputedStyle(document.documentElement).getPropertyValue("--code-editor-theme"))==null?void 0:s.trim()}disconnectedCallback(){this.modal&&(document.body.removeChild(this.modal),this.modal=null)}updated(o){var s;super.updated(o),(s=window.Prism)==null||s.highlightAll()}render(){var t,d,m,a,r,p,y,g,S,E,F,u,C,M,H,k,A,q,O,I,J,N,B,U,z,K,G,W;if(!((t=this.controller)!=null&&t.story))return R`<omni-loading-icon style="max-height: 64px;"></omni-loading-icon>`;le(R`
        ${this._showStylesDialog?R`
          <div class="modal" role="dialog" aria-modal="true"
            @click="${i=>this._checkCloseModal(i)}" @touch="${i=>this._checkCloseModal(i)}">
            <div class="modal-container">
                <div class="modal-body">
                    <div class="docs-search-area">
                        <omni-search-field class="css-category" @input="${i=>this.handleCustomThemeCSSVariableSearch(i)}" @change="${i=>this.handleCustomThemeCSSVariableSearch(i)}"></omni-search-field>
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
                                ${(d=this.cssVariables)==null?void 0:d.sort((i,v)=>this._sortCssVariables(i,v)).map(i=>R`
                                    <tr>
                                        <td data-label="Name" scope="row"><pre><code class="language-css">--${i.name}</code></pre></td>
                                        <td data-label="Description">${i.description}</td>
                                        <td data-label="Override Value">${this.renderCssVariable(i)}</td>
                                    </tr>
                                `)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>`:V}
        `,this.modal),this.story=this.controller.story[this.key],this.story.originalArgs=(r=(m=this.story)==null?void 0:m.originalArgs)!=null?r:JSON.parse(JSON.stringify((a=this.story)==null?void 0:a.args));let o=this.story.render(this.story.args),s=(p=window.localStorage.getItem(w))!=null?p:"HTML",e=(y=this.story.frameworkSources)==null?void 0:y.find(i=>i.framework===s),n=()=>{var i,v,T,x,L;return s=(i=window.localStorage.getItem(w))!=null?i:"HTML",e=(v=this.story.frameworkSources)==null?void 0:v.find(h=>h.framework===s),e||(s=(x=(T=this.sourceFallbacks.find(h=>h.frameworks.includes(s)))==null?void 0:T.fallbackFramework)!=null?x:s,e=(L=this.story.frameworkSources)==null?void 0:L.find(h=>h.framework===s)),s};n();let c=(g=e==null?void 0:e.sourceParts)!=null&&g.htmlFragment?typeof((S=e==null?void 0:e.sourceParts)==null?void 0:S.htmlFragment)=="string"?(E=e==null?void 0:e.sourceParts)==null?void 0:E.htmlFragment:(F=e==null?void 0:e.sourceParts)==null?void 0:F.htmlFragment(this.story.args):e!=null&&e.load?e.load(this.story.args,e):(u=this.sourceFallbacks.find(i=>i.frameworks.includes(s)))!=null&&u.allowRenderFromResult?Z(o):"",l=(C=e==null?void 0:e.sourceParts)!=null&&C.jsFragment?typeof((M=e==null?void 0:e.sourceParts)==null?void 0:M.jsFragment)=="string"?(H=e==null?void 0:e.sourceParts)==null?void 0:H.jsFragment:(k=e==null?void 0:e.sourceParts)==null?void 0:k.jsFragment(this.story.args):"";return R`
        <div class="story-description">
            ${((A=this.story)==null?void 0:A.description)&&typeof((q=this.story)==null?void 0:q.description)=="function"?this.story.description():(O=this.story)==null?void 0:O.description}
        </div>
        <div class="story">
            <div class="preview">
                <div class="item">
                <div class="${this.key}${this.interactive?" interactive-story":""}" .data=${this.story}>
                    ${o}
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
                        .data="${ee({},this.story)}"
                        element="${this.tag}"
                        ignore-attributes="dir,lang"
                        @property-change="${async i=>{let v=i.detail,T=!1;(!v.oldValue||!v.newValue||typeof v.newValue!="string"&&JSON.stringify(v.oldValue).trim()!==JSON.stringify(v.newValue).trim()||v.oldValue.toString().trim()!==v.newValue.toString().trim())&&(T=!0),T&&(this.story.args[v.property]=v.newValue,this.requestUpdate(),this.dispatchEvent(new CustomEvent(se,{bubbles:!0,composed:!0})),await this.updateComplete,this.codeEditor&&(n(),await this.codeEditor.refresh(()=>{var x,L,h,$,j;return(x=e==null?void 0:e.sourceParts)!=null&&x.htmlFragment?typeof((L=e==null?void 0:e.sourceParts)==null?void 0:L.htmlFragment)=="string"?(h=e==null?void 0:e.sourceParts)==null?void 0:h.htmlFragment:($=e==null?void 0:e.sourceParts)==null?void 0:$.htmlFragment(this.story.args):e!=null&&e.load?e.load(this.story.args,e):(j=this.sourceFallbacks.find(_=>_.frameworks.includes(s)))!=null&&j.allowRenderFromResult?Z(this.story.render(this.story.args)):""}),this.secondaryCodeEditor&&await this.secondaryCodeEditor.refresh(()=>{var L,h,$,j,_,oe;let x=(L=e==null?void 0:e.sourceParts)!=null&&L.jsFragment?typeof((h=e==null?void 0:e.sourceParts)==null?void 0:h.jsFragment)=="string"?($=e==null?void 0:e.sourceParts)==null?void 0:$.jsFragment:(j=e==null?void 0:e.sourceParts)==null?void 0:j.jsFragment(this.story.args):"";return x?((_=this.renderRoot.querySelector(".secondary-code-block"))==null||_.classList.remove("no-display"),this.renderRoot.querySelectorAll(".code-title").forEach(f=>f==null?void 0:f.classList.remove("no-display"))):((oe=this.renderRoot.querySelector(".secondary-code-block"))==null||oe.classList.add("no-display"),this.renderRoot.querySelectorAll(".code-title").forEach(f=>f==null?void 0:f.classList.add("no-display"))),x})))}}"></live-property-editor>
                    </div>
                    `:V}
            </div>
            <div class="code-title ${l?"":"no-display"}">HTML</div>
            <div class="code-block primary-code-block ${c?"":"no-display"}">
                <code-editor
                class="source-code primary-source-code"
                .transformSource="${i=>ye(i)}"
                .extensions="${async()=>[this._currentCodeTheme(),n()==="React"?te({jsx:!0}):ne(await ue())]}"
                .code="${Q(c)}"
                ?read-only="${!0}">
                </code-editor>
            </div>

            <div class="code-title ${l?"":"no-display"}">JS</div>
            <div class="code-block secondary-code-block ${l?"":"no-display"}">
                <code-editor
                class="source-code secondary-js-source-code"
                .extensions="${async()=>[this._currentCodeTheme(),te({jsx:!0})]}"
                .code="${Q(l)}"
                read-only>
                </code-editor>
            </div>

            <div class="two-part ${!((I=this.story)!=null&&I.play)&&((N=(J=this.story.frameworkSources)==null?void 0:J.find(i=>i.framework===s))==null?void 0:N.disableCodePen)&&!c?"no-display":""}">
            
                <div class="play-tests">
                    ${(B=this.story)!=null&&B.play?R`
                            <div style="display: flex;flex-direction: row;align-items: center;">
                            <omni-button
                                class="docs-omni-component"
                                ?disabled=${this._isBusyPlaying||JSON.stringify((U=this.story)==null?void 0:U.originalArgs).replaceAll(`
`,"").replaceAll("\\n","").replaceAll("	","").replaceAll(" ","")!==JSON.stringify((z=this.story)==null?void 0:z.args).replaceAll(`
`,"").replaceAll("\\n","").replaceAll("	","").replaceAll(" ","")}
                                @click="${()=>this._play(this.story,`.${this.key}`)}">
                                <omni-icon class="docs-omni-component" icon="@material/play_arrow"></omni-icon>
                            </omni-button>
                            <div class="${this.key+"-result"} success">
                                <span class="material-icons" style="color: #155724;">check</span>
                            </div>
                            </div>       
                    `:V}
                </div>     
                <omni-button 
                    class="docs-omni-component ${((G=(K=this.story.frameworkSources)==null?void 0:K.find(i=>i.framework===s))==null?void 0:G.disableCodePen)||this.noInteractiveCodePen.includes(s)&&this.interactive?"no-display":""}" 
                    @click="${()=>{var i;return this._generateCodePen((i=window.localStorage.getItem(w))!=null?i:"HTML",c)}}">
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
            ${(W=this.story)!=null&&W.play?R`
                <div class="${this.key+"-result"} failure">
                    <div class="play-tests-out">
                    <span class="material-icons" style="color: #721c24;">close</span>
                    <span style="margin-left: 8px;"><pre>${this._playError}</pre></span>
                    </div>
                </div>
                `:V}
        </div>
    `}handleCustomThemeCSSVariableSearch(o){var c;let s=(c=o.target.value)!=null?c:"",n=document.querySelector(`[data-target=custom-css-table-${this.tag}]`).children;for(let l=0;l<n.length;l++){let t=n[l];t.innerText&&t.innerText.toLowerCase().includes(s.toLowerCase())?t.classList.remove("hidden"):t.classList.add("hidden")}}renderCssVariable(o){var e;let s=(e=this.customCss)==null?void 0:e.sheet;if(o.name){let n;if((s==null?void 0:s.cssRules.length)===0){let c=s.insertRule(":root {}");n=s.cssRules.item(c)}else for(let c=0;c<s.cssRules.length;c++){let l=s.cssRules[c];if(l.selectorText===":root"){n=l;break}}return n&&(o.value=n.style.getPropertyValue(`--${o.name}`)),o.control==="color"?R`
                    <omni-color-field
                        class="css-prop docs-omni-component"
                        .value="${Q(o.value)}"
                        @input="${async c=>{var m;let d=((m=c.target.shadowRoot)==null?void 0:m.getElementById("inputField")).value;o.value=d,this._cssChanged(o)}}">
                    </omni-color-field>
                  `:R`
                    <omni-text-field
                        class="css-prop docs-omni-component"
                        .value="${Q(o.value)}"
                        @input="${async c=>{var d;let t=((d=c.target.shadowRoot)==null?void 0:d.getElementById("inputField")).value;o.value=t,this._cssChanged(o)}}">
                    </omni-text-field>
                  `}return V}createRenderRoot(){return this}_sortCssVariables(o,s){var c;let e=(c=this.customCss)==null?void 0:c.sheet,n;if((e==null?void 0:e.cssRules.length)===0){let l=e.insertRule(":root {}");n=e.cssRules.item(l)}else for(let l=0;l<e.cssRules.length;l++){let t=e==null?void 0:e.cssRules[l];if(t.selectorText===":root"){n=t;break}}return n&&(o.value=n.style.getPropertyValue(`--${o.name}`),s.value=n.style.getPropertyValue(`--${s.name}`)),o.value?s.value?0:-1:s.value?1:0}_cssChanged(o){var c;let s=(c=this.customCss)==null?void 0:c.sheet,e;if((s==null?void 0:s.cssRules.length)===0){let l=s.insertRule(":root {}");e=s.cssRules.item(l)}else for(let l=0;l<s.cssRules.length;l++){let t=s==null?void 0:s.cssRules[l];if(t.selectorText===":root"){e=t;break}}o.value?e&&e.style.setProperty(`--${o.name}`,o.value):e&&e.style.removeProperty(`--${o.name}`);let n=e.cssText;sessionStorage.setItem(`custom-css-${this.tag}`,n)}_showComponentStyles(){this._showStylesDialog=!0}_checkCloseModal(o){var e;let s=(e=this.modal)==null?void 0:e.querySelector("div.modal-container");o.composedPath().includes(s)||(this._showStylesDialog=!1)}async _resetLivePropertyEditor(){var s,e,n,c,l,t,d;this.story.args=JSON.parse(JSON.stringify((s=this.story)==null?void 0:s.originalArgs));let o=(e=this.customCss)==null?void 0:e.sheet;for(let m=0;m<o.cssRules.length;m++)if((o==null?void 0:o.cssRules[m]).selectorText===":root"){o==null||o.deleteRule(m);break}if(sessionStorage.removeItem(`custom-css-${this.tag}`),this.requestUpdate(),this.dispatchEvent(new CustomEvent(se,{bubbles:!0,composed:!0})),await this.updateComplete,this.codeEditor){let m=(n=window.localStorage.getItem(w))!=null?n:"HTML",a=(c=this.story.frameworkSources)==null?void 0:c.find(r=>r.framework===m);a||(m=(t=(l=this.sourceFallbacks.find(r=>r.frameworks.includes(m)))==null?void 0:l.fallbackFramework)!=null?t:m,a=(d=this.story.frameworkSources)==null?void 0:d.find(r=>r.framework===m)),await this.codeEditor.refresh(()=>{var r,p,y,g,S;return(r=a==null?void 0:a.sourceParts)!=null&&r.htmlFragment?typeof((p=a==null?void 0:a.sourceParts)==null?void 0:p.htmlFragment)=="string"?(y=a==null?void 0:a.sourceParts)==null?void 0:y.htmlFragment:(g=a==null?void 0:a.sourceParts)==null?void 0:g.htmlFragment(this.story.args):a!=null&&a.load?a.load(this.story.args,a):(S=this.sourceFallbacks.find(E=>E.frameworks.includes(m)))!=null&&S.allowRenderFromResult?Z(this.story.render(this.story.args)):""}),this.secondaryCodeEditor&&this.secondaryCodeEditor.refresh(()=>{var p,y,g,S,E,F;let r=(p=a==null?void 0:a.sourceParts)!=null&&p.jsFragment?typeof((y=a==null?void 0:a.sourceParts)==null?void 0:y.jsFragment)=="string"?(g=a==null?void 0:a.sourceParts)==null?void 0:g.jsFragment:(S=a==null?void 0:a.sourceParts)==null?void 0:S.jsFragment(this.story.args):"";return r?((E=this.renderRoot.querySelector(".secondary-code-block"))==null||E.classList.remove("no-display"),this.renderRoot.querySelectorAll(".code-title").forEach(u=>u==null?void 0:u.classList.remove("no-display"))):((F=this.renderRoot.querySelector(".secondary-code-block"))==null||F.classList.add("no-display"),this.renderRoot.querySelectorAll(".code-title").forEach(u=>u==null?void 0:u.classList.add("no-display"))),r})}this.propertyEditor&&this.propertyEditor.resetSlots()}async _generateCodePen(o,s){var M,H,k,A,q,O,I,J,N,B,U,z,K,G,W,i,v,T,x,L;let e=((H=(M=document.getElementById("header-version-indicator"))==null?void 0:M.innerText)!=null?H:"").toLowerCase(),c=this.customElements.modules.find(h=>{var $;return($=h.exports)==null?void 0:$.find(j=>j.name===this.tag)}).path.split("/"),l=c[c.length-2],t=(k=this.story.frameworkSources)==null?void 0:k.find(h=>h.framework===o),d=e&&e!=="latest"&&e!=="local"?["alpha","beta","next"].includes(e)?`esm-${e}`:`${e}-esm`:"esm-alpha",m="",a="";for(let h=0;h<document.styleSheets.length;h++){let $=document.styleSheets[h];try{if($.cssRules)for(let j=0;j<$.cssRules.length;j++){let _=$.cssRules[j];a+=`
        ${_.cssText}`}}catch(j){continue}}let r=document.documentElement.getAttribute("theme"),p="",y="none",g="";switch(!0){case(o==="Vue"&&!((A=t==null?void 0:t.sourceParts)!=null&&A.fallbackFramework)):m=`
<html theme="${r!=null?r:"light"}">
    <body style="
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 24px;
    ">
            <div id="app">
                ${((q=t==null?void 0:t.sourceParts)!=null&&q.htmlFragment?typeof t.sourceParts.htmlFragment=="function"?t.sourceParts.htmlFragment(this.story.args):t.sourceParts.htmlFragment:s).replaceAll("@capitec/omni-components",`https://cdn.jsdelivr.net/npm/@capitec/omni-components@${d}`).replace(new RegExp(`(https://cdn.jsdelivr.net/npm/@capitec/omni-components@${d}/)([^/"'\`]+)`,"g"),"$1dist/$2/index.js")}
            </div>
    </body>
</html>`,p=`import 'https://cdn.jsdelivr.net/npm/@capitec/omni-components@${d}/dist/omni-components.js';
import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js';
${((O=t==null?void 0:t.sourceParts)!=null&&O.jsFragment?typeof t.sourceParts.jsFragment=="function"?t.sourceParts.jsFragment(this.story.args):t.sourceParts.jsFragment:"").replaceAll("@capitec/omni-components",`https://cdn.jsdelivr.net/npm/@capitec/omni-components@${d}`).replace(new RegExp(`(https://cdn.jsdelivr.net/npm/@capitec/omni-components@${d}/)([^/"'\`]+)`,"g"),"$1dist/$2/index.js")}

                
const app = createApp({
    data() {
        return window.vueData ?? {}
    }
});
app.config.compilerOptions.isCustomElement = (tag) => tag.includes('omni-');
app.mount('#app');`;break;case(o==="Lit"&&!((I=t==null?void 0:t.sourceParts)!=null&&I.fallbackFramework)):m=`
<html theme="${r!=null?r:"light"}">
    <body style="
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 24px;
    ">
        <div id="root" style="display: contents;"></div>
    </body>
</html>`,p=`import 'https://cdn.jsdelivr.net/npm/@capitec/omni-components@${d}/dist/omni-components.js';
import { html, render } from 'https://unpkg.com/lit/index.js?module';
${((J=t==null?void 0:t.sourceParts)!=null&&J.jsFragment?typeof t.sourceParts.jsFragment=="function"?t.sourceParts.jsFragment(this.story.args):t.sourceParts.jsFragment:"").replaceAll("@capitec/omni-components",`https://cdn.jsdelivr.net/npm/@capitec/omni-components@${d}`).replace(new RegExp(`(https://cdn.jsdelivr.net/npm/@capitec/omni-components@${d}/)([^/"'\`]+)`,"g"),"$1dist/$2/index.js")}

const content = html\`
${((N=t==null?void 0:t.sourceParts)!=null&&N.htmlFragment?typeof t.sourceParts.htmlFragment=="function"?t.sourceParts.htmlFragment(this.story.args):t.sourceParts.htmlFragment:s).replaceAll("@capitec/omni-components",`https://cdn.jsdelivr.net/npm/@capitec/omni-components@${d}`).replace(new RegExp(`(https://cdn.jsdelivr.net/npm/@capitec/omni-components@${d}/)([^/"'\`]+)`,"g"),"$1dist/$2/index.js")}
\`;

render(content, document.getElementById('root'));
                `;break;case o==="Lit":case o==="Vue":case o==="HTML":m=`
<html theme="${r!=null?r:"light"}">
    <body style="
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 24px;
    ">
        ${((B=t==null?void 0:t.sourceParts)!=null&&B.htmlFragment?typeof t.sourceParts.htmlFragment=="function"?t.sourceParts.htmlFragment(this.story.args):t.sourceParts.htmlFragment:s).replaceAll("@capitec/omni-components",`https://cdn.jsdelivr.net/npm/@capitec/omni-components@${d}`).replace(new RegExp(`(https://cdn.jsdelivr.net/npm/@capitec/omni-components@${d}/)([^/"'\`]+)`,"g"),"$1dist/$2/index.js")}
    </body>
</html>`,p=`import 'https://cdn.jsdelivr.net/npm/@capitec/omni-components@${d}/dist/omni-components.js';
${((U=t==null?void 0:t.sourceParts)!=null&&U.jsFragment?typeof t.sourceParts.jsFragment=="function"?t.sourceParts.jsFragment(this.story.args):t.sourceParts.jsFragment:"").replaceAll("@capitec/omni-components",`https://cdn.jsdelivr.net/npm/@capitec/omni-components@${d}`).replace(new RegExp(`(https://cdn.jsdelivr.net/npm/@capitec/omni-components@${d}/)([^/"'\`]+)`,"g"),"$1dist/$2/index.js")}`;break;case o==="React":m=`
<html theme="${r!=null?r:"light"}">
    <body style="
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 24px;
    ">
        <div id="root"></div>
        ${((z=t==null?void 0:t.sourceParts)!=null&&z.htmlFragment?typeof t.sourceParts.htmlFragment=="function"?t.sourceParts.htmlFragment(this.story.args):t.sourceParts.htmlFragment:"").replaceAll("@capitec/omni-components-react",`https://cdn.jsdelivr.net/npm/@capitec/omni-components-react@${d}`).replace(new RegExp(`https://cdn.jsdelivr.net/npm/@capitec/omni-components-react@${d}/([^/"'\`]+)`,"g"),"$&/index.js")}
    </body>
</html>`,p=`
${((K=t==null?void 0:t.sourceParts)!=null&&K.jsFragment?typeof t.sourceParts.jsFragment=="function"?t.sourceParts.jsFragment(this.story.args):t.sourceParts.jsFragment:s).replaceAll("@capitec/omni-components-react",`https://cdn.jsdelivr.net/npm/@capitec/omni-components-react@${d}`).replace(new RegExp(`https://cdn.jsdelivr.net/npm/@capitec/omni-components-react@${d}/([^/"'\`]+)`,"g"),"$&/index.js")} 

const el = document.querySelector("#root");
ReactDOM.render(<App/>, el);`,y="babel",g="https://cdnjs.cloudflare.com/ajax/libs/react/16.7.0/umd/react.production.min.js;https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.7.0/umd/react-dom.production.min.js";break}let S={title:`${(i=(W=this.key)!=null?W:(G=this.story)==null?void 0:G.name)!=null?i:"Generated CodePen"} - ${o}`,description:((v=this.story)==null?void 0:v.description)&&typeof((T=this.story)==null?void 0:T.description)=="function"?this.story.description():(x=this.story)==null?void 0:x.description,private:!1,tags:[o,"Omni Components","web components","custom elements"],editors:"1011",layout:"top",html:m,html_pre_processor:"none",css:`${a}

${(L=t==null?void 0:t.sourceParts)!=null&&L.cssFragment?typeof t.sourceParts.cssFragment=="function"?t.sourceParts.cssFragment(this.story.args):t.sourceParts.cssFragment:""}`,css_pre_processor:"none",css_starter:"neither",css_prefix:"neither",js:p,js_pre_processor:y,head:`<link rel="stylesheet preload" href="https://fonts.googleapis.com/css?family=Hind Vadodara" as="style">
            <link rel="stylesheet preload" href="https://fonts.googleapis.com/icon?family=Material+Icons" as="style">`,js_external:g},F=`<form style="display: none;" action="https://codepen.io/pen/define" method="POST" target="_blank"> 
            <input type="hidden" name="data" value='${JSON.stringify(S).replace(/"/g,"&quot;").replace(/'/g,"&apos;")}'>
            <input type="submit" class="code-submit">
        </form>`,u=document.createElement("div");u.innerHTML=F,u.style.display="none",document.body.appendChild(u),u.querySelector(".code-submit").click(),document.body.removeChild(u)}async _play(o,s){var e,n,c;try{if(!o.play)return;this._isBusyPlaying=!0;let l=this._createStoryContext(o,s);await o.play(l),this.querySelector(s+"-result.success").style.display="flex",this.querySelector(s+"-result.failure").style.display="none"}catch(l){this.querySelector(s+"-result.failure").style.display="flex",this.querySelector(s+"-result.success").style.display="none",this._playError=(c=(n=(e=l==null?void 0:l.matcherResult)==null?void 0:e.message)!=null?n:l==null?void 0:l.message)==null?void 0:c.toString().replace(/\u001b[^m]*?m/g,"").replace(/\n \u001b[^m]*?m/g,"").replace(/\u001b[^m]*?m\n/g,"").replace(/\n\u001b[^m]*?m/g,"")}finally{this._isBusyPlaying=!1}}_createStoryContext(o,s){return{story:o,args:o.args,canvasElement:this.querySelector(s)}}_currentCodeTheme(){var o;return((o=this.theme)==null?void 0:o.toLowerCase())==="dark"?ie:de}};P([X({type:String,reflect:!0})],b.prototype,"path",2),P([X({type:String,reflect:!0})],b.prototype,"tag",2),P([X({type:String,reflect:!0})],b.prototype,"key",2),P([X({type:Boolean,reflect:!0})],b.prototype,"interactive",2),P([Y()],b.prototype,"_interactiveSrc",2),P([Y()],b.prototype,"_isBusyPlaying",2),P([Y()],b.prototype,"_playError",2),P([Y()],b.prototype,"_showStylesDialog",2),P([D(".primary-source-code")],b.prototype,"codeEditor",2),P([D(".secondary-js-source-code")],b.prototype,"secondaryCodeEditor",2),P([D(".live-props")],b.prototype,"propertyEditor",2),b=P([me("story-renderer")],b);var se="story-renderer-interactive-update";export{b as StoryRenderer};
//# sourceMappingURL=StoryRenderer.js.map
