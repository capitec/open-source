import"../chunks-js/chunk.76ILR7NC.js";import{b as l,c as p}from"../chunks-js/chunk.LME64W74.js";import{a as d}from"../chunks-js/chunk.R4IMIBZU.js";import{c as r,d as s}from"../chunks-js/chunk.QC5ZUB6O.js";import{d as a}from"../chunks-js/chunk.YQLTAQFI.js";import"../chunks-js/chunk.6TMBBBK2.js";import"../chunks-js/chunk.WVW5AE5A.js";import"../chunks-js/chunk.CHYIO324.js";import"../chunks-js/chunk.2UFE7DL7.js";import{b as n}from"../chunks-js/chunk.3GEUDTAZ.js";import{h as y,l as h,o as b}from"../chunks-js/chunk.2ZZQBHAA.js";h();b();var c=y(p(),1);var L={title:"UI Components/Radio",component:"omni-radio"},j={render:e=>n`
    <omni-radio
      data-testid="test-radio"
      label="${d(e.label)}"
      .data="${e.data}"
      hint="${d(e.hint)}"
      error="${d(e.error)}"
      ?checked="${e.checked}"
      ?disabled="${e.disabled}"></omni-radio>
  `,name:"Interactive",args:{label:"",data:{},hint:"",error:"",checked:!1,disabled:!1},play:async e=>{let o=r(e.canvasElement).getByTestId("test-radio");o.focus();let t=o.shadowRoot.getElementById("content"),i=c.fn();o.addEventListener("value-change",i),await l.click(t,{pointerEventsCheck:0}),await s.keyDown(t,{key:" ",code:"Space"}),await a(i).toBeCalledTimes(2)}},g={render:e=>n` <omni-radio data-testid="test-radio" label="${e.label}"></omni-radio> `,args:{label:"Label"},play:async e=>{let t=r(e.canvasElement).getByTestId("test-radio").shadowRoot.getElementById("label");await a(t).toHaveTextContent(g.args.label)}},E={render:e=>n` <omni-radio data-testid="test-radio" label="${e.label}" hint="${e.hint}"></omni-radio> `,args:{label:"Hint",hint:"This is a hint"},play:async e=>{let t=r(e.canvasElement).getByTestId("test-radio").shadowRoot.querySelector(".hint");await a(t).toHaveTextContent(E.args.hint)}},v={name:"Error",render:e=>n` <omni-radio data-testid="test-radio" label="${e.label}" error="${e.error}"></omni-radio> `,args:{label:"Error",error:"This is an error state"},play:async e=>{let t=r(e.canvasElement).getByTestId("test-radio").shadowRoot.querySelector(".error");await a(t).toHaveTextContent(v.args.error)}},q={render:e=>n` <omni-radio data-testid="test-radio" label="${e.label}" ?checked="${e.checked}"></omni-radio> `,args:{label:"Checked",checked:!0},play:async e=>{let t=r(e.canvasElement).getByTestId("test-radio").shadowRoot.querySelector(".checked");await a(t).toBeTruthy()}},D={render:e=>n` <omni-radio data-testid="test-radio" label="${e.label}" ?disabled="${e.disabled}"></omni-radio> `,args:{label:"Disabled",disabled:!0},play:async e=>{let o=r(e.canvasElement).getByTestId("test-radio"),t=c.fn();o.addEventListener("value-change",t);let i=o.shadowRoot.querySelector(".disabled");await a(i).toBeTruthy();let m=o.shadowRoot.getElementById("content");await l.click(m,{pointerEventsCheck:0}),await s.keyDown(m,{key:" ",code:"Space"}),await a(t).toBeCalledTimes(0)}};export{q as Checked,D as Disabled,v as Error_Label,E as Hint,j as Interactive,g as Label,L as default};
//# sourceMappingURL=Radio.stories.js.map