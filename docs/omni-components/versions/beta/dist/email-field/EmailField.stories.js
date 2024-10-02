import"../chunks-js/chunk.UUFKF5PX.js";import"../chunks-js/chunk.APNKRDWQ.js";import{a as d,b as s,c,d as x,e as p,f as u,g as b,h,i as $}from"../chunks-js/chunk.K7PKFSGP.js";import"../chunks-js/chunk.QQ4KC6E2.js";import"../chunks-js/chunk.PBJBFOZO.js";import{E as f,m as t}from"../chunks-js/chunk.TLDOTCP4.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.VRVI2LVR.js";import"../chunks-js/chunk.NLDNET67.js";import"../chunks-js/chunk.MQIQXPFF.js";import"../chunks-js/chunk.YRSGKD7J.js";import"../chunks-js/chunk.6DDAVEXD.js";import{a}from"../chunks-js/chunk.2T6FOQVU.js";import"../chunks-js/chunk.BNDN7Y77.js";import{a as r}from"../chunks-js/chunk.3F3IIFA7.js";import{a as i}from"../chunks-js/chunk.W7VHYLAH.js";import"../chunks-js/chunk.BN6ZLWW4.js";import"../chunks-js/chunk.YTU7KEBB.js";import"../chunks-js/chunk.ZTHUBORR.js";import"../chunks-js/chunk.4PFNWG2J.js";import{d as l,g as o}from"../chunks-js/chunk.63YMDT6M.js";import{m,p as n}from"../chunks-js/chunk.BF43NN75.js";m();n();var g={render:e=>l`
    <omni-email-field
      data-testid="test-email-field"
      label="${i(e.label)}"
      value="${e.value}"
      max-length=${r(e.maxLength)}
      hint="${i(e.hint)}"
      error="${i(e.error)}"
      ?disabled="${e.disabled}"
      ?clearable="${e.clearable}"
      >${e.prefix?l`${`\r
`}${a(t("prefix",e.prefix))}`:o}
      ${e.clear?l`${`\r
`}${a(t("clear",e.clear))}`:o}${e.suffix?l`${`\r
`}${a(t("suffix",e.suffix))}`:o}${e.prefix||e.suffix||e.clear?`\r
`:o}</omni-email-field>
  `,frameworkSources:[{framework:"Vue",load:e=>f(g.render(e),void 0,S=>S.replace(" disabled",' :disabled="true"').replace(" clearable",' :clearable="true"'))}],name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,clearable:!1,prefix:"",suffix:"",clear:"",maxLength:void 0}},P={render:e=>l`
        <omni-email-field
            data-testid="test-email-field"
            label="${i(e.label)}"
            value="${e.value}"
            max-length=${r(e.maxLength)}>
        </omni-email-field>
    `,frameworkSources:[{framework:"React",load:e=>`import { OmniEmailField } from "@capitec/omni-components-react/email-field";

const App = () => <OmniEmailField${e.label?` label='${e.label}'`:""}${e.value?` value='${e.value}'`:""}${e.maxLength?` max-length='${e.maxLength}'`:""}/>;`}],name:"Max Length",description:"Limit the character input length based on the value provided to the email field.",args:{label:"Max Length",maxLength:5}},T=d("omni-email-field"),N=s("omni-email-field"),R=c("omni-email-field"),q=x("omni-email-field","johndoe@gmail.com"),z=b("omni-email-field","johndoe@gmail.com"),G=h("omni-email-field","johndoe@gmail.com"),J=p("omni-email-field"),K=u("omni-email-field"),Q=$("omni-email-field","johndoe@gmail.com");export{z as Clearable,G as Custom_Clear_Slot,Q as Disabled,R as Error_Label,N as Hint,g as Interactive,T as Label,P as Max_Length,J as Prefix,K as Suffix,q as Value};
//# sourceMappingURL=EmailField.stories.js.map
