import"../chunks-js/chunk.CSNR3XAQ.js";import"../chunks-js/chunk.WCB52SLW.js";import"../chunks-js/chunk.HKWFE27C.js";import"../chunks-js/chunk.YGXFZZKN.js";import"../chunks-js/chunk.ZR4UECQ6.js";import{a as L,b as E,c as g,d as B,e as C,f as A,g as P,h as T,i as I}from"../chunks-js/chunk.PTQ7XVKQ.js";import"../chunks-js/chunk.K2UMXYHA.js";import"../chunks-js/chunk.AMDN2Z2F.js";import{a as k}from"../chunks-js/chunk.E3RY574V.js";import"../chunks-js/chunk.XGCBNSF2.js";import{a as M}from"../chunks-js/chunk.IRJIQSYL.js";import"../chunks-js/chunk.LCIHREUY.js";import{a as h,b as f}from"../chunks-js/chunk.MHLMY33S.js";import{a as c}from"../chunks-js/chunk.6QCQBNRL.js";import{b as p,c as u}from"../chunks-js/chunk.N6OKW4B2.js";import{d as o}from"../chunks-js/chunk.W54IKPJD.js";import{E as y,m as r}from"../chunks-js/chunk.JVZL4EXU.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.H2SV3XAM.js";import{a}from"../chunks-js/chunk.32OT4JFD.js";import"../chunks-js/chunk.ZPV4YWBP.js";import"../chunks-js/chunk.2TH7MEM4.js";import"../chunks-js/chunk.B6SUKNHE.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as n,d as l}from"../chunks-js/chunk.F6MIXR4E.js";import{h as H,m as F,p as w}from"../chunks-js/chunk.BF43NN75.js";F();w();var x=H(M(),1);var me={title:"UI Components/Pin Field",component:"omni-pin-field"},V={render:e=>n`
    <omni-pin-field
      data-testid="test-pin-field"
      label="${c(e.label)}"
      value="${e.value}"
      max-length=${e.maxLength}
      hint="${c(e.hint)}"
      error="${c(e.error)}"
      ?disabled="${e.disabled}"
      ?clearable="${e.clearable}">${e.prefix?n`${`\r
`}${a(r("prefix",e.prefix))}`:l}
      ${e.clear?n`${`\r
`}${a(r("clear",e.clear))}`:l}${e.suffix?n`${`\r
`}${a(r("suffix",e.suffix))}`:l}${e.hide?n`${`\r
`}${a(r("hide",e.hide))}`:l}${e.show?n`${`\r
`}${a(r("show",e.show))}`:l}</omni-pin-field>
  `,frameworkSources:[{framework:"Vue",load:e=>y(V.render(e),void 0,t=>t.replace(" disabled",' :disabled="true"').replace(" clearable",' :clearable="true"'))}],name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,clearable:!1,prefix:"",suffix:"",clear:"",hide:"",show:"",maxLength:void 0},play:async e=>{var $,b,v;let t=u(e.canvasElement).getByTestId("test-pin-field");t.value="";let s=x.fn();t.addEventListener("input",s),t.addEventListener("click",s);let i=($=t.shadowRoot)==null?void 0:$.getElementById("inputField");h(i);let m=(b=t.shadowRoot)==null?void 0:b.querySelector("slot[name=show]");await o(m).toBeTruthy(),await f.click(m,{pointerEventsCheck:0});let d=(v=t.shadowRoot)==null?void 0:v.querySelector("slot[name=hide]");await o(d).toBeTruthy(),await f.click(d,{pointerEventsCheck:0}),await f.type(i,"1234",{pointerEventsCheck:0});let S=1234;h(i),await p(()=>o(i).toHaveValue(S),{timeout:3e3}),await p(()=>o(s).toBeCalledTimes(S.toString().length+1),{timeout:3e3})}},de={render:e=>n`
    <omni-pin-field
      data-testid="test-pin-field"
      label="${c(e.label)}"
      value="${e.value}"
      max-length=${k(e.maxLength)}>
    </omni-pin-field>
  `,frameworkSources:[{framework:"React",load:e=>`import { OmniPinField } from "@capitec/omni-components-react/pin-field";

const App = () => <OmniPinField${e.label?` label='${e.label}'`:""}${e.value?` value='${e.value}'`:""}${e.maxLength?` max-length='${e.maxLength}'`:""}/>;`}],name:"Max Length",description:"Limit the character input length based on the value provided.",args:{label:"Max Length",maxLength:5},play:async e=>{var d;let t=u(e.canvasElement).getByTestId("test-pin-field");t.value="";let s=x.fn();t.addEventListener("input",s);let i=(d=t.shadowRoot)==null?void 0:d.getElementById("inputField");await f.type(i,"12345678910",{pointerEventsCheck:0});let m=12345;await p(()=>o(i).toHaveValue(m),{timeout:3e3}),await p(()=>o(i.value).toBe(String(m)),{timeout:3e3})}},pe=L("omni-pin-field"),fe=E("omni-pin-field"),ce=g("omni-pin-field"),ue=B("omni-pin-field",1234),he=P("omni-pin-field",1234),xe=T("omni-pin-field",1234),Se=C("omni-pin-field"),$e=A("omni-pin-field"),be=I("omni-pin-field",1234);export{he as Clearable,xe as Custom_Clear_Slot,be as Disabled,ce as Error_Label,fe as Hint,V as Interactive,pe as Label,de as Max_Length,Se as Prefix,$e as Suffix,ue as Value,me as default};
//# sourceMappingURL=PinField.stories.js.map
