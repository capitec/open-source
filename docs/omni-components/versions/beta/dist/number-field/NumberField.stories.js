import"../chunks-js/chunk.5O52QFYZ.js";import{a as F,b as y,c as $,d as S,e as B,f as v,g as N,h as A}from"../chunks-js/chunk.5ZG34KZN.js";import"../chunks-js/chunk.K2UMXYHA.js";import"../chunks-js/chunk.P5BVWJU5.js";import"../chunks-js/chunk.E3RY574V.js";import"../chunks-js/chunk.XGCBNSF2.js";import{a as h}from"../chunks-js/chunk.IRJIQSYL.js";import{a as i}from"../chunks-js/chunk.G3QHRCKP.js";import{a as c,b as x}from"../chunks-js/chunk.MHLMY33S.js";import{l as n}from"../chunks-js/chunk.IFPMJPKV.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.ZPV4YWBP.js";import{a as o}from"../chunks-js/chunk.6QCQBNRL.js";import{b as s,c as b}from"../chunks-js/chunk.N6OKW4B2.js";import{d as f}from"../chunks-js/chunk.W54IKPJD.js";import"../chunks-js/chunk.B6SUKNHE.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as r,d as t}from"../chunks-js/chunk.F6MIXR4E.js";import{h as I,m as d,p}from"../chunks-js/chunk.BF43NN75.js";d();p();var C=I(h(),1);var W={title:"UI Components/Number Field",component:"omni-number-field"},X={render:e=>r`
    <omni-number-field
      data-testid="test-number-field"
      label="${o(e.label)}"
      value="${e.value}"
      hint="${o(e.hint)}"
      error="${o(e.error)}"
      ?disabled="${e.disabled}"
      ?clearable="${e.clearable}"
      >${e.prefix?r`${`\r
`}${i(n("prefix",e.prefix))}`:t}
      ${e.clear?r`${`\r
`}${i(n("clear",e.clear))}`:t}${e.suffix?r`${`\r
`}${i(n("suffix",e.suffix))}`:t}${e.prefix||e.suffix||e.clear?`\r
`:t}</omni-number-field>
  `,name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,prefix:"",suffix:"",clear:""},play:async e=>{let l=b(e.canvasElement).getByTestId("test-number-field");l.value="";let u=C.fn();l.addEventListener("input",u);let m=l.shadowRoot.getElementById("inputField");c(m);let a="12345";await x.type(m,a,{pointerEventsCheck:0}),await s(()=>f(m).toHaveValue(parseInt(a)),{timeout:3e3}),await s(()=>f(u).toBeCalledTimes(a.length),{timeout:3e3})}},Y=F("omni-number-field"),Z=y("omni-number-field"),ee=$("omni-number-field"),re=S("omni-number-field",123),te=N("omni-number-field",123),ie=B("omni-number-field"),oe=v("omni-number-field"),ne=A("omni-number-field",123);export{te as Clear,ne as Disabled,ee as Error_Label,Z as Hint,X as Interactive,Y as Label,ie as Prefix,oe as Suffix,re as Value,W as default};
//# sourceMappingURL=NumberField.stories.js.map
