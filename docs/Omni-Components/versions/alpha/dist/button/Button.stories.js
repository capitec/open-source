import"../chunks-js/chunk.353SGC2R.js";import{b as l,c as f}from"../chunks-js/chunk.LME64W74.js";import{v as p}from"../chunks-js/chunk.G4V22OAM.js";import"../chunks-js/chunk.SPIAQSDI.js";import{a as u}from"../chunks-js/chunk.SUEZUCRO.js";import{a as d}from"../chunks-js/chunk.O6CDAD4G.js";import{c as a}from"../chunks-js/chunk.QC5ZUB6O.js";import{d as e}from"../chunks-js/chunk.YQLTAQFI.js";import"../chunks-js/chunk.LPEZ6TWE.js";import"../chunks-js/chunk.XLVYYAUR.js";import"../chunks-js/chunk.H227IO2J.js";import"../chunks-js/chunk.CHYIO324.js";import{c as i}from"../chunks-js/chunk.CDDA2I3H.js";import{h as y,l as c,o as b}from"../chunks-js/chunk.2ZZQBHAA.js";c();b();var m=y(f(),1);var g=["primary","secondary","clear","white"],E=["left","top","right","bottom"],H={title:"UI Components/Button",component:"omni-button",argTypes:{type:{control:"radio",options:g},slotPosition:{control:"radio",options:E},"slot-position":{control:!1},"[Default Slot]":{control:"text"}}},U={render:t=>i`
    <omni-button
      data-testid="test-button"
      type="${t.type}"
      label="${d(t.label)}"
      slot-position="${t.slotPosition}"
      ?disabled=${t.disabled}>
      ${u(t["[Default Slot]"])}
    </omni-button>
  `,name:"Interactive",args:{type:"secondary",label:"Button",slotPosition:"top",disabled:!1,"[Default Slot]":p`<omni-icon icon="@material/thumb_up"></omni-icon>`},play:async t=>{let o=a(t.canvasElement).getByTestId("test-button"),s=m.fn();o.addEventListener("click",()=>s()),await l.click(o,{pointerEventsCheck:0}),await l.click(o,{pointerEventsCheck:0}),await e(s).toBeCalledTimes(2)}},_={render:t=>i` <omni-button type="${t.type}" label="${t.label}" data-testid="test-button"></omni-button> `,name:"Type",args:{type:"primary",label:"Click"},play:async t=>{let n=a(t.canvasElement).getByTestId("test-button").shadowRoot.getElementById("button").classList.contains("primary");await e(n).toBeTruthy()}},B={render:t=>i` <omni-button label="${t.label}" data-testid="test-button"></omni-button> `,name:"Label",args:{label:"Click"},play:async t=>{let n=a(t.canvasElement).getByTestId("test-button").shadowRoot.getElementById("label").innerText===B.args.label;await e(n).toBeTruthy()}},G={render:()=>i`
    <omni-button data-testid="test-button">
      <omni-icon size="default" icon="./assets/images/direction.svg"></omni-icon>
    </omni-button>
  `,name:"Slot",args:{},play:async t=>{let n=a(t.canvasElement).getByTestId("test-button").shadowRoot.querySelector("slot").assignedElements().find(r=>r.tagName.toLowerCase()==="omni-icon");await e(n).toBeTruthy()}},J={render:t=>i` <omni-button disabled label="${t.label}" data-testid="test-button"></omni-button> `,name:"Disabled",args:{label:"Disabled"},play:async t=>{let o=a(t.canvasElement).getByTestId("test-button"),n=o.shadowRoot.getElementById("button").classList.contains("disabled");await e(n).toBeTruthy();let r=m.fn();o.addEventListener("click",w=>{r()}),await e(()=>l.click(o)).rejects.toThrow(/pointer-events: none/),await e(()=>l.click(o)).rejects.toThrow(/pointer-events: none/),await e(r).toBeCalledTimes(0)}};export{J as Disabled,U as Interactive,B as Label,G as Slot,_ as Type,H as default};
//# sourceMappingURL=Button.stories.js.map
