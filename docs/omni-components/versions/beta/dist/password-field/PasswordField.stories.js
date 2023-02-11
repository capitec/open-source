import"../chunks-js/chunk.D5QGOH55.js";import"../chunks-js/chunk.RLXELPAR.js";import"../chunks-js/chunk.ZY73ORAC.js";import"../chunks-js/chunk.EFKJ5U7K.js";import"../chunks-js/chunk.UABK3ZJL.js";import"../chunks-js/chunk.MCIDFWAY.js";import"../chunks-js/chunk.OLTCQXBT.js";import{a as E,b as g,c as $,d as b,e as v,f as B,g as T}from"../chunks-js/chunk.KAP7PH4J.js";import"../chunks-js/chunk.7KQADVV4.js";import{k as d}from"../chunks-js/chunk.QDDPH2I4.js";import"../chunks-js/chunk.UV5ZCCWM.js";import"../chunks-js/chunk.BMVIQMEU.js";import"../chunks-js/chunk.MPJVWYSG.js";import{a as l}from"../chunks-js/chunk.3FTDPY75.js";import"../chunks-js/chunk.VOM777LA.js";import{b as c,c as L}from"../chunks-js/chunk.LME64W74.js";import{a}from"../chunks-js/chunk.R4IMIBZU.js";import{b as f,c as w}from"../chunks-js/chunk.QC5ZUB6O.js";import{d as s}from"../chunks-js/chunk.YQLTAQFI.js";import"../chunks-js/chunk.X74GW3ZD.js";import"../chunks-js/chunk.XMM72FEY.js";import"../chunks-js/chunk.ZO5UBYOG.js";import"../chunks-js/chunk.CHYIO324.js";import{b as t,d as n}from"../chunks-js/chunk.3GEUDTAZ.js";import{h as A,l as x,o as F}from"../chunks-js/chunk.2ZZQBHAA.js";x();F();var C=A(L(),1);var oe={title:"UI Components/Password Field",component:"omni-password-field"},te={render:e=>t`
    <omni-password-field
      data-testid="test-password-field"
      label="${a(e.label)}"
      value="${e.value}"
      hint="${a(e.hint)}"
      error="${a(e.error)}"
      ?disabled="${e.disabled}">${e.prefix?t`${`\r
`}${l(d("prefix",e.prefix))}`:n}${e.suffix?t`${`\r
`}${l(d("suffix",e.suffix))}`:n}${e.hide?t`${`\r
`}${l(d("hide",e.hide))}`:n}${e.show?t`${`\r
`}${l(d("show",e.show))}`:n}</omni-password-field>
  `,name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,prefix:"",suffix:"",hide:"",show:""},play:async e=>{var u,S,y;let i=w(e.canvasElement).getByTestId("test-password-field"),o=C.fn();i.addEventListener("input",o),i.addEventListener("click",o);let m=(u=i.shadowRoot)==null?void 0:u.getElementById("inputField"),r=(S=i.shadowRoot)==null?void 0:S.querySelector("slot[name=show]");await s(r).toBeTruthy(),await c.click(r,{pointerEventsCheck:0});let p=(y=i.shadowRoot)==null?void 0:y.querySelector("slot[name=hide]");await s(p).toBeTruthy(),await c.click(p,{pointerEventsCheck:0}),await c.type(m,"Value Update",{pointerEventsCheck:0});let h="Value Update";navigator.userAgent==="Test Runner"?console.log("CICD Test - Not Visual"):(await f(()=>s(m).toHaveValue(h),{timeout:3e3}),await f(()=>s(o).toBeCalledTimes(h.length+1),{timeout:3e3}))}},se=E("omni-password-field"),ie=g("omni-password-field"),re=$("omni-password-field"),ne=b("omni-password-field"),le=v("omni-password-field"),ae=B("omni-password-field"),de=T("omni-password-field"),me={render:e=>t`
    <omni-password-field data-testid="test-password-field" label="${a(e.label)}" ?disabled="${e.disabled}">
      <omni-lock-open-icon style="fill: orange;" slot="show"></omni-lock-open-icon>
      <omni-lock-closed-icon style="fill: lightgreen;" slot="hide"></omni-lock-closed-icon>
    </omni-password-field>
  `,name:"Custom Icon Slot",description:"Set html content to display as the visibility indicators of the field.",args:{label:"Custom Icon Slot"},play:async e=>{var r;let o=(r=w(e.canvasElement).getByTestId("test-password-field").shadowRoot)==null?void 0:r.querySelector("slot[name=show]");await s(o).toBeTruthy();let m=o==null?void 0:o.assignedElements().find(p=>p.tagName.toLocaleLowerCase()==="omni-lock-open-icon");await s(m).toBeTruthy()}};export{me as Custom_Icon_Slot,de as Disabled,re as Error_Label,ie as Hint,te as Interactive,se as Label,le as Prefix,ae as Suffix,ne as Value,oe as default};
//# sourceMappingURL=PasswordField.stories.js.map
