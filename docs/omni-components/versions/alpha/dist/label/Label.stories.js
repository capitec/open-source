import"../chunks-js/chunk.VAH5TOPR.js";import{a}from"../chunks-js/chunk.N3FDHMD3.js";import{a as n}from"../chunks-js/chunk.XCXCHO25.js";import"../chunks-js/chunk.PNTHLTQK.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as t}from"../chunks-js/chunk.L3RZWW2F.js";import{m as l,p as o}from"../chunks-js/chunk.BF43NN75.js";l();o();var i=["default","title","subtitle","strong"],h={title:"UI Components/Label",component:"omni-label",argTypes:{type:{control:{type:"radio",options:i},"[Default Slot]":{control:"text"}}}},A={render:e=>t`<omni-label data-testid="test-label" label="${n(e.label)}" type="${e.type}">${a(e["[Default Slot]"])}</omni-label> `,name:"Interactive",args:{label:"Label",type:"default","[Default Slot]":void 0},frameworkSources:[{framework:"React",load:e=>`import { OmniLabel } from "@capitec/omni-components-react/label";

const App = () => <OmniLabel${e.label?` label='${e.label}'`:""}${e.type?` type='${e.type}'`:""}${e["[Default Slot]"]?`>
                      ${e["[Default Slot]"]}
                  </OmniLabel>`:"/>"};`}]},O={render:e=>t` <omni-label data-testid="test-label" label="${e.label}" type="${e.type}"> </omni-label> `,description:"Set the text to display with the styles of a title.",args:{label:"Title",type:"title"},frameworkSources:[{framework:"React",load:e=>`import { OmniLabel } from "@capitec/omni-components-react/label";

const App = () => <OmniLabel${e.label?` label='${e.label}'`:""}${e.type?` type='${e.type}'`:""}/>;`}]},w={render:e=>t` <omni-label data-testid="test-label" label="${e.label}" type="${e.type}"> </omni-label> `,frameworkSources:[{framework:"React",load:e=>`import { OmniLabel } from "@capitec/omni-components-react/label";

const App = () => <OmniLabel${e.label?` label='${e.label}'`:""}${e.type?` type='${e.type}'`:""}${e["[Default Slot]"]?`>
                      ${e["[Default Slot]"]}
                  </OmniLabel>`:"/>"};`}],description:"Set the text to display with the styles of a subtitle.",args:{label:"Subtitle",type:"subtitle"}},x={render:e=>t` <omni-label data-testid="test-label" label="${e.label}" type="${e.type}"></omni-label>`,frameworkSources:[{framework:"React",load:e=>`import { OmniLabel } from "@capitec/omni-components-react/label";

const App = () => <OmniLabel${e.label?` label='${e.label}'`:""}${e.type?` type='${e.type}'`:""}${e["[Default Slot]"]?`>
                      ${e["[Default Slot]"]}
                  </OmniLabel>`:"/>"};`}],description:"Set the text to display with a bold font style.",args:{label:"Strong",type:"strong"}},D={render:e=>t`
        <omni-label data-testid="test-label" type="${e.type}">
            <span>This is <span style="text-decoration: underline;">underlined</span> text inside a paragraph.</span>
        </omni-label>
    `,frameworkSources:[{framework:"React",load:e=>`import { OmniLabel } from "@capitec/omni-components-react/label";

const App = () => <OmniLabel${e.label?` label='${e.label}'`:""}${e.type?` type='${e.type}'`:""}>
                    <span>This is <span style={{textDecoration: 'underline'}}>underlined</span> text inside a paragraph.</span>
                  </OmniLabel>;`}],description:"Set html content to display within.",args:{label:"Slot",type:"strong"}};export{A as Interactive,D as Slot,x as Strong,w as Subtitle,O as Title,h as default};
//# sourceMappingURL=Label.stories.js.map
