import"../chunks-js/chunk.GXFVGIVS.js";import"../chunks-js/chunk.RLXELPAR.js";import"../chunks-js/chunk.ZY73ORAC.js";import"../chunks-js/chunk.EFKJ5U7K.js";import"../chunks-js/chunk.UABK3ZJL.js";import"../chunks-js/chunk.MCIDFWAY.js";import"../chunks-js/chunk.ICQCZ2QQ.js";import{a as S,b as x,c as F,d as g,e as E,f as $,g as b}from"../chunks-js/chunk.BLY5CARE.js";import"../chunks-js/chunk.7KQADVV4.js";import{k as a}from"../chunks-js/chunk.K3YYK5GB.js";import"../chunks-js/chunk.D6UL6COZ.js";import"../chunks-js/chunk.BMVIQMEU.js";import"../chunks-js/chunk.MPJVWYSG.js";import{a as n}from"../chunks-js/chunk.3FTDPY75.js";import"../chunks-js/chunk.VOM777LA.js";import{b as p,c as C}from"../chunks-js/chunk.LME64W74.js";import{a as l}from"../chunks-js/chunk.R4IMIBZU.js";import{b as c,c as f}from"../chunks-js/chunk.QC5ZUB6O.js";import{d as t}from"../chunks-js/chunk.YQLTAQFI.js";import"../chunks-js/chunk.X74GW3ZD.js";import"../chunks-js/chunk.XMM72FEY.js";import"../chunks-js/chunk.ZO5UBYOG.js";import"../chunks-js/chunk.CHYIO324.js";import{b as o,d as r}from"../chunks-js/chunk.3GEUDTAZ.js";import{h as B,l as u,o as y}from"../chunks-js/chunk.2ZZQBHAA.js";u();y();var v=B(C(),1);var Y={title:"UI Components/Password Field",component:"omni-password-field"},Z={render:e=>o`
    <omni-password-field
      data-testid="test-password-field"
      label="${l(e.label)}"
      value="${e.value}"
      hint="${l(e.hint)}"
      error="${l(e.error)}"
      ?disabled="${e.disabled}">${e.prefix?o`${`\r
`}${n(a("prefix",e.prefix))}`:r}${e.suffix?o`${`\r
`}${n(a("suffix",e.suffix))}`:r}${e.hide?o`${`\r
`}${n(a("hide",e.hide))}`:r}${e.show?o`${`\r
`}${n(a("show",e.show))}`:r}</omni-password-field>
  `,name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,prefix:"",suffix:"",hide:"",show:""},play:async e=>{let s=f(e.canvasElement).getByTestId("test-password-field"),i=v.fn();s.addEventListener("input",i),s.addEventListener("click",i);let d=s.shadowRoot.getElementById("inputField"),m=s.shadowRoot.querySelector("slot[name=show]");await t(m).toBeTruthy(),await p.click(m,{pointerEventsCheck:0});let w=s.shadowRoot.querySelector("slot[name=hide]");await t(w).toBeTruthy(),await p.click(w,{pointerEventsCheck:0}),await p.type(d,"Value Update",{pointerEventsCheck:0});let h="Value Update";navigator.userAgent==="Test Runner"?console.log("CICD Test - Not Visual"):(await c(()=>t(d).toHaveValue(h),{timeout:3e3}),await c(()=>t(i).toBeCalledTimes(h.length+1),{timeout:3e3}))}},ee=S("omni-password-field"),oe=x("omni-password-field"),te=F("omni-password-field"),se=g("omni-password-field"),ie=E("omni-password-field"),re=$("omni-password-field"),ne=b("omni-password-field"),le={render:e=>o`
    <omni-password-field data-testid="test-password-field" label="${l(e.label)}" ?disabled="${e.disabled}">
      <omni-lock-open-icon style="fill: orange;" slot="show"></omni-lock-open-icon>
      <omni-lock-closed-icon style="fill: lightgreen;" slot="hide"></omni-lock-closed-icon>
    </omni-password-field>
  `,name:"Custom Icon Slot",description:"Set html content to display as the visibility indicators of the field.",args:{label:"Custom Icon Slot"},play:async e=>{let i=f(e.canvasElement).getByTestId("test-password-field").shadowRoot.querySelector("slot[name=show]");await t(i).toBeTruthy();let d=i.assignedElements().find(m=>m.tagName.toLocaleLowerCase()==="omni-lock-open-icon");await t(d).toBeTruthy()}};export{le as Custom_Icon_Slot,ne as Disabled,te as Error_Label,oe as Hint,Z as Interactive,ee as Label,ie as Prefix,re as Suffix,se as Value,Y as default};
//# sourceMappingURL=PasswordField.stories.js.map
