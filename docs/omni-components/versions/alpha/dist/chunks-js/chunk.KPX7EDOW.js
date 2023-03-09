import{a as ue}from"./chunk.I42QKPBU.js";import{a as se,b as re,c as ie,f as pe,r as he,s as fe}from"./chunk.FB7ASSMP.js";import{a as ne}from"./chunk.PJH7M65U.js";import{i as ce}from"./chunk.AVPPSB5Z.js";import{a as de,b as p,c as le,e as me}from"./chunk.S2K25ADN.js";import{a as oe,b as m,d as ae}from"./chunk.F6MIXR4E.js";import{j as d,m as ee,p as te}from"./chunk.BF43NN75.js";ee();te();var a=class extends ce{constructor(){super(...arguments);this.customElementsPath="./custom-elements.json"}async connectedCallback(){var t;super.connectedCallback(),this.customElements=await fe(this.customElementsPath),document.addEventListener("omni-docs-theme-change",s=>{var h;this.theme=(h=getComputedStyle(document.documentElement).getPropertyValue("--code-editor-theme"))==null?void 0:h.trim();let r=this.renderRoot.querySelectorAll("code-editor");r&&r.forEach(c=>{c.updateExtensions()})}),this.theme=(t=getComputedStyle(document.documentElement).getPropertyValue("--code-editor-theme"))==null?void 0:t.trim()}static get styles(){return[super.styles,oe`
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
            `]}resetSlots(){this.slotCodeEditors&&this.slotCodeEditors.forEach(async t=>{let s=t.getAttribute("data-slot-name");if(s){let r=this.data&&this.data.args[s]?this.data.args[s]:void 0;await t.refresh(()=>r)}})}render(){var h;if(!this.customElements)return m`<omni-loading-icon class="loading"></omni-loading-icon>`;let t=pe(this.element,this.customElements),s=[],r=[];return(h=t==null?void 0:t.declarations)==null||h.forEach(c=>{let u=c;u.slots&&u.slots.forEach(e=>{r.find(n=>n.name===e.name)||this.data&&!Object.prototype.hasOwnProperty.call(this.data.args,e.name)||r.push({name:e.name,html:m`
              <omni-label class="live-header" label="${e.name}"></omni-label>
              <code-editor
                class="slot-code"
                data-slot-name="${e.name}"
                ?disabled=${this.disabled}
                .extensions="${async()=>[this._currentCodeTheme(),se(await he())]}"
                .code="${ne(this.data&&this.data.args[e.name]?this.data.args[e.name]:void 0)}"
                @codemirror-source-change="${n=>{this._propertyChanged({property:e.name,newValue:n.detail.source,oldValue:n.detail.oldSource})}}">
              </code-editor>
            `})}),u.attributes&&u.attributes.forEach(e=>{var x,v,b,C,E,w,k,$,N,V,S,T,R,O,M,F,_,P,A,j,H,q,z,B,D,I,J,U,K,G,Q,W,X;if(this.ignoreAttributes&&this.ignoreAttributes.split(",").includes(e.name)||s.find(o=>o.name===e.name))return;let n;try{if(((b=(v=(x=e==null?void 0:e.type)==null?void 0:x.text)==null?void 0:v.replace("| undefined",""))==null?void 0:b.trim())==="boolean")n=m`
              <omni-switch
                class="docs-select"
                ?disabled=${this.disabled}
                ?checked="${this.data?(E=this.data.args[e.name])!=null?E:this.data.args[(C=e.fieldName)!=null?C:e.name]:e.default==="true"}"
                @value-change="${o=>{var i;this._propertyChanged({property:this.data&&e.fieldName&&((i=this.data.args)==null?void 0:i.hasOwnProperty(e.fieldName))?e.fieldName:e.name,newValue:o.detail.new,oldValue:o.detail.old})}}">
              </omni-switch>
            `;else if((($=(k=(w=e.type)==null?void 0:w.text)==null?void 0:k.replace("| undefined",""))==null?void 0:$.trim())!=="object"&&((S=(V=(N=e.type)==null?void 0:N.text)==null?void 0:V.replace("| undefined",""))==null?void 0:S.trim())!=="string"&&((O=(R=(T=e.type)==null?void 0:T.text)==null?void 0:R.replace("| undefined",""))==null?void 0:O.trim())!=="boolean"&&!((_=(F=(M=e.type)==null?void 0:M.text)==null?void 0:F.replace("| undefined",""))!=null&&_.trim().includes("Promise"))&&((j=(A=(P=e.type)==null?void 0:P.text)==null?void 0:A.replace("| undefined",""))==null?void 0:j.trim().includes("'"))){let o=(H=e.type)==null?void 0:H.text.split(" | "),i=[];for(let g in o){let l=o[g];i.push(l.substring(1,l.length-1))}let y=this.data?(z=this.data.args[e.name])!=null?z:this.data.args[(q=e.fieldName)!=null?q:e.name]:void 0;n=m`
              <omni-select
                class="docs-select"
                ?disabled=${this.disabled}
                value=${y}
                .items=${i}
                @change="${g=>{var f;let l=g.target.value;this._propertyChanged({property:this.data&&e.fieldName&&((f=this.data.args)==null?void 0:f.hasOwnProperty(e.fieldName))?e.fieldName:e.name,newValue:l,oldValue:this.data?this.data.args[e.name]:void 0})}}"
            >
                
            </omni-select>

            `}else{if(((I=(D=(B=e.type)==null?void 0:B.text)==null?void 0:D.replace("| undefined",""))==null?void 0:I.trim())==="object"||((K=(U=(J=e.type)==null?void 0:J.text)==null?void 0:U.replace("| undefined",""))==null?void 0:K.trim().includes("Promise"))||((G=this.data)==null?void 0:G.args)&&this.data.args[e.name]&&(typeof this.data.args[e.name]=="function"||typeof this.data.args[e.name].then=="function"))return;{let o=this.data&&(X=(W=this.data.args[e.name])!=null?W:this.data.args[(Q=e.fieldName)!=null?Q:e.name])!=null?X:"",i="";typeof o=="string"?i=o:i=JSON.stringify(o),n=m`
              <omni-text-field
                class="docs-text-field"
                data-omni-keyboard-hidden
                ?disabled=${this.disabled}
                .value="${ue(i)}"
                @input="${async y=>{var f,Y,Z,L;let l=((f=y.target.shadowRoot)==null?void 0:f.getElementById("inputField")).value;typeof o!="string"&&(l=JSON.parse(l)),this._propertyChanged({property:this.data&&e.fieldName&&((Y=this.data.args)==null?void 0:Y.hasOwnProperty(e.fieldName))?e.fieldName:e.name,newValue:l,oldValue:this.data?(L=this.data.args[e.name])!=null?L:this.data.args[(Z=e.fieldName)!=null?Z:e.name]:void 0})}}">
              </omni-text-field>
            `}}}catch(o){console.error(o);return}n&&s.push({html:m`
                            <omni-label class="live-header" label="${e.name}"></omni-label>                
                ${n}
              `,name:e.name})})}),s.length===0&&r.length===0?ae:m` <div style="padding: 24px;"> ${s.map(c=>c.html)} ${r.map(c=>c.html)} </div> `}_propertyChanged(t){this.dispatchEvent(new CustomEvent("property-change",{detail:t}))}_currentCodeTheme(){var t;return((t=this.theme)==null?void 0:t.toLowerCase())==="dark"?re:ie}async updated(t){t.has("disabled")&&this.slotCodeEditors&&this.resetSlots(),t.has("data")&&t.get("data")&&(this._firstRenderCompleted||(await this.updateComplete,this.dispatchEvent(new CustomEvent("component-render-complete",{bubbles:!0})),this._firstRenderCompleted=!0))}};d([p({type:Object,reflect:!1})],a.prototype,"data",2),d([p({type:String,reflect:!0})],a.prototype,"element",2),d([p({type:Boolean,reflect:!0})],a.prototype,"disabled",2),d([p({type:String,attribute:"ignore-attributes",reflect:!0})],a.prototype,"ignoreAttributes",2),d([p({type:String,attribute:"custom-elements",reflect:!0})],a.prototype,"customElementsPath",2),d([le()],a.prototype,"customElements",2),d([me(".slot-code")],a.prototype,"slotCodeEditors",2),a=d([de("live-property-editor")],a);export{a};
//# sourceMappingURL=chunk.KPX7EDOW.js.map
