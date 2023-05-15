import"../chunks-js/chunk.CEJFRLJO.js";import"../chunks-js/chunk.WCB52SLW.js";import"../chunks-js/chunk.HKWFE27C.js";import"../chunks-js/chunk.YGXFZZKN.js";import"../chunks-js/chunk.ZR4UECQ6.js";import{a as x,b as E,c as P,d as C,e as L,f as v,g as B,i as k}from"../chunks-js/chunk.VBXXYKHH.js";import"../chunks-js/chunk.K2UMXYHA.js";import"../chunks-js/chunk.CQEQBUXK.js";import"../chunks-js/chunk.E3RY574V.js";import"../chunks-js/chunk.XGCBNSF2.js";import{a as A}from"../chunks-js/chunk.IRJIQSYL.js";import{a as l}from"../chunks-js/chunk.G3QHRCKP.js";import{a as $,b as p}from"../chunks-js/chunk.MHLMY33S.js";import{l as a}from"../chunks-js/chunk.BM33DA64.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.ZPV4YWBP.js";import{a as m}from"../chunks-js/chunk.PJH7M65U.js";import{b as f,c as w}from"../chunks-js/chunk.N6OKW4B2.js";import{d as i}from"../chunks-js/chunk.W54IKPJD.js";import"../chunks-js/chunk.2TH7MEM4.js";import"../chunks-js/chunk.B6SUKNHE.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as t,d as r}from"../chunks-js/chunk.F6MIXR4E.js";import{h as g,m as b,p as F}from"../chunks-js/chunk.BF43NN75.js";b();F();var I=g(A(),1);var ie={title:"UI Components/Password Field",component:"omni-password-field"},re={render:e=>t`
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
  `,name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,clearable:!1,prefix:"",suffix:"",clear:"",hide:"",show:""},play:async e=>{var u,y,S;let s=w(e.canvasElement).getByTestId("test-password-field");s.value="";let o=I.fn();s.addEventListener("input",o),s.addEventListener("click",o);let n=(u=s.shadowRoot)==null?void 0:u.getElementById("inputField");$(n);let d=(y=s.shadowRoot)==null?void 0:y.querySelector("slot[name=show]");await i(d).toBeTruthy(),await p.click(d,{pointerEventsCheck:0});let c=(S=s.shadowRoot)==null?void 0:S.querySelector("slot[name=hide]");await i(c).toBeTruthy(),await p.click(c,{pointerEventsCheck:0}),await p.type(n,"Value Update",{pointerEventsCheck:0});let h="Value Update";await f(()=>i(n).toHaveValue(h),{timeout:3e3}),await f(()=>i(o).toBeCalledTimes(h.length+1),{timeout:3e3})}},le=x("omni-password-field"),ae=E("omni-password-field"),ne=P("omni-password-field"),de=C("omni-password-field","Password123"),me=B("omni-password-field","Password123"),ce=L("omni-password-field"),pe=v("omni-password-field"),fe=k("omni-password-field","Password123"),we={render:e=>t`
    <omni-password-field data-testid="test-password-field" label="${m(e.label)}" ?disabled="${e.disabled}">
      <omni-lock-open-icon style="fill: orange;" slot="show"></omni-lock-open-icon>
      <omni-lock-closed-icon style="fill: lightgreen;" slot="hide"></omni-lock-closed-icon>
    </omni-password-field>
  `,frameworkSources:[{framework:"React",load:e=>`import { OmniPasswordField } from "@capitec/omni-components-react/password-field";
import { OmniLockClosedIcon,OmniLockOpenIcon } from "@capitec/omni-components-react/icons";

const App = () => <OmniPasswordField${e.label?` label='${e.label}'`:""}${e.disabled?" disabled":""}>
                    <OmniLockOpenIcon style={{fill: 'orange'}} slot="show"/>
                    <OmniLockClosedIcon style={{fill: 'lightgreen'}} slot="hide"/>
                  </OmniPasswordField>;`}],name:"Custom Icon Slot",description:"Set html content to display as the visibility indicators of the field.",args:{label:"Custom Icon Slot"},play:async e=>{var d;let o=(d=w(e.canvasElement).getByTestId("test-password-field").shadowRoot)==null?void 0:d.querySelector("slot[name=show]");await i(o).toBeTruthy();let n=o==null?void 0:o.assignedElements().find(c=>c.tagName.toLocaleLowerCase()==="omni-lock-open-icon");await i(n).toBeTruthy()}};export{me as Clearable,we as Custom_Icon_Slot,fe as Disabled,ne as Error_Label,ae as Hint,re as Interactive,le as Label,ce as Prefix,pe as Suffix,de as Value,ie as default};
//# sourceMappingURL=PasswordField.stories.js.map
