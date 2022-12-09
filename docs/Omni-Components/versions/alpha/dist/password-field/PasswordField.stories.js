import"../chunks-js/chunk.75QOKIJF.js";import"../chunks-js/chunk.WX72FDFV.js";import"../chunks-js/chunk.VD46RQZR.js";import"../chunks-js/chunk.2ELENH6D.js";import"../chunks-js/chunk.JHHRBYC4.js";import"../chunks-js/chunk.THZL7OFV.js";import"../chunks-js/chunk.DPILG6RJ.js";import{a as y,b as x,c as F,d as E,e as $,f as b,g as v}from"../chunks-js/chunk.XUTGOUJO.js";import"../chunks-js/chunk.PDCH2KYO.js";import{b as p,c as C}from"../chunks-js/chunk.LME64W74.js";import{k as l}from"../chunks-js/chunk.G4V22OAM.js";import"../chunks-js/chunk.SPIAQSDI.js";import{a}from"../chunks-js/chunk.SUEZUCRO.js";import{a as n}from"../chunks-js/chunk.O6CDAD4G.js";import{b as c,c as f}from"../chunks-js/chunk.QC5ZUB6O.js";import{d as t}from"../chunks-js/chunk.YQLTAQFI.js";import"../chunks-js/chunk.LPEZ6TWE.js";import"../chunks-js/chunk.7HCHYC7E.js";import"../chunks-js/chunk.XLVYYAUR.js";import"../chunks-js/chunk.H227IO2J.js";import"../chunks-js/chunk.CHYIO324.js";import{c as o,e as r}from"../chunks-js/chunk.CDDA2I3H.js";import{h as g,l as h,o as S}from"../chunks-js/chunk.2ZZQBHAA.js";h();S();var B=g(C(),1);var Y={title:"UI Components/Password Field",component:"omni-password-field"},Z={render:e=>o`
    <omni-password-field
      data-testid="test-password-field"
      label="${n(e.label)}"
      .value="${e.value}"
      .data="${e.data}"
      hint="${n(e.hint)}"
      error="${n(e.error)}"
      ?disabled="${e.disabled}">
      ${e.prefix?o`${`\r
`}${a(l("prefix",e.prefix))}`:r}
      ${e.suffix?o`${`\r
`}${a(l("suffix",e.suffix))}`:r}
      ${e.hide?o`${`\r
`}${a(l("hide",e.hide))}`:r}
      ${e.show?o`${`\r
`}${a(l("show",e.show))}`:r}</omni-password-field
    >
  `,name:"Interactive",args:{label:"Label",value:"",data:{},hint:"",error:"",disabled:!1,prefix:"",suffix:"",hide:"",show:""},play:async e=>{let s=f(e.canvasElement).getByTestId("test-password-field"),i=B.fn();s.addEventListener("input",i),s.addEventListener("click",i);let d=s.shadowRoot.getElementById("inputField"),m=s.shadowRoot.querySelector("slot[name=show]");await t(m).toBeTruthy(),await p.click(m,{pointerEventsCheck:0});let w=s.shadowRoot.querySelector("slot[name=hide]");await t(w).toBeTruthy(),await p.click(w,{pointerEventsCheck:0}),await p.type(d,"Value Update",{pointerEventsCheck:0});let u="Value Update";navigator.userAgent==="Test Runner"?console.log("CICD Test - Not Visual"):(await c(()=>t(d).toHaveValue(u),{timeout:3e3}),await c(()=>t(i).toBeCalledTimes(u.length+1),{timeout:3e3}))}},ee=y("omni-password-field"),oe=x("omni-password-field"),te=F("omni-password-field"),se=E("omni-password-field"),ie=$("omni-password-field"),re=b("omni-password-field"),ae=v("omni-password-field"),ne={render:e=>o`
    <omni-password-field data-testid="test-password-field" label="${n(e.label)}" ?disabled="${e.disabled}">
      <omni-lock-open-icon slot="show"></omni-lock-open-icon>
      <omni-lock-closed-icon slot="hide"></omni-lock-closed-icon>
    </omni-password-field>
  `,name:"Custom Icon Slot",args:{label:"Custom Icon Slot"},play:async e=>{let i=f(e.canvasElement).getByTestId("test-password-field").shadowRoot.querySelector("slot[name=show]");await t(i).toBeTruthy();let d=i.assignedElements().find(m=>m.tagName.toLocaleLowerCase()==="omni-lock-open-icon");await t(d).toBeTruthy()}};export{ne as Custom_Icon_Slot,ae as Disabled,te as Error_Label,oe as Hint,Z as Interactive,ee as Label,ie as Prefix,re as Suffix,se as Value,Y as default};
//# sourceMappingURL=PasswordField.stories.js.map
