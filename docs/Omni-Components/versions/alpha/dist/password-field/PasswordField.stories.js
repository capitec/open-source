import"../chunks-js/chunk.X2J7D3BW.js";import"../chunks-js/chunk.KT544VBC.js";import"../chunks-js/chunk.ONOPKIWB.js";import"../chunks-js/chunk.TCQWJ43J.js";import"../chunks-js/chunk.ZY73ORAC.js";import"../chunks-js/chunk.ZPUNSNI6.js";import"../chunks-js/chunk.WCJA2MWU.js";import{a as F,b as E,c as $,d as g,e as B,f as b,g as v,h as A}from"../chunks-js/chunk.6O544RSM.js";import"../chunks-js/chunk.BP2KI4CQ.js";import{b as p,c as P}from"../chunks-js/chunk.LME64W74.js";import{j as l}from"../chunks-js/chunk.IK4T76RY.js";import"../chunks-js/chunk.63SH7AJG.js";import{a as n}from"../chunks-js/chunk.SNOJQC4W.js";import{a}from"../chunks-js/chunk.R4IMIBZU.js";import{b as c,c as f}from"../chunks-js/chunk.QC5ZUB6O.js";import{d as t}from"../chunks-js/chunk.YQLTAQFI.js";import"../chunks-js/chunk.X74GW3ZD.js";import"../chunks-js/chunk.6TMBBBK2.js";import"../chunks-js/chunk.WVW5AE5A.js";import"../chunks-js/chunk.CHYIO324.js";import"../chunks-js/chunk.2UFE7DL7.js";import{b as o,d as r}from"../chunks-js/chunk.3GEUDTAZ.js";import{a as u,b as y,h as T,l as S,o as x}from"../chunks-js/chunk.2ZZQBHAA.js";S();x();var C=T(P(),1);var oe={title:"UI Components/Password Field",component:"omni-password-field",argTypes:y(u({},F),{hide:{control:"text"},show:{control:"text"}})},te={render:e=>o`
    <omni-password-field
      data-testid="test-password-field"
      label="${a(e.label)}"
      .value="${e.value}"
      .data="${e.data}"
      hint="${a(e.hint)}"
      error="${a(e.error)}"
      ?disabled="${e.disabled}">
      ${e.prefix?o`${`\r
`}${n(l("prefix",e.prefix))}`:r}
      ${e.suffix?o`${`\r
`}${n(l("suffix",e.suffix))}`:r}
      ${e.hide?o`${`\r
`}${n(l("hide",e.hide))}`:r}
      ${e.show?o`${`\r
`}${n(l("show",e.show))}`:r}</omni-password-field
    >
  `,name:"Interactive",args:{label:"Label",value:"",data:{},hint:"",error:"",disabled:!1,prefix:"",suffix:"",hide:"",show:""},play:async e=>{let s=f(e.canvasElement).getByTestId("test-password-field"),i=C.fn();s.addEventListener("input",i),s.addEventListener("click",i);let d=s.shadowRoot.getElementById("inputField"),m=s.shadowRoot.querySelector("slot[name=show]");await t(m).toBeTruthy(),await p.click(m,{pointerEventsCheck:0});let w=s.shadowRoot.querySelector("slot[name=hide]");await t(w).toBeTruthy(),await p.click(w,{pointerEventsCheck:0}),await p.type(d,"Value Update",{pointerEventsCheck:0});let h="Value Update";navigator.userAgent==="Test Runner"?console.log("CICD Test - Not Visual"):(await c(()=>t(d).toHaveValue(h),{timeout:3e3}),await c(()=>t(i).toBeCalledTimes(h.length+1),{timeout:3e3}))}},se=E("omni-password-field"),ie=$("omni-password-field"),re=g("omni-password-field"),ne=B("omni-password-field"),ae=b("omni-password-field"),le=v("omni-password-field"),de=A("omni-password-field"),me={render:e=>o`
    <omni-password-field data-testid="test-password-field" label="${a(e.label)}" ?disabled="${e.disabled}">
      <omni-lock-open-icon slot="show"></omni-lock-open-icon>
      <omni-lock-closed-icon slot="hide"></omni-lock-closed-icon>
    </omni-password-field>
  `,name:"Custom Icon Slot",args:{label:"Custom Icon Slot"},play:async e=>{let i=f(e.canvasElement).getByTestId("test-password-field").shadowRoot.querySelector("slot[name=show]");await t(i).toBeTruthy();let d=i.assignedElements().find(m=>m.tagName.toLocaleLowerCase()==="omni-lock-open-icon");await t(d).toBeTruthy()}};export{me as Custom_Icon_Slot,de as Disabled,re as Error_Label,ie as Hint,te as Interactive,se as Label,ae as Prefix,le as Suffix,ne as Value,oe as default};
//# sourceMappingURL=PasswordField.stories.js.map
