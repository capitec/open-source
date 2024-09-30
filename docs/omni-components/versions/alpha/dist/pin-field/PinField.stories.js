import"../chunks-js/chunk.MDLFADL6.js";import"../chunks-js/chunk.WL7VXR5S.js";import"../chunks-js/chunk.T4SDHHUM.js";import"../chunks-js/chunk.GUDVHTPA.js";import"../chunks-js/chunk.ZUGOSYS3.js";import"../chunks-js/chunk.KMIMSVOG.js";import{a as d,b as f,c as s,d as c,e as x,f as h,g as $,h as b,i as u}from"../chunks-js/chunk.WTSDFIPJ.js";import"../chunks-js/chunk.QQ4KC6E2.js";import"../chunks-js/chunk.PBJBFOZO.js";import{E as p,m as o}from"../chunks-js/chunk.VT33ZWJV.js";import"../chunks-js/chunk.VRVI2LVR.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.NLDNET67.js";import"../chunks-js/chunk.XWTONBU2.js";import"../chunks-js/chunk.YRSGKD7J.js";import"../chunks-js/chunk.6DDAVEXD.js";import{a as r}from"../chunks-js/chunk.2T6FOQVU.js";import"../chunks-js/chunk.BNDN7Y77.js";import{a as m}from"../chunks-js/chunk.3F3IIFA7.js";import{a as n}from"../chunks-js/chunk.W7VHYLAH.js";import"../chunks-js/chunk.BN6ZLWW4.js";import"../chunks-js/chunk.YTU7KEBB.js";import"../chunks-js/chunk.ZTHUBORR.js";import"../chunks-js/chunk.4PFNWG2J.js";import{d as i,g as t}from"../chunks-js/chunk.63YMDT6M.js";import{m as l,p as a}from"../chunks-js/chunk.BF43NN75.js";l();a();var A={render:e=>i`
    <omni-pin-field
      data-testid="test-pin-field"
      label="${n(e.label)}"
      value="${e.value}"
      max-length=${e.maxLength}
      hint="${n(e.hint)}"
      error="${n(e.error)}"
      ?disabled="${e.disabled}"
      ?clearable="${e.clearable}">${e.prefix?i`${`\r
`}${r(o("prefix",e.prefix))}`:t}
      ${e.clear?i`${`\r
`}${r(o("clear",e.clear))}`:t}${e.suffix?i`${`\r
`}${r(o("suffix",e.suffix))}`:t}${e.hide?i`${`\r
`}${r(o("hide",e.hide))}`:t}${e.show?i`${`\r
`}${r(o("show",e.show))}`:t}</omni-pin-field>
  `,frameworkSources:[{framework:"Vue",load:e=>p(A.render(e),void 0,S=>S.replace(" disabled",' :disabled="true"').replace(" clearable",' :clearable="true"'))}],name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,clearable:!1,prefix:"",suffix:"",clear:"",hide:"",show:"",maxLength:void 0}},j={render:e=>i`
    <omni-pin-field
      data-testid="test-pin-field"
      label="${n(e.label)}"
      value="${e.value}"
      max-length=${m(e.maxLength)}>
    </omni-pin-field>
  `,frameworkSources:[{framework:"React",load:e=>`import { OmniPinField } from "@capitec/omni-components-react/pin-field";

const App = () => <OmniPinField${e.label?` label='${e.label}'`:""}${e.value?` value='${e.value}'`:""}${e.maxLength?` max-length='${e.maxLength}'`:""}/>;`}],name:"Max Length",description:"Limit the character input length based on the value provided.",args:{label:"Max Length",maxLength:5}},q=d("omni-pin-field"),z=f("omni-pin-field"),G=s("omni-pin-field"),J=c("omni-pin-field","1234"),K=$("omni-pin-field","1234"),Q=b("omni-pin-field","1234"),U=x("omni-pin-field"),W=h("omni-pin-field"),X=u("omni-pin-field","1234");export{K as Clearable,Q as Custom_Clear_Slot,X as Disabled,G as Error_Label,z as Hint,A as Interactive,q as Label,j as Max_Length,U as Prefix,W as Suffix,J as Value};
//# sourceMappingURL=PinField.stories.js.map
