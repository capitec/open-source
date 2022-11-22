import"../chunks-js/chunk.CQCUP3GN.js";import"../chunks-js/chunk.ZPUNSNI6.js";import"../chunks-js/chunk.WCJA2MWU.js";import{a as c,b as y,c as F,d as T,e as B,f as S,g as $,h as b}from"../chunks-js/chunk.6O544RSM.js";import{b as u,c as h}from"../chunks-js/chunk.LME64W74.js";import{j as l}from"../chunks-js/chunk.IK4T76RY.js";import"../chunks-js/chunk.63SH7AJG.js";import{a as r}from"../chunks-js/chunk.SNOJQC4W.js";import{a as o}from"../chunks-js/chunk.R4IMIBZU.js";import{c as p}from"../chunks-js/chunk.QC5ZUB6O.js";import{d as n}from"../chunks-js/chunk.YQLTAQFI.js";import"../chunks-js/chunk.6TMBBBK2.js";import"../chunks-js/chunk.WVW5AE5A.js";import"../chunks-js/chunk.CHYIO324.js";import"../chunks-js/chunk.2UFE7DL7.js";import{b as t,d as i}from"../chunks-js/chunk.3GEUDTAZ.js";import{h as A,l as x,o as m}from"../chunks-js/chunk.2ZZQBHAA.js";x();m();var v=A(h(),1);var K={title:"UI Components/Text Field",component:"omni-text-field",argTypes:c},O={render:e=>t`
    <omni-text-field
      data-testid="test-text-field"
      label="${o(e.label)}"
      .value="${e.value}"
      .data="${e.data}"
      hint="${o(e.hint)}"
      error="${o(e.error)}"
      ?disabled="${e.disabled}"
      >${e.prefix?t`${`\r
`}${r(l("prefix",e.prefix))}`:i}${e.suffix?t`${`\r
`}${r(l("suffix",e.suffix))}`:i}${e.prefix||e.suffix?`\r
`:i}</omni-text-field
    >
  `,name:"Interactive",args:{label:"Label",value:"",data:{},hint:"",error:"",disabled:!1,prefix:"",suffix:""},play:async e=>{let a=p(e.canvasElement).getByTestId("test-text-field"),s=v.fn();a.addEventListener("input",s);let f=a.shadowRoot.getElementById("inputField");await u.type(f,"Value Update",{pointerEventsCheck:0});let d="Value Update";await n(f).toHaveValue(d),await n(s).toBeCalledTimes(d.length)}},Q=y("omni-text-field"),W=F("omni-text-field"),X=T("omni-text-field"),Y=B("omni-text-field"),Z=S("omni-text-field"),ee=$("omni-text-field"),te=b("omni-text-field");export{te as Disabled,X as Error_Label,W as Hint,O as Interactive,Q as Label,Z as Prefix,ee as Suffix,Y as Value,K as default};
//# sourceMappingURL=TextField.stories.js.map
