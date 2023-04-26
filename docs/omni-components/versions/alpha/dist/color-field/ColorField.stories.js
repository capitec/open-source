import{a as F,b as x,c as y,d as C,e as B,f as S,g as $}from"../chunks-js/chunk.YD3W5R6Q.js";import"../chunks-js/chunk.XTHGQZD7.js";import"../chunks-js/chunk.K2UMXYHA.js";import"../chunks-js/chunk.P5BVWJU5.js";import"../chunks-js/chunk.E3RY574V.js";import"../chunks-js/chunk.XGCBNSF2.js";import{a as w}from"../chunks-js/chunk.IRJIQSYL.js";import{a as m}from"../chunks-js/chunk.G3QHRCKP.js";import{b}from"../chunks-js/chunk.MHLMY33S.js";import{l as f}from"../chunks-js/chunk.BM33DA64.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.ZPV4YWBP.js";import{a as r}from"../chunks-js/chunk.PJH7M65U.js";import{b as s,c as d}from"../chunks-js/chunk.N6OKW4B2.js";import{d as l}from"../chunks-js/chunk.W54IKPJD.js";import"../chunks-js/chunk.B6SUKNHE.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as i,d as n}from"../chunks-js/chunk.F6MIXR4E.js";import{h as E,m as c,p as u}from"../chunks-js/chunk.BF43NN75.js";c();u();var A=E(w(),1);var K={title:"UI Components/Color Field",component:"omni-color-field"},Q={render:e=>i`
    <omni-color-field
      data-testid="test-color-field"
      label="${r(e.label)}"
      value="${e.value}"
      hint="${r(e.hint)}"
      error="${r(e.error)}"
      ?disabled="${e.disabled}"
      >${e.prefix?i`${`\r
`}${m(f("prefix",e.prefix))}`:n}${e.suffix?i`${`\r
`}${m(f("suffix",e.suffix))}`:n}${e.prefix||e.suffix?`\r
`:n}</omni-color-field
    >
  `,name:"Interactive",args:{label:"Label",value:"",data:{},hint:"",error:"",disabled:!1,prefix:"",suffix:""},play:async e=>{var t;let a=(t=d(e.canvasElement).getByTestId("test-color-field").shadowRoot)==null?void 0:t.getElementById("inputField");await l(a.type).toBe("color")}},W=F("omni-color-field"),X=x("omni-color-field"),Y=y("omni-color-field"),Z=C("omni-color-field","#f6b73c"),ee=$("omni-color-field","#f6b73c"),oe=B("omni-color-field"),te=S("omni-color-field"),ie={render:e=>i`<omni-color-field data-testid="test-field" label="${r(e.label)}" disabled></omni-color-field>`,frameworkSources:[{framework:"React",load:e=>`import { OmniColorField } from "@capitec/omni-components-react/color-field";

const App = () => <OmniColorField${e.label?` label='${e.label}'`:""}${e.disabled?" disabled":""}/>;`}],name:"Disabled",description:"Prevent interaction (pointer events).",args:{label:"Disabled",disabled:!0},play:async e=>{var p;let o=d(e.canvasElement).getByTestId("test-field"),a=o.attributes.getNamedItem("disabled");await l(a).toBeTruthy();let t=A.fn();o.addEventListener("input",t);let v=(p=o.shadowRoot)==null?void 0:p.getElementById("inputField");await b.type(v,"Value Update 3",{pointerEventsCheck:0}),await s(()=>l(o.value).toBeFalsy(),{timeout:3e3}),await s(()=>l(t).toBeCalledTimes(0),{timeout:3e3})}};export{ee as Clear,ie as Disabled,Y as Error_Label,X as Hint,Q as Interactive,W as Label,oe as Prefix,te as Suffix,Z as Value,K as default};
//# sourceMappingURL=ColorField.stories.js.map
