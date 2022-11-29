import{a as q}from"./chunk.QZMZ3CLH.js";import{a as T,b as R,c as M,f as F,s as _,t as A}from"./chunk.KC5WESZP.js";import{a as V}from"./chunk.O6CDAD4G.js";import{d as I}from"./chunk.63F4QTY7.js";import{a as j,b as c,c as O,e as H}from"./chunk.CHYIO324.js";import{b as N,c as r,e as S}from"./chunk.CDDA2I3H.js";import{j as d,l as $,o as k}from"./chunk.2ZZQBHAA.js";$();k();var o=class extends I{constructor(){super(...arguments);this.customElementsPath="./custom-elements.json"}async connectedCallback(){super.connectedCallback(),this.customElements=await A(this.customElementsPath),document.addEventListener("omni-docs-theme-change",a=>{this.theme=a.detail;let i=this.renderRoot.querySelectorAll("code-editor");i&&i.forEach(m=>{m.updateExtensions()})});let t="omni-docs-theme-selection";this.theme=window.sessionStorage.getItem(t)}static get styles(){return[super.styles,N`
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
                    background-color: var(--omni-theme-background-color, inherit);
                    color: var(--omni-theme-font-color, inherit);
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
            `]}resetSlots(){this.slotCodeEditors&&this.slotCodeEditors.forEach(async t=>{let a=t.getAttribute("data-slot-name");if(a){let i=this.data&&this.data.args[a]?this.data.args[a]:void 0;await t.refresh(()=>i)}})}render(){if(!this.customElements)return r`<omni-loading-icon class="loading"></omni-loading-icon>`;let t=F(this.element,this.customElements),a=[],i=[];return t.declarations.forEach(m=>{let h=m;h.slots&&h.slots.forEach(e=>{i.find(s=>s.name===e.name)||this.data&&!Object.prototype.hasOwnProperty.call(this.data.args,e.name)||i.push({name:e.name,html:r`
              <omni-label class="live-header" label="${e.name}"></omni-label>
              <code-editor
                class="slot-code"
                data-slot-name="${e.name}"
                ?disabled=${this.disabled}
                .extensions="${async()=>[this._currentCodeTheme(),T(await _())]}"
                .code="${V(this.data&&this.data.args[e.name]?this.data.args[e.name]:void 0)}"
                @codemirror-source-change="${s=>{this._propertyChanged({property:e.name,newValue:s.detail.source,oldValue:s.detail.oldSource})}}">
              </code-editor>
            `})}),h.attributes&&h.attributes.forEach(e=>{var u,y,x,C,v,b,E,w;if(this.ignoreAttributes&&this.ignoreAttributes.split(",").includes(e.name)||a.find(l=>l.name===e.name))return;let s;if(e.type.text==="boolean")s=r`
              <omni-switch
                ?disabled=${this.disabled}
                ?checked="${this.data?(y=this.data.args[e.name])!=null?y:this.data.args[(u=e.fieldName)!=null?u:e.name]:e.default==="true"}"
                @value-change="${l=>{this._propertyChanged({property:this.data&&e.fieldName&&this.data.args[e.fieldName]?e.fieldName:e.name,newValue:l.detail.new,oldValue:l.detail.old})}}">
              </omni-switch>
            `;else if(e.type.text!=="object"&&e.type.text!=="string"&&e.type.text!=="boolean"&&!e.type.text.includes("Promise")&&e.type.text.includes("'")){let l=e.type.text.split(" | "),f=[];for(let n in l){let p=l[n];f.push(p.substring(1,p.length-1))}let g=this.data?(C=this.data.args[e.name])!=null?C:this.data.args[(x=e.fieldName)!=null?x:e.name]:void 0;s=r`
              <select
                class="docs-select"
                ?disabled=${this.disabled}
                @change="${n=>{let p=n.target.value;this._propertyChanged({property:this.data&&e.fieldName&&this.data.args[e.fieldName]?e.fieldName:e.name,newValue:p,oldValue:this.data?this.data.args[e.name]:void 0})}}">
                ${f.map(n=>r`<option value="${n}" ?selected="${n===g}">${n}</option>`)}
              </select>
            `}else{if(e.type.text==="object"||e.type.text.includes("Promise")||((v=this.data)==null?void 0:v.args)&&this.data.args[e.name]&&(typeof this.data.args[e.name]=="function"||typeof this.data.args[e.name].then=="function"))return;s=r`
              <omni-text-field
                class="docs-text-field"
                ?disabled=${this.disabled}
                .value="${q(this.data&&(w=(E=this.data.args[e.name])!=null?E:this.data.args[(b=e.fieldName)!=null?b:e.name])!=null?w:"")}"
                @input="${async l=>{var n,p;let g=l.target.shadowRoot.getElementById("inputField").value;this._propertyChanged({property:this.data&&e.fieldName&&this.data.args[e.fieldName]?e.fieldName:e.name,newValue:g,oldValue:this.data?(p=this.data.args[e.name])!=null?p:this.data.args[(n=e.fieldName)!=null?n:e.name]:void 0})}}">
              </omni-text-field>
            `}s&&a.push({html:r`
                <omni-label class="live-header" label="${e.name}"></omni-label>
                ${s}
              `,name:e.name})})}),a.length===0&&i.length===0?S:r` <div style="padding: 24px;"> ${a.map(m=>m.html)} ${i.map(m=>m.html)} </div> `}_propertyChanged(t){this.dispatchEvent(new CustomEvent("property-change",{detail:t}))}_currentCodeTheme(){var t;return((t=this.theme)==null?void 0:t.toLowerCase())==="dark-theme.css"?R:M}async updated(t){t.has("disabled")&&this.slotCodeEditors&&this.resetSlots(),t.has("data")&&t.get("data")&&(this._firstRenderCompleted||(await this.updateComplete,this.dispatchEvent(new CustomEvent("component-render-complete",{bubbles:!0})),this._firstRenderCompleted=!0))}};d([c({type:Object,reflect:!1})],o.prototype,"data",2),d([c({type:String,reflect:!0})],o.prototype,"element",2),d([c({type:Boolean,reflect:!0})],o.prototype,"disabled",2),d([c({type:String,attribute:"ignore-attributes",reflect:!0})],o.prototype,"ignoreAttributes",2),d([c({type:String,attribute:"custom-elements",reflect:!0})],o.prototype,"customElementsPath",2),d([O()],o.prototype,"customElements",2),d([H(".slot-code")],o.prototype,"slotCodeEditors",2),o=d([j("live-property-editor")],o);export{o as a};
//# sourceMappingURL=chunk.A7VNNPLW.js.map
