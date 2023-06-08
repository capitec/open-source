import"../chunks-js/chunk.3SKAMJVS.js";import{a as S,b as T,c as y,d as $,e as B,f as C,g as v,h as A,i as h}from"../chunks-js/chunk.JFSHXKK5.js";import"../chunks-js/chunk.QHXD4ILF.js";import"../chunks-js/chunk.55232CD4.js";import"../chunks-js/chunk.Y2FNDKPS.js";import{a as L}from"../chunks-js/chunk.JSH3M4FH.js";import{a as u,b}from"../chunks-js/chunk.XOIHXH3W.js";import{a as l}from"../chunks-js/chunk.XCXCHO25.js";import{b as s}from"../chunks-js/chunk.FVJIJQ42.js";import{c}from"../chunks-js/chunk.WPESAYH2.js";import"../chunks-js/chunk.TTUIP4EN.js";import{E as F,m as a}from"../chunks-js/chunk.BQ6JZBYB.js";import"../chunks-js/chunk.Z5LIJAXH.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.KSLF5GY7.js";import"../chunks-js/chunk.XQ6LOMNM.js";import"../chunks-js/chunk.DVHQDKY6.js";import{a as i}from"../chunks-js/chunk.SUFNDWVH.js";import"../chunks-js/chunk.QFUUHCSV.js";import"../chunks-js/chunk.6HAYHFHP.js";import"../chunks-js/chunk.LB764BBD.js";import"../chunks-js/chunk.KRAWXAJA.js";import"../chunks-js/chunk.RWAXFZOX.js";import"../chunks-js/chunk.QA3WYCV3.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as r,e as o}from"../chunks-js/chunk.L3RZWW2F.js";import{h as I,m as x,p}from"../chunks-js/chunk.BF43NN75.js";x();p();var E=I(L(),1);var Z={title:"UI Components/Text Field",component:"omni-text-field"},w={render:e=>r`
    <omni-text-field
      data-testid="test-text-field"
      label="${l(e.label)}"
      value="${e.value}"
      hint="${l(e.hint)}"
      error="${l(e.error)}"
      ?disabled="${e.disabled}"
      ?clearable="${e.clearable}"
      >${e.prefix?r`${`\r
`}${i(a("prefix",e.prefix))}`:o}
      ${e.clear?r`${`\r
`}${i(a("clear",e.clear))}`:o}${e.suffix?r`${`\r
`}${i(a("suffix",e.suffix))}`:o}${e.prefix||e.suffix||e.clear?`\r
`:o}</omni-text-field>
  `,frameworkSources:[{framework:"Vue",load:e=>F(w.render(e),void 0,t=>t.replace(" disabled",' :disabled="true"').replace(" clearable",' :clearable="true"'))}],name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,clearable:!1,prefix:"",suffix:"",clear:""},play:async e=>{var m;let t=c(e.canvasElement).getByTestId("test-text-field");t.value="";let d=E.fn();t.addEventListener("input",d);let n=(m=t.shadowRoot)==null?void 0:m.getElementById("inputField");u(n),await b.type(n,"Value Update",{pointerEventsCheck:0});let f="Value Update";await s(n).toHaveValue(f),await s(d).toBeCalledTimes(f.length)}},ee=S("omni-text-field"),te=T("omni-text-field"),re=y("omni-text-field"),oe=$("omni-text-field"),ie=v("omni-text-field"),le=A("omni-text-field"),ae=B("omni-text-field"),ne=C("omni-text-field"),se=h("omni-text-field");export{ie as Clearable,le as Custom_Clear_Slot,se as Disabled,re as Error_Label,te as Hint,w as Interactive,ee as Label,ae as Prefix,ne as Suffix,oe as Value,Z as default};
//# sourceMappingURL=TextField.stories.js.map
