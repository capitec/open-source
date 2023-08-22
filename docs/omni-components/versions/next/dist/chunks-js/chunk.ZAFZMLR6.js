import{a as ge}from"./chunk.BKUUO7ED.js";import{b as re,c as ie,d as de,h as he,t as fe,u as ue}from"./chunk.7KM4B723.js";import{a as se}from"./chunk.XCXCHO25.js";import{i as ce}from"./chunk.6C4LMRM7.js";import{a as le,b as c,c as me,e as pe}from"./chunk.S2K25ADN.js";import{a as ae,b as m,e as ne}from"./chunk.L3RZWW2F.js";import{j as d,m as te,p as oe}from"./chunk.BF43NN75.js";te();oe();var a=class extends ce{constructor(){super(...arguments);this.customElementsPath="./custom-elements.json"}async connectedCallback(){var t;super.connectedCallback(),this.customElements=await ue(this.customElementsPath),document.addEventListener("omni-docs-theme-change",s=>{var h;this.theme=(h=getComputedStyle(document.documentElement).getPropertyValue("--code-editor-theme"))==null?void 0:h.trim();let r=this.renderRoot.querySelectorAll("code-editor");r&&r.forEach(p=>{p.updateExtensions()})}),this.theme=(t=getComputedStyle(document.documentElement).getPropertyValue("--code-editor-theme"))==null?void 0:t.trim()}static get styles(){return[super.styles,ae`
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
            `]}resetSlots(){this.slotCodeEditors&&this.slotCodeEditors.forEach(async t=>{let s=t.getAttribute("data-slot-name");if(s){let r=this.data&&this.data.args[s]?this.data.args[s]:void 0;await t.refresh(()=>r)}})}render(){var h;if(!this.customElements)return m`<omni-loading-icon class="loading"></omni-loading-icon>`;let t=he(this.element,this.customElements),s=[],r=[];return(h=t==null?void 0:t.declarations)==null||h.forEach(p=>{let u=p;u.slots&&u.slots.forEach(e=>{r.find(n=>n.name===e.name)||this.data&&!Object.prototype.hasOwnProperty.call(this.data.args,e.name)||r.push({name:e.name,html:m`
              <omni-label class="live-header" label="${e.name}"></omni-label>
              <code-editor
                class="slot-code"
                data-slot-name="${e.name}"
                ?disabled=${this.disabled}
                .extensions="${async()=>[this._currentCodeTheme(),re(await fe())]}"
                .code="${se(this.data&&this.data.args[e.name]?this.data.args[e.name]:void 0)}"
                @codemirror-source-change="${n=>{this._propertyChanged({property:e.name,newValue:n.detail.source,oldValue:n.detail.oldSource})}}">
              </code-editor>
            `})}),u.attributes&&u.attributes.forEach(e=>{var x,v,b,C,E,w,k,$,N,V,S,T,R,O,M,A,F,_,P,j,z,H,q,B,D,I,J,U,K,G,Q,W,X,Y;if(this.ignoreAttributes&&this.ignoreAttributes.split(",").includes(e.name)||s.find(o=>o.name===e.name))return;let n;try{if(((b=(v=(x=e==null?void 0:e.type)==null?void 0:x.text)==null?void 0:v.replace("| undefined",""))==null?void 0:b.trim())==="boolean")n=m`
              <omni-switch
                class="docs-select"
                ?disabled=${this.disabled}
                ?checked="${this.data?(E=this.data.args[e.name])!=null?E:this.data.args[(C=e.fieldName)!=null?C:e.name]:e.default==="true"}"
                @value-change="${o=>{var i;this._propertyChanged({property:this.data&&e.fieldName&&((i=this.data.args)==null?void 0:i.hasOwnProperty(e.fieldName))?e.fieldName:e.name,newValue:o.detail.new,oldValue:o.detail.old})}}">
              </omni-switch>
            `;else if((($=(k=(w=e.type)==null?void 0:w.text)==null?void 0:k.replace("| undefined",""))==null?void 0:$.trim())!=="object"&&((S=(V=(N=e.type)==null?void 0:N.text)==null?void 0:V.replace("| undefined",""))==null?void 0:S.trim())!=="string"&&((O=(R=(T=e.type)==null?void 0:T.text)==null?void 0:R.replace("| undefined",""))==null?void 0:O.trim())!=="boolean"&&!((F=(A=(M=e.type)==null?void 0:M.text)==null?void 0:A.replace("| undefined",""))!=null&&F.trim().includes("Promise"))&&((j=(P=(_=e.type)==null?void 0:_.text)==null?void 0:P.replace("| undefined",""))==null?void 0:j.trim().includes("'"))){let o=(H=(z=e.type)==null?void 0:z.text)==null?void 0:H.replace("| undefined","").split(" | "),i=[];for(let g in o){let l=o[g].replaceAll("| ","").replace(/(\r\n|\n|\r)/gm,"").replaceAll(" ","");i.push(l.substring(1,l.length-1))}let y=this.data?(B=this.data.args[e.name])!=null?B:this.data.args[(q=e.fieldName)!=null?q:e.name]:void 0;n=m`
              <omni-select
                class="docs-select"
                ?disabled=${this.disabled}
                value=${y}
                .items=${i}
                @change="${g=>{var f;let l=g.target.value;this._propertyChanged({property:this.data&&e.fieldName&&((f=this.data.args)==null?void 0:f.hasOwnProperty(e.fieldName))?e.fieldName:e.name,newValue:l,oldValue:this.data?this.data.args[e.name]:void 0})}}"
            >
                
            </omni-select>

            `}else{if(((J=(I=(D=e.type)==null?void 0:D.text)==null?void 0:I.replace("| undefined",""))==null?void 0:J.trim())==="object"||((G=(K=(U=e.type)==null?void 0:U.text)==null?void 0:K.replace("| undefined",""))==null?void 0:G.trim().includes("Promise"))||((Q=this.data)==null?void 0:Q.args)&&this.data.args[e.name]&&(typeof this.data.args[e.name]=="function"||typeof this.data.args[e.name].then=="function"))return;{let o=this.data&&(Y=(X=this.data.args[e.name])!=null?X:this.data.args[(W=e.fieldName)!=null?W:e.name])!=null?Y:"",i="";typeof o=="string"?i=o:i=JSON.stringify(o),n=m`
              <omni-text-field
                class="docs-text-field"
                data-omni-keyboard-hidden
                ?disabled=${this.disabled}
                .value="${ge(i)}"
                @input="${async y=>{var f,Z,L,ee;let l=((f=y.target.shadowRoot)==null?void 0:f.getElementById("inputField")).value;typeof o!="string"&&(l=JSON.parse(l)),this._propertyChanged({property:this.data&&e.fieldName&&((Z=this.data.args)==null?void 0:Z.hasOwnProperty(e.fieldName))?e.fieldName:e.name,newValue:l,oldValue:this.data?(ee=this.data.args[e.name])!=null?ee:this.data.args[(L=e.fieldName)!=null?L:e.name]:void 0})}}">
              </omni-text-field>
            `}}}catch(o){console.error(o);return}n&&s.push({html:m`
                            <omni-label class="live-header" label="${e.name}"></omni-label>                
                ${n}
              `,name:e.name})})}),s.length===0&&r.length===0?ne:m` <div style="padding: 24px;"> ${s.map(p=>p.html)} ${r.map(p=>p.html)} </div> `}_propertyChanged(t){this.dispatchEvent(new CustomEvent("property-change",{detail:t}))}_currentCodeTheme(){var t;return((t=this.theme)==null?void 0:t.toLowerCase())==="dark"?ie:de}async updated(t){t.has("disabled")&&this.slotCodeEditors&&this.resetSlots(),t.has("data")&&t.get("data")&&(this._firstRenderCompleted||(await this.updateComplete,this.dispatchEvent(new CustomEvent("component-render-complete",{bubbles:!0})),this._firstRenderCompleted=!0))}};d([c({type:Object,reflect:!1})],a.prototype,"data",2),d([c({type:String,reflect:!0})],a.prototype,"element",2),d([c({type:Boolean,reflect:!0})],a.prototype,"disabled",2),d([c({type:String,attribute:"ignore-attributes",reflect:!0})],a.prototype,"ignoreAttributes",2),d([c({type:String,attribute:"custom-elements",reflect:!0})],a.prototype,"customElementsPath",2),d([me()],a.prototype,"customElements",2),d([pe(".slot-code")],a.prototype,"slotCodeEditors",2),a=d([le("live-property-editor")],a);export{a};
//# sourceMappingURL=chunk.ZAFZMLR6.js.map
