import"../chunks-js/chunk.QBSQ6NAV.js";import"../chunks-js/chunk.ZTJGZLZP.js";import"../chunks-js/chunk.KHZKGRRT.js";import{a as F,b as y,c as S,d as v,e as B,f as N,g as $}from"../chunks-js/chunk.ZNL3YBLQ.js";import{k as f}from"../chunks-js/chunk.EZFZPYM4.js";import"../chunks-js/chunk.HEGWAMTE.js";import"../chunks-js/chunk.BMVIQMEU.js";import"../chunks-js/chunk.MPJVWYSG.js";import"../chunks-js/chunk.FJG2EZL6.js";import{a as x,b as c,c as C}from"../chunks-js/chunk.SNS3RAAO.js";import{a as s}from"../chunks-js/chunk.7QF4VYJR.js";import{a as i}from"../chunks-js/chunk.CFP25WDL.js";import{b as l,c as b}from"../chunks-js/chunk.555UF2OF.js";import{d as a}from"../chunks-js/chunk.ZDXRLLLZ.js";import"../chunks-js/chunk.F27L6OQP.js";import"../chunks-js/chunk.7YN44Q4N.js";import"../chunks-js/chunk.CHYIO324.js";import{b as t,d as r}from"../chunks-js/chunk.CIM3NS6G.js";import{h as I,l as d,o as p}from"../chunks-js/chunk.2ZZQBHAA.js";d();p();var A=I(C(),1);var Q={title:"UI Components/Number Field",component:"omni-number-field"},W={render:e=>t`
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
