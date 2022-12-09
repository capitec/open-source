import{a as B}from"./chunk.THZL7OFV.js";import{a as M,b as F,c as _,f as I,s as q,t as z}from"./chunk.G4V22OAM.js";import{a as R}from"./chunk.O6CDAD4G.js";import{i as H}from"./chunk.H227IO2J.js";import{a as O,b as p,c as A,e as j}from"./chunk.CHYIO324.js";import{b as V,c as d,e as T}from"./chunk.CDDA2I3H.js";import{j as r,l as N,o as S}from"./chunk.2ZZQBHAA.js";N();S();var s=class extends H{constructor(){super(...arguments);this.customElementsPath="./custom-elements.json"}async connectedCallback(){super.connectedCallback(),this.customElements=await z(this.customElementsPath),document.addEventListener("omni-docs-theme-change",a=>{this.theme=a.detail;let i=this.renderRoot.querySelectorAll("code-editor");i&&i.forEach(m=>{m.updateExtensions()})});let t="omni-docs-theme-selection";this.theme=window.sessionStorage.getItem(t)}static get styles(){return[super.styles,V`
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
            `]}resetSlots(){this.slotCodeEditors&&this.slotCodeEditors.forEach(async t=>{let a=t.getAttribute("data-slot-name");if(a){let i=this.data&&this.data.args[a]?this.data.args[a]:void 0;await t.refresh(()=>i)}})}render(){if(!this.customElements)return d`<omni-loading-icon class="loading"></omni-loading-icon>`;let t=I(this.element,this.customElements),a=[],i=[];return t.declarations.forEach(m=>{let h=m;h.slots&&h.slots.forEach(e=>{i.find(n=>n.name===e.name)||this.data&&!Object.prototype.hasOwnProperty.call(this.data.args,e.name)||i.push({name:e.name,html:d`
              <omni-label class="live-header" label="${e.name}"></omni-label>
              <code-editor
                class="slot-code"
                data-slot-name="${e.name}"
                ?disabled=${this.disabled}
                .extensions="${async()=>[this._currentCodeTheme(),M(await q())]}"
                .code="${R(this.data&&this.data.args[e.name]?this.data.args[e.name]:void 0)}"
                @codemirror-source-change="${n=>{this._propertyChanged({property:e.name,newValue:n.detail.source,oldValue:n.detail.oldSource})}}">
              </code-editor>
            `})}),h.attributes&&h.attributes.forEach(e=>{var u,y,x,b,v,C,E,w;if(this.ignoreAttributes&&this.ignoreAttributes.split(",").includes(e.name)||a.find(o=>o.name===e.name))return;let n;try{if(e.type.text==="boolean")n=d`
              <omni-switch
                class="docs-select"
                ?disabled=${this.disabled}
                ?checked="${this.data?(y=this.data.args[e.name])!=null?y:this.data.args[(u=e.fieldName)!=null?u:e.name]:e.default==="true"}"
                @value-change="${o=>{this._propertyChanged({property:this.data&&e.fieldName&&this.data.args[e.fieldName]?e.fieldName:e.name,newValue:o.detail.new,oldValue:o.detail.old})}}">
              </omni-switch>
            `;else if(e.type.text!=="object"&&e.type.text!=="string"&&e.type.text!=="boolean"&&!e.type.text.includes("Promise")&&e.type.text.includes("'")){let o=e.type.text.split(" | "),c=[];for(let f in o){let l=o[f];c.push(l.substring(1,l.length-1))}let g=this.data?(b=this.data.args[e.name])!=null?b:this.data.args[(x=e.fieldName)!=null?x:e.name]:void 0;n=d`
              <omni-select
                class="docs-select"
                ?disabled=${this.disabled}
                value=${g}
                .items=${c}
                @change="${f=>{let l=f.target.value;this._propertyChanged({property:this.data&&e.fieldName&&this.data.args[e.fieldName]?e.fieldName:e.name,newValue:l,oldValue:this.data?this.data.args[e.name]:void 0})}}"
            >
                
            </omni-select>

            `}else{if(e.type.text==="object"||e.type.text.includes("Promise")||((v=this.data)==null?void 0:v.args)&&this.data.args[e.name]&&(typeof this.data.args[e.name]=="function"||typeof this.data.args[e.name].then=="function"))return;{let o=this.data&&(w=(E=this.data.args[e.name])!=null?E:this.data.args[(C=e.fieldName)!=null?C:e.name])!=null?w:"",c="";typeof o=="string"?c=o:c=JSON.stringify(o),n=d`
              <omni-text-field
                class="docs-text-field"
                ?disabled=${this.disabled}
                .value="${B(c)}"
                @input="${async g=>{var k,$;let l=g.target.shadowRoot.getElementById("inputField").value;typeof o!="string"&&(l=JSON.parse(l)),this._propertyChanged({property:this.data&&e.fieldName&&this.data.args[e.fieldName]?e.fieldName:e.name,newValue:l,oldValue:this.data?($=this.data.args[e.name])!=null?$:this.data.args[(k=e.fieldName)!=null?k:e.name]:void 0})}}">
              </omni-text-field>
            `}}}catch(o){console.error(o);return}n&&a.push({html:d`
                            <omni-label class="live-header" label="${e.name}"></omni-label>                
                ${n}
              `,name:e.name})})}),a.length===0&&i.length===0?T:d` <div style="padding: 24px;"> ${a.map(m=>m.html)} ${i.map(m=>m.html)} </div> `}_propertyChanged(t){this.dispatchEvent(new CustomEvent("property-change",{detail:t}))}_currentCodeTheme(){var t;return((t=this.theme)==null?void 0:t.toLowerCase())==="dark-theme.css"?F:_}async updated(t){t.has("disabled")&&this.slotCodeEditors&&this.resetSlots(),t.has("data")&&t.get("data")&&(this._firstRenderCompleted||(await this.updateComplete,this.dispatchEvent(new CustomEvent("component-render-complete",{bubbles:!0})),this._firstRenderCompleted=!0))}};r([p({type:Object,reflect:!1})],s.prototype,"data",2),r([p({type:String,reflect:!0})],s.prototype,"element",2),r([p({type:Boolean,reflect:!0})],s.prototype,"disabled",2),r([p({type:String,attribute:"ignore-attributes",reflect:!0})],s.prototype,"ignoreAttributes",2),r([p({type:String,attribute:"custom-elements",reflect:!0})],s.prototype,"customElementsPath",2),r([A()],s.prototype,"customElements",2),r([j(".slot-code")],s.prototype,"slotCodeEditors",2),s=r([O("live-property-editor")],s);export{s as a};
//# sourceMappingURL=chunk.4DVYX2DS.js.map
