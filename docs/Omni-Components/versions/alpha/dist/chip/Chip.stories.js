import"../chunks-js/chunk.6UUSCSRF.js";import{b as l,c as C}from"../chunks-js/chunk.LME64W74.js";import{k as b,v as h}from"../chunks-js/chunk.KC5WESZP.js";import"../chunks-js/chunk.63SH7AJG.js";import{a as p}from"../chunks-js/chunk.BDUZEV7N.js";import{a as c}from"../chunks-js/chunk.O6CDAD4G.js";import{c as s}from"../chunks-js/chunk.QC5ZUB6O.js";import{d as i}from"../chunks-js/chunk.YQLTAQFI.js";import"../chunks-js/chunk.NQDJC2I5.js";import"../chunks-js/chunk.GV25XNF2.js";import"../chunks-js/chunk.7HCHYC7E.js";import"../chunks-js/chunk.FS4G6H4L.js";import"../chunks-js/chunk.63F4QTY7.js";import"../chunks-js/chunk.CHYIO324.js";import"../chunks-js/chunk.2UFE7DL7.js";import{c as a,e as d}from"../chunks-js/chunk.CDDA2I3H.js";import{h as w,l as g,o as v}from"../chunks-js/chunk.2ZZQBHAA.js";g();v();var m=w(C(),1);var N={title:"UI Components/Chip",component:"omni-chip",argTypes:{chip_icon:{control:"text"},close_icon:{control:"text"}}},q={render:e=>a`
    <omni-chip data-testid="test-chip" label="${c(e.label)}" ?closable=${e.closable} ?disabled="${e.disabled}"
      >${e.chip_icon?a`${`\r
`}${p(b("chip_icon",e.chip_icon))}`:d}${e.close_icon?a`${`\r
`}${p(b("close_icon",e.close_icon))}`:d}
    </omni-chip>
  `,name:"Interactive",args:{label:"Chip",closable:!0,disabled:!1,chip_icon:h`<svg slot="chip_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%"><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM12 7a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 .743.648L17 12a.75.75 0 0 1-.75.75h-3.5v3.5a.75.75 0 0 1-.648.743L12 17a.75.75 0 0 1-.75-.75v-3.5h-3.5a.75.75 0 0 1-.743-.648L7 12a.75.75 0 0 1 .75-.75h3.5v-3.5a.75.75 0 0 1 .648-.743Z"/></svg>`,close_icon:""},play:async e=>{let t=s(e.canvasElement).getByTestId("test-chip"),o=m.fn();t.addEventListener("click",o),await l.click(t,{pointerEventsCheck:0}),await l.click(t,{pointerEventsCheck:0}),await i(o).toBeCalledTimes(2)}},y={render:e=>a` <omni-chip data-testid="test-chip" label="${c(e.label)}"> </omni-chip> `,name:"Label",args:{label:"Label"},play:async e=>{let t=s(e.canvasElement).getByTestId("test-chip");await i(t.shadowRoot.getElementById("label")).toHaveTextContent(y.args.label)}},U={render:e=>a` <omni-chip data-testid="test-chip" label="${c(e.label)}" ?closable=${e.closable}> </omni-chip> `,name:"Closable",args:{label:"Closable",closable:!0},play:async e=>{let t=s(e.canvasElement).getByTestId("test-chip"),o=m.fn();t.addEventListener("remove",o);let n=t.shadowRoot.getElementById("closeButton");await l.click(n,{pointerEventsCheck:0}),await l.click(n,{pointerEventsCheck:0}),await i(o).toBeCalledTimes(2)}},z={render:e=>a` <omni-chip data-testid="test-chip" label="${c(e.label)}" ?disabled="${e.disabled}"> </omni-chip> `,name:"Disabled",args:{label:"Disabled",disabled:!0},play:async e=>{let t=s(e.canvasElement).getByTestId("test-chip"),n=t.shadowRoot.getElementById("chip").classList.contains("disabled");await i(n).toBeTruthy();let r=m.fn();t.addEventListener("click",r),await i(()=>l.click(t)).rejects.toThrow(/pointer-events: none/),await i(()=>l.click(t)).rejects.toThrow(/pointer-events: none/),await i(r).toBeCalledTimes(0)}},G={render:e=>a`
    <omni-chip data-testid="test-chip" label="${c(e.label)}" ?closable=${e.closable}> ${p(e.chip_icon)} </omni-chip>
  `,name:"Chip Icon",args:{label:"Chip",closable:!1,chip_icon:h`<svg slot="chip_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%"><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM12 7a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 .743.648L17 12a.75.75 0 0 1-.75.75h-3.5v3.5a.75.75 0 0 1-.648.743L12 17a.75.75 0 0 1-.75-.75v-3.5h-3.5a.75.75 0 0 1-.743-.648L7 12a.75.75 0 0 1 .75-.75h3.5v-3.5a.75.75 0 0 1 .648-.743Z"/></svg>`},play:async e=>{let o=s(e.canvasElement).getByTestId("test-chip").shadowRoot.querySelector('slot[name="chip_icon"]');await i(o).toBeTruthy();let n=o.assignedElements().find(r=>r.tagName.toLowerCase()==="svg");await i(n).toBeTruthy()}},J={render:e=>a`
    <omni-chip data-testid="test-chip" label="${c(e.label)}" ?closable=${e.closable}>
      ${p(e.chip_icon)} ${p(e.close_icon)}
    </omni-chip>
  `,name:"Custom Close Icon",args:{label:"Close",closable:!0,close_icon:h`<svg slot="close_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%"><path d="m7.446 6.397.084.073L13 11.939l5.47-5.47a.75.75 0 0 1 1.133.977l-.073.084L14.061 13l5.47 5.47a.75.75 0 0 1-.977 1.133l-.084-.073L13 14.061l-5.47 5.47a.75.75 0 0 1-1.133-.977l.073-.084L11.939 13l-5.47-5.47a.75.75 0 0 1 .977-1.133Z"/></svg>`},play:async e=>{let o=s(e.canvasElement).getByTestId("test-chip").shadowRoot.querySelector("slot[name=close_icon]");await i(o).toBeTruthy();let n=o.assignedElements().find(r=>r.tagName.toLocaleLowerCase()==="svg");await i(n).toBeTruthy()}};export{G as Chip_Slot_Icon,U as Closable,J as Custom_Close_Icon,z as Disabled,q as Interactive,y as Label,N as default};
//# sourceMappingURL=Chip.stories.js.map
