import"../chunks-js/chunk.WL7VXR5S.js";import"../chunks-js/chunk.T4SDHHUM.js";import"../chunks-js/chunk.DF2XSCR7.js";import"../chunks-js/chunk.GUDVHTPA.js";import"../chunks-js/chunk.ZUGOSYS3.js";import"../chunks-js/chunk.KMIMSVOG.js";import{a as d,b as m,c,d as p,e as f,f as w,g as b,h as $,i as h}from"../chunks-js/chunk.WTSDFIPJ.js";import"../chunks-js/chunk.QQ4KC6E2.js";import"../chunks-js/chunk.PBJBFOZO.js";import{E as n,m as i}from"../chunks-js/chunk.VT33ZWJV.js";import"../chunks-js/chunk.VRVI2LVR.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.NLDNET67.js";import"../chunks-js/chunk.XWTONBU2.js";import"../chunks-js/chunk.YRSGKD7J.js";import"../chunks-js/chunk.6DDAVEXD.js";import{a as s}from"../chunks-js/chunk.2T6FOQVU.js";import"../chunks-js/chunk.BNDN7Y77.js";import"../chunks-js/chunk.3F3IIFA7.js";import{a as l}from"../chunks-js/chunk.W7VHYLAH.js";import"../chunks-js/chunk.BN6ZLWW4.js";import"../chunks-js/chunk.YTU7KEBB.js";import"../chunks-js/chunk.ZTHUBORR.js";import"../chunks-js/chunk.4PFNWG2J.js";import{d as o,g as r}from"../chunks-js/chunk.63YMDT6M.js";import{m as t,p as a}from"../chunks-js/chunk.BF43NN75.js";t();a();var x={render:e=>o`
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
