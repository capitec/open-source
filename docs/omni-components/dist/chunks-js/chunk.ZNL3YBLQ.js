import{u as c}from"./chunk.EZFZPYM4.js";import{b as g,c as v}from"./chunk.SNS3RAAO.js";import{a as m}from"./chunk.7QF4VYJR.js";import{a as u}from"./chunk.CFP25WDL.js";import{c as d}from"./chunk.555UF2OF.js";import{d as o}from"./chunk.ZDXRLLLZ.js";import{b as p}from"./chunk.CIM3NS6G.js";import{h as b,l as h,o as y}from"./chunk.2ZZQBHAA.js";h();y();var x=b(v(),1);var Z=a=>{let r={render:t=>p`${m(`<${a}  data-testid="test-field" label="${u(t.label)}"></${a}>`)}`,name:"Label",description:"Set a text value to display as a label.",args:{label:"The Label"},play:async t=>{var e,n;let s=d(t.canvasElement).getByTestId("test-field");await o((e=s.shadowRoot)==null?void 0:e.querySelector(".label > span")).toHaveTextContent((n=r.args)==null?void 0:n.label)}};return r},q=a=>{let r={render:t=>p`${m(`<${a}  data-testid="test-field" label="${u(t.label)}" hint="${t.hint}"></${a}>`)}`,name:"Hint",description:"Set a text value to display as a hint.",args:{label:"Hint",hint:"The Hint label"},play:async t=>{var n;let e=d(t.canvasElement).getByTestId("test-field").shadowRoot.querySelector(".hint-label");await o(e).toBeTruthy(),await o(e).toHaveTextContent((n=r.args)==null?void 0:n.hint)}};return r},D=a=>{let r={render:t=>p`${m(`<${a} data-testid="test-field" label="${t.label}" error="${u(t.error)}"></${a}>`)}`,name:"Error",description:"Set a text value to display as an error.",args:{label:"Error",error:"The Error label"},play:async t=>{var n;let e=d(t.canvasElement).getByTestId("test-field").shadowRoot.querySelector(".error-label");await o(e).toBeTruthy(),await o(e).toHaveTextContent((n=r.args)==null?void 0:n.error)}};return r},j=(a,r="The input value")=>{let t={render:s=>p`${m(`<${a} data-testid="test-field" label="${u(s.label)}" value="${s.value}"></${a}>`)}`,name:"Value",description:"Set the current value of the component.",args:{label:"Value",value:r},play:async s=>{var i,l;let n=(i=d(s.canvasElement).getByTestId("test-field").shadowRoot)==null?void 0:i.getElementById("inputField");await o(n).toHaveValue((l=t.args)==null?void 0:l.value)}};return t},O=a=>({render:t=>p`${m(`
            <!-- Note that styles are applied to the slotted content via the style attribute and the --omni-form-label-margin-left css variable is overridden -->
            <${a} data-testid="test-field" style="--omni-form-label-margin-left:40px;" label="${u(t.label)}">
            ${t.prefix}
            </${a}>`)}`,name:"Prefix",description:"Set html content to display as a prefix within the component.",args:{label:"Prefix",prefix:c`<svg slot="prefix" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" style="fill: orange; margin-left: 10px;"><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM12 7a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 .743.648L17 12a.75.75 0 0 1-.75.75h-3.5v3.5a.75.75 0 0 1-.648.743L12 17a.75.75 0 0 1-.75-.75v-3.5h-3.5a.75.75 0 0 1-.743-.648L7 12a.75.75 0 0 1 .75-.75h3.5v-3.5a.75.75 0 0 1 .648-.743Z"/></svg>`},play:async t=>{var i;let e=(i=d(t.canvasElement).getByTestId("test-field").shadowRoot)==null?void 0:i.querySelector("slot[name=prefix]");await o(e).toBeTruthy();let n=e==null?void 0:e.assignedElements().find(l=>l.tagName.toLocaleLowerCase()==="svg");await o(n).toBeTruthy()}}),k=a=>({render:t=>p`${m(`
            <!-- Note that styles are applied to the slotted content via the style attribute -->
            <${a} data-testid="test-field" label="${u(t.label)}">
            ${t.suffix}
            </${a}>`)}`,name:"Suffix",description:"Set html content to display as a suffix within the component.",args:{label:"Suffix",suffix:c`<svg slot="suffix" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" style="fill: orange; margin-right:10px;"><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM12 7a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 .743.648L17 12a.75.75 0 0 1-.75.75h-3.5v3.5a.75.75 0 0 1-.648.743L12 17a.75.75 0 0 1-.75-.75v-3.5h-3.5a.75.75 0 0 1-.743-.648L7 12a.75.75 0 0 1 .75-.75h3.5v-3.5a.75.75 0 0 1 .648-.743Z"/></svg>`},play:async t=>{var i;let e=(i=d(t.canvasElement).getByTestId("test-field").shadowRoot)==null?void 0:i.querySelector("slot[name=suffix]");await o(e).toBeTruthy();let n=e==null?void 0:e.assignedElements().find(l=>l.tagName.toLocaleLowerCase()==="svg");await o(n).toBeTruthy()}}),z=(a,r="The input value")=>({render:s=>p`${m(`<${a} data-testid="test-field" label="${u(s.label)}" value="${s.value}" disabled></${a}>`)}`,name:"Disabled",description:"Prevent interaction (pointer/input events).",args:{label:"Disabled",disabled:!0,value:r},play:async s=>{var f;let e=d(s.canvasElement).getByTestId("test-field"),n=e.attributes.getNamedItem("disabled");await o(n).toBeTruthy();let i=x.fn();e.addEventListener("input",i);let l=(f=e.shadowRoot)==null?void 0:f.getElementById("inputField");await g.type(l,"Value Update 3",{pointerEventsCheck:0}),await o(i).toBeCalledTimes(0)}});export{Z as a,q as b,D as c,j as d,O as e,k as f,z as g};
//# sourceMappingURL=chunk.ZNL3YBLQ.js.map
