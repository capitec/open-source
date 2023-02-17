import"../chunks-js/chunk.OYTZC3FE.js";import"../chunks-js/chunk.ZTJGZLZP.js";import"../chunks-js/chunk.KHZKGRRT.js";import{a as F,b as y,c as S,d as g,e as h,f as B,g as b}from"../chunks-js/chunk.ZNL3YBLQ.js";import{k as a}from"../chunks-js/chunk.EZFZPYM4.js";import"../chunks-js/chunk.HEGWAMTE.js";import"../chunks-js/chunk.BMVIQMEU.js";import"../chunks-js/chunk.MPJVWYSG.js";import"../chunks-js/chunk.FJG2EZL6.js";import{b as E,c as A}from"../chunks-js/chunk.SNS3RAAO.js";import{a as l}from"../chunks-js/chunk.7QF4VYJR.js";import{a as o}from"../chunks-js/chunk.CFP25WDL.js";import{b as c,c as x}from"../chunks-js/chunk.555UF2OF.js";import{d as r}from"../chunks-js/chunk.ZDXRLLLZ.js";import"../chunks-js/chunk.F27L6OQP.js";import"../chunks-js/chunk.7YN44Q4N.js";import"../chunks-js/chunk.CHYIO324.js";import{b as i,d as t}from"../chunks-js/chunk.CIM3NS6G.js";import{h as $,l as p,o as u}from"../chunks-js/chunk.2ZZQBHAA.js";p();u();var v=$(A(),1);var O={title:"UI Components/Email Field",component:"omni-email-field"},Q={render:e=>i`
    <omni-email-field
      data-testid="test-email-field"
      label="${o(e.label)}"
      value="${e.value}"
      hint="${o(e.hint)}"
      error="${o(e.error)}"
      ?disabled="${e.disabled}"
      >${e.prefix?i`${`\r
`}${l(a("prefix",e.prefix))}`:t}${e.suffix?i`${`\r
`}${l(a("suffix",e.suffix))}`:t}${e.prefix||e.suffix?`\r
`:t}</omni-email-field>
  `,name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,prefix:"",suffix:""},play:async e=>{var d;let m=x(e.canvasElement).getByTestId("test-email-field"),n=v.fn();m.addEventListener("input",n);let s=(d=m.shadowRoot)==null?void 0:d.getElementById("inputField");await E.type(s,"johndoe@gmail.com",{pointerEventsCheck:0});let f="johndoe@gmail.com";navigator.userAgent==="Test Runner"?console.log("CICD Test - Not Visual"):(await c(()=>r(s).toHaveValue(f),{timeout:3e3}),await r(n).toBeCalledTimes(f.length))}},W=F("omni-email-field"),X=y("omni-email-field"),Y=S("omni-email-field"),Z=g("omni-email-field","johndoe@gmail.com"),ee=h("omni-email-field"),ie=B("omni-email-field"),te=b("omni-email-field","johndoe@gmail.com");export{te as Disabled,Y as Error_Label,X as Hint,Q as Interactive,W as Label,ee as Prefix,ie as Suffix,Z as Value,O as default};
//# sourceMappingURL=EmailField.stories.js.map
