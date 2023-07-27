import{a as Fe}from"../chunks-js/chunk.EQXGZ5KJ.js";import"../chunks-js/chunk.NFUOV37G.js";import"../chunks-js/chunk.24VLDTBM.js";import"../chunks-js/chunk.RTZAZGF5.js";import"../chunks-js/chunk.VAH5TOPR.js";import"../chunks-js/chunk.UXDIK4CJ.js";import{a as G}from"../chunks-js/chunk.5DQX5M47.js";import"../chunks-js/chunk.KLTOWBHK.js";import"../chunks-js/chunk.Y2FNDKPS.js";import"../chunks-js/chunk.KRAWXAJA.js";import{E as q,F as be,a as se,b as pe,c as ue,d as he,e as A,f as ye,t as ve,u as Se}from"../chunks-js/chunk.OQGANNKN.js";import"../chunks-js/chunk.Z5LIJAXH.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.XUUOUKOL.js";import"../chunks-js/chunk.XCXCHO25.js";import"../chunks-js/chunk.D4QWJ7ZS.js";import"../chunks-js/chunk.MYG5FMLT.js";import"../chunks-js/chunk.2EDJFZZN.js";import"../chunks-js/chunk.N3FDHMD3.js";import"../chunks-js/chunk.YX3UUKJ3.js";import"../chunks-js/chunk.LB764BBD.js";import"../chunks-js/chunk.JO2XZX72.js";import"../chunks-js/chunk.LUCH4Y6K.js";import"../chunks-js/chunk.PNTHLTQK.js";import{a as ge,b as Z,c as oe,d as ee}from"../chunks-js/chunk.S2K25ADN.js";import{b as V,e as D,g as de,h as me}from"../chunks-js/chunk.L3RZWW2F.js";import{a as te,j as x,m as ne,p as ie}from"../chunks-js/chunk.BF43NN75.js";ne();ie();var C=class extends me{constructor(){super(...arguments);this.sourceFallbacks=[{fallbackFramework:"HTML",frameworks:["HTML","Lit","Vue"],allowRenderFromResult:!0}];this.noInteractiveCodePen=["React"]}async connectedCallback(){var s;if(super.connectedCallback(),this.controller=new Fe(this,this.path),this.customCss=document.head.querySelector("#custom-css-vars"),!this.customCss){this.customCss=document.createElement("style"),this.customCss.id="custom-css-vars",document.head.appendChild(this.customCss);let t=sessionStorage.getItem(`custom-css-${this.tag}`);t&&(this.customCss.innerHTML=t)}this.modal||(this.modal=document.createElement("div"),document.body.appendChild(this.modal)),this.customElements=await Se();let o=ye(this.tag,this.customElements);this.cssVariables=Object.keys(o).filter(t=>o[t].subcategory==="Component Variables").map(t=>{let l=o[t];return te({name:t},l)}),document.addEventListener("omni-docs-theme-change",t=>{var c;this.theme=(c=getComputedStyle(document.documentElement).getPropertyValue("--code-editor-theme"))==null?void 0:c.trim();let l=this.renderRoot.querySelectorAll("code-editor");l&&l.forEach(e=>{e.updateExtensions()})}),document.addEventListener("omni-docs-framework-change",async t=>{var n,h,P,i,r;let l=this.renderRoot.querySelectorAll("code-editor");l&&l.forEach(m=>{m.updateExtensions()});let c=(n=window.localStorage.getItem(A))!=null?n:"HTML",e=(h=this.story.frameworkSources)==null?void 0:h.find(m=>m.framework===c);e||(c=(i=(P=this.sourceFallbacks.find(m=>m.frameworks.includes(c)))==null?void 0:P.fallbackFramework)!=null?i:c,e=(r=this.story.frameworkSources)==null?void 0:r.find(m=>m.framework===c)),this.codeEditor&&(await this.codeEditor.refresh(()=>{var g,v,b,S,u,E,p;let m=(g=e==null?void 0:e.sourceParts)!=null&&g.htmlFragment?typeof((v=e==null?void 0:e.sourceParts)==null?void 0:v.htmlFragment)=="string"?(b=e==null?void 0:e.sourceParts)==null?void 0:b.htmlFragment:(S=e==null?void 0:e.sourceParts)==null?void 0:S.htmlFragment(this.story.args):e!=null&&e.load?e.load(this.story.args,e):(u=this.sourceFallbacks.find(H=>H.frameworks.includes(c)))!=null&&u.allowRenderFromResult?q(this.story.render(this.story.args)):"";return m?(E=this.renderRoot.querySelector(".primary-code-block"))==null||E.classList.remove("no-display"):(p=this.renderRoot.querySelector(".primary-code-block"))==null||p.classList.add("no-display"),m}),this.secondaryCodeEditor&&await this.secondaryCodeEditor.refresh(()=>{var g,v,b,S,u,E;let m=(g=e==null?void 0:e.sourceParts)!=null&&g.jsFragment?typeof((v=e==null?void 0:e.sourceParts)==null?void 0:v.jsFragment)=="string"?(b=e==null?void 0:e.sourceParts)==null?void 0:b.jsFragment:(S=e==null?void 0:e.sourceParts)==null?void 0:S.jsFragment(this.story.args):"";return m?((u=this.renderRoot.querySelector(".secondary-code-block"))==null||u.classList.remove("no-display"),this.renderRoot.querySelectorAll(".code-title").forEach(p=>p==null?void 0:p.classList.remove("no-display"))):((E=this.renderRoot.querySelector(".secondary-code-block"))==null||E.classList.add("no-display"),this.renderRoot.querySelectorAll(".code-title").forEach(p=>p==null?void 0:p.classList.add("no-display"))),m}));let d=this.renderRoot.querySelector(".code-pen-gen-btn");d&&((e==null?void 0:e.disableCodePen)||this.noInteractiveCodePen.includes(c)&&this.interactive?d==null||d.classList.add("no-display"):d==null||d.classList.remove("no-display"))}),document.addEventListener(re,()=>{this.requestUpdate()}),this.theme=(s=getComputedStyle(document.documentElement).getPropertyValue("--code-editor-theme"))==null?void 0:s.trim()}disconnectedCallback(){this.modal&&(document.body.removeChild(this.modal),this.modal=null)}updated(o){var s;super.updated(o),(s=window.Prism)==null||s.highlightAll()}render(){var d,n,h,P,i,r,m,g,v,b,S,u,E,p,H,O,I,J,N,B,U,z,K,W,Q,X;if(!((d=this.controller)!=null&&d.story))return V`<omni-loading-icon style="max-height: 64px;"></omni-loading-icon>`;de(V`
        ${this._showStylesDialog?V`
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
                                ${(n=this.cssVariables)==null?void 0:n.sort((a,y)=>this._sortCssVariables(a,y)).map(a=>V`
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
        </div>`:D}
        `,this.modal),this.story=this.controller.story[this.key],this.story.originalArgs=(r=(h=this.story)==null?void 0:h.originalArgs)!=null?r:JSON.parse(JSON.stringify((i=(P=this.story)==null?void 0:P.args)!=null?i:{})),Object.keys((g=(m=this.story)==null?void 0:m.args)!=null?g:{}).forEach(a=>{this.story.args[a]===void 0&&(this.story.originalArgs[a]=void 0)});let o=this.story.render(this.story.args),s=(v=window.localStorage.getItem(A))!=null?v:"HTML",t=(b=this.story.frameworkSources)==null?void 0:b.find(a=>a.framework===s),l=()=>{var a,y,R,$,j;return s=(a=window.localStorage.getItem(A))!=null?a:"HTML",t=(y=this.story.frameworkSources)==null?void 0:y.find(F=>F.framework===s),t||(s=($=(R=this.sourceFallbacks.find(F=>F.frameworks.includes(s)))==null?void 0:R.fallbackFramework)!=null?$:s,t=(j=this.story.frameworkSources)==null?void 0:j.find(F=>F.framework===s)),s};l();let c=(S=t==null?void 0:t.sourceParts)!=null&&S.htmlFragment?typeof((u=t==null?void 0:t.sourceParts)==null?void 0:u.htmlFragment)=="string"?(E=t==null?void 0:t.sourceParts)==null?void 0:E.htmlFragment:(p=t==null?void 0:t.sourceParts)==null?void 0:p.htmlFragment(this.story.args):t!=null&&t.load?t.load(this.story.args,t):(H=this.sourceFallbacks.find(a=>a.frameworks.includes(s)))!=null&&H.allowRenderFromResult?q(o):"",e=(O=t==null?void 0:t.sourceParts)!=null&&O.jsFragment?typeof((I=t==null?void 0:t.sourceParts)==null?void 0:I.jsFragment)=="string"?(J=t==null?void 0:t.sourceParts)==null?void 0:J.jsFragment:(N=t==null?void 0:t.sourceParts)==null?void 0:N.jsFragment(this.story.args):"";return V`
        <div class="story-description">
            ${((B=this.story)==null?void 0:B.description)&&typeof((U=this.story)==null?void 0:U.description)=="function"?this.story.description():(z=this.story)==null?void 0:z.description}
        </div>
        <div class="story">
            <div class="preview">
                <div class="item">
                <div class="${this.key}${this.interactive?" interactive-story":""}" .data=${this.story}>
                    ${o}
                </div>
                </div>

                ${this.interactive?V`
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
                        @property-change="${async a=>{let y=a.detail,R=!1;(!y.oldValue||!y.newValue||typeof y.newValue!="string"&&JSON.stringify(y.oldValue).trim()!==JSON.stringify(y.newValue).trim()||y.oldValue.toString().trim()!==y.newValue.toString().trim())&&(R=!0),R&&(this.story.args[y.property]=y.newValue,this.requestUpdate(),this.dispatchEvent(new CustomEvent(re,{bubbles:!0,composed:!0})),await this.updateComplete,this.codeEditor&&(l(),await this.codeEditor.refresh(()=>{var $,j,F,f,w;return($=t==null?void 0:t.sourceParts)!=null&&$.htmlFragment?typeof((j=t==null?void 0:t.sourceParts)==null?void 0:j.htmlFragment)=="string"?(F=t==null?void 0:t.sourceParts)==null?void 0:F.htmlFragment:(f=t==null?void 0:t.sourceParts)==null?void 0:f.htmlFragment(this.story.args):t!=null&&t.load?t.load(this.story.args,t):(w=this.sourceFallbacks.find(k=>k.frameworks.includes(s)))!=null&&w.allowRenderFromResult?q(this.story.render(this.story.args)):""}),this.secondaryCodeEditor&&await this.secondaryCodeEditor.refresh(()=>{var j,F,f,w,k,Y;let $=(j=t==null?void 0:t.sourceParts)!=null&&j.jsFragment?typeof((F=t==null?void 0:t.sourceParts)==null?void 0:F.jsFragment)=="string"?(f=t==null?void 0:t.sourceParts)==null?void 0:f.jsFragment:(w=t==null?void 0:t.sourceParts)==null?void 0:w.jsFragment(this.story.args):"";return $?((k=this.renderRoot.querySelector(".secondary-code-block"))==null||k.classList.remove("no-display"),this.renderRoot.querySelectorAll(".code-title").forEach(T=>T==null?void 0:T.classList.remove("no-display"))):((Y=this.renderRoot.querySelector(".secondary-code-block"))==null||Y.classList.add("no-display"),this.renderRoot.querySelectorAll(".code-title").forEach(T=>T==null?void 0:T.classList.add("no-display"))),$})))}}"></live-property-editor>
                    </div>
                    `:D}
            </div>
            <div class="code-title ${e?"":"no-display"}">HTML</div>
            <div class="code-block primary-code-block ${c?"":"no-display"}">
                <code-editor
                class="source-code primary-source-code"
                .transformSource="${a=>l()==="React"?a:be(a)}"
                .extensions="${async()=>[this._currentCodeTheme(),l()==="React"?se({jsx:!0}):pe(await ve())]}"
                .code="${G(c)}"
                ?read-only="${!0}">
                </code-editor>
            </div>

            <div class="code-title ${e?"":"no-display"}">JS</div>
            <div class="code-block secondary-code-block ${e?"":"no-display"}">
                <code-editor
                class="source-code secondary-js-source-code"
                .extensions="${async()=>[this._currentCodeTheme(),se({jsx:!0})]}"
                .code="${G(e)}"
                read-only>
                </code-editor>
            </div>

            <div class="two-part ${(W=(K=this.story.frameworkSources)==null?void 0:K.find(a=>a.framework===s))!=null&&W.disableCodePen?"no-display":""}">   
                <omni-button 
                    class="code-pen-gen-btn docs-omni-component ${((X=(Q=this.story.frameworkSources)==null?void 0:Q.find(a=>a.framework===s))==null?void 0:X.disableCodePen)||this.noInteractiveCodePen.includes(s)&&this.interactive?"no-display":""}" 
                    @click="${()=>{var a;return this._generateCodePen((a=window.localStorage.getItem(A))!=null?a:"HTML")}}">
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
    `}handleCustomThemeCSSVariableSearch(o){var c;let s=(c=o.target.value)!=null?c:"",l=document.querySelector(`[data-target=custom-css-table-${this.tag}]`).children;for(let e=0;e<l.length;e++){let d=l[e];d.innerText&&d.innerText.toLowerCase().includes(s.toLowerCase())?d.classList.remove("hidden"):d.classList.add("hidden")}}renderCssVariable(o){var t;let s=(t=this.customCss)==null?void 0:t.sheet;if(o.name){let l;if((s==null?void 0:s.cssRules.length)===0){let c=s.insertRule(":root {}");l=s.cssRules.item(c)}else for(let c=0;c<s.cssRules.length;c++){let e=s.cssRules[c];if(e.selectorText===":root"){l=e;break}}return l&&(o.value=l.style.getPropertyValue(`--${o.name}`)),o.control==="color"?V`
                    <omni-color-field
                        class="css-prop docs-omni-component"
                        .value="${G(o.value)}"
                        @input="${async c=>{var h;let n=((h=c.target.shadowRoot)==null?void 0:h.getElementById("inputField")).value;o.value=n,this._cssChanged(o)}}">
                    </omni-color-field>
                  `:V`
                    <omni-text-field
                        class="css-prop docs-omni-component"
                        .value="${G(o.value)}"
                        @input="${async c=>{var n;let d=((n=c.target.shadowRoot)==null?void 0:n.getElementById("inputField")).value;o.value=d,this._cssChanged(o)}}">
                    </omni-text-field>
                  `}return D}createRenderRoot(){return this}_sortCssVariables(o,s){var c;let t=(c=this.customCss)==null?void 0:c.sheet,l;if((t==null?void 0:t.cssRules.length)===0){let e=t.insertRule(":root {}");l=t.cssRules.item(e)}else for(let e=0;e<t.cssRules.length;e++){let d=t==null?void 0:t.cssRules[e];if(d.selectorText===":root"){l=d;break}}return l&&(o.value=l.style.getPropertyValue(`--${o.name}`),s.value=l.style.getPropertyValue(`--${s.name}`)),o.value?s.value?0:-1:s.value?1:0}_cssChanged(o){var c;let s=(c=this.customCss)==null?void 0:c.sheet,t;if((s==null?void 0:s.cssRules.length)===0){let e=s.insertRule(":root {}");t=s.cssRules.item(e)}else for(let e=0;e<s.cssRules.length;e++){let d=s==null?void 0:s.cssRules[e];if(d.selectorText===":root"){t=d;break}}o.value?t&&t.style.setProperty(`--${o.name}`,o.value):t&&t.style.removeProperty(`--${o.name}`);let l=t.cssText;sessionStorage.setItem(`custom-css-${this.tag}`,l)}_showComponentStyles(){this._showStylesDialog=!0}_checkCloseModal(o){var t;let s=(t=this.modal)==null?void 0:t.querySelector("div.modal-container");o.composedPath().includes(s)||(this._showStylesDialog=!1)}async _resetLivePropertyEditor(){var s,t,l,c,e,d,n,h,P;this.story.args=JSON.parse(JSON.stringify((s=this.story)==null?void 0:s.originalArgs)),Object.keys((l=(t=this.story)==null?void 0:t.originalArgs)!=null?l:{}).forEach(i=>{this.story.originalArgs[i]===void 0&&(this.story.args[i]=void 0)});let o=(c=this.customCss)==null?void 0:c.sheet;for(let i=0;i<o.cssRules.length;i++)if((o==null?void 0:o.cssRules[i]).selectorText===":root"){o==null||o.deleteRule(i);break}if(sessionStorage.removeItem(`custom-css-${this.tag}`),this.requestUpdate(),this.dispatchEvent(new CustomEvent(re,{bubbles:!0,composed:!0})),await this.updateComplete,this.codeEditor){let i=(e=window.localStorage.getItem(A))!=null?e:"HTML",r=(d=this.story.frameworkSources)==null?void 0:d.find(m=>m.framework===i);r||(i=(h=(n=this.sourceFallbacks.find(m=>m.frameworks.includes(i)))==null?void 0:n.fallbackFramework)!=null?h:i,r=(P=this.story.frameworkSources)==null?void 0:P.find(m=>m.framework===i)),await this.codeEditor.refresh(()=>{var m,g,v,b,S;return(m=r==null?void 0:r.sourceParts)!=null&&m.htmlFragment?typeof((g=r==null?void 0:r.sourceParts)==null?void 0:g.htmlFragment)=="string"?(v=r==null?void 0:r.sourceParts)==null?void 0:v.htmlFragment:(b=r==null?void 0:r.sourceParts)==null?void 0:b.htmlFragment(this.story.args):r!=null&&r.load?r.load(this.story.args,r):(S=this.sourceFallbacks.find(u=>u.frameworks.includes(i)))!=null&&S.allowRenderFromResult?q(this.story.render(this.story.args)):""}),this.secondaryCodeEditor&&this.secondaryCodeEditor.refresh(()=>{var g,v,b,S,u,E;let m=(g=r==null?void 0:r.sourceParts)!=null&&g.jsFragment?typeof((v=r==null?void 0:r.sourceParts)==null?void 0:v.jsFragment)=="string"?(b=r==null?void 0:r.sourceParts)==null?void 0:b.jsFragment:(S=r==null?void 0:r.sourceParts)==null?void 0:S.jsFragment(this.story.args):"";return m?((u=this.renderRoot.querySelector(".secondary-code-block"))==null||u.classList.remove("no-display"),this.renderRoot.querySelectorAll(".code-title").forEach(p=>p==null?void 0:p.classList.remove("no-display"))):((E=this.renderRoot.querySelector(".secondary-code-block"))==null||E.classList.add("no-display"),this.renderRoot.querySelectorAll(".code-title").forEach(p=>p==null?void 0:p.classList.add("no-display"))),m})}this.propertyEditor&&this.propertyEditor.resetSlots()}async _generateCodePen(o){var p,H,O,I,J,N,B,U,z,K,W,Q,X,a,y,R,$,j,F,f,w,k,Y,T,ae,ce,le;let s=((H=(p=document.getElementById("header-version-indicator"))==null?void 0:p.innerText)!=null?H:"").toLowerCase(),l=this.customElements.modules.find(L=>{var M;return(M=L.exports)==null?void 0:M.find(_=>_.name===this.tag)}).path.split("/"),c=l[l.length-2],e=(J=(O=this.story.frameworkSources)==null?void 0:O.find(L=>L.framework===o))!=null?J:(I=this.story.frameworkSources)==null?void 0:I.find(L=>{var M;return L.framework===((M=this.sourceFallbacks.find(_=>_.frameworks.includes(o)))==null?void 0:M.fallbackFramework)}),d=(N=e==null?void 0:e.sourceParts)!=null&&N.htmlFragment?typeof((B=e==null?void 0:e.sourceParts)==null?void 0:B.htmlFragment)=="string"?(U=e==null?void 0:e.sourceParts)==null?void 0:U.htmlFragment:(z=e==null?void 0:e.sourceParts)==null?void 0:z.htmlFragment(this.story.args):e!=null&&e.load?e.load(this.story.args,e):(K=this.sourceFallbacks.find(L=>L.frameworks.includes(o)))!=null&&K.allowRenderFromResult?q(this.story.render(this.story.args)):"",n=s&&s!=="latest"&&s!=="local"?["alpha","beta","next"].includes(s)?`esm-${s}`:`${s}-esm`:"esm-alpha",h="",P="";for(let L=0;L<document.styleSheets.length;L++){let M=document.styleSheets[L];try{if(M.cssRules)for(let _=0;_<M.cssRules.length;_++){let Ce=M.cssRules[_];P+=`
        ${Ce.cssText}`}}catch(_){continue}}let i=document.documentElement.getAttribute("theme"),r="",m="none",g="";switch(!0){case(o==="Vue"&&!((W=e==null?void 0:e.sourceParts)!=null&&W.fallbackFramework)):h=`
<html theme="${i!=null?i:"light"}">
    <body style="
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 24px;
    ">
            <div id="app">
                ${((Q=e==null?void 0:e.sourceParts)!=null&&Q.htmlFragment?typeof e.sourceParts.htmlFragment=="function"?e.sourceParts.htmlFragment(this.story.args):e.sourceParts.htmlFragment:d).replaceAll("@capitec/omni-components",`https://cdn.jsdelivr.net/npm/@capitec/omni-components@${n}`).replace(new RegExp(`(https://cdn.jsdelivr.net/npm/@capitec/omni-components@${n}/)([^/"'\`]+)`,"g"),"$1dist/$2/index.js")}
            </div>
    </body>
</html>`,r=`import 'https://cdn.jsdelivr.net/npm/@capitec/omni-components@${n}/dist/omni-components.js';
import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js';
${((X=e==null?void 0:e.sourceParts)!=null&&X.jsFragment?typeof e.sourceParts.jsFragment=="function"?e.sourceParts.jsFragment(this.story.args):e.sourceParts.jsFragment:"").replaceAll("@capitec/omni-components",`https://cdn.jsdelivr.net/npm/@capitec/omni-components@${n}`).replace(new RegExp(`(https://cdn.jsdelivr.net/npm/@capitec/omni-components@${n}/)([^/"'\`]+)`,"g"),"$1dist/$2/index.js")}

                
const app = createApp({
    data() {
        return window.vueData ?? {}
    }
});
app.config.compilerOptions.isCustomElement = (tag) => tag.includes('omni-');
app.mount('#app');`;break;case(o==="Lit"&&!((a=e==null?void 0:e.sourceParts)!=null&&a.fallbackFramework)):h=`
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
</html>`,r=`import 'https://cdn.jsdelivr.net/npm/@capitec/omni-components@${n}/dist/omni-components.js';
import { html, render } from 'https://unpkg.com/lit/index.js?module';
${((y=e==null?void 0:e.sourceParts)!=null&&y.jsFragment?typeof e.sourceParts.jsFragment=="function"?e.sourceParts.jsFragment(this.story.args):e.sourceParts.jsFragment:"").replaceAll("@capitec/omni-components",`https://cdn.jsdelivr.net/npm/@capitec/omni-components@${n}`).replace(new RegExp(`(https://cdn.jsdelivr.net/npm/@capitec/omni-components@${n}/)([^/"'\`]+)`,"g"),"$1dist/$2/index.js")}

const content = html\`
${((R=e==null?void 0:e.sourceParts)!=null&&R.htmlFragment?typeof e.sourceParts.htmlFragment=="function"?e.sourceParts.htmlFragment(this.story.args):e.sourceParts.htmlFragment:d).replaceAll("@capitec/omni-components",`https://cdn.jsdelivr.net/npm/@capitec/omni-components@${n}`).replace(new RegExp(`(https://cdn.jsdelivr.net/npm/@capitec/omni-components@${n}/)([^/"'\`]+)`,"g"),"$1dist/$2/index.js")}
\`;

render(content, document.getElementById('root'));
                `;break;case o==="Lit":case o==="Vue":case o==="HTML":h=`
<html theme="${i!=null?i:"light"}">
    <body style="
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 24px;
    ">
        ${(($=e==null?void 0:e.sourceParts)!=null&&$.htmlFragment?typeof e.sourceParts.htmlFragment=="function"?e.sourceParts.htmlFragment(this.story.args):e.sourceParts.htmlFragment:d).replaceAll("@capitec/omni-components",`https://cdn.jsdelivr.net/npm/@capitec/omni-components@${n}`).replace(new RegExp(`(https://cdn.jsdelivr.net/npm/@capitec/omni-components@${n}/)([^/"'\`]+)`,"g"),"$1dist/$2/index.js")}
    </body>
</html>`,r=`import 'https://cdn.jsdelivr.net/npm/@capitec/omni-components@${n}/dist/omni-components.js';
${((j=e==null?void 0:e.sourceParts)!=null&&j.jsFragment?typeof e.sourceParts.jsFragment=="function"?e.sourceParts.jsFragment(this.story.args):e.sourceParts.jsFragment:"").replaceAll("@capitec/omni-components",`https://cdn.jsdelivr.net/npm/@capitec/omni-components@${n}`).replace(new RegExp(`(https://cdn.jsdelivr.net/npm/@capitec/omni-components@${n}/)([^/"'\`]+)`,"g"),"$1dist/$2/index.js")}`;break;case o==="React":h=`
<html theme="${i!=null?i:"light"}">
    <body style="
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 24px;
    ">
        <div id="root"></div>
        ${((F=e==null?void 0:e.sourceParts)!=null&&F.htmlFragment?typeof e.sourceParts.htmlFragment=="function"?e.sourceParts.htmlFragment(this.story.args):e.sourceParts.htmlFragment:"").replaceAll("@capitec/omni-components-react",`https://cdn.jsdelivr.net/npm/@capitec/omni-components-react@${n}`).replace(new RegExp(`https://cdn.jsdelivr.net/npm/@capitec/omni-components-react@${n}/([^/"'\`]+)`,"g"),"$&/index.js")}
    </body>
</html>`,r=`
${((f=e==null?void 0:e.sourceParts)!=null&&f.jsFragment?typeof e.sourceParts.jsFragment=="function"?e.sourceParts.jsFragment(this.story.args):e.sourceParts.jsFragment:d).replaceAll("@capitec/omni-components-react",`https://cdn.jsdelivr.net/npm/@capitec/omni-components-react@${n}`).replace(new RegExp(`https://cdn.jsdelivr.net/npm/@capitec/omni-components-react@${n}/([^/"'\`]+)`,"g"),"$&/index.js")} 

const el = document.querySelector("#root");
ReactDOM.render(<App/>, el);`,m="babel",g="https://cdnjs.cloudflare.com/ajax/libs/react/16.7.0/umd/react.production.min.js;https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.7.0/umd/react-dom.production.min.js";break}let v={title:`${(Y=(k=this.key)!=null?k:(w=this.story)==null?void 0:w.name)!=null?Y:"Generated CodePen"} - ${o}`,description:((T=this.story)==null?void 0:T.description)&&typeof((ae=this.story)==null?void 0:ae.description)=="function"?this.story.description():(ce=this.story)==null?void 0:ce.description,private:!1,tags:[o,"Omni Components","web components","custom elements"],editors:"1011",layout:"top",html:h,html_pre_processor:"none",css:`${P}

${(le=e==null?void 0:e.sourceParts)!=null&&le.cssFragment?typeof e.sourceParts.cssFragment=="function"?e.sourceParts.cssFragment(this.story.args):e.sourceParts.cssFragment:""}`,css_pre_processor:"none",css_starter:"neither",css_prefix:"neither",js:r,js_pre_processor:m,head:`<link rel="stylesheet preload" href="https://fonts.googleapis.com/css?family=Hind Vadodara" as="style">
            <link rel="stylesheet preload" href="https://fonts.googleapis.com/icon?family=Material+Icons" as="style">`,js_external:g},S=`<form style="display: none;" action="https://codepen.io/pen/define" method="POST" target="_blank"> 
            <input type="hidden" name="data" value='${JSON.stringify(v).replace(/"/g,"&quot;").replace(/'/g,"&apos;")}'>
            <input type="submit" class="code-submit">
        </form>`,u=document.createElement("div");u.innerHTML=S,u.style.display="none",document.body.appendChild(u),u.querySelector(".code-submit").click(),document.body.removeChild(u)}_currentCodeTheme(){var o;return((o=this.theme)==null?void 0:o.toLowerCase())==="dark"?ue:he}};x([Z({type:String,reflect:!0})],C.prototype,"path",2),x([Z({type:String,reflect:!0})],C.prototype,"tag",2),x([Z({type:String,reflect:!0})],C.prototype,"key",2),x([Z({type:Boolean,reflect:!0})],C.prototype,"interactive",2),x([oe()],C.prototype,"_interactiveSrc",2),x([oe()],C.prototype,"_showStylesDialog",2),x([ee(".primary-source-code")],C.prototype,"codeEditor",2),x([ee(".secondary-js-source-code")],C.prototype,"secondaryCodeEditor",2),x([ee(".live-props")],C.prototype,"propertyEditor",2),C=x([ge("story-renderer")],C);var re="story-renderer-interactive-update";export{C as StoryRenderer};
//# sourceMappingURL=StoryRenderer.js.map
