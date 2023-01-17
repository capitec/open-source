import"../chunks-js/chunk.5MOUS2KK.js";import"../chunks-js/chunk.TCQWJ43J.js";import"../chunks-js/chunk.ZY73ORAC.js";import"../chunks-js/chunk.KT544VBC.js";import"../chunks-js/chunk.ONOPKIWB.js";import"../chunks-js/chunk.MCIDFWAY.js";import"../chunks-js/chunk.2UZOXCV4.js";import{a as w,b as y,c as F,d as $,e as v,f as E,g as B}from"../chunks-js/chunk.YRCIB657.js";import"../chunks-js/chunk.BP2KI4CQ.js";import{k as l}from"../chunks-js/chunk.ZOV7Q3GR.js";import"../chunks-js/chunk.AWLGTUIY.js";import"../chunks-js/chunk.US2AYN3N.js";import"../chunks-js/chunk.MPJVWYSG.js";import{a as n}from"../chunks-js/chunk.3FTDPY75.js";import"../chunks-js/chunk.VOM777LA.js";import{b as s,c as g}from"../chunks-js/chunk.LME64W74.js";import{a}from"../chunks-js/chunk.R4IMIBZU.js";import{b as m,c as S}from"../chunks-js/chunk.QC5ZUB6O.js";import{d as r}from"../chunks-js/chunk.YQLTAQFI.js";import"../chunks-js/chunk.X74GW3ZD.js";import"../chunks-js/chunk.XMM72FEY.js";import"../chunks-js/chunk.ZO5UBYOG.js";import"../chunks-js/chunk.CHYIO324.js";import{b as t,d as o}from"../chunks-js/chunk.3GEUDTAZ.js";import{h as b,l as u,o as x}from"../chunks-js/chunk.2ZZQBHAA.js";u();x();var A=b(g(),1);var Y={title:"UI Components/Pin Field",component:"omni-pin-field"},Z={render:e=>t`
    <omni-pin-field
      data-testid="test-pin-field"
      label="${a(e.label)}"
      value="${e.value}"
      hint="${a(e.hint)}"
      error="${a(e.error)}"
      ?disabled="${e.disabled}">
      ${e.prefix?t`${`\r
`}${n(l("prefix",e.prefix))}`:o}
      ${e.suffix?t`${`\r
`}${n(l("suffix",e.suffix))}`:o}
      ${e.hide?t`${`\r
`}${n(l("hide",e.hide))}`:o}
      ${e.show?t`${`\r
`}${n(l("show",e.show))}`:o}</omni-pin-field
    >
  `,name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,prefix:"",suffix:"",hide:"",show:""},play:async e=>{let i=S(e.canvasElement).getByTestId("test-pin-field"),d=A.fn();i.addEventListener("input",d),i.addEventListener("click",d);let p=i.shadowRoot.getElementById("inputField"),f=i.shadowRoot.querySelector("slot[name=hide]");await r(f).toBeTruthy(),await s.click(f,{pointerEventsCheck:0});let c=i.shadowRoot.querySelector("slot[name=show]");await r(c).toBeTruthy(),await s.click(c,{pointerEventsCheck:0}),await s.type(p,"1234",{pointerEventsCheck:0});let h=1234;navigator.userAgent==="Test Runner"?console.log("CICD Test - Not Visual"):(await m(()=>r(p).toHaveValue(h),{timeout:3e3}),await m(()=>r(d).toBeCalledTimes(h.toString().length+1),{timeout:3e3}))}},ee=w("omni-pin-field"),te=y("omni-pin-field"),ie=F("omni-pin-field"),oe=$("omni-pin-field"),ne=v("omni-pin-field"),re=E("omni-pin-field"),le=B("omni-pin-field");export{le as Disabled,ie as Error_Label,te as Hint,Z as Interactive,ee as Label,ne as Prefix,re as Suffix,oe as Value,Y as default};
//# sourceMappingURL=PinField.stories.js.map
