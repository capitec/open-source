import"../chunks-js/chunk.XGMN45FM.js";import{a as k}from"../chunks-js/chunk.IRJIQSYL.js";import{b as c}from"../chunks-js/chunk.MHLMY33S.js";import{a as l}from"../chunks-js/chunk.PJH7M65U.js";import{c as i,d as s}from"../chunks-js/chunk.N6OKW4B2.js";import{d as n}from"../chunks-js/chunk.W54IKPJD.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as d}from"../chunks-js/chunk.F6MIXR4E.js";import{h as f,m as h,p as y}from"../chunks-js/chunk.BF43NN75.js";h();y();var m=f(k(),1);var M={title:"UI Components/Radio",component:"omni-radio"},j={render:e=>d`
    <omni-radio
      data-testid="test-radio"
      label="${l(e.label)}"
      .data="${e.data}"
      hint="${l(e.hint)}"
      error="${l(e.error)}"
      ?checked="${e.checked}"
      ?disabled="${e.disabled}"></omni-radio>
  `,name:"Interactive",args:{label:"",data:{},hint:"",error:"",checked:!1,disabled:!1},play:async e=>{var o;let r=i(e.canvasElement).getByTestId("test-radio");r.focus();let a=(o=r.shadowRoot)==null?void 0:o.getElementById("content"),t=m.fn();r.addEventListener("value-change",t),await c.click(a,{pointerEventsCheck:0}),await s.keyDown(a,{key:" ",code:"Space"}),await n(t).toBeCalledTimes(2)}},w={render:e=>d` <omni-radio data-testid="test-radio" label="${e.label}"></omni-radio> `,frameworkSources:[{framework:"React",load:e=>`import { OmniRadio } from "@capitec/omni-components-react/radio";

const App = () => <OmniRadio${e.label?` label='${e.label}'`:""}/>;`}],description:"Set a text value to display next to the component.",args:{label:"Label"},play:async e=>{var t,o;let a=(t=i(e.canvasElement).getByTestId("test-radio").shadowRoot)==null?void 0:t.getElementById("label");await n(a).toHaveTextContent((o=w.args)==null?void 0:o.label)}},$={render:e=>d` <omni-radio data-testid="test-radio" label="${e.label}" hint="${e.hint}"></omni-radio> `,frameworkSources:[{framework:"React",load:e=>`import { OmniRadio } from "@capitec/omni-components-react/radio";

const App = () => <OmniRadio${e.label?` label='${e.label}'`:""}${e.hint?` hint='${e.hint}'`:""}/>;`}],description:"Set a text value to as a hint.",args:{label:"Hint",hint:"This is a hint"},play:async e=>{var t,o;let a=(t=i(e.canvasElement).getByTestId("test-radio").shadowRoot)==null?void 0:t.querySelector(".hint");await n(a).toHaveTextContent((o=$.args)==null?void 0:o.hint)}},R={name:"Error",render:e=>d` <omni-radio data-testid="test-radio" label="${e.label}" error="${e.error}"></omni-radio> `,frameworkSources:[{framework:"React",load:e=>`import { OmniRadio } from "@capitec/omni-components-react/radio";

const App = () => <OmniRadio${e.label?` label='${e.label}'`:""}${e.error?` error='${e.error}'`:""}/>;`}],description:"Set a text value to display as an error.",args:{label:"Error",error:"This is an error state"},play:async e=>{var t,o;let a=(t=i(e.canvasElement).getByTestId("test-radio").shadowRoot)==null?void 0:t.querySelector(".error");await n(a).toHaveTextContent((o=R.args)==null?void 0:o.error)}},q={render:e=>d` <omni-radio data-testid="test-radio" label="${e.label}" ?checked="${e.checked}"></omni-radio> `,frameworkSources:[{framework:"React",load:e=>`import { OmniRadio } from "@capitec/omni-components-react/radio";

const App = () => <OmniRadio${e.label?` label='${e.label}'`:""}${e.checked?" checked":""}/>;`}],description:"Set the component to a checked state.",args:{label:"Checked",checked:!0},play:async e=>{var t;let a=(t=i(e.canvasElement).getByTestId("test-radio").shadowRoot)==null?void 0:t.querySelector(".checked");await n(a).toBeTruthy()}},D={render:e=>d` <omni-radio data-testid="test-radio" label="${e.label}" ?disabled="${e.disabled}"></omni-radio> `,frameworkSources:[{framework:"React",load:e=>`import { OmniRadio } from "@capitec/omni-components-react/radio";

const App = () => <OmniRadio${e.label?` label='${e.label}'`:""}${e.disabled?" disabled":""}/>;`}],description:"Prevent interaction (pointer events).",args:{label:"Disabled",disabled:!0},play:async e=>{var p,b;let r=i(e.canvasElement).getByTestId("test-radio"),a=m.fn();r.addEventListener("value-change",a);let t=(p=r.shadowRoot)==null?void 0:p.querySelector(".disabled");await n(t).toBeTruthy();let o=(b=r.shadowRoot)==null?void 0:b.getElementById("content");await c.click(o,{pointerEventsCheck:0}),await s.keyDown(o,{key:" ",code:"Space"}),await n(a).toBeCalledTimes(0)}};export{q as Checked,D as Disabled,R as Error_Label,$ as Hint,j as Interactive,w as Label,M as default};
//# sourceMappingURL=Radio.stories.js.map
