import"../chunks-js/chunk.JTI3ZLTX.js";import{a as b,b as S,c as T,d as y,e as $,f as B,g as C,h as v,i as A}from"../chunks-js/chunk.IKJ2DJC2.js";import"../chunks-js/chunk.K2UMXYHA.js";import"../chunks-js/chunk.CQEQBUXK.js";import"../chunks-js/chunk.E3RY574V.js";import"../chunks-js/chunk.XGCBNSF2.js";import{a as E}from"../chunks-js/chunk.IRJIQSYL.js";import{a as i}from"../chunks-js/chunk.G3QHRCKP.js";import{a as u,b as F}from"../chunks-js/chunk.MHLMY33S.js";import{l}from"../chunks-js/chunk.6ISQ3AKL.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.ZPV4YWBP.js";import{a as r}from"../chunks-js/chunk.6QCQBNRL.js";import{c}from"../chunks-js/chunk.N6OKW4B2.js";import{d as s}from"../chunks-js/chunk.W54IKPJD.js";import"../chunks-js/chunk.B6SUKNHE.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as t,d as o}from"../chunks-js/chunk.F6MIXR4E.js";import{h,m,p}from"../chunks-js/chunk.BF43NN75.js";m();p();var I=h(E(),1);var X={title:"UI Components/Text Field",component:"omni-text-field"},Y={render:e=>t`
    <omni-text-field
      data-testid="test-text-field"
      label="${r(e.label)}"
      value="${e.value}"
      hint="${r(e.hint)}"
      error="${r(e.error)}"
      ?disabled="${e.disabled}"
      ?clearable="${e.clearable}"
      >${e.prefix?t`${`\r
`}${i(l("prefix",e.prefix))}`:o}
      ${e.clear?t`${`\r
`}${i(l("clear",e.clear))}`:o}${e.suffix?t`${`\r
`}${i(l("suffix",e.suffix))}`:o}${e.prefix||e.suffix||e.clear?`\r
`:o}</omni-text-field>
  `,name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,clearable:!1,prefix:"",suffix:"",clear:""},play:async e=>{var d;let n=c(e.canvasElement).getByTestId("test-text-field");n.value="";let f=I.fn();n.addEventListener("input",f);let a=(d=n.shadowRoot)==null?void 0:d.getElementById("inputField");u(a),await F.type(a,"Value Update",{pointerEventsCheck:0});let x="Value Update";await s(a).toHaveValue(x),await s(f).toBeCalledTimes(x.length)}},Z=b("omni-text-field"),ee=S("omni-text-field"),te=T("omni-text-field"),oe=y("omni-text-field"),ie=C("omni-text-field"),re=v("omni-text-field"),le=$("omni-text-field"),ne=B("omni-text-field"),ae=A("omni-text-field");export{ie as Clear,re as Custom_Clear_Slot_Icon,ae as Disabled,te as Error_Label,ee as Hint,Y as Interactive,Z as Label,le as Prefix,ne as Suffix,oe as Value,X as default};
//# sourceMappingURL=TextField.stories.js.map
