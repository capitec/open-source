import{a as F,b as x,c as y,d as C,e as B,f as $,g as S}from"../chunks-js/chunk.M3SJH7XF.js";import"../chunks-js/chunk.XTHGQZD7.js";import"../chunks-js/chunk.K2UMXYHA.js";import"../chunks-js/chunk.P5BVWJU5.js";import"../chunks-js/chunk.E3RY574V.js";import"../chunks-js/chunk.XGCBNSF2.js";import{a as w}from"../chunks-js/chunk.IRJIQSYL.js";import{a as n}from"../chunks-js/chunk.G3QHRCKP.js";import{b as u}from"../chunks-js/chunk.MHLMY33S.js";import{l as d}from"../chunks-js/chunk.BM33DA64.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.ZPV4YWBP.js";import{a as i}from"../chunks-js/chunk.PJH7M65U.js";import{b as m,c as f}from"../chunks-js/chunk.N6OKW4B2.js";import{d as a}from"../chunks-js/chunk.W54IKPJD.js";import"../chunks-js/chunk.B6SUKNHE.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as o,d as r}from"../chunks-js/chunk.F6MIXR4E.js";import{h as E,m as p,p as b}from"../chunks-js/chunk.BF43NN75.js";p();b();var A=E(w(),1);var K={title:"UI Components/Color Field",component:"omni-color-field"},Q={render:e=>o`
    <omni-color-field
      data-testid="test-color-field"
      label="${i(e.label)}"
      value="${e.value}"
      hint="${i(e.hint)}"
      error="${i(e.error)}"
      ?disabled="${e.disabled}"
      ?clearable="${e.clearable}"
      >${e.prefix?o`${`\r
`}${n(d("prefix",e.prefix))}`:r}
       ${e.clear?o`${`\r
`}${n(d("clear",e.clear))}`:r}${e.suffix?o`${`\r
`}${n(d("suffix",e.suffix))}`:r}${e.prefix||e.suffix||e.clear?`\r
`:r}</omni-color-field
    >
  `,name:"Interactive",args:{label:"Label",value:"",data:{},hint:"",error:"",disabled:!1,clearable:!1,prefix:"",suffix:"",clear:""},play:async e=>{var l;let s=(l=f(e.canvasElement).getByTestId("test-color-field").shadowRoot)==null?void 0:l.getElementById("inputField");await a(s.type).toBe("color")}},W=F("omni-color-field"),X=x("omni-color-field"),Y=y("omni-color-field"),Z=C("omni-color-field","#f6b73c"),ee=S("omni-color-field","#f6b73c"),oe=B("omni-color-field"),te=$("omni-color-field"),le={render:e=>o`<omni-color-field data-testid="test-field" label="${i(e.label)}" disabled></omni-color-field>`,frameworkSources:[{framework:"React",load:e=>`import { OmniColorField } from "@capitec/omni-components-react/color-field";

const App = () => <OmniColorField${e.label?` label='${e.label}'`:""}${e.disabled?" disabled":""}/>;`}],name:"Disabled",description:"Prevent interaction (pointer events).",args:{label:"Disabled",disabled:!0},play:async e=>{var c;let t=f(e.canvasElement).getByTestId("test-field"),s=t.attributes.getNamedItem("disabled");await a(s).toBeTruthy();let l=A.fn();t.addEventListener("input",l);let v=(c=t.shadowRoot)==null?void 0:c.getElementById("inputField");await u.type(v,"Value Update 3",{pointerEventsCheck:0}),await m(()=>a(t.value).toBeFalsy(),{timeout:3e3}),await m(()=>a(l).toBeCalledTimes(0),{timeout:3e3})}};export{ee as Clear,le as Disabled,Y as Error_Label,X as Hint,Q as Interactive,W as Label,oe as Prefix,te as Suffix,Z as Value,K as default};
//# sourceMappingURL=ColorField.stories.js.map
