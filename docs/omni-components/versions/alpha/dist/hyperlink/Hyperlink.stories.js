import"../chunks-js/chunk.GHDDGRR5.js";import{E as i}from"../chunks-js/chunk.7KM4B723.js";import"../chunks-js/chunk.Z5LIJAXH.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.UHIDETPL.js";import"../chunks-js/chunk.KPSG3GC4.js";import"../chunks-js/chunk.MDYAUJ3Z.js";import"../chunks-js/chunk.VTL5CONA.js";import{a}from"../chunks-js/chunk.5DDJQYYG.js";import"../chunks-js/chunk.3U7QFP2Q.js";import"../chunks-js/chunk.LB764BBD.js";import{a as t}from"../chunks-js/chunk.XCXCHO25.js";import"../chunks-js/chunk.FT5UPVZS.js";import"../chunks-js/chunk.6C4LMRM7.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as n}from"../chunks-js/chunk.L3RZWW2F.js";import{m as l,p as o}from"../chunks-js/chunk.BF43NN75.js";l();o();var m=["_self","_blank","_parent","_top"],H={title:"UI Components/Hyperlink",component:"omni-hyperlink",argTypes:{size:{control:"radio",options:["default","small"]},target:{control:"radio",options:m},"[Default Slot]":{control:"text"}}},p={render:e=>n`
    <omni-hyperlink
      data-testid="test-hyperlink"
      label="${t(e.label)}"
      href="${t(e.href)}"
      target="${t(e.target)}"
      ?disabled="${e.disabled}"
      ?inline="${e.inline}"
      size="${e.size}">
      ${a(e["[Default Slot]"])}
    </omni-hyperlink>
  `,frameworkSources:[{framework:"Vue",load:e=>i(p.render(e),void 0,r=>r.replace(" disabled",' :disabled="true"').replace(" inline",' :inline="true"'))}],name:"Interactive",args:{label:"Click",href:"",disabled:!1,inline:!1,size:"","[Default Slot]":void 0}},F={render:e=>n`<omni-hyperlink data-testid="test-hyperlink" label="${e.label}"></omni-hyperlink>`,frameworkSources:[{framework:"React",load:e=>`import { OmniHyperlink } from "@capitec/omni-components-react/hyperlink";

const App = () => <OmniHyperlink${e.label?` label='${e.label}'`:""}/>;`}],name:"Label",description:"Set the text content of the component.",args:{label:"Click"}},O={render:e=>n`<omni-hyperlink data-testid="test-hyperlink" label="${e.label}" size="${e.size}"></omni-hyperlink>`,frameworkSources:[{framework:"React",load:e=>`import { OmniHyperlink } from "@capitec/omni-components-react/hyperlink";

const App = () => <OmniHyperlink${e.label?` label='${e.label}'`:""}${e.size?` size='${e.size}'`:""}/>;`}],name:"Size",description:"Set the component to a predefined size.",args:{label:"Click",size:"small"}},I={render:e=>n`<omni-hyperlink data-testid="test-hyperlink" label="${e.label}" href="${e.href}" target="_blank"></omni-hyperlink>`,frameworkSources:[{framework:"React",load:e=>`import { OmniHyperlink } from "@capitec/omni-components-react/hyperlink";

const App = () => <OmniHyperlink${e.label?` label='${e.label}'`:""}${e.href?` href='${e.href}'`:""} target="_blank"/>;`}],name:"Href",description:"Set the hypertext reference.",args:{label:"Click",href:"https://example.com"}},D={render:e=>n`<omni-hyperlink
      data-testid="test-hyperlink"
      href="https://example.com"
      label="${e.label}"
      ?disabled="${e.disabled}"></omni-hyperlink>`,frameworkSources:[{framework:"React",load:e=>`import { OmniHyperlink } from "@capitec/omni-components-react/hyperlink";

const App = () => <OmniHyperlink href="https://example.com"${e.label?` label='${e.label}'`:""}${e.disabled?" disabled":""}/>;`},{framework:"Vue",load:e=>i(p.render(e),void 0,r=>r.replace(" disabled",' :disabled="true"').replace(" inline",' :inline="true"'))}],name:"Disabled",description:"Prevent interaction (pointer events).",args:{label:"Click",disabled:!0}},s={render:e=>n`<p data-testid="test-paragraph"> Inline <omni-hyperlink label="${e.label}" ?inline="${e.inline}"></omni-hyperlink> example </p>`,frameworkSources:[{framework:"React",load:e=>`import { OmniHyperlink } from "@capitec/omni-components-react/hyperlink";

const App = () => <p> Inline <OmniHyperlink${e.label?` label='${e.label}'`:""}${e.inline?" inline":""}/> example </p>;`},{framework:"Vue",load:e=>i(s.render(e),void 0,r=>r.replace(" disabled",' :disabled="true"').replace(" inline",' :inline="true"'))}],name:"Inline",description:"Render the component using its inline styles.",args:{label:"click",inline:!0}};export{D as Disabled,I as Href,s as Inline,p as Interactive,F as Label,O as Size,H as default};
//# sourceMappingURL=Hyperlink.stories.js.map
