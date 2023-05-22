import{a as T}from"./chunk.IRJIQSYL.js";import{a as m}from"./chunk.G3QHRCKP.js";import{b as h}from"./chunk.MHLMY33S.js";import{w as b}from"./chunk.6ISQ3AKL.js";import{a as u}from"./chunk.6QCQBNRL.js";import{c as p}from"./chunk.N6OKW4B2.js";import{d as s}from"./chunk.W54IKPJD.js";import{b as d}from"./chunk.F6MIXR4E.js";import{h as y,m as $,p as w}from"./chunk.BF43NN75.js";$();w();var x=y(T(),1);function o(e){return e.replace(/(^\w|-\w)/g,g)}function g(e){return e.replace(/-/,"").toUpperCase()}function f(e){return e.replace("omni-","")}var q=e=>{let n={render:t=>d`${m(`<${e}  data-testid="test-field" label="${u(t.label)}"></${e}>`)}`,frameworkSources:[{framework:"React",load:t=>`import { ${o(e)} } from "@capitec/omni-components-react/${f(e)}";
    
const App = () => <${o(e)}${t.label?` label='${t.label}'`:""}/>;`}],name:"Label",description:"Set a text value to display as a label.",args:{label:"The Label"},play:async t=>{var l,r;let a=p(t.canvasElement).getByTestId("test-field");await s((l=a.shadowRoot)==null?void 0:l.querySelector(".label > div")).toHaveTextContent((r=n.args)==null?void 0:r.label)}};return n},j=e=>{let n={render:t=>d`${m(`<${e}  data-testid="test-field" label="${u(t.label)}" hint="${t.hint}"></${e}>`)}`,frameworkSources:[{framework:"React",load:t=>`import { ${o(e)} } from "@capitec/omni-components-react/${f(e)}";
    
const App = () => <${o(e)}${t.label?` label='${t.label}'`:""}${t.hint?` hint='${t.hint}'`:""}/>;`}],name:"Hint",description:"Set a text value to display as a hint.",args:{label:"Hint",hint:"The Hint label"},play:async t=>{var r;let l=p(t.canvasElement).getByTestId("test-field").shadowRoot.querySelector(".hint-label");await s(l).toBeTruthy(),await s(l).toHaveTextContent((r=n.args)==null?void 0:r.hint)}};return n},O=e=>{let n={render:t=>d`${m(`<${e} data-testid="test-field" label="${t.label}" error="${u(t.error)}"></${e}>`)}`,frameworkSources:[{framework:"React",load:t=>`import { ${o(e)} } from "@capitec/omni-components-react/${f(e)}";
    
const App = () => <${o(e)}${t.label?` label='${t.label}'`:""}${t.error?` error='${t.error}'`:""}/>;`}],name:"Error",description:"Set a text value to display as an error.",args:{label:"Error",error:"The Error label"},play:async t=>{var r;let l=p(t.canvasElement).getByTestId("test-field").shadowRoot.querySelector(".error-label");await s(l).toBeTruthy(),await s(l).toHaveTextContent((r=n.args)==null?void 0:r.error)}};return n},z=(e,n="The input value")=>{let t={render:a=>d`${m(`<${e} data-testid="test-field" label="${u(a.label)}" value="${a.value}"></${e}>`)}`,frameworkSources:[{framework:"React",load:a=>`import { ${o(e)} } from "@capitec/omni-components-react/${f(e)}";
    
const App = () => <${o(e)}${a.label?` label='${a.label}'`:""}${a.value?` value='${a.value}'`:""}/>;`}],name:"Value",description:"Set the current value of the component.",args:{label:"Value",value:n},play:async a=>{var i,c;let r=(i=p(a.canvasElement).getByTestId("test-field").shadowRoot)==null?void 0:i.getElementById("inputField");await s(r).toHaveValue((c=t.args)==null?void 0:c.value)}};return t},G=e=>({render:t=>d`${m(`
            <!-- Note that styles are applied to the slotted content via the style attribute and the --omni-form-label-margin-left css variable is overridden -->
            <${e} data-testid="test-field" style="--omni-form-label-margin-left:40px;" label="${u(t.label)}">
            ${t.prefix}
            </${e}>`)}`,frameworkSources:[{framework:"React",load:t=>`import { ${o(e)} } from "@capitec/omni-components-react/${f(e)}";
    
// Note that styles are applied to the slotted content via the style property and the --omni-form-label-margin-left css variable is overridden
const App = () => <${o(e)}${t.label?` label='${t.label}'`:""} style={{'--omni-form-label-margin-left':'40px'}}>
                    <svg slot="prefix" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" style={{fill: 'orange', marginLeft: '10px'}}><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM12 7a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 .743.648L17 12a.75.75 0 0 1-.75.75h-3.5v3.5a.75.75 0 0 1-.648.743L12 17a.75.75 0 0 1-.75-.75v-3.5h-3.5a.75.75 0 0 1-.743-.648L7 12a.75.75 0 0 1 .75-.75h3.5v-3.5a.75.75 0 0 1 .648-.743Z"/></svg>
                  </${o(e)}>;`}],name:"Prefix",description:"Set html content to display as a prefix within the component.",args:{label:"Prefix",prefix:b`<svg slot="prefix" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" style="fill: orange; margin-left: 10px;"><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM12 7a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 .743.648L17 12a.75.75 0 0 1-.75.75h-3.5v3.5a.75.75 0 0 1-.648.743L12 17a.75.75 0 0 1-.75-.75v-3.5h-3.5a.75.75 0 0 1-.743-.648L7 12a.75.75 0 0 1 .75-.75h3.5v-3.5a.75.75 0 0 1 .648-.743Z"/></svg>`},play:async t=>{var i;let l=(i=p(t.canvasElement).getByTestId("test-field").shadowRoot)==null?void 0:i.querySelector("slot[name=prefix]");await s(l).toBeTruthy();let r=l==null?void 0:l.assignedElements().find(c=>c.tagName.toLocaleLowerCase()==="svg");await s(r).toBeTruthy()}}),J=e=>({render:t=>d`${m(`
            <!-- Note that styles are applied to the slotted content via the style attribute -->
            <${e} data-testid="test-field" label="${u(t.label)}">
            ${t.suffix}
            </${e}>`)}`,frameworkSources:[{framework:"React",load:t=>`import { ${o(e)} } from "@capitec/omni-components-react/${f(e)}";
    
// Note that styles are applied to the slotted content via the style property
const App = () => <${o(e)}${t.label?` label='${t.label}'`:""}>
                    <svg slot="suffix" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" style={{fill: 'orange', marginRight: '10px'}}><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM12 7a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 .743.648L17 12a.75.75 0 0 1-.75.75h-3.5v3.5a.75.75 0 0 1-.648.743L12 17a.75.75 0 0 1-.75-.75v-3.5h-3.5a.75.75 0 0 1-.743-.648L7 12a.75.75 0 0 1 .75-.75h3.5v-3.5a.75.75 0 0 1 .648-.743Z"/></svg>
                  </${o(e)}>;`}],name:"Suffix",description:"Set html content to display as a suffix within the component.",args:{label:"Suffix",suffix:b`<svg slot="suffix" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" style="fill: orange; margin-right:10px;"><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM12 7a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 .743.648L17 12a.75.75 0 0 1-.75.75h-3.5v3.5a.75.75 0 0 1-.648.743L12 17a.75.75 0 0 1-.75-.75v-3.5h-3.5a.75.75 0 0 1-.743-.648L7 12a.75.75 0 0 1 .75-.75h3.5v-3.5a.75.75 0 0 1 .648-.743Z"/></svg>`},play:async t=>{var i;let l=(i=p(t.canvasElement).getByTestId("test-field").shadowRoot)==null?void 0:i.querySelector("slot[name=suffix]");await s(l).toBeTruthy();let r=l==null?void 0:l.assignedElements().find(c=>c.tagName.toLocaleLowerCase()==="svg");await s(r).toBeTruthy()}}),K=(e,n="The input value")=>({render:a=>d`${m(`<${e} data-testid="test-field" label="${u(a.label)}" value="${a.value}" clearable></${e}>`)}`,frameworkSources:[{framework:"React",load:a=>`import { ${o(e)} } from "@capitec/omni-components-react/${f(e)}";
    
const App = () => <${o(e)}${a.label?` label='${a.label}'`:""}${a.value?` value='${a.value}'`:""} clearable/>;`}],name:"Clearable",description:"Clear the value of the component.",args:{label:"Clearable",clearable:!0,value:n},play:async a=>{var c;let l=p(a.canvasElement).getByTestId("test-field"),r=l.attributes.getNamedItem("clearable");await s(r).toBeTruthy();let i=(c=l.shadowRoot)==null?void 0:c.getElementById("clear-click");await h.click(i),await s(l).toHaveValue("")}}),Q=(e,n="The input value")=>({render:a=>d`${m(`<${e} data-testid="test-field" label="${u(a.label)}" value="${a.value}" clearable>
                ${a.clear}
                </${e}>`)}`,frameworkSources:[{framework:"React",load:a=>`import { ${o(e)} } from "@capitec/omni-components-react/${f(e)}";
    
                const App = () => <${o(e)}${a.label?` label='${a.label}'`:""}${a.value?` value='${a.value}'`:""} clearable>
                    <svg slot="clear" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" style={{fill: 'orange', margin-left: '10px'}}><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM12 7a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 .743.648L17 12a.75.75 0 0 1-.75.75h-3.5v3.5a.75.75 0 0 1-.648.743L12 17a.75.75 0 0 1-.75-.75v-3.5h-3.5a.75.75 0 0 1-.743-.648L7 12a.75.75 0 0 1 .75-.75h3.5v-3.5a.75.75 0 0 1 .648-.743Z"/></svg>
                </${o(e)}>`}],name:"Custom Clearable Slot",description:"Component with custom clear slot icon.",args:{label:"Custom Clearable Slot",clearable:!0,value:n,clear:b`<svg slot="clear" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" style="fill: orange; margin-left: 10px;"><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM12 7a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 .743.648L17 12a.75.75 0 0 1-.75.75h-3.5v3.5a.75.75 0 0 1-.648.743L12 17a.75.75 0 0 1-.75-.75v-3.5h-3.5a.75.75 0 0 1-.743-.648L7 12a.75.75 0 0 1 .75-.75h3.5v-3.5a.75.75 0 0 1 .648-.743Z"/></svg>`},play:async a=>{var c;let l=p(a.canvasElement).getByTestId("test-field"),r=l.attributes.getNamedItem("clearable");await s(r).toBeTruthy();let i=(c=l.shadowRoot)==null?void 0:c.getElementById("clear-click");await h.click(i),await s(l).toHaveValue("")}}),W=(e,n="The input value")=>({render:a=>d`${m(`<${e} data-testid="test-field" label="${u(a.label)}" value="${a.value}" disabled></${e}>`)}`,frameworkSources:[{framework:"React",load:a=>`import { ${o(e)} } from "@capitec/omni-components-react/${f(e)}";
    
const App = () => <${o(e)}${a.label?` label='${a.label}'`:""}${a.value?` value='${a.value}'`:""} disabled/>;`}],name:"Disabled",description:"Prevent interaction (pointer/input events).",args:{label:"Disabled",disabled:!0,value:n},play:async a=>{var v;let l=p(a.canvasElement).getByTestId("test-field"),r=l.attributes.getNamedItem("disabled");await s(r).toBeTruthy();let i=x.fn();l.addEventListener("input",i);let c=(v=l.shadowRoot)==null?void 0:v.getElementById("inputField");await h.type(c,"Value Update 3",{pointerEventsCheck:0}),await s(i).toBeCalledTimes(0)}});export{q as a,j as b,O as c,z as d,G as e,J as f,K as g,Q as h,W as i};
//# sourceMappingURL=chunk.XLOQNJL6.js.map