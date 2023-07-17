import"../chunks-js/chunk.4IAKUAFA.js";import"../chunks-js/chunk.BKUUO7ED.js";import{a as f,b as d,c as s,d as p,e as c,f as x,g as u,h as b,i as S}from"../chunks-js/chunk.CU6A34Y6.js";import"../chunks-js/chunk.ZGHDW2L3.js";import"../chunks-js/chunk.Y2FNDKPS.js";import{E as n,m as a}from"../chunks-js/chunk.ZCQBBFJF.js";import"../chunks-js/chunk.Z5LIJAXH.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.UHIDETPL.js";import"../chunks-js/chunk.KPSG3GC4.js";import"../chunks-js/chunk.MDYAUJ3Z.js";import"../chunks-js/chunk.VTL5CONA.js";import{a as o}from"../chunks-js/chunk.5DDJQYYG.js";import"../chunks-js/chunk.3U7QFP2Q.js";import"../chunks-js/chunk.LB764BBD.js";import{a as r}from"../chunks-js/chunk.XCXCHO25.js";import"../chunks-js/chunk.KRAWXAJA.js";import"../chunks-js/chunk.FT5UPVZS.js";import"../chunks-js/chunk.6C4LMRM7.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as i,e as l}from"../chunks-js/chunk.L3RZWW2F.js";import{m as t,p as m}from"../chunks-js/chunk.BF43NN75.js";t();m();var T={title:"UI Components/Email Field",component:"omni-email-field"},$={render:e=>i`
    <omni-email-field
      data-testid="test-email-field"
      label="${r(e.label)}"
      value="${e.value}"
      hint="${r(e.hint)}"
      error="${r(e.error)}"
      ?disabled="${e.disabled}"
      ?clearable="${e.clearable}"
      >${e.prefix?i`${`\r
`}${o(a("prefix",e.prefix))}`:l}
      ${e.clear?i`${`\r
`}${o(a("clear",e.clear))}`:l}${e.suffix?i`${`\r
`}${o(a("suffix",e.suffix))}`:l}${e.prefix||e.suffix||e.clear?`\r
`:l}</omni-email-field>
  `,frameworkSources:[{framework:"Vue",load:e=>n($.render(e),void 0,F=>F.replace(" disabled",' :disabled="true"').replace(" clearable",' :clearable="true"'))}],name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,clearable:!1,prefix:"",suffix:"",clear:""}},U=f("omni-email-field"),M=d("omni-email-field"),N=s("omni-email-field"),q=p("omni-email-field","johndoe@gmail.com"),z=u("omni-email-field","johndoe@gmail.com"),G=b("omni-email-field","johndoe@gmail.com"),J=c("omni-email-field"),K=x("omni-email-field"),O=S("omni-email-field","johndoe@gmail.com");export{z as Clearable,G as Custom_Clear_Slot,O as Disabled,N as Error_Label,M as Hint,$ as Interactive,U as Label,J as Prefix,K as Suffix,q as Value,T as default};
//# sourceMappingURL=EmailField.stories.js.map
