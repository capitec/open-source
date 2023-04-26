import"../chunks-js/chunk.LWOZ7YWS.js";import{a as b,b as y,c as T,d as S,e as B,f as $,g as v,h as A}from"../chunks-js/chunk.NOUGGDW5.js";import"../chunks-js/chunk.K2UMXYHA.js";import"../chunks-js/chunk.P5BVWJU5.js";import"../chunks-js/chunk.E3RY574V.js";import"../chunks-js/chunk.XGCBNSF2.js";import{a as E}from"../chunks-js/chunk.IRJIQSYL.js";import{a as o}from"../chunks-js/chunk.PJH7M65U.js";import{a as n}from"../chunks-js/chunk.G3QHRCKP.js";import{a as c,b as F}from"../chunks-js/chunk.MHLMY33S.js";import{k as s}from"../chunks-js/chunk.C6CJZ2DD.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.5NFB2EUQ.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.ZPV4YWBP.js";import{c as u}from"../chunks-js/chunk.N6OKW4B2.js";import{d as a}from"../chunks-js/chunk.W54IKPJD.js";import"../chunks-js/chunk.B6SUKNHE.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as t,d as i}from"../chunks-js/chunk.F6MIXR4E.js";import{h,m,p}from"../chunks-js/chunk.BF43NN75.js";m();p();var C=h(E(),1);var W={title:"UI Components/Text Field",component:"omni-text-field"},X={render:e=>t`
    <omni-text-field
      data-testid="test-text-field"
      label="${o(e.label)}"
      value="${e.value}"
      hint="${o(e.hint)}"
      error="${o(e.error)}"
      ?disabled="${e.disabled}"
      ?clearable="${e.clearable}"
      >${e.prefix?t`${`\r
`}${n(s("prefix",e.prefix))}`:i}${e.suffix?t`${`\r
`}${n(s("suffix",e.suffix))}`:i}${e.prefix||e.suffix?`\r
`:i}</omni-text-field>
  `,name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,clearable:!1,prefix:"",suffix:""},play:async e=>{var d;let r=u(e.canvasElement).getByTestId("test-text-field");r.value="";let f=C.fn();r.addEventListener("input",f);let l=(d=r.shadowRoot)==null?void 0:d.getElementById("inputField");c(l),await F.type(l,"Value Update",{pointerEventsCheck:0});let x="Value Update";await a(l).toHaveValue(x),await a(f).toBeCalledTimes(x.length)}},Y=b("omni-text-field"),Z=y("omni-text-field"),ee=T("omni-text-field"),te=S("omni-text-field"),ie=v("omni-text-field"),oe=B("omni-text-field"),re=$("omni-text-field"),le=A("omni-text-field");export{ie as Clear,le as Disabled,ee as Error_Label,Z as Hint,X as Interactive,Y as Label,oe as Prefix,re as Suffix,te as Value,W as default};
//# sourceMappingURL=TextField.stories.js.map
