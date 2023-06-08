import"../chunks-js/chunk.S45PKFPQ.js";import{a as b}from"../chunks-js/chunk.XCXCHO25.js";import{b as n}from"../chunks-js/chunk.FVJIJQ42.js";import{c as a}from"../chunks-js/chunk.WPESAYH2.js";import"../chunks-js/chunk.TTUIP4EN.js";import{a as p}from"../chunks-js/chunk.SUFNDWVH.js";import"../chunks-js/chunk.QA3WYCV3.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as o}from"../chunks-js/chunk.L3RZWW2F.js";import{m as r,p as s}from"../chunks-js/chunk.BF43NN75.js";r();s();var y=["default","title","subtitle","strong"],F={title:"UI Components/Label",component:"omni-label",argTypes:{type:{control:{type:"radio",options:y},"[Default Slot]":{control:"text"}}}},d={render:e=>o`<omni-label data-testid="test-label" label="${b(e.label)}" type="${e.type}">${p(e["[Default Slot]"])}</omni-label> `,name:"Interactive",args:{label:"Label",type:"default","[Default Slot]":void 0},play:async e=>{var t;let l=a(e.canvasElement).getByTestId("test-label");await n(l.shadowRoot).toHaveTextContent((t=d.args)==null?void 0:t.label)},frameworkSources:[{framework:"React",load:e=>`import { OmniLabel } from "@capitec/omni-components-react/label";

const App = () => <OmniLabel${e.label?` label='${e.label}'`:""}${e.type?` type='${e.type}'`:""}${e["[Default Slot]"]?`>
                      ${e["[Default Slot]"]}
                  </OmniLabel>`:"/>"};`}]},f={render:e=>o` <omni-label data-testid="test-label" label="${e.label}" type="${e.type}"> </omni-label> `,description:"Set the text to display with the styles of a title.",args:{label:"Title",type:"title"},play:async e=>{var t;let l=a(e.canvasElement).getByTestId("test-label");await n(l.shadowRoot).toHaveTextContent((t=f.args)==null?void 0:t.label)},frameworkSources:[{framework:"React",load:e=>`import { OmniLabel } from "@capitec/omni-components-react/label";

const App = () => <OmniLabel${e.label?` label='${e.label}'`:""}${e.type?` type='${e.type}'`:""}/>;`}]},S={render:e=>o` <omni-label data-testid="test-label" label="${e.label}" type="${e.type}"> </omni-label> `,frameworkSources:[{framework:"React",load:e=>`import { OmniLabel } from "@capitec/omni-components-react/label";

const App = () => <OmniLabel${e.label?` label='${e.label}'`:""}${e.type?` type='${e.type}'`:""}${e["[Default Slot]"]?`>
                      ${e["[Default Slot]"]}
                  </OmniLabel>`:"/>"};`}],description:"Set the text to display with the styles of a subtitle.",args:{label:"Subtitle",type:"subtitle"},play:async e=>{var t;let l=a(e.canvasElement).getByTestId("test-label");await n(l.shadowRoot).toHaveTextContent((t=S.args)==null?void 0:t.label)}},$={render:e=>o` <omni-label data-testid="test-label" label="${e.label}" type="${e.type}"></omni-label>`,frameworkSources:[{framework:"React",load:e=>`import { OmniLabel } from "@capitec/omni-components-react/label";

const App = () => <OmniLabel${e.label?` label='${e.label}'`:""}${e.type?` type='${e.type}'`:""}${e["[Default Slot]"]?`>
                      ${e["[Default Slot]"]}
                  </OmniLabel>`:"/>"};`}],description:"Set the text to display with a bold font style.",args:{label:"Strong",type:"strong"},play:async e=>{var t;let l=a(e.canvasElement).getByTestId("test-label");await n(l.shadowRoot).toHaveTextContent((t=$.args)==null?void 0:t.label)}},B={render:e=>o`
        <omni-label data-testid="test-label" type="${e.type}">
            <span>This is <span style="text-decoration: underline;">underlined</span> text inside a paragraph.</span>
        </omni-label>
    `,frameworkSources:[{framework:"React",load:e=>`import { OmniLabel } from "@capitec/omni-components-react/label";

const App = () => <OmniLabel${e.label?` label='${e.label}'`:""}${e.type?` type='${e.type}'`:""}>
                    <span>This is <span style={{textDecoration: 'underline'}}>underlined</span> text inside a paragraph.</span>
                  </OmniLabel>;`}],description:"Set html content to display within.",args:{label:"Slot",type:"strong"},play:async e=>{var i;let t=(i=a(e.canvasElement).getByTestId("test-label").shadowRoot)==null?void 0:i.querySelector("slot"),m=t==null?void 0:t.assignedElements().find(c=>c.innerHTML.includes("text inside a paragraph."));await n(m).toBeTruthy()}};export{d as Interactive,B as Slot,$ as Strong,S as Subtitle,f as Title,F as default};
//# sourceMappingURL=Label.stories.js.map
