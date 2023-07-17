import"../chunks-js/chunk.TV5WP5UR.js";import{a as S}from"../chunks-js/chunk.AFJ2VLBG.js";import{b as m}from"../chunks-js/chunk.IEAYXHP4.js";import{c as d,d as c}from"../chunks-js/chunk.WXU7FCN5.js";import{e as n}from"../chunks-js/chunk.F2C2BPNZ.js";import{E as s}from"../chunks-js/chunk.ZCQBBFJF.js";import"../chunks-js/chunk.Z5LIJAXH.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.UHIDETPL.js";import"../chunks-js/chunk.KPSG3GC4.js";import"../chunks-js/chunk.MDYAUJ3Z.js";import"../chunks-js/chunk.VTL5CONA.js";import{a as k}from"../chunks-js/chunk.5DDJQYYG.js";import"../chunks-js/chunk.3U7QFP2Q.js";import"../chunks-js/chunk.LB764BBD.js";import{a as l}from"../chunks-js/chunk.XCXCHO25.js";import"../chunks-js/chunk.FT5UPVZS.js";import"../chunks-js/chunk.6C4LMRM7.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as i}from"../chunks-js/chunk.L3RZWW2F.js";import{h as w,m as f,p as y}from"../chunks-js/chunk.BF43NN75.js";f();y();var p=w(S(),1);var _={title:"UI Components/Radio",component:"omni-radio"},R={render:e=>i`
        <omni-radio
            data-testid="test-radio"
            label="${l(e.label)}"
            .data="${e.data}"
            hint="${l(e.hint)}"
            error="${l(e.error)}"
            ?checked="${e.checked}"
            ?disabled="${e.disabled}">${k(e["[Default Slot]"])}</omni-radio>
    `,frameworkSources:[{framework:"Vue",load:e=>s(R.render(e),void 0,t=>t.replace(" disabled",' :disabled="true"').replace(" checked",' :checked="true"'))}],name:"Interactive",args:{label:"",data:{},hint:"",error:"",checked:!1,disabled:!1,"[Default Slot]":void 0},play:async e=>{var r;let t=d(e.canvasElement).getByTestId("test-radio");t.focus();let a=(r=t.shadowRoot)==null?void 0:r.getElementById("content"),o=p.fn();t.addEventListener("value-change",o),await m.click(a,{pointerEventsCheck:0}),await c.keyDown(a,{key:" ",code:"Space"}),await n(o).toBeCalledTimes(2)}},E={render:e=>i` <omni-radio data-testid="test-radio" label="${e.label}"></omni-radio> `,frameworkSources:[{framework:"React",load:e=>`import { OmniRadio } from "@capitec/omni-components-react/radio";

const App = () => <OmniRadio${e.label?` label='${e.label}'`:""}/>;`}],description:"Set a text value to display next to the component.",args:{label:"Label"},play:async e=>{var o,r;let a=(o=d(e.canvasElement).getByTestId("test-radio").shadowRoot)==null?void 0:o.getElementById("label");await n(a).toHaveTextContent((r=E.args)==null?void 0:r.label)}},$={render:e=>i` <omni-radio data-testid="test-radio" label="${e.label}" hint="${e.hint}"></omni-radio> `,frameworkSources:[{framework:"React",load:e=>`import { OmniRadio } from "@capitec/omni-components-react/radio";

const App = () => <OmniRadio${e.label?` label='${e.label}'`:""}${e.hint?` hint='${e.hint}'`:""}/>;`}],description:"Set a text value to as a hint.",args:{label:"Hint",hint:"This is a hint"},play:async e=>{var o,r;let a=(o=d(e.canvasElement).getByTestId("test-radio").shadowRoot)==null?void 0:o.querySelector(".hint");await n(a).toHaveTextContent((r=$.args)==null?void 0:r.hint)}},u={name:"Error",render:e=>i` <omni-radio data-testid="test-radio" label="${e.label}" error="${e.error}"></omni-radio> `,frameworkSources:[{framework:"React",load:e=>`import { OmniRadio } from "@capitec/omni-components-react/radio";

const App = () => <OmniRadio${e.label?` label='${e.label}'`:""}${e.error?` error='${e.error}'`:""}/>;`}],description:"Set a text value to display as an error.",args:{label:"Error",error:"This is an error state"},play:async e=>{var o,r;let a=(o=d(e.canvasElement).getByTestId("test-radio").shadowRoot)==null?void 0:o.querySelector(".error");await n(a).toHaveTextContent((r=u.args)==null?void 0:r.error)}},z={render:e=>i` <omni-radio data-testid="test-radio" label="${e.label}" ?checked="${e.checked}"></omni-radio> `,frameworkSources:[{framework:"React",load:e=>`import { OmniRadio } from "@capitec/omni-components-react/radio";

const App = () => <OmniRadio${e.label?` label='${e.label}'`:""}${e.checked?" checked":""}/>;`},{framework:"Vue",load:e=>s(u.render(e),void 0,t=>t.replace(" disabled",' :disabled="true"').replace(" checked",' :checked="true"'))}],description:"Set the component to a checked state.",args:{label:"Checked",checked:!0},play:async e=>{var o;let a=(o=d(e.canvasElement).getByTestId("test-radio").shadowRoot)==null?void 0:o.querySelector(".checked");await n(a).toBeTruthy()}},v={render:e=>i` <omni-radio data-testid="test-radio" label="${e.label}" ?disabled="${e.disabled}"></omni-radio> `,frameworkSources:[{framework:"React",load:e=>`import { OmniRadio } from "@capitec/omni-components-react/radio";

const App = () => <OmniRadio${e.label?` label='${e.label}'`:""}${e.disabled?" disabled":""}/>;`},{framework:"Vue",load:e=>s(v.render(e),void 0,t=>t.replace(" disabled",' :disabled="true"').replace(" checked",' :checked="true"'))}],description:"Prevent interaction (pointer events).",args:{label:"Disabled",disabled:!0},play:async e=>{var b,h;let t=d(e.canvasElement).getByTestId("test-radio"),a=p.fn();t.addEventListener("value-change",a);let o=(b=t.shadowRoot)==null?void 0:b.querySelector(".disabled");await n(o).toBeTruthy();let r=(h=t.shadowRoot)==null?void 0:h.getElementById("content");await m.click(r,{pointerEventsCheck:0}),await c.keyDown(r,{key:" ",code:"Space"}),await n(a).toBeCalledTimes(0)}},G={render:()=>i`
        <omni-radio data-testid="test-radio">Slotted</omni-radio>
    `,frameworkSources:[{framework:"React",load:e=>`import { OmniRadio } from "@capitec/omni-components-react/radio";

const App = () => <OmniRadio>
                    Slotted
                  </OmniRadio>;`}],name:"Slot",description:"Set content to display within.",args:{},play:async e=>{let a=d(e.canvasElement).getByTestId("test-radio").innerHTML;await n(a).toEqual("Slotted")}};export{z as Checked,v as Disabled,u as Error_Label,$ as Hint,R as Interactive,E as Label,G as Slot,_ as default};
//# sourceMappingURL=Radio.stories.js.map
