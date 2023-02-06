import{a as B}from"./chunk.MCIDFWAY.js";import{a as O,b as M,c as F,f as H,r as q,s as z}from"./chunk.K3YYK5GB.js";import{a as R}from"./chunk.R4IMIBZU.js";import{i as j}from"./chunk.ZO5UBYOG.js";import{a as _,b as h,c as P,e as A}from"./chunk.CHYIO324.js";import{a as S,b as m,d as T}from"./chunk.3GEUDTAZ.js";import{j as i,l as N,o as V}from"./chunk.2ZZQBHAA.js";N();V();var a=class extends j{constructor(){super(...arguments);this.customElementsPath="./custom-elements.json"}async connectedCallback(){var t;super.connectedCallback(),this.customElements=await z(this.customElementsPath),document.addEventListener("omni-docs-theme-change",n=>{var l;this.theme=(l=getComputedStyle(document.documentElement).getPropertyValue("--code-editor-theme"))==null?void 0:l.trim();let r=this.renderRoot.querySelectorAll("code-editor");r&&r.forEach(c=>{c.updateExtensions()})}),this.theme=(t=getComputedStyle(document.documentElement).getPropertyValue("--code-editor-theme"))==null?void 0:t.trim()}static get styles(){return[super.styles,S`
                :host {
                }

                :host([disabled]) {
                    pointer-events: none;
                    background-color: #f9f9f9;
                }

                .loading {
                    max-width: 25px;
                    max-height: 100px;
                }

                .css-prop {
                    margin: 5px;
                }

                .collapsible {
                    background-color: #777;
                    color: white;
                    cursor: pointer;
                    padding: 18px;
                    width: 100%;
                    border: none;
                    text-align: left;
                    outline: none;
                    font-size: 15px;
                }

                .active,
                .collapsible:hover {
                    background-color: #555;
                }

                .expandable {
                    padding: 0 18px;
                    display: none;
                    overflow: hidden;
                    background-color: #f1f1f1;
                    flex-direction: column;
                }

                .tooltip {
                    position: relative;
                    display: inline-block;
                    border-bottom: 1px dotted black;
                }

                .tooltip .tooltiptext {
                    visibility: hidden;
                    width: 120px;
                    background-color: black;
                    color: #fff;
                    text-align: center;
                    border-radius: 6px;
                    padding: 5px 0;
                    position: absolute;
                    z-index: 1;
                    bottom: 150%;
                    left: 50%;
                    margin-left: -60px;
                }

                .tooltip .tooltiptext::after {
                    content: '';
                    position: absolute;
                    top: 100%;
                    left: 50%;
                    margin-left: -5px;
                    border-width: 5px;
                    border-style: solid;
                    border-color: black transparent transparent transparent;
                }

                .tooltip:hover .tooltiptext {
                    visibility: visible;
                }

                .docs-text-field {
                    width: 100%;
                    /*
                    --omni-form-border-color: var(--docs-border-color);
                    --omni-theme-border-width: 10px;
                    --omni-form-hover-color: transparent;
                    --omni-form-focussed-border-width: 1px;
                    --omni-form-focussed-border-color: var(--docs-border-color);
                    */
                    /*border: 1px solid var(--docs-border-color);*/
                }

                .docs-select {
                    /*
                    padding: 5px;
                    cursor: pointer;
                    border-radius: 6px;
                    border: 1px solid var(--docs-border-color);
                    display: flex;
                    min-width: 191px;
                    min-height: 41px;
                    width: 100%;
                    background-color: var(--omni-theme-background-color, inherit);
                    color: var(--omni-theme-font-color, inherit);*/
                }

                .docs-select:focus-visible {
                    outline: none;
                }

                .live-header {
                    margin-top: 15px;
                }

                .live-header:first-of-type {
                    margin-top: 0;
                }
            `]}resetSlots(){this.slotCodeEditors&&this.slotCodeEditors.forEach(async t=>{let n=t.getAttribute("data-slot-name");if(n){let r=this.data&&this.data.args[n]?this.data.args[n]:void 0;await t.refresh(()=>r)}})}render(){if(!this.customElements)return m`<omni-loading-icon class="loading"></omni-loading-icon>`;let t=H(this.element,this.customElements),n=[],r=[];return t.declarations.forEach(l=>{let c=l;c.slots&&c.slots.forEach(e=>{r.find(s=>s.name===e.name)||this.data&&!Object.prototype.hasOwnProperty.call(this.data.args,e.name)||r.push({name:e.name,html:m`
              <omni-label class="live-header" label="${e.name}"></omni-label>
              <code-editor
                class="slot-code"
                data-slot-name="${e.name}"
                ?disabled=${this.disabled}
                .extensions="${async()=>[this._currentCodeTheme(),O(await q())]}"
                .code="${R(this.data&&this.data.args[e.name]?this.data.args[e.name]:void 0)}"
                @codemirror-source-change="${s=>{this._propertyChanged({property:e.name,newValue:s.detail.source,oldValue:s.detail.oldSource})}}">
              </code-editor>
            `})}),c.attributes&&c.attributes.forEach(e=>{var g,y,x,b,v,C,E,w;if(this.ignoreAttributes&&this.ignoreAttributes.split(",").includes(e.name)||n.find(o=>o.name===e.name))return;let s;try{if(e.type.text==="boolean")s=m`
              <omni-switch
                class="docs-select"
                ?disabled=${this.disabled}
                ?checked="${this.data?(y=this.data.args[e.name])!=null?y:this.data.args[(g=e.fieldName)!=null?g:e.name]:e.default==="true"}"
                @value-change="${o=>{this._propertyChanged({property:this.data&&e.fieldName&&this.data.args.hasOwnProperty(e.fieldName)?e.fieldName:e.name,newValue:o.detail.new,oldValue:o.detail.old})}}">
              </omni-switch>
            `;else if(e.type.text!=="object"&&e.type.text!=="string"&&e.type.text!=="boolean"&&!e.type.text.includes("Promise")&&e.type.text.includes("'")){let o=e.type.text.split(" | "),p=[];for(let f in o){let d=o[f];p.push(d.substring(1,d.length-1))}let u=this.data?(b=this.data.args[e.name])!=null?b:this.data.args[(x=e.fieldName)!=null?x:e.name]:void 0;s=m`
              <omni-select
                class="docs-select"
                ?disabled=${this.disabled}
                value=${u}
                .items=${p}
                @change="${f=>{let d=f.target.value;this._propertyChanged({property:this.data&&e.fieldName&&this.data.args.hasOwnProperty(e.fieldName)?e.fieldName:e.name,newValue:d,oldValue:this.data?this.data.args[e.name]:void 0})}}"
            >
                
            </omni-select>

            `}else{if(e.type.text==="object"||e.type.text.includes("Promise")||((v=this.data)==null?void 0:v.args)&&this.data.args[e.name]&&(typeof this.data.args[e.name]=="function"||typeof this.data.args[e.name].then=="function"))return;{let o=this.data&&(w=(E=this.data.args[e.name])!=null?E:this.data.args[(C=e.fieldName)!=null?C:e.name])!=null?w:"",p="";typeof o=="string"?p=o:p=JSON.stringify(o),s=m`
              <omni-text-field
                class="docs-text-field"
                ?disabled=${this.disabled}
                .value="${B(p)}"
                @input="${async u=>{var k,$;let d=u.target.shadowRoot.getElementById("inputField").value;typeof o!="string"&&(d=JSON.parse(d)),this._propertyChanged({property:this.data&&e.fieldName&&this.data.args.hasOwnProperty(e.fieldName)?e.fieldName:e.name,newValue:d,oldValue:this.data?($=this.data.args[e.name])!=null?$:this.data.args[(k=e.fieldName)!=null?k:e.name]:void 0})}}">
              </omni-text-field>
            `}}}catch(o){console.error(o);return}s&&n.push({html:m`
                            <omni-label class="live-header" label="${e.name}"></omni-label>                
                ${s}
              `,name:e.name})})}),n.length===0&&r.length===0?T:m` <div style="padding: 24px;"> ${n.map(l=>l.html)} ${r.map(l=>l.html)} </div> `}_propertyChanged(t){this.dispatchEvent(new CustomEvent("property-change",{detail:t}))}_currentCodeTheme(){var t;return((t=this.theme)==null?void 0:t.toLowerCase())==="dark"?M:F}async updated(t){t.has("disabled")&&this.slotCodeEditors&&this.resetSlots(),t.has("data")&&t.get("data")&&(this._firstRenderCompleted||(await this.updateComplete,this.dispatchEvent(new CustomEvent("component-render-complete",{bubbles:!0})),this._firstRenderCompleted=!0))}};i([h({type:Object,reflect:!1})],a.prototype,"data",2),i([h({type:String,reflect:!0})],a.prototype,"element",2),i([h({type:Boolean,reflect:!0})],a.prototype,"disabled",2),i([h({type:String,attribute:"ignore-attributes",reflect:!0})],a.prototype,"ignoreAttributes",2),i([h({type:String,attribute:"custom-elements",reflect:!0})],a.prototype,"customElementsPath",2),i([P()],a.prototype,"customElements",2),i([A(".slot-code")],a.prototype,"slotCodeEditors",2),a=i([_("live-property-editor")],a);export{a};
//# sourceMappingURL=chunk.3WW4OACL.js.map
