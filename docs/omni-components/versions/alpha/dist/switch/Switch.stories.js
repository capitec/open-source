import"../chunks-js/chunk.JRNEZBOT.js";import{E as i}from"../chunks-js/chunk.ZCQBBFJF.js";import"../chunks-js/chunk.Z5LIJAXH.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.UHIDETPL.js";import"../chunks-js/chunk.KPSG3GC4.js";import"../chunks-js/chunk.MDYAUJ3Z.js";import"../chunks-js/chunk.VTL5CONA.js";import{a}from"../chunks-js/chunk.5DDJQYYG.js";import"../chunks-js/chunk.3U7QFP2Q.js";import"../chunks-js/chunk.LB764BBD.js";import{a as r}from"../chunks-js/chunk.XCXCHO25.js";import"../chunks-js/chunk.FT5UPVZS.js";import"../chunks-js/chunk.6C4LMRM7.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as t}from"../chunks-js/chunk.L3RZWW2F.js";import{m as n,p as c}from"../chunks-js/chunk.BF43NN75.js";n();c();var g={title:"UI Components/Switch",component:"omni-switch"},l={render:e=>t`
    <omni-switch
      data-testid="test-switch"
      label="${r(e.label)}"
      .data="${e.data}"
      hint="${r(e.hint)}"
      error="${r(e.error)}"
      ?checked="${e.checked}"
      ?disabled="${e.disabled}">${a(e["[Default Slot]"])}</omni-switch>
  `,frameworkSources:[{framework:"Vue",load:e=>i(l.render(e),void 0,o=>o.replace(" disabled",' :disabled="true"').replace(" checked",' :checked="true"'))}],name:"Interactive",args:{label:"",data:{},hint:"",error:"",checked:!1,disabled:!1,"[Default Slot]":void 0}},v={render:e=>t` <omni-switch data-testid="test-switch" label="${e.label}"></omni-switch> `,frameworkSources:[{framework:"React",load:e=>`import { OmniSwitch } from "@capitec/omni-components-react/switch";

const App = () => <OmniSwitch${e.label?` label='${e.label}'`:""}/>;`}],description:"Set text content to display next to the component.",args:{label:"Label"}},E={render:e=>t` <omni-switch data-testid="test-switch" label="${e.label}" hint="${e.hint}"></omni-switch> `,frameworkSources:[{framework:"React",load:e=>`import { OmniSwitch } from "@capitec/omni-components-react/switch";

const App = () => <OmniSwitch${e.label?` label='${e.label}'`:""}${e.hint?` hint='${e.hint}'`:""}/>;`}],description:"Set text content to display as a hint.",args:{label:"Hint",hint:"This is a hint"}},R={name:"Error",render:e=>t` <omni-switch data-testid="test-switch" label="${e.label}" error="${e.error}"></omni-switch> `,frameworkSources:[{framework:"React",load:e=>`import { OmniSwitch } from "@capitec/omni-components-react/switch";

const App = () => <OmniSwitch${e.label?` label='${e.label}'`:""}${e.error?` error='${e.error}'`:""}/>;`}],description:"Set text content to display as an error.",args:{label:"Error",error:"This is an error state"}},s={render:e=>t` <omni-switch data-testid="test-switch" label="${e.label}" ?checked="${e.checked}"></omni-switch> `,frameworkSources:[{framework:"React",load:e=>`import { OmniSwitch } from "@capitec/omni-components-react/switch";

const App = () => <OmniSwitch${e.label?` label='${e.label}'`:""}${e.checked?" checked":""}/>;`},{framework:"Vue",load:e=>i(s.render(e),void 0,o=>o.replace(" disabled",' :disabled="true"').replace(" checked",' :checked="true"'))}],description:"Set the component to a checked state.",args:{label:"Checked",checked:!0}},m={render:e=>t` <omni-switch data-testid="test-switch" label="${e.label}" ?disabled="${e.disabled}"></omni-switch> `,frameworkSources:[{framework:"React",load:e=>`import { OmniSwitch } from "@capitec/omni-components-react/switch";

const App = () => <OmniSwitch${e.label?` label='${e.label}'`:""}${e.disabled?" disabled":""}/>;`},{framework:"Vue",load:e=>i(m.render(e),void 0,o=>o.replace(" disabled",' :disabled="true"').replace(" checked",' :checked="true"'))}],description:"Prevent interaction (pointer events).",args:{label:"Disabled",disabled:!0}},D={render:()=>t`
        <omni-switch data-testid="test-switch">Slotted</omni-switch>
    `,frameworkSources:[{framework:"React",load:e=>`import { OmniSwitch } from "@capitec/omni-components-react/switch";

const App = () => <OmniSwitch>
                    Slotted
                  </OmniSwitch>;`}],name:"Slot",description:"Set content to display within.",args:{}};export{s as Checked,m as Disabled,R as Error_Label,E as Hint,l as Interactive,v as Label,D as Slot,g as default};
//# sourceMappingURL=Switch.stories.js.map
