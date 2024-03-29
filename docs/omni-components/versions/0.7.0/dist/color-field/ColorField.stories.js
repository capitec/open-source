import{a as C,b as F,c as x,d as y,e as B,f as $,g as S,h as A}from"../chunks-js/chunk.RYXMLQGX.js";import"../chunks-js/chunk.FOZT52FM.js";import"../chunks-js/chunk.K2UMXYHA.js";import"../chunks-js/chunk.AMDN2Z2F.js";import"../chunks-js/chunk.E3RY574V.js";import"../chunks-js/chunk.XGCBNSF2.js";import{a as I}from"../chunks-js/chunk.IRJIQSYL.js";import"../chunks-js/chunk.LCIHREUY.js";import{b as u}from"../chunks-js/chunk.MHLMY33S.js";import{m as s}from"../chunks-js/chunk.WI5F3R4J.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.ZPV4YWBP.js";import{a as i}from"../chunks-js/chunk.6QCQBNRL.js";import{b as m,c as f}from"../chunks-js/chunk.N6OKW4B2.js";import{d as a}from"../chunks-js/chunk.W54IKPJD.js";import{a as n}from"../chunks-js/chunk.32OT4JFD.js";import"../chunks-js/chunk.B6SUKNHE.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as o,d as r}from"../chunks-js/chunk.F6MIXR4E.js";import{h as w,m as p,p as b}from"../chunks-js/chunk.BF43NN75.js";p();b();var v=w(I(),1);var Q={title:"UI Components/Color Field",component:"omni-color-field"},W={render:e=>o`
    <omni-color-field
      data-testid="test-color-field"
      label="${i(e.label)}"
      value="${e.value}"
      hint="${i(e.hint)}"
      error="${i(e.error)}"
      ?disabled="${e.disabled}"
      ?clearable="${e.clearable}"
      >${e.prefix?o`${`\r
`}${n(s("prefix",e.prefix))}`:r}
       ${e.clear?o`${`\r
`}${n(s("clear",e.clear))}`:r}${e.suffix?o`${`\r
`}${n(s("suffix",e.suffix))}`:r}${e.prefix||e.suffix||e.clear?`\r
`:r}</omni-color-field
    >
  `,name:"Interactive",args:{label:"Label",value:"",data:{},hint:"",error:"",disabled:!1,clearable:!1,prefix:"",suffix:"",clear:""},play:async e=>{var l;let d=(l=f(e.canvasElement).getByTestId("test-color-field").shadowRoot)==null?void 0:l.getElementById("inputField");await a(d.type).toBe("color")}},X=C("omni-color-field"),Y=F("omni-color-field"),Z=x("omni-color-field"),ee=y("omni-color-field","#f6b73c"),oe=S("omni-color-field","#f6b73c"),te=A("omni-color-field","#f6b73c"),le=B("omni-color-field"),re=$("omni-color-field"),ie={render:e=>o`<omni-color-field data-testid="test-field" label="${i(e.label)}" disabled></omni-color-field>`,frameworkSources:[{framework:"React",load:e=>`import { OmniColorField } from "@capitec/omni-components-react/color-field";

const App = () => <OmniColorField${e.label?` label='${e.label}'`:""}${e.disabled?" disabled":""}/>;`}],name:"Disabled",description:"Prevent interaction (pointer events).",args:{label:"Disabled",disabled:!0},play:async e=>{var c;let t=f(e.canvasElement).getByTestId("test-field"),d=t.attributes.getNamedItem("disabled");await a(d).toBeTruthy();let l=v.fn();t.addEventListener("input",l);let E=(c=t.shadowRoot)==null?void 0:c.getElementById("inputField");await u.type(E,"Value Update 3",{pointerEventsCheck:0}),await m(()=>a(t.value).toBeFalsy(),{timeout:3e3}),await m(()=>a(l).toBeCalledTimes(0),{timeout:3e3})}};export{oe as Clearable,te as Custom_Clear_Slot,ie as Disabled,Z as Error_Label,Y as Hint,W as Interactive,X as Label,le as Prefix,re as Suffix,ee as Value,Q as default};
//# sourceMappingURL=ColorField.stories.js.map
