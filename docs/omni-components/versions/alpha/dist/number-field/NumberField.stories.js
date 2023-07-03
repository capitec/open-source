import"../chunks-js/chunk.WZPQPBG2.js";import{a as f,b as s,c as u,d,e as b,f as p,g as c,h as x,i as S}from"../chunks-js/chunk.L542EVWB.js";import"../chunks-js/chunk.5DQX5M47.js";import"../chunks-js/chunk.INUETMMB.js";import"../chunks-js/chunk.Y2FNDKPS.js";import{E as a,m as l}from"../chunks-js/chunk.TJTW5ASN.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.Z5LIJAXH.js";import"../chunks-js/chunk.VW2P7YAN.js";import"../chunks-js/chunk.MYG5FMLT.js";import"../chunks-js/chunk.2EDJFZZN.js";import{a as i}from"../chunks-js/chunk.N3FDHMD3.js";import"../chunks-js/chunk.YX3UUKJ3.js";import"../chunks-js/chunk.XUUOUKOL.js";import"../chunks-js/chunk.LB764BBD.js";import{a as t}from"../chunks-js/chunk.XCXCHO25.js";import"../chunks-js/chunk.KRAWXAJA.js";import"../chunks-js/chunk.LUCH4Y6K.js";import"../chunks-js/chunk.PNTHLTQK.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as r,e as o}from"../chunks-js/chunk.L3RZWW2F.js";import{m,p as n}from"../chunks-js/chunk.BF43NN75.js";m();n();var T={title:"UI Components/Number Field",component:"omni-number-field"},$={render:e=>r`
    <omni-number-field
      data-testid="test-number-field"
      label="${t(e.label)}"
      value="${e.value}"
      hint="${t(e.hint)}"
      error="${t(e.error)}"
      ?disabled="${e.disabled}"
      ?clearable="${e.clearable}"
      >${e.prefix?r`${`\r
`}${i(l("prefix",e.prefix))}`:o}
      ${e.clear?r`${`\r
`}${i(l("clear",e.clear))}`:o}${e.suffix?r`${`\r
`}${i(l("suffix",e.suffix))}`:o}${e.prefix||e.suffix||e.clear?`\r
`:o}</omni-number-field>
  `,frameworkSources:[{framework:"Vue",load:e=>a($.render(e),void 0,F=>F.replace(" disabled",' :disabled="true"').replace(" clearable",' :clearable="true"'))}],name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,prefix:"",suffix:"",clear:""}},U=f("omni-number-field"),j=s("omni-number-field"),M=u("omni-number-field"),q=d("omni-number-field",123),z=c("omni-number-field",123),G=x("omni-number-field",123),J=b("omni-number-field"),K=p("omni-number-field"),O=S("omni-number-field",123);export{z as Clearable,G as Custom_Clear_Slot,O as Disabled,M as Error_Label,j as Hint,$ as Interactive,U as Label,J as Prefix,K as Suffix,q as Value,T as default};
//# sourceMappingURL=NumberField.stories.js.map
