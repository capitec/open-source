import"../chunks-js/chunk.BQW4AB5B.js";import{a as y,b as S,c as g,d as h,e as v,f as B,g as b}from"../chunks-js/chunk.MICY5BMB.js";import"../chunks-js/chunk.K2UMXYHA.js";import"../chunks-js/chunk.SVECC7PQ.js";import"../chunks-js/chunk.E3RY574V.js";import{a as C}from"../chunks-js/chunk.IRJIQSYL.js";import{a as o}from"../chunks-js/chunk.PJH7M65U.js";import{a as r}from"../chunks-js/chunk.G3QHRCKP.js";import{a as E,b as F}from"../chunks-js/chunk.MHLMY33S.js";import{k as n}from"../chunks-js/chunk.6VUVFGIV.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.5NFB2EUQ.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.CFGXHLKC.js";import{b as c,c as x}from"../chunks-js/chunk.N6OKW4B2.js";import{d as m}from"../chunks-js/chunk.W54IKPJD.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as i,d as t}from"../chunks-js/chunk.F6MIXR4E.js";import{h as A,m as p,p as u}from"../chunks-js/chunk.BF43NN75.js";p();u();var $=A(C(),1);var W={title:"UI Components/Email Field",component:"omni-email-field"},X={render:e=>i`
    <omni-email-field
      data-testid="test-email-field"
      label="${o(e.label)}"
      value="${e.value}"
      hint="${o(e.hint)}"
      error="${o(e.error)}"
      ?disabled="${e.disabled}"
      >${e.prefix?i`${`\r
`}${r(n("prefix",e.prefix))}`:t}${e.suffix?i`${`\r
`}${r(n("suffix",e.suffix))}`:t}${e.prefix||e.suffix?`\r
`:t}</omni-email-field>
  `,name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,prefix:"",suffix:""},play:async e=>{var d;let l=x(e.canvasElement).getByTestId("test-email-field");l.value="";let s=$.fn();l.addEventListener("input",s);let a=(d=l.shadowRoot)==null?void 0:d.getElementById("inputField");E(a),await F.type(a,"johndoe@gmail.com",{pointerEventsCheck:0});let f="johndoe@gmail.com";navigator.userAgent==="Test Runner"?console.log("CICD Test - Not Visual"):(await c(()=>m(a).toHaveValue(f),{timeout:3e3}),await m(s).toBeCalledTimes(f.length))}},Y=y("omni-email-field"),Z=S("omni-email-field"),ee=g("omni-email-field"),ie=h("omni-email-field","johndoe@gmail.com"),te=v("omni-email-field"),oe=B("omni-email-field"),le=b("omni-email-field","johndoe@gmail.com");export{le as Disabled,ee as Error_Label,Z as Hint,X as Interactive,Y as Label,te as Prefix,oe as Suffix,ie as Value,W as default};
//# sourceMappingURL=EmailField.stories.js.map
