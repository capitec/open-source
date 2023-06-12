import"../chunks-js/chunk.MJMXFVNU.js";import"../chunks-js/chunk.VB3ZKFMN.js";import{a as u}from"../chunks-js/chunk.JSH3M4FH.js";import{b as s}from"../chunks-js/chunk.XOIHXH3W.js";import{a as r}from"../chunks-js/chunk.XCXCHO25.js";import{b as a}from"../chunks-js/chunk.FVJIJQ42.js";import{c}from"../chunks-js/chunk.WPESAYH2.js";import"../chunks-js/chunk.TTUIP4EN.js";import{E as h,m as v,x as d}from"../chunks-js/chunk.LSBYP56E.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.Z5LIJAXH.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.VW2P7YAN.js";import"../chunks-js/chunk.MYG5FMLT.js";import"../chunks-js/chunk.2EDJFZZN.js";import{a as m}from"../chunks-js/chunk.N3FDHMD3.js";import"../chunks-js/chunk.YX3UUKJ3.js";import"../chunks-js/chunk.XUUOUKOL.js";import"../chunks-js/chunk.LB764BBD.js";import"../chunks-js/chunk.KRAWXAJA.js";import"../chunks-js/chunk.LUCH4Y6K.js";import"../chunks-js/chunk.PNTHLTQK.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as n,e as w}from"../chunks-js/chunk.L3RZWW2F.js";import{h as f,m as g,p as C}from"../chunks-js/chunk.BF43NN75.js";g();C();var b=f(u(),1);var z={title:"UI Components/Chip",component:"omni-chip",argTypes:{chip_icon:{control:"text"},close_icon:{control:"text"}}},y={render:e=>n`
    <omni-chip data-testid="test-chip" label="${r(e.label)}" ?closable=${e.closable} ?disabled="${e.disabled}"
      >${e.chip_icon?n`${`\r
`}${m(v("chip_icon",e.chip_icon))}`:w}${e.close_icon?n`${`\r
`}${m(v("close_icon",e.close_icon))}`:w}
    </omni-chip>
  `,frameworkSources:[{framework:"Vue",load:e=>h(y.render(e),void 0,t=>t.replace(" disabled",' :disabled="true"').replace(" closable",' :closable="true"'))}],name:"Interactive",args:{label:"Chip",closable:!0,disabled:!1,chip_icon:d`<svg slot="chip_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="fill: orange" width="100%" height="100%"><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM12 7a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 .743.648L17 12a.75.75 0 0 1-.75.75h-3.5v3.5a.75.75 0 0 1-.648.743L12 17a.75.75 0 0 1-.75-.75v-3.5h-3.5a.75.75 0 0 1-.743-.648L7 12a.75.75 0 0 1 .75-.75h3.5v-3.5a.75.75 0 0 1 .648-.743Z"/></svg>`,close_icon:""},play:async e=>{let t=c(e.canvasElement).getByTestId("test-chip"),o=b.fn();t.addEventListener("click",o),await s.click(t,{pointerEventsCheck:0}),await s.click(t,{pointerEventsCheck:0}),await a(o).toBeCalledTimes(2)}},$={render:e=>n` <omni-chip data-testid="test-chip" label="${r(e.label)}"> </omni-chip> `,frameworkSources:[{framework:"React",load:e=>`import { OmniChip } from "@capitec/omni-components-react/chip";

const App = () => <OmniChip${e.label?` label='${e.label}'`:""}/>;`}],name:"Label",description:"Set a text value to display within.",args:{label:"Label"},play:async e=>{var o,l;let t=c(e.canvasElement).getByTestId("test-chip");await a((o=t.shadowRoot)==null?void 0:o.getElementById("label")).toHaveTextContent((l=$.args)==null?void 0:l.label)}},L={render:e=>n` <omni-chip data-testid="test-chip" label="${r(e.label)}" ?closable=${e.closable}> </omni-chip> `,frameworkSources:[{framework:"React",load:e=>`import { OmniChip } from "@capitec/omni-components-react/chip";

const App = () => <OmniChip${e.label?` label='${e.label}'`:""}${e.closable?" closable":""}/>;`},{framework:"Vue",load:e=>h(L.render(e),void 0,t=>t.replace(" disabled",' :disabled="true"').replace(" closable",' :closable="true"'))}],name:"Closable",description:"Add a close icon to the component.",args:{label:"Closable",closable:!0},play:async e=>{var i;let t=c(e.canvasElement).getByTestId("test-chip"),o=b.fn();t.addEventListener("remove",o);let l=(i=t.shadowRoot)==null?void 0:i.getElementById("closeButton");await s.click(l,{pointerEventsCheck:0}),await s.click(l,{pointerEventsCheck:0}),await a(o).toBeCalledTimes(2)}},S={render:e=>n` <omni-chip data-testid="test-chip" label="${r(e.label)}" ?disabled="${e.disabled}"> </omni-chip> `,frameworkSources:[{framework:"React",load:e=>`import { OmniChip } from "@capitec/omni-components-react/chip";

