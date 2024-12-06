import"../chunks-js/chunk.LAVFHVDN.js";import"../chunks-js/chunk.APNKRDWQ.js";import{a as u,b as d,c as b,d as s,e as x,f as p,g as c,h as $,i as h}from"../chunks-js/chunk.TULZEO4E.js";import"../chunks-js/chunk.QQ4KC6E2.js";import"../chunks-js/chunk.PBJBFOZO.js";import{E as f,m as l}from"../chunks-js/chunk.5RQJSSR2.js";import"../chunks-js/chunk.HWW7Q3DW.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.NLDNET67.js";import"../chunks-js/chunk.L7WK7VUA.js";import"../chunks-js/chunk.YRSGKD7J.js";import"../chunks-js/chunk.6DDAVEXD.js";import{a as n}from"../chunks-js/chunk.2T6FOQVU.js";import"../chunks-js/chunk.BNDN7Y77.js";import{a as i}from"../chunks-js/chunk.3F3IIFA7.js";import{a as o}from"../chunks-js/chunk.W7VHYLAH.js";import"../chunks-js/chunk.BN6ZLWW4.js";import"../chunks-js/chunk.YTU7KEBB.js";import"../chunks-js/chunk.ZTHUBORR.js";import"../chunks-js/chunk.4PFNWG2J.js";import{d as r,g as t}from"../chunks-js/chunk.63YMDT6M.js";import{m as a,p as m}from"../chunks-js/chunk.BF43NN75.js";a();m();var A={render:e=>r`
    <omni-number-field
      data-testid="test-number-field"
      label="${o(e.label)}"
      value="${e.value}"
      max-length=${i(e.maxLength)}
      hint="${o(e.hint)}"
      error="${o(e.error)}"
      ?disabled="${e.disabled}"
      ?clearable="${e.clearable}"
      >${e.prefix?r`${`\r
`}${n(l("prefix",e.prefix))}`:t}
      ${e.clear?r`${`\r
`}${n(l("clear",e.clear))}`:t}${e.suffix?r`${`\r
`}${n(l("suffix",e.suffix))}`:t}${e.prefix||e.suffix||e.clear?`\r
`:t}</omni-number-field>
  `,frameworkSources:[{framework:"Vue",load:e=>f(A.render(e),void 0,S=>S.replace(" disabled",' :disabled="true"').replace(" clearable",' :clearable="true"'))}],name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,prefix:"",suffix:"",clear:"",maxLength:void 0}},P={render:e=>r`
        <omni-number-field
            data-testid="test-number-field"
            label="${o(e.label)}"
            value="${e.value}"
            max-length=${i(e.maxLength)}>
        </omni-number-field>
    `,frameworkSources:[{framework:"React",load:e=>`import { OmniNumberField } from "@capitec/omni-components-react/number-field";

const App = () => <OmniNumberField${e.label?` label='${e.label}'`:""}${e.value?` value='${e.value}'`:""}${e.maxLength?` max-length='${e.maxLength}'`:""}/>;`}],name:"Max Length",description:"Limit the numeric input length based on the value provided.",args:{label:"Max Length",maxLength:5}},T=u("omni-number-field"),R=d("omni-number-field"),j=b("omni-number-field"),q=s("omni-number-field",123),z=c("omni-number-field",123),G=$("omni-number-field",123),J=x("omni-number-field"),K=p("omni-number-field"),Q=h("omni-number-field",123);export{z as Clearable,G as Custom_Clear_Slot,Q as Disabled,j as Error_Label,R as Hint,A as Interactive,T as Label,P as Max_Length,J as Prefix,K as Suffix,q as Value};
//# sourceMappingURL=NumberField.stories.js.map
