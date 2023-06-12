import"../chunks-js/chunk.STS3N5M2.js";import{a as b}from"../chunks-js/chunk.JSH3M4FH.js";import{b as o}from"../chunks-js/chunk.XOIHXH3W.js";import{a as s}from"../chunks-js/chunk.XCXCHO25.js";import{b as l}from"../chunks-js/chunk.FVJIJQ42.js";import{c as r}from"../chunks-js/chunk.WPESAYH2.js";import"../chunks-js/chunk.TTUIP4EN.js";import{E as p}from"../chunks-js/chunk.LSBYP56E.js";import"../chunks-js/chunk.Z5LIJAXH.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.VW2P7YAN.js";import"../chunks-js/chunk.MYG5FMLT.js";import"../chunks-js/chunk.2EDJFZZN.js";import{a as y}from"../chunks-js/chunk.N3FDHMD3.js";import"../chunks-js/chunk.YX3UUKJ3.js";import"../chunks-js/chunk.XUUOUKOL.js";import"../chunks-js/chunk.LB764BBD.js";import"../chunks-js/chunk.LUCH4Y6K.js";import"../chunks-js/chunk.PNTHLTQK.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as a}from"../chunks-js/chunk.L3RZWW2F.js";import{h,m as d,p as k}from"../chunks-js/chunk.BF43NN75.js";d();k();var c=h(b(),1);var u=["_self","_blank","_parent","_top"],M={title:"UI Components/Hyperlink",component:"omni-hyperlink",argTypes:{size:{control:"radio",options:["default","small"]},target:{control:"radio",options:u},"[Default Slot]":{control:"text"}}},f={render:e=>a`
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
  `,frameworkSources:[{framework:"Vue",load:e=>p(f.render(e),void 0,i=>i.replace(" disabled",' :disabled="true"').replace(" inline",' :inline="true"'))}],name:"Interactive",args:{label:"Click",href:"",disabled:!1,inline:!1,size:"","[Default Slot]":void 0},play:async e=>{let t=r(e.canvasElement).getByTestId("test-hyperlink"),n=c.fn();t.addEventListener("click",()=>n()),await o.click(t,{pointerEventsCheck:0}),await o.click(t,{pointerEventsCheck:0}),await l(n).toBeCalledTimes(2)}},v={render:e=>a`<omni-hyperlink data-testid="test-hyperlink" label="${e.label}"></omni-hyperlink>`,frameworkSources:[{framework:"React",load:e=>`import { OmniHyperlink } from "@capitec/omni-components-react/hyperlink";

const App = () => <OmniHyperlink${e.label?` label='${e.label}'`:""}/>;`}],name:"Label",description:"Set the text content of the component.",args:{label:"Click"},play:async e=>{var n,m;let t=r(e.canvasElement).getByTestId("test-hyperlink");await l((n=t.shadowRoot)==null?void 0:n.querySelector("a")).toHaveTextContent((m=v.args)==null?void 0:m.label)}},$={render:e=>a`<omni-hyperlink data-testid="test-hyperlink" label="${e.label}" size="${e.size}"></omni-hyperlink>`,frameworkSources:[{framework:"React",load:e=>`import { OmniHyperlink } from "@capitec/omni-components-react/hyperlink";

const App = () => <OmniHyperlink${e.label?` label='${e.label}'`:""}${e.size?` size='${e.size}'`:""}/>;`}],name:"Size",description:"Set the component to a predefined size.",args:{label:"Click",size:"small"},play:async e=>{var n;let t=r(e.canvasElement).getByTestId("test-hyperlink");await l(t).toHaveAttribute("size",(n=$.args)==null?void 0:n.size)}},g={render:e=>a`<omni-hyperlink data-testid="test-hyperlink" label="${e.label}" href="${e.href}" target="_blank"></omni-hyperlink>`,frameworkSources:[{framework:"React",load:e=>`import { OmniHyperlink } from "@capitec/omni-components-react/hyperlink";

const App = () => <OmniHyperlink${e.label?` label='${e.label}'`:""}${e.href?` href='${e.href}'`:""} target="_blank"/>;`}],name:"Href",description:"Set the hypertext reference.",args:{label:"Click",href:"https://example.com"},play:async e=>{var n;let t=r(e.canvasElement).getByTestId("test-hyperlink");await l(t).toHaveAttribute("href",(n=g.args)==null?void 0:n.href)}},N={render:e=>a`<omni-hyperlink
      data-testid="test-hyperlink"
      href="https://example.com"
      label="${e.label}"
      ?disabled="${e.disabled}"></omni-hyperlink>`,frameworkSources:[{framework:"React",load:e=>`import { OmniHyperlink } from "@capitec/omni-components-react/hyperlink";

const App = () => <OmniHyperlink href="https://example.com"${e.label?` label='${e.label}'`:""}${e.disabled?" disabled":""}/>;`},{framework:"Vue",load:e=>p(f.render(e),void 0,i=>i.replace(" disabled",' :disabled="true"').replace(" inline",' :inline="true"'))}],name:"Disabled",description:"Prevent interaction (pointer events).",args:{label:"Click",disabled:!0},play:async e=>{let t=r(e.canvasElement).getByTestId("test-hyperlink"),n=c.fn();t.addEventListener("click",()=>n()),await o.click(t,{pointerEventsCheck:0}),await o.click(t,{pointerEventsCheck:0}),await l(n).toBeCalledTimes(0)}},S={render:e=>a`<p data-testid="test-paragraph"> Inline <omni-hyperlink label="${e.label}" ?inline="${e.inline}"></omni-hyperlink> example </p>`,frameworkSources:[{framework:"React",load:e=>`import { OmniHyperlink } from "@capitec/omni-components-react/hyperlink";

const App = () => <p> Inline <OmniHyperlink${e.label?` label='${e.label}'`:""}${e.inline?" inline":""}/> example </p>;`},{framework:"Vue",load:e=>p(S.render(e),void 0,i=>i.replace(" disabled",' :disabled="true"').replace(" inline",' :inline="true"'))}],name:"Inline",description:"Render the component using its inline styles.",args:{label:"click",inline:!0},play:async e=>{let t=r(e.canvasElement).getByTestId("test-paragraph"),n=t.querySelector("omni-hyperlink");await l(t).toContainElement(n)}};export{N as Disabled,g as Href,S as Inline,f as Interactive,v as Label,$ as Size,M as default};
//# sourceMappingURL=Hyperlink.stories.js.map
