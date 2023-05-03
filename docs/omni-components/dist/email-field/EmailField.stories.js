import"../chunks-js/chunk.FSJMK3TU.js";import{a as b,b as y,c as $,d as S,e as h,f as B,g as v,h as A}from"../chunks-js/chunk.M3SJH7XF.js";import"../chunks-js/chunk.K2UMXYHA.js";import"../chunks-js/chunk.P5BVWJU5.js";import"../chunks-js/chunk.E3RY574V.js";import"../chunks-js/chunk.XGCBNSF2.js";import{a as g}from"../chunks-js/chunk.IRJIQSYL.js";import{a as t}from"../chunks-js/chunk.G3QHRCKP.js";import{a as E,b as F}from"../chunks-js/chunk.MHLMY33S.js";import{l as a}from"../chunks-js/chunk.BM33DA64.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.ZPV4YWBP.js";import{a as o}from"../chunks-js/chunk.PJH7M65U.js";import{b as u,c as x}from"../chunks-js/chunk.N6OKW4B2.js";import{d as n}from"../chunks-js/chunk.W54IKPJD.js";import"../chunks-js/chunk.B6SUKNHE.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as i,d as l}from"../chunks-js/chunk.F6MIXR4E.js";import{h as I,m as p,p as c}from"../chunks-js/chunk.BF43NN75.js";p();c();var C=I(g(),1);var X={title:"UI Components/Email Field",component:"omni-email-field"},Y={render:e=>i`
    <omni-email-field
      data-testid="test-email-field"
      label="${o(e.label)}"
      value="${e.value}"
      hint="${o(e.hint)}"
      error="${o(e.error)}"
      ?disabled="${e.disabled}"
      ?clearable="${e.clearable}"
      >${e.prefix?i`${`\r
`}${t(a("prefix",e.prefix))}`:l}
      ${e.clear?i`${`\r
`}${t(a("clear",e.clear))}`:l}${e.suffix?i`${`\r
`}${t(a("suffix",e.suffix))}`:l}${e.prefix||e.suffix||e.clear?`\r
`:l}</omni-email-field>
  `,name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,clearable:!1,prefix:"",suffix:"",clear:""},play:async e=>{var d;let r=x(e.canvasElement).getByTestId("test-email-field");r.value="";let s=C.fn();r.addEventListener("input",s);let m=(d=r.shadowRoot)==null?void 0:d.getElementById("inputField");E(m),await F.type(m,"johndoe@gmail.com",{pointerEventsCheck:0});let f="johndoe@gmail.com";await u(()=>n(m).toHaveValue(f),{timeout:3e3}),await n(s).toBeCalledTimes(f.length)}},Z=b("omni-email-field"),ee=y("omni-email-field"),ie=$("omni-email-field"),le=S("omni-email-field","johndoe@gmail.com"),te=v("omni-email-field","johndoe@gmail.com"),oe=h("omni-email-field"),ae=B("omni-email-field"),re=A("omni-email-field","johndoe@gmail.com");export{te as Clear,re as Disabled,ie as Error_Label,ee as Hint,Y as Interactive,Z as Label,oe as Prefix,ae as Suffix,le as Value,X as default};
//# sourceMappingURL=EmailField.stories.js.map
