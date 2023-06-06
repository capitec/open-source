import{a as F,b as x,c as y,d as B,e as S,f as $,g as A,h as w}from"../chunks-js/chunk.EWZHBVOA.js";import"../chunks-js/chunk.K5WF6YMP.js";import"../chunks-js/chunk.QHXD4ILF.js";import"../chunks-js/chunk.55232CD4.js";import"../chunks-js/chunk.Y2FNDKPS.js";import{a as h}from"../chunks-js/chunk.IRJIQSYL.js";import{b as C}from"../chunks-js/chunk.MHLMY33S.js";import{a as i}from"../chunks-js/chunk.XCXCHO25.js";import{b as m,c}from"../chunks-js/chunk.N6OKW4B2.js";import{d as a}from"../chunks-js/chunk.W54IKPJD.js";import{E as f,m as d}from"../chunks-js/chunk.VX4HTDBM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.Z5LIJAXH.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.KSLF5GY7.js";import"../chunks-js/chunk.XQ6LOMNM.js";import"../chunks-js/chunk.DVHQDKY6.js";import{a as n}from"../chunks-js/chunk.SUFNDWVH.js";import"../chunks-js/chunk.QFUUHCSV.js";import"../chunks-js/chunk.6HAYHFHP.js";import"../chunks-js/chunk.LB764BBD.js";import"../chunks-js/chunk.KRAWXAJA.js";import"../chunks-js/chunk.RWAXFZOX.js";import"../chunks-js/chunk.QA3WYCV3.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as t,e as l}from"../chunks-js/chunk.L3RZWW2F.js";import{h as I,m as b,p as u}from"../chunks-js/chunk.BF43NN75.js";b();u();var v=I(h(),1);var Y={title:"UI Components/Color Field",component:"omni-color-field"},L={render:e=>t`
    <omni-color-field
      data-testid="test-color-field"
      label="${i(e.label)}"
      value="${e.value}"
      hint="${i(e.hint)}"
      error="${i(e.error)}"
      ?disabled="${e.disabled}"
      ?clearable="${e.clearable}"
      >${e.prefix?t`${`\r
`}${n(d("prefix",e.prefix))}`:l}
       ${e.clear?t`${`\r
`}${n(d("clear",e.clear))}`:l}${e.suffix?t`${`\r
`}${n(d("suffix",e.suffix))}`:l}${e.prefix||e.suffix||e.clear?`\r
`:l}</omni-color-field
    >
  `,frameworkSources:[{framework:"Vue",load:e=>f(L.render(e),void 0,o=>o.replace(" disabled",' :disabled="true"').replace(" clearable",' :clearable="true"'))}],name:"Interactive",args:{label:"Label",value:"",data:{},hint:"",error:"",disabled:!1,clearable:!1,prefix:"",suffix:"",clear:""},play:async e=>{var r;let s=(r=c(e.canvasElement).getByTestId("test-color-field").shadowRoot)==null?void 0:r.getElementById("inputField");await a(s.type).toBe("color")}},Z=F("omni-color-field"),ee=x("omni-color-field"),oe=y("omni-color-field"),te=B("omni-color-field","#f6b73c"),re=A("omni-color-field","#f6b73c"),le=w("omni-color-field","#f6b73c"),ie=S("omni-color-field"),ae=$("omni-color-field"),T={render:e=>t`<omni-color-field data-testid="test-field" label="${i(e.label)}" disabled></omni-color-field>`,frameworkSources:[{framework:"React",load:e=>`import { OmniColorField } from "@capitec/omni-components-react/color-field";

const App = () => <OmniColorField${e.label?` label='${e.label}'`:""}${e.disabled?" disabled":""}/>;`},{framework:"Vue",load:e=>f(T.render(e),void 0,o=>o.replace(" disabled",' :disabled="true"').replace(" clearable",' :clearable="true"'))}],name:"Disabled",description:"Prevent interaction (pointer events).",args:{label:"Disabled",disabled:!0},play:async e=>{var p;let o=c(e.canvasElement).getByTestId("test-field"),s=o.attributes.getNamedItem("disabled");await a(s).toBeTruthy();let r=v.fn();o.addEventListener("input",r);let E=(p=o.shadowRoot)==null?void 0:p.getElementById("inputField");await C.type(E,"Value Update 3",{pointerEventsCheck:0}),await m(()=>a(o.value).toBeFalsy(),{timeout:3e3}),await m(()=>a(r).toBeCalledTimes(0),{timeout:3e3})}};export{re as Clearable,le as Custom_Clear_Slot,T as Disabled,oe as Error_Label,ee as Hint,L as Interactive,Z as Label,ie as Prefix,ae as Suffix,te as Value,Y as default};
//# sourceMappingURL=ColorField.stories.js.map
