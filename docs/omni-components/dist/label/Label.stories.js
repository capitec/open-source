import"../chunks-js/chunk.I6KSHNKF.js";import{a}from"../chunks-js/chunk.C3AR2WR4.js";import{a as n}from"../chunks-js/chunk.J37ISGRJ.js";import"../chunks-js/chunk.E2CUUU4Y.js";import"../chunks-js/chunk.Y6UVSDXK.js";import{d as t}from"../chunks-js/chunk.UDCULUBW.js";import{m as l,p as o}from"../chunks-js/chunk.BF43NN75.js";l();o();var A={render:e=>t`<omni-label data-testid="test-label" label="${a(e.label)}" type="${e.type}">${n(e["[Default Slot]"])}</omni-label> `,name:"Interactive",args:{label:"Label",type:"default","[Default Slot]":void 0},frameworkSources:[{framework:"React",load:e=>`import { OmniLabel } from "@capitec/omni-components-react/label";

const App = () => <OmniLabel${e.label?` label='${e.label}'`:""}${e.type?` type='${e.type}'`:""}${e["[Default Slot]"]?`>
                      ${e["[Default Slot]"]}
                  </OmniLabel>`:"/>"};`}]},L={render:e=>t` <omni-label data-testid="test-label" label="${e.label}" type="${e.type}"> </omni-label> `,description:"Set the text to display with the styles of a title.",args:{label:"Title",type:"title"},frameworkSources:[{framework:"React",load:e=>`import { OmniLabel } from "@capitec/omni-components-react/label";

const App = () => <OmniLabel${e.label?` label='${e.label}'`:""}${e.type?` type='${e.type}'`:""}/>;`}]},O={render:e=>t` <omni-label data-testid="test-label" label="${e.label}" type="${e.type}"> </omni-label> `,frameworkSources:[{framework:"React",load:e=>`import { OmniLabel } from "@capitec/omni-components-react/label";

const App = () => <OmniLabel${e.label?` label='${e.label}'`:""}${e.type?` type='${e.type}'`:""}${e["[Default Slot]"]?`>
                      ${e["[Default Slot]"]}
                  </OmniLabel>`:"/>"};`}],description:"Set the text to display with the styles of a subtitle.",args:{label:"Subtitle",type:"subtitle"}},h={render:e=>t` <omni-label data-testid="test-label" label="${e.label}" type="${e.type}"></omni-label>`,frameworkSources:[{framework:"React",load:e=>`import { OmniLabel } from "@capitec/omni-components-react/label";

const App = () => <OmniLabel${e.label?` label='${e.label}'`:""}${e.type?` type='${e.type}'`:""}${e["[Default Slot]"]?`>
                      ${e["[Default Slot]"]}
                  </OmniLabel>`:"/>"};`}],description:"Set the text to display with a bold font style.",args:{label:"Strong",type:"strong"}},w={render:e=>t`
        <omni-label data-testid="test-label" type="${e.type}">
            <span>This is <span style="text-decoration: underline;">underlined</span> text inside a paragraph.</span>
        </omni-label>
    `,frameworkSources:[{framework:"React",load:e=>`import { OmniLabel } from "@capitec/omni-components-react/label";

const App = () => <OmniLabel${e.label?` label='${e.label}'`:""}${e.type?` type='${e.type}'`:""}>
                    <span>This is <span style={{textDecoration: 'underline'}}>underlined</span> text inside a paragraph.</span>
                  </OmniLabel>;`}],description:"Set html content to display within.",args:{label:"Slot",type:"strong"}};export{A as Interactive,w as Slot,h as Strong,O as Subtitle,L as Title};
//# sourceMappingURL=Label.stories.js.map
