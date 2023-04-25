import"../chunks-js/chunk.B2Y7HXQI.js";import{a as y,b as T,c as S,d as B,e as b,f as v,g as $}from"../chunks-js/chunk.MICY5BMB.js";import"../chunks-js/chunk.K2UMXYHA.js";import"../chunks-js/chunk.WASXY5YJ.js";import"../chunks-js/chunk.E3RY574V.js";import{a as E}from"../chunks-js/chunk.IRJIQSYL.js";import{a as o}from"../chunks-js/chunk.PJH7M65U.js";import{a as l}from"../chunks-js/chunk.G3QHRCKP.js";import{a as c,b as F}from"../chunks-js/chunk.MHLMY33S.js";import{k as s}from"../chunks-js/chunk.6VUVFGIV.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.5NFB2EUQ.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.HA6SUF3B.js";import{c as u}from"../chunks-js/chunk.N6OKW4B2.js";import{d as a}from"../chunks-js/chunk.W54IKPJD.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as t,d as i}from"../chunks-js/chunk.F6MIXR4E.js";import{h,m,p}from"../chunks-js/chunk.BF43NN75.js";m();p();var A=h(E(),1);var Q={title:"UI Components/Text Field",component:"omni-text-field"},W={render:e=>t`
    <omni-text-field
      data-testid="test-text-field"
      label="${o(e.label)}"
      value="${e.value}"
      hint="${o(e.hint)}"
      error="${o(e.error)}"
      ?disabled="${e.disabled}"
      >${e.prefix?t`${`\r
`}${l(s("prefix",e.prefix))}`:i}${e.suffix?t`${`\r
`}${l(s("suffix",e.suffix))}`:i}${e.prefix||e.suffix?`\r
`:i}</omni-text-field>
  `,name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,prefix:"",suffix:""},play:async e=>{var x;let r=u(e.canvasElement).getByTestId("test-text-field");r.value="";let f=A.fn();r.addEventListener("input",f);let n=(x=r.shadowRoot)==null?void 0:x.getElementById("inputField");c(n),await F.type(n,"Value Update",{pointerEventsCheck:0});let d="Value Update";await a(n).toHaveValue(d),await a(f).toBeCalledTimes(d.length)}},X=y("omni-text-field"),Y=T("omni-text-field"),Z=S("omni-text-field"),ee=B("omni-text-field"),te=b("omni-text-field"),ie=v("omni-text-field"),oe=$("omni-text-field");export{oe as Disabled,Z as Error_Label,Y as Hint,W as Interactive,X as Label,te as Prefix,ie as Suffix,ee as Value,Q as default};
//# sourceMappingURL=TextField.stories.js.map
