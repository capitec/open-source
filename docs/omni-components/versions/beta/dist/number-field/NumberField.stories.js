import"../chunks-js/chunk.3X333K55.js";import{a as F,b as y,c as S,d as B,e as v,f as $,g as N}from"../chunks-js/chunk.CWEPCBE3.js";import"../chunks-js/chunk.K2UMXYHA.js";import"../chunks-js/chunk.WASXY5YJ.js";import"../chunks-js/chunk.E3RY574V.js";import{a as h}from"../chunks-js/chunk.IRJIQSYL.js";import{a as i}from"../chunks-js/chunk.PJH7M65U.js";import{a as s}from"../chunks-js/chunk.G3QHRCKP.js";import{a as x,b as c}from"../chunks-js/chunk.MHLMY33S.js";import{k as f}from"../chunks-js/chunk.C6CJZ2DD.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.5NFB2EUQ.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.ZPV4YWBP.js";import{b as l,c as b}from"../chunks-js/chunk.N6OKW4B2.js";import{d as a}from"../chunks-js/chunk.W54IKPJD.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as t,d as r}from"../chunks-js/chunk.F6MIXR4E.js";import{h as I,m as d,p}from"../chunks-js/chunk.BF43NN75.js";d();p();var A=I(h(),1);var Q={title:"UI Components/Number Field",component:"omni-number-field"},W={render:e=>t`
    <omni-number-field
      data-testid="test-number-field"
      label="${i(e.label)}"
      value="${e.value}"
      hint="${i(e.hint)}"
      error="${i(e.error)}"
      ?disabled="${e.disabled}"
      >${e.prefix?t`${`\r
`}${s(f("prefix",e.prefix))}`:r}${e.suffix?t`${`\r
`}${s(f("suffix",e.suffix))}`:r}${e.prefix||e.suffix?`\r
`:r}</omni-number-field>
  `,name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,prefix:"",suffix:""},play:async e=>{let o=b(e.canvasElement).getByTestId("test-number-field");o.value="";let u=A.fn();o.addEventListener("input",u);let n=o.shadowRoot.getElementById("inputField");x(n);let m="12345";await c.type(n,m,{pointerEventsCheck:0}),await l(()=>a(n).toHaveValue(parseInt(m)),{timeout:3e3}),await l(()=>a(u).toBeCalledTimes(m.length),{timeout:3e3})}},X=F("omni-number-field"),Y=y("omni-number-field"),Z=S("omni-number-field"),ee=B("omni-number-field",123),te=v("omni-number-field"),re=$("omni-number-field"),ie=N("omni-number-field",123);export{ie as Disabled,Z as Error_Label,Y as Hint,W as Interactive,X as Label,te as Prefix,re as Suffix,ee as Value,Q as default};
//# sourceMappingURL=NumberField.stories.js.map
