import"../chunks-js/chunk.PIF54CBK.js";import"../chunks-js/chunk.7TCHE74C.js";import"../chunks-js/chunk.GUEBHYHC.js";import"../chunks-js/chunk.V3QRUW2P.js";import"../chunks-js/chunk.PZ5SAQK7.js";import"../chunks-js/chunk.CUAVHP62.js";import{a as d,b as f,c as s,d as c,e as x,f as h,g as $,h as b,i as u}from"../chunks-js/chunk.GMRLEMQH.js";import"../chunks-js/chunk.BMTJOHJJ.js";import"../chunks-js/chunk.A6RJOB4D.js";import"../chunks-js/chunk.34WDYOTS.js";import{E as p,m as o}from"../chunks-js/chunk.W4QDIT72.js";import"../chunks-js/chunk.YISFJ54N.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.LNQK3SMD.js";import{a as n}from"../chunks-js/chunk.C3AR2WR4.js";import"../chunks-js/chunk.RI2XHZQE.js";import"../chunks-js/chunk.MRDDZJ5F.js";import"../chunks-js/chunk.3IMCJ7UD.js";import{a as r}from"../chunks-js/chunk.J37ISGRJ.js";import"../chunks-js/chunk.CDUHNCVH.js";import{a as m}from"../chunks-js/chunk.DUTPH62F.js";import"../chunks-js/chunk.R7EUQMUJ.js";import"../chunks-js/chunk.E2CUUU4Y.js";import"../chunks-js/chunk.Y6UVSDXK.js";import{d as i,g as t}from"../chunks-js/chunk.UDCULUBW.js";import{m as l,p as a}from"../chunks-js/chunk.BF43NN75.js";l();a();var A={render:e=>i`
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
