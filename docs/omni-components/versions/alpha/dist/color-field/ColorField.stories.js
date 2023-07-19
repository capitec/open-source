import"../chunks-js/chunk.L6V5HXMD.js";import"../chunks-js/chunk.BKUUO7ED.js";import{a as m,b as s,c,d as p,e as b,f as u,g as x,h as C}from"../chunks-js/chunk.Y7PYKMUN.js";import"../chunks-js/chunk.ZGHDW2L3.js";import"../chunks-js/chunk.Y2FNDKPS.js";import{E as n,m as t}from"../chunks-js/chunk.7KM4B723.js";import"../chunks-js/chunk.Z5LIJAXH.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.UHIDETPL.js";import"../chunks-js/chunk.KPSG3GC4.js";import"../chunks-js/chunk.MDYAUJ3Z.js";import"../chunks-js/chunk.VTL5CONA.js";import{a as i}from"../chunks-js/chunk.5DDJQYYG.js";import"../chunks-js/chunk.3U7QFP2Q.js";import"../chunks-js/chunk.LB764BBD.js";import{a as l}from"../chunks-js/chunk.XCXCHO25.js";import"../chunks-js/chunk.KRAWXAJA.js";import"../chunks-js/chunk.FT5UPVZS.js";import"../chunks-js/chunk.6C4LMRM7.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as o,e as r}from"../chunks-js/chunk.L3RZWW2F.js";import{m as d,p as f}from"../chunks-js/chunk.BF43NN75.js";d();f();var T={title:"UI Components/Color Field",component:"omni-color-field"},F={render:e=>o`
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
  `,frameworkSources:[{framework:"Vue",load:e=>n(F.render(e),void 0,a=>a.replace(" disabled",' :disabled="true"').replace(" clearable",' :clearable="true"'))}],name:"Interactive",args:{label:"Label",value:"",data:{},hint:"",error:"",disabled:!1,clearable:!1,prefix:"",suffix:"",clear:""}},j=m("omni-color-field"),M=s("omni-color-field"),N=c("omni-color-field"),R=p("omni-color-field","#f6b73c"),U=x("omni-color-field","#f6b73c"),q=C("omni-color-field","#f6b73c"),z=b("omni-color-field"),G=u("omni-color-field"),S={render:e=>o`<omni-color-field data-testid="test-field" label="${l(e.label)}" disabled></omni-color-field>`,frameworkSources:[{framework:"React",load:e=>`import { OmniColorField } from "@capitec/omni-components-react/color-field";

const App = () => <OmniColorField${e.label?` label='${e.label}'`:""}${e.disabled?" disabled":""}/>;`},{framework:"Vue",load:e=>n(S.render(e),void 0,a=>a.replace(" disabled",' :disabled="true"').replace(" clearable",' :clearable="true"'))}],name:"Disabled",description:"Prevent interaction (pointer events).",args:{label:"Disabled",disabled:!0}};export{U as Clearable,q as Custom_Clear_Slot,S as Disabled,N as Error_Label,M as Hint,F as Interactive,j as Label,z as Prefix,G as Suffix,R as Value,T as default};
//# sourceMappingURL=ColorField.stories.js.map
