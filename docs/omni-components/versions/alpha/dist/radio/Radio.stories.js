import"../chunks-js/chunk.ART4F7UD.js";import{E as a}from"../chunks-js/chunk.J2JRUFHY.js";import"../chunks-js/chunk.VRVI2LVR.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.NLDNET67.js";import"../chunks-js/chunk.3ZNYNTRF.js";import"../chunks-js/chunk.YRSGKD7J.js";import"../chunks-js/chunk.6DDAVEXD.js";import{a as n}from"../chunks-js/chunk.2T6FOQVU.js";import"../chunks-js/chunk.BNDN7Y77.js";import"../chunks-js/chunk.3F3IIFA7.js";import{a as t}from"../chunks-js/chunk.W7VHYLAH.js";import"../chunks-js/chunk.YTU7KEBB.js";import"../chunks-js/chunk.ZTHUBORR.js";import"../chunks-js/chunk.4PFNWG2J.js";import{d as o}from"../chunks-js/chunk.63YMDT6M.js";import{m as i,p as d}from"../chunks-js/chunk.BF43NN75.js";i();d();var l={render:e=>o`
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
    `,frameworkSources:[{framework:"React",load:()=>`import { OmniRadio } from "@capitec/omni-components-react/radio";

const App = () => <OmniRadio>
                    Slotted
                  </OmniRadio>;`}],name:"Slot",description:"Set content to display within.",args:{}};export{v as Checked,m as Disabled,c as Error_Label,F as Hint,l as Interactive,C as Label,g as Slot};
//# sourceMappingURL=Radio.stories.js.map
