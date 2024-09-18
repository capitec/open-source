import"../chunks-js/chunk.UHZUWBUK.js";import"../chunks-js/chunk.APNKRDWQ.js";import{a as f,b as s,c as d,d as b,e as c,f as p,g as u,h as x,i as S}from"../chunks-js/chunk.DQJY3TFV.js";import"../chunks-js/chunk.QQ4KC6E2.js";import"../chunks-js/chunk.PBJBFOZO.js";import{E as m,m as t}from"../chunks-js/chunk.J2JRUFHY.js";import"../chunks-js/chunk.VRVI2LVR.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.NLDNET67.js";import"../chunks-js/chunk.3ZNYNTRF.js";import"../chunks-js/chunk.YRSGKD7J.js";import"../chunks-js/chunk.6DDAVEXD.js";import{a as i}from"../chunks-js/chunk.2T6FOQVU.js";import"../chunks-js/chunk.BNDN7Y77.js";import"../chunks-js/chunk.3F3IIFA7.js";import{a as l}from"../chunks-js/chunk.W7VHYLAH.js";import"../chunks-js/chunk.BN6ZLWW4.js";import"../chunks-js/chunk.YTU7KEBB.js";import"../chunks-js/chunk.ZTHUBORR.js";import"../chunks-js/chunk.4PFNWG2J.js";import{d as o,g as r}from"../chunks-js/chunk.63YMDT6M.js";import{m as a,p as n}from"../chunks-js/chunk.BF43NN75.js";a();n();var y={render:e=>o`
    <omni-mobile-field
      data-testid="test-mobile-field"
      label="${l(e.label)}"
      value="${e.value}"
      hint="${l(e.hint)}"
      error="${l(e.error)}"
      ?country-code="${e.countryCode}"
      ?disabled="${e.disabled}"
      ?clearable="${e.clearable}"
      >${e.prefix?o`${`\r
`}${i(t("prefix",e.prefix))}`:r}
      ${e.clear?o`${`\r
`}${i(t("clear",e.clear))}`:r}${e.suffix?o`${`\r
`}${i(t("suffix",e.suffix))}`:r}${e.prefix||e.suffix||e.clear?`\r
`:r}</omni-mobile-field>
  `,frameworkSources:[{framework:"Vue",load:e=>m(y.render(e),void 0,$=>$.replace(" disabled",' :disabled="true"').replace(" clearable",' :clearable="true"'))}],name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,prefix:"",suffix:"",clear:"",countryCode:!0}},T=f("omni-mobile-field"),M=s("omni-mobile-field"),N=d("omni-mobile-field"),j=b("omni-mobile-field",123),q=u("omni-mobile-field",123),z=x("omni-mobile-field",123),G=c("omni-mobile-field"),J=p("omni-mobile-field"),K=S("omni-mobile-field",123);export{q as Clearable,z as Custom_Clear_Slot,K as Disabled,N as Error_Label,M as Hint,y as Interactive,T as Label,G as Prefix,J as Suffix,j as Value};
//# sourceMappingURL=MobileField.stories.js.map