const App = () => <OmniChip${e.label?` label='${e.label}'`:""}${e.disabled?" disabled":""}/>;`},{framework:"Vue",load:e=>h(S.render(e),void 0,t=>t.replace(" disabled",' :disabled="true"').replace(" closable",' :closable="true"'))}],name:"Disabled",description:"Prevent interaction (pointer events).",args:{label:"Disabled",disabled:!0},play:async e=>{var p;let t=c(e.canvasElement).getByTestId("test-chip"),l=((p=t.shadowRoot)==null?void 0:p.getElementById("chip")).classList.contains("disabled");await a(l).toBeTruthy();let i=b.fn();t.addEventListener("click",i),await a(()=>s.click(t)).rejects.toThrow(/pointer-events: none/),await a(()=>s.click(t)).rejects.toThrow(/pointer-events: none/),await a(i).toBeCalledTimes(0)}},G={render:e=>n`
    <omni-chip data-testid="test-chip" label="${r(e.label)}" ?closable=${e.closable}> ${m(e.chip_icon)} </omni-chip>
  `,frameworkSources:[{framework:"React",load:e=>`import { OmniChip } from "@capitec/omni-components-react/chip";

const App = () => <OmniChip${e.label?` label='${e.label}'`:""}>
                    <svg slot="chip_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" style={{fill: 'orange'}}><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM12 7a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 .743.648L17 12a.75.75 0 0 1-.75.75h-3.5v3.5a.75.75 0 0 1-.648.743L12 17a.75.75 0 0 1-.75-.75v-3.5h-3.5a.75.75 0 0 1-.743-.648L7 12a.75.75 0 0 1 .75-.75h3.5v-3.5a.75.75 0 0 1 .648-.743Z"/></svg>
                  </OmniChip>;`}],name:"Chip Icon",description:"Set html content to display as an icon.",args:{label:"Chip",closable:!1,chip_icon:d`<svg slot="chip_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" style="fill: orange"><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM12 7a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 .743.648L17 12a.75.75 0 0 1-.75.75h-3.5v3.5a.75.75 0 0 1-.648.743L12 17a.75.75 0 0 1-.75-.75v-3.5h-3.5a.75.75 0 0 1-.743-.648L7 12a.75.75 0 0 1 .75-.75h3.5v-3.5a.75.75 0 0 1 .648-.743Z"/></svg>`},play:async e=>{var i;let o=(i=c(e.canvasElement).getByTestId("test-chip").shadowRoot)==null?void 0:i.querySelector('slot[name="chip_icon"]');await a(o).toBeTruthy();let l=o==null?void 0:o.assignedElements().find(p=>p.tagName.toLowerCase()==="svg");await a(l).toBeTruthy()}},k={render:e=>n`
    <omni-chip data-testid="test-chip" label="${r(e.label)}" ?closable=${e.closable}>
      ${m(e.chip_icon)} ${m(e.close_icon)}
    </omni-chip>
  `,frameworkSources:[{framework:"React",load:e=>`import { OmniChip } from "@capitec/omni-components-react/chip";

const App = () => <OmniChip${e.label?` label='${e.label}'`:""}${e.closable?" closable":""}>
                    <svg slot="close_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%"><path d="m7.446 6.397.084.073L13 11.939l5.47-5.47a.75.75 0 0 1 1.133.977l-.073.084L14.061 13l5.47 5.47a.75.75 0 0 1-.977 1.133l-.084-.073L13 14.061l-5.47 5.47a.75.75 0 0 1-1.133-.977l.073-.084L11.939 13l-5.47-5.47a.75.75 0 0 1 .977-1.133Z"/></svg>
                  </OmniChip>;`},{framework:"Vue",load:e=>h(k.render(e),void 0,t=>t.replace(" disabled",' :disabled="true"').replace(" closable",' :closable="true"'))}],name:"Custom Close Icon",description:"Set html content to display as the close icon.",args:{label:"Close",closable:!0,close_icon:d`<svg slot="close_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%"><path d="m7.446 6.397.084.073L13 11.939l5.47-5.47a.75.75 0 0 1 1.133.977l-.073.084L14.061 13l5.47 5.47a.75.75 0 0 1-.977 1.133l-.084-.073L13 14.061l-5.47 5.47a.75.75 0 0 1-1.133-.977l.073-.084L11.939 13l-5.47-5.47a.75.75 0 0 1 .977-1.133Z"/></svg>`},play:async e=>{var i;let o=(i=c(e.canvasElement).getByTestId("test-chip").shadowRoot)==null?void 0:i.querySelector("slot[name=close_icon]");await a(o).toBeTruthy();let l=o==null?void 0:o.assignedElements().find(p=>p.tagName.toLocaleLowerCase()==="svg");await a(l).toBeTruthy()}};export{G as Chip_Slot_Icon,L as Closable,k as Custom_Close_Icon,S as Disabled,y as Interactive,$ as Label,z as default};
//# sourceMappingURL=Chip.stories.js.map
