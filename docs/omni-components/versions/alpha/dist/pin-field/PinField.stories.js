import"../chunks-js/chunk.4ZLR7QVG.js";import"../chunks-js/chunk.WCB52SLW.js";import"../chunks-js/chunk.HKWFE27C.js";import"../chunks-js/chunk.YGXFZZKN.js";import"../chunks-js/chunk.ZR4UECQ6.js";import{a as F,b as L,c as $,d as b,e as B,f as A,g as P}from"../chunks-js/chunk.ASCPO2NC.js";import"../chunks-js/chunk.K2UMXYHA.js";import"../chunks-js/chunk.WASXY5YJ.js";import{a as T}from"../chunks-js/chunk.E3RY574V.js";import{a as I}from"../chunks-js/chunk.IRJIQSYL.js";import{a as f}from"../chunks-js/chunk.PJH7M65U.js";import{a as p}from"../chunks-js/chunk.G3QHRCKP.js";import{a as u,b as d}from"../chunks-js/chunk.MHLMY33S.js";import{l as c}from"../chunks-js/chunk.Q7LXY37U.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.CFGXHLKC.js";import{b as s,c as h}from"../chunks-js/chunk.N6OKW4B2.js";import{d as o}from"../chunks-js/chunk.W54IKPJD.js";import"../chunks-js/chunk.2TH7MEM4.js";import"../chunks-js/chunk.B6SUKNHE.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as n,d as m}from"../chunks-js/chunk.F6MIXR4E.js";import{h as C,m as w,p as E}from"../chunks-js/chunk.BF43NN75.js";w();E();var x=C(I(),1);var re={title:"UI Components/Pin Field",component:"omni-pin-field"},le={render:e=>n`
    <omni-pin-field
      data-testid="test-pin-field"
      label="${f(e.label)}"
      value="${e.value}"
      max-length=${e.maxLength}
      hint="${f(e.hint)}"
      error="${f(e.error)}"
      ?disabled="${e.disabled}">${e.prefix?n`${`\r
`}${p(c("prefix",e.prefix))}`:m}${e.suffix?n`${`\r
`}${p(c("suffix",e.suffix))}`:m}${e.hide?n`${`\r
`}${p(c("hide",e.hide))}`:m}${e.show?n`${`\r
`}${p(c("show",e.show))}`:m}</omni-pin-field>
  `,name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,prefix:"",suffix:"",hide:"",show:"",maxLength:void 0},play:async e=>{var y,S,g;let t=h(e.canvasElement).getByTestId("test-pin-field");t.value="";let r=x.fn();t.addEventListener("input",r),t.addEventListener("click",r);let i=(y=t.shadowRoot)==null?void 0:y.getElementById("inputField");u(i);let l=(S=t.shadowRoot)==null?void 0:S.querySelector("slot[name=show]");await o(l).toBeTruthy(),await d.click(l,{pointerEventsCheck:0});let a=(g=t.shadowRoot)==null?void 0:g.querySelector("slot[name=hide]");await o(a).toBeTruthy(),await d.click(a,{pointerEventsCheck:0}),await d.type(i,"1234",{pointerEventsCheck:0});let v=1234;u(i),await s(()=>o(i).toHaveValue(v),{timeout:3e3}),await s(()=>o(r).toBeCalledTimes(v.toString().length+1),{timeout:3e3})}},ae={render:e=>n`
    <omni-pin-field
      data-testid="test-pin-field"
      label="${f(e.label)}"
      value="${e.value}"
      max-length=${T(e.maxLength)}>
    </omni-pin-field>
  `,name:"Max Length",description:"Limit the character input length based on the value provided.",args:{label:"Max Length",maxLength:5},play:async e=>{var a;let t=h(e.canvasElement).getByTestId("test-pin-field");t.value="";let r=x.fn();t.addEventListener("input",r);let i=(a=t.shadowRoot)==null?void 0:a.getElementById("inputField");await d.type(i,"12345678910",{pointerEventsCheck:0});let l=12345;await s(()=>o(i).toHaveValue(l),{timeout:3e3}),await s(()=>o(i.value).toBe(String(l)),{timeout:3e3})}},se=F("omni-pin-field"),de=L("omni-pin-field"),me=$("omni-pin-field"),pe=b("omni-pin-field",1234),fe=B("omni-pin-field"),ce=A("omni-pin-field"),he=P("omni-pin-field",1234);export{he as Disabled,me as Error_Label,de as Hint,le as Interactive,se as Label,ae as Max_Length,fe as Prefix,ce as Suffix,pe as Value,re as default};
//# sourceMappingURL=PinField.stories.js.map
