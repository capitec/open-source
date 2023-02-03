import"../chunks-js/chunk.F2NEI6M6.js";import{b as l,c as y}from"../chunks-js/chunk.LME64W74.js";import{a as r}from"../chunks-js/chunk.R4IMIBZU.js";import{c as a,d as c}from"../chunks-js/chunk.QC5ZUB6O.js";import{d as o}from"../chunks-js/chunk.YQLTAQFI.js";import"../chunks-js/chunk.XMM72FEY.js";import"../chunks-js/chunk.ZO5UBYOG.js";import"../chunks-js/chunk.CHYIO324.js";import{b as s}from"../chunks-js/chunk.3GEUDTAZ.js";import{h as p,l as m,o as w}from"../chunks-js/chunk.2ZZQBHAA.js";m();w();var d=p(y(),1);var R={title:"UI Components/Switch",component:"omni-switch"},q={render:t=>s`
    <omni-switch
      data-testid="test-switch"
      label="${r(t.label)}"
      .data="${t.data}"
      hint="${r(t.hint)}"
      error="${r(t.error)}"
      ?checked="${t.checked}"
      ?disabled="${t.disabled}"></omni-switch>
  `,name:"Interactive",args:{label:"",data:{},hint:"",error:"",checked:!1,disabled:!1},play:async t=>{let n=a(t.canvasElement).getByTestId("test-switch"),e=d.fn();n.addEventListener("value-change",e);let i=n.shadowRoot.getElementById("content");await l.click(i,{pointerEventsCheck:0}),await c.keyDown(i,{key:" ",code:"Space"}),await o(e).toBeCalledTimes(2)}},b={render:t=>s` <omni-switch data-testid="test-switch" label="${t.label}"></omni-switch> `,description:"Set text content to display next to the component.",args:{label:"Label"},play:async t=>{let e=a(t.canvasElement).getByTestId("test-switch").shadowRoot.querySelector(".label");await o(e).toHaveTextContent(b.args.label)}},E={render:t=>s` <omni-switch data-testid="test-switch" label="${t.label}" hint="${t.hint}"></omni-switch> `,description:"Set text content to display as a hint.",args:{label:"Hint",hint:"This is a hint"},play:async t=>{let e=a(t.canvasElement).getByTestId("test-switch").shadowRoot.querySelector(".hint");await o(e).toHaveTextContent(E.args.hint)}},g={name:"Error",render:t=>s` <omni-switch data-testid="test-switch" label="${t.label}" error="${t.error}"></omni-switch> `,description:"Set text content to display as an error.",args:{label:"Error",error:"This is an error state"},play:async t=>{let e=a(t.canvasElement).getByTestId("test-switch").shadowRoot.querySelector(".error");await o(e).toHaveTextContent(g.args.error)}},M={render:t=>s` <omni-switch data-testid="test-switch" label="${t.label}" ?checked="${t.checked}"></omni-switch> `,description:"Set the component to a checked state.",args:{label:"Checked",checked:!0},play:async t=>{let e=a(t.canvasElement).getByTestId("test-switch").shadowRoot.querySelector(".checked");await o(e).toBeTruthy()}},j={render:t=>s` <omni-switch data-testid="test-switch" label="${t.label}" ?disabled="${t.disabled}"></omni-switch> `,description:"Prevent interaction (pointer events).",args:{label:"Disabled",disabled:!0},play:async t=>{let n=a(t.canvasElement).getByTestId("test-switch"),e=d.fn();n.addEventListener("value-change",e);let i=n.shadowRoot.querySelector(".disabled");await o(i).toBeTruthy();let h=n.shadowRoot.getElementById("content");await l.click(h,{pointerEventsCheck:0}),await c.keyDown(h,{key:" ",code:"Space"}),await o(e).toBeCalledTimes(0)}};export{M as Checked,j as Disabled,g as Error_Label,E as Hint,q as Interactive,b as Label,R as default};
//# sourceMappingURL=Switch.stories.js.map