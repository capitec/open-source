import{a as c,b as f,c as m,d as b,e as p,f as u,g as x,h as $}from"../chunks-js/chunk.3UYRIGUL.js";import"../chunks-js/chunk.KCYS7RYI.js";import"../chunks-js/chunk.KGCS7GKM.js";import"../chunks-js/chunk.553RDMBX.js";import"../chunks-js/chunk.A6RJOB4D.js";import"../chunks-js/chunk.34WDYOTS.js";import{E as n,m as t}from"../chunks-js/chunk.LIHXMBR3.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.YISFJ54N.js";import"../chunks-js/chunk.TQF2Y64M.js";import"../chunks-js/chunk.FCGABMD4.js";import"../chunks-js/chunk.D5GPI5IO.js";import"../chunks-js/chunk.VXWK2PFN.js";import{a}from"../chunks-js/chunk.I4G3FJEU.js";import"../chunks-js/chunk.D57IHIAB.js";import"../chunks-js/chunk.DUTPH62F.js";import{a as l}from"../chunks-js/chunk.C3AR2WR4.js";import"../chunks-js/chunk.ZJGON3BB.js";import"../chunks-js/chunk.P6J7VJ5B.js";import"../chunks-js/chunk.Y6UVSDXK.js";import{d as r,g as o}from"../chunks-js/chunk.UDCULUBW.js";import{m as d,p as s}from"../chunks-js/chunk.BF43NN75.js";d();s();var S={render:e=>r`
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
