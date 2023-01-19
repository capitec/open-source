import"../chunks-js/chunk.4UYTC733.js";import"../chunks-js/chunk.MCIDFWAY.js";import"../chunks-js/chunk.RV4U3FFU.js";import{a as c,b as F,c as y,d as S,e as T,f as B,g as b}from"../chunks-js/chunk.YRCIB657.js";import{k as l}from"../chunks-js/chunk.ZOV7Q3GR.js";import"../chunks-js/chunk.AWLGTUIY.js";import"../chunks-js/chunk.US2AYN3N.js";import"../chunks-js/chunk.MPJVWYSG.js";import{a as r}from"../chunks-js/chunk.3FTDPY75.js";import"../chunks-js/chunk.VOM777LA.js";import{b as u,c as A}from"../chunks-js/chunk.LME64W74.js";import{a as o}from"../chunks-js/chunk.R4IMIBZU.js";import{c as p}from"../chunks-js/chunk.QC5ZUB6O.js";import{d as n}from"../chunks-js/chunk.YQLTAQFI.js";import"../chunks-js/chunk.XMM72FEY.js";import"../chunks-js/chunk.ZO5UBYOG.js";import"../chunks-js/chunk.CHYIO324.js";import{b as t,d as i}from"../chunks-js/chunk.3GEUDTAZ.js";import{h as v,l as x,o as m}from"../chunks-js/chunk.2ZZQBHAA.js";x();m();var $=v(A(),1);var J={title:"UI Components/Text Field",component:"omni-text-field"},K={render:e=>t`
    <omni-text-field
      data-testid="test-text-field"
      label="${o(e.label)}"
      value="${e.value}"
      hint="${o(e.hint)}"
      error="${o(e.error)}"
      ?disabled="${e.disabled}"
      >${e.prefix?t`${`\r
`}${r(l("prefix",e.prefix))}`:i}${e.suffix?t`${`\r
`}${r(l("suffix",e.suffix))}`:i}${e.prefix||e.suffix?`\r
`:i}</omni-text-field>
  `,name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,prefix:"",suffix:""},play:async e=>{let s=p(e.canvasElement).getByTestId("test-text-field"),a=$.fn();s.addEventListener("input",a);let f=s.shadowRoot.getElementById("inputField");await u.type(f,"Value Update",{pointerEventsCheck:0});let d="Value Update";await n(f).toHaveValue(d),await n(a).toBeCalledTimes(d.length)}},O=c("omni-text-field"),Q=F("omni-text-field"),W=y("omni-text-field"),X=S("omni-text-field"),Y=T("omni-text-field"),Z=B("omni-text-field"),ee=b("omni-text-field");export{ee as Disabled,W as Error_Label,Q as Hint,K as Interactive,O as Label,Y as Prefix,Z as Suffix,X as Value,J as default};
//# sourceMappingURL=TextField.stories.js.map
