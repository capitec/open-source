import"../chunks-js/chunk.C6YHQE63.js";import"../chunks-js/chunk.MCIDFWAY.js";import"../chunks-js/chunk.ILWNZZ2I.js";import{a as E,b as F,c as y,d as S,e as B,f as b,g as v}from"../chunks-js/chunk.CCDRMDYZ.js";import{k as a}from"../chunks-js/chunk.K3YYK5GB.js";import"../chunks-js/chunk.D6UL6COZ.js";import"../chunks-js/chunk.BMVIQMEU.js";import"../chunks-js/chunk.MPJVWYSG.js";import{a as l}from"../chunks-js/chunk.3FTDPY75.js";import"../chunks-js/chunk.VOM777LA.js";import{b as c,c as h}from"../chunks-js/chunk.LME64W74.js";import{a as o}from"../chunks-js/chunk.R4IMIBZU.js";import{b as u,c as x}from"../chunks-js/chunk.QC5ZUB6O.js";import{d as r}from"../chunks-js/chunk.YQLTAQFI.js";import"../chunks-js/chunk.XMM72FEY.js";import"../chunks-js/chunk.ZO5UBYOG.js";import"../chunks-js/chunk.CHYIO324.js";import{b as i,d as t}from"../chunks-js/chunk.3GEUDTAZ.js";import{h as g,l as d,o as p}from"../chunks-js/chunk.2ZZQBHAA.js";d();p();var $=g(h(),1);var K={title:"UI Components/Email Field",component:"omni-email-field"},O={render:e=>i`
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
  `,name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,prefix:"",suffix:""},play:async e=>{let m=x(e.canvasElement).getByTestId("test-email-field"),n=$.fn();m.addEventListener("input",n);let s=m.shadowRoot.getElementById("inputField");await c.type(s,"JohnDoe@gmail.com",{pointerEventsCheck:0});let f="JohnDoe@gmail.com";navigator.userAgent==="Test Runner"?console.log("CICD Test - Not Visual"):(await u(()=>r(s).toHaveValue(f),{timeout:3e3}),await r(n).toBeCalledTimes(f.length))}},Q=E("omni-email-field"),W=F("omni-email-field"),X=y("omni-email-field"),Y=S("omni-email-field"),Z=B("omni-email-field"),ee=b("omni-email-field"),ie=v("omni-email-field");export{ie as Disabled,X as Error_Label,W as Hint,O as Interactive,Q as Label,Z as Prefix,ee as Suffix,Y as Value,K as default};
//# sourceMappingURL=EmailField.stories.js.map
