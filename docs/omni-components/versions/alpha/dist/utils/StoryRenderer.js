import"../chunks-js/chunk.BY2PL4N3.js";import{a as Q}from"../chunks-js/chunk.EQXGZ5KJ.js";import"../chunks-js/chunk.B2Y7HXQI.js";import"../chunks-js/chunk.FYHSNAQ7.js";import"../chunks-js/chunk.STJOQLHS.js";import"../chunks-js/chunk.UG7N6GYS.js";import"../chunks-js/chunk.FW2ICWR7.js";import{a as P}from"../chunks-js/chunk.K2UMXYHA.js";import"../chunks-js/chunk.WASXY5YJ.js";import"../chunks-js/chunk.E3RY574V.js";import"../chunks-js/chunk.WV2GEXQ2.js";import"../chunks-js/chunk.PJH7M65U.js";import{a as J}from"../chunks-js/chunk.G3QHRCKP.js";import{D as H,E as Z,a as B,b as U,c as z,d as G,e as W,s as X,t as Y}from"../chunks-js/chunk.Q7LXY37U.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.CFGXHLKC.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import{a as K,b as M,c as E,d as R}from"../chunks-js/chunk.S2K25ADN.js";import{b as h,d as S,f as D,g as N}from"../chunks-js/chunk.F6MIXR4E.js";import{a as I,j as m,m as q,p as A}from"../chunks-js/chunk.BF43NN75.js";q();A();var c=class extends N{constructor(){super(...arguments);this._sourceTab="HTML"}async connectedCallback(){var s;if(super.connectedCallback(),this.controller=new Q(this,this.path),this.customCss=document.head.querySelector("#custom-css-vars"),!this.customCss){this.customCss=document.createElement("style"),this.customCss.id="custom-css-vars",document.head.appendChild(this.customCss);let t=sessionStorage.getItem(`custom-css-${this.tag}`);t&&(this.customCss.innerHTML=t)}this.modal||(this.modal=document.createElement("div"),document.body.appendChild(this.modal)),this.customElements=await Y();let e=W(this.tag,this.customElements);this.cssVariables=Object.keys(e).filter(t=>e[t].subcategory==="Component Variables").map(t=>{let o=e[t];return I({name:t},o)}),document.addEventListener("omni-docs-theme-change",t=>{var i;this.theme=(i=getComputedStyle(document.documentElement).getPropertyValue("--code-editor-theme"))==null?void 0:i.trim();let o=this.renderRoot.querySelectorAll("code-editor");o&&o.forEach(r=>{r.updateExtensions()})}),document.addEventListener(j,()=>{this.requestUpdate()}),this.theme=(s=getComputedStyle(document.documentElement).getPropertyValue("--code-editor-theme"))==null?void 0:s.trim()}disconnectedCallback(){this.modal&&(document.body.removeChild(this.modal),this.modal=null)}render(){var r,l,u,y,k,v,b,$,x,L,O,V,g,F,_,T;if(!((r=this.controller)!=null&&r.story))return h`<omni-loading-icon style="max-height: 64px;"></omni-loading-icon>`;D(h`
        ${this._showStylesDialog?h`
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
                                ${(l=this.cssVariables)==null?void 0:l.sort((a,n)=>this._sortCssVariables(a,n)).map(a=>h`
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
        `,this.modal),this.story=this.controller.story[this.key],this.story.originalArgs=(k=(u=this.story)==null?void 0:u.originalArgs)!=null?k:JSON.parse(JSON.stringify((y=this.story)==null?void 0:y.args));let e=this.story.render(this.story.args),s=(v=this.story.frameworkSources)==null?void 0:v.find(a=>a.framework==="HTML"),t=s!=null&&s.load?s.load(this.story.args):H(e),o=(b=this.story.frameworkSources)==null?void 0:b.find(a=>a.framework==="React"),i=o!=null&&o.load?o.load(this.story.args):"";return h`
        <div class="story-description">
            ${(($=this.story)==null?void 0:$.description)&&typeof((x=this.story)==null?void 0:x.description)=="function"?this.story.description():(L=this.story)==null?void 0:L.description}
        </div>
        <div class="story">
            <div class="preview">
                <div class="item">
                <div class="${this.key}${this.interactive?" interactive-story":""}" .data=${this.story}>
                    ${this.overrideInteractive?J(this._interactiveSrc):e}
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
                        .data="${I({},this.story)}"
                        element="${this.tag}"
                        ignore-attributes="dir,lang"
                        @property-change="${async a=>{let n=a.detail,C=!1;(!n.oldValue||!n.newValue||typeof n.newValue!="string"&&JSON.stringify(n.oldValue).trim()!==JSON.stringify(n.newValue).trim()||n.oldValue.toString().trim()!==n.newValue.toString().trim())&&(C=!0),C&&(this.story.args[n.property]=n.newValue,this.requestUpdate(),this.dispatchEvent(new CustomEvent(j,{bubbles:!0,composed:!0})),await this.updateComplete,this.htmlCodeEditor&&await this.htmlCodeEditor.refresh(()=>{var f,p;return(p=(f=this.story.frameworkSources)==null?void 0:f.find(d=>d.framework==="HTML"))!=null&&p.load?this.story.frameworkSources.find(d=>d.framework==="HTML").load(this.story.args):H(this.story.render(this.story.args))}),this.reactCodeEditor&&await this.reactCodeEditor.refresh(()=>{var f,p;return(p=(f=this.story.frameworkSources)==null?void 0:f.find(d=>d.framework==="React"))!=null&&p.load?this.story.frameworkSources.find(d=>d.framework==="React").load(this.story.args):""}))}}"></live-property-editor>
                    </div>
                    `:S}
            </div>
            <!-- <div style="border-top: 1px solid #e1e1e1;max-width: 600px;"> -->
            <div class="code-block html-code ${this._sourceTab==="HTML"?"":"no-display"}">
                <code-editor
                class="source-code html-source-code"
                .transformSource="${a=>Z(a)}"
                .extensions="${async()=>[this._currentCodeTheme(),U(await X())]}"
                .code="${P(t!=null?t:"")}"
                @codemirror-loaded="${a=>{let n=a.detail.source;this.originalInteractiveSrc=n,this._interactiveSrc=n}}"
                @codemirror-source-change="${a=>{let n=a.detail.source;this._interactiveSrc=n,this.overrideInteractive=this._interactiveSrc!==this.originalInteractiveSrc&&this._interactiveSrc!==t,this.requestUpdate(),this.dispatchEvent(new CustomEvent(j,{bubbles:!0,composed:!0}))}}"
                ?read-only="${!0}">
                </code-editor>
            </div>
            ${i?h`
            <div class="code-block react-code ${this._sourceTab==="React"?"":"no-display"}">
                <code-editor
                class="source-code react-source-code"
                .extensions="${async()=>[this._currentCodeTheme(),B({jsx:!0})]}"
                .code="${i}"
                read-only>
                </code-editor>
            </div>`:S}

            <div class="two-part">
            
                <div class="play-tests">
                    ${(O=this.story)!=null&&O.play?h`
                            <div style="display: flex;flex-direction: row;align-items: center;">
                            <omni-button
                                class="docs-omni-component"
                                label="Test"
                                slot-position="left"
                                ?disabled=${this.overrideInteractive||this._isBusyPlaying||JSON.stringify((V=this.story)==null?void 0:V.originalArgs).replaceAll(`
`,"").replaceAll("\\n","").replaceAll("	","").replaceAll(" ","")!==JSON.stringify((g=this.story)==null?void 0:g.args).replaceAll(`
`,"").replaceAll("\\n","").replaceAll("	","").replaceAll(" ","")}
                                @click="${()=>this._play(this.story,`.${this.key}`)}">
                                <omni-icon class="docs-omni-component" icon="@material/play_arrow" style="margin-right: 8px;"></omni-icon>
                            </omni-button>
                            <div class="${this.key+"-result"} success">
                                <span class="material-icons" style="color: #155724;">check</span>
                                <span class="hidden-after-760" style="margin-left: 8px;">Passed</span>
                            </div>
                            </div>       
                    `:S}
                </div>     
                <div class="framework-toggles docs-omni-component">
                    ${i?h`
                                <omni-button type="${this._sourceTab==="HTML"?"primary":"secondary"}" @click="${()=>this._sourceTab="HTML"}">
                                    <div>
                                        <svg class="hidden-until-760" style="height: 24px; width: 24px; color: var(--omni-theme-font-color); fill: currentColor;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <title>HTML5 Logo</title>
                                            <path d="M108.4 0h23v22.8h21.2V0h23v69h-23V46h-21v23h-23.2M206 23h-20.3V0h63.7v23H229v46h-23M259.5 0h24.1l14.8 24.3L313.2 0h24.1v69h-23V34.8l-16.1 24.8l-16.1-24.8v34.2h-22.6M348.7 0h23v46.2h32.6V69h-55.6"/>
                                            <path fill="#e44d26" d="M107.6 471l-33-370.4h362.8l-33 370.2L255.7 512"/>
                                            <path fill="#f16529" d="M256 480.5V131H404.3L376 447"/>
                                            <path fill="#ebebeb" d="M142 176.3h114v45.4h-64.2l4.2 46.5h60v45.3H154.4M156.4 336.3H202l3.2 36.3 50.8 13.6v47.4l-93.2-26"/>
                                            <path fill="#fff" d="M369.6 176.3H255.8v45.4h109.6M361.3 268.2H255.8v45.4h56l-5.3 59-50.7 13.6v47.2l93-25.8"/>
                                        </svg>
                                        <div class="hidden-after-760">
                                            HTML
                                        </div>  
                                    </div>  
                                </omni-button>
                                <omni-button type="${this._sourceTab==="React"?"primary":"secondary"}" @click="${()=>this._sourceTab="React"}">
                                    <div>
                                        <img class="hidden-until-760" style="height: 24px; width: 24px;" src="./assets/images/react.svg" alt="React" />
                                        <div class="hidden-after-760">
                                            React
                                        </div>  
                                    </div>  
                                </omni-button>
                            `:S}
                    <div class="docs-omni-component codepen-gen-btn ${(_=(F=this.story.frameworkSources)==null?void 0:F.find(a=>a.framework===this._sourceTab))!=null&&_.disableCodePen?"no-display":""}" @click="${()=>this._generateCodePen(this._sourceTab,{React:i,HTML:t})}">
                        <svg class="hidden-after-760" style="height: 12px; stroke: var(--omni-theme-font-color);" viewBox="0 0 138 26" fill="none" stroke="#fff" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" title="CodePen"><path d="M15 8a7 7 0 1 0 0 10m7-8.7L33 2l11 7.3v7.4L33 24l-11-7.3zm0 0 11 7.4 11-7.4m0 7.4L33 9.3l-11 7.4M33 2v7.3m0 7.4V24M52 6h5a7 7 0 0 1 0 14h-5zm28 0h-9v14h9m-9-7h6m11 1h6a4 4 0 0 0 0-8h-6v14m26-14h-9v14h9m-9-7h6m11 7V6l11 14V6"></path></svg>
                        <svg class="hidden-until-760" style="height: 24px; stroke: var(--omni-theme-font-color); background: var(--omni-theme-background-color);" xmlns="http://www.w3.org/2000/svg" aria-label="CodePen" role="img" viewBox="0 0 512 512"><g xmlns="http://www.w3.org/2000/svg" fill="none" stroke-width="33" stroke-linejoin="round"><path d="M81 198v116l175 117 175-117V198L256 81z"/><path d="M81 198l175 116 175-116M256 81v117"/><path d="M81 314l175-116 175 116M256 431V314"/></g></svg>
                    </div>
                </div>
            </div>
            ${(T=this.story)!=null&&T.play?h`
                <div class="${this.key+"-result"} failure">
                    <div class="play-tests-out">
                    <span class="material-icons" style="color: #721c24;">close</span>
                    <span style="margin-left: 8px;"><pre>${this._playError}</pre></span>
                    </div>
                </div>
                `:S}
        </div>
    `}handleCustomThemeCSSVariableSearch(e){var i;let s=(i=e.target.value)!=null?i:"",o=document.querySelector(`[data-target=custom-css-table-${this.tag}]`).children;for(let r=0;r<o.length;r++){let l=o[r];l.innerText&&l.innerText.toLowerCase().includes(s.toLowerCase())?l.classList.remove("hidden"):l.classList.add("hidden")}}renderCssVariable(e){var t;let s=(t=this.customCss)==null?void 0:t.sheet;if(e.name){let o;if((s==null?void 0:s.cssRules.length)===0){let i=s.insertRule(":root {}");o=s.cssRules.item(i)}else for(let i=0;i<s.cssRules.length;i++){let r=s.cssRules[i];if(r.selectorText===":root"){o=r;break}}return o&&(e.value=o.style.getPropertyValue(`--${e.name}`)),e.control==="color"?h`
                    <omni-color-field
                        class="css-prop docs-omni-component"
                        .value="${P(e.value)}"
                        @input="${async i=>{var y;let u=((y=i.target.shadowRoot)==null?void 0:y.getElementById("inputField")).value;e.value=u,this._cssChanged(e)}}">
                    </omni-color-field>
                  `:h`
                    <omni-text-field
                        class="css-prop docs-omni-component"
                        .value="${P(e.value)}"
                        @input="${async i=>{var u;let l=((u=i.target.shadowRoot)==null?void 0:u.getElementById("inputField")).value;e.value=l,this._cssChanged(e)}}">
                    </omni-text-field>
                  `}return S}createRenderRoot(){return this}_sortCssVariables(e,s){var i;let t=(i=this.customCss)==null?void 0:i.sheet,o;if((t==null?void 0:t.cssRules.length)===0){let r=t.insertRule(":root {}");o=t.cssRules.item(r)}else for(let r=0;r<t.cssRules.length;r++){let l=t==null?void 0:t.cssRules[r];if(l.selectorText===":root"){o=l;break}}return o&&(e.value=o.style.getPropertyValue(`--${e.name}`),s.value=o.style.getPropertyValue(`--${s.name}`)),e.value?s.value?0:-1:s.value?1:0}_cssChanged(e){var i;let s=(i=this.customCss)==null?void 0:i.sheet,t;if((s==null?void 0:s.cssRules.length)===0){let r=s.insertRule(":root {}");t=s.cssRules.item(r)}else for(let r=0;r<s.cssRules.length;r++){let l=s==null?void 0:s.cssRules[r];if(l.selectorText===":root"){t=l;break}}e.value?t&&t.style.setProperty(`--${e.name}`,e.value):t&&t.style.removeProperty(`--${e.name}`);let o=t.cssText;sessionStorage.setItem(`custom-css-${this.tag}`,o)}_showComponentStyles(){this._showStylesDialog=!0}_checkCloseModal(e){var t;let s=(t=this.modal)==null?void 0:t.querySelector("div.modal-container");e.composedPath().includes(s)||(this._showStylesDialog=!1)}async _resetLivePropertyEditor(){var s,t;this.story.args=JSON.parse(JSON.stringify((s=this.story)==null?void 0:s.originalArgs)),this.overrideInteractive=!1;let e=(t=this.customCss)==null?void 0:t.sheet;for(let o=0;o<e.cssRules.length;o++)if((e==null?void 0:e.cssRules[o]).selectorText===":root"){e==null||e.deleteRule(o);break}sessionStorage.removeItem(`custom-css-${this.tag}`),this.requestUpdate(),this.dispatchEvent(new CustomEvent(j,{bubbles:!0,composed:!0})),await this.updateComplete,this.htmlCodeEditor&&await this.htmlCodeEditor.refresh(()=>{var o,i;return(i=(o=this.story.frameworkSources)==null?void 0:o.find(r=>r.framework==="HTML"))!=null&&i.load?this.story.frameworkSources.find(r=>r.framework==="HTML").load(this.story.args):H(this.story.render(this.story.args))}),this.reactCodeEditor&&await this.reactCodeEditor.refresh(()=>{var o,i;return(i=(o=this.story.frameworkSources)==null?void 0:o.find(r=>r.framework==="React"))!=null&&i.load?this.story.frameworkSources.find(r=>r.framework==="React").load(this.story.args):""}),this.propertyEditor&&this.propertyEditor.resetSlots()}async _generateCodePen(e,s){var _,T,a,n,C,f;let t=s[e],o=((T=(_=document.getElementById("header-version-indicator"))==null?void 0:_.innerText)!=null?T:"").toLowerCase(),r=this.customElements.modules.find(p=>{var d;return(d=p.exports)==null?void 0:d.find(w=>w.name===this.tag)}).path.split("/"),l=r[r.length-2],u=o&&o!=="latest"&&o!=="local"?["alpha","beta","next"].includes(o)?`esm-${o}`:`${o}-esm`:"esm",y="",k="";for(let p=0;p<document.styleSheets.length;p++){let d=document.styleSheets[p];try{if(d.cssRules)for(let w=0;w<d.cssRules.length;w++){let ee=d.cssRules[w];k+=`
        ${ee.cssText}`}}catch(w){continue}}let v=document.documentElement.getAttribute("theme"),b="",$="none",x="";switch(e){case"HTML":y=`
<html theme="${v!=null?v:"light"}">
    <body>
        ${t}
    </body>
</html>`,b=`import 'https://cdn.jsdelivr.net/npm/@capitec/omni-components@${u}/dist/omni-components.js';`;break;case"React":y=`
<html theme="${v!=null?v:"light"}">
    <body>
        <div id="root"></div>
    </body>
</html>`,b=`
${t.replace("@capitec/omni-components-react",`https://cdn.jsdelivr.net/npm/@capitec/omni-components-react@${u}`).replace(`/${l}`,`/${l}/index.js`)}

const el = document.querySelector("#root");
ReactDOM.render(<App/>, el);`,$="babel",x="https://cdnjs.cloudflare.com/ajax/libs/react/16.7.0/umd/react.production.min.js;https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.7.0/umd/react-dom.production.min.js";break}let L={title:`${(a=this.story)==null?void 0:a.name} - ${e}`,description:((n=this.story)==null?void 0:n.description)&&typeof((C=this.story)==null?void 0:C.description)=="function"?this.story.description():(f=this.story)==null?void 0:f.description,private:!1,tags:[e,"Omni Components","web components","custom elements"],editors:"101",layout:"top",html:y,html_pre_processor:"none",css:k,css_pre_processor:"none",css_starter:"neither",css_prefix:"neither",js:b,js_pre_processor:$,head:`<link rel="stylesheet preload" href="https://fonts.googleapis.com/css?family=Hind Vadodara" as="style">
            <link rel="stylesheet preload" href="https://fonts.googleapis.com/icon?family=Material+Icons" as="style">`,js_external:x},V=`<form style="display: none;" action="https://codepen.io/pen/define" method="POST" target="_blank"> 
            <input type="hidden" name="data" value='${JSON.stringify(L).replace(/"/g,"&quot;").replace(/'/g,"&apos;")}'>
            <input type="submit" class="code-submit">
        </form>`,g=document.createElement("div");g.innerHTML=V,g.style.display="none",document.body.appendChild(g),g.querySelector(".code-submit").click(),document.body.removeChild(g)}async _play(e,s){var t,o,i;try{if(!e.play)return;this._isBusyPlaying=!0;let r=this._createStoryContext(e,s);await e.play(r),this.querySelector(s+"-result.success").style.display="flex",this.querySelector(s+"-result.failure").style.display="none"}catch(r){this.querySelector(s+"-result.failure").style.display="flex",this.querySelector(s+"-result.success").style.display="none",this._playError=(i=(o=(t=r==null?void 0:r.matcherResult)==null?void 0:t.message)!=null?o:r==null?void 0:r.message)==null?void 0:i.toString().replace(/\u001b[^m]*?m/g,"").replace(/\n \u001b[^m]*?m/g,"").replace(/\u001b[^m]*?m\n/g,"").replace(/\n\u001b[^m]*?m/g,"")}finally{this._isBusyPlaying=!1}}_createStoryContext(e,s){return{story:e,args:e.args,canvasElement:this.querySelector(s)}}_currentCodeTheme(){var e;return((e=this.theme)==null?void 0:e.toLowerCase())==="dark"?z:G}};m([M({type:String,reflect:!0})],c.prototype,"path",2),m([M({type:String,reflect:!0})],c.prototype,"tag",2),m([M({type:String,reflect:!0})],c.prototype,"key",2),m([M({type:Boolean,reflect:!0})],c.prototype,"interactive",2),m([E()],c.prototype,"_interactiveSrc",2),m([E()],c.prototype,"_isBusyPlaying",2),m([E()],c.prototype,"_playError",2),m([E()],c.prototype,"_showStylesDialog",2),m([E()],c.prototype,"_sourceTab",2),m([R(".html-source-code")],c.prototype,"htmlCodeEditor",2),m([R(".react-source-code")],c.prototype,"reactCodeEditor",2),m([R(".live-props")],c.prototype,"propertyEditor",2),c=m([K("story-renderer")],c);var j="story-renderer-interactive-update";export{c as StoryRenderer};
//# sourceMappingURL=StoryRenderer.js.map
