import"../chunks-js/chunk.VL6GOK5O.js";import{b as l,c as f}from"../chunks-js/chunk.LME64W74.js";import{u}from"../chunks-js/chunk.L4KSVVY6.js";import"../chunks-js/chunk.MPJVWYSG.js";import"../chunks-js/chunk.D6UL6COZ.js";import"../chunks-js/chunk.BMVIQMEU.js";import{a as d}from"../chunks-js/chunk.3FTDPY75.js";import{a as p}from"../chunks-js/chunk.R4IMIBZU.js";import{c as a}from"../chunks-js/chunk.QC5ZUB6O.js";import{d as e}from"../chunks-js/chunk.YQLTAQFI.js";import"../chunks-js/chunk.VOM777LA.js";import"../chunks-js/chunk.XMM72FEY.js";import"../chunks-js/chunk.ZO5UBYOG.js";import"../chunks-js/chunk.CHYIO324.js";import{b as i}from"../chunks-js/chunk.3GEUDTAZ.js";import{h as y,l as c,o as b}from"../chunks-js/chunk.2ZZQBHAA.js";c();b();var m=y(f(),1);var g=["primary","secondary","clear","white"],E=["left","top","right","bottom"],z={title:"UI Components/Button",component:"omni-button",argTypes:{type:{control:"radio",options:g},slotPosition:{control:"radio",options:E},"slot-position":{control:!1},"[Default Slot]":{control:"text"}}},H={render:t=>i`
    <omni-button
      data-testid="test-button"
      type="${t.type}"
      label="${p(t.label)}"
      slot-position="${t.slotPosition}"
      ?disabled=${t.disabled}>
      ${d(t["[Default Slot]"])}
    </omni-button>
  `,name:"Interactive",args:{type:"secondary",label:"Button",slotPosition:"top",disabled:!1,"[Default Slot]":u`<omni-icon icon="@material/thumb_up"></omni-icon>`},play:async t=>{let o=a(t.canvasElement).getByTestId("test-button"),s=m.fn();o.addEventListener("click",()=>s()),await l.click(o,{pointerEventsCheck:0}),await l.click(o,{pointerEventsCheck:0}),await e(s).toBeCalledTimes(2)}},U={render:t=>i` <omni-button type="${t.type}" label="${t.label}" data-testid="test-button"></omni-button> `,name:"Type",description:"Set the type of button to render using different combinations of primary and alternate colours.",args:{type:"primary",label:"Click"},play:async t=>{let n=a(t.canvasElement).getByTestId("test-button").shadowRoot.getElementById("button").classList.contains("primary");await e(n).toBeTruthy()}},h={render:t=>i` <omni-button label="${t.label}" data-testid="test-button"></omni-button> `,name:"Label",description:"Set a text value to display within.",args:{label:"Click"},play:async t=>{let n=a(t.canvasElement).getByTestId("test-button").shadowRoot.getElementById("label").innerText===h.args.label;await e(n).toBeTruthy()}},_={render:()=>i`
    <omni-button data-testid="test-button">
      <omni-icon size="default" icon="./assets/images/direction.svg"></omni-icon>
    </omni-button>
  `,name:"Slot",description:"Set html content to display within.",args:{},play:async t=>{let n=a(t.canvasElement).getByTestId("test-button").shadowRoot.querySelector("slot").assignedElements().find(r=>r.tagName.toLowerCase()==="omni-icon");await e(n).toBeTruthy()}},G={render:t=>i` <omni-button disabled label="${t.label}" data-testid="test-button"></omni-button> `,name:"Disabled",description:"Prevent interaction (pointer events).",args:{label:"Disabled"},play:async t=>{let o=a(t.canvasElement).getByTestId("test-button"),n=o.shadowRoot.getElementById("button").classList.contains("disabled");await e(n).toBeTruthy();let r=m.fn();o.addEventListener("click",w=>{r()}),await e(()=>l.click(o)).rejects.toThrow(/pointer-events: none/),await e(()=>l.click(o)).rejects.toThrow(/pointer-events: none/),await e(r).toBeCalledTimes(0)}};export{G as Disabled,H as Interactive,h as Label,_ as Slot,U as Type,z as default};
//# sourceMappingURL=Button.stories.js.map