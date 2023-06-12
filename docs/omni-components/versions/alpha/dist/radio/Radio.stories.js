import"../chunks-js/chunk.AFFACXUD.js";import{a as S}from"../chunks-js/chunk.JSH3M4FH.js";import{b as m}from"../chunks-js/chunk.XOIHXH3W.js";import{a as l}from"../chunks-js/chunk.XCXCHO25.js";import{b as n}from"../chunks-js/chunk.FVJIJQ42.js";import{c as i,d as c}from"../chunks-js/chunk.WPESAYH2.js";import"../chunks-js/chunk.TTUIP4EN.js";import{E as s}from"../chunks-js/chunk.LSBYP56E.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.Z5LIJAXH.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.VW2P7YAN.js";import"../chunks-js/chunk.MYG5FMLT.js";import"../chunks-js/chunk.2EDJFZZN.js";import{a as k}from"../chunks-js/chunk.N3FDHMD3.js";import"../chunks-js/chunk.YX3UUKJ3.js";import"../chunks-js/chunk.XUUOUKOL.js";import"../chunks-js/chunk.LB764BBD.js";import"../chunks-js/chunk.LUCH4Y6K.js";import"../chunks-js/chunk.PNTHLTQK.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as d}from"../chunks-js/chunk.L3RZWW2F.js";import{h as w,m as f,p as y}from"../chunks-js/chunk.BF43NN75.js";f();y();var p=w(S(),1);var _={title:"UI Components/Radio",component:"omni-radio"},R={render:e=>d`
        <omni-radio
            data-testid="test-radio"
            label="${l(e.label)}"
            .data="${e.data}"
            hint="${l(e.hint)}"
            error="${l(e.error)}"
            ?checked="${e.checked}"
            ?disabled="${e.disabled}">${k(e["[Default Slot]"])}</omni-radio>
    `,frameworkSources:[{framework:"Vue",load:e=>s(R.render(e),void 0,t=>t.replace(" disabled",' :disabled="true"').replace(" checked",' :checked="true"'))}],name:"Interactive",args:{label:"",data:{},hint:"",error:"",checked:!1,disabled:!1,"[Default Slot]":void 0},play:async e=>{var r;let t=i(e.canvasElement).getByTestId("test-radio");t.focus();let a=(r=t.shadowRoot)==null?void 0:r.getElementById("content"),o=p.fn();t.addEventListener("value-change",o),await m.click(a,{pointerEventsCheck:0}),await c.keyDown(a,{key:" ",code:"Space"}),await n(o).toBeCalledTimes(2)}},E={render:e=>d` <omni-radio data-testid="test-radio" label="${e.label}"></omni-radio> `,frameworkSources:[{framework:"React",load:e=>`import { OmniRadio } from "@capitec/omni-components-react/radio";

const App = () => <OmniRadio${e.label?` label='${e.label}'`:""}/>;`}],description:"Set a text value to display next to the component.",args:{label:"Label"},play:async e=>{var o,r;let a=(o=i(e.canvasElement).getByTestId("test-radio").shadowRoot)==null?void 0:o.getElementById("label");await n(a).toHaveTextContent((r=E.args)==null?void 0:r.label)}},$={render:e=>d` <omni-radio data-testid="test-radio" label="${e.label}" hint="${e.hint}"></omni-radio> `,frameworkSources:[{framework:"React",load:e=>`import { OmniRadio } from "@capitec/omni-components-react/radio";

const App = () => <OmniRadio${e.label?` label='${e.label}'`:""}${e.hint?` hint='${e.hint}'`:""}/>;`}],description:"Set a text value to as a hint.",args:{label:"Hint",hint:"This is a hint"},play:async e=>{var o,r;let a=(o=i(e.canvasElement).getByTestId("test-radio").shadowRoot)==null?void 0:o.querySelector(".hint");await n(a).toHaveTextContent((r=$.args)==null?void 0:r.hint)}},u={name:"Error",render:e=>d` <omni-radio data-testid="test-radio" label="${e.label}" error="${e.error}"></omni-radio> `,frameworkSources:[{framework:"React",load:e=>`import { OmniRadio } from "@capitec/omni-components-react/radio";

const App = () => <OmniRadio${e.label?` label='${e.label}'`:""}${e.error?` error='${e.error}'`:""}/>;`}],description:"Set a text value to display as an error.",args:{label:"Error",error:"This is an error state"},play:async e=>{var o,r;let a=(o=i(e.canvasElement).getByTestId("test-radio").shadowRoot)==null?void 0:o.querySelector(".error");await n(a).toHaveTextContent((r=u.args)==null?void 0:r.error)}},z={render:e=>d` <omni-radio data-testid="test-radio" label="${e.label}" ?checked="${e.checked}"></omni-radio> `,frameworkSources:[{framework:"React",load:e=>`import { OmniRadio } from "@capitec/omni-components-react/radio";

const App = () => <OmniRadio${e.label?` label='${e.label}'`:""}${e.checked?" checked":""}/>;`},{framework:"Vue",load:e=>s(u.render(e),void 0,t=>t.replace(" disabled",' :disabled="true"').replace(" checked",' :checked="true"'))}],description:"Set the component to a checked state.",args:{label:"Checked",checked:!0},play:async e=>{var o;let a=(o=i(e.canvasElement).getByTestId("test-radio").shadowRoot)==null?void 0:o.querySelector(".checked");await n(a).toBeTruthy()}},v={render:e=>d` <omni-radio data-testid="test-radio" label="${e.label}" ?disabled="${e.disabled}"></omni-radio> `,frameworkSources:[{framework:"React",load:e=>`import { OmniRadio } from "@capitec/omni-components-react/radio";

const App = () => <OmniRadio${e.label?` label='${e.label}'`:""}${e.disabled?" disabled":""}/>;`},{framework:"Vue",load:e=>s(v.render(e),void 0,t=>t.replace(" disabled",' :disabled="true"').replace(" checked",' :checked="true"'))}],description:"Prevent interaction (pointer events).",args:{label:"Disabled",disabled:!0},play:async e=>{var b,h;let t=i(e.canvasElement).getByTestId("test-radio"),a=p.fn();t.addEventListener("value-change",a);let o=(b=t.shadowRoot)==null?void 0:b.querySelector(".disabled");await n(o).toBeTruthy();let r=(h=t.shadowRoot)==null?void 0:h.getElementById("content");await m.click(r,{pointerEventsCheck:0}),await c.keyDown(r,{key:" ",code:"Space"}),await n(a).toBeCalledTimes(0)}},G={render:()=>d`
        <omni-radio data-testid="test-radio">Slotted</omni-radio>
    `,frameworkSources:[{framework:"React",load:e=>`import { OmniRadio } from "@capitec/omni-components-react/radio";

const App = () => <OmniRadio>
                    Slotted
                  </OmniRadio>;`}],name:"Slot",description:"Set content to display within.",args:{},play:async e=>{let a=i(e.canvasElement).getByTestId("test-radio").innerHTML;await n(a).toEqual("Slotted")}};export{z as Checked,v as Disabled,u as Error_Label,$ as Hint,R as Interactive,E as Label,G as Slot,_ as default};
//# sourceMappingURL=Radio.stories.js.map
