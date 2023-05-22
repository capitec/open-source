import"../chunks-js/chunk.COMH455E.js";import{a as b,b as S,c as y,d as $,e as h,f as B,g as C,h as v,i as A}from"../chunks-js/chunk.ZOMVZAXV.js";import"../chunks-js/chunk.K2UMXYHA.js";import"../chunks-js/chunk.I3LVDBCB.js";import"../chunks-js/chunk.E3RY574V.js";import"../chunks-js/chunk.XGCBNSF2.js";import{a as j}from"../chunks-js/chunk.IRJIQSYL.js";import{a as o}from"../chunks-js/chunk.G3QHRCKP.js";import{a as E,b as F}from"../chunks-js/chunk.MHLMY33S.js";import{l as a}from"../chunks-js/chunk.6ISQ3AKL.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.ZPV4YWBP.js";import{a as t}from"../chunks-js/chunk.6QCQBNRL.js";import{b as u,c as x}from"../chunks-js/chunk.N6OKW4B2.js";import{d as n}from"../chunks-js/chunk.W54IKPJD.js";import"../chunks-js/chunk.B6SUKNHE.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as i,d as l}from"../chunks-js/chunk.F6MIXR4E.js";import{h as I,m as p,p as c}from"../chunks-js/chunk.BF43NN75.js";p();c();var g=I(j(),1);var Y={title:"UI Components/Email Field",component:"omni-email-field"},Z={render:e=>i`
    <omni-email-field
      data-testid="test-email-field"
      label="${t(e.label)}"
      value="${e.value}"
      hint="${t(e.hint)}"
      error="${t(e.error)}"
      ?disabled="${e.disabled}"
      ?clearable="${e.clearable}"
      >${e.prefix?i`${`\r
`}${o(a("prefix",e.prefix))}`:l}
      ${e.clear?i`${`\r
`}${o(a("clear",e.clear))}`:l}${e.suffix?i`${`\r
`}${o(a("suffix",e.suffix))}`:l}${e.prefix||e.suffix||e.clear?`\r
`:l}</omni-email-field>
  `,name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,clearable:!1,prefix:"",suffix:"",clear:""},play:async e=>{var f;let r=x(e.canvasElement).getByTestId("test-email-field");r.value="";let s=g.fn();r.addEventListener("input",s);let m=(f=r.shadowRoot)==null?void 0:f.getElementById("inputField");E(m),await F.type(m,"johndoe@gmail.com",{pointerEventsCheck:0});let d="johndoe@gmail.com";await u(()=>n(m).toHaveValue(d),{timeout:3e3}),await n(s).toBeCalledTimes(d.length)}},ee=b("omni-email-field"),ie=S("omni-email-field"),le=y("omni-email-field"),oe=$("omni-email-field","johndoe@gmail.com"),te=C("omni-email-field","johndoe@gmail.com"),ae=v("omni-email-field","johndoe@gmail.com"),re=h("omni-email-field"),me=B("omni-email-field"),ne=A("omni-email-field","johndoe@gmail.com");export{te as Clearable,ae as Custom_Clear_Slot,ne as Disabled,le as Error_Label,ie as Hint,Z as Interactive,ee as Label,re as Prefix,me as Suffix,oe as Value,Y as default};
//# sourceMappingURL=EmailField.stories.js.map
