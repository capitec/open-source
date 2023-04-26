import"../chunks-js/chunk.26N7V3DZ.js";import"../chunks-js/chunk.WCB52SLW.js";import"../chunks-js/chunk.HKWFE27C.js";import"../chunks-js/chunk.YGXFZZKN.js";import"../chunks-js/chunk.ZR4UECQ6.js";import{a as $,b as E,c as P,d as C,e as L,f as g,g as v,h as B}from"../chunks-js/chunk.YD3W5R6Q.js";import"../chunks-js/chunk.K2UMXYHA.js";import"../chunks-js/chunk.P5BVWJU5.js";import"../chunks-js/chunk.E3RY574V.js";import"../chunks-js/chunk.XGCBNSF2.js";import{a as A}from"../chunks-js/chunk.IRJIQSYL.js";import{a as n}from"../chunks-js/chunk.G3QHRCKP.js";import{a as x,b as c}from"../chunks-js/chunk.MHLMY33S.js";import{l as m}from"../chunks-js/chunk.BM33DA64.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.ZPV4YWBP.js";import{a as d}from"../chunks-js/chunk.PJH7M65U.js";import{b as f,c as w}from"../chunks-js/chunk.N6OKW4B2.js";import{d as i}from"../chunks-js/chunk.W54IKPJD.js";import"../chunks-js/chunk.2TH7MEM4.js";import"../chunks-js/chunk.B6SUKNHE.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as s,d as a}from"../chunks-js/chunk.F6MIXR4E.js";import{h as I,m as b,p as F}from"../chunks-js/chunk.BF43NN75.js";b();F();var k=I(A(),1);var ie={title:"UI Components/Password Field",component:"omni-password-field"},re={render:e=>s`
    <omni-password-field
      data-testid="test-password-field"
      label="${d(e.label)}"
      value="${e.value}"
      hint="${d(e.hint)}"
      error="${d(e.error)}"
      ?disabled="${e.disabled}"
      ?clearable="${e.clearable}">${e.prefix?s`${`\r
`}${n(m("prefix",e.prefix))}`:a}${e.suffix?s`${`\r
`}${n(m("suffix",e.suffix))}`:a}${e.hide?s`${`\r
`}${n(m("hide",e.hide))}`:a}${e.show?s`${`\r
`}${n(m("show",e.show))}`:a}</omni-password-field>
  `,name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,clearable:!1,prefix:"",suffix:"",hide:"",show:""},play:async e=>{var u,y,S;let t=w(e.canvasElement).getByTestId("test-password-field");t.value="";let o=k.fn();t.addEventListener("input",o),t.addEventListener("click",o);let r=(u=t.shadowRoot)==null?void 0:u.getElementById("inputField");x(r);let l=(y=t.shadowRoot)==null?void 0:y.querySelector("slot[name=show]");await i(l).toBeTruthy(),await c.click(l,{pointerEventsCheck:0});let p=(S=t.shadowRoot)==null?void 0:S.querySelector("slot[name=hide]");await i(p).toBeTruthy(),await c.click(p,{pointerEventsCheck:0}),await c.type(r,"Value Update",{pointerEventsCheck:0});let h="Value Update";await f(()=>i(r).toHaveValue(h),{timeout:3e3}),await f(()=>i(o).toBeCalledTimes(h.length+1),{timeout:3e3})}},le=$("omni-password-field"),ae=E("omni-password-field"),ne=P("omni-password-field"),de=C("omni-password-field","Password123"),me=v("omni-password-field","Password123"),pe=L("omni-password-field"),ce=g("omni-password-field"),fe=B("omni-password-field","Password123"),we={render:e=>s`
    <omni-password-field data-testid="test-password-field" label="${d(e.label)}" ?disabled="${e.disabled}">
      <omni-lock-open-icon style="fill: orange;" slot="show"></omni-lock-open-icon>
      <omni-lock-closed-icon style="fill: lightgreen;" slot="hide"></omni-lock-closed-icon>
    </omni-password-field>
  `,frameworkSources:[{framework:"React",load:e=>`import { OmniPasswordField } from "@capitec/omni-components-react/password-field";
import { OmniLockClosedIcon,OmniLockOpenIcon } from "@capitec/omni-components-react/icons";

const App = () => <OmniPasswordField${e.label?` label='${e.label}'`:""}${e.disabled?" disabled":""}>
                    <OmniLockOpenIcon style={{fill: 'orange'}} slot="show"/>
                    <OmniLockClosedIcon style={{fill: 'lightgreen'}} slot="hide"/>
                  </OmniPasswordField>;`}],name:"Custom Icon Slot",description:"Set html content to display as the visibility indicators of the field.",args:{label:"Custom Icon Slot"},play:async e=>{var l;let o=(l=w(e.canvasElement).getByTestId("test-password-field").shadowRoot)==null?void 0:l.querySelector("slot[name=show]");await i(o).toBeTruthy();let r=o==null?void 0:o.assignedElements().find(p=>p.tagName.toLocaleLowerCase()==="omni-lock-open-icon");await i(r).toBeTruthy()}};export{me as Clear,we as Custom_Icon_Slot,fe as Disabled,ne as Error_Label,ae as Hint,re as Interactive,le as Label,pe as Prefix,ce as Suffix,de as Value,ie as default};
//# sourceMappingURL=PasswordField.stories.js.map
