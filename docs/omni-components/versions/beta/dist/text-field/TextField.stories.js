import"../chunks-js/chunk.YOC3HRK7.js";import"../chunks-js/chunk.APNKRDWQ.js";import{a as x,b as d,c as s,d as c,e as p,f as u,g as b,h as $,i as h}from"../chunks-js/chunk.K7PKFSGP.js";import"../chunks-js/chunk.QQ4KC6E2.js";import"../chunks-js/chunk.PBJBFOZO.js";import{E as f,m as a}from"../chunks-js/chunk.TLDOTCP4.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.VRVI2LVR.js";import"../chunks-js/chunk.NLDNET67.js";import"../chunks-js/chunk.MQIQXPFF.js";import"../chunks-js/chunk.YRSGKD7J.js";import"../chunks-js/chunk.6DDAVEXD.js";import{a as l}from"../chunks-js/chunk.2T6FOQVU.js";import"../chunks-js/chunk.BNDN7Y77.js";import{a as i}from"../chunks-js/chunk.3F3IIFA7.js";import{a as o}from"../chunks-js/chunk.W7VHYLAH.js";import"../chunks-js/chunk.BN6ZLWW4.js";import"../chunks-js/chunk.YTU7KEBB.js";import"../chunks-js/chunk.ZTHUBORR.js";import"../chunks-js/chunk.4PFNWG2J.js";import{d as t,g as r}from"../chunks-js/chunk.63YMDT6M.js";import{m as n,p as m}from"../chunks-js/chunk.BF43NN75.js";n();m();var L={render:e=>t`
    <omni-text-field
      data-testid="test-text-field"
      label="${o(e.label)}"
      value="${e.value}"
      max-length=${i(e.maxLength)}
      hint="${o(e.hint)}"
      error="${o(e.error)}"
      ?disabled="${e.disabled}"
      ?clearable="${e.clearable}"
      >${e.prefix?t`${`\r
`}${l(a("prefix",e.prefix))}`:r}
      ${e.clear?t`${`\r
`}${l(a("clear",e.clear))}`:r}${e.suffix?t`${`\r
`}${l(a("suffix",e.suffix))}`:r}${e.prefix||e.suffix||e.clear?`\r
`:r}</omni-text-field>
  `,frameworkSources:[{framework:"Vue",load:e=>f(L.render(e),void 0,S=>S.replace(" disabled",' :disabled="true"').replace(" clearable",' :clearable="true"'))}],name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,clearable:!1,prefix:"",suffix:"",clear:"",maxLength:void 0}},P={render:e=>t`
    <omni-text-field
      data-testid="test-text-field"
      label="${o(e.label)}"
      value="${e.value}"
      max-length=${i(e.maxLength)}>
    </omni-text-field>
    `,frameworkSources:[{framework:"React",load:e=>`import { OmniTextField } from "@capitec/omni-components-react/text-field";

const App = () => <OmniTextField${e.label?` label='${e.label}'`:""}${e.value?` value='${e.value}'`:""}${e.maxLength?`max-length='${e.maxLength}'`:""}/>;`}],name:"Max Length",description:"Limit the character input length of the text field based on the value provided",args:{label:"Max Length",maxLength:5,value:"SomeLongValue"}},N=x("omni-text-field"),R=d("omni-text-field"),j=s("omni-text-field"),q=c("omni-text-field"),z=b("omni-text-field"),G=$("omni-text-field"),J=p("omni-text-field"),K=u("omni-text-field"),Q=h("omni-text-field");export{z as Clearable,G as Custom_Clear_Slot,Q as Disabled,j as Error_Label,R as Hint,L as Interactive,N as Label,P as Max_Length,J as Prefix,K as Suffix,q as Value};
//# sourceMappingURL=TextField.stories.js.map
