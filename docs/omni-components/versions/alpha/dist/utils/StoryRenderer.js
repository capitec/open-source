import{a as oe}from"../chunks-js/chunk.EQXGZ5KJ.js";import"../chunks-js/chunk.HAPBJREQ.js";import"../chunks-js/chunk.WUGGBYKL.js";import"../chunks-js/chunk.7GTL3UTF.js";import"../chunks-js/chunk.STJOQLHS.js";import"../chunks-js/chunk.5TKLJSC4.js";import"../chunks-js/chunk.4HVUB6KJ.js";import{a as F}from"../chunks-js/chunk.K2UMXYHA.js";import"../chunks-js/chunk.I3LVDBCB.js";import"../chunks-js/chunk.E3RY574V.js";import"../chunks-js/chunk.XGCBNSF2.js";import"../chunks-js/chunk.V3AH72NQ.js";import{E as A,F as se,a as K,b as G,c as W,d as X,e as Z,f as Q,t as ee,u as te}from"../chunks-js/chunk.WI5F3R4J.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.ZPV4YWBP.js";import"../chunks-js/chunk.6QCQBNRL.js";import"../chunks-js/chunk.32OT4JFD.js";import"../chunks-js/chunk.B6SUKNHE.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import{a as Y,b as R,c as P,d as O}from"../chunks-js/chunk.S2K25ADN.js";import{b as h,d as C,f as U,g as z}from"../chunks-js/chunk.F6MIXR4E.js";import{a as N,j as m,m as J,p as B}from"../chunks-js/chunk.BF43NN75.js";J();B();var c=class extends z{async connectedCallback(){var t;if(super.connectedCallback(),this.controller=new oe(this,this.path),this.customCss=document.head.querySelector("#custom-css-vars"),!this.customCss){this.customCss=document.createElement("style"),this.customCss.id="custom-css-vars",document.head.appendChild(this.customCss);let o=sessionStorage.getItem(`custom-css-${this.tag}`);o&&(this.customCss.innerHTML=o)}this.modal||(this.modal=document.createElement("div"),document.body.appendChild(this.modal)),this.customElements=await te();let e=Q(this.tag,this.customElements);this.cssVariables=Object.keys(e).filter(o=>e[o].subcategory==="Component Variables").map(o=>{let r=e[o];return N({name:o},r)}),document.addEventListener("omni-docs-theme-change",o=>{var i;this.theme=(i=getComputedStyle(document.documentElement).getPropertyValue("--code-editor-theme"))==null?void 0:i.trim();let r=this.renderRoot.querySelectorAll("code-editor");r&&r.forEach(s=>{s.updateExtensions()})}),document.addEventListener(I,()=>{this.requestUpdate()}),this.theme=(t=getComputedStyle(document.documentElement).getPropertyValue("--code-editor-theme"))==null?void 0:t.trim()}disconnectedCallback(){this.modal&&(document.body.removeChild(this.modal),this.modal=null)}updated(e){var t;super.updated(e),(t=window.Prism)==null||t.highlightAll()}render(){var l,d,y,b,g,w,E,k,H,q,j,v,D,$,x,_,M,T,L,V;if(!((l=this.controller)!=null&&l.story))return h`<omni-loading-icon style="max-height: 64px;"></omni-loading-icon>`;U(h`
        ${this._showStylesDialog?h`
          <div class="modal" role="dialog" aria-modal="true"
            @click="${n=>this._checkCloseModal(n)}" @touch="${n=>this._checkCloseModal(n)}">
            <div class="modal-container">
                <div class="modal-body">
                    <div class="docs-search-area">
                        <omni-search-field class="css-category" @input="${n=>this.handleCustomThemeCSSVariableSearch(n)}" @change="${n=>this.handleCustomThemeCSSVariableSearch(n)}"></omni-search-field>
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
                                ${(d=this.cssVariables)==null?void 0:d.sort((n,a)=>this._sortCssVariables(n,a)).map(n=>h`
                                    <tr>
                                        <td data-label="Name" scope="row"><pre><code class="language-css">--${n.name}</code></pre></td>
                                        <td data-label="Description">${n.description}</td>
                                        <td data-label="Override Value">${this.renderCssVariable(n)}</td>
                                    </tr>
                                `)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>`:C}
        `,this.modal),this.story=this.controller.story[this.key],this.story.originalArgs=(g=(y=this.story)==null?void 0:y.originalArgs)!=null?g:JSON.parse(JSON.stringify((b=this.story)==null?void 0:b.args));let e=this.story.render(this.story.args),t=(w=this.story.frameworkSources)==null?void 0:w.find(n=>n.framework==="HTML"),o=t!=null&&t.load?t.load(this.story.args):A(e),r=(E=this.story.frameworkSources)==null?void 0:E.find(n=>n.framework==="React"),i=r!=null&&r.load?r.load(this.story.args):"",s=(k=window.localStorage.getItem(Z))!=null?k:"HTML";return h`
        <div class="story-description">
            ${((H=this.story)==null?void 0:H.description)&&typeof((q=this.story)==null?void 0:q.description)=="function"?this.story.description():(j=this.story)==null?void 0:j.description}
        </div>
        <div class="story">
            <div class="preview">
                <div class="item">
                <div class="${this.key}${this.interactive?" interactive-story":""}" .data=${this.story}>
                    ${e}
                </div>
                </div>

                ${this.interactive?h`
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
                        .data="${N({},this.story)}"
                        element="${this.tag}"
                        ignore-attributes="dir,lang"
                        @property-change="${async n=>{let a=n.detail,u=!1;(!a.oldValue||!a.newValue||typeof a.newValue!="string"&&JSON.stringify(a.oldValue).trim()!==JSON.stringify(a.newValue).trim()||a.oldValue.toString().trim()!==a.newValue.toString().trim())&&(u=!0),u&&(this.story.args[a.property]=a.newValue,this.requestUpdate(),this.dispatchEvent(new CustomEvent(I,{bubbles:!0,composed:!0})),await this.updateComplete,this.htmlCodeEditor&&await this.htmlCodeEditor.refresh(()=>{var p,f;return(f=(p=this.story.frameworkSources)==null?void 0:p.find(S=>S.framework==="HTML"))!=null&&f.load?this.story.frameworkSources.find(S=>S.framework==="HTML").load(this.story.args):A(this.story.render(this.story.args))}),this.reactCodeEditor&&await this.reactCodeEditor.refresh(()=>{var p,f;return(f=(p=this.story.frameworkSources)==null?void 0:p.find(S=>S.framework==="React"))!=null&&f.load?this.story.frameworkSources.find(S=>S.framework==="React").load(this.story.args):""}))}}"></live-property-editor>
                    </div>
                    `:C}
            </div>
            <!-- <div style="border-top: 1px solid #e1e1e1;max-width: 600px;"> -->
            <div class="code-block html-code ${s==="HTML"?"":"no-display"}">
                <code-editor
                class="source-code html-source-code"
                .transformSource="${n=>se(n)}"
                .extensions="${async()=>[this._currentCodeTheme(),G(await ee())]}"
                .code="${F(o!=null?o:"")}"
                @codemirror-loaded="${n=>{let a=n.detail.source;this.originalInteractiveSrc=a,this._interactiveSrc=a}}"
                @codemirror-source-change="${n=>{let a=n.detail.source;this._interactiveSrc=a,this.overrideInteractive=this._interactiveSrc!==this.originalInteractiveSrc&&this._interactiveSrc!==o,this.requestUpdate(),this.dispatchEvent(new CustomEvent(I,{bubbles:!0,composed:!0}))}}"
                ?read-only="${!0}">
                </code-editor>
            </div>
            ${i?h`
            <div class="code-block react-code ${s==="React"?"":"no-display"}">
                <code-editor
                class="source-code react-source-code"
                .extensions="${async()=>[this._currentCodeTheme(),K({jsx:!0})]}"
                .code="${i}"
                read-only>
                </code-editor>
            </div>`:C}

            <div class="two-part ${!((v=this.story)!=null&&v.play)&&(($=(D=this.story.frameworkSources)==null?void 0:D.find(n=>n.framework===s))==null?void 0:$.disableCodePen)&&!i?"no-display":""}">
            
                <div class="play-tests">
                    ${(x=this.story)!=null&&x.play?h`
                            <div style="display: flex;flex-direction: row;align-items: center;">
                            <omni-button
                                class="docs-omni-component"
                                ?disabled=${this.overrideInteractive||this._isBusyPlaying||JSON.stringify((_=this.story)==null?void 0:_.originalArgs).replaceAll(`
`,"").replaceAll("\\n","").replaceAll("	","").replaceAll(" ","")!==JSON.stringify((M=this.story)==null?void 0:M.args).replaceAll(`
`,"").replaceAll("\\n","").replaceAll("	","").replaceAll(" ","")}
                                @click="${()=>this._play(this.story,`.${this.key}`)}">
                                <omni-icon class="docs-omni-component" icon="@material/play_arrow"></omni-icon>
                            </omni-button>
                            <div class="${this.key+"-result"} success">
                                <span class="material-icons" style="color: #155724;">check</span>
                            </div>
                            </div>       
                    `:C}
                </div>     
                <div class="framework-toggles docs-omni-component">                    
                    <div class="docs-omni-component codepen-gen-btn ${((L=(T=this.story.frameworkSources)==null?void 0:T.find(n=>n.framework===s))==null?void 0:L.disableCodePen)||s!=="HTML"&&this.interactive?"no-display":""}" @click="${()=>this._generateCodePen(s,{React:i,HTML:o})}">
                        <omni-icon class="docs-omni-component" size="default">
                            <svg class="hidden-after-760" style="height: 12px; stroke: var(--omni-theme-font-color);" viewBox="0 0 138 26" fill="none" stroke="#fff" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" title="CodePen"><path d="M15 8a7 7 0 1 0 0 10m7-8.7L33 2l11 7.3v7.4L33 24l-11-7.3zm0 0 11 7.4 11-7.4m0 7.4L33 9.3l-11 7.4M33 2v7.3m0 7.4V24M52 6h5a7 7 0 0 1 0 14h-5zm28 0h-9v14h9m-9-7h6m11 1h6a4 4 0 0 0 0-8h-6v14m26-14h-9v14h9m-9-7h6m11 7V6l11 14V6"></path></svg>
                            <svg class="hidden-until-760" style="height: 24px; stroke: var(--omni-theme-font-color); background: var(--omni-theme-background-color);" xmlns="http://www.w3.org/2000/svg" aria-label="CodePen" role="img" viewBox="0 0 512 512"><g xmlns="http://www.w3.org/2000/svg" fill="none" stroke-width="33" stroke-linejoin="round"><path d="M81 198v116l175 117 175-117V198L256 81z"/><path d="M81 198l175 116 175-116M256 81v117"/><path d="M81 314l175-116 175 116M256 431V314"/></g></svg>
                        </omni-icon>
                    </div>
                </div>
            </div>
            ${(V=this.story)!=null&&V.play?h`
                <div class="${this.key+"-result"} failure">
                    <div class="play-tests-out">
                    <span class="material-icons" style="color: #721c24;">close</span>
                    <span style="margin-left: 8px;"><pre>${this._playError}</pre></span>
                    </div>
                </div>
                `:C}
        </div>
    `}handleCustomThemeCSSVariableSearch(e){var i;let t=(i=e.target.value)!=null?i:"",r=document.querySelector(`[data-target=custom-css-table-${this.tag}]`).children;for(let s=0;s<r.length;s++){let l=r[s];l.innerText&&l.innerText.toLowerCase().includes(t.toLowerCase())?l.classList.remove("hidden"):l.classList.add("hidden")}}renderCssVariable(e){var o;let t=(o=this.customCss)==null?void 0:o.sheet;if(e.name){let r;if((t==null?void 0:t.cssRules.length)===0){let i=t.insertRule(":root {}");r=t.cssRules.item(i)}else for(let i=0;i<t.cssRules.length;i++){let s=t.cssRules[i];if(s.selectorText===":root"){r=s;break}}return r&&(e.value=r.style.getPropertyValue(`--${e.name}`)),e.control==="color"?h`
                    <omni-color-field
                        class="css-prop docs-omni-component"
                        .value="${F(e.value)}"
                        @input="${async i=>{var y;let d=((y=i.target.shadowRoot)==null?void 0:y.getElementById("inputField")).value;e.value=d,this._cssChanged(e)}}">
                    </omni-color-field>
                  `:h`
                    <omni-text-field
                        class="css-prop docs-omni-component"
                        .value="${F(e.value)}"
                        @input="${async i=>{var d;let l=((d=i.target.shadowRoot)==null?void 0:d.getElementById("inputField")).value;e.value=l,this._cssChanged(e)}}">
                    </omni-text-field>
                  `}return C}createRenderRoot(){return this}_sortCssVariables(e,t){var i;let o=(i=this.customCss)==null?void 0:i.sheet,r;if((o==null?void 0:o.cssRules.length)===0){let s=o.insertRule(":root {}");r=o.cssRules.item(s)}else for(let s=0;s<o.cssRules.length;s++){let l=o==null?void 0:o.cssRules[s];if(l.selectorText===":root"){r=l;break}}return r&&(e.value=r.style.getPropertyValue(`--${e.name}`),t.value=r.style.getPropertyValue(`--${t.name}`)),e.value?t.value?0:-1:t.value?1:0}_cssChanged(e){var i;let t=(i=this.customCss)==null?void 0:i.sheet,o;if((t==null?void 0:t.cssRules.length)===0){let s=t.insertRule(":root {}");o=t.cssRules.item(s)}else for(let s=0;s<t.cssRules.length;s++){let l=t==null?void 0:t.cssRules[s];if(l.selectorText===":root"){o=l;break}}e.value?o&&o.style.setProperty(`--${e.name}`,e.value):o&&o.style.removeProperty(`--${e.name}`);let r=o.cssText;sessionStorage.setItem(`custom-css-${this.tag}`,r)}_showComponentStyles(){this._showStylesDialog=!0}_checkCloseModal(e){var o;let t=(o=this.modal)==null?void 0:o.querySelector("div.modal-container");e.composedPath().includes(t)||(this._showStylesDialog=!1)}async _resetLivePropertyEditor(){var t,o;this.story.args=JSON.parse(JSON.stringify((t=this.story)==null?void 0:t.originalArgs)),this.overrideInteractive=!1;let e=(o=this.customCss)==null?void 0:o.sheet;for(let r=0;r<e.cssRules.length;r++)if((e==null?void 0:e.cssRules[r]).selectorText===":root"){e==null||e.deleteRule(r);break}sessionStorage.removeItem(`custom-css-${this.tag}`),this.requestUpdate(),this.dispatchEvent(new CustomEvent(I,{bubbles:!0,composed:!0})),await this.updateComplete,this.htmlCodeEditor&&await this.htmlCodeEditor.refresh(()=>{var r,i;return(i=(r=this.story.frameworkSources)==null?void 0:r.find(s=>s.framework==="HTML"))!=null&&i.load?this.story.frameworkSources.find(s=>s.framework==="HTML").load(this.story.args):A(this.story.render(this.story.args))}),this.reactCodeEditor&&await this.reactCodeEditor.refresh(()=>{var r,i;return(i=(r=this.story.frameworkSources)==null?void 0:r.find(s=>s.framework==="React"))!=null&&i.load?this.story.frameworkSources.find(s=>s.framework==="React").load(this.story.args):""}),this.propertyEditor&&this.propertyEditor.resetSlots()}async _generateCodePen(e,t){var $,x,_,M,T,L,V,n;let o=t[e],r=((x=($=document.getElementById("header-version-indicator"))==null?void 0:$.innerText)!=null?x:"").toLowerCase(),s=this.customElements.modules.find(a=>{var u;return(u=a.exports)==null?void 0:u.find(p=>p.name===this.tag)}).path.split("/"),l=s[s.length-2],d=r&&r!=="latest"&&r!=="local"?["alpha","beta","next"].includes(r)?`esm-${r}`:`${r}-esm`:"esm",y="",b="";for(let a=0;a<document.styleSheets.length;a++){let u=document.styleSheets[a];try{if(u.cssRules)for(let p=0;p<u.cssRules.length;p++){let f=u.cssRules[p];b+=`
        ${f.cssText}`}}catch(p){continue}}let g=document.documentElement.getAttribute("theme"),w="",E="none",k="";switch(e){case"HTML":y=`
