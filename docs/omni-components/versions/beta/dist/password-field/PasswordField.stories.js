import"../chunks-js/chunk.SWREBOPP.js";import"../chunks-js/chunk.6VLP6MWR.js";import"../chunks-js/chunk.ZGKKGWTJ.js";import"../chunks-js/chunk.WW2DFG2E.js";import"../chunks-js/chunk.NR4UGFLU.js";import"../chunks-js/chunk.NTTJMZDK.js";import{a as n,b as m,c,d as p,e as f,f as w,g as b,h as $,i as h}from"../chunks-js/chunk.3LYDVUYG.js";import"../chunks-js/chunk.X7FHWAJX.js";import"../chunks-js/chunk.Q2DE3UYO.js";import{E as d,m as i}from"../chunks-js/chunk.5CHB66EF.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.ZVGMNGQN.js";import"../chunks-js/chunk.AWN7JMZV.js";import"../chunks-js/chunk.SG4R3JV5.js";import"../chunks-js/chunk.ZAPR5LYJ.js";import"../chunks-js/chunk.FW3DTE4B.js";import{a as s}from"../chunks-js/chunk.BRAXTSQY.js";import"../chunks-js/chunk.JIWX2J4S.js";import"../chunks-js/chunk.77M5452K.js";import{a as l}from"../chunks-js/chunk.A5JWGKKF.js";import"../chunks-js/chunk.SFBF6ZN2.js";import"../chunks-js/chunk.PQH6VL5Y.js";import"../chunks-js/chunk.FMKVMQ43.js";import"../chunks-js/chunk.2KHELDCI.js";import{b as e,e as r}from"../chunks-js/chunk.6H2RNHNO.js";import{m as t,p as a}from"../chunks-js/chunk.BF43NN75.js";t();a();var x={render:o=>e`
    <omni-password-field
      data-testid="test-password-field"
      label="${l(o.label)}"
      value="${o.value}"
      hint="${l(o.hint)}"
      error="${l(o.error)}"
      ?disabled="${o.disabled}"
      ?clearable="${o.clearable}">${o.prefix?e`${`\r
`}${s(i("prefix",o.prefix))}`:r}
      ${o.clear?e`${`\r
`}${s(i("clear",o.clear))}`:r}${o.suffix?e`${`\r
`}${s(i("suffix",o.suffix))}`:r}${o.hide?e`${`\r
`}${s(i("hide",o.hide))}`:r}${o.show?e`${`\r
`}${s(i("show",o.show))}`:r}</omni-password-field>
  `,frameworkSources:[{framework:"Vue",load:o=>d(x.render(o),void 0,u=>u.replace(" disabled",' :disabled="true"').replace(" clearable",' :clearable="true"'))}],name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,clearable:!1,prefix:"",suffix:"",clear:"",hide:"",show:""}},N=n("omni-password-field"),R=m("omni-password-field"),j=c("omni-password-field"),q=p("omni-password-field","Password123"),z=b("omni-password-field","Password123"),G=$("omni-password-field","Password123"),J=f("omni-password-field"),K=w("omni-password-field"),Q=h("omni-password-field","Password123"),U={render:o=>e`
    <omni-password-field data-testid="test-password-field" label="${l(o.label)}" ?disabled="${o.disabled}">
      <omni-lock-open-icon style="fill: orange;" slot="show"></omni-lock-open-icon>
      <omni-lock-closed-icon style="fill: lightgreen;" slot="hide"></omni-lock-closed-icon>
    </omni-password-field>
  `,frameworkSources:[{framework:"React",load:o=>`import { OmniPasswordField } from "@capitec/omni-components-react/password-field";
import { OmniLockClosedIcon,OmniLockOpenIcon } from "@capitec/omni-components-react/icons";

const App = () => <OmniPasswordField${o.label?` label='${o.label}'`:""}${o.disabled?" disabled":""}>
                    <OmniLockOpenIcon style={{fill: 'orange'}} slot="show"/>
                    <OmniLockClosedIcon style={{fill: 'lightgreen'}} slot="hide"/>
                  </OmniPasswordField>;`}],name:"Custom Icon Slot",description:"Set html content to display as the visibility indicators of the field.",args:{label:"Custom Icon Slot"}};export{z as Clearable,G as Custom_Clear_Slot,U as Custom_Icon_Slot,Q as Disabled,j as Error_Label,R as Hint,x as Interactive,N as Label,J as Prefix,K as Suffix,q as Value};
//# sourceMappingURL=PasswordField.stories.js.map
