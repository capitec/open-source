import"../chunks-js/chunk.DIOFYLBV.js";import"../chunks-js/chunk.ZTJGZLZP.js";import"../chunks-js/chunk.VT6VUYU6.js";import{a as F,b as y,c as T,d as S,e as B,f as b,g as $}from"../chunks-js/chunk.ZNL3YBLQ.js";import{k as l}from"../chunks-js/chunk.EZFZPYM4.js";import"../chunks-js/chunk.HEGWAMTE.js";import"../chunks-js/chunk.BMVIQMEU.js";import"../chunks-js/chunk.MPJVWYSG.js";import"../chunks-js/chunk.FJG2EZL6.js";import{b as c,c as h}from"../chunks-js/chunk.SNS3RAAO.js";import{a as r}from"../chunks-js/chunk.7QF4VYJR.js";import{a as o}from"../chunks-js/chunk.CFP25WDL.js";import{c as u}from"../chunks-js/chunk.555UF2OF.js";import{d as n}from"../chunks-js/chunk.ZDXRLLLZ.js";import"../chunks-js/chunk.F27L6OQP.js";import"../chunks-js/chunk.7YN44Q4N.js";import"../chunks-js/chunk.CHYIO324.js";import{b as t,d as i}from"../chunks-js/chunk.CIM3NS6G.js";import{h as A,l as m,o as p}from"../chunks-js/chunk.2ZZQBHAA.js";m();p();var v=A(h(),1);var K={title:"UI Components/Text Field",component:"omni-text-field"},O={render:e=>t`
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
  `,name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,prefix:"",suffix:""},play:async e=>{var x;let s=u(e.canvasElement).getByTestId("test-text-field"),a=v.fn();s.addEventListener("input",a);let f=(x=s.shadowRoot)==null?void 0:x.getElementById("inputField");await c.type(f,"Value Update",{pointerEventsCheck:0});let d="Value Update";await n(f).toHaveValue(d),await n(a).toBeCalledTimes(d.length)}},Q=F("omni-text-field"),W=y("omni-text-field"),X=T("omni-text-field"),Y=S("omni-text-field"),Z=B("omni-text-field"),ee=b("omni-text-field"),te=$("omni-text-field");export{te as Disabled,X as Error_Label,W as Hint,O as Interactive,Q as Label,Z as Prefix,ee as Suffix,Y as Value,K as default};
//# sourceMappingURL=TextField.stories.js.map
