import"../chunks-js/chunk.DW6OMRGI.js";import{a as F,b as y,c as S,d as v,e as B,f as N,g as $}from"../chunks-js/chunk.FTYJ2BOG.js";import"../chunks-js/chunk.K2UMXYHA.js";import"../chunks-js/chunk.SR577AVI.js";import"../chunks-js/chunk.E3RY574V.js";import{a as x,b as c}from"../chunks-js/chunk.BSAAPWNB.js";import{k as f}from"../chunks-js/chunk.FB7ASSMP.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.5NFB2EUQ.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.CFGXHLKC.js";import{a as i}from"../chunks-js/chunk.PJH7M65U.js";import{a}from"../chunks-js/chunk.NPKMPKBG.js";import{a as s}from"../chunks-js/chunk.G3QHRCKP.js";import{a as C}from"../chunks-js/chunk.RSXCIR4B.js";import{b as l,c as b}from"../chunks-js/chunk.VKUMRECO.js";import"../chunks-js/chunk.UN7JNIRZ.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as t,d as r}from"../chunks-js/chunk.F6MIXR4E.js";import{h as I,m as d,p}from"../chunks-js/chunk.BF43NN75.js";d();p();var A=I(C(),1);var Q={title:"UI Components/Number Field",component:"omni-number-field"},W={render:e=>t`
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
  `,name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,prefix:"",suffix:""},play:async e=>{let o=b(e.canvasElement).getByTestId("test-number-field");o.value="";let u=A.fn();o.addEventListener("input",u);let n=o.shadowRoot.getElementById("inputField");x(n);let m="12345";await c.type(n,m,{pointerEventsCheck:0}),navigator.userAgent==="Test Runner"?console.log("CICD Test - Not Visual"):(await l(()=>a(n).toHaveValue(parseInt(m)),{timeout:3e3}),await l(()=>a(u).toBeCalledTimes(m.length),{timeout:3e3}))}},X=F("omni-number-field"),Y=y("omni-number-field"),Z=S("omni-number-field"),ee=v("omni-number-field",123),te=B("omni-number-field"),re=N("omni-number-field"),ie=$("omni-number-field",123);export{ie as Disabled,Z as Error_Label,Y as Hint,W as Interactive,X as Label,te as Prefix,re as Suffix,ee as Value,Q as default};
//# sourceMappingURL=NumberField.stories.js.map
