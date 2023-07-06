import{a as S}from"./chunk.JSH3M4FH.js";import{b as f}from"./chunk.XOIHXH3W.js";import{a as u}from"./chunk.XCXCHO25.js";import{b as s}from"./chunk.FVJIJQ42.js";import{c as d}from"./chunk.WPESAYH2.js";import{E as v,x as h}from"./chunk.TJTW5ASN.js";import{a as m}from"./chunk.N3FDHMD3.js";import{b as p}from"./chunk.L3RZWW2F.js";import{h as T,m as w,p as x}from"./chunk.BF43NN75.js";w();x();var y=T(S(),1);function r(e){return e.replace(/(^\w|-\w)/g,g)}function g(e){return e.replace(/-/,"").toUpperCase()}function b(e){return e.replace("omni-","")}var j=e=>{let n={render:t=>p`${m(`<${e}  data-testid="test-field" label="${u(t.label)}"></${e}>`)}`,frameworkSources:[{framework:"React",load:t=>`import { ${r(e)} } from "@capitec/omni-components-react/${b(e)}";
    
const App = () => <${r(e)}${t.label?` label='${t.label}'`:""}/>;`}],name:"Label",description:"Set a text value to display as a label.",args:{label:"The Label"},play:async t=>{var l,o;let a=d(t.canvasElement).getByTestId("test-field");await s((l=a.shadowRoot)==null?void 0:l.querySelector(".label > div")).toHaveTextContent((o=n.args)==null?void 0:o.label)}};return n},O=e=>{let n={render:t=>p`${m(`<${e}  data-testid="test-field" label="${u(t.label)}" hint="${t.hint}"></${e}>`)}`,frameworkSources:[{framework:"React",load:t=>`import { ${r(e)} } from "@capitec/omni-components-react/${b(e)}";
    
const App = () => <${r(e)}${t.label?` label='${t.label}'`:""}${t.hint?` hint='${t.hint}'`:""}/>;`}],name:"Hint",description:"Set a text value to display as a hint.",args:{label:"Hint",hint:"The Hint label"},play:async t=>{var o;let l=d(t.canvasElement).getByTestId("test-field").shadowRoot.querySelector(".hint-label");await s(l).toBeTruthy(),await s(l).toHaveTextContent((o=n.args)==null?void 0:o.hint)}};return n},z=e=>{let n={render:t=>p`${m(`<${e} data-testid="test-field" label="${t.label}" error="${u(t.error)}"></${e}>`)}`,frameworkSources:[{framework:"React",load:t=>`import { ${r(e)} } from "@capitec/omni-components-react/${b(e)}";
    
const App = () => <${r(e)}${t.label?` label='${t.label}'`:""}${t.error?` error='${t.error}'`:""}/>;`}],name:"Error",description:"Set a text value to display as an error.",args:{label:"Error",error:"The Error label"},play:async t=>{var o;let l=d(t.canvasElement).getByTestId("test-field").shadowRoot.querySelector(".error-label");await s(l).toBeTruthy(),await s(l).toHaveTextContent((o=n.args)==null?void 0:o.error)}};return n},G=(e,n="The input value")=>{let t={render:a=>p`${m(`<${e} data-testid="test-field" label="${u(a.label)}" value="${a.value}"></${e}>`)}`,frameworkSources:[{framework:"React",load:a=>`import { ${r(e)} } from "@capitec/omni-components-react/${b(e)}";
    
const App = () => <${r(e)}${a.label?` label='${a.label}'`:""}${a.value?` value='${a.value}'`:""}/>;`}],name:"Value",description:"Set the current value of the component.",args:{label:"Value",value:n},play:async a=>{var i,c;let o=(i=d(a.canvasElement).getByTestId("test-field").shadowRoot)==null?void 0:i.getElementById("inputField");await s(o).toHaveValue((c=t.args)==null?void 0:c.value)}};return t},J=e=>({render:t=>p`${m(`
            <!-- Note that styles are applied to the slotted content via the style attribute and the --omni-form-label-margin-left css variable is overridden -->
            <${e} data-testid="test-field" style="--omni-form-label-margin-left:40px;" label="${u(t.label)}">
            ${t.prefix}
            </${e}>`)}`,frameworkSources:[{framework:"React",load:t=>`import { ${r(e)} } from "@capitec/omni-components-react/${b(e)}";
    
// Note that styles are applied to the slotted content via the style property and the --omni-form-label-margin-left css variable is overridden
const App = () => <${r(e)}${t.label?` label='${t.label}'`:""} style={{'--omni-form-label-margin-left':'40px'}}>
                    <svg slot="prefix" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" style={{fill: 'orange', marginLeft: '10px'}}><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM12 7a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 .743.648L17 12a.75.75 0 0 1-.75.75h-3.5v3.5a.75.75 0 0 1-.648.743L12 17a.75.75 0 0 1-.75-.75v-3.5h-3.5a.75.75 0 0 1-.743-.648L7 12a.75.75 0 0 1 .75-.75h3.5v-3.5a.75.75 0 0 1 .648-.743Z"/></svg>
                  </${r(e)}>;`}],name:"Prefix",description:"Set html content to display as a prefix within the component.",args:{label:"Prefix",prefix:h`<svg slot="prefix" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" style="fill: orange; margin-left: 10px;"><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM12 7a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 .743.648L17 12a.75.75 0 0 1-.75.75h-3.5v3.5a.75.75 0 0 1-.648.743L12 17a.75.75 0 0 1-.75-.75v-3.5h-3.5a.75.75 0 0 1-.743-.648L7 12a.75.75 0 0 1 .75-.75h3.5v-3.5a.75.75 0 0 1 .648-.743Z"/></svg>`},play:async t=>{var i;let l=(i=d(t.canvasElement).getByTestId("test-field").shadowRoot)==null?void 0:i.querySelector("slot[name=prefix]");await s(l).toBeTruthy();let o=l==null?void 0:l.assignedElements().find(c=>c.tagName.toLocaleLowerCase()==="svg");await s(o).toBeTruthy()}}),K=e=>({render:t=>p`${m(`
            <!-- Note that styles are applied to the slotted content via the style attribute -->
            <${e} data-testid="test-field" label="${u(t.label)}">
            ${t.suffix}
            </${e}>`)}`,frameworkSources:[{framework:"React",load:t=>`import { ${r(e)} } from "@capitec/omni-components-react/${b(e)}";
    
// Note that styles are applied to the slotted content via the style property
const App = () => <${r(e)}${t.label?` label='${t.label}'`:""}>
                    <svg slot="suffix" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" style={{fill: 'orange', marginRight: '10px'}}><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM12 7a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 .743.648L17 12a.75.75 0 0 1-.75.75h-3.5v3.5a.75.75 0 0 1-.648.743L12 17a.75.75 0 0 1-.75-.75v-3.5h-3.5a.75.75 0 0 1-.743-.648L7 12a.75.75 0 0 1 .75-.75h3.5v-3.5a.75.75 0 0 1 .648-.743Z"/></svg>
                  </${r(e)}>;`}],name:"Suffix",description:"Set html content to display as a suffix within the component.",args:{label:"Suffix",suffix:h`<svg slot="suffix" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" style="fill: orange; margin-right:10px;"><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM12 7a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 .743.648L17 12a.75.75 0 0 1-.75.75h-3.5v3.5a.75.75 0 0 1-.648.743L12 17a.75.75 0 0 1-.75-.75v-3.5h-3.5a.75.75 0 0 1-.743-.648L7 12a.75.75 0 0 1 .75-.75h3.5v-3.5a.75.75 0 0 1 .648-.743Z"/></svg>`},play:async t=>{var i;let l=(i=d(t.canvasElement).getByTestId("test-field").shadowRoot)==null?void 0:i.querySelector("slot[name=suffix]");await s(l).toBeTruthy();let o=l==null?void 0:l.assignedElements().find(c=>c.tagName.toLocaleLowerCase()==="svg");await s(o).toBeTruthy()}}),Q=(e,n="The input value")=>{let t={render:a=>p`${m(`<${e} data-testid="test-field" label="${u(a.label)}" value="${a.value}" clearable></${e}>`)}`,frameworkSources:[{framework:"React",load:a=>`import { ${r(e)} } from "@capitec/omni-components-react/${b(e)}";
    
const App = () => <${r(e)}${a.label?` label='${a.label}'`:""}${a.value?` value='${a.value}'`:""} clearable/>;`},{framework:"Vue",load:a=>v(t.render(a),void 0,l=>l.replace(" disabled",' :disabled="true"').replace(" clearable",' :clearable="true"'))}],name:"Clearable",description:"Clear the value of the component.",args:{label:"Clearable",clearable:!0,value:n},play:async a=>{var c;let l=d(a.canvasElement).getByTestId("test-field"),o=l.attributes.getNamedItem("clearable");await s(o).toBeTruthy();let i=(c=l.shadowRoot)==null?void 0:c.getElementById("clear-click");await f.click(i),await s(l).toHaveValue("")}};return t},W=(e,n="The input value")=>{let t={render:a=>p`${m(`<${e} data-testid="test-field" label="${u(a.label)}" value="${a.value}" clearable>
                ${a.clear}
                </${e}>`)}`,frameworkSources:[{framework:"React",load:a=>`import { ${r(e)} } from "@capitec/omni-components-react/${b(e)}";
    
const App = () => <${r(e)}${a.label?` label='${a.label}'`:""}${a.value?` value='${a.value}'`:""} clearable>
<svg slot="clear" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" style={{fill: 'orange'}}><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM8.47 8.47a.75.75 0 0 1 1.06 0L12 10.939l2.47-2.47a.75.75 0 0 1 .976-.072l.084.073a.75.75 0 0 1 0 1.06L13.061 12l2.47 2.47a.75.75 0 0 1 .072.976l-.073.084a.75.75 0 0 1-1.06 0L12 13.061l-2.47 2.47a.75.75 0 0 1-.976.072l-.084-.073a.75.75 0 0 1 0-1.06L10.939 12l-2.47-2.47a.75.75 0 0 1-.072-.976Z" /></svg>
</${r(e)}>`},{framework:"Vue",load:a=>v(t.render(a),void 0,l=>l.replace(" disabled",' :disabled="true"').replace(" clearable",' :clearable="true"'))}],name:"Custom Clearable Slot",description:"Component with custom clear slot icon.",args:{label:"Custom Clearable Slot",clearable:!0,value:n,clear:h`<svg slot="clear" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  width="24px" height="24px" style="fill: orange;"><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM8.47 8.47a.75.75 0 0 1 1.06 0L12 10.939l2.47-2.47a.75.75 0 0 1 .976-.072l.084.073a.75.75 0 0 1 0 1.06L13.061 12l2.47 2.47a.75.75 0 0 1 .072.976l-.073.084a.75.75 0 0 1-1.06 0L12 13.061l-2.47 2.47a.75.75 0 0 1-.976.072l-.084-.073a.75.75 0 0 1 0-1.06L10.939 12l-2.47-2.47a.75.75 0 0 1-.072-.976Z" /></svg>`},play:async a=>{var c;let l=d(a.canvasElement).getByTestId("test-field"),o=l.attributes.getNamedItem("clearable");await s(o).toBeTruthy();let i=(c=l.shadowRoot)==null?void 0:c.getElementById("clear-click");await f.click(i),await s(l).toHaveValue("")}};return t},X=(e,n="The input value")=>{let t={render:a=>p`${m(`<${e} data-testid="test-field" label="${u(a.label)}" value="${a.value}" disabled></${e}>`)}`,frameworkSources:[{framework:"React",load:a=>`import { ${r(e)} } from "@capitec/omni-components-react/${b(e)}";
    
const App = () => <${r(e)}${a.label?` label='${a.label}'`:""}${a.value?` value='${a.value}'`:""} disabled/>;`},{framework:"Vue",load:a=>v(t.render(a),void 0,l=>l.replace(" disabled",' :disabled="true"').replace(" clearable",' :clearable="true"'))}],name:"Disabled",description:"Prevent interaction (pointer/input events).",args:{label:"Disabled",disabled:!0,value:n},play:async a=>{var $;let l=d(a.canvasElement).getByTestId("test-field"),o=l.attributes.getNamedItem("disabled");await s(o).toBeTruthy();let i=y.fn();l.addEventListener("input",i);let c=($=l.shadowRoot)==null?void 0:$.getElementById("inputField");await f.type(c,"Value Update 3",{pointerEventsCheck:0}),await s(i).toBeCalledTimes(0)}};return t};export{j as a,O as b,z as c,G as d,J as e,K as f,Q as g,W as h,X as i};
//# sourceMappingURL=chunk.IRA62FXI.js.map