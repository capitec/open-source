import"../chunks-js/chunk.GM4DWP74.js";import{a as s}from"../chunks-js/chunk.R4IMIBZU.js";import{c as l}from"../chunks-js/chunk.QC5ZUB6O.js";import{d as o}from"../chunks-js/chunk.YQLTAQFI.js";import"../chunks-js/chunk.WVW5AE5A.js";import"../chunks-js/chunk.CHYIO324.js";import"../chunks-js/chunk.2UFE7DL7.js";import{b as a}from"../chunks-js/chunk.3GEUDTAZ.js";import{l as n,o as r}from"../chunks-js/chunk.2ZZQBHAA.js";n();r();var b=["default","title","subtitle","strong"],F={title:"UI Components/Label",component:"omni-label",argTypes:{type:{control:{type:"radio",options:b}}}},i={render:t=>a` <omni-label data-testid="test-label" label="${s(t.label)}" type="${t.type}"> </omni-label> `,name:"Interactive",args:{label:"Label",type:"default"},play:async t=>{let e=l(t.canvasElement).getByTestId("test-label");await o(e.shadowRoot).toHaveTextContent(i.args.label)}},p={render:t=>a` <omni-label data-testid="test-label" label="${t.label}" type="${t.type}"> </omni-label> `,args:{label:"Title",type:"title"},play:async t=>{let e=l(t.canvasElement).getByTestId("test-label");await o(e.shadowRoot).toHaveTextContent(p.args.label)}},m={render:t=>a` <omni-label data-testid="test-label" label="${t.label}" type="${t.type}"> </omni-label> `,args:{label:"Subtitle",type:"subtitle"},play:async t=>{let e=l(t.canvasElement).getByTestId("test-label");await o(e.shadowRoot).toHaveTextContent(m.args.label)}},y={render:t=>a` <omni-label data-testid="test-label" label="${t.label}" type="${t.type}"> </omni-label> `,args:{label:"Strong",type:"strong"},play:async t=>{let e=l(t.canvasElement).getByTestId("test-label");await o(e.shadowRoot).toHaveTextContent(y.args.label)}};export{i as Interactive,y as Strong,m as Subtitle,p as Title,F as default};
//# sourceMappingURL=Label.stories.js.map
