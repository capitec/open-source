import"../chunks-js/chunk.7GTL3UTF.js";import{a as f}from"../chunks-js/chunk.IRJIQSYL.js";import{a as b}from"../chunks-js/chunk.G3QHRCKP.js";import{b as m}from"../chunks-js/chunk.MHLMY33S.js";import{a as r}from"../chunks-js/chunk.6QCQBNRL.js";import{c,d as l}from"../chunks-js/chunk.N6OKW4B2.js";import{d as a}from"../chunks-js/chunk.W54IKPJD.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as s}from"../chunks-js/chunk.F6MIXR4E.js";import{h as y,m as p,p as S}from"../chunks-js/chunk.BF43NN75.js";p();S();var h=y(f(),1);var q={title:"UI Components/Switch",component:"omni-switch"},j={render:t=>s`
    <omni-switch
      data-testid="test-switch"
      label="${r(t.label)}"
      .data="${t.data}"
      hint="${r(t.hint)}"
      error="${r(t.error)}"
      ?checked="${t.checked}"
      ?disabled="${t.disabled}">${b(t["[Default Slot]"])}</omni-switch>
  `,name:"Interactive",args:{label:"",data:{},hint:"",error:"",checked:!1,disabled:!1,"[Default Slot]":void 0},play:async t=>{var n;let i=c(t.canvasElement).getByTestId("test-switch"),o=h.fn();i.addEventListener("value-change",o);let e=(n=i.shadowRoot)==null?void 0:n.getElementById("content");await m.click(e,{pointerEventsCheck:0}),await l.keyDown(e,{key:" ",code:"Space"}),await a(o).toBeCalledTimes(2)}},E={render:t=>s` <omni-switch data-testid="test-switch" label="${t.label}"></omni-switch> `,frameworkSources:[{framework:"React",load:t=>`import { OmniSwitch } from "@capitec/omni-components-react/switch";

const App = () => <OmniSwitch${t.label?` label='${t.label}'`:""}/>;`}],description:"Set text content to display next to the component.",args:{label:"Label"},play:async t=>{var e,n;let o=(e=c(t.canvasElement).getByTestId("test-switch").shadowRoot)==null?void 0:e.querySelector(".label");await a(o).toHaveTextContent((n=E.args)==null?void 0:n.label)}},k={render:t=>s` <omni-switch data-testid="test-switch" label="${t.label}" hint="${t.hint}"></omni-switch> `,frameworkSources:[{framework:"React",load:t=>`import { OmniSwitch } from "@capitec/omni-components-react/switch";

const App = () => <OmniSwitch${t.label?` label='${t.label}'`:""}${t.hint?` hint='${t.hint}'`:""}/>;`}],description:"Set text content to display as a hint.",args:{label:"Hint",hint:"This is a hint"},play:async t=>{var e,n;let o=(e=c(t.canvasElement).getByTestId("test-switch").shadowRoot)==null?void 0:e.querySelector(".hint");await a(o).toHaveTextContent((n=k.args)==null?void 0:n.hint)}},$={name:"Error",render:t=>s` <omni-switch data-testid="test-switch" label="${t.label}" error="${t.error}"></omni-switch> `,frameworkSources:[{framework:"React",load:t=>`import { OmniSwitch } from "@capitec/omni-components-react/switch";

const App = () => <OmniSwitch${t.label?` label='${t.label}'`:""}${t.error?` error='${t.error}'`:""}/>;`}],description:"Set text content to display as an error.",args:{label:"Error",error:"This is an error state"},play:async t=>{var e,n;let o=(e=c(t.canvasElement).getByTestId("test-switch").shadowRoot)==null?void 0:e.querySelector(".error");await a(o).toHaveTextContent((n=$.args)==null?void 0:n.error)}},N={render:t=>s` <omni-switch data-testid="test-switch" label="${t.label}" ?checked="${t.checked}"></omni-switch> `,frameworkSources:[{framework:"React",load:t=>`import { OmniSwitch } from "@capitec/omni-components-react/switch";

const App = () => <OmniSwitch${t.label?` label='${t.label}'`:""}${t.checked?" checked":""}/>;`}],description:"Set the component to a checked state.",args:{label:"Checked",checked:!0},play:async t=>{var e;let o=(e=c(t.canvasElement).getByTestId("test-switch").shadowRoot)==null?void 0:e.querySelector(".checked");await a(o).toBeTruthy()}},P={render:t=>s` <omni-switch data-testid="test-switch" label="${t.label}" ?disabled="${t.disabled}"></omni-switch> `,frameworkSources:[{framework:"React",load:t=>`import { OmniSwitch } from "@capitec/omni-components-react/switch";

const App = () => <OmniSwitch${t.label?` label='${t.label}'`:""}${t.disabled?" disabled":""}/>;`}],description:"Prevent interaction (pointer events).",args:{label:"Disabled",disabled:!0},play:async t=>{var d,w;let i=c(t.canvasElement).getByTestId("test-switch"),o=h.fn();i.addEventListener("value-change",o);let e=(d=i.shadowRoot)==null?void 0:d.querySelector(".disabled");await a(e).toBeTruthy();let n=(w=i.shadowRoot)==null?void 0:w.getElementById("content");await m.click(n,{pointerEventsCheck:0}),await l.keyDown(n,{key:" ",code:"Space"}),await a(o).toBeCalledTimes(0)}},U={render:()=>s`
        <omni-switch data-testid="test-switch">Slotted</omni-switch>
    `,frameworkSources:[{framework:"React",load:t=>`import { OmniSwitch } from "@capitec/omni-components-react/switch";

const App = () => <OmniSwitch>
                    Slotted
                  </OmniSwitch>;`}],name:"Slot",description:"Set content to display within.",args:{},play:async t=>{let o=c(t.canvasElement).getByTestId("test-switch").innerHTML;await a(o).toEqual("Slotted")}};export{N as Checked,P as Disabled,$ as Error_Label,k as Hint,j as Interactive,E as Label,U as Slot,q as default};
//# sourceMappingURL=Switch.stories.js.map
