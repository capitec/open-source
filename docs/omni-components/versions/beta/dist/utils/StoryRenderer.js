import"../chunks-js/chunk.6R2ZPHPH.js";import{a as ve}from"../chunks-js/chunk.32ZYBHOX.js";import"../chunks-js/chunk.YOC3HRK7.js";import"../chunks-js/chunk.B4ZU66OP.js";import"../chunks-js/chunk.BRR7CGL2.js";import"../chunks-js/chunk.T4BOBLVW.js";import{a as G}from"../chunks-js/chunk.APNKRDWQ.js";import"../chunks-js/chunk.QQ4KC6E2.js";import"../chunks-js/chunk.PBJBFOZO.js";import{E as A,F as ye,a as se,b as ie,c as de,d as me,e as k,f as ue,t as he,u as ge}from"../chunks-js/chunk.TLDOTCP4.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.VRVI2LVR.js";import"../chunks-js/chunk.NLDNET67.js";import"../chunks-js/chunk.MQIQXPFF.js";import"../chunks-js/chunk.YRSGKD7J.js";import"../chunks-js/chunk.6DDAVEXD.js";import"../chunks-js/chunk.2T6FOQVU.js";import"../chunks-js/chunk.BNDN7Y77.js";import"../chunks-js/chunk.3F3IIFA7.js";import"../chunks-js/chunk.GFYHKXYQ.js";import"../chunks-js/chunk.W7VHYLAH.js";import"../chunks-js/chunk.BN6ZLWW4.js";import"../chunks-js/chunk.YTU7KEBB.js";import"../chunks-js/chunk.ZTHUBORR.js";import{a as pe,b as Z,c as re,d as ee}from"../chunks-js/chunk.4PFNWG2J.js";import{d as M,g as D,i as le,j as ne}from"../chunks-js/chunk.63YMDT6M.js";import{a as te,j as L,m as ae,p as ce}from"../chunks-js/chunk.BF43NN75.js";ae();ce();var E=class extends ne{constructor(){super(...arguments);this.sourceFallbacks=[{fallbackFramework:"HTML",frameworks:["HTML","Lit","Vue"],allowRenderFromResult:!0}];this.noInteractiveCodePen=["React"]}async connectedCallback(){var s;if(super.connectedCallback(),this.controller=new ve(this,this.path),this.customCss=document.head.querySelector("#custom-css-vars"),!this.customCss){this.customCss=document.createElement("style"),this.customCss.id="custom-css-vars",document.head.appendChild(this.customCss);let e=sessionStorage.getItem(`custom-css-${this.tag}`);e&&(this.customCss.innerHTML=e)}this.modal||(this.modal=document.createElement("div"),document.body.appendChild(this.modal)),this.customElements=await ge();let r=ue(this.tag,this.customElements);this.cssVariables=Object.keys(r).filter(e=>r[e].subcategory==="Component Variables").map(e=>{let c=r[e];return te({name:e},c)}),document.addEventListener("omni-docs-theme-change",()=>{var c;this.theme=(c=getComputedStyle(document.documentElement).getPropertyValue("--code-editor-theme"))==null?void 0:c.trim();let e=this.renderRoot.querySelectorAll("code-editor");e&&e.forEach(t=>{t.updateExtensions()})}),document.addEventListener("omni-docs-framework-change",async()=>{var i,n,h,P,d;let e=this.renderRoot.querySelectorAll("code-editor");e&&e.forEach(o=>{o.updateExtensions()});let c=(i=window.localStorage.getItem(k))!=null?i:"HTML",t=(n=this.story.frameworkSources)==null?void 0:n.find(o=>o.framework===c);t||(c=(P=(h=this.sourceFallbacks.find(o=>o.frameworks.includes(c)))==null?void 0:h.fallbackFramework)!=null?P:c,t=(d=this.story.frameworkSources)==null?void 0:d.find(o=>o.framework===c)),this.codeEditor&&(await this.codeEditor.refresh(()=>{var m,v,p,b,g,S,u;let o=(m=t==null?void 0:t.sourceParts)!=null&&m.htmlFragment?typeof((v=t==null?void 0:t.sourceParts)==null?void 0:v.htmlFragment)=="string"?(p=t==null?void 0:t.sourceParts)==null?void 0:p.htmlFragment:(b=t==null?void 0:t.sourceParts)==null?void 0:b.htmlFragment(this.story.args):t!=null&&t.load?t.load(this.story.args,t):(g=this.sourceFallbacks.find(F=>F.frameworks.includes(c)))!=null&&g.allowRenderFromResult?A(this.story.render(this.story.args)):"";return o?(S=this.renderRoot.querySelector(".primary-code-block"))==null||S.classList.remove("no-display"):(u=this.renderRoot.querySelector(".primary-code-block"))==null||u.classList.add("no-display"),o}),this.secondaryCodeEditor&&await this.secondaryCodeEditor.refresh(()=>{var m,v,p,b,g,S;let o=(m=t==null?void 0:t.sourceParts)!=null&&m.jsFragment?typeof((v=t==null?void 0:t.sourceParts)==null?void 0:v.jsFragment)=="string"?(p=t==null?void 0:t.sourceParts)==null?void 0:p.jsFragment:(b=t==null?void 0:t.sourceParts)==null?void 0:b.jsFragment(this.story.args):"";return o?((g=this.renderRoot.querySelector(".secondary-code-block"))==null||g.classList.remove("no-display"),this.renderRoot.querySelectorAll(".code-title").forEach(u=>u==null?void 0:u.classList.remove("no-display"))):((S=this.renderRoot.querySelector(".secondary-code-block"))==null||S.classList.add("no-display"),this.renderRoot.querySelectorAll(".code-title").forEach(u=>u==null?void 0:u.classList.add("no-display"))),o}));let a=this.renderRoot.querySelector(".code-pen-gen-btn");a&&((t==null?void 0:t.disableCodePen)||this.noInteractiveCodePen.includes(c)&&this.interactive?a==null||a.classList.add("no-display"):a==null||a.classList.remove("no-display"))}),document.addEventListener(oe,()=>{this.requestUpdate()}),this.theme=(s=getComputedStyle(document.documentElement).getPropertyValue("--code-editor-theme"))==null?void 0:s.trim()}disconnectedCallback(){this.modal&&(document.body.removeChild(this.modal),this.modal=void 0)}updated(r){var s;super.updated(r),(s=window.Prism)==null||s.highlightAll()}render(){var i,n,h,P,d,o,m,v,p,b,g,S,u,F,q,O,I,N,J,B,U,z,K,W,Q,X;if(!((i=this.controller)!=null&&i.story))return M`<omni-loading-icon style="max-height: 64px;"></omni-loading-icon>`;le(M`
        ${this._showStylesDialog?M`
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
                                ${(n=this.cssVariables)==null?void 0:n.sort((l,y)=>this._sortCssVariables(l,y)).map(l=>M`
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
        </div>`:D}
        `,this.modal),this.story=this.controller.story[this.key],this.story.originalArgs=(o=(h=this.story)==null?void 0:h.originalArgs)!=null?o:JSON.parse(JSON.stringify((d=(P=this.story)==null?void 0:P.args)!=null?d:{})),Object.keys((v=(m=this.story)==null?void 0:m.args)!=null?v:{}).forEach(l=>{this.story.args[l]===void 0&&(this.story.originalArgs[l]=void 0)});let r=this.story.render(this.story.args),s=(p=window.localStorage.getItem(k))!=null?p:"HTML",e=(b=this.story.frameworkSources)==null?void 0:b.find(l=>l.framework===s),c=()=>{var l,y,x,$,j;return s=(l=window.localStorage.getItem(k))!=null?l:"HTML",e=(y=this.story.frameworkSources)==null?void 0:y.find(C=>C.framework===s),e||(s=($=(x=this.sourceFallbacks.find(C=>C.frameworks.includes(s)))==null?void 0:x.fallbackFramework)!=null?$:s,e=(j=this.story.frameworkSources)==null?void 0:j.find(C=>C.framework===s)),s};c();let t=(g=e==null?void 0:e.sourceParts)!=null&&g.htmlFragment?typeof((S=e==null?void 0:e.sourceParts)==null?void 0:S.htmlFragment)=="string"?(u=e==null?void 0:e.sourceParts)==null?void 0:u.htmlFragment:(F=e==null?void 0:e.sourceParts)==null?void 0:F.htmlFragment(this.story.args):e!=null&&e.load?e.load(this.story.args,e):(q=this.sourceFallbacks.find(l=>l.frameworks.includes(s)))!=null&&q.allowRenderFromResult?A(r):"",a=(O=e==null?void 0:e.sourceParts)!=null&&O.jsFragment?typeof((I=e==null?void 0:e.sourceParts)==null?void 0:I.jsFragment)=="string"?(N=e==null?void 0:e.sourceParts)==null?void 0:N.jsFragment:(J=e==null?void 0:e.sourceParts)==null?void 0:J.jsFragment(this.story.args):"";return M`
        <div class="story-description">
            ${((B=this.story)==null?void 0:B.description)&&typeof((U=this.story)==null?void 0:U.description)=="function"?this.story.description():(z=this.story)==null?void 0:z.description}
        </div>
        <div class="story">
            <div class="preview">
                <div class="item">
                <div class="${this.key}${this.interactive?" interactive-story":""}" .data=${this.story}>
                    ${r}
                </div>
                </div>

                ${this.interactive?M`
                    <div class="interactive">
                        <span class="docs-omni-component interactive-reset" @click="${this._resetLivePropertyEditor}">
                        <omni-icon class="docs-omni-component" style="cursor: pointer;" icon="@material/settings_backup_restore"></omni-icon>
                        </span>
                        <span class="docs-omni-component component-styles-btn" @click="${this._showComponentStyles}">
                        <omni-icon class="docs-omni-component" style="cursor: pointer;" icon="@material/format_color_fill"></omni-icon>
                        </span>
                        <live-property-editor
                        class="live-props docs-omni-component"
                        .data="${te({},this.story)}"
                        element="${this.tag}"
                        ignore-attributes="dir,lang"
                        @property-change="${async l=>{let y=l.detail,x=!1;(!y.oldValue||!y.newValue||typeof y.newValue!="string"&&JSON.stringify(y.oldValue).trim()!==JSON.stringify(y.newValue).trim()||y.oldValue.toString().trim()!==y.newValue.toString().trim())&&(x=!0),x&&(this.story.args[y.property]=y.newValue,this.requestUpdate(),this.dispatchEvent(new CustomEvent(oe,{bubbles:!0,composed:!0})),await this.updateComplete,this.codeEditor&&(c(),await this.codeEditor.refresh(()=>{var $,j,C,V,f;return($=e==null?void 0:e.sourceParts)!=null&&$.htmlFragment?typeof((j=e==null?void 0:e.sourceParts)==null?void 0:j.htmlFragment)=="string"?(C=e==null?void 0:e.sourceParts)==null?void 0:C.htmlFragment:(V=e==null?void 0:e.sourceParts)==null?void 0:V.htmlFragment(this.story.args):e!=null&&e.load?e.load(this.story.args,e):(f=this.sourceFallbacks.find(H=>H.frameworks.includes(s)))!=null&&f.allowRenderFromResult?A(this.story.render(this.story.args)):""}),this.secondaryCodeEditor&&await this.secondaryCodeEditor.refresh(()=>{var j,C,V,f,H,Y;let $=(j=e==null?void 0:e.sourceParts)!=null&&j.jsFragment?typeof((C=e==null?void 0:e.sourceParts)==null?void 0:C.jsFragment)=="string"?(V=e==null?void 0:e.sourceParts)==null?void 0:V.jsFragment:(f=e==null?void 0:e.sourceParts)==null?void 0:f.jsFragment(this.story.args):"";return $?((H=this.renderRoot.querySelector(".secondary-code-block"))==null||H.classList.remove("no-display"),this.renderRoot.querySelectorAll(".code-title").forEach(R=>R==null?void 0:R.classList.remove("no-display"))):((Y=this.renderRoot.querySelector(".secondary-code-block"))==null||Y.classList.add("no-display"),this.renderRoot.querySelectorAll(".code-title").forEach(R=>R==null?void 0:R.classList.add("no-display"))),$})))}}"></live-property-editor>
                    </div>
                    `:D}
            </div>
            <div class="code-title ${a?"":"no-display"}">HTML</div>
            <div class="code-block primary-code-block ${t?"":"no-display"}">
                <code-editor
                class="source-code primary-source-code"
                .transformSource="${l=>c()==="React"?l:ye(l)}"
                .extensions="${async()=>[this._currentCodeTheme(),c()==="React"?se({jsx:!0}):ie(await he())]}"
                .code="${G(t)}"
                ?read-only="${!0}">
                </code-editor>
            </div>

            <div class="code-title ${a?"":"no-display"}">JS</div>
            <div class="code-block secondary-code-block ${a?"":"no-display"}">
                <code-editor
                class="source-code secondary-js-source-code"
                .extensions="${async()=>[this._currentCodeTheme(),se({jsx:!0})]}"
                .code="${G(a)}"
                read-only>
                </code-editor>
            </div>

            <div class="two-part ${(W=(K=this.story.frameworkSources)==null?void 0:K.find(l=>l.framework===s))!=null&&W.disableCodePen?"no-display":""}">   
                <omni-button 
                    class="code-pen-gen-btn docs-omni-component ${((X=(Q=this.story.frameworkSources)==null?void 0:Q.find(l=>l.framework===s))==null?void 0:X.disableCodePen)||this.noInteractiveCodePen.includes(s)&&this.interactive?"no-display":""}" 
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
        </div>
    `}handleCustomThemeCSSVariableSearch(r){var t;let s=(t=r.target.value)!=null?t:"",c=document.querySelector(`[data-target=custom-css-table-${this.tag}]`).children;for(let a=0;a<c.length;a++){let i=c[a];i.innerText&&i.innerText.toLowerCase().includes(s.toLowerCase())?i.classList.remove("hidden"):i.classList.add("hidden")}}renderCssVariable(r){var e;let s=(e=this.customCss)==null?void 0:e.sheet;if(r.name){let c;if((s==null?void 0:s.cssRules.length)===0){let t=s.insertRule(":root {}");c=s.cssRules.item(t)}else for(let t=0;t<s.cssRules.length;t++){let a=s.cssRules[t];if(a.selectorText===":root"){c=a;break}}return c&&(r.value=c.style.getPropertyValue(`--${r.name}`)),r.control==="color"?M`
                    <omni-color-field
                        class="css-prop docs-omni-component"
                        .value="${G(r.value)}"
                        @input="${async t=>{var h;let n=((h=t.target.shadowRoot)==null?void 0:h.getElementById("inputField")).value;r.value=n,this._cssChanged(r)}}">
                    </omni-color-field>
                  `:M`
                    <omni-text-field
                        class="css-prop docs-omni-component"
                        .value="${G(r.value)}"
                        @input="${async t=>{var n;let i=((n=t.target.shadowRoot)==null?void 0:n.getElementById("inputField")).value;r.value=i,this._cssChanged(r)}}">
                    </omni-text-field>
                  `}return D}createRenderRoot(){return this}_sortCssVariables(r,s){var t;let e=(t=this.customCss)==null?void 0:t.sheet,c;if((e==null?void 0:e.cssRules.length)===0){let a=e.insertRule(":root {}");c=e.cssRules.item(a)}else for(let a=0;a<e.cssRules.length;a++){let i=e==null?void 0:e.cssRules[a];if(i.selectorText===":root"){c=i;break}}return c&&(r.value=c.style.getPropertyValue(`--${r.name}`),s.value=c.style.getPropertyValue(`--${s.name}`)),r.value?s.value?0:-1:s.value?1:0}_cssChanged(r){var t;let s=(t=this.customCss)==null?void 0:t.sheet,e;if((s==null?void 0:s.cssRules.length)===0){let a=s.insertRule(":root {}");e=s.cssRules.item(a)}else for(let a=0;a<s.cssRules.length;a++){let i=s==null?void 0:s.cssRules[a];if(i.selectorText===":root"){e=i;break}}r.value?e&&e.style.setProperty(`--${r.name}`,r.value):e&&e.style.removeProperty(`--${r.name}`);let c=e.cssText;sessionStorage.setItem(`custom-css-${this.tag}`,c)}_showComponentStyles(){this._showStylesDialog=!0}_checkCloseModal(r){var e;let s=(e=this.modal)==null?void 0:e.querySelector("div.modal-container");r.composedPath().includes(s)||(this._showStylesDialog=!1)}async _resetLivePropertyEditor(){var s,e,c,t,a,i,n,h,P;this.story.args=JSON.parse(JSON.stringify((s=this.story)==null?void 0:s.originalArgs)),Object.keys((c=(e=this.story)==null?void 0:e.originalArgs)!=null?c:{}).forEach(d=>{this.story.originalArgs[d]===void 0&&(this.story.args[d]=void 0)});let r=(t=this.customCss)==null?void 0:t.sheet;for(let d=0;d<r.cssRules.length;d++)if((r==null?void 0:r.cssRules[d]).selectorText===":root"){r==null||r.deleteRule(d);break}if(sessionStorage.removeItem(`custom-css-${this.tag}`),this.requestUpdate(),this.dispatchEvent(new CustomEvent(oe,{bubbles:!0,composed:!0})),await this.updateComplete,this.codeEditor){let d=(a=window.localStorage.getItem(k))!=null?a:"HTML",o=(i=this.story.frameworkSources)==null?void 0:i.find(m=>m.framework===d);o||(d=(h=(n=this.sourceFallbacks.find(m=>m.frameworks.includes(d)))==null?void 0:n.fallbackFramework)!=null?h:d,o=(P=this.story.frameworkSources)==null?void 0:P.find(m=>m.framework===d)),await this.codeEditor.refresh(()=>{var m,v,p,b,g;return(m=o==null?void 0:o.sourceParts)!=null&&m.htmlFragment?typeof((v=o==null?void 0:o.sourceParts)==null?void 0:v.htmlFragment)=="string"?(p=o==null?void 0:o.sourceParts)==null?void 0:p.htmlFragment:(b=o==null?void 0:o.sourceParts)==null?void 0:b.htmlFragment(this.story.args):o!=null&&o.load?o.load(this.story.args,o):(g=this.sourceFallbacks.find(S=>S.frameworks.includes(d)))!=null&&g.allowRenderFromResult?A(this.story.render(this.story.args)):""}),this.secondaryCodeEditor&&this.secondaryCodeEditor.refresh(()=>{var v,p,b,g,S,u;let m=(v=o==null?void 0:o.sourceParts)!=null&&v.jsFragment?typeof((p=o==null?void 0:o.sourceParts)==null?void 0:p.jsFragment)=="string"?(b=o==null?void 0:o.sourceParts)==null?void 0:b.jsFragment:(g=o==null?void 0:o.sourceParts)==null?void 0:g.jsFragment(this.story.args):"";return m?((S=this.renderRoot.querySelector(".secondary-code-block"))==null||S.classList.remove("no-display"),this.renderRoot.querySelectorAll(".code-title").forEach(F=>F==null?void 0:F.classList.remove("no-display"))):((u=this.renderRoot.querySelector(".secondary-code-block"))==null||u.classList.add("no-display"),this.renderRoot.querySelectorAll(".code-title").forEach(F=>F==null?void 0:F.classList.add("no-display"))),m})}this.propertyEditor&&this.propertyEditor.resetSlots()}async _generateCodePen(r){var g,S,u,F,q,O,I,N,J,B,U,z,K,W,Q,X,l,y,x,$,j,C,V,f,H,Y,R;let s=((S=(g=document.getElementById("header-version-indicator"))==null?void 0:g.innerText)!=null?S:"").toLowerCase(),e=(q=(u=this.story.frameworkSources)==null?void 0:u.find(T=>T.framework===r))!=null?q:(F=this.story.frameworkSources)==null?void 0:F.find(T=>{var _;return T.framework===((_=this.sourceFallbacks.find(w=>w.frameworks.includes(r)))==null?void 0:_.fallbackFramework)}),c=(O=e==null?void 0:e.sourceParts)!=null&&O.htmlFragment?typeof((I=e==null?void 0:e.sourceParts)==null?void 0:I.htmlFragment)=="string"?(N=e==null?void 0:e.sourceParts)==null?void 0:N.htmlFragment:(J=e==null?void 0:e.sourceParts)==null?void 0:J.htmlFragment(this.story.args):e!=null&&e.load?e.load(this.story.args,e):(B=this.sourceFallbacks.find(T=>T.frameworks.includes(r)))!=null&&B.allowRenderFromResult?A(this.story.render(this.story.args)):"",t=s&&s!=="latest"&&s!=="local"?["alpha","beta","next"].includes(s)?`esm-${s}`:`${s}-esm`:"esm-alpha",a="",i="";for(let T=0;T<document.styleSheets.length;T++){let _=document.styleSheets[T];try{if(_.cssRules)for(let w=0;w<_.cssRules.length;w++){let Se=_.cssRules[w];i+=`
        ${Se.cssText}`}}catch(w){continue}}let n=document.documentElement.getAttribute("theme"),h="",P="none",d="";switch(!0){case(r==="Vue"&&!((U=e==null?void 0:e.sourceParts)!=null&&U.fallbackFramework)):a=`
<html theme="${n!=null?n:"light"}">
    <body style="
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 24px;
    ">
            <div id="app">
                ${((z=e==null?void 0:e.sourceParts)!=null&&z.htmlFragment?typeof e.sourceParts.htmlFragment=="function"?e.sourceParts.htmlFragment(this.story.args):e.sourceParts.htmlFragment:c).replaceAll("@capitec/omni-components",`https://cdn.jsdelivr.net/npm/@capitec/omni-components@${t}`).replace(new RegExp(`(https://cdn.jsdelivr.net/npm/@capitec/omni-components@${t}/)([^/"'\`]+)`,"g"),"$1dist/$2/index.js")}
            </div>
    </body>
</html>`,h=`import 'https://cdn.jsdelivr.net/npm/@capitec/omni-components@${t}/dist/omni-components.js';
import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js';
${((K=e==null?void 0:e.sourceParts)!=null&&K.jsFragment?typeof e.sourceParts.jsFragment=="function"?e.sourceParts.jsFragment(this.story.args):e.sourceParts.jsFragment:"").replaceAll("@capitec/omni-components",`https://cdn.jsdelivr.net/npm/@capitec/omni-components@${t}`).replace(new RegExp(`(https://cdn.jsdelivr.net/npm/@capitec/omni-components@${t}/)([^/"'\`]+)`,"g"),"$1dist/$2/index.js")}

                
const app = createApp({
    data() {
        return window.vueData ?? {}
    }
});
app.config.compilerOptions.isCustomElement = (tag) => tag.includes('omni-');
app.mount('#app');`;break;case(r==="Lit"&&!((W=e==null?void 0:e.sourceParts)!=null&&W.fallbackFramework)):a=`
<html theme="${n!=null?n:"light"}">
    <body style="
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 24px;
    ">
        <div id="root" ></div>
    </body>
</html>`,h=`import 'https://cdn.jsdelivr.net/npm/@capitec/omni-components@${t}/dist/omni-components.js';
import { html, render } from 'https://unpkg.com/lit/index.js?module';
${((Q=e==null?void 0:e.sourceParts)!=null&&Q.jsFragment?typeof e.sourceParts.jsFragment=="function"?e.sourceParts.jsFragment(this.story.args):e.sourceParts.jsFragment:"").replaceAll("@capitec/omni-components",`https://cdn.jsdelivr.net/npm/@capitec/omni-components@${t}`).replace(new RegExp(`(https://cdn.jsdelivr.net/npm/@capitec/omni-components@${t}/)([^/"'\`]+)`,"g"),"$1dist/$2/index.js")}

const content = html\`
${((X=e==null?void 0:e.sourceParts)!=null&&X.htmlFragment?typeof e.sourceParts.htmlFragment=="function"?e.sourceParts.htmlFragment(this.story.args):e.sourceParts.htmlFragment:c).replaceAll("@capitec/omni-components",`https://cdn.jsdelivr.net/npm/@capitec/omni-components@${t}`).replace(new RegExp(`(https://cdn.jsdelivr.net/npm/@capitec/omni-components@${t}/)([^/"'\`]+)`,"g"),"$1dist/$2/index.js")}
\`;

render(content, document.getElementById('root'));
                `;break;case r==="Lit":case r==="Vue":case r==="HTML":a=`
<html theme="${n!=null?n:"light"}">
    <body style="
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 24px;
    ">
        ${((l=e==null?void 0:e.sourceParts)!=null&&l.htmlFragment?typeof e.sourceParts.htmlFragment=="function"?e.sourceParts.htmlFragment(this.story.args):e.sourceParts.htmlFragment:c).replaceAll("@capitec/omni-components",`https://cdn.jsdelivr.net/npm/@capitec/omni-components@${t}`).replace(new RegExp(`(https://cdn.jsdelivr.net/npm/@capitec/omni-components@${t}/)([^/"'\`]+)`,"g"),"$1dist/$2/index.js")}
    </body>
</html>`,h=`import 'https://cdn.jsdelivr.net/npm/@capitec/omni-components@${t}/dist/omni-components.js';
${((y=e==null?void 0:e.sourceParts)!=null&&y.jsFragment?typeof e.sourceParts.jsFragment=="function"?e.sourceParts.jsFragment(this.story.args):e.sourceParts.jsFragment:"").replaceAll("@capitec/omni-components",`https://cdn.jsdelivr.net/npm/@capitec/omni-components@${t}`).replace(new RegExp(`(https://cdn.jsdelivr.net/npm/@capitec/omni-components@${t}/)([^/"'\`]+)`,"g"),"$1dist/$2/index.js")}`;break;case r==="React":a=`
<html theme="${n!=null?n:"light"}">
    <body style="
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 24px;
    ">
        <div id="root"></div>
        ${((x=e==null?void 0:e.sourceParts)!=null&&x.htmlFragment?typeof e.sourceParts.htmlFragment=="function"?e.sourceParts.htmlFragment(this.story.args):e.sourceParts.htmlFragment:"").replaceAll("@capitec/omni-components-react",`https://cdn.jsdelivr.net/npm/@capitec/omni-components-react@${t}`).replace(new RegExp(`https://cdn.jsdelivr.net/npm/@capitec/omni-components-react@${t}/([^/"'\`]+)`,"g"),"$&/index.js")}
    </body>
</html>`,h=`
${(($=e==null?void 0:e.sourceParts)!=null&&$.jsFragment?typeof e.sourceParts.jsFragment=="function"?e.sourceParts.jsFragment(this.story.args):e.sourceParts.jsFragment:c).replaceAll("@capitec/omni-components-react",`https://cdn.jsdelivr.net/npm/@capitec/omni-components-react@${t}`).replace(new RegExp(`https://cdn.jsdelivr.net/npm/@capitec/omni-components-react@${t}/([^/"'\`]+)`,"g"),"$&/index.js")} 

const el = document.querySelector("#root");
ReactDOM.render(<App/>, el);`,P="babel",d="https://cdnjs.cloudflare.com/ajax/libs/react/16.7.0/umd/react.production.min.js;https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.7.0/umd/react-dom.production.min.js";break}let o={title:`${(V=(C=this.key)!=null?C:(j=this.story)==null?void 0:j.name)!=null?V:"Generated CodePen"} - ${r}`,description:((f=this.story)==null?void 0:f.description)&&typeof((H=this.story)==null?void 0:H.description)=="function"?this.story.description():(Y=this.story)==null?void 0:Y.description,private:!1,tags:[r,"Omni Components","web components","custom elements"],editors:"1011",layout:"top",html:a,html_pre_processor:"none",css:`${i}

${(R=e==null?void 0:e.sourceParts)!=null&&R.cssFragment?typeof e.sourceParts.cssFragment=="function"?e.sourceParts.cssFragment(this.story.args):e.sourceParts.cssFragment:""}`,css_pre_processor:"none",css_starter:"neither",css_prefix:"neither",js:h,js_pre_processor:P,head:`<link rel="stylesheet preload" href="https://fonts.googleapis.com/css?family=Hind Vadodara" as="style">
            <link rel="stylesheet preload" href="https://fonts.googleapis.com/icon?family=Material+Icons" as="style">`,js_external:d},v=`<form style="display: none;" action="https://codepen.io/pen/define" method="POST" target="_blank"> 
            <input type="hidden" name="data" value='${JSON.stringify(o).replace(/"/g,"&quot;").replace(/'/g,"&apos;")}'>
            <input type="submit" class="code-submit">
        </form>`,p=document.createElement("div");p.innerHTML=v,p.style.display="none",document.body.appendChild(p),p.querySelector(".code-submit").click(),document.body.removeChild(p)}_currentCodeTheme(){var r;return((r=this.theme)==null?void 0:r.toLowerCase())==="dark"?de:me}};L([Z({type:String,reflect:!0})],E.prototype,"path",2),L([Z({type:String,reflect:!0})],E.prototype,"tag",2),L([Z({type:String,reflect:!0})],E.prototype,"key",2),L([Z({type:Boolean,reflect:!0})],E.prototype,"interactive",2),L([re()],E.prototype,"_interactiveSrc",2),L([re()],E.prototype,"_showStylesDialog",2),L([ee(".primary-source-code")],E.prototype,"codeEditor",2),L([ee(".secondary-js-source-code")],E.prototype,"secondaryCodeEditor",2),L([ee(".live-props")],E.prototype,"propertyEditor",2),E=L([pe("story-renderer")],E);var oe="story-renderer-interactive-update";export{E as StoryRenderer};
//# sourceMappingURL=StoryRenderer.js.map
