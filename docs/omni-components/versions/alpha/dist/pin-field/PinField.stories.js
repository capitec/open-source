import"../chunks-js/chunk.EAQVMCPW.js";import"../chunks-js/chunk.WCB52SLW.js";import"../chunks-js/chunk.HKWFE27C.js";import"../chunks-js/chunk.YGXFZZKN.js";import"../chunks-js/chunk.ZR4UECQ6.js";import{a as L,b,c as E,d as g,e as B,f as A,g as P,h as C}from"../chunks-js/chunk.YD3W5R6Q.js";import"../chunks-js/chunk.K2UMXYHA.js";import"../chunks-js/chunk.P5BVWJU5.js";import{a as T}from"../chunks-js/chunk.E3RY574V.js";import"../chunks-js/chunk.XGCBNSF2.js";import{a as H}from"../chunks-js/chunk.IRJIQSYL.js";import{a as p}from"../chunks-js/chunk.G3QHRCKP.js";import{a as u,b as m}from"../chunks-js/chunk.MHLMY33S.js";import{l as c}from"../chunks-js/chunk.BM33DA64.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.ZPV4YWBP.js";import{a as f}from"../chunks-js/chunk.PJH7M65U.js";import{b as s,c as h}from"../chunks-js/chunk.N6OKW4B2.js";import{d as o}from"../chunks-js/chunk.W54IKPJD.js";import"../chunks-js/chunk.2TH7MEM4.js";import"../chunks-js/chunk.B6SUKNHE.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as n,d}from"../chunks-js/chunk.F6MIXR4E.js";import{h as I,m as F,p as w}from"../chunks-js/chunk.BF43NN75.js";F();w();var x=I(H(),1);var ae={title:"UI Components/Pin Field",component:"omni-pin-field"},re={render:e=>n`
    <omni-pin-field
      data-testid="test-pin-field"
      label="${f(e.label)}"
      value="${e.value}"
      max-length=${e.maxLength}
      hint="${f(e.hint)}"
      error="${f(e.error)}"
      ?disabled="${e.disabled}"
      ?clearable="${e.clearable}">${e.prefix?n`${`\r
`}${p(c("prefix",e.prefix))}`:d}${e.suffix?n`${`\r
`}${p(c("suffix",e.suffix))}`:d}${e.hide?n`${`\r
`}${p(c("hide",e.hide))}`:d}${e.show?n`${`\r
`}${p(c("show",e.show))}`:d}</omni-pin-field>
  `,name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,clearable:!1,prefix:"",suffix:"",hide:"",show:"",maxLength:void 0},play:async e=>{var $,S,y;let t=h(e.canvasElement).getByTestId("test-pin-field");t.value="";let l=x.fn();t.addEventListener("input",l),t.addEventListener("click",l);let i=($=t.shadowRoot)==null?void 0:$.getElementById("inputField");u(i);let a=(S=t.shadowRoot)==null?void 0:S.querySelector("slot[name=show]");await o(a).toBeTruthy(),await m.click(a,{pointerEventsCheck:0});let r=(y=t.shadowRoot)==null?void 0:y.querySelector("slot[name=hide]");await o(r).toBeTruthy(),await m.click(r,{pointerEventsCheck:0}),await m.type(i,"1234",{pointerEventsCheck:0});let v=1234;u(i),await s(()=>o(i).toHaveValue(v),{timeout:3e3}),await s(()=>o(l).toBeCalledTimes(v.toString().length+1),{timeout:3e3})}},se={render:e=>n`
    <omni-pin-field
      data-testid="test-pin-field"
      label="${f(e.label)}"
      value="${e.value}"
      max-length=${T(e.maxLength)}>
    </omni-pin-field>
  `,frameworkSources:[{framework:"React",load:e=>`import { OmniPinField } from "@capitec/omni-components-react/pin-field";

const App = () => <OmniPinField${e.label?` label='${e.label}'`:""}${e.value?` value='${e.value}'`:""}${e.maxLength?` max-length='${e.maxLength}'`:""}/>;`}],name:"Max Length",description:"Limit the character input length based on the value provided.",args:{label:"Max Length",maxLength:5},play:async e=>{var r;let t=h(e.canvasElement).getByTestId("test-pin-field");t.value="";let l=x.fn();t.addEventListener("input",l);let i=(r=t.shadowRoot)==null?void 0:r.getElementById("inputField");await m.type(i,"12345678910",{pointerEventsCheck:0});let a=12345;await s(()=>o(i).toHaveValue(a),{timeout:3e3}),await s(()=>o(i.value).toBe(String(a)),{timeout:3e3})}},me=L("omni-pin-field"),de=b("omni-pin-field"),pe=E("omni-pin-field"),fe=g("omni-pin-field",1234),ce=P("omni-pin-field",1234),he=B("omni-pin-field"),ue=A("omni-pin-field"),xe=C("omni-pin-field",1234);export{ce as Clear,xe as Disabled,pe as Error_Label,de as Hint,re as Interactive,me as Label,se as Max_Length,he as Prefix,ue as Suffix,fe as Value,ae as default};
//# sourceMappingURL=PinField.stories.js.map
