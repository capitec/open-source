import{a as ge}from"./chunk.APNKRDWQ.js";import{b as se,c as ie,d as de,h as he,t as fe,u as ue}from"./chunk.VT33ZWJV.js";import{a as re}from"./chunk.W7VHYLAH.js";import{i as ce}from"./chunk.ZTHUBORR.js";import{a as le,b as p,c as me,e as pe}from"./chunk.4PFNWG2J.js";import{a as ae,d as m,g as ne}from"./chunk.63YMDT6M.js";import{j as d,m as te,p as oe}from"./chunk.BF43NN75.js";te();oe();var n=class extends ce{constructor(){super(...arguments);this.customElementsPath="./custom-elements.json"}async connectedCallback(){var t;super.connectedCallback(),this.customElements=await ue(this.customElementsPath),document.addEventListener("omni-docs-theme-change",()=>{var s;this.theme=(s=getComputedStyle(document.documentElement).getPropertyValue("--code-editor-theme"))==null?void 0:s.trim();let a=this.renderRoot.querySelectorAll("code-editor");a&&a.forEach(f=>{f.updateExtensions()})}),this.theme=(t=getComputedStyle(document.documentElement).getPropertyValue("--code-editor-theme"))==null?void 0:t.trim()}static get styles(){return[super.styles,ae`
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
            `]}resetSlots(){this.slotCodeEditors&&this.slotCodeEditors.forEach(async t=>{let a=t.getAttribute("data-slot-name");if(a){let s=this.data&&this.data.args[a]?this.data.args[a]:void 0;await t.refresh(()=>s)}})}render(){var f;if(!this.customElements)return m`<omni-loading-icon class="loading"></omni-loading-icon>`;let t=he(this.element,this.customElements),a=[],s=[];return(f=t==null?void 0:t.declarations)==null||f.forEach(c=>{let u=c;u.slots&&u.slots.forEach(e=>{s.find(r=>r.name===e.name)||this.data&&!Object.prototype.hasOwnProperty.call(this.data.args,e.name)||s.push({name:e.name,html:m`
              <omni-label class="live-header" label="${e.name}"></omni-label>
              <code-editor
                class="slot-code"
                data-slot-name="${e.name}"
                ?disabled=${this.disabled}
                .extensions="${async()=>[this._currentCodeTheme(),se(await fe())]}"
                .code="${re(this.data&&this.data.args[e.name]?this.data.args[e.name]:void 0)}"
                @codemirror-source-change="${r=>{this._propertyChanged({property:e.name,newValue:r.detail.source,oldValue:r.detail.oldSource})}}">
              </code-editor>
            `})}),u.attributes&&u.attributes.forEach(e=>{var x,v,b,C,E,w,k,$,N,V,S,T,M,R,O,A,F,_,P,j,H,z,q,B,D,I,J,U,K,G,Q,W,X,Y;if(this.ignoreAttributes&&this.ignoreAttributes.split(",").includes(e.name)||a.find(o=>o.name===e.name))return;let r;try{if(((b=(v=(x=e==null?void 0:e.type)==null?void 0:x.text)==null?void 0:v.replace("| undefined",""))==null?void 0:b.trim())==="boolean")r=m`
              <omni-switch
                class="docs-select"
                ?disabled=${this.disabled}
                ?checked="${this.data?(E=this.data.args[e.name])!=null?E:this.data.args[(C=e.fieldName)!=null?C:e.name]:e.default==="true"}"
                @value-change="${o=>{var i;this._propertyChanged({property:this.data&&e.fieldName&&((i=this.data.args)==null?void 0:i.hasOwnProperty(e.fieldName))?e.fieldName:e.name,newValue:o.detail.new,oldValue:o.detail.old})}}">
              </omni-switch>
            `;else if((($=(k=(w=e.type)==null?void 0:w.text)==null?void 0:k.replace("| undefined",""))==null?void 0:$.trim())!=="object"&&((S=(V=(N=e.type)==null?void 0:N.text)==null?void 0:V.replace("| undefined",""))==null?void 0:S.trim())!=="string"&&((R=(M=(T=e.type)==null?void 0:T.text)==null?void 0:M.replace("| undefined",""))==null?void 0:R.trim())!=="boolean"&&!((F=(A=(O=e.type)==null?void 0:O.text)==null?void 0:A.replace("| undefined",""))!=null&&F.trim().includes("Promise"))&&((j=(P=(_=e.type)==null?void 0:_.text)==null?void 0:P.replace("| undefined",""))==null?void 0:j.trim().includes("'"))){let o=(z=(H=e.type)==null?void 0:H.text)==null?void 0:z.replace("| undefined","").split(" | "),i=[];for(let g in o){let l=o[g].replaceAll("| ","").replace(/(\r\n|\n|\r)/gm,"").replaceAll(" ","");i.push(l.substring(1,l.length-1))}let y=this.data?(B=this.data.args[e.name])!=null?B:this.data.args[(q=e.fieldName)!=null?q:e.name]:void 0;r=m`
              <omni-select
                class="docs-select"
                ?disabled=${this.disabled}
                value=${y}
                .items=${i}
                @change="${g=>{var h;let l=g.target.value;this._propertyChanged({property:this.data&&e.fieldName&&((h=this.data.args)==null?void 0:h.hasOwnProperty(e.fieldName))?e.fieldName:e.name,newValue:l,oldValue:this.data?this.data.args[e.name]:void 0})}}"
            >
                
            </omni-select>

            `}else{if(((J=(I=(D=e.type)==null?void 0:D.text)==null?void 0:I.replace("| undefined",""))==null?void 0:J.trim())==="object"||((G=(K=(U=e.type)==null?void 0:U.text)==null?void 0:K.replace("| undefined",""))==null?void 0:G.trim().includes("Promise"))||((Q=this.data)==null?void 0:Q.args)&&this.data.args[e.name]&&(typeof this.data.args[e.name]=="function"||typeof this.data.args[e.name].then=="function"))return;{let o=this.data&&(Y=(X=this.data.args[e.name])!=null?X:this.data.args[(W=e.fieldName)!=null?W:e.name])!=null?Y:"",i="";typeof o=="string"?i=o:i=JSON.stringify(o),r=m`
              <omni-text-field
                class="docs-text-field"
                data-omni-keyboard-hidden
                ?disabled=${this.disabled}
                .value="${ge(i)}"
                @input="${async y=>{var h,Z,L,ee;let l=((h=y.target.shadowRoot)==null?void 0:h.getElementById("inputField")).value;typeof o!="string"&&(l=JSON.parse(l)),this._propertyChanged({property:this.data&&e.fieldName&&((Z=this.data.args)==null?void 0:Z.hasOwnProperty(e.fieldName))?e.fieldName:e.name,newValue:l,oldValue:this.data?(ee=this.data.args[e.name])!=null?ee:this.data.args[(L=e.fieldName)!=null?L:e.name]:void 0})}}">
              </omni-text-field>
            `}}}catch(o){console.error(o);return}r&&a.push({html:m`
                            <omni-label class="live-header" label="${e.name}"></omni-label>                
                ${r}
              `,name:e.name})})}),a.length===0&&s.length===0?ne:m` <div style="padding: 24px;"> ${a.map(c=>c.html)} ${s.map(c=>c.html)} </div> `}_propertyChanged(t){this.dispatchEvent(new CustomEvent("property-change",{detail:t}))}_currentCodeTheme(){var t;return((t=this.theme)==null?void 0:t.toLowerCase())==="dark"?ie:de}async updated(t){t.has("disabled")&&this.slotCodeEditors&&this.resetSlots(),t.has("data")&&t.get("data")&&(this._firstRenderCompleted||(await this.updateComplete,this.dispatchEvent(new CustomEvent("component-render-complete",{bubbles:!0})),this._firstRenderCompleted=!0))}};d([p({type:Object,reflect:!1})],n.prototype,"data",2),d([p({type:String,reflect:!0})],n.prototype,"element",2),d([p({type:Boolean,reflect:!0})],n.prototype,"disabled",2),d([p({type:String,attribute:"ignore-attributes",reflect:!0})],n.prototype,"ignoreAttributes",2),d([p({type:String,attribute:"custom-elements",reflect:!0})],n.prototype,"customElementsPath",2),d([me()],n.prototype,"customElements",2),d([pe(".slot-code")],n.prototype,"slotCodeEditors",2),n=d([le("live-property-editor")],n);export{n as a};
//# sourceMappingURL=chunk.L4A2IC7Q.js.map
