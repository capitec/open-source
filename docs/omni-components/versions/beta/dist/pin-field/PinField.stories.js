import"../chunks-js/chunk.EAQVMCPW.js";import"../chunks-js/chunk.WCB52SLW.js";import"../chunks-js/chunk.HKWFE27C.js";import"../chunks-js/chunk.YGXFZZKN.js";import"../chunks-js/chunk.ZR4UECQ6.js";import{a as E,b as L,c as $,d as b,e as B,f as A,g as C,h as P}from"../chunks-js/chunk.NOUGGDW5.js";import"../chunks-js/chunk.K2UMXYHA.js";import"../chunks-js/chunk.P5BVWJU5.js";import{a as T}from"../chunks-js/chunk.E3RY574V.js";import"../chunks-js/chunk.XGCBNSF2.js";import{a as H}from"../chunks-js/chunk.IRJIQSYL.js";import{a as f}from"../chunks-js/chunk.PJH7M65U.js";import{a as p}from"../chunks-js/chunk.G3QHRCKP.js";import{a as u,b as d}from"../chunks-js/chunk.MHLMY33S.js";import{k as c}from"../chunks-js/chunk.C6CJZ2DD.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.5NFB2EUQ.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.ZPV4YWBP.js";import{b as s,c as h}from"../chunks-js/chunk.N6OKW4B2.js";import{d as o}from"../chunks-js/chunk.W54IKPJD.js";import"../chunks-js/chunk.2TH7MEM4.js";import"../chunks-js/chunk.B6SUKNHE.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as n,d as m}from"../chunks-js/chunk.F6MIXR4E.js";import{h as I,m as g,p as w}from"../chunks-js/chunk.BF43NN75.js";g();w();var x=I(H(),1);var re={title:"UI Components/Pin Field",component:"omni-pin-field"},ae={render:e=>n`
    <omni-pin-field
      data-testid="test-pin-field"
      label="${f(e.label)}"
      value="${e.value}"
      max-length=${e.maxLength}
      hint="${f(e.hint)}"
      error="${f(e.error)}"
      ?disabled="${e.disabled}"
      ?clearable="${e.clearable}">${e.prefix?n`${`\r
`}${p(c("prefix",e.prefix))}`:m}${e.suffix?n`${`\r
`}${p(c("suffix",e.suffix))}`:m}${e.hide?n`${`\r
`}${p(c("hide",e.hide))}`:m}${e.show?n`${`\r
`}${p(c("show",e.show))}`:m}</omni-pin-field>
  `,name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,clearable:!1,prefix:"",suffix:"",hide:"",show:"",maxLength:void 0},play:async e=>{var y,S,F;let t=h(e.canvasElement).getByTestId("test-pin-field");t.value="";let l=x.fn();t.addEventListener("input",l),t.addEventListener("click",l);let i=(y=t.shadowRoot)==null?void 0:y.getElementById("inputField");u(i);let r=(S=t.shadowRoot)==null?void 0:S.querySelector("slot[name=show]");await o(r).toBeTruthy(),await d.click(r,{pointerEventsCheck:0});let a=(F=t.shadowRoot)==null?void 0:F.querySelector("slot[name=hide]");await o(a).toBeTruthy(),await d.click(a,{pointerEventsCheck:0}),await d.type(i,"1234",{pointerEventsCheck:0});let v=1234;u(i),await s(()=>o(i).toHaveValue(v),{timeout:3e3}),await s(()=>o(l).toBeCalledTimes(v.toString().length+1),{timeout:3e3})}},se={render:e=>n`
    <omni-pin-field
      data-testid="test-pin-field"
      label="${f(e.label)}"
      value="${e.value}"
      max-length=${T(e.maxLength)}>
    </omni-pin-field>
  `,name:"Max Length",description:"Limit the character input length based on the value provided.",args:{label:"Max Length",maxLength:5},play:async e=>{var a;let t=h(e.canvasElement).getByTestId("test-pin-field");t.value="";let l=x.fn();t.addEventListener("input",l);let i=(a=t.shadowRoot)==null?void 0:a.getElementById("inputField");await d.type(i,"12345678910",{pointerEventsCheck:0});let r=12345;await s(()=>o(i).toHaveValue(r),{timeout:3e3}),await s(()=>o(i.value).toBe(String(r)),{timeout:3e3})}},de=E("omni-pin-field"),me=L("omni-pin-field"),pe=$("omni-pin-field"),fe=b("omni-pin-field",1234),ce=C("omni-pin-field",1234),he=B("omni-pin-field"),ue=A("omni-pin-field"),xe=P("omni-pin-field",1234);export{ce as Clear,xe as Disabled,pe as Error_Label,me as Hint,ae as Interactive,de as Label,se as Max_Length,he as Prefix,ue as Suffix,fe as Value,re as default};
//# sourceMappingURL=PinField.stories.js.map
