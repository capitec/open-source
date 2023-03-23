import"../chunks-js/chunk.UYVLNYTK.js";import"../chunks-js/chunk.XY3ENUSG.js";import"../chunks-js/chunk.CXYUGQRY.js";import"../chunks-js/chunk.QNJXPAWJ.js";import"../chunks-js/chunk.52JZFYEK.js";import"../chunks-js/chunk.ZTJGZLZP.js";import"../chunks-js/chunk.G4OP6JHJ.js";import{a as g,b as v,c as $,d as b,e as B,f as C,g as T}from"../chunks-js/chunk.EF6ECE3Y.js";import"../chunks-js/chunk.75BXIUBR.js";import{k as m}from"../chunks-js/chunk.WA6C3RAL.js";import"../chunks-js/chunk.MPJVWYSG.js";import"../chunks-js/chunk.HEGWAMTE.js";import"../chunks-js/chunk.BMVIQMEU.js";import"../chunks-js/chunk.FJG2EZL6.js";import{a as E,b as c,c as P}from"../chunks-js/chunk.SNS3RAAO.js";import{a as l}from"../chunks-js/chunk.7QF4VYJR.js";import{a as d}from"../chunks-js/chunk.CFP25WDL.js";import{b as f,c as w}from"../chunks-js/chunk.555UF2OF.js";import{d as i}from"../chunks-js/chunk.ZDXRLLLZ.js";import"../chunks-js/chunk.YPV66JA3.js";import"../chunks-js/chunk.F27L6OQP.js";import"../chunks-js/chunk.7YN44Q4N.js";import"../chunks-js/chunk.CHYIO324.js";import{b as s,d as a}from"../chunks-js/chunk.CIM3NS6G.js";import{h as L,l as x,o as F}from"../chunks-js/chunk.2ZZQBHAA.js";x();F();var A=L(P(),1);var se={title:"UI Components/Password Field",component:"omni-password-field"},ie={render:e=>s`
    <omni-password-field
      data-testid="test-password-field"
      label="${d(e.label)}"
      value="${e.value}"
      hint="${d(e.hint)}"
      error="${d(e.error)}"
      ?disabled="${e.disabled}">${e.prefix?s`${`\r
`}${l(m("prefix",e.prefix))}`:a}${e.suffix?s`${`\r
`}${l(m("suffix",e.suffix))}`:a}${e.hide?s`${`\r
`}${l(m("hide",e.hide))}`:a}${e.show?s`${`\r
`}${l(m("show",e.show))}`:a}</omni-password-field>
  `,name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,prefix:"",suffix:"",hide:"",show:""},play:async e=>{var h,S,y;let t=w(e.canvasElement).getByTestId("test-password-field");t.value="";let o=A.fn();t.addEventListener("input",o),t.addEventListener("click",o);let r=(h=t.shadowRoot)==null?void 0:h.getElementById("inputField");E(r);let n=(S=t.shadowRoot)==null?void 0:S.querySelector("slot[name=show]");await i(n).toBeTruthy(),await c.click(n,{pointerEventsCheck:0});let p=(y=t.shadowRoot)==null?void 0:y.querySelector("slot[name=hide]");await i(p).toBeTruthy(),await c.click(p,{pointerEventsCheck:0}),await c.type(r,"Value Update",{pointerEventsCheck:0});let u="Value Update";navigator.userAgent==="Test Runner"?console.log("CICD Test - Not Visual"):(await f(()=>i(r).toHaveValue(u),{timeout:3e3}),await f(()=>i(o).toBeCalledTimes(u.length+1),{timeout:3e3}))}},re=g("omni-password-field"),ne=v("omni-password-field"),ae=$("omni-password-field"),le=b("omni-password-field","Password123"),de=B("omni-password-field"),me=C("omni-password-field"),pe=T("omni-password-field","Password123"),ce={render:e=>s`
    <omni-password-field data-testid="test-password-field" label="${d(e.label)}" ?disabled="${e.disabled}">
      <omni-lock-open-icon style="fill: orange;" slot="show"></omni-lock-open-icon>
      <omni-lock-closed-icon style="fill: lightgreen;" slot="hide"></omni-lock-closed-icon>
    </omni-password-field>
  `,name:"Custom Icon Slot",description:"Set html content to display as the visibility indicators of the field.",args:{label:"Custom Icon Slot"},play:async e=>{var n;let o=(n=w(e.canvasElement).getByTestId("test-password-field").shadowRoot)==null?void 0:n.querySelector("slot[name=show]");await i(o).toBeTruthy();let r=o==null?void 0:o.assignedElements().find(p=>p.tagName.toLocaleLowerCase()==="omni-lock-open-icon");await i(r).toBeTruthy()}};export{ce as Custom_Icon_Slot,pe as Disabled,ae as Error_Label,ne as Hint,ie as Interactive,re as Label,de as Prefix,me as Suffix,le as Value,se as default};
//# sourceMappingURL=PasswordField.stories.js.map
