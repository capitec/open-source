import"../chunks-js/chunk.EBHUZGAA.js";import{E as a}from"../chunks-js/chunk.KT3I5VOE.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.ZVGMNGQN.js";import"../chunks-js/chunk.BKR4BHUE.js";import"../chunks-js/chunk.BNDNPGO4.js";import"../chunks-js/chunk.N2G7JZB7.js";import"../chunks-js/chunk.UP6MNUGI.js";import{a as n}from"../chunks-js/chunk.GGHQSTCM.js";import"../chunks-js/chunk.XTJU4JXQ.js";import"../chunks-js/chunk.77M5452K.js";import{a as t}from"../chunks-js/chunk.A5JWGKKF.js";import"../chunks-js/chunk.VVHFAJKZ.js";import"../chunks-js/chunk.LAXESDIJ.js";import"../chunks-js/chunk.2KHELDCI.js";import{b as o}from"../chunks-js/chunk.6H2RNHNO.js";import{m as i,p as d}from"../chunks-js/chunk.BF43NN75.js";i();d();var l={render:e=>o`
        <omni-radio
            data-testid="test-radio"
            label="${t(e.label)}"
            .data="${e.data}"
            hint="${t(e.hint)}"
            error="${t(e.error)}"
            ?checked="${e.checked}"
            ?disabled="${e.disabled}">${n(e["[Default Slot]"])}</omni-radio>
    `,frameworkSources:[{framework:"Vue",load:e=>a(l.render(e),void 0,r=>r.replace(" disabled",' :disabled="true"').replace(" checked",' :checked="true"'))}],name:"Interactive",args:{label:"",data:{},hint:"",error:"",checked:!1,disabled:!1,"[Default Slot]":void 0}},C={render:e=>o` <omni-radio data-testid="test-radio" label="${e.label}"></omni-radio> `,frameworkSources:[{framework:"React",load:e=>`import { OmniRadio } from "@capitec/omni-components-react/radio";

const App = () => <OmniRadio${e.label?` label='${e.label}'`:""}/>;`}],description:"Set a text value to display next to the component.",args:{label:"Label"}},F={render:e=>o` <omni-radio data-testid="test-radio" label="${e.label}" hint="${e.hint}"></omni-radio> `,frameworkSources:[{framework:"React",load:e=>`import { OmniRadio } from "@capitec/omni-components-react/radio";

const App = () => <OmniRadio${e.label?` label='${e.label}'`:""}${e.hint?` hint='${e.hint}'`:""}/>;`}],description:"Set a text value to as a hint.",args:{label:"Hint",hint:"This is a hint"}},c={name:"Error",render:e=>o` <omni-radio data-testid="test-radio" label="${e.label}" error="${e.error}"></omni-radio> `,frameworkSources:[{framework:"React",load:e=>`import { OmniRadio } from "@capitec/omni-components-react/radio";

const App = () => <OmniRadio${e.label?` label='${e.label}'`:""}${e.error?` error='${e.error}'`:""}/>;`}],description:"Set a text value to display as an error.",args:{label:"Error",error:"This is an error state"}},v={render:e=>o` <omni-radio data-testid="test-radio" label="${e.label}" ?checked="${e.checked}"></omni-radio> `,frameworkSources:[{framework:"React",load:e=>`import { OmniRadio } from "@capitec/omni-components-react/radio";

const App = () => <OmniRadio${e.label?` label='${e.label}'`:""}${e.checked?" checked":""}/>;`},{framework:"Vue",load:e=>a(c.render(e),void 0,r=>r.replace(" disabled",' :disabled="true"').replace(" checked",' :checked="true"'))}],description:"Set the component to a checked state.",args:{label:"Checked",checked:!0}},m={render:e=>o` <omni-radio data-testid="test-radio" label="${e.label}" ?disabled="${e.disabled}"></omni-radio> `,frameworkSources:[{framework:"React",load:e=>`import { OmniRadio } from "@capitec/omni-components-react/radio";

const App = () => <OmniRadio${e.label?` label='${e.label}'`:""}${e.disabled?" disabled":""}/>;`},{framework:"Vue",load:e=>a(m.render(e),void 0,r=>r.replace(" disabled",' :disabled="true"').replace(" checked",' :checked="true"'))}],description:"Prevent interaction (pointer events).",args:{label:"Disabled",disabled:!0}},g={render:()=>o`
        <omni-radio data-testid="test-radio">Slotted</omni-radio>
    `,frameworkSources:[{framework:"React",load:e=>`import { OmniRadio } from "@capitec/omni-components-react/radio";

const App = () => <OmniRadio>
                    Slotted
                  </OmniRadio>;`}],name:"Slot",description:"Set content to display within.",args:{}};export{v as Checked,m as Disabled,c as Error_Label,F as Hint,l as Interactive,C as Label,g as Slot};
//# sourceMappingURL=Radio.stories.js.map
