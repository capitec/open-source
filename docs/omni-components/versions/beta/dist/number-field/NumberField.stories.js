import"../chunks-js/chunk.5O52QFYZ.js";import{a as F,b as y,c as S,d as B,e as $,f as v,g as N,h as A}from"../chunks-js/chunk.NOUGGDW5.js";import"../chunks-js/chunk.K2UMXYHA.js";import"../chunks-js/chunk.P5BVWJU5.js";import"../chunks-js/chunk.E3RY574V.js";import"../chunks-js/chunk.XGCBNSF2.js";import{a as h}from"../chunks-js/chunk.IRJIQSYL.js";import{a as i}from"../chunks-js/chunk.PJH7M65U.js";import{a}from"../chunks-js/chunk.G3QHRCKP.js";import{a as x,b as c}from"../chunks-js/chunk.MHLMY33S.js";import{k as f}from"../chunks-js/chunk.C6CJZ2DD.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.5NFB2EUQ.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.ZPV4YWBP.js";import{b as l,c as b}from"../chunks-js/chunk.N6OKW4B2.js";import{d as s}from"../chunks-js/chunk.W54IKPJD.js";import"../chunks-js/chunk.B6SUKNHE.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as t,d as r}from"../chunks-js/chunk.F6MIXR4E.js";import{h as I,m as d,p}from"../chunks-js/chunk.BF43NN75.js";d();p();var C=I(h(),1);var W={title:"UI Components/Number Field",component:"omni-number-field"},X={render:e=>t`
    <omni-number-field
      data-testid="test-number-field"
      label="${i(e.label)}"
      value="${e.value}"
      hint="${i(e.hint)}"
      error="${i(e.error)}"
      ?disabled="${e.disabled}"
      ?clearable="${e.clearable}"
      >${e.prefix?t`${`\r
`}${a(f("prefix",e.prefix))}`:r}${e.suffix?t`${`\r
`}${a(f("suffix",e.suffix))}`:r}${e.prefix||e.suffix?`\r
`:r}</omni-number-field>
  `,name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,prefix:"",suffix:""},play:async e=>{let o=b(e.canvasElement).getByTestId("test-number-field");o.value="";let u=C.fn();o.addEventListener("input",u);let n=o.shadowRoot.getElementById("inputField");x(n);let m="12345";await c.type(n,m,{pointerEventsCheck:0}),await l(()=>s(n).toHaveValue(parseInt(m)),{timeout:3e3}),await l(()=>s(u).toBeCalledTimes(m.length),{timeout:3e3})}},Y=F("omni-number-field"),Z=y("omni-number-field"),ee=S("omni-number-field"),te=B("omni-number-field",123),re=N("omni-number-field",123),ie=$("omni-number-field"),oe=v("omni-number-field"),ne=A("omni-number-field",123);export{re as Clear,ne as Disabled,ee as Error_Label,Z as Hint,X as Interactive,Y as Label,ie as Prefix,oe as Suffix,te as Value,W as default};
//# sourceMappingURL=NumberField.stories.js.map
