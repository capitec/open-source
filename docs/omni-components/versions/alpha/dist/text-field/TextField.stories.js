import"../chunks-js/chunk.A33DVONP.js";import{a as y,b as T,c as S,d as B,e as b,f as v,g as $}from"../chunks-js/chunk.6654TRIP.js";import"../chunks-js/chunk.ZTJGZLZP.js";import"../chunks-js/chunk.3IXMT3AC.js";import{a as c,b as F}from"../chunks-js/chunk.AP33UQK7.js";import{k as s}from"../chunks-js/chunk.WA6C3RAL.js";import"../chunks-js/chunk.MPJVWYSG.js";import"../chunks-js/chunk.HEGWAMTE.js";import"../chunks-js/chunk.BMVIQMEU.js";import"../chunks-js/chunk.FJG2EZL6.js";import{a as o}from"../chunks-js/chunk.CFP25WDL.js";import{a}from"../chunks-js/chunk.5TGJLLLS.js";import{a as l}from"../chunks-js/chunk.7QF4VYJR.js";import{a as E}from"../chunks-js/chunk.IPQWBGOC.js";import{c as u}from"../chunks-js/chunk.25QDP255.js";import"../chunks-js/chunk.B62LVUNQ.js";import"../chunks-js/chunk.F27L6OQP.js";import"../chunks-js/chunk.7YN44Q4N.js";import"../chunks-js/chunk.CHYIO324.js";import{b as t,d as i}from"../chunks-js/chunk.CIM3NS6G.js";import{h,l as m,o as p}from"../chunks-js/chunk.2ZZQBHAA.js";m();p();var A=h(E(),1);var Q={title:"UI Components/Text Field",component:"omni-text-field"},W={render:e=>t`
    <omni-text-field
      data-testid="test-text-field"
      label="${o(e.label)}"
      value="${e.value}"
      hint="${o(e.hint)}"
      error="${o(e.error)}"
      ?disabled="${e.disabled}"
      >${e.prefix?t`${`\r
`}${l(s("prefix",e.prefix))}`:i}${e.suffix?t`${`\r
`}${l(s("suffix",e.suffix))}`:i}${e.prefix||e.suffix?`\r
`:i}</omni-text-field>
  `,name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,prefix:"",suffix:""},play:async e=>{var x;let r=u(e.canvasElement).getByTestId("test-text-field");r.value="";let f=A.fn();r.addEventListener("input",f);let n=(x=r.shadowRoot)==null?void 0:x.getElementById("inputField");c(n),await F.type(n,"Value Update",{pointerEventsCheck:0});let d="Value Update";await a(n).toHaveValue(d),await a(f).toBeCalledTimes(d.length)}},X=y("omni-text-field"),Y=T("omni-text-field"),Z=S("omni-text-field"),ee=B("omni-text-field"),te=b("omni-text-field"),ie=v("omni-text-field"),oe=$("omni-text-field");export{oe as Disabled,Z as Error_Label,Y as Hint,W as Interactive,X as Label,te as Prefix,ie as Suffix,ee as Value,Q as default};
//# sourceMappingURL=TextField.stories.js.map
