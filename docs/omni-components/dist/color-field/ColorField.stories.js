import"../chunks-js/chunk.T4BOBLVW.js";import"../chunks-js/chunk.APNKRDWQ.js";import{a as c,b as f,c as m,d as b,e as p,f as u,g as x,h as $}from"../chunks-js/chunk.BIEJ4HOS.js";import"../chunks-js/chunk.QQ4KC6E2.js";import"../chunks-js/chunk.PBJBFOZO.js";import{E as n,m as t}from"../chunks-js/chunk.ID6MYT2L.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.HWW7Q3DW.js";import"../chunks-js/chunk.NLDNET67.js";import"../chunks-js/chunk.6HZBBJZW.js";import"../chunks-js/chunk.YRSGKD7J.js";import"../chunks-js/chunk.6DDAVEXD.js";import{a}from"../chunks-js/chunk.2T6FOQVU.js";import"../chunks-js/chunk.BNDN7Y77.js";import"../chunks-js/chunk.3F3IIFA7.js";import{a as l}from"../chunks-js/chunk.W7VHYLAH.js";import"../chunks-js/chunk.BN6ZLWW4.js";import"../chunks-js/chunk.YTU7KEBB.js";import"../chunks-js/chunk.ZTHUBORR.js";import"../chunks-js/chunk.4PFNWG2J.js";import{d as r,g as o}from"../chunks-js/chunk.63YMDT6M.js";import{m as d,p as s}from"../chunks-js/chunk.BF43NN75.js";d();s();var S={render:e=>r`
    <omni-color-field
      data-testid="test-color-field"
      label="${l(e.label)}"
      value="${e.value}"
      hint="${l(e.hint)}"
      error="${l(e.error)}"
      ?disabled="${e.disabled}"
      ?clearable="${e.clearable}"
      >${e.prefix?r`${`\r
`}${a(t("prefix",e.prefix))}`:o}
       ${e.clear?r`${`\r
`}${a(t("clear",e.clear))}`:o}${e.suffix?r`${`\r
`}${a(t("suffix",e.suffix))}`:o}${e.prefix||e.suffix||e.clear?`\r
`:o}</omni-color-field
    >
  `,frameworkSources:[{framework:"Vue",load:e=>n(S.render(e),void 0,i=>i.replace(" disabled",' :disabled="true"').replace(" clearable",' :clearable="true"'))}],name:"Interactive",args:{label:"Label",value:"",data:{},hint:"",error:"",disabled:!1,clearable:!1,prefix:"",suffix:"",clear:""}},O=c("omni-color-field"),T=f("omni-color-field"),M=m("omni-color-field"),N=b("omni-color-field","#f6b73c"),R=x("omni-color-field","#f6b73c"),j=$("omni-color-field","#f6b73c"),q=p("omni-color-field"),z=u("omni-color-field"),A={render:e=>r`<omni-color-field data-testid="test-field" label="${l(e.label)}" disabled></omni-color-field>`,frameworkSources:[{framework:"React",load:e=>`import { OmniColorField } from "@capitec/omni-components-react/color-field";

const App = () => <OmniColorField${e.label?` label='${e.label}'`:""}${e.disabled?" disabled":""}/>;`},{framework:"Vue",load:e=>n(A.render(e),void 0,i=>i.replace(" disabled",' :disabled="true"').replace(" clearable",' :clearable="true"'))}],name:"Disabled",description:"Prevent interaction (pointer events).",args:{label:"Disabled",disabled:!0}};export{R as Clearable,j as Custom_Clear_Slot,A as Disabled,M as Error_Label,T as Hint,S as Interactive,O as Label,q as Prefix,z as Suffix,N as Value};
//# sourceMappingURL=ColorField.stories.js.map
