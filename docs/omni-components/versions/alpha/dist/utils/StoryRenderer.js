import"../chunks-js/chunk.BY2PL4N3.js";import{a as te}from"../chunks-js/chunk.EQXGZ5KJ.js";import"../chunks-js/chunk.B2Y7HXQI.js";import"../chunks-js/chunk.FYHSNAQ7.js";import"../chunks-js/chunk.STJOQLHS.js";import"../chunks-js/chunk.UG7N6GYS.js";import"../chunks-js/chunk.FW2ICWR7.js";import{a as j}from"../chunks-js/chunk.K2UMXYHA.js";import"../chunks-js/chunk.WASXY5YJ.js";import"../chunks-js/chunk.E3RY574V.js";import"../chunks-js/chunk.WV2GEXQ2.js";import"../chunks-js/chunk.PJH7M65U.js";import{a as z}from"../chunks-js/chunk.G3QHRCKP.js";import{D as F,E as ee,a as U,b as G,c as K,d as W,e as Y,s as Z,t as Q}from"../chunks-js/chunk.Q7LXY37U.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.CFGXHLKC.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import{a as X,b as V,c as k,d as H}from"../chunks-js/chunk.S2K25ADN.js";import{b as m,d as S,f as N,g as J}from"../chunks-js/chunk.F6MIXR4E.js";import{a as q,j as d,m as B,p as D}from"../chunks-js/chunk.BF43NN75.js";B();D();var c=class extends J{constructor(){super(...arguments);this._sourceTab="HTML"}async connectedCallback(){var s;if(super.connectedCallback(),this.controller=new te(this,this.path),this.customCss=document.head.querySelector("#custom-css-vars"),!this.customCss){this.customCss=document.createElement("style"),this.customCss.id="custom-css-vars",document.head.appendChild(this.customCss);let t=sessionStorage.getItem(`custom-css-${this.tag}`);t&&(this.customCss.innerHTML=t)}this.modal||(this.modal=document.createElement("div"),document.body.appendChild(this.modal)),this.customElements=await Q();let e=Y(this.tag,this.customElements);this.cssVariables=Object.keys(e).filter(t=>e[t].subcategory==="Component Variables").map(t=>{let o=e[t];return q({name:t},o)}),document.addEventListener("omni-docs-theme-change",t=>{var i;this.theme=(i=getComputedStyle(document.documentElement).getPropertyValue("--code-editor-theme"))==null?void 0:i.trim();let o=this.renderRoot.querySelectorAll("code-editor");o&&o.forEach(r=>{r.updateExtensions()})}),document.addEventListener(O,()=>{this.requestUpdate()}),this.theme=(s=getComputedStyle(document.documentElement).getPropertyValue("--code-editor-theme"))==null?void 0:s.trim()}disconnectedCallback(){this.modal&&(document.body.removeChild(this.modal),this.modal=null)}render(){var r,l,h,u,$,y,b,x,_,R,I,P,g,A,T,L;if(!((r=this.controller)!=null&&r.story))return m`<omni-loading-icon style="max-height: 64px;"></omni-loading-icon>`;N(m`
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
                                ${(l=this.cssVariables)==null?void 0:l.sort((a,n)=>this._sortCssVariables(a,n)).map(a=>m`
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
        </div>`:S}
        `,this.modal),this.story=this.controller.story[this.key],this.story.originalArgs=($=(h=this.story)==null?void 0:h.originalArgs)!=null?$:JSON.parse(JSON.stringify((u=this.story)==null?void 0:u.args));let e=this.story.render(this.story.args),s=(y=this.story.frameworkSources)==null?void 0:y.find(a=>a.framework==="HTML"),t=s!=null&&s.load?s.load(this.story.args):F(e),o=(b=this.story.frameworkSources)==null?void 0:b.find(a=>a.framework==="React"),i=o!=null&&o.load?o.load(this.story.args):"";return m`
        <div class="story-description">
            ${((x=this.story)==null?void 0:x.description)&&typeof((_=this.story)==null?void 0:_.description)=="function"?this.story.description():(R=this.story)==null?void 0:R.description}
        </div>
        <div class="story">
            <div class="preview">
                <div class="item">
                <div class="${this.key}${this.interactive?" interactive-story":""}" .data=${this.story}>
                    ${this.overrideInteractive?z(this._interactiveSrc):e}
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
                        .data="${q({},this.story)}"
                        element="${this.tag}"
                        ignore-attributes="dir,lang"
                        @property-change="${async a=>{let n=a.detail,C=!1;(!n.oldValue||!n.newValue||typeof n.newValue!="string"&&JSON.stringify(n.oldValue).trim()!==JSON.stringify(n.newValue).trim()||n.oldValue.toString().trim()!==n.newValue.toString().trim())&&(C=!0),C&&(this.story.args[n.property]=n.newValue,this.requestUpdate(),this.dispatchEvent(new CustomEvent(O,{bubbles:!0,composed:!0})),await this.updateComplete,this.htmlCodeEditor&&await this.htmlCodeEditor.refresh(()=>{var v,f;return(f=(v=this.story.frameworkSources)==null?void 0:v.find(p=>p.framework==="HTML"))!=null&&f.load?this.story.frameworkSources.find(p=>p.framework==="HTML").load(this.story.args):F(this.story.render(this.story.args))}),this.reactCodeEditor&&await this.reactCodeEditor.refresh(()=>{var v,f;return(f=(v=this.story.frameworkSources)==null?void 0:v.find(p=>p.framework==="React"))!=null&&f.load?this.story.frameworkSources.find(p=>p.framework==="React").load(this.story.args):""}))}}"></live-property-editor>
                    </div>
                    `:S}
            </div>
            <!-- <div style="border-top: 1px solid #e1e1e1;max-width: 600px;"> -->
            <div class="code-block html-code ${this._sourceTab==="HTML"?"":"no-display"}">
                <code-editor
                class="source-code html-source-code"
                .transformSource="${a=>ee(a)}"
                .extensions="${async()=>[this._currentCodeTheme(),G(await Z())]}"
                .code="${j(t!=null?t:"")}"
                @codemirror-loaded="${a=>{let n=a.detail.source;this.originalInteractiveSrc=n,this._interactiveSrc=n}}"
                @codemirror-source-change="${a=>{let n=a.detail.source;this._interactiveSrc=n,this.overrideInteractive=this._interactiveSrc!==this.originalInteractiveSrc&&this._interactiveSrc!==t,this.requestUpdate(),this.dispatchEvent(new CustomEvent(O,{bubbles:!0,composed:!0}))}}"
                ?read-only="${!0}">
                </code-editor>
            </div>
            ${i?m`
            <div class="code-block react-code ${this._sourceTab==="React"?"":"no-display"}">
                <code-editor
                class="source-code react-source-code"
                .extensions="${async()=>[this._currentCodeTheme(),U({jsx:!0})]}"
                .code="${i}"
                read-only>
                </code-editor>
            </div>`:S}

            <div class="two-part">
            
                <div class="play-tests">
                    ${(I=this.story)!=null&&I.play?m`
                            <div style="display: flex;flex-direction: row;align-items: center;">
                            <omni-button
                                class="docs-omni-component"
                                ?disabled=${this.overrideInteractive||this._isBusyPlaying||JSON.stringify((P=this.story)==null?void 0:P.originalArgs).replaceAll(`
`,"").replaceAll("\\n","").replaceAll("	","").replaceAll(" ","")!==JSON.stringify((g=this.story)==null?void 0:g.args).replaceAll(`
`,"").replaceAll("\\n","").replaceAll("	","").replaceAll(" ","")}
                                @click="${()=>this._play(this.story,`.${this.key}`)}">
                                <omni-icon class="docs-omni-component" icon="@material/play_arrow"></omni-icon>
                            </omni-button>
                            <div class="${this.key+"-result"} success">
                                <span class="material-icons" style="color: #155724;">check</span>
                            </div>
                            </div>       
                    `:S}
                </div>     
                <div class="framework-toggles docs-omni-component">
                    ${i?m`
                                <div class="${this._sourceTab==="HTML"?"selected":""}" @click="${()=>this._sourceTab="HTML"}">
                                    <omni-icon class="docs-omni-component" size="default">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24">
                                            <title>HTML5 Logo Badge</title>
                                            <path fill="#E34F26" d="M71,460 L30,0 481,0 440,460 255,512"></path>
                                            <path fill="#EF652A" d="M256,472 L405,431 440,37 256,37"></path>
                                            <path fill="#EBEBEB" d="M256,208 L181,208 176,150 256,150 256,94 255,94 114,94 115,109 129,265 256,265zM256,355 L255,355 192,338 188,293 158,293 132,293 139,382 255,414 256,414z"></path>
                                            <path fill="#FFF" d="M255,208 L255,265 325,265 318,338 255,355 255,414 371,382 372,372 385,223 387,208 371,208zM255,94 L255,129 255,150 255,150 392,150 392,150 392,150 393,138 396,109 397,94z"></path>
                                        </svg>
                                    </omni-icon>
                                </div>
                                <div class="${this._sourceTab==="React"?"selected":""}" @click="${()=>this._sourceTab="React"}">
                                    <omni-icon class="docs-omni-component" size="default">
                                        <img style="height: 24px; width: 24px;" src="./assets/images/react.svg" alt="React" />
                                    </omni-icon>
                                </div>
                            `:S}
                    <div class="docs-omni-component codepen-gen-btn ${(T=(A=this.story.frameworkSources)==null?void 0:A.find(a=>a.framework===this._sourceTab))!=null&&T.disableCodePen?"no-display":""}" @click="${()=>this._generateCodePen(this._sourceTab,{React:i,HTML:t})}">
                        <omni-icon class="docs-omni-component" size="default">
                            <svg class="hidden-after-760" style="height: 12px; stroke: var(--omni-theme-font-color);" viewBox="0 0 138 26" fill="none" stroke="#fff" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" title="CodePen"><path d="M15 8a7 7 0 1 0 0 10m7-8.7L33 2l11 7.3v7.4L33 24l-11-7.3zm0 0 11 7.4 11-7.4m0 7.4L33 9.3l-11 7.4M33 2v7.3m0 7.4V24M52 6h5a7 7 0 0 1 0 14h-5zm28 0h-9v14h9m-9-7h6m11 1h6a4 4 0 0 0 0-8h-6v14m26-14h-9v14h9m-9-7h6m11 7V6l11 14V6"></path></svg>
                            <svg class="hidden-until-760" style="height: 24px; stroke: var(--omni-theme-font-color); background: var(--omni-theme-background-color);" xmlns="http://www.w3.org/2000/svg" aria-label="CodePen" role="img" viewBox="0 0 512 512"><g xmlns="http://www.w3.org/2000/svg" fill="none" stroke-width="33" stroke-linejoin="round"><path d="M81 198v116l175 117 175-117V198L256 81z"/><path d="M81 198l175 116 175-116M256 81v117"/><path d="M81 314l175-116 175 116M256 431V314"/></g></svg>
                        </omni-icon>
                    </div>
                </div>
            </div>
            ${(L=this.story)!=null&&L.play?m`
                <div class="${this.key+"-result"} failure">
                    <div class="play-tests-out">
                    <span class="material-icons" style="color: #721c24;">close</span>
                    <span style="margin-left: 8px;"><pre>${this._playError}</pre></span>
                    </div>
                </div>
                `:S}
        </div>
    `}handleCustomThemeCSSVariableSearch(e){var i;let s=(i=e.target.value)!=null?i:"",o=document.querySelector(`[data-target=custom-css-table-${this.tag}]`).children;for(let r=0;r<o.length;r++){let l=o[r];l.innerText&&l.innerText.toLowerCase().includes(s.toLowerCase())?l.classList.remove("hidden"):l.classList.add("hidden")}}renderCssVariable(e){var t;let s=(t=this.customCss)==null?void 0:t.sheet;if(e.name){let o;if((s==null?void 0:s.cssRules.length)===0){let i=s.insertRule(":root {}");o=s.cssRules.item(i)}else for(let i=0;i<s.cssRules.length;i++){let r=s.cssRules[i];if(r.selectorText===":root"){o=r;break}}return o&&(e.value=o.style.getPropertyValue(`--${e.name}`)),e.control==="color"?m`
                    <omni-color-field
                        class="css-prop docs-omni-component"
                        .value="${j(e.value)}"
                        @input="${async i=>{var u;let h=((u=i.target.shadowRoot)==null?void 0:u.getElementById("inputField")).value;e.value=h,this._cssChanged(e)}}">
                    </omni-color-field>
                  `:m`
                    <omni-text-field
                        class="css-prop docs-omni-component"
                        .value="${j(e.value)}"
                        @input="${async i=>{var h;let l=((h=i.target.shadowRoot)==null?void 0:h.getElementById("inputField")).value;e.value=l,this._cssChanged(e)}}">
                    </omni-text-field>
                  `}return S}createRenderRoot(){return this}_sortCssVariables(e,s){var i;let t=(i=this.customCss)==null?void 0:i.sheet,o;if((t==null?void 0:t.cssRules.length)===0){let r=t.insertRule(":root {}");o=t.cssRules.item(r)}else for(let r=0;r<t.cssRules.length;r++){let l=t==null?void 0:t.cssRules[r];if(l.selectorText===":root"){o=l;break}}return o&&(e.value=o.style.getPropertyValue(`--${e.name}`),s.value=o.style.getPropertyValue(`--${s.name}`)),e.value?s.value?0:-1:s.value?1:0}_cssChanged(e){var i;let s=(i=this.customCss)==null?void 0:i.sheet,t;if((s==null?void 0:s.cssRules.length)===0){let r=s.insertRule(":root {}");t=s.cssRules.item(r)}else for(let r=0;r<s.cssRules.length;r++){let l=s==null?void 0:s.cssRules[r];if(l.selectorText===":root"){t=l;break}}e.value?t&&t.style.setProperty(`--${e.name}`,e.value):t&&t.style.removeProperty(`--${e.name}`);let o=t.cssText;sessionStorage.setItem(`custom-css-${this.tag}`,o)}_showComponentStyles(){this._showStylesDialog=!0}_checkCloseModal(e){var t;let s=(t=this.modal)==null?void 0:t.querySelector("div.modal-container");e.composedPath().includes(s)||(this._showStylesDialog=!1)}async _resetLivePropertyEditor(){var s,t;this.story.args=JSON.parse(JSON.stringify((s=this.story)==null?void 0:s.originalArgs)),this.overrideInteractive=!1;let e=(t=this.customCss)==null?void 0:t.sheet;for(let o=0;o<e.cssRules.length;o++)if((e==null?void 0:e.cssRules[o]).selectorText===":root"){e==null||e.deleteRule(o);break}sessionStorage.removeItem(`custom-css-${this.tag}`),this.requestUpdate(),this.dispatchEvent(new CustomEvent(O,{bubbles:!0,composed:!0})),await this.updateComplete,this.htmlCodeEditor&&await this.htmlCodeEditor.refresh(()=>{var o,i;return(i=(o=this.story.frameworkSources)==null?void 0:o.find(r=>r.framework==="HTML"))!=null&&i.load?this.story.frameworkSources.find(r=>r.framework==="HTML").load(this.story.args):F(this.story.render(this.story.args))}),this.reactCodeEditor&&await this.reactCodeEditor.refresh(()=>{var o,i;return(i=(o=this.story.frameworkSources)==null?void 0:o.find(r=>r.framework==="React"))!=null&&i.load?this.story.frameworkSources.find(r=>r.framework==="React").load(this.story.args):""}),this.propertyEditor&&this.propertyEditor.resetSlots()}async _generateCodePen(e,s){var T,L,a,n,C,v,f,p;let t=s[e],o=((L=(T=document.getElementById("header-version-indicator"))==null?void 0:T.innerText)!=null?L:"").toLowerCase(),r=this.customElements.modules.find(M=>{var E;return(E=M.exports)==null?void 0:E.find(w=>w.name===this.tag)}).path.split("/"),l=r[r.length-2],h=o&&o!=="latest"&&o!=="local"?["alpha","beta","next"].includes(o)?`esm-${o}`:`${o}-esm`:"esm",u="",$="";for(let M=0;M<document.styleSheets.length;M++){let E=document.styleSheets[M];try{if(E.cssRules)for(let w=0;w<E.cssRules.length;w++){let se=E.cssRules[w];$+=`
        ${se.cssText}`}}catch(w){continue}}let y=document.documentElement.getAttribute("theme"),b="",x="none",_="";switch(e){case"HTML":u=`
<html theme="${y!=null?y:"light"}">
    <body>
        ${t}
    </body>
</html>`,b=`import 'https://cdn.jsdelivr.net/npm/@capitec/omni-components@${h}/dist/omni-components.js';`;break;case"React":u=`
<html theme="${y!=null?y:"light"}">
    <body style="
          text-align: center;
          padding: 24px;
    ">
        <div id="root"></div>
    </body>
</html>`,b=`
${t.replaceAll("@capitec/omni-components-react",`https://cdn.jsdelivr.net/npm/@capitec/omni-components-react@${h}`).replace(new RegExp(`https://cdn.jsdelivr.net/npm/@capitec/omni-components-react@${h}/([^/"'\`]+)`,"g"),"$&/index.js")} 

const el = document.querySelector("#root");
ReactDOM.render(<App/>, el);`,x="babel",_="https://cdnjs.cloudflare.com/ajax/libs/react/16.7.0/umd/react.production.min.js;https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.7.0/umd/react-dom.production.min.js";break}let R={title:`${(C=(n=this.key)!=null?n:(a=this.story)==null?void 0:a.name)!=null?C:"Generated CodePen"} - ${e}`,description:((v=this.story)==null?void 0:v.description)&&typeof((f=this.story)==null?void 0:f.description)=="function"?this.story.description():(p=this.story)==null?void 0:p.description,private:!1,tags:[e,"Omni Components","web components","custom elements"],editors:"1011",layout:"top",html:u,html_pre_processor:"none",css:$,css_pre_processor:"none",css_starter:"neither",css_prefix:"neither",js:b,js_pre_processor:x,head:`<link rel="stylesheet preload" href="https://fonts.googleapis.com/css?family=Hind Vadodara" as="style">
            <link rel="stylesheet preload" href="https://fonts.googleapis.com/icon?family=Material+Icons" as="style">`,js_external:_},P=`<form style="display: none;" action="https://codepen.io/pen/define" method="POST" target="_blank"> 
            <input type="hidden" name="data" value='${JSON.stringify(R).replace(/"/g,"&quot;").replace(/'/g,"&apos;")}'>
            <input type="submit" class="code-submit">
        </form>`,g=document.createElement("div");g.innerHTML=P,g.style.display="none",document.body.appendChild(g),g.querySelector(".code-submit").click(),document.body.removeChild(g)}async _play(e,s){var t,o,i;try{if(!e.play)return;this._isBusyPlaying=!0;let r=this._createStoryContext(e,s);await e.play(r),this.querySelector(s+"-result.success").style.display="flex",this.querySelector(s+"-result.failure").style.display="none"}catch(r){this.querySelector(s+"-result.failure").style.display="flex",this.querySelector(s+"-result.success").style.display="none",this._playError=(i=(o=(t=r==null?void 0:r.matcherResult)==null?void 0:t.message)!=null?o:r==null?void 0:r.message)==null?void 0:i.toString().replace(/\u001b[^m]*?m/g,"").replace(/\n \u001b[^m]*?m/g,"").replace(/\u001b[^m]*?m\n/g,"").replace(/\n\u001b[^m]*?m/g,"")}finally{this._isBusyPlaying=!1}}_createStoryContext(e,s){return{story:e,args:e.args,canvasElement:this.querySelector(s)}}_currentCodeTheme(){var e;return((e=this.theme)==null?void 0:e.toLowerCase())==="dark"?K:W}};d([V({type:String,reflect:!0})],c.prototype,"path",2),d([V({type:String,reflect:!0})],c.prototype,"tag",2),d([V({type:String,reflect:!0})],c.prototype,"key",2),d([V({type:Boolean,reflect:!0})],c.prototype,"interactive",2),d([k()],c.prototype,"_interactiveSrc",2),d([k()],c.prototype,"_isBusyPlaying",2),d([k()],c.prototype,"_playError",2),d([k()],c.prototype,"_showStylesDialog",2),d([k()],c.prototype,"_sourceTab",2),d([H(".html-source-code")],c.prototype,"htmlCodeEditor",2),d([H(".react-source-code")],c.prototype,"reactCodeEditor",2),d([H(".live-props")],c.prototype,"propertyEditor",2),c=d([X("story-renderer")],c);var O="story-renderer-interactive-update";export{c as StoryRenderer};
//# sourceMappingURL=StoryRenderer.js.map
