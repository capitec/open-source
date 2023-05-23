import"../chunks-js/chunk.VY3ZOXG6.js";import"../chunks-js/chunk.WCB52SLW.js";import"../chunks-js/chunk.HKWFE27C.js";import"../chunks-js/chunk.YGXFZZKN.js";import"../chunks-js/chunk.ZR4UECQ6.js";import{a as w,b as L,c as E,d as g,e as B,f as C,g as A,h as P,i as T}from"../chunks-js/chunk.6KQOIOYE.js";import"../chunks-js/chunk.K2UMXYHA.js";import"../chunks-js/chunk.I3LVDBCB.js";import{a as I}from"../chunks-js/chunk.E3RY574V.js";import"../chunks-js/chunk.XGCBNSF2.js";import{a as M}from"../chunks-js/chunk.IRJIQSYL.js";import{a}from"../chunks-js/chunk.G3QHRCKP.js";import{a as h,b as f}from"../chunks-js/chunk.MHLMY33S.js";import{l as r}from"../chunks-js/chunk.G6V5HYSG.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.ZPV4YWBP.js";import{a as c}from"../chunks-js/chunk.6QCQBNRL.js";import{b as p,c as u}from"../chunks-js/chunk.N6OKW4B2.js";import{d as o}from"../chunks-js/chunk.W54IKPJD.js";import"../chunks-js/chunk.2TH7MEM4.js";import"../chunks-js/chunk.B6SUKNHE.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as n,d as l}from"../chunks-js/chunk.F6MIXR4E.js";import{h as H,m as b,p as y}from"../chunks-js/chunk.BF43NN75.js";b();y();var x=H(M(),1);var re={title:"UI Components/Pin Field",component:"omni-pin-field"},se={render:e=>n`
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
  `,name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,clearable:!1,prefix:"",suffix:"",clear:"",hide:"",show:"",maxLength:void 0},play:async e=>{var v,S,F;let t=u(e.canvasElement).getByTestId("test-pin-field");t.value="";let s=x.fn();t.addEventListener("input",s),t.addEventListener("click",s);let i=(v=t.shadowRoot)==null?void 0:v.getElementById("inputField");h(i);let m=(S=t.shadowRoot)==null?void 0:S.querySelector("slot[name=show]");await o(m).toBeTruthy(),await f.click(m,{pointerEventsCheck:0});let d=(F=t.shadowRoot)==null?void 0:F.querySelector("slot[name=hide]");await o(d).toBeTruthy(),await f.click(d,{pointerEventsCheck:0}),await f.type(i,"1234",{pointerEventsCheck:0});let $=1234;h(i),await p(()=>o(i).toHaveValue($),{timeout:3e3}),await p(()=>o(s).toBeCalledTimes($.toString().length+1),{timeout:3e3})}},me={render:e=>n`
    <omni-pin-field
      data-testid="test-pin-field"
      label="${c(e.label)}"
      value="${e.value}"
      max-length=${I(e.maxLength)}>
    </omni-pin-field>
  `,frameworkSources:[{framework:"React",load:e=>`import { OmniPinField } from "@capitec/omni-components-react/pin-field";

const App = () => <OmniPinField${e.label?` label='${e.label}'`:""}${e.value?` value='${e.value}'`:""}${e.maxLength?` max-length='${e.maxLength}'`:""}/>;`}],name:"Max Length",description:"Limit the character input length based on the value provided.",args:{label:"Max Length",maxLength:5},play:async e=>{var d;let t=u(e.canvasElement).getByTestId("test-pin-field");t.value="";let s=x.fn();t.addEventListener("input",s);let i=(d=t.shadowRoot)==null?void 0:d.getElementById("inputField");await f.type(i,"12345678910",{pointerEventsCheck:0});let m=12345;await p(()=>o(i).toHaveValue(m),{timeout:3e3}),await p(()=>o(i.value).toBe(String(m)),{timeout:3e3})}},de=w("omni-pin-field"),pe=L("omni-pin-field"),fe=E("omni-pin-field"),ce=g("omni-pin-field",1234),ue=A("omni-pin-field",1234),he=P("omni-pin-field",1234),xe=B("omni-pin-field"),$e=C("omni-pin-field"),ve=T("omni-pin-field",1234);export{ue as Clearable,he as Custom_Clear_Slot,ve as Disabled,fe as Error_Label,pe as Hint,se as Interactive,de as Label,me as Max_Length,xe as Prefix,$e as Suffix,ce as Value,re as default};
//# sourceMappingURL=PinField.stories.js.map
