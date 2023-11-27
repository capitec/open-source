import"../chunks-js/chunk.3THET6PD.js";import"../chunks-js/chunk.6RBXNKJ6.js";import{a as f,b as c,c as m,d as b,e as p,f as u,g as x,h as C}from"../chunks-js/chunk.TK7BLQR4.js";import"../chunks-js/chunk.GCB5FYKQ.js";import"../chunks-js/chunk.Q2DE3UYO.js";import"../chunks-js/chunk.SFBF6ZN2.js";import{E as d,m as t}from"../chunks-js/chunk.N4YSS3AO.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.ZVGMNGQN.js";import"../chunks-js/chunk.KJQ7PCHE.js";import{a as l}from"../chunks-js/chunk.A5JWGKKF.js";import"../chunks-js/chunk.R2JFHROS.js";import"../chunks-js/chunk.N2G7JZB7.js";import"../chunks-js/chunk.IMOBQWSU.js";import{a as i}from"../chunks-js/chunk.GGHQSTCM.js";import"../chunks-js/chunk.XTJU4JXQ.js";import"../chunks-js/chunk.77M5452K.js";import"../chunks-js/chunk.VVHFAJKZ.js";import"../chunks-js/chunk.LAXESDIJ.js";import"../chunks-js/chunk.2KHELDCI.js";import{b as o,e as r}from"../chunks-js/chunk.6H2RNHNO.js";import{m as n,p as s}from"../chunks-js/chunk.BF43NN75.js";n();s();var $={render:e=>o`
    <omni-color-field
      data-testid="test-color-field"
      label="${l(e.label)}"
      value="${e.value}"
      hint="${l(e.hint)}"
      error="${l(e.error)}"
      ?disabled="${e.disabled}"
      ?clearable="${e.clearable}"
      >${e.prefix?o`${`\r
`}${i(t("prefix",e.prefix))}`:r}
       ${e.clear?o`${`\r
`}${i(t("clear",e.clear))}`:r}${e.suffix?o`${`\r
`}${i(t("suffix",e.suffix))}`:r}${e.prefix||e.suffix||e.clear?`\r
`:r}</omni-color-field
    >
  `,frameworkSources:[{framework:"Vue",load:e=>d($.render(e),void 0,a=>a.replace(" disabled",' :disabled="true"').replace(" clearable",' :clearable="true"'))}],name:"Interactive",args:{label:"Label",value:"",data:{},hint:"",error:"",disabled:!1,clearable:!1,prefix:"",suffix:"",clear:""}},O=f("omni-color-field"),T=c("omni-color-field"),M=m("omni-color-field"),N=b("omni-color-field","#f6b73c"),R=x("omni-color-field","#f6b73c"),j=C("omni-color-field","#f6b73c"),q=p("omni-color-field"),z=u("omni-color-field"),S={render:e=>o`<omni-color-field data-testid="test-field" label="${l(e.label)}" disabled></omni-color-field>`,frameworkSources:[{framework:"React",load:e=>`import { OmniColorField } from "@capitec/omni-components-react/color-field";

const App = () => <OmniColorField${e.label?` label='${e.label}'`:""}${e.disabled?" disabled":""}/>;`},{framework:"Vue",load:e=>d(S.render(e),void 0,a=>a.replace(" disabled",' :disabled="true"').replace(" clearable",' :clearable="true"'))}],name:"Disabled",description:"Prevent interaction (pointer events).",args:{label:"Disabled",disabled:!0}};export{R as Clearable,j as Custom_Clear_Slot,S as Disabled,M as Error_Label,T as Hint,$ as Interactive,O as Label,q as Prefix,z as Suffix,N as Value};
//# sourceMappingURL=ColorField.stories.js.map