<html theme="${g!=null?g:"light"}">
    <body style="
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 24px;
    ">
        ${o.replaceAll("@capitec/omni-components",`https://cdn.jsdelivr.net/npm/@capitec/omni-components@${d}`).replace(new RegExp(`(https://cdn.jsdelivr.net/npm/@capitec/omni-components@${d}/)([^/"'\`]+)`,"g"),"$1dist/$2/index.js")}
    </body>
</html>`,w=`import 'https://cdn.jsdelivr.net/npm/@capitec/omni-components@${d}/dist/omni-components.js';`;break;case"React":y=`
<html theme="${g!=null?g:"light"}">
    <body style="
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 24px;
    ">
        <div id="root"></div>
    </body>
</html>`,w=`
${o.replaceAll("@capitec/omni-components-react",`https://cdn.jsdelivr.net/npm/@capitec/omni-components-react@${d}`).replace(new RegExp(`https://cdn.jsdelivr.net/npm/@capitec/omni-components-react@${d}/([^/"'\`]+)`,"g"),"$&/index.js")} 

const el = document.querySelector("#root");
ReactDOM.render(<App/>, el);`,E="babel",k="https://cdnjs.cloudflare.com/ajax/libs/react/16.7.0/umd/react.production.min.js;https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.7.0/umd/react-dom.production.min.js";break}let H={title:`${(T=(M=this.key)!=null?M:(_=this.story)==null?void 0:_.name)!=null?T:"Generated CodePen"} - ${e}`,description:((L=this.story)==null?void 0:L.description)&&typeof((V=this.story)==null?void 0:V.description)=="function"?this.story.description():(n=this.story)==null?void 0:n.description,private:!1,tags:[e,"Omni Components","web components","custom elements"],editors:"1011",layout:"top",html:y,html_pre_processor:"none",css:b,css_pre_processor:"none",css_starter:"neither",css_prefix:"neither",js:w,js_pre_processor:E,head:`<link rel="stylesheet preload" href="https://fonts.googleapis.com/css?family=Hind Vadodara" as="style">
            <link rel="stylesheet preload" href="https://fonts.googleapis.com/icon?family=Material+Icons" as="style">`,js_external:k},j=`<form style="display: none;" action="https://codepen.io/pen/define" method="POST" target="_blank"> 
            <input type="hidden" name="data" value='${JSON.stringify(H).replace(/"/g,"&quot;").replace(/'/g,"&apos;")}'>
            <input type="submit" class="code-submit">
        </form>`,v=document.createElement("div");v.innerHTML=j,v.style.display="none",document.body.appendChild(v),v.querySelector(".code-submit").click(),document.body.removeChild(v)}async _play(e,t){var o,r,i;try{if(!e.play)return;this._isBusyPlaying=!0;let s=this._createStoryContext(e,t);await e.play(s),this.querySelector(t+"-result.success").style.display="flex",this.querySelector(t+"-result.failure").style.display="none"}catch(s){this.querySelector(t+"-result.failure").style.display="flex",this.querySelector(t+"-result.success").style.display="none",this._playError=(i=(r=(o=s==null?void 0:s.matcherResult)==null?void 0:o.message)!=null?r:s==null?void 0:s.message)==null?void 0:i.toString().replace(/\u001b[^m]*?m/g,"").replace(/\n \u001b[^m]*?m/g,"").replace(/\u001b[^m]*?m\n/g,"").replace(/\n\u001b[^m]*?m/g,"")}finally{this._isBusyPlaying=!1}}_createStoryContext(e,t){return{story:e,args:e.args,canvasElement:this.querySelector(t)}}_currentCodeTheme(){var e;return((e=this.theme)==null?void 0:e.toLowerCase())==="dark"?W:X}};m([R({type:String,reflect:!0})],c.prototype,"path",2),m([R({type:String,reflect:!0})],c.prototype,"tag",2),m([R({type:String,reflect:!0})],c.prototype,"key",2),m([R({type:Boolean,reflect:!0})],c.prototype,"interactive",2),m([P()],c.prototype,"_interactiveSrc",2),m([P()],c.prototype,"_isBusyPlaying",2),m([P()],c.prototype,"_playError",2),m([P()],c.prototype,"_showStylesDialog",2),m([O(".html-source-code")],c.prototype,"htmlCodeEditor",2),m([O(".react-source-code")],c.prototype,"reactCodeEditor",2),m([O(".live-props")],c.prototype,"propertyEditor",2),c=m([Y("story-renderer")],c);var I="story-renderer-interactive-update";export{c as StoryRenderer};
//# sourceMappingURL=StoryRenderer.js.map
