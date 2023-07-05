import"../chunks-js/chunk.R64JTXZB.js";import"../chunks-js/chunk.IKEO2J7X.js";import"../chunks-js/chunk.KCLYGUKE.js";import"../chunks-js/chunk.4DK445VM.js";import"../chunks-js/chunk.YZDFU56K.js";import{a as E,b as g,c as B,d as C,e as A,f as P,g as T,h as I,i as k}from"../chunks-js/chunk.IRA62FXI.js";import"../chunks-js/chunk.DZCGDWRW.js";import"../chunks-js/chunk.Y2FNDKPS.js";import{a as M}from"../chunks-js/chunk.JSH3M4FH.js";import{a as h,b as f}from"../chunks-js/chunk.XOIHXH3W.js";import{a as c}from"../chunks-js/chunk.XCXCHO25.js";import{b as o}from"../chunks-js/chunk.FVJIJQ42.js";import{b as p,c as u}from"../chunks-js/chunk.WPESAYH2.js";import"../chunks-js/chunk.TTUIP4EN.js";import{E as L,m as r}from"../chunks-js/chunk.TJTW5ASN.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.Z5LIJAXH.js";import"../chunks-js/chunk.VW2P7YAN.js";import"../chunks-js/chunk.MYG5FMLT.js";import"../chunks-js/chunk.2EDJFZZN.js";import{a}from"../chunks-js/chunk.N3FDHMD3.js";import"../chunks-js/chunk.YX3UUKJ3.js";import"../chunks-js/chunk.XUUOUKOL.js";import{a as y}from"../chunks-js/chunk.LB764BBD.js";import"../chunks-js/chunk.DGWR2I27.js";import"../chunks-js/chunk.KRAWXAJA.js";import"../chunks-js/chunk.LUCH4Y6K.js";import"../chunks-js/chunk.PNTHLTQK.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as n,e as l}from"../chunks-js/chunk.L3RZWW2F.js";import{h as H,m as F,p as w}from"../chunks-js/chunk.BF43NN75.js";F();w();var x=H(M(),1);var me={title:"UI Components/Pin Field",component:"omni-pin-field"},V={render:e=>n`
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
  `,frameworkSources:[{framework:"Vue",load:e=>L(V.render(e),void 0,t=>t.replace(" disabled",' :disabled="true"').replace(" clearable",' :clearable="true"'))}],name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,clearable:!1,prefix:"",suffix:"",clear:"",hide:"",show:"",maxLength:void 0},play:async e=>{var $,b,v;let t=u(e.canvasElement).getByTestId("test-pin-field");t.value="";let s=x.fn();t.addEventListener("input",s),t.addEventListener("click",s);let i=($=t.shadowRoot)==null?void 0:$.getElementById("inputField");h(i);let m=(b=t.shadowRoot)==null?void 0:b.querySelector("slot[name=show]");await o(m).toBeTruthy(),await f.click(m,{pointerEventsCheck:0});let d=(v=t.shadowRoot)==null?void 0:v.querySelector("slot[name=hide]");await o(d).toBeTruthy(),await f.click(d,{pointerEventsCheck:0}),await f.type(i,"1234",{pointerEventsCheck:0});let S="1234";h(i),await p(()=>o(i).toHaveValue(S),{timeout:3e3}),await p(()=>o(s).toBeCalledTimes(S.toString().length+1),{timeout:3e3})}},de={render:e=>n`
    <omni-pin-field
      data-testid="test-pin-field"
      label="${c(e.label)}"
      value="${e.value}"
      max-length=${y(e.maxLength)}>
    </omni-pin-field>
  `,frameworkSources:[{framework:"React",load:e=>`import { OmniPinField } from "@capitec/omni-components-react/pin-field";

const App = () => <OmniPinField${e.label?` label='${e.label}'`:""}${e.value?` value='${e.value}'`:""}${e.maxLength?` max-length='${e.maxLength}'`:""}/>;`}],name:"Max Length",description:"Limit the character input length based on the value provided.",args:{label:"Max Length",maxLength:5},play:async e=>{var d;let t=u(e.canvasElement).getByTestId("test-pin-field");t.value="";let s=x.fn();t.addEventListener("input",s);let i=(d=t.shadowRoot)==null?void 0:d.getElementById("inputField");await f.type(i,"12345678910",{pointerEventsCheck:0});let m="12345";await p(()=>o(i).toHaveValue(m),{timeout:3e3}),await p(()=>o(i.value).toBe(String(m)),{timeout:3e3})}},pe=E("omni-pin-field"),fe=g("omni-pin-field"),ce=B("omni-pin-field"),ue=C("omni-pin-field","1234"),he=T("omni-pin-field","1234"),xe=I("omni-pin-field","1234"),Se=A("omni-pin-field"),$e=P("omni-pin-field"),be=k("omni-pin-field","1234");export{he as Clearable,xe as Custom_Clear_Slot,be as Disabled,ce as Error_Label,fe as Hint,V as Interactive,pe as Label,de as Max_Length,Se as Prefix,$e as Suffix,ue as Value,me as default};
//# sourceMappingURL=PinField.stories.js.map
