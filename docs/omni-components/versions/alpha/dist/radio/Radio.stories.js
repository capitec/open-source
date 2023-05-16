import"../chunks-js/chunk.MVFK6HI4.js";import{a as R}from"../chunks-js/chunk.IRJIQSYL.js";import{a as f}from"../chunks-js/chunk.G3QHRCKP.js";import{b as c}from"../chunks-js/chunk.MHLMY33S.js";import{a as l}from"../chunks-js/chunk.6QCQBNRL.js";import{c as i,d as s}from"../chunks-js/chunk.N6OKW4B2.js";import{d as n}from"../chunks-js/chunk.W54IKPJD.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as d}from"../chunks-js/chunk.F6MIXR4E.js";import{h as w,m as h,p as y}from"../chunks-js/chunk.BF43NN75.js";h();y();var m=w(R(),1);var q={title:"UI Components/Radio",component:"omni-radio"},j={render:e=>d`
        <omni-radio
            data-testid="test-radio"
            label="${l(e.label)}"
            .data="${e.data}"
            hint="${l(e.hint)}"
            error="${l(e.error)}"
            ?checked="${e.checked}"
            ?disabled="${e.disabled}">${f(e["[Default Slot]"])}</omni-radio>
    `,name:"Interactive",args:{label:"",data:{},hint:"",error:"",checked:!1,disabled:!1,"[Default Slot]":void 0},play:async e=>{var a;let r=i(e.canvasElement).getByTestId("test-radio");r.focus();let o=(a=r.shadowRoot)==null?void 0:a.getElementById("content"),t=m.fn();r.addEventListener("value-change",t),await c.click(o,{pointerEventsCheck:0}),await s.keyDown(o,{key:" ",code:"Space"}),await n(t).toBeCalledTimes(2)}},S={render:e=>d` <omni-radio data-testid="test-radio" label="${e.label}"></omni-radio> `,frameworkSources:[{framework:"React",load:e=>`import { OmniRadio } from "@capitec/omni-components-react/radio";

const App = () => <OmniRadio${e.label?` label='${e.label}'`:""}/>;`}],description:"Set a text value to display next to the component.",args:{label:"Label"},play:async e=>{var t,a;let o=(t=i(e.canvasElement).getByTestId("test-radio").shadowRoot)==null?void 0:t.getElementById("label");await n(o).toHaveTextContent((a=S.args)==null?void 0:a.label)}},k={render:e=>d` <omni-radio data-testid="test-radio" label="${e.label}" hint="${e.hint}"></omni-radio> `,frameworkSources:[{framework:"React",load:e=>`import { OmniRadio } from "@capitec/omni-components-react/radio";

const App = () => <OmniRadio${e.label?` label='${e.label}'`:""}${e.hint?` hint='${e.hint}'`:""}/>;`}],description:"Set a text value to as a hint.",args:{label:"Hint",hint:"This is a hint"},play:async e=>{var t,a;let o=(t=i(e.canvasElement).getByTestId("test-radio").shadowRoot)==null?void 0:t.querySelector(".hint");await n(o).toHaveTextContent((a=k.args)==null?void 0:a.hint)}},E={name:"Error",render:e=>d` <omni-radio data-testid="test-radio" label="${e.label}" error="${e.error}"></omni-radio> `,frameworkSources:[{framework:"React",load:e=>`import { OmniRadio } from "@capitec/omni-components-react/radio";

const App = () => <OmniRadio${e.label?` label='${e.label}'`:""}${e.error?` error='${e.error}'`:""}/>;`}],description:"Set a text value to display as an error.",args:{label:"Error",error:"This is an error state"},play:async e=>{var t,a;let o=(t=i(e.canvasElement).getByTestId("test-radio").shadowRoot)==null?void 0:t.querySelector(".error");await n(o).toHaveTextContent((a=E.args)==null?void 0:a.error)}},N={render:e=>d` <omni-radio data-testid="test-radio" label="${e.label}" ?checked="${e.checked}"></omni-radio> `,frameworkSources:[{framework:"React",load:e=>`import { OmniRadio } from "@capitec/omni-components-react/radio";

const App = () => <OmniRadio${e.label?` label='${e.label}'`:""}${e.checked?" checked":""}/>;`}],description:"Set the component to a checked state.",args:{label:"Checked",checked:!0},play:async e=>{var t;let o=(t=i(e.canvasElement).getByTestId("test-radio").shadowRoot)==null?void 0:t.querySelector(".checked");await n(o).toBeTruthy()}},P={render:e=>d` <omni-radio data-testid="test-radio" label="${e.label}" ?disabled="${e.disabled}"></omni-radio> `,frameworkSources:[{framework:"React",load:e=>`import { OmniRadio } from "@capitec/omni-components-react/radio";

const App = () => <OmniRadio${e.label?` label='${e.label}'`:""}${e.disabled?" disabled":""}/>;`}],description:"Prevent interaction (pointer events).",args:{label:"Disabled",disabled:!0},play:async e=>{var p,b;let r=i(e.canvasElement).getByTestId("test-radio"),o=m.fn();r.addEventListener("value-change",o);let t=(p=r.shadowRoot)==null?void 0:p.querySelector(".disabled");await n(t).toBeTruthy();let a=(b=r.shadowRoot)==null?void 0:b.getElementById("content");await c.click(a,{pointerEventsCheck:0}),await s.keyDown(a,{key:" ",code:"Space"}),await n(o).toBeCalledTimes(0)}},U={render:()=>d`
        <omni-radio data-testid="test-radio">Slotted</omni-radio>
    `,frameworkSources:[{framework:"React",load:e=>`import { OmniRadio } from "@capitec/omni-components-react/radio";

const App = () => <OmniRadio>
                    Slotted
                  </OmniRadio>;`}],name:"Slot",description:"Set content to display within.",args:{},play:async e=>{let o=i(e.canvasElement).getByTestId("test-radio").innerHTML;await n(o).toEqual("Slotted")}};export{N as Checked,P as Disabled,E as Error_Label,k as Hint,j as Interactive,S as Label,U as Slot,q as default};
//# sourceMappingURL=Radio.stories.js.map
