import"../chunks-js/chunk.FSJMK3TU.js";import{a as b,b as y,c as S,d as h,e as B,f as $,g as v,h as g}from"../chunks-js/chunk.YD3W5R6Q.js";import"../chunks-js/chunk.K2UMXYHA.js";import"../chunks-js/chunk.P5BVWJU5.js";import"../chunks-js/chunk.E3RY574V.js";import"../chunks-js/chunk.XGCBNSF2.js";import{a as I}from"../chunks-js/chunk.IRJIQSYL.js";import{a as r}from"../chunks-js/chunk.G3QHRCKP.js";import{a as E,b as F}from"../chunks-js/chunk.MHLMY33S.js";import{l as n}from"../chunks-js/chunk.BM33DA64.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.ZPV4YWBP.js";import{a as o}from"../chunks-js/chunk.PJH7M65U.js";import{b as u,c as x}from"../chunks-js/chunk.N6OKW4B2.js";import{d as m}from"../chunks-js/chunk.W54IKPJD.js";import"../chunks-js/chunk.B6SUKNHE.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as i,d as t}from"../chunks-js/chunk.F6MIXR4E.js";import{h as C,m as p,p as c}from"../chunks-js/chunk.BF43NN75.js";p();c();var A=C(I(),1);var X={title:"UI Components/Email Field",component:"omni-email-field"},Y={render:e=>i`
    <omni-email-field
      data-testid="test-email-field"
      label="${o(e.label)}"
      value="${e.value}"
      hint="${o(e.hint)}"
      error="${o(e.error)}"
      ?disabled="${e.disabled}"
      ?clearable="${e.clearable}"
      >${e.prefix?i`${`\r
`}${r(n("prefix",e.prefix))}`:t}${e.suffix?i`${`\r
`}${r(n("suffix",e.suffix))}`:t}${e.prefix||e.suffix?`\r
`:t}</omni-email-field>
  `,name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,clearable:!1,prefix:"",suffix:""},play:async e=>{var d;let l=x(e.canvasElement).getByTestId("test-email-field");l.value="";let s=A.fn();l.addEventListener("input",s);let a=(d=l.shadowRoot)==null?void 0:d.getElementById("inputField");E(a),await F.type(a,"johndoe@gmail.com",{pointerEventsCheck:0});let f="johndoe@gmail.com";await u(()=>m(a).toHaveValue(f),{timeout:3e3}),await m(s).toBeCalledTimes(f.length)}},Z=b("omni-email-field"),ee=y("omni-email-field"),ie=S("omni-email-field"),te=h("omni-email-field","johndoe@gmail.com"),oe=v("omni-email-field","johndoe@gmail.com"),le=B("omni-email-field"),ae=$("omni-email-field"),re=g("omni-email-field","johndoe@gmail.com");export{oe as Clear,re as Disabled,ie as Error_Label,ee as Hint,Y as Interactive,Z as Label,le as Prefix,ae as Suffix,te as Value,X as default};
//# sourceMappingURL=EmailField.stories.js.map
