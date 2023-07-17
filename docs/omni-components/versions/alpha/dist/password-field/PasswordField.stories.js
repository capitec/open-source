import"../chunks-js/chunk.KP4PEFC2.js";import"../chunks-js/chunk.4DK445VM.js";import"../chunks-js/chunk.YZDFU56K.js";import"../chunks-js/chunk.IKEO2J7X.js";import"../chunks-js/chunk.KCLYGUKE.js";import{a as H}from"../chunks-js/chunk.AFJ2VLBG.js";import{a as F,b as n}from"../chunks-js/chunk.IEAYXHP4.js";import{b as c,c as $}from"../chunks-js/chunk.WXU7FCN5.js";import{e as a}from"../chunks-js/chunk.F2C2BPNZ.js";import"../chunks-js/chunk.DGWR2I27.js";import"../chunks-js/chunk.BKUUO7ED.js";import{a as C,b as P,c as k,d as E,e as A,f as L,g as v,h as B,i as I}from"../chunks-js/chunk.CU6A34Y6.js";import"../chunks-js/chunk.ZGHDW2L3.js";import"../chunks-js/chunk.Y2FNDKPS.js";import{E as x,m as i}from"../chunks-js/chunk.ZCQBBFJF.js";import"../chunks-js/chunk.Z5LIJAXH.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.UHIDETPL.js";import"../chunks-js/chunk.KPSG3GC4.js";import"../chunks-js/chunk.MDYAUJ3Z.js";import"../chunks-js/chunk.VTL5CONA.js";import{a as r}from"../chunks-js/chunk.5DDJQYYG.js";import"../chunks-js/chunk.3U7QFP2Q.js";import"../chunks-js/chunk.LB764BBD.js";import{a as l}from"../chunks-js/chunk.XCXCHO25.js";import"../chunks-js/chunk.KRAWXAJA.js";import"../chunks-js/chunk.FT5UPVZS.js";import"../chunks-js/chunk.6C4LMRM7.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as t,e as s}from"../chunks-js/chunk.L3RZWW2F.js";import{h as T,m as S,p as y}from"../chunks-js/chunk.BF43NN75.js";S();y();var g=T(H(),1);var ae={title:"UI Components/Password Field",component:"omni-password-field"},O={render:e=>t`
    <omni-password-field
      data-testid="test-password-field"
      label="${l(e.label)}"
      value="${e.value}"
      hint="${l(e.hint)}"
      error="${l(e.error)}"
      ?disabled="${e.disabled}"
      ?clearable="${e.clearable}">${e.prefix?t`${`\r
`}${r(i("prefix",e.prefix))}`:s}
      ${e.clear?t`${`\r
`}${r(i("clear",e.clear))}`:s}${e.suffix?t`${`\r
`}${r(i("suffix",e.suffix))}`:s}${e.hide?t`${`\r
`}${r(i("hide",e.hide))}`:s}${e.show?t`${`\r
`}${r(i("show",e.show))}`:s}</omni-password-field>
  `,frameworkSources:[{framework:"Vue",load:e=>x(O.render(e),void 0,o=>o.replace(" disabled",' :disabled="true"').replace(" clearable",' :clearable="true"'))}],name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,clearable:!1,prefix:"",suffix:"",clear:"",hide:"",show:""},play:async e=>{var u,h,b;let o=$(e.canvasElement).getByTestId("test-password-field");o.value="";let d=g.fn();o.addEventListener("input",d),o.addEventListener("click",d);let m=(u=o.shadowRoot)==null?void 0:u.getElementById("inputField");F(m);let p=(h=o.shadowRoot)==null?void 0:h.querySelector("slot[name=show]");await a(p).toBeTruthy(),await n.click(p,{pointerEventsCheck:0});let f=(b=o.shadowRoot)==null?void 0:b.querySelector("slot[name=hide]");await a(f).toBeTruthy(),await n.click(f,{pointerEventsCheck:0}),await n.type(m,"Value Update",{pointerEventsCheck:0});let w="Value Update";await c(()=>a(m).toHaveValue(w),{timeout:3e3}),await c(()=>a(d).toBeCalledTimes(w.length+1),{timeout:3e3})}},ne=C("omni-password-field"),de=P("omni-password-field"),me=k("omni-password-field"),ce=E("omni-password-field","Password123"),pe=v("omni-password-field","Password123"),fe=B("omni-password-field","Password123"),we=A("omni-password-field"),ue=L("omni-password-field"),he=I("omni-password-field","Password123"),be={render:e=>t`
    <omni-password-field data-testid="test-password-field" label="${l(e.label)}" ?disabled="${e.disabled}">
      <omni-lock-open-icon style="fill: orange;" slot="show"></omni-lock-open-icon>
      <omni-lock-closed-icon style="fill: lightgreen;" slot="hide"></omni-lock-closed-icon>
    </omni-password-field>
  `,frameworkSources:[{framework:"React",load:e=>`import { OmniPasswordField } from "@capitec/omni-components-react/password-field";
import { OmniLockClosedIcon,OmniLockOpenIcon } from "@capitec/omni-components-react/icons";

const App = () => <OmniPasswordField${e.label?` label='${e.label}'`:""}${e.disabled?" disabled":""}>
                    <OmniLockOpenIcon style={{fill: 'orange'}} slot="show"/>
                    <OmniLockClosedIcon style={{fill: 'lightgreen'}} slot="hide"/>
                  </OmniPasswordField>;`}],name:"Custom Icon Slot",description:"Set html content to display as the visibility indicators of the field.",args:{label:"Custom Icon Slot"}};export{pe as Clearable,fe as Custom_Clear_Slot,be as Custom_Icon_Slot,he as Disabled,me as Error_Label,de as Hint,O as Interactive,ne as Label,we as Prefix,ue as Suffix,ce as Value,ae as default};
//# sourceMappingURL=PasswordField.stories.js.map
