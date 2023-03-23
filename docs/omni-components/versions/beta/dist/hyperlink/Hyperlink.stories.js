import"../chunks-js/chunk.J47TGO5H.js";import{a as k}from"../chunks-js/chunk.IRJIQSYL.js";import{a as s}from"../chunks-js/chunk.PJH7M65U.js";import{a as y}from"../chunks-js/chunk.G3QHRCKP.js";import{b as o}from"../chunks-js/chunk.MHLMY33S.js";import{c as a}from"../chunks-js/chunk.N6OKW4B2.js";import{d as r}from"../chunks-js/chunk.W54IKPJD.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as i}from"../chunks-js/chunk.F6MIXR4E.js";import{h,m,p as d}from"../chunks-js/chunk.BF43NN75.js";m();d();var p=h(k(),1);var f=["_self","_blank","_parent","_top"],_={title:"UI Components/Hyperlink",component:"omni-hyperlink",argTypes:{size:{control:"radio",options:["default","small"]},target:{control:"radio",options:f},"[Default Slot]":{control:"text"}}},j={render:e=>i`
    <omni-hyperlink
      data-testid="test-hyperlink"
      label="${s(e.label)}"
      href="${s(e.href)}"
      target="${s(e.target)}"
      ?disabled="${e.disabled}"
      ?inline="${e.inline}"
      size="${e.size}">
      ${y(e["[Default Slot]"])}
    </omni-hyperlink>
  `,name:"Interactive",args:{label:"Click",href:"",disabled:!1,inline:!1,size:"","[Default Slot]":void 0},play:async e=>{let t=a(e.canvasElement).getByTestId("test-hyperlink"),n=p.fn();t.addEventListener("click",()=>n()),await o.click(t,{pointerEventsCheck:0}),await o.click(t,{pointerEventsCheck:0}),await r(n).toBeCalledTimes(2)}},b={render:e=>i`<omni-hyperlink data-testid="test-hyperlink" label="${e.label}"></omni-hyperlink>`,name:"Label",description:"Set the text content of the component.",args:{label:"Click"},play:async e=>{var n,c;let t=a(e.canvasElement).getByTestId("test-hyperlink");await r((n=t.shadowRoot)==null?void 0:n.querySelector("a")).toHaveTextContent((c=b.args)==null?void 0:c.label)}},g={render:e=>i`<omni-hyperlink data-testid="test-hyperlink" label="${e.label}" size="${e.size}"></omni-hyperlink>`,name:"Size",description:"Set the component to a predefined size.",args:{label:"Click",size:"small"},play:async e=>{var n;let t=a(e.canvasElement).getByTestId("test-hyperlink");await r(t).toHaveAttribute("size",(n=g.args)==null?void 0:n.size)}},v={render:e=>i`<omni-hyperlink data-testid="test-hyperlink" label="${e.label}" href="${e.href}" target="_blank"></omni-hyperlink>`,name:"Href",description:"Set the hypertext reference.",args:{label:"Click",href:"https://example.com"},play:async e=>{var n;let t=a(e.canvasElement).getByTestId("test-hyperlink");await r(t).toHaveAttribute("href",(n=v.args)==null?void 0:n.href)}},q={render:e=>i`<omni-hyperlink
      data-testid="test-hyperlink"
      href="https://example.com"
      label="${e.label}"
      ?disabled="${e.disabled}"></omni-hyperlink>`,name:"Disabled",description:"Prevent interaction (pointer events).",args:{label:"Click",disabled:!0},play:async e=>{let t=a(e.canvasElement).getByTestId("test-hyperlink"),n=p.fn();t.addEventListener("click",()=>n()),await o.click(t,{pointerEventsCheck:0}),await o.click(t,{pointerEventsCheck:0}),await r(n).toBeCalledTimes(0)}},M={render:e=>i`<p data-testid="test-paragraph"> Inline <omni-hyperlink label="${e.label}" ?inline="${e.inline}"></omni-hyperlink> example </p>`,name:"Inline",description:"Render the component using its inline styles.",args:{label:"click",inline:!0},play:async e=>{let t=a(e.canvasElement).getByTestId("test-paragraph"),n=t.querySelector("omni-hyperlink");await r(t).toContainElement(n)}};export{q as Disabled,v as Href,M as Inline,j as Interactive,b as Label,g as Size,_ as default};
//# sourceMappingURL=Hyperlink.stories.js.map
