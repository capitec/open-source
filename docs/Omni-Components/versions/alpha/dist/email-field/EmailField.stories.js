import"../chunks-js/chunk.SSEEEYVD.js";import"../chunks-js/chunk.MCIDFWAY.js";import"../chunks-js/chunk.2UZOXCV4.js";import{a as u,b as E,c as F,d as y,e as S,f as B,g as $}from"../chunks-js/chunk.YRCIB657.js";import{k as r}from"../chunks-js/chunk.ZOV7Q3GR.js";import"../chunks-js/chunk.AWLGTUIY.js";import"../chunks-js/chunk.US2AYN3N.js";import"../chunks-js/chunk.MPJVWYSG.js";import{a as l}from"../chunks-js/chunk.3FTDPY75.js";import"../chunks-js/chunk.VOM777LA.js";import{b as c,c as v}from"../chunks-js/chunk.LME64W74.js";import{a as o}from"../chunks-js/chunk.R4IMIBZU.js";import{c as x}from"../chunks-js/chunk.QC5ZUB6O.js";import{d as a}from"../chunks-js/chunk.YQLTAQFI.js";import"../chunks-js/chunk.XMM72FEY.js";import"../chunks-js/chunk.ZO5UBYOG.js";import"../chunks-js/chunk.CHYIO324.js";import{b as i,d as t}from"../chunks-js/chunk.3GEUDTAZ.js";import{h,l as d,o as p}from"../chunks-js/chunk.2ZZQBHAA.js";d();p();var b=h(v(),1);var G={title:"UI Components/Email Field",component:"omni-email-field"},K={render:e=>i`
    <omni-email-field
      data-testid="test-email-field"
      label="${o(e.label)}"
      .value="${e.value}"
      .data="${e.data}"
      hint="${o(e.hint)}"
      error="${o(e.error)}"
      ?disabled="${e.disabled}"
      >${e.prefix?i`${`\r
`}${l(r("prefix",e.prefix))}`:t}${e.suffix?i`${`\r
`}${l(r("suffix",e.suffix))}`:t}${e.prefix||e.suffix?`\r
`:t}</omni-email-field
    >
  `,name:"Interactive",args:{label:"Label",value:"",data:{},hint:"",error:"",disabled:!1,prefix:"",suffix:""},play:async e=>{let m=x(e.canvasElement).getByTestId("test-email-field"),n=b.fn();m.addEventListener("input",n);let s=m.shadowRoot.getElementById("inputField");await c.type(s,"JohnDoe@gmail.com",{pointerEventsCheck:0});let f="JohnDoe@gmail.com";await a(s).toHaveValue(f),await a(n).toBeCalledTimes(f.length)}},O=u("omni-email-field"),Q=E("omni-email-field"),W=F("omni-email-field"),X=y("omni-email-field"),Y=S("omni-email-field"),Z=B("omni-email-field"),ee=$("omni-email-field");export{ee as Disabled,W as Error_Label,Q as Hint,K as Interactive,O as Label,Y as Prefix,Z as Suffix,X as Value,G as default};
//# sourceMappingURL=EmailField.stories.js.map