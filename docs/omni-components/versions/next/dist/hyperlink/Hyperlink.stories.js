import"../chunks-js/chunk.J47TGO5H.js";import{a as h}from"../chunks-js/chunk.IRJIQSYL.js";import"../chunks-js/chunk.LCIHREUY.js";import{b as o}from"../chunks-js/chunk.MHLMY33S.js";import{a as s}from"../chunks-js/chunk.6QCQBNRL.js";import{c as i}from"../chunks-js/chunk.N6OKW4B2.js";import{d as l}from"../chunks-js/chunk.W54IKPJD.js";import{a as y}from"../chunks-js/chunk.32OT4JFD.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as a}from"../chunks-js/chunk.F6MIXR4E.js";import{h as d,m,p as k}from"../chunks-js/chunk.BF43NN75.js";m();k();var p=d(h(),1);var f=["_self","_blank","_parent","_top"],D={title:"UI Components/Hyperlink",component:"omni-hyperlink",argTypes:{size:{control:"radio",options:["default","small"]},target:{control:"radio",options:f},"[Default Slot]":{control:"text"}}},L={render:e=>a`
    <omni-hyperlink
      data-testid="test-hyperlink"
      label="${s(e.label)}"
      href="${s(e.href)}"
      target="${s(e.target)}"
      ?disabled="${e.disabled}"
      ?inline="${e.inline}"
      size="${e.size}">
      ${y(e["[Default Slot]"])}
    </omni-hyperlink>
  `,name:"Interactive",args:{label:"Click",href:"",disabled:!1,inline:!1,size:"","[Default Slot]":void 0},play:async e=>{let t=i(e.canvasElement).getByTestId("test-hyperlink"),n=p.fn();t.addEventListener("click",()=>n()),await o.click(t,{pointerEventsCheck:0}),await o.click(t,{pointerEventsCheck:0}),await l(n).toBeCalledTimes(2)}},b={render:e=>a`<omni-hyperlink data-testid="test-hyperlink" label="${e.label}"></omni-hyperlink>`,frameworkSources:[{framework:"React",load:e=>`import { OmniHyperlink } from "@capitec/omni-components-react/hyperlink";

const App = () => <OmniHyperlink${e.label?` label='${e.label}'`:""}/>;`}],name:"Label",description:"Set the text content of the component.",args:{label:"Click"},play:async e=>{var n,c;let t=i(e.canvasElement).getByTestId("test-hyperlink");await l((n=t.shadowRoot)==null?void 0:n.querySelector("a")).toHaveTextContent((c=b.args)==null?void 0:c.label)}},v={render:e=>a`<omni-hyperlink data-testid="test-hyperlink" label="${e.label}" size="${e.size}"></omni-hyperlink>`,frameworkSources:[{framework:"React",load:e=>`import { OmniHyperlink } from "@capitec/omni-components-react/hyperlink";

const App = () => <OmniHyperlink${e.label?` label='${e.label}'`:""}${e.size?` size='${e.size}'`:""}/>;`}],name:"Size",description:"Set the component to a predefined size.",args:{label:"Click",size:"small"},play:async e=>{var n;let t=i(e.canvasElement).getByTestId("test-hyperlink");await l(t).toHaveAttribute("size",(n=v.args)==null?void 0:n.size)}},$={render:e=>a`<omni-hyperlink data-testid="test-hyperlink" label="${e.label}" href="${e.href}" target="_blank"></omni-hyperlink>`,frameworkSources:[{framework:"React",load:e=>`import { OmniHyperlink } from "@capitec/omni-components-react/hyperlink";

const App = () => <OmniHyperlink${e.label?` label='${e.label}'`:""}${e.href?` href='${e.href}'`:""} target="_blank"/>;`}],name:"Href",description:"Set the hypertext reference.",args:{label:"Click",href:"https://example.com"},play:async e=>{var n;let t=i(e.canvasElement).getByTestId("test-hyperlink");await l(t).toHaveAttribute("href",(n=$.args)==null?void 0:n.href)}},_={render:e=>a`<omni-hyperlink
      data-testid="test-hyperlink"
      href="https://example.com"
      label="${e.label}"
      ?disabled="${e.disabled}"></omni-hyperlink>`,frameworkSources:[{framework:"React",load:e=>`import { OmniHyperlink } from "@capitec/omni-components-react/hyperlink";

const App = () => <OmniHyperlink href="https://example.com"${e.label?` label='${e.label}'`:""}${e.disabled?" disabled":""}/>;`}],name:"Disabled",description:"Prevent interaction (pointer events).",args:{label:"Click",disabled:!0},play:async e=>{let t=i(e.canvasElement).getByTestId("test-hyperlink"),n=p.fn();t.addEventListener("click",()=>n()),await o.click(t,{pointerEventsCheck:0}),await o.click(t,{pointerEventsCheck:0}),await l(n).toBeCalledTimes(0)}},j={render:e=>a`<p data-testid="test-paragraph"> Inline <omni-hyperlink label="${e.label}" ?inline="${e.inline}"></omni-hyperlink> example </p>`,frameworkSources:[{framework:"React",load:e=>`import { OmniHyperlink } from "@capitec/omni-components-react/hyperlink";

const App = () => <p> Inline <OmniHyperlink${e.label?` label='${e.label}'`:""}${e.inline?" inline":""}/> example </p>;`}],name:"Inline",description:"Render the component using its inline styles.",args:{label:"click",inline:!0},play:async e=>{let t=i(e.canvasElement).getByTestId("test-paragraph"),n=t.querySelector("omni-hyperlink");await l(t).toContainElement(n)}};export{_ as Disabled,$ as Href,j as Inline,L as Interactive,b as Label,v as Size,D as default};
//# sourceMappingURL=Hyperlink.stories.js.map
