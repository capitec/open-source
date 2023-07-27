import"../chunks-js/chunk.2NDD7EKH.js";import"../chunks-js/chunk.4DK445VM.js";import"../chunks-js/chunk.YZDFU56K.js";import"../chunks-js/chunk.IKEO2J7X.js";import"../chunks-js/chunk.KCLYGUKE.js";import"../chunks-js/chunk.DGWR2I27.js";import{a as p,b as f,c as s,d as c,e as x,f as h,g as $,h as b,i as u}from"../chunks-js/chunk.DEUMVNWK.js";import"../chunks-js/chunk.INUETMMB.js";import"../chunks-js/chunk.Y2FNDKPS.js";import{E as d,m as t}from"../chunks-js/chunk.OQGANNKN.js";import"../chunks-js/chunk.Z5LIJAXH.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.XUUOUKOL.js";import"../chunks-js/chunk.D4QWJ7ZS.js";import"../chunks-js/chunk.MYG5FMLT.js";import"../chunks-js/chunk.2EDJFZZN.js";import{a as r}from"../chunks-js/chunk.N3FDHMD3.js";import"../chunks-js/chunk.YX3UUKJ3.js";import{a as m}from"../chunks-js/chunk.LB764BBD.js";import{a as o}from"../chunks-js/chunk.XCXCHO25.js";import"../chunks-js/chunk.KRAWXAJA.js";import"../chunks-js/chunk.LUCH4Y6K.js";import"../chunks-js/chunk.PNTHLTQK.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as i,e as n}from"../chunks-js/chunk.L3RZWW2F.js";import{m as l,p as a}from"../chunks-js/chunk.BF43NN75.js";l();a();var A={render:e=>i`
    <omni-pin-field
      data-testid="test-pin-field"
      label="${o(e.label)}"
      value="${e.value}"
      max-length=${e.maxLength}
      hint="${o(e.hint)}"
      error="${o(e.error)}"
      ?disabled="${e.disabled}"
      ?clearable="${e.clearable}">${e.prefix?i`${`\r
`}${r(t("prefix",e.prefix))}`:n}
      ${e.clear?i`${`\r
`}${r(t("clear",e.clear))}`:n}${e.suffix?i`${`\r
`}${r(t("suffix",e.suffix))}`:n}${e.hide?i`${`\r
`}${r(t("hide",e.hide))}`:n}${e.show?i`${`\r
`}${r(t("show",e.show))}`:n}</omni-pin-field>
  `,frameworkSources:[{framework:"Vue",load:e=>d(A.render(e),void 0,S=>S.replace(" disabled",' :disabled="true"').replace(" clearable",' :clearable="true"'))}],name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,clearable:!1,prefix:"",suffix:"",clear:"",hide:"",show:"",maxLength:void 0}},j={render:e=>i`
    <omni-pin-field
      data-testid="test-pin-field"
      label="${o(e.label)}"
      value="${e.value}"
      max-length=${m(e.maxLength)}>
    </omni-pin-field>
  `,frameworkSources:[{framework:"React",load:e=>`import { OmniPinField } from "@capitec/omni-components-react/pin-field";

const App = () => <OmniPinField${e.label?` label='${e.label}'`:""}${e.value?` value='${e.value}'`:""}${e.maxLength?` max-length='${e.maxLength}'`:""}/>;`}],name:"Max Length",description:"Limit the character input length based on the value provided.",args:{label:"Max Length",maxLength:5}},q=p("omni-pin-field"),z=f("omni-pin-field"),G=s("omni-pin-field"),J=c("omni-pin-field","1234"),K=$("omni-pin-field","1234"),Q=b("omni-pin-field","1234"),U=x("omni-pin-field"),W=h("omni-pin-field"),X=u("omni-pin-field","1234");export{K as Clearable,Q as Custom_Clear_Slot,X as Disabled,G as Error_Label,z as Hint,A as Interactive,q as Label,j as Max_Length,U as Prefix,W as Suffix,J as Value};
//# sourceMappingURL=PinField.stories.js.map
