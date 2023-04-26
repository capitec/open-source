import"../chunks-js/chunk.3ZDZXPVI.js";import"../chunks-js/chunk.WCB52SLW.js";import"../chunks-js/chunk.HKWFE27C.js";import"../chunks-js/chunk.YGXFZZKN.js";import"../chunks-js/chunk.ZR4UECQ6.js";import{a as $,b as E,c as L,d as g,e as v,f as P,g as k}from"../chunks-js/chunk.E4TI5NIC.js";import"../chunks-js/chunk.K2UMXYHA.js";import"../chunks-js/chunk.WASXY5YJ.js";import"../chunks-js/chunk.E3RY574V.js";import{a as I}from"../chunks-js/chunk.IRJIQSYL.js";import{a}from"../chunks-js/chunk.G3QHRCKP.js";import{a as b,b as c}from"../chunks-js/chunk.MHLMY33S.js";import{l as m}from"../chunks-js/chunk.R2G2NSIY.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.ZPV4YWBP.js";import{a as d}from"../chunks-js/chunk.PJH7M65U.js";import{b as f,c as w}from"../chunks-js/chunk.N6OKW4B2.js";import{d as i}from"../chunks-js/chunk.W54IKPJD.js";import"../chunks-js/chunk.2TH7MEM4.js";import"../chunks-js/chunk.B6SUKNHE.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as s,d as n}from"../chunks-js/chunk.F6MIXR4E.js";import{h as C,m as F,p as x}from"../chunks-js/chunk.BF43NN75.js";F();x();var B=C(I(),1);var se={title:"UI Components/Password Field",component:"omni-password-field"},ie={render:e=>s`
    <omni-password-field
      data-testid="test-password-field"
      label="${d(e.label)}"
      value="${e.value}"
      hint="${d(e.hint)}"
      error="${d(e.error)}"
      ?disabled="${e.disabled}">${e.prefix?s`${`\r
`}${a(m("prefix",e.prefix))}`:n}${e.suffix?s`${`\r
`}${a(m("suffix",e.suffix))}`:n}${e.hide?s`${`\r
`}${a(m("hide",e.hide))}`:n}${e.show?s`${`\r
`}${a(m("show",e.show))}`:n}</omni-password-field>
  `,name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,prefix:"",suffix:"",hide:"",show:""},play:async e=>{var u,y,S;let t=w(e.canvasElement).getByTestId("test-password-field");t.value="";let o=B.fn();t.addEventListener("input",o),t.addEventListener("click",o);let r=(u=t.shadowRoot)==null?void 0:u.getElementById("inputField");b(r);let l=(y=t.shadowRoot)==null?void 0:y.querySelector("slot[name=show]");await i(l).toBeTruthy(),await c.click(l,{pointerEventsCheck:0});let p=(S=t.shadowRoot)==null?void 0:S.querySelector("slot[name=hide]");await i(p).toBeTruthy(),await c.click(p,{pointerEventsCheck:0}),await c.type(r,"Value Update",{pointerEventsCheck:0});let h="Value Update";await f(()=>i(r).toHaveValue(h),{timeout:3e3}),await f(()=>i(o).toBeCalledTimes(h.length+1),{timeout:3e3})}},re=$("omni-password-field"),le=E("omni-password-field"),ne=L("omni-password-field"),ae=g("omni-password-field","Password123"),de=v("omni-password-field"),me=P("omni-password-field"),pe=k("omni-password-field","Password123"),ce={render:e=>s`
    <omni-password-field data-testid="test-password-field" label="${d(e.label)}" ?disabled="${e.disabled}">
      <omni-lock-open-icon style="fill: orange;" slot="show"></omni-lock-open-icon>
      <omni-lock-closed-icon style="fill: lightgreen;" slot="hide"></omni-lock-closed-icon>
    </omni-password-field>
  `,frameworkSources:[{framework:"React",load:e=>`import { OmniPasswordField } from "@capitec/omni-components-react/password-field";
import { OmniLockClosedIcon,OmniLockOpenIcon } from "@capitec/omni-components-react/icons";

const App = () => <OmniPasswordField${e.label?` label='${e.label}'`:""}${e.disabled?" disabled":""}>
                    <OmniLockOpenIcon style={{fill: 'orange'}} slot="show"/>
                    <OmniLockClosedIcon style={{fill: 'lightgreen'}} slot="hide"/>
                  </OmniPasswordField>;`}],name:"Custom Icon Slot",description:"Set html content to display as the visibility indicators of the field.",args:{label:"Custom Icon Slot"},play:async e=>{var l;let o=(l=w(e.canvasElement).getByTestId("test-password-field").shadowRoot)==null?void 0:l.querySelector("slot[name=show]");await i(o).toBeTruthy();let r=o==null?void 0:o.assignedElements().find(p=>p.tagName.toLocaleLowerCase()==="omni-lock-open-icon");await i(r).toBeTruthy()}};export{ce as Custom_Icon_Slot,pe as Disabled,ne as Error_Label,le as Hint,ie as Interactive,re as Label,de as Prefix,me as Suffix,ae as Value,se as default};
//# sourceMappingURL=PasswordField.stories.js.map
