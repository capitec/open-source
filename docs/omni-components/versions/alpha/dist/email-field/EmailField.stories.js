import"../chunks-js/chunk.YTTM2NIK.js";import"../chunks-js/chunk.MCIDFWAY.js";import"../chunks-js/chunk.OLTCQXBT.js";import{a as F,b as y,c as S,d as B,e as b,f as v,g as $}from"../chunks-js/chunk.K2EQSFIF.js";import{k as a}from"../chunks-js/chunk.P4DNRGFH.js";import"../chunks-js/chunk.LYPQHKQX.js";import"../chunks-js/chunk.BMVIQMEU.js";import"../chunks-js/chunk.MPJVWYSG.js";import{a as l}from"../chunks-js/chunk.3FTDPY75.js";import"../chunks-js/chunk.VOM777LA.js";import{b as E,c as A}from"../chunks-js/chunk.LME64W74.js";import{a as o}from"../chunks-js/chunk.R4IMIBZU.js";import{b as x,c}from"../chunks-js/chunk.QC5ZUB6O.js";import{d as r}from"../chunks-js/chunk.YQLTAQFI.js";import"../chunks-js/chunk.XMM72FEY.js";import"../chunks-js/chunk.ZO5UBYOG.js";import"../chunks-js/chunk.CHYIO324.js";import{b as i,d as t}from"../chunks-js/chunk.3GEUDTAZ.js";import{h,l as p,o as u}from"../chunks-js/chunk.2ZZQBHAA.js";p();u();var g=h(A(),1);var O={title:"UI Components/Email Field",component:"omni-email-field"},Q={render:e=>i`
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
  `,name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,prefix:"",suffix:""},play:async e=>{var d;let m=c(e.canvasElement).getByTestId("test-email-field"),n=g.fn();m.addEventListener("input",n);let s=(d=m.shadowRoot)==null?void 0:d.getElementById("inputField");await E.type(s,"JohnDoe@gmail.com",{pointerEventsCheck:0});let f="JohnDoe@gmail.com";navigator.userAgent==="Test Runner"?console.log("CICD Test - Not Visual"):(await x(()=>r(s).toHaveValue(f),{timeout:3e3}),await r(n).toBeCalledTimes(f.length))}},W=F("omni-email-field"),X=y("omni-email-field"),Y=S("omni-email-field"),Z=B("omni-email-field"),ee=b("omni-email-field"),ie=v("omni-email-field"),te=$("omni-email-field");export{te as Disabled,Y as Error_Label,X as Hint,Q as Interactive,W as Label,ee as Prefix,ie as Suffix,Z as Value,O as default};
//# sourceMappingURL=EmailField.stories.js.map
