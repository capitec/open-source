import"../chunks-js/chunk.XEXWKYM7.js";import{b as c,c as E}from"../chunks-js/chunk.SNS3RAAO.js";import{a as d}from"../chunks-js/chunk.CFP25WDL.js";import{c as i,d as l}from"../chunks-js/chunk.555UF2OF.js";import{d as n}from"../chunks-js/chunk.ZDXRLLLZ.js";import"../chunks-js/chunk.F27L6OQP.js";import"../chunks-js/chunk.7YN44Q4N.js";import"../chunks-js/chunk.CHYIO324.js";import{b as s}from"../chunks-js/chunk.CIM3NS6G.js";import{h as g,l as y,o as b}from"../chunks-js/chunk.2ZZQBHAA.js";y();b();var m=g(E(),1);var j={title:"UI Components/Radio",component:"omni-radio"},q={render:e=>s`
    <omni-radio
      data-testid="test-radio"
      label="${d(e.label)}"
      .data="${e.data}"
      hint="${d(e.hint)}"
      error="${d(e.error)}"
      ?checked="${e.checked}"
      ?disabled="${e.disabled}"></omni-radio>
  `,name:"Interactive",args:{label:"",data:{},hint:"",error:"",checked:!1,disabled:!1},play:async e=>{var o;let r=i(e.canvasElement).getByTestId("test-radio");r.focus();let a=(o=r.shadowRoot)==null?void 0:o.getElementById("content"),t=m.fn();r.addEventListener("value-change",t),await c.click(a,{pointerEventsCheck:0}),await l.keyDown(a,{key:" ",code:"Space"}),await n(t).toBeCalledTimes(2)}},v={render:e=>s` <omni-radio data-testid="test-radio" label="${e.label}"></omni-radio> `,description:"Set a text value to display next to the component.",args:{label:"Label"},play:async e=>{var t,o;let a=(t=i(e.canvasElement).getByTestId("test-radio").shadowRoot)==null?void 0:t.getElementById("label");await n(a).toHaveTextContent((o=v.args)==null?void 0:o.label)}},T={render:e=>s` <omni-radio data-testid="test-radio" label="${e.label}" hint="${e.hint}"></omni-radio> `,description:"Set a text value to as a hint.",args:{label:"Hint",hint:"This is a hint"},play:async e=>{var t,o;let a=(t=i(e.canvasElement).getByTestId("test-radio").shadowRoot)==null?void 0:t.querySelector(".hint");await n(a).toHaveTextContent((o=T.args)==null?void 0:o.hint)}},w={name:"Error",render:e=>s` <omni-radio data-testid="test-radio" label="${e.label}" error="${e.error}"></omni-radio> `,description:"Set a text value to display as an error.",args:{label:"Error",error:"This is an error state"},play:async e=>{var t,o;let a=(t=i(e.canvasElement).getByTestId("test-radio").shadowRoot)==null?void 0:t.querySelector(".error");await n(a).toHaveTextContent((o=w.args)==null?void 0:o.error)}},D={render:e=>s` <omni-radio data-testid="test-radio" label="${e.label}" ?checked="${e.checked}"></omni-radio> `,description:"Set the component to a checked state.",args:{label:"Checked",checked:!0},play:async e=>{var t;let a=(t=i(e.canvasElement).getByTestId("test-radio").shadowRoot)==null?void 0:t.querySelector(".checked");await n(a).toBeTruthy()}},N={render:e=>s` <omni-radio data-testid="test-radio" label="${e.label}" ?disabled="${e.disabled}"></omni-radio> `,description:"Prevent interaction (pointer events).",args:{label:"Disabled",disabled:!0},play:async e=>{var p,h;let r=i(e.canvasElement).getByTestId("test-radio"),a=m.fn();r.addEventListener("value-change",a);let t=(p=r.shadowRoot)==null?void 0:p.querySelector(".disabled");await n(t).toBeTruthy();let o=(h=r.shadowRoot)==null?void 0:h.getElementById("content");await c.click(o,{pointerEventsCheck:0}),await l.keyDown(o,{key:" ",code:"Space"}),await n(a).toBeCalledTimes(0)}};export{D as Checked,N as Disabled,w as Error_Label,T as Hint,q as Interactive,v as Label,j as default};
//# sourceMappingURL=Radio.stories.js.map
