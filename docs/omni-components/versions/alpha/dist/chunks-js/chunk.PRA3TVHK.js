import{a as ue}from"./chunk.5DQX5M47.js";import{a as ne}from"./chunk.XCXCHO25.js";import{b as se,c as re,d as ie,h as ce,t as he,u as fe}from"./chunk.LSBYP56E.js";import{i as pe}from"./chunk.PNTHLTQK.js";import{a as le,b as c,c as de,e as me}from"./chunk.S2K25ADN.js";import{a as oe,b as m,e as ae}from"./chunk.L3RZWW2F.js";import{j as l,m as ee,p as te}from"./chunk.BF43NN75.js";ee();te();var a=class extends pe{constructor(){super(...arguments);this.customElementsPath="./custom-elements.json"}async connectedCallback(){var t;super.connectedCallback(),this.customElements=await fe(this.customElementsPath),document.addEventListener("omni-docs-theme-change",s=>{var h;this.theme=(h=getComputedStyle(document.documentElement).getPropertyValue("--code-editor-theme"))==null?void 0:h.trim();let r=this.renderRoot.querySelectorAll("code-editor");r&&r.forEach(p=>{p.updateExtensions()})}),this.theme=(t=getComputedStyle(document.documentElement).getPropertyValue("--code-editor-theme"))==null?void 0:t.trim()}static get styles(){return[super.styles,oe`
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
                    padding: 6px 0;
                    font-weight: 600;
                    font-size: 16px;
                }

                .live-header:first-of-type {
                    margin-top: 0;
                }
            `]}resetSlots(){this.slotCodeEditors&&this.slotCodeEditors.forEach(async t=>{let s=t.getAttribute("data-slot-name");if(s){let r=this.data&&this.data.args[s]?this.data.args[s]:void 0;await t.refresh(()=>r)}})}render(){var h;if(!this.customElements)return m`<omni-loading-icon class="loading"></omni-loading-icon>`;let t=ce(this.element,this.customElements),s=[],r=[];return(h=t==null?void 0:t.declarations)==null||h.forEach(p=>{let u=p;u.slots&&u.slots.forEach(e=>{r.find(n=>n.name===e.name)||this.data&&!Object.prototype.hasOwnProperty.call(this.data.args,e.name)||r.push({name:e.name,html:m`
              <omni-label class="live-header" label="${e.name}"></omni-label>
              <code-editor
                class="slot-code"
                data-slot-name="${e.name}"
                ?disabled=${this.disabled}
                .extensions="${async()=>[this._currentCodeTheme(),se(await he())]}"
                .code="${ne(this.data&&this.data.args[e.name]?this.data.args[e.name]:void 0)}"
                @codemirror-source-change="${n=>{this._propertyChanged({property:e.name,newValue:n.detail.source,oldValue:n.detail.oldSource})}}">
              </code-editor>
            `})}),u.attributes&&u.attributes.forEach(e=>{var x,v,b,C,E,w,k,$,N,V,S,T,R,O,A,M,F,_,P,j,z,H,q,B,D,I,J,U,K,G,Q,W,X;if(this.ignoreAttributes&&this.ignoreAttributes.split(",").includes(e.name)||s.find(o=>o.name===e.name))return;let n;try{if(((b=(v=(x=e==null?void 0:e.type)==null?void 0:x.text)==null?void 0:v.replace("| undefined",""))==null?void 0:b.trim())==="boolean")n=m`
              <omni-switch
                class="docs-select"
                ?disabled=${this.disabled}
                ?checked="${this.data?(E=this.data.args[e.name])!=null?E:this.data.args[(C=e.fieldName)!=null?C:e.name]:e.default==="true"}"
                @value-change="${o=>{var i;this._propertyChanged({property:this.data&&e.fieldName&&((i=this.data.args)==null?void 0:i.hasOwnProperty(e.fieldName))?e.fieldName:e.name,newValue:o.detail.new,oldValue:o.detail.old})}}">
              </omni-switch>
            `;else if((($=(k=(w=e.type)==null?void 0:w.text)==null?void 0:k.replace("| undefined",""))==null?void 0:$.trim())!=="object"&&((S=(V=(N=e.type)==null?void 0:N.text)==null?void 0:V.replace("| undefined",""))==null?void 0:S.trim())!=="string"&&((O=(R=(T=e.type)==null?void 0:T.text)==null?void 0:R.replace("| undefined",""))==null?void 0:O.trim())!=="boolean"&&!((F=(M=(A=e.type)==null?void 0:A.text)==null?void 0:M.replace("| undefined",""))!=null&&F.trim().includes("Promise"))&&((j=(P=(_=e.type)==null?void 0:_.text)==null?void 0:P.replace("| undefined",""))==null?void 0:j.trim().includes("'"))){let o=(z=e.type)==null?void 0:z.text.split(" | "),i=[];for(let g in o){let d=o[g].replaceAll("| ","").replaceAll(`\r
`,"").replaceAll(" ","");i.push(d.substring(1,d.length-1))}let y=this.data?(q=this.data.args[e.name])!=null?q:this.data.args[(H=e.fieldName)!=null?H:e.name]:void 0;n=m`
              <omni-select
                class="docs-select"
                ?disabled=${this.disabled}
                value=${y}
                .items=${i}
                @change="${g=>{var f;let d=g.target.value;this._propertyChanged({property:this.data&&e.fieldName&&((f=this.data.args)==null?void 0:f.hasOwnProperty(e.fieldName))?e.fieldName:e.name,newValue:d,oldValue:this.data?this.data.args[e.name]:void 0})}}"
            >
                
            </omni-select>

            `}else{if(((I=(D=(B=e.type)==null?void 0:B.text)==null?void 0:D.replace("| undefined",""))==null?void 0:I.trim())==="object"||((K=(U=(J=e.type)==null?void 0:J.text)==null?void 0:U.replace("| undefined",""))==null?void 0:K.trim().includes("Promise"))||((G=this.data)==null?void 0:G.args)&&this.data.args[e.name]&&(typeof this.data.args[e.name]=="function"||typeof this.data.args[e.name].then=="function"))return;{let o=this.data&&(X=(W=this.data.args[e.name])!=null?W:this.data.args[(Q=e.fieldName)!=null?Q:e.name])!=null?X:"",i="";typeof o=="string"?i=o:i=JSON.stringify(o),n=m`
              <omni-text-field
                class="docs-text-field"
                data-omni-keyboard-hidden
                ?disabled=${this.disabled}
                .value="${ue(i)}"
                @input="${async y=>{var f,Y,Z,L;let d=((f=y.target.shadowRoot)==null?void 0:f.getElementById("inputField")).value;typeof o!="string"&&(d=JSON.parse(d)),this._propertyChanged({property:this.data&&e.fieldName&&((Y=this.data.args)==null?void 0:Y.hasOwnProperty(e.fieldName))?e.fieldName:e.name,newValue:d,oldValue:this.data?(L=this.data.args[e.name])!=null?L:this.data.args[(Z=e.fieldName)!=null?Z:e.name]:void 0})}}">
              </omni-text-field>
            `}}}catch(o){console.error(o);return}n&&s.push({html:m`
                            <omni-label class="live-header" label="${e.name}"></omni-label>                
                ${n}
              `,name:e.name})})}),s.length===0&&r.length===0?ae:m` <div style="padding: 24px;"> ${s.map(p=>p.html)} ${r.map(p=>p.html)} </div> `}_propertyChanged(t){this.dispatchEvent(new CustomEvent("property-change",{detail:t}))}_currentCodeTheme(){var t;return((t=this.theme)==null?void 0:t.toLowerCase())==="dark"?re:ie}async updated(t){t.has("disabled")&&this.slotCodeEditors&&this.resetSlots(),t.has("data")&&t.get("data")&&(this._firstRenderCompleted||(await this.updateComplete,this.dispatchEvent(new CustomEvent("component-render-complete",{bubbles:!0})),this._firstRenderCompleted=!0))}};l([c({type:Object,reflect:!1})],a.prototype,"data",2),l([c({type:String,reflect:!0})],a.prototype,"element",2),l([c({type:Boolean,reflect:!0})],a.prototype,"disabled",2),l([c({type:String,attribute:"ignore-attributes",reflect:!0})],a.prototype,"ignoreAttributes",2),l([c({type:String,attribute:"custom-elements",reflect:!0})],a.prototype,"customElementsPath",2),l([de()],a.prototype,"customElements",2),l([me(".slot-code")],a.prototype,"slotCodeEditors",2),a=l([le("live-property-editor")],a);export{a};
//# sourceMappingURL=chunk.PRA3TVHK.js.map
