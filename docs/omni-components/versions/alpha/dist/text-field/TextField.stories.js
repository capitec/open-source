import"../chunks-js/chunk.WUGGBYKL.js";import{a as b,b as S,c as T,d as y,e as $,f as B,g as C,h as v,i as A}from"../chunks-js/chunk.RYXMLQGX.js";import"../chunks-js/chunk.K2UMXYHA.js";import"../chunks-js/chunk.I3LVDBCB.js";import"../chunks-js/chunk.E3RY574V.js";import"../chunks-js/chunk.XGCBNSF2.js";import{a as I}from"../chunks-js/chunk.IRJIQSYL.js";import"../chunks-js/chunk.LCIHREUY.js";import{a as u,b as F}from"../chunks-js/chunk.MHLMY33S.js";import{m as l}from"../chunks-js/chunk.WI5F3R4J.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.ZPV4YWBP.js";import{a as r}from"../chunks-js/chunk.6QCQBNRL.js";import{c}from"../chunks-js/chunk.N6OKW4B2.js";import{d as s}from"../chunks-js/chunk.W54IKPJD.js";import{a as o}from"../chunks-js/chunk.32OT4JFD.js";import"../chunks-js/chunk.B6SUKNHE.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as t,d as i}from"../chunks-js/chunk.F6MIXR4E.js";import{h as E,m,p}from"../chunks-js/chunk.BF43NN75.js";m();p();var h=E(I(),1);var X={title:"UI Components/Text Field",component:"omni-text-field"},Y={render:e=>t`
    <omni-text-field
      data-testid="test-text-field"
      label="${r(e.label)}"
      value="${e.value}"
      hint="${r(e.hint)}"
      error="${r(e.error)}"
      ?disabled="${e.disabled}"
      ?clearable="${e.clearable}"
      >${e.prefix?t`${`\r
`}${o(l("prefix",e.prefix))}`:i}
      ${e.clear?t`${`\r
`}${o(l("clear",e.clear))}`:i}${e.suffix?t`${`\r
`}${o(l("suffix",e.suffix))}`:i}${e.prefix||e.suffix||e.clear?`\r
`:i}</omni-text-field>
  `,name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,clearable:!1,prefix:"",suffix:"",clear:""},play:async e=>{var d;let a=c(e.canvasElement).getByTestId("test-text-field");a.value="";let f=h.fn();a.addEventListener("input",f);let n=(d=a.shadowRoot)==null?void 0:d.getElementById("inputField");u(n),await F.type(n,"Value Update",{pointerEventsCheck:0});let x="Value Update";await s(n).toHaveValue(x),await s(f).toBeCalledTimes(x.length)}},Z=b("omni-text-field"),ee=S("omni-text-field"),te=T("omni-text-field"),ie=y("omni-text-field"),oe=C("omni-text-field"),re=v("omni-text-field"),le=$("omni-text-field"),ae=B("omni-text-field"),ne=A("omni-text-field");export{oe as Clearable,re as Custom_Clear_Slot,ne as Disabled,te as Error_Label,ee as Hint,Y as Interactive,Z as Label,le as Prefix,ae as Suffix,ie as Value,X as default};
//# sourceMappingURL=TextField.stories.js.map
