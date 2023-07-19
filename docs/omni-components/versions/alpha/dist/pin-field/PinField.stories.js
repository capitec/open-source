import"../chunks-js/chunk.TFTCMOEK.js";import"../chunks-js/chunk.4DK445VM.js";import"../chunks-js/chunk.YZDFU56K.js";import"../chunks-js/chunk.IKEO2J7X.js";import"../chunks-js/chunk.KCLYGUKE.js";import"../chunks-js/chunk.DGWR2I27.js";import{a as p,b as f,c as s,d as c,e as x,f as h,g as u,h as $,i as b}from"../chunks-js/chunk.Y7PYKMUN.js";import"../chunks-js/chunk.ZGHDW2L3.js";import"../chunks-js/chunk.Y2FNDKPS.js";import{E as d,m as r}from"../chunks-js/chunk.7KM4B723.js";import"../chunks-js/chunk.Z5LIJAXH.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.UHIDETPL.js";import"../chunks-js/chunk.KPSG3GC4.js";import"../chunks-js/chunk.MDYAUJ3Z.js";import"../chunks-js/chunk.VTL5CONA.js";import{a as o}from"../chunks-js/chunk.5DDJQYYG.js";import"../chunks-js/chunk.3U7QFP2Q.js";import{a as m}from"../chunks-js/chunk.LB764BBD.js";import{a as n}from"../chunks-js/chunk.XCXCHO25.js";import"../chunks-js/chunk.KRAWXAJA.js";import"../chunks-js/chunk.FT5UPVZS.js";import"../chunks-js/chunk.6C4LMRM7.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as i,e as t}from"../chunks-js/chunk.L3RZWW2F.js";import{m as l,p as a}from"../chunks-js/chunk.BF43NN75.js";l();a();var R={title:"UI Components/Pin Field",component:"omni-pin-field"},F={render:e=>i`
    <omni-pin-field
      data-testid="test-pin-field"
      label="${n(e.label)}"
      value="${e.value}"
      max-length=${e.maxLength}
      hint="${n(e.hint)}"
      error="${n(e.error)}"
      ?disabled="${e.disabled}"
      ?clearable="${e.clearable}">${e.prefix?i`${`\r
`}${o(r("prefix",e.prefix))}`:t}
      ${e.clear?i`${`\r
`}${o(r("clear",e.clear))}`:t}${e.suffix?i`${`\r
`}${o(r("suffix",e.suffix))}`:t}${e.hide?i`${`\r
`}${o(r("hide",e.hide))}`:t}${e.show?i`${`\r
`}${o(r("show",e.show))}`:t}</omni-pin-field>
  `,frameworkSources:[{framework:"Vue",load:e=>d(F.render(e),void 0,S=>S.replace(" disabled",' :disabled="true"').replace(" clearable",' :clearable="true"'))}],name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,clearable:!1,prefix:"",suffix:"",clear:"",hide:"",show:"",maxLength:void 0}},q={render:e=>i`
    <omni-pin-field
      data-testid="test-pin-field"
      label="${n(e.label)}"
      value="${e.value}"
      max-length=${m(e.maxLength)}>
    </omni-pin-field>
  `,frameworkSources:[{framework:"React",load:e=>`import { OmniPinField } from "@capitec/omni-components-react/pin-field";

const App = () => <OmniPinField${e.label?` label='${e.label}'`:""}${e.value?` value='${e.value}'`:""}${e.maxLength?` max-length='${e.maxLength}'`:""}/>;`}],name:"Max Length",description:"Limit the character input length based on the value provided.",args:{label:"Max Length",maxLength:5}},z=p("omni-pin-field"),G=f("omni-pin-field"),J=s("omni-pin-field"),K=c("omni-pin-field","1234"),Q=u("omni-pin-field","1234"),W=$("omni-pin-field","1234"),X=x("omni-pin-field"),Y=h("omni-pin-field"),Z=b("omni-pin-field","1234");export{Q as Clearable,W as Custom_Clear_Slot,Z as Disabled,J as Error_Label,G as Hint,F as Interactive,z as Label,q as Max_Length,X as Prefix,Y as Suffix,K as Value,R as default};
//# sourceMappingURL=PinField.stories.js.map
