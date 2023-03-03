import"../chunks-js/chunk.I3GO6H37.js";import"../chunks-js/chunk.HI2MFVRC.js";import{b as l}from"../chunks-js/chunk.AP33UQK7.js";import{k as b,u as h}from"../chunks-js/chunk.WA6C3RAL.js";import"../chunks-js/chunk.MPJVWYSG.js";import"../chunks-js/chunk.HEGWAMTE.js";import"../chunks-js/chunk.BMVIQMEU.js";import"../chunks-js/chunk.FJG2EZL6.js";import{a as c}from"../chunks-js/chunk.CFP25WDL.js";import{a as i}from"../chunks-js/chunk.5TGJLLLS.js";import{a as p}from"../chunks-js/chunk.7QF4VYJR.js";import{a as y}from"../chunks-js/chunk.IPQWBGOC.js";import{c as s}from"../chunks-js/chunk.25QDP255.js";import"../chunks-js/chunk.B62LVUNQ.js";import"../chunks-js/chunk.YPV66JA3.js";import"../chunks-js/chunk.F27L6OQP.js";import"../chunks-js/chunk.7YN44Q4N.js";import"../chunks-js/chunk.CHYIO324.js";import{b as n,d}from"../chunks-js/chunk.CIM3NS6G.js";import{h as w,l as g,o as v}from"../chunks-js/chunk.2ZZQBHAA.js";g();v();var m=w(y(),1);var N={title:"UI Components/Chip",component:"omni-chip",argTypes:{chip_icon:{control:"text"},close_icon:{control:"text"}}},q={render:e=>n`
    <omni-chip data-testid="test-chip" label="${c(e.label)}" ?closable=${e.closable} ?disabled="${e.disabled}"
      >${e.chip_icon?n`${`\r
`}${p(b("chip_icon",e.chip_icon))}`:d}${e.close_icon?n`${`\r
`}${p(b("close_icon",e.close_icon))}`:d}
    </omni-chip>
  `,name:"Interactive",args:{label:"Chip",closable:!0,disabled:!1,chip_icon:h`<svg slot="chip_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="fill: orange" width="100%" height="100%"><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM12 7a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 .743.648L17 12a.75.75 0 0 1-.75.75h-3.5v3.5a.75.75 0 0 1-.648.743L12 17a.75.75 0 0 1-.75-.75v-3.5h-3.5a.75.75 0 0 1-.743-.648L7 12a.75.75 0 0 1 .75-.75h3.5v-3.5a.75.75 0 0 1 .648-.743Z"/></svg>`,close_icon:""},play:async e=>{let o=s(e.canvasElement).getByTestId("test-chip"),t=m.fn();o.addEventListener("click",t),await l.click(o,{pointerEventsCheck:0}),await l.click(o,{pointerEventsCheck:0}),await i(t).toBeCalledTimes(2)}},C={render:e=>n` <omni-chip data-testid="test-chip" label="${c(e.label)}"> </omni-chip> `,name:"Label",description:"Set a text value to display within.",args:{label:"Label"},play:async e=>{var t;let o=s(e.canvasElement).getByTestId("test-chip");await i(o.shadowRoot.getElementById("label")).toHaveTextContent((t=C.args)==null?void 0:t.label)}},P={render:e=>n` <omni-chip data-testid="test-chip" label="${c(e.label)}" ?closable=${e.closable}> </omni-chip> `,name:"Closable",description:"Add a close icon to the component.",args:{label:"Closable",closable:!0},play:async e=>{let o=s(e.canvasElement).getByTestId("test-chip"),t=m.fn();o.addEventListener("remove",t);let a=o.shadowRoot.getElementById("closeButton");await l.click(a,{pointerEventsCheck:0}),await l.click(a,{pointerEventsCheck:0}),await i(t).toBeCalledTimes(2)}},U={render:e=>n` <omni-chip data-testid="test-chip" label="${c(e.label)}" ?disabled="${e.disabled}"> </omni-chip> `,name:"Disabled",description:"Prevent interaction (pointer events).",args:{label:"Disabled",disabled:!0},play:async e=>{let o=s(e.canvasElement).getByTestId("test-chip"),a=o.shadowRoot.getElementById("chip").classList.contains("disabled");await i(a).toBeTruthy();let r=m.fn();o.addEventListener("click",r),await i(()=>l.click(o)).rejects.toThrow(/pointer-events: none/),await i(()=>l.click(o)).rejects.toThrow(/pointer-events: none/),await i(r).toBeCalledTimes(0)}},z={render:e=>n`
    <omni-chip data-testid="test-chip" label="${c(e.label)}" ?closable=${e.closable}> ${p(e.chip_icon)} </omni-chip>
  `,name:"Chip Icon",description:"Set html content to display as an icon.",args:{label:"Chip",closable:!1,chip_icon:h`<svg slot="chip_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" style="fill: orange"><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM12 7a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 .743.648L17 12a.75.75 0 0 1-.75.75h-3.5v3.5a.75.75 0 0 1-.648.743L12 17a.75.75 0 0 1-.75-.75v-3.5h-3.5a.75.75 0 0 1-.743-.648L7 12a.75.75 0 0 1 .75-.75h3.5v-3.5a.75.75 0 0 1 .648-.743Z"/></svg>`},play:async e=>{let t=s(e.canvasElement).getByTestId("test-chip").shadowRoot.querySelector('slot[name="chip_icon"]');await i(t).toBeTruthy();let a=t==null?void 0:t.assignedElements().find(r=>r.tagName.toLowerCase()==="svg");await i(a).toBeTruthy()}},G={render:e=>n`
    <omni-chip data-testid="test-chip" label="${c(e.label)}" ?closable=${e.closable}>
      ${p(e.chip_icon)} ${p(e.close_icon)}
    </omni-chip>
  `,name:"Custom Close Icon",description:"Set html content to display as the close icon.",args:{label:"Close",closable:!0,close_icon:h`<svg slot="close_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%"><path d="m7.446 6.397.084.073L13 11.939l5.47-5.47a.75.75 0 0 1 1.133.977l-.073.084L14.061 13l5.47 5.47a.75.75 0 0 1-.977 1.133l-.084-.073L13 14.061l-5.47 5.47a.75.75 0 0 1-1.133-.977l.073-.084L11.939 13l-5.47-5.47a.75.75 0 0 1 .977-1.133Z"/></svg>`},play:async e=>{let t=s(e.canvasElement).getByTestId("test-chip").shadowRoot.querySelector("slot[name=close_icon]");await i(t).toBeTruthy();let a=t==null?void 0:t.assignedElements().find(r=>r.tagName.toLocaleLowerCase()==="svg");await i(a).toBeTruthy()}};export{z as Chip_Slot_Icon,P as Closable,G as Custom_Close_Icon,U as Disabled,q as Interactive,C as Label,N as default};
//# sourceMappingURL=Chip.stories.js.map
