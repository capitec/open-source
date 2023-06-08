import"../chunks-js/chunk.UIUBHHQP.js";import{a as S,b as y,c as $,d as B,e as C,f as N,g as v,h as A,i as I}from"../chunks-js/chunk.JFSHXKK5.js";import"../chunks-js/chunk.QHXD4ILF.js";import"../chunks-js/chunk.55232CD4.js";import"../chunks-js/chunk.Y2FNDKPS.js";import{a as w}from"../chunks-js/chunk.JSH3M4FH.js";import{a as c,b as x}from"../chunks-js/chunk.XOIHXH3W.js";import{a as l}from"../chunks-js/chunk.XCXCHO25.js";import{b as u}from"../chunks-js/chunk.FVJIJQ42.js";import{b as s,c as p}from"../chunks-js/chunk.WPESAYH2.js";import"../chunks-js/chunk.TTUIP4EN.js";import{E as F,m as n}from"../chunks-js/chunk.BQ6JZBYB.js";import"../chunks-js/chunk.Z5LIJAXH.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.KSLF5GY7.js";import"../chunks-js/chunk.XQ6LOMNM.js";import"../chunks-js/chunk.DVHQDKY6.js";import{a as i}from"../chunks-js/chunk.SUFNDWVH.js";import"../chunks-js/chunk.QFUUHCSV.js";import"../chunks-js/chunk.6HAYHFHP.js";import"../chunks-js/chunk.LB764BBD.js";import"../chunks-js/chunk.KRAWXAJA.js";import"../chunks-js/chunk.RWAXFZOX.js";import"../chunks-js/chunk.QA3WYCV3.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as t,e as o}from"../chunks-js/chunk.L3RZWW2F.js";import{h as E,m as f,p as b}from"../chunks-js/chunk.BF43NN75.js";f();b();var h=E(w(),1);var Z={title:"UI Components/Number Field",component:"omni-number-field"},L={render:e=>t`
    <omni-number-field
      data-testid="test-number-field"
      label="${l(e.label)}"
      value="${e.value}"
      hint="${l(e.hint)}"
      error="${l(e.error)}"
      ?disabled="${e.disabled}"
      ?clearable="${e.clearable}"
      >${e.prefix?t`${`\r
`}${i(n("prefix",e.prefix))}`:o}
      ${e.clear?t`${`\r
`}${i(n("clear",e.clear))}`:o}${e.suffix?t`${`\r
`}${i(n("suffix",e.suffix))}`:o}${e.prefix||e.suffix||e.clear?`\r
`:o}</omni-number-field>
  `,frameworkSources:[{framework:"Vue",load:e=>F(L.render(e),void 0,r=>r.replace(" disabled",' :disabled="true"').replace(" clearable",' :clearable="true"'))}],name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,prefix:"",suffix:"",clear:""},play:async e=>{let r=p(e.canvasElement).getByTestId("test-number-field");r.value="";let d=h.fn();r.addEventListener("input",d);let m=r.shadowRoot.getElementById("inputField");c(m);let a="12345";await x.type(m,a,{pointerEventsCheck:0}),await s(()=>u(m).toHaveValue(parseInt(a)),{timeout:3e3}),await s(()=>u(d).toBeCalledTimes(a.length),{timeout:3e3})}},ee=S("omni-number-field"),re=y("omni-number-field"),te=$("omni-number-field"),oe=B("omni-number-field",123),ie=v("omni-number-field",123),le=A("omni-number-field",123),ne=C("omni-number-field"),me=N("omni-number-field"),ae=I("omni-number-field",123);export{ie as Clearable,le as Custom_Clear_Slot,ae as Disabled,te as Error_Label,re as Hint,L as Interactive,ee as Label,ne as Prefix,me as Suffix,oe as Value,Z as default};
//# sourceMappingURL=NumberField.stories.js.map
