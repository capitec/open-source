import"../chunks-js/chunk.XA3EQ3SI.js";import{a as S,b as y,c as $,d as h,e as B,f as C,g as v,h as A,i as g}from"../chunks-js/chunk.PTQ7XVKQ.js";import"../chunks-js/chunk.K2UMXYHA.js";import"../chunks-js/chunk.AMDN2Z2F.js";import"../chunks-js/chunk.E3RY574V.js";import"../chunks-js/chunk.XGCBNSF2.js";import{a as w}from"../chunks-js/chunk.IRJIQSYL.js";import"../chunks-js/chunk.LCIHREUY.js";import{a as b,b as E}from"../chunks-js/chunk.MHLMY33S.js";import{a}from"../chunks-js/chunk.6QCQBNRL.js";import{b as u,c as x}from"../chunks-js/chunk.N6OKW4B2.js";import{d as n}from"../chunks-js/chunk.W54IKPJD.js";import{E as F,m as r}from"../chunks-js/chunk.JVZL4EXU.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.H2SV3XAM.js";import{a as t}from"../chunks-js/chunk.32OT4JFD.js";import"../chunks-js/chunk.ZPV4YWBP.js";import"../chunks-js/chunk.B6SUKNHE.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as l,d as o}from"../chunks-js/chunk.F6MIXR4E.js";import{h as j,m as p,p as c}from"../chunks-js/chunk.BF43NN75.js";p();c();var I=j(w(),1);var ee={title:"UI Components/Email Field",component:"omni-email-field"},L={render:e=>l`
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
