import{a as z}from"./chunk.ZPUNSNI6.js";import{a as M,b as F,e as T,r as R,s as j}from"./chunk.IK4T76RY.js";import{a as N}from"./chunk.R4IMIBZU.js";import{d as H}from"./chunk.WVW5AE5A.js";import{a as A,b as m,c as O,e as _}from"./chunk.CHYIO324.js";import{a as S,b as i,d as k}from"./chunk.3GEUDTAZ.js";import{j as n,l as $,o as V}from"./chunk.2ZZQBHAA.js";$();V();var t=class extends H{constructor(){super(...arguments);this.cssValueReader=a=>a;this.customElementsPath="./custom-elements.json"}async connectedCallback(){super.connectedCallback(),this.customElements=await j(this.customElementsPath)}static get styles(){return[super.styles,S`
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
                }

                .docs-select {
                    padding: 5px;
                    cursor: pointer;
                    border-radius: 6px;
                    border: 1px solid #e1e1e1;
                    display: flex;
                    min-width: 191px;
                    min-height: 41px;
                    width: 100%;
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
            `]}resetSlots(){this.slotCodeMirrors&&this.slotCodeMirrors.forEach(async a=>{let d=a.getAttribute("data-slot-name");if(d){let p=this.data&&this.data.args[d]?this.data.args[d]:void 0;await a.refresh(()=>p)}})}render(){if(!this.customElements)return i`<omni-loading-icon class="loading"></omni-loading-icon>`;let a=T(this.element,this.customElements),d=[],p=[];return a.declarations.forEach(c=>{let h=c;h.slots&&h.slots.forEach(e=>{p.find(o=>o.name===e.name)||this.data&&!Object.prototype.hasOwnProperty.call(this.data.args,e.name)||p.push({name:e.name,html:i`
              <omni-label class="live-header" label="${e.name}"></omni-label>
              <code-editor
                class="slot-code"
                data-slot-name="${e.name}"
                ?disabled=${this.disabled}
                .extensions="${async()=>[F,M(await R())]}"
                .code="${N(this.data&&this.data.args[e.name]?this.data.args[e.name]:void 0)}"
                @codemirror-source-change="${o=>{this._propertyChanged({property:e.name,newValue:o.detail.source,oldValue:o.detail.oldSource})}}">
              </code-editor>
            `})}),h.attributes&&h.attributes.forEach(e=>{var u,y,x,b,C,v,w,E;if(this.ignoreAttributes&&this.ignoreAttributes.split(",").includes(e.name)||d.find(l=>l.name===e.name))return;let o;if(e.type.text==="boolean")o=i`
              <omni-switch
                ?disabled=${this.disabled}
                ?checked="${this.data?(y=this.data.args[e.name])!=null?y:this.data.args[(u=e.fieldName)!=null?u:e.name]:e.default==="true"}"
                @value-change="${l=>{this._propertyChanged({property:this.data&&e.fieldName&&this.data.args[e.fieldName]?e.fieldName:e.name,newValue:l.detail.new,oldValue:l.detail.old})}}">
              </omni-switch>
            `;else if(e.type.text!=="object"&&e.type.text!=="string"&&e.type.text!=="boolean"&&!e.type.text.includes("Promise")&&e.type.text.includes("'")){let l=e.type.text.split(" | "),f=[];for(let s in l){let r=l[s];f.push(r.substring(1,r.length-1))}let g=this.data?(b=this.data.args[e.name])!=null?b:this.data.args[(x=e.fieldName)!=null?x:e.name]:void 0;o=i`
              <select
                class="docs-select"
                ?disabled=${this.disabled}
                @change="${s=>{let r=s.target.value;this._propertyChanged({property:this.data&&e.fieldName&&this.data.args[e.fieldName]?e.fieldName:e.name,newValue:r,oldValue:this.data?this.data.args[e.name]:void 0})}}">
                ${f.map(s=>i`<option value="${s}" ?selected="${s===g}">${s}</option>`)}
              </select>
            `}else{if(e.type.text==="object"||e.type.text.includes("Promise")||((C=this.data)==null?void 0:C.args)&&this.data.args[e.name]&&(typeof this.data.args[e.name]=="function"||typeof this.data.args[e.name].then=="function"))return;o=i`
              <omni-text-field
                class="docs-text-field"
                ?disabled=${this.disabled}
                .value="${z(this.data&&(E=(w=this.data.args[e.name])!=null?w:this.data.args[(v=e.fieldName)!=null?v:e.name])!=null?E:"")}"
                @input="${async l=>{var s,r;let g=l.target.shadowRoot.getElementById("inputField").value;this._propertyChanged({property:this.data&&e.fieldName&&this.data.args[e.fieldName]?e.fieldName:e.name,newValue:g,oldValue:this.data?(r=this.data.args[e.name])!=null?r:this.data.args[(s=e.fieldName)!=null?s:e.name]:void 0})}}">
              </omni-text-field>
            `}o&&d.push({html:i`
                <omni-label class="live-header" label="${e.name}"></omni-label>
                ${o}
              `,name:e.name})})}),d.length===0&&p.length===0?k:i` <div style="padding: 24px;"> ${d.map(c=>c.html)} ${p.map(c=>c.html)} </div> `}_propertyChanged(a){this.dispatchEvent(new CustomEvent("property-change",{detail:a}))}updated(a){a.has("disabled")&&this.slotCodeMirrors&&this.resetSlots()}};n([m({type:Object,reflect:!1})],t.prototype,"data",2),n([m({type:Function,reflect:!1})],t.prototype,"cssValueReader",2),n([m({type:String,reflect:!0})],t.prototype,"element",2),n([m({type:Boolean,reflect:!0})],t.prototype,"disabled",2),n([m({type:String,attribute:"ignore-attributes",reflect:!0})],t.prototype,"ignoreAttributes",2),n([m({type:String,attribute:"custom-elements",reflect:!0})],t.prototype,"customElementsPath",2),n([O()],t.prototype,"customElements",2),n([_(".slot-code")],t.prototype,"slotCodeMirrors",2),t=n([A("live-property-editor")],t);export{t as a};
//# sourceMappingURL=chunk.77UBQDMP.js.map
