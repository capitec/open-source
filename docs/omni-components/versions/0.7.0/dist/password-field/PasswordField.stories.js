import"../chunks-js/chunk.Q2F3NOEK.js";import"../chunks-js/chunk.WCB52SLW.js";import"../chunks-js/chunk.HKWFE27C.js";import"../chunks-js/chunk.YGXFZZKN.js";import"../chunks-js/chunk.ZR4UECQ6.js";import{a as $,b as C,c as P,d as E,e as B,f as L,g as v,h as g,i as k}from"../chunks-js/chunk.RYXMLQGX.js";import"../chunks-js/chunk.K2UMXYHA.js";import"../chunks-js/chunk.AMDN2Z2F.js";import"../chunks-js/chunk.E3RY574V.js";import"../chunks-js/chunk.XGCBNSF2.js";import{a as T}from"../chunks-js/chunk.IRJIQSYL.js";import"../chunks-js/chunk.LCIHREUY.js";import{a as x,b as p}from"../chunks-js/chunk.MHLMY33S.js";import{m as a}from"../chunks-js/chunk.WI5F3R4J.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.ZPV4YWBP.js";import{a as m}from"../chunks-js/chunk.6QCQBNRL.js";import{b as w,c as f}from"../chunks-js/chunk.N6OKW4B2.js";import{d as i}from"../chunks-js/chunk.W54IKPJD.js";import{a as l}from"../chunks-js/chunk.32OT4JFD.js";import"../chunks-js/chunk.2TH7MEM4.js";import"../chunks-js/chunk.B6SUKNHE.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as t,d as r}from"../chunks-js/chunk.F6MIXR4E.js";import{h as I,m as b,p as F}from"../chunks-js/chunk.BF43NN75.js";b();F();var A=I(T(),1);var re={title:"UI Components/Password Field",component:"omni-password-field"},le={render:e=>t`
    <omni-password-field
      data-testid="test-password-field"
      label="${m(e.label)}"
      value="${e.value}"
      hint="${m(e.hint)}"
      error="${m(e.error)}"
      ?disabled="${e.disabled}"
      ?clearable="${e.clearable}">${e.prefix?t`${`\r
`}${l(a("prefix",e.prefix))}`:r}
      ${e.clear?t`${`\r
`}${l(a("clear",e.clear))}`:r}${e.suffix?t`${`\r
`}${l(a("suffix",e.suffix))}`:r}${e.hide?t`${`\r
`}${l(a("hide",e.hide))}`:r}${e.show?t`${`\r
`}${l(a("show",e.show))}`:r}</omni-password-field>
  `,name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,clearable:!1,prefix:"",suffix:"",clear:"",hide:"",show:""},play:async e=>{var u,S,y;let s=f(e.canvasElement).getByTestId("test-password-field");s.value="";let o=A.fn();s.addEventListener("input",o),s.addEventListener("click",o);let n=(u=s.shadowRoot)==null?void 0:u.getElementById("inputField");x(n);let d=(S=s.shadowRoot)==null?void 0:S.querySelector("slot[name=show]");await i(d).toBeTruthy(),await p.click(d,{pointerEventsCheck:0});let c=(y=s.shadowRoot)==null?void 0:y.querySelector("slot[name=hide]");await i(c).toBeTruthy(),await p.click(c,{pointerEventsCheck:0}),await p.type(n,"Value Update",{pointerEventsCheck:0});let h="Value Update";await w(()=>i(n).toHaveValue(h),{timeout:3e3}),await w(()=>i(o).toBeCalledTimes(h.length+1),{timeout:3e3})}},ae=$("omni-password-field"),ne=C("omni-password-field"),de=P("omni-password-field"),me=E("omni-password-field","Password123"),ce=v("omni-password-field","Password123"),pe=g("omni-password-field","Password123"),we=B("omni-password-field"),fe=L("omni-password-field"),he=k("omni-password-field","Password123"),ue={render:e=>t`
    <omni-password-field data-testid="test-password-field" label="${m(e.label)}" ?disabled="${e.disabled}">
      <omni-lock-open-icon style="fill: orange;" slot="show"></omni-lock-open-icon>
      <omni-lock-closed-icon style="fill: lightgreen;" slot="hide"></omni-lock-closed-icon>
    </omni-password-field>
  `,frameworkSources:[{framework:"React",load:e=>`import { OmniPasswordField } from "@capitec/omni-components-react/password-field";
import { OmniLockClosedIcon,OmniLockOpenIcon } from "@capitec/omni-components-react/icons";

const App = () => <OmniPasswordField${e.label?` label='${e.label}'`:""}${e.disabled?" disabled":""}>
                    <OmniLockOpenIcon style={{fill: 'orange'}} slot="show"/>
                    <OmniLockClosedIcon style={{fill: 'lightgreen'}} slot="hide"/>
                  </OmniPasswordField>;`}],name:"Custom Icon Slot",description:"Set html content to display as the visibility indicators of the field.",args:{label:"Custom Icon Slot"},play:async e=>{var d;let o=(d=f(e.canvasElement).getByTestId("test-password-field").shadowRoot)==null?void 0:d.querySelector("slot[name=show]");await i(o).toBeTruthy();let n=o==null?void 0:o.assignedElements().find(c=>c.tagName.toLocaleLowerCase()==="omni-lock-open-icon");await i(n).toBeTruthy()}};export{ce as Clearable,pe as Custom_Clear_Slot,ue as Custom_Icon_Slot,he as Disabled,de as Error_Label,ne as Hint,le as Interactive,ae as Label,we as Prefix,fe as Suffix,me as Value,re as default};
//# sourceMappingURL=PasswordField.stories.js.map
