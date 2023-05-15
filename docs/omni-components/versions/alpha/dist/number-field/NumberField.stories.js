import"../chunks-js/chunk.BHMK37T3.js";import{a as F,b as S,c as y,d as $,e as B,f as C,g as N,h as v,i as A}from"../chunks-js/chunk.VBXXYKHH.js";import"../chunks-js/chunk.K2UMXYHA.js";import"../chunks-js/chunk.CQEQBUXK.js";import"../chunks-js/chunk.E3RY574V.js";import"../chunks-js/chunk.XGCBNSF2.js";import{a as E}from"../chunks-js/chunk.IRJIQSYL.js";import{a as o}from"../chunks-js/chunk.G3QHRCKP.js";import{a as c,b as x}from"../chunks-js/chunk.MHLMY33S.js";import{l as n}from"../chunks-js/chunk.BM33DA64.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.ZPV4YWBP.js";import{a as i}from"../chunks-js/chunk.PJH7M65U.js";import{b as s,c as p}from"../chunks-js/chunk.N6OKW4B2.js";import{d as u}from"../chunks-js/chunk.W54IKPJD.js";import"../chunks-js/chunk.B6SUKNHE.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as r,d as t}from"../chunks-js/chunk.F6MIXR4E.js";import{h,m as d,p as b}from"../chunks-js/chunk.BF43NN75.js";d();b();var I=h(E(),1);var X={title:"UI Components/Number Field",component:"omni-number-field"},Y={render:e=>r`
    <omni-number-field
      data-testid="test-number-field"
      label="${i(e.label)}"
      value="${e.value}"
      hint="${i(e.hint)}"
      error="${i(e.error)}"
      ?disabled="${e.disabled}"
      ?clearable="${e.clearable}"
      >${e.prefix?r`${`\r
`}${o(n("prefix",e.prefix))}`:t}
      ${e.clear?r`${`\r
`}${o(n("clear",e.clear))}`:t}${e.suffix?r`${`\r
`}${o(n("suffix",e.suffix))}`:t}${e.prefix||e.suffix||e.clear?`\r
`:t}</omni-number-field>
  `,name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,prefix:"",suffix:"",clear:""},play:async e=>{let l=p(e.canvasElement).getByTestId("test-number-field");l.value="";let f=I.fn();l.addEventListener("input",f);let m=l.shadowRoot.getElementById("inputField");c(m);let a="12345";await x.type(m,a,{pointerEventsCheck:0}),await s(()=>u(m).toHaveValue(parseInt(a)),{timeout:3e3}),await s(()=>u(f).toBeCalledTimes(a.length),{timeout:3e3})}},Z=F("omni-number-field"),ee=S("omni-number-field"),re=y("omni-number-field"),te=$("omni-number-field",123),oe=N("omni-number-field",123),ie=v("omni-number-field",123),ne=B("omni-number-field"),le=C("omni-number-field"),me=A("omni-number-field",123);export{oe as Clearable,ie as Custom_Clear_Slot_Icon,me as Disabled,re as Error_Label,ee as Hint,Y as Interactive,Z as Label,ne as Prefix,le as Suffix,te as Value,X as default};
//# sourceMappingURL=NumberField.stories.js.map
