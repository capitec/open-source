import"../chunks-js/chunk.B4HZBGVY.js";import{E as i}from"../chunks-js/chunk.W4QDIT72.js";import"../chunks-js/chunk.YISFJ54N.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.LNQK3SMD.js";import"../chunks-js/chunk.RI2XHZQE.js";import"../chunks-js/chunk.MRDDZJ5F.js";import"../chunks-js/chunk.3IMCJ7UD.js";import{a}from"../chunks-js/chunk.J37ISGRJ.js";import"../chunks-js/chunk.CDUHNCVH.js";import"../chunks-js/chunk.DUTPH62F.js";import{a as l}from"../chunks-js/chunk.C3AR2WR4.js";import"../chunks-js/chunk.R7EUQMUJ.js";import"../chunks-js/chunk.E2CUUU4Y.js";import"../chunks-js/chunk.Y6UVSDXK.js";import{d as n}from"../chunks-js/chunk.UDCULUBW.js";import{m as t,p as o}from"../chunks-js/chunk.BF43NN75.js";t();o();var p={render:e=>n`
    <omni-hyperlink
      data-testid="test-hyperlink"
      label="${l(e.label)}"
      href="${l(e.href)}"
      target="${l(e.target)}"
      ?disabled="${e.disabled}"
      ?inline="${e.inline}"
      size="${e.size}">
      ${a(e["[Default Slot]"])}
    </omni-hyperlink>
  `,frameworkSources:[{framework:"Vue",load:e=>i(p.render(e),void 0,r=>r.replace(" disabled",' :disabled="true"').replace(" inline",' :inline="true"'))}],name:"Interactive",args:{label:"Click",href:"",disabled:!1,inline:!1,size:"","[Default Slot]":void 0}},H={render:e=>n`<omni-hyperlink data-testid="test-hyperlink" label="${e.label}"></omni-hyperlink>`,frameworkSources:[{framework:"React",load:e=>`import { OmniHyperlink } from "@capitec/omni-components-react/hyperlink";

const App = () => <OmniHyperlink${e.label?` label='${e.label}'`:""}/>;`}],name:"Label",description:"Set the text content of the component.",args:{label:"Click"}},g={render:e=>n`<omni-hyperlink data-testid="test-hyperlink" label="${e.label}" size="${e.size}"></omni-hyperlink>`,frameworkSources:[{framework:"React",load:e=>`import { OmniHyperlink } from "@capitec/omni-components-react/hyperlink";

const App = () => <OmniHyperlink${e.label?` label='${e.label}'`:""}${e.size?` size='${e.size}'`:""}/>;`}],name:"Size",description:"Set the component to a predefined size.",args:{label:"Click",size:"small"}},C={render:e=>n`<omni-hyperlink data-testid="test-hyperlink" label="${e.label}" href="${e.href}" target="_blank"></omni-hyperlink>`,frameworkSources:[{framework:"React",load:e=>`import { OmniHyperlink } from "@capitec/omni-components-react/hyperlink";

const App = () => <OmniHyperlink${e.label?` label='${e.label}'`:""}${e.href?` href='${e.href}'`:""} target="_blank"/>;`}],name:"Href",description:"Set the hypertext reference.",args:{label:"Click",href:"https://example.com"}},O={render:e=>n`<omni-hyperlink
      data-testid="test-hyperlink"
      href="https://example.com"
      label="${e.label}"
      ?disabled="${e.disabled}"></omni-hyperlink>`,frameworkSources:[{framework:"React",load:e=>`import { OmniHyperlink } from "@capitec/omni-components-react/hyperlink";

const App = () => <OmniHyperlink href="https://example.com"${e.label?` label='${e.label}'`:""}${e.disabled?" disabled":""}/>;`},{framework:"Vue",load:e=>i(p.render(e),void 0,r=>r.replace(" disabled",' :disabled="true"').replace(" inline",' :inline="true"'))}],name:"Disabled",description:"Prevent interaction (pointer events).",args:{label:"Click",disabled:!0}},m={render:e=>n`<p data-testid="test-paragraph"> Inline <omni-hyperlink label="${e.label}" ?inline="${e.inline}"></omni-hyperlink> example </p>`,frameworkSources:[{framework:"React",load:e=>`import { OmniHyperlink } from "@capitec/omni-components-react/hyperlink";

const App = () => <p> Inline <OmniHyperlink${e.label?` label='${e.label}'`:""}${e.inline?" inline":""}/> example </p>;`},{framework:"Vue",load:e=>i(m.render(e),void 0,r=>r.replace(" disabled",' :disabled="true"').replace(" inline",' :inline="true"'))}],name:"Inline",description:"Render the component using its inline styles.",args:{label:"click",inline:!0}};export{O as Disabled,C as Href,m as Inline,p as Interactive,H as Label,g as Size};
//# sourceMappingURL=Hyperlink.stories.js.map
