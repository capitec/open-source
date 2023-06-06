import"../chunks-js/chunk.AFBN4ZVA.js";import"../chunks-js/chunk.IKEO2J7X.js";import"../chunks-js/chunk.KCLYGUKE.js";import"../chunks-js/chunk.4DK445VM.js";import"../chunks-js/chunk.YZDFU56K.js";import{a as C,b as P,c as E,d as L,e as k,f as B,g,h as v,i as A}from"../chunks-js/chunk.EWZHBVOA.js";import"../chunks-js/chunk.QHXD4ILF.js";import"../chunks-js/chunk.55232CD4.js";import"../chunks-js/chunk.Y2FNDKPS.js";import{a as H}from"../chunks-js/chunk.IRJIQSYL.js";import{a as x,b as p}from"../chunks-js/chunk.MHLMY33S.js";import{a as m}from"../chunks-js/chunk.XCXCHO25.js";import{b as f,c as w}from"../chunks-js/chunk.N6OKW4B2.js";import{d as i}from"../chunks-js/chunk.W54IKPJD.js";import{E as $,m as a}from"../chunks-js/chunk.VX4HTDBM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.Z5LIJAXH.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.KSLF5GY7.js";import"../chunks-js/chunk.XQ6LOMNM.js";import"../chunks-js/chunk.DVHQDKY6.js";import{a as l}from"../chunks-js/chunk.SUFNDWVH.js";import"../chunks-js/chunk.QFUUHCSV.js";import"../chunks-js/chunk.6HAYHFHP.js";import"../chunks-js/chunk.LB764BBD.js";import"../chunks-js/chunk.DGWR2I27.js";import"../chunks-js/chunk.KRAWXAJA.js";import"../chunks-js/chunk.RWAXFZOX.js";import"../chunks-js/chunk.QA3WYCV3.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as s,e as r}from"../chunks-js/chunk.L3RZWW2F.js";import{h as T,m as y,p as F}from"../chunks-js/chunk.BF43NN75.js";y();F();var I=T(H(),1);var ae={title:"UI Components/Password Field",component:"omni-password-field"},O={render:e=>s`
    <omni-password-field
      data-testid="test-password-field"
      label="${m(e.label)}"
      value="${e.value}"
      hint="${m(e.hint)}"
      error="${m(e.error)}"
      ?disabled="${e.disabled}"
      ?clearable="${e.clearable}">${e.prefix?s`${`\r
`}${l(a("prefix",e.prefix))}`:r}
      ${e.clear?s`${`\r
`}${l(a("clear",e.clear))}`:r}${e.suffix?s`${`\r
`}${l(a("suffix",e.suffix))}`:r}${e.hide?s`${`\r
`}${l(a("hide",e.hide))}`:r}${e.show?s`${`\r
`}${l(a("show",e.show))}`:r}</omni-password-field>
  `,frameworkSources:[{framework:"Vue",load:e=>$(O.render(e),void 0,o=>o.replace(" disabled",' :disabled="true"').replace(" clearable",' :clearable="true"'))}],name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,clearable:!1,prefix:"",suffix:"",clear:"",hide:"",show:""},play:async e=>{var h,S,b;let o=w(e.canvasElement).getByTestId("test-password-field");o.value="";let t=I.fn();o.addEventListener("input",t),o.addEventListener("click",t);let n=(h=o.shadowRoot)==null?void 0:h.getElementById("inputField");x(n);let d=(S=o.shadowRoot)==null?void 0:S.querySelector("slot[name=show]");await i(d).toBeTruthy(),await p.click(d,{pointerEventsCheck:0});let c=(b=o.shadowRoot)==null?void 0:b.querySelector("slot[name=hide]");await i(c).toBeTruthy(),await p.click(c,{pointerEventsCheck:0}),await p.type(n,"Value Update",{pointerEventsCheck:0});let u="Value Update";await f(()=>i(n).toHaveValue(u),{timeout:3e3}),await f(()=>i(t).toBeCalledTimes(u.length+1),{timeout:3e3})}},ne=C("omni-password-field"),de=P("omni-password-field"),me=E("omni-password-field"),ce=L("omni-password-field","Password123"),pe=g("omni-password-field","Password123"),fe=v("omni-password-field","Password123"),we=k("omni-password-field"),ue=B("omni-password-field"),he=A("omni-password-field","Password123"),Se={render:e=>s`
    <omni-password-field data-testid="test-password-field" label="${m(e.label)}" ?disabled="${e.disabled}">
      <omni-lock-open-icon style="fill: orange;" slot="show"></omni-lock-open-icon>
      <omni-lock-closed-icon style="fill: lightgreen;" slot="hide"></omni-lock-closed-icon>
    </omni-password-field>
  `,frameworkSources:[{framework:"React",load:e=>`import { OmniPasswordField } from "@capitec/omni-components-react/password-field";
import { OmniLockClosedIcon,OmniLockOpenIcon } from "@capitec/omni-components-react/icons";

const App = () => <OmniPasswordField${e.label?` label='${e.label}'`:""}${e.disabled?" disabled":""}>
                    <OmniLockOpenIcon style={{fill: 'orange'}} slot="show"/>
                    <OmniLockClosedIcon style={{fill: 'lightgreen'}} slot="hide"/>
                  </OmniPasswordField>;`}],name:"Custom Icon Slot",description:"Set html content to display as the visibility indicators of the field.",args:{label:"Custom Icon Slot"},play:async e=>{var d;let t=(d=w(e.canvasElement).getByTestId("test-password-field").shadowRoot)==null?void 0:d.querySelector("slot[name=show]");await i(t).toBeTruthy();let n=t==null?void 0:t.assignedElements().find(c=>c.tagName.toLocaleLowerCase()==="omni-lock-open-icon");await i(n).toBeTruthy()}};export{pe as Clearable,fe as Custom_Clear_Slot,Se as Custom_Icon_Slot,he as Disabled,me as Error_Label,de as Hint,O as Interactive,ne as Label,we as Prefix,ue as Suffix,ce as Value,ae as default};
//# sourceMappingURL=PasswordField.stories.js.map
