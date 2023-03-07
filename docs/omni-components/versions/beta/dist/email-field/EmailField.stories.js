import"../chunks-js/chunk.FZL32I4C.js";import"../chunks-js/chunk.ZTJGZLZP.js";import"../chunks-js/chunk.G4OP6JHJ.js";import{a as y,b as S,c as g,d as h,e as v,f as B,g as b}from"../chunks-js/chunk.EF6ECE3Y.js";import{k as n}from"../chunks-js/chunk.WA6C3RAL.js";import"../chunks-js/chunk.MPJVWYSG.js";import"../chunks-js/chunk.HEGWAMTE.js";import"../chunks-js/chunk.BMVIQMEU.js";import"../chunks-js/chunk.FJG2EZL6.js";import{a as E,b as F,c as C}from"../chunks-js/chunk.SNS3RAAO.js";import{a as r}from"../chunks-js/chunk.7QF4VYJR.js";import{a as o}from"../chunks-js/chunk.CFP25WDL.js";import{b as c,c as x}from"../chunks-js/chunk.555UF2OF.js";import{d as m}from"../chunks-js/chunk.ZDXRLLLZ.js";import"../chunks-js/chunk.F27L6OQP.js";import"../chunks-js/chunk.7YN44Q4N.js";import"../chunks-js/chunk.CHYIO324.js";import{b as i,d as t}from"../chunks-js/chunk.CIM3NS6G.js";import{h as A,l as p,o as u}from"../chunks-js/chunk.2ZZQBHAA.js";p();u();var $=A(C(),1);var W={title:"UI Components/Email Field",component:"omni-email-field"},X={render:e=>i`
    <omni-email-field
      data-testid="test-email-field"
      label="${o(e.label)}"
      value="${e.value}"
      hint="${o(e.hint)}"
      error="${o(e.error)}"
      ?disabled="${e.disabled}"
      >${e.prefix?i`${`\r
`}${r(n("prefix",e.prefix))}`:t}${e.suffix?i`${`\r
`}${r(n("suffix",e.suffix))}`:t}${e.prefix||e.suffix?`\r
`:t}</omni-email-field>
  `,name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,prefix:"",suffix:""},play:async e=>{var d;let l=x(e.canvasElement).getByTestId("test-email-field");l.value="";let s=$.fn();l.addEventListener("input",s);let a=(d=l.shadowRoot)==null?void 0:d.getElementById("inputField");E(a),await F.type(a,"johndoe@gmail.com",{pointerEventsCheck:0});let f="johndoe@gmail.com";navigator.userAgent==="Test Runner"?console.log("CICD Test - Not Visual"):(await c(()=>m(a).toHaveValue(f),{timeout:3e3}),await m(s).toBeCalledTimes(f.length))}},Y=y("omni-email-field"),Z=S("omni-email-field"),ee=g("omni-email-field"),ie=h("omni-email-field","johndoe@gmail.com"),te=v("omni-email-field"),oe=B("omni-email-field"),le=b("omni-email-field","johndoe@gmail.com");export{le as Disabled,ee as Error_Label,Z as Hint,X as Interactive,Y as Label,te as Prefix,oe as Suffix,ie as Value,W as default};
//# sourceMappingURL=EmailField.stories.js.map
