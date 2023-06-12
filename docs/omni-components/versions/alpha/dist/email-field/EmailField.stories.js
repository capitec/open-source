import"../chunks-js/chunk.CXAJDKWG.js";import{a as S,b as y,c as $,d as h,e as B,f as C,g as v,h as A,i as g}from"../chunks-js/chunk.I75HJ7OM.js";import"../chunks-js/chunk.5DQX5M47.js";import"../chunks-js/chunk.DZCGDWRW.js";import"../chunks-js/chunk.Y2FNDKPS.js";import{a as w}from"../chunks-js/chunk.JSH3M4FH.js";import{a as b,b as E}from"../chunks-js/chunk.XOIHXH3W.js";import{a}from"../chunks-js/chunk.XCXCHO25.js";import{b as n}from"../chunks-js/chunk.FVJIJQ42.js";import{b as u,c as x}from"../chunks-js/chunk.WPESAYH2.js";import"../chunks-js/chunk.TTUIP4EN.js";import{E as F,m as r}from"../chunks-js/chunk.LSBYP56E.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.Z5LIJAXH.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.VW2P7YAN.js";import"../chunks-js/chunk.MYG5FMLT.js";import"../chunks-js/chunk.2EDJFZZN.js";import{a as t}from"../chunks-js/chunk.N3FDHMD3.js";import"../chunks-js/chunk.YX3UUKJ3.js";import"../chunks-js/chunk.XUUOUKOL.js";import"../chunks-js/chunk.LB764BBD.js";import"../chunks-js/chunk.KRAWXAJA.js";import"../chunks-js/chunk.LUCH4Y6K.js";import"../chunks-js/chunk.PNTHLTQK.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as l,e as o}from"../chunks-js/chunk.L3RZWW2F.js";import{h as j,m as p,p as c}from"../chunks-js/chunk.BF43NN75.js";p();c();var I=j(w(),1);var ee={title:"UI Components/Email Field",component:"omni-email-field"},L={render:e=>l`
    <omni-email-field
      data-testid="test-email-field"
      label="${a(e.label)}"
      value="${e.value}"
      hint="${a(e.hint)}"
      error="${a(e.error)}"
      ?disabled="${e.disabled}"
      ?clearable="${e.clearable}"
      >${e.prefix?l`${`\r
`}${t(r("prefix",e.prefix))}`:o}
      ${e.clear?l`${`\r
`}${t(r("clear",e.clear))}`:o}${e.suffix?l`${`\r
`}${t(r("suffix",e.suffix))}`:o}${e.prefix||e.suffix||e.clear?`\r
`:o}</omni-email-field>
  `,frameworkSources:[{framework:"Vue",load:e=>F(L.render(e),void 0,i=>i.replace(" disabled",' :disabled="true"').replace(" clearable",' :clearable="true"'))}],name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,clearable:!1,prefix:"",suffix:"",clear:""},play:async e=>{var f;let i=x(e.canvasElement).getByTestId("test-email-field");i.value="";let s=I.fn();i.addEventListener("input",s);let m=(f=i.shadowRoot)==null?void 0:f.getElementById("inputField");b(m),await E.type(m,"johndoe@gmail.com",{pointerEventsCheck:0});let d="johndoe@gmail.com";await u(()=>n(m).toHaveValue(d),{timeout:3e3}),await n(s).toBeCalledTimes(d.length)}},ie=S("omni-email-field"),le=y("omni-email-field"),oe=$("omni-email-field"),te=h("omni-email-field","johndoe@gmail.com"),ae=v("omni-email-field","johndoe@gmail.com"),re=A("omni-email-field","johndoe@gmail.com"),me=B("omni-email-field"),ne=C("omni-email-field"),se=g("omni-email-field","johndoe@gmail.com");export{ae as Clearable,re as Custom_Clear_Slot,se as Disabled,oe as Error_Label,le as Hint,L as Interactive,ie as Label,me as Prefix,ne as Suffix,te as Value,ee as default};
//# sourceMappingURL=EmailField.stories.js.map
