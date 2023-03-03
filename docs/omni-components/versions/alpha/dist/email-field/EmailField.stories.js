import"../chunks-js/chunk.BXZRTSZE.js";import{a as F,b as y,c as S,d as g,e as h,f as B,g as b}from"../chunks-js/chunk.6654TRIP.js";import"../chunks-js/chunk.ZTJGZLZP.js";import"../chunks-js/chunk.3IXMT3AC.js";import{b as E}from"../chunks-js/chunk.AP33UQK7.js";import{k as a}from"../chunks-js/chunk.WA6C3RAL.js";import"../chunks-js/chunk.MPJVWYSG.js";import"../chunks-js/chunk.HEGWAMTE.js";import"../chunks-js/chunk.BMVIQMEU.js";import"../chunks-js/chunk.FJG2EZL6.js";import{a as o}from"../chunks-js/chunk.CFP25WDL.js";import{a as r}from"../chunks-js/chunk.5TGJLLLS.js";import{a as l}from"../chunks-js/chunk.7QF4VYJR.js";import{a as A}from"../chunks-js/chunk.IPQWBGOC.js";import{b as c,c as x}from"../chunks-js/chunk.25QDP255.js";import"../chunks-js/chunk.B62LVUNQ.js";import"../chunks-js/chunk.F27L6OQP.js";import"../chunks-js/chunk.7YN44Q4N.js";import"../chunks-js/chunk.CHYIO324.js";import{b as i,d as t}from"../chunks-js/chunk.CIM3NS6G.js";import{h as $,l as p,o as u}from"../chunks-js/chunk.2ZZQBHAA.js";p();u();var v=$(A(),1);var O={title:"UI Components/Email Field",component:"omni-email-field"},Q={render:e=>i`
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
