import"../chunks-js/chunk.TCPMPDTA.js";import"../chunks-js/chunk.7TCHE74C.js";import"../chunks-js/chunk.GUEBHYHC.js";import"../chunks-js/chunk.V3QRUW2P.js";import"../chunks-js/chunk.PZ5SAQK7.js";import"../chunks-js/chunk.CUAVHP62.js";import{a as d,b as m,c,d as p,e as f,f as w,g as b,h as $,i as h}from"../chunks-js/chunk.GMRLEMQH.js";import"../chunks-js/chunk.BMTJOHJJ.js";import"../chunks-js/chunk.A6RJOB4D.js";import"../chunks-js/chunk.34WDYOTS.js";import{E as n,m as i}from"../chunks-js/chunk.W4QDIT72.js";import"../chunks-js/chunk.YISFJ54N.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.LNQK3SMD.js";import{a as l}from"../chunks-js/chunk.C3AR2WR4.js";import"../chunks-js/chunk.RI2XHZQE.js";import"../chunks-js/chunk.MRDDZJ5F.js";import"../chunks-js/chunk.3IMCJ7UD.js";import{a as s}from"../chunks-js/chunk.J37ISGRJ.js";import"../chunks-js/chunk.CDUHNCVH.js";import"../chunks-js/chunk.DUTPH62F.js";import"../chunks-js/chunk.R7EUQMUJ.js";import"../chunks-js/chunk.E2CUUU4Y.js";import"../chunks-js/chunk.Y6UVSDXK.js";import{d as o,g as r}from"../chunks-js/chunk.UDCULUBW.js";import{m as t,p as a}from"../chunks-js/chunk.BF43NN75.js";t();a();var x={render:e=>o`
    <omni-password-field
      data-testid="test-password-field"
      label="${l(e.label)}"
      value="${e.value}"
      hint="${l(e.hint)}"
      error="${l(e.error)}"
      ?disabled="${e.disabled}"
      ?clearable="${e.clearable}">${e.prefix?o`${`\r
`}${s(i("prefix",e.prefix))}`:r}
      ${e.clear?o`${`\r
`}${s(i("clear",e.clear))}`:r}${e.suffix?o`${`\r
`}${s(i("suffix",e.suffix))}`:r}${e.hide?o`${`\r
`}${s(i("hide",e.hide))}`:r}${e.show?o`${`\r
`}${s(i("show",e.show))}`:r}</omni-password-field>
  `,frameworkSources:[{framework:"Vue",load:e=>n(x.render(e),void 0,u=>u.replace(" disabled",' :disabled="true"').replace(" clearable",' :clearable="true"'))}],name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,clearable:!1,prefix:"",suffix:"",clear:"",hide:"",show:""}},N=d("omni-password-field"),R=m("omni-password-field"),j=c("omni-password-field"),q=p("omni-password-field","Password123"),z=b("omni-password-field","Password123"),G=$("omni-password-field","Password123"),J=f("omni-password-field"),K=w("omni-password-field"),Q=h("omni-password-field","Password123"),U={render:e=>o`
    <omni-password-field data-testid="test-password-field" label="${l(e.label)}" ?disabled="${e.disabled}">
      <omni-lock-open-icon style="fill: orange;" slot="show"></omni-lock-open-icon>
      <omni-lock-closed-icon style="fill: lightgreen;" slot="hide"></omni-lock-closed-icon>
    </omni-password-field>
  `,frameworkSources:[{framework:"React",load:e=>`import { OmniPasswordField } from "@capitec/omni-components-react/password-field";
import { OmniLockClosedIcon,OmniLockOpenIcon } from "@capitec/omni-components-react/icons";

const App = () => <OmniPasswordField${e.label?` label='${e.label}'`:""}${e.disabled?" disabled":""}>
                    <OmniLockOpenIcon style={{fill: 'orange'}} slot="show"/>
                    <OmniLockClosedIcon style={{fill: 'lightgreen'}} slot="hide"/>
                  </OmniPasswordField>;`}],name:"Custom Icon Slot",description:"Set html content to display as the visibility indicators of the field.",args:{label:"Custom Icon Slot"}};export{z as Clearable,G as Custom_Clear_Slot,U as Custom_Icon_Slot,Q as Disabled,j as Error_Label,R as Hint,x as Interactive,N as Label,J as Prefix,K as Suffix,q as Value};
//# sourceMappingURL=PasswordField.stories.js.map
