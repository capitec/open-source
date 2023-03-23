import"../chunks-js/chunk.FYHSNAQ7.js";import{a as E}from"../chunks-js/chunk.IRJIQSYL.js";import{a as c}from"../chunks-js/chunk.PJH7M65U.js";import{b as d}from"../chunks-js/chunk.MHLMY33S.js";import{c as i,d as l}from"../chunks-js/chunk.N6OKW4B2.js";import{d as a}from"../chunks-js/chunk.W54IKPJD.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as r}from"../chunks-js/chunk.F6MIXR4E.js";import{h as b,m as p,p as y}from"../chunks-js/chunk.BF43NN75.js";p();y();var h=b(E(),1);var q={title:"UI Components/Switch",component:"omni-switch"},j={render:t=>r`
    <omni-switch
      data-testid="test-switch"
      label="${c(t.label)}"
      .data="${t.data}"
      hint="${c(t.hint)}"
      error="${c(t.error)}"
      ?checked="${t.checked}"
      ?disabled="${t.disabled}"></omni-switch>
  `,name:"Interactive",args:{label:"",data:{},hint:"",error:"",checked:!1,disabled:!1},play:async t=>{var n;let s=i(t.canvasElement).getByTestId("test-switch"),o=h.fn();s.addEventListener("value-change",o);let e=(n=s.shadowRoot)==null?void 0:n.getElementById("content");await d.click(e,{pointerEventsCheck:0}),await l.keyDown(e,{key:" ",code:"Space"}),await a(o).toBeCalledTimes(2)}},g={render:t=>r` <omni-switch data-testid="test-switch" label="${t.label}"></omni-switch> `,description:"Set text content to display next to the component.",args:{label:"Label"},play:async t=>{var e,n;let o=(e=i(t.canvasElement).getByTestId("test-switch").shadowRoot)==null?void 0:e.querySelector(".label");await a(o).toHaveTextContent((n=g.args)==null?void 0:n.label)}},S={render:t=>r` <omni-switch data-testid="test-switch" label="${t.label}" hint="${t.hint}"></omni-switch> `,description:"Set text content to display as a hint.",args:{label:"Hint",hint:"This is a hint"},play:async t=>{var e,n;let o=(e=i(t.canvasElement).getByTestId("test-switch").shadowRoot)==null?void 0:e.querySelector(".hint");await a(o).toHaveTextContent((n=S.args)==null?void 0:n.hint)}},v={name:"Error",render:t=>r` <omni-switch data-testid="test-switch" label="${t.label}" error="${t.error}"></omni-switch> `,description:"Set text content to display as an error.",args:{label:"Error",error:"This is an error state"},play:async t=>{var e,n;let o=(e=i(t.canvasElement).getByTestId("test-switch").shadowRoot)==null?void 0:e.querySelector(".error");await a(o).toHaveTextContent((n=v.args)==null?void 0:n.error)}},D={render:t=>r` <omni-switch data-testid="test-switch" label="${t.label}" ?checked="${t.checked}"></omni-switch> `,description:"Set the component to a checked state.",args:{label:"Checked",checked:!0},play:async t=>{var e;let o=(e=i(t.canvasElement).getByTestId("test-switch").shadowRoot)==null?void 0:e.querySelector(".checked");await a(o).toBeTruthy()}},N={render:t=>r` <omni-switch data-testid="test-switch" label="${t.label}" ?disabled="${t.disabled}"></omni-switch> `,description:"Prevent interaction (pointer events).",args:{label:"Disabled",disabled:!0},play:async t=>{var m,w;let s=i(t.canvasElement).getByTestId("test-switch"),o=h.fn();s.addEventListener("value-change",o);let e=(m=s.shadowRoot)==null?void 0:m.querySelector(".disabled");await a(e).toBeTruthy();let n=(w=s.shadowRoot)==null?void 0:w.getElementById("content");await d.click(n,{pointerEventsCheck:0}),await l.keyDown(n,{key:" ",code:"Space"}),await a(o).toBeCalledTimes(0)}};export{D as Checked,N as Disabled,v as Error_Label,S as Hint,j as Interactive,g as Label,q as default};
//# sourceMappingURL=Switch.stories.js.map
