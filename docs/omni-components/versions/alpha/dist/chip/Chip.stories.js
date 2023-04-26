import"../chunks-js/chunk.ILZ2JUE2.js";import"../chunks-js/chunk.VU6Z6OSH.js";import{a as f}from"../chunks-js/chunk.IRJIQSYL.js";import{a as m}from"../chunks-js/chunk.G3QHRCKP.js";import{b as s}from"../chunks-js/chunk.MHLMY33S.js";import{l as w,w as h}from"../chunks-js/chunk.R2G2NSIY.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.ZPV4YWBP.js";import{a as p}from"../chunks-js/chunk.PJH7M65U.js";import{c}from"../chunks-js/chunk.N6OKW4B2.js";import{d as i}from"../chunks-js/chunk.W54IKPJD.js";import"../chunks-js/chunk.B6SUKNHE.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as n,d as b}from"../chunks-js/chunk.F6MIXR4E.js";import{h as g,m as v,p as C}from"../chunks-js/chunk.BF43NN75.js";v();C();var d=g(f(),1);var N={title:"UI Components/Chip",component:"omni-chip",argTypes:{chip_icon:{control:"text"},close_icon:{control:"text"}}},q={render:e=>n`
    <omni-chip data-testid="test-chip" label="${p(e.label)}" ?closable=${e.closable} ?disabled="${e.disabled}"
      >${e.chip_icon?n`${`\r
`}${m(w("chip_icon",e.chip_icon))}`:b}${e.close_icon?n`${`\r
`}${m(w("close_icon",e.close_icon))}`:b}
    </omni-chip>
  `,name:"Interactive",args:{label:"Chip",closable:!0,disabled:!1,chip_icon:h`<svg slot="chip_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="fill: orange" width="100%" height="100%"><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM12 7a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 .743.648L17 12a.75.75 0 0 1-.75.75h-3.5v3.5a.75.75 0 0 1-.648.743L12 17a.75.75 0 0 1-.75-.75v-3.5h-3.5a.75.75 0 0 1-.743-.648L7 12a.75.75 0 0 1 .75-.75h3.5v-3.5a.75.75 0 0 1 .648-.743Z"/></svg>`,close_icon:""},play:async e=>{let o=c(e.canvasElement).getByTestId("test-chip"),t=d.fn();o.addEventListener("click",t),await s.click(o,{pointerEventsCheck:0}),await s.click(o,{pointerEventsCheck:0}),await i(t).toBeCalledTimes(2)}},y={render:e=>n` <omni-chip data-testid="test-chip" label="${p(e.label)}"> </omni-chip> `,frameworkSources:[{framework:"React",load:e=>`import { OmniChip } from "@capitec/omni-components-react/chip";

const App = () => <OmniChip${e.label?` label='${e.label}'`:""}/>;`}],name:"Label",description:"Set a text value to display within.",args:{label:"Label"},play:async e=>{var t,a;let o=c(e.canvasElement).getByTestId("test-chip");await i((t=o.shadowRoot)==null?void 0:t.getElementById("label")).toHaveTextContent((a=y.args)==null?void 0:a.label)}},P={render:e=>n` <omni-chip data-testid="test-chip" label="${p(e.label)}" ?closable=${e.closable}> </omni-chip> `,frameworkSources:[{framework:"React",load:e=>`import { OmniChip } from "@capitec/omni-components-react/chip";

const App = () => <OmniChip${e.label?` label='${e.label}'`:""}${e.closable?" closable":""}/>;`}],name:"Closable",description:"Add a close icon to the component.",args:{label:"Closable",closable:!0},play:async e=>{var l;let o=c(e.canvasElement).getByTestId("test-chip"),t=d.fn();o.addEventListener("remove",t);let a=(l=o.shadowRoot)==null?void 0:l.getElementById("closeButton");await s.click(a,{pointerEventsCheck:0}),await s.click(a,{pointerEventsCheck:0}),await i(t).toBeCalledTimes(2)}},U={render:e=>n` <omni-chip data-testid="test-chip" label="${p(e.label)}" ?disabled="${e.disabled}"> </omni-chip> `,frameworkSources:[{framework:"React",load:e=>`import { OmniChip } from "@capitec/omni-components-react/chip";

