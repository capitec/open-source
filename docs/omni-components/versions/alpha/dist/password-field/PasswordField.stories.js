import"../chunks-js/chunk.ZXLQSXE6.js";import"../chunks-js/chunk.XY3ENUSG.js";import"../chunks-js/chunk.CXYUGQRY.js";import"../chunks-js/chunk.QNJXPAWJ.js";import"../chunks-js/chunk.52JZFYEK.js";import"../chunks-js/chunk.ZTJGZLZP.js";import"../chunks-js/chunk.KHZKGRRT.js";import{a as E,b as g,c as $,d as b,e as v,f as B,g as T}from"../chunks-js/chunk.ZNL3YBLQ.js";import"../chunks-js/chunk.75BXIUBR.js";import{k as d}from"../chunks-js/chunk.EZFZPYM4.js";import"../chunks-js/chunk.HEGWAMTE.js";import"../chunks-js/chunk.BMVIQMEU.js";import"../chunks-js/chunk.MPJVWYSG.js";import"../chunks-js/chunk.FJG2EZL6.js";import{b as c,c as L}from"../chunks-js/chunk.SNS3RAAO.js";import{a}from"../chunks-js/chunk.7QF4VYJR.js";import{a as l}from"../chunks-js/chunk.CFP25WDL.js";import{b as f,c as w}from"../chunks-js/chunk.555UF2OF.js";import{d as s}from"../chunks-js/chunk.ZDXRLLLZ.js";import"../chunks-js/chunk.YPV66JA3.js";import"../chunks-js/chunk.F27L6OQP.js";import"../chunks-js/chunk.7YN44Q4N.js";import"../chunks-js/chunk.CHYIO324.js";import{b as t,d as n}from"../chunks-js/chunk.CIM3NS6G.js";import{h as A,l as x,o as F}from"../chunks-js/chunk.2ZZQBHAA.js";x();F();var C=A(L(),1);var oe={title:"UI Components/Password Field",component:"omni-password-field"},te={render:e=>t`
    <omni-password-field
      data-testid="test-password-field"
      label="${l(e.label)}"
      value="${e.value}"
      hint="${l(e.hint)}"
      error="${l(e.error)}"
      ?disabled="${e.disabled}">${e.prefix?t`${`\r
`}${a(d("prefix",e.prefix))}`:n}${e.suffix?t`${`\r
`}${a(d("suffix",e.suffix))}`:n}${e.hide?t`${`\r
`}${a(d("hide",e.hide))}`:n}${e.show?t`${`\r
`}${a(d("show",e.show))}`:n}</omni-password-field>
  `,name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,prefix:"",suffix:"",hide:"",show:""},play:async e=>{var u,S,y;let i=w(e.canvasElement).getByTestId("test-password-field"),o=C.fn();i.addEventListener("input",o),i.addEventListener("click",o);let m=(u=i.shadowRoot)==null?void 0:u.getElementById("inputField"),r=(S=i.shadowRoot)==null?void 0:S.querySelector("slot[name=show]");await s(r).toBeTruthy(),await c.click(r,{pointerEventsCheck:0});let p=(y=i.shadowRoot)==null?void 0:y.querySelector("slot[name=hide]");await s(p).toBeTruthy(),await c.click(p,{pointerEventsCheck:0}),await c.type(m,"Value Update",{pointerEventsCheck:0});let h="Value Update";navigator.userAgent==="Test Runner"?console.log("CICD Test - Not Visual"):(await f(()=>s(m).toHaveValue(h),{timeout:3e3}),await f(()=>s(o).toBeCalledTimes(h.length+1),{timeout:3e3}))}},se=E("omni-password-field"),ie=g("omni-password-field"),re=$("omni-password-field"),ne=b("omni-password-field","Password123"),ae=v("omni-password-field"),le=B("omni-password-field"),de=T("omni-password-field","Password123"),me={render:e=>t`
    <omni-password-field data-testid="test-password-field" label="${l(e.label)}" ?disabled="${e.disabled}">
      <omni-lock-open-icon style="fill: orange;" slot="show"></omni-lock-open-icon>
      <omni-lock-closed-icon style="fill: lightgreen;" slot="hide"></omni-lock-closed-icon>
    </omni-password-field>
  `,name:"Custom Icon Slot",description:"Set html content to display as the visibility indicators of the field.",args:{label:"Custom Icon Slot"},play:async e=>{var r;let o=(r=w(e.canvasElement).getByTestId("test-password-field").shadowRoot)==null?void 0:r.querySelector("slot[name=show]");await s(o).toBeTruthy();let m=o==null?void 0:o.assignedElements().find(p=>p.tagName.toLocaleLowerCase()==="omni-lock-open-icon");await s(m).toBeTruthy()}};export{me as Custom_Icon_Slot,de as Disabled,re as Error_Label,ie as Hint,te as Interactive,se as Label,ae as Prefix,le as Suffix,ne as Value,oe as default};
//# sourceMappingURL=PasswordField.stories.js.map
