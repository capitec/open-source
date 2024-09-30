import"../chunks-js/chunk.ZSJPKRLH.js";import"../chunks-js/chunk.WL7VXR5S.js";import"../chunks-js/chunk.T4SDHHUM.js";import"../chunks-js/chunk.GUDVHTPA.js";import"../chunks-js/chunk.ZUGOSYS3.js";import"../chunks-js/chunk.KMIMSVOG.js";import{a as m,b as p,c,d as f,e as w,f as b,g as h,h as x,i as $}from"../chunks-js/chunk.WTSDFIPJ.js";import"../chunks-js/chunk.QQ4KC6E2.js";import"../chunks-js/chunk.PBJBFOZO.js";import{E as d,m as i}from"../chunks-js/chunk.VT33ZWJV.js";import"../chunks-js/chunk.VRVI2LVR.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.NLDNET67.js";import"../chunks-js/chunk.XWTONBU2.js";import"../chunks-js/chunk.YRSGKD7J.js";import"../chunks-js/chunk.6DDAVEXD.js";import{a as t}from"../chunks-js/chunk.2T6FOQVU.js";import"../chunks-js/chunk.BNDN7Y77.js";import{a as n}from"../chunks-js/chunk.3F3IIFA7.js";import{a as l}from"../chunks-js/chunk.W7VHYLAH.js";import"../chunks-js/chunk.BN6ZLWW4.js";import"../chunks-js/chunk.YTU7KEBB.js";import"../chunks-js/chunk.ZTHUBORR.js";import"../chunks-js/chunk.4PFNWG2J.js";import{d as o,g as r}from"../chunks-js/chunk.63YMDT6M.js";import{m as s,p as a}from"../chunks-js/chunk.BF43NN75.js";s();a();var S={render:e=>o`
    <omni-password-field
      data-testid="test-password-field"
      label="${l(e.label)}"
      value="${e.value}"
      max-length=${e.maxLength}
      hint="${l(e.hint)}"
      error="${l(e.error)}"
      ?disabled="${e.disabled}"
      ?clearable="${e.clearable}">${e.prefix?o`${`\r
`}${t(i("prefix",e.prefix))}`:r}
      ${e.clear?o`${`\r
`}${t(i("clear",e.clear))}`:r}${e.suffix?o`${`\r
`}${t(i("suffix",e.suffix))}`:r}${e.hide?o`${`\r
`}${t(i("hide",e.hide))}`:r}${e.show?o`${`\r
`}${t(i("show",e.show))}`:r}</omni-password-field>
  `,frameworkSources:[{framework:"Vue",load:e=>d(S.render(e),void 0,u=>u.replace(" disabled",' :disabled="true"').replace(" clearable",' :clearable="true"'))}],name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,clearable:!1,prefix:"",suffix:"",clear:"",hide:"",show:""}},j={render:e=>o`
        <omni-password-field
            data-testid="test-password-field"
            label="${l(e.label)}"
            value="${e.value}"
            max-length=${n(e.maxLength)}>
        </omni-password-field>
    `,frameworkSources:[{framework:"React",load:e=>`import { OmniPasswordField } from "@capitec/omni-components-react/password-field";

const App = () => <OmniPasswordField${e.label?` label='${e.label}'`:""}${e.value?` value='${e.value}'`:""}${e.maxLength?` max-length='${e.maxLength}'`:""}/>;`}],name:"Max Length",description:"Limit the character input length based on the value provided.",args:{label:"Max Length",maxLength:5}},q=m("omni-password-field"),z=p("omni-password-field"),G=c("omni-password-field"),J=f("omni-password-field","Password123"),K=h("omni-password-field","Password123"),Q=x("omni-password-field","Password123"),U=w("omni-password-field"),W=b("omni-password-field"),X=$("omni-password-field","Password123"),Y={render:e=>o`
    <omni-password-field data-testid="test-password-field" label="${l(e.label)}" ?disabled="${e.disabled}">
      <omni-lock-open-icon style="fill: orange;" slot="show"></omni-lock-open-icon>
      <omni-lock-closed-icon style="fill: lightgreen;" slot="hide"></omni-lock-closed-icon>
    </omni-password-field>
  `,frameworkSources:[{framework:"React",load:e=>`import { OmniPasswordField } from "@capitec/omni-components-react/password-field";
import { OmniLockClosedIcon,OmniLockOpenIcon } from "@capitec/omni-components-react/icons";

const App = () => <OmniPasswordField${e.label?` label='${e.label}'`:""}${e.disabled?" disabled":""}>
                    <OmniLockOpenIcon style={{fill: 'orange'}} slot="show"/>
                    <OmniLockClosedIcon style={{fill: 'lightgreen'}} slot="hide"/>
                  </OmniPasswordField>;`}],name:"Custom Icon Slot",description:"Set html content to display as the visibility indicators of the field.",args:{label:"Custom Icon Slot"}};export{K as Clearable,Q as Custom_Clear_Slot,Y as Custom_Icon_Slot,X as Disabled,G as Error_Label,z as Hint,S as Interactive,q as Label,j as Max_Length,U as Prefix,W as Suffix,J as Value};
//# sourceMappingURL=PasswordField.stories.js.map