const App = () => <OmniChip${e.label?` label='${e.label}'`:""}${e.disabled?" disabled":""}/>;`}],name:"Disabled",description:"Prevent interaction (pointer events).",args:{label:"Disabled",disabled:!0},play:async e=>{var r;let o=c(e.canvasElement).getByTestId("test-chip"),a=((r=o.shadowRoot)==null?void 0:r.getElementById("chip")).classList.contains("disabled");await i(a).toBeTruthy();let l=d.fn();o.addEventListener("click",l),await i(()=>s.click(o)).rejects.toThrow(/pointer-events: none/),await i(()=>s.click(o)).rejects.toThrow(/pointer-events: none/),await i(l).toBeCalledTimes(0)}},z={render:e=>n`
    <omni-chip data-testid="test-chip" label="${p(e.label)}" ?closable=${e.closable}> ${m(e.chip_icon)} </omni-chip>
  `,frameworkSources:[{framework:"React",load:e=>`import { OmniChip } from "@capitec/omni-components-react/chip";

const App = () => <OmniChip${e.label?` label='${e.label}'`:""}>
                    <svg slot="chip_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" style={{fill: 'orange'}}><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM12 7a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 .743.648L17 12a.75.75 0 0 1-.75.75h-3.5v3.5a.75.75 0 0 1-.648.743L12 17a.75.75 0 0 1-.75-.75v-3.5h-3.5a.75.75 0 0 1-.743-.648L7 12a.75.75 0 0 1 .75-.75h3.5v-3.5a.75.75 0 0 1 .648-.743Z"/></svg>
                  </OmniChip>;`}],name:"Chip Icon",description:"Set html content to display as an icon.",args:{label:"Chip",closable:!1,chip_icon:h`<svg slot="chip_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" style="fill: orange"><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM12 7a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 .743.648L17 12a.75.75 0 0 1-.75.75h-3.5v3.5a.75.75 0 0 1-.648.743L12 17a.75.75 0 0 1-.75-.75v-3.5h-3.5a.75.75 0 0 1-.743-.648L7 12a.75.75 0 0 1 .75-.75h3.5v-3.5a.75.75 0 0 1 .648-.743Z"/></svg>`},play:async e=>{var l;let t=(l=c(e.canvasElement).getByTestId("test-chip").shadowRoot)==null?void 0:l.querySelector('slot[name="chip_icon"]');await i(t).toBeTruthy();let a=t==null?void 0:t.assignedElements().find(r=>r.tagName.toLowerCase()==="svg");await i(a).toBeTruthy()}},G={render:e=>n`
    <omni-chip data-testid="test-chip" label="${p(e.label)}" ?closable=${e.closable}>
      ${m(e.chip_icon)} ${m(e.close_icon)}
    </omni-chip>
  `,frameworkSources:[{framework:"React",load:e=>`import { OmniChip } from "@capitec/omni-components-react/chip";

const App = () => <OmniChip${e.label?` label='${e.label}'`:""}${e.closable?" closable":""}>
                    <svg slot="close_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%"><path d="m7.446 6.397.084.073L13 11.939l5.47-5.47a.75.75 0 0 1 1.133.977l-.073.084L14.061 13l5.47 5.47a.75.75 0 0 1-.977 1.133l-.084-.073L13 14.061l-5.47 5.47a.75.75 0 0 1-1.133-.977l.073-.084L11.939 13l-5.47-5.47a.75.75 0 0 1 .977-1.133Z"/></svg>
                  </OmniChip>;`}],name:"Custom Close Icon",description:"Set html content to display as the close icon.",args:{label:"Close",closable:!0,close_icon:h`<svg slot="close_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%"><path d="m7.446 6.397.084.073L13 11.939l5.47-5.47a.75.75 0 0 1 1.133.977l-.073.084L14.061 13l5.47 5.47a.75.75 0 0 1-.977 1.133l-.084-.073L13 14.061l-5.47 5.47a.75.75 0 0 1-1.133-.977l.073-.084L11.939 13l-5.47-5.47a.75.75 0 0 1 .977-1.133Z"/></svg>`},play:async e=>{var l;let t=(l=c(e.canvasElement).getByTestId("test-chip").shadowRoot)==null?void 0:l.querySelector("slot[name=close_icon]");await i(t).toBeTruthy();let a=t==null?void 0:t.assignedElements().find(r=>r.tagName.toLocaleLowerCase()==="svg");await i(a).toBeTruthy()}};export{z as Chip_Slot_Icon,P as Closable,G as Custom_Close_Icon,U as Disabled,q as Interactive,y as Label,N as default};
//# sourceMappingURL=Chip.stories.js.map
