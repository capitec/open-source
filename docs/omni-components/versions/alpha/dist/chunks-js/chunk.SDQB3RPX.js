import{a as L}from"./chunk.MCIDFWAY.js";import{a as I,b as J,c as U,f as X,r as Y,s as Z}from"./chunk.P4DNRGFH.js";import{a as D}from"./chunk.R4IMIBZU.js";import{i as W}from"./chunk.ZO5UBYOG.js";import{a as K,b as p,c as G,e as Q}from"./chunk.CHYIO324.js";import{a as z,b as m,d as B}from"./chunk.3GEUDTAZ.js";import{j as l,l as H,o as q}from"./chunk.2ZZQBHAA.js";H();q();var a=class extends W{constructor(){super(...arguments);this.customElementsPath="./custom-elements.json"}async connectedCallback(){var t;super.connectedCallback(),this.customElements=await Z(this.customElementsPath),document.addEventListener("omni-docs-theme-change",n=>{var h;this.theme=(h=getComputedStyle(document.documentElement).getPropertyValue("--code-editor-theme"))==null?void 0:h.trim();let r=this.renderRoot.querySelectorAll("code-editor");r&&r.forEach(c=>{c.updateExtensions()})}),this.theme=(t=getComputedStyle(document.documentElement).getPropertyValue("--code-editor-theme"))==null?void 0:t.trim()}static get styles(){return[super.styles,z`
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
            `]}resetSlots(){this.slotCodeEditors&&this.slotCodeEditors.forEach(async t=>{let n=t.getAttribute("data-slot-name");if(n){let r=this.data&&this.data.args[n]?this.data.args[n]:void 0;await t.refresh(()=>r)}})}render(){var h;if(!this.customElements)return m`<omni-loading-icon class="loading"></omni-loading-icon>`;let t=X(this.element,this.customElements),n=[],r=[];return(h=t==null?void 0:t.declarations)==null||h.forEach(c=>{let g=c;g.slots&&g.slots.forEach(e=>{r.find(s=>s.name===e.name)||this.data&&!Object.prototype.hasOwnProperty.call(this.data.args,e.name)||r.push({name:e.name,html:m`
              <omni-label class="live-header" label="${e.name}"></omni-label>
              <code-editor
                class="slot-code"
                data-slot-name="${e.name}"
                ?disabled=${this.disabled}
                .extensions="${async()=>[this._currentCodeTheme(),I(await Y())]}"
                .code="${D(this.data&&this.data.args[e.name]?this.data.args[e.name]:void 0)}"
                @codemirror-source-change="${s=>{this._propertyChanged({property:e.name,newValue:s.detail.source,oldValue:s.detail.oldSource})}}">
              </code-editor>
            `})}),g.attributes&&g.attributes.forEach(e=>{var x,v,b,C,E,w,k,$,N,V,S,T,R,O,M,F,_;if(this.ignoreAttributes&&this.ignoreAttributes.split(",").includes(e.name)||n.find(o=>o.name===e.name))return;let s;try{if(((x=e==null?void 0:e.type)==null?void 0:x.text)==="boolean")s=m`
              <omni-switch
                class="docs-select"
                ?disabled=${this.disabled}
                ?checked="${this.data?(b=this.data.args[e.name])!=null?b:this.data.args[(v=e.fieldName)!=null?v:e.name]:e.default==="true"}"
                @value-change="${o=>{var i;this._propertyChanged({property:this.data&&e.fieldName&&((i=this.data.args)==null?void 0:i.hasOwnProperty(e.fieldName))?e.fieldName:e.name,newValue:o.detail.new,oldValue:o.detail.old})}}">
              </omni-switch>
            `;else if(((C=e.type)==null?void 0:C.text)!=="object"&&((E=e.type)==null?void 0:E.text)!=="string"&&((w=e.type)==null?void 0:w.text)!=="boolean"&&!((k=e.type)!=null&&k.text.includes("Promise"))&&(($=e.type)==null?void 0:$.text.includes("'"))){let o=(N=e.type)==null?void 0:N.text.split(" | "),i=[];for(let u in o){let d=o[u];i.push(d.substring(1,d.length-1))}let y=this.data?(S=this.data.args[e.name])!=null?S:this.data.args[(V=e.fieldName)!=null?V:e.name]:void 0;s=m`
              <omni-select
                class="docs-select"
                ?disabled=${this.disabled}
                value=${y}
                .items=${i}
                @change="${u=>{var f;let d=u.target.value;this._propertyChanged({property:this.data&&e.fieldName&&((f=this.data.args)==null?void 0:f.hasOwnProperty(e.fieldName))?e.fieldName:e.name,newValue:d,oldValue:this.data?this.data.args[e.name]:void 0})}}"
            >
                
            </omni-select>

            `}else{if(((T=e.type)==null?void 0:T.text)==="object"||((R=e.type)==null?void 0:R.text.includes("Promise"))||((O=this.data)==null?void 0:O.args)&&this.data.args[e.name]&&(typeof this.data.args[e.name]=="function"||typeof this.data.args[e.name].then=="function"))return;{let o=this.data&&(_=(F=this.data.args[e.name])!=null?F:this.data.args[(M=e.fieldName)!=null?M:e.name])!=null?_:"",i="";typeof o=="string"?i=o:i=JSON.stringify(o),s=m`
              <omni-text-field
                class="docs-text-field"
                ?disabled=${this.disabled}
                .value="${L(i)}"
                @input="${async y=>{var f,P,A,j;let d=((f=y.target.shadowRoot)==null?void 0:f.getElementById("inputField")).value;typeof o!="string"&&(d=JSON.parse(d)),this._propertyChanged({property:this.data&&e.fieldName&&((P=this.data.args)==null?void 0:P.hasOwnProperty(e.fieldName))?e.fieldName:e.name,newValue:d,oldValue:this.data?(j=this.data.args[e.name])!=null?j:this.data.args[(A=e.fieldName)!=null?A:e.name]:void 0})}}">
              </omni-text-field>
            `}}}catch(o){console.error(o);return}s&&n.push({html:m`
                            <omni-label class="live-header" label="${e.name}"></omni-label>                
                ${s}
              `,name:e.name})})}),n.length===0&&r.length===0?B:m` <div style="padding: 24px;"> ${n.map(c=>c.html)} ${r.map(c=>c.html)} </div> `}_propertyChanged(t){this.dispatchEvent(new CustomEvent("property-change",{detail:t}))}_currentCodeTheme(){var t;return((t=this.theme)==null?void 0:t.toLowerCase())==="dark"?J:U}async updated(t){t.has("disabled")&&this.slotCodeEditors&&this.resetSlots(),t.has("data")&&t.get("data")&&(this._firstRenderCompleted||(await this.updateComplete,this.dispatchEvent(new CustomEvent("component-render-complete",{bubbles:!0})),this._firstRenderCompleted=!0))}};l([p({type:Object,reflect:!1})],a.prototype,"data",2),l([p({type:String,reflect:!0})],a.prototype,"element",2),l([p({type:Boolean,reflect:!0})],a.prototype,"disabled",2),l([p({type:String,attribute:"ignore-attributes",reflect:!0})],a.prototype,"ignoreAttributes",2),l([p({type:String,attribute:"custom-elements",reflect:!0})],a.prototype,"customElementsPath",2),l([G()],a.prototype,"customElements",2),l([Q(".slot-code")],a.prototype,"slotCodeEditors",2),a=l([K("live-property-editor")],a);export{a};
//# sourceMappingURL=chunk.SDQB3RPX.js.map
