import"../chunks-js/chunk.6E35JP5Q.js";import"../chunks-js/chunk.BKUUO7ED.js";import{a as f,b as c,c as m,d as b,e as p,f as u,g as x,h as C}from"../chunks-js/chunk.PH4CJT4G.js";import"../chunks-js/chunk.H4M5P4MF.js";import"../chunks-js/chunk.Y2FNDKPS.js";import{E as d,m as t}from"../chunks-js/chunk.F2QZVZT6.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.Z5LIJAXH.js";import"../chunks-js/chunk.UHIDETPL.js";import"../chunks-js/chunk.R74VGS2O.js";import"../chunks-js/chunk.MDYAUJ3Z.js";import"../chunks-js/chunk.VTL5CONA.js";import{a as i}from"../chunks-js/chunk.5DDJQYYG.js";import"../chunks-js/chunk.3U7QFP2Q.js";import"../chunks-js/chunk.LB764BBD.js";import{a as l}from"../chunks-js/chunk.XCXCHO25.js";import"../chunks-js/chunk.KRAWXAJA.js";import"../chunks-js/chunk.FT5UPVZS.js";import"../chunks-js/chunk.6C4LMRM7.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as o,e as r}from"../chunks-js/chunk.L3RZWW2F.js";import{m as n,p as s}from"../chunks-js/chunk.BF43NN75.js";n();s();var $={render:e=>o`
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
