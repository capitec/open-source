import{E as d,x as c}from"./chunk.VT33ZWJV.js";import{a as n}from"./chunk.2T6FOQVU.js";import{a as i}from"./chunk.W7VHYLAH.js";import{d as o}from"./chunk.63YMDT6M.js";import{m as b,p as u}from"./chunk.BF43NN75.js";b();u();function l(e){return e.replace(/(^\w|-\w)/g,$)}function $(e){return e.replace(/-/,"").toUpperCase()}function s(e){return e.replace("omni-","")}var Z=e=>({render:t=>o`${n(`<${e}  data-testid="test-field" label="${i(t.label)}"></${e}>`)}`,frameworkSources:[{framework:"React",load:t=>`import { ${l(e)} } from "@capitec/omni-components-react/${s(e)}";
    
const App = () => <${l(e)}${t.label?` label='${t.label}'`:""}/>;`}],name:"Label",description:"Set a text value to display as a label.",args:{label:"The Label"}}),B=e=>({render:t=>o`${n(`<${e}  data-testid="test-field" label="${i(t.label)}" hint="${t.hint}"></${e}>`)}`,frameworkSources:[{framework:"React",load:t=>`import { ${l(e)} } from "@capitec/omni-components-react/${s(e)}";
    
const App = () => <${l(e)}${t.label?` label='${t.label}'`:""}${t.hint?` hint='${t.hint}'`:""}/>;`}],name:"Hint",description:"Set a text value to display as a hint.",args:{label:"Hint",hint:"The Hint label"}}),M=e=>({render:t=>o`${n(`<${e} data-testid="test-field" label="${t.label}" error="${i(t.error)}"></${e}>`)}`,frameworkSources:[{framework:"React",load:t=>`import { ${l(e)} } from "@capitec/omni-components-react/${s(e)}";
    
const App = () => <${l(e)}${t.label?` label='${t.label}'`:""}${t.error?` error='${t.error}'`:""}/>;`}],name:"Error",description:"Set a text value to display as an error.",args:{label:"Error",error:"The Error label"}}),F=(e,a="The input value")=>({render:r=>o`${n(`<${e} data-testid="test-field" label="${i(r.label)}" value="${r.value}"></${e}>`)}`,frameworkSources:[{framework:"React",load:r=>`import { ${l(e)} } from "@capitec/omni-components-react/${s(e)}";
    
const App = () => <${l(e)}${r.label?` label='${r.label}'`:""}${r.value?` value='${r.value}'`:""}/>;`}],name:"Value",description:"Set the current value of the component.",args:{label:"Value",value:a}}),R=e=>({render:t=>o`${n(`
            <!-- Note that styles are applied to the slotted content via the style attribute and the --omni-form-label-margin-left css variable is overridden -->
            <${e} data-testid="test-field" style="--omni-form-label-margin-left:40px;" label="${i(t.label)}">
            ${t.prefix}
            </${e}>`)}`,frameworkSources:[{framework:"React",load:t=>`import { ${l(e)} } from "@capitec/omni-components-react/${s(e)}";
    
// Note that styles are applied to the slotted content via the style property and the --omni-form-label-margin-left css variable is overridden
const App = () => <${l(e)}${t.label?` label='${t.label}'`:""} style={{'--omni-form-label-margin-left':'40px'}}>
                    <svg slot="prefix" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" style={{fill: 'orange', marginLeft: '10px'}}><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM12 7a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 .743.648L17 12a.75.75 0 0 1-.75.75h-3.5v3.5a.75.75 0 0 1-.648.743L12 17a.75.75 0 0 1-.75-.75v-3.5h-3.5a.75.75 0 0 1-.743-.648L7 12a.75.75 0 0 1 .75-.75h3.5v-3.5a.75.75 0 0 1 .648-.743Z"/></svg>
                  </${l(e)}>;`}],name:"Prefix",description:"Set html content to display as a prefix within the component.",args:{label:"Prefix",prefix:c`<svg slot="prefix" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" style="fill: orange; margin-left: 10px;"><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM12 7a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 .743.648L17 12a.75.75 0 0 1-.75.75h-3.5v3.5a.75.75 0 0 1-.648.743L12 17a.75.75 0 0 1-.75-.75v-3.5h-3.5a.75.75 0 0 1-.743-.648L7 12a.75.75 0 0 1 .75-.75h3.5v-3.5a.75.75 0 0 1 .648-.743Z"/></svg>`}}),T=e=>({render:t=>o`${n(`
            <!-- Note that styles are applied to the slotted content via the style attribute -->
            <${e} data-testid="test-field" label="${i(t.label)}">
            ${t.suffix}
            </${e}>`)}`,frameworkSources:[{framework:"React",load:t=>`import { ${l(e)} } from "@capitec/omni-components-react/${s(e)}";
    
// Note that styles are applied to the slotted content via the style property
const App = () => <${l(e)}${t.label?` label='${t.label}'`:""}>
                    <svg slot="suffix" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" style={{fill: 'orange', marginRight: '10px'}}><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM12 7a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 .743.648L17 12a.75.75 0 0 1-.75.75h-3.5v3.5a.75.75 0 0 1-.648.743L12 17a.75.75 0 0 1-.75-.75v-3.5h-3.5a.75.75 0 0 1-.743-.648L7 12a.75.75 0 0 1 .75-.75h3.5v-3.5a.75.75 0 0 1 .648-.743Z"/></svg>
                  </${l(e)}>;`}],name:"Suffix",description:"Set html content to display as a suffix within the component.",args:{label:"Suffix",suffix:c`<svg slot="suffix" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" style="fill: orange; margin-right:10px;"><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM12 7a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 .743.648L17 12a.75.75 0 0 1-.75.75h-3.5v3.5a.75.75 0 0 1-.648.743L12 17a.75.75 0 0 1-.75-.75v-3.5h-3.5a.75.75 0 0 1-.743-.648L7 12a.75.75 0 0 1 .75-.75h3.5v-3.5a.75.75 0 0 1 .648-.743Z"/></svg>`}}),V=(e,a="The input value")=>{let t={render:r=>o`${n(`<${e} data-testid="test-field" label="${i(r.label)}" value="${r.value}" clearable></${e}>`)}`,frameworkSources:[{framework:"React",load:r=>`import { ${l(e)} } from "@capitec/omni-components-react/${s(e)}";
    
const App = () => <${l(e)}${r.label?` label='${r.label}'`:""}${r.value?` value='${r.value}'`:""} clearable/>;`},{framework:"Vue",load:r=>d(t.render(r),void 0,p=>p.replace(" disabled",' :disabled="true"').replace(" clearable",' :clearable="true"'))}],name:"Clearable",description:"Clear the value of the component.",args:{label:"Clearable",clearable:!0,value:a}};return t},E=(e,a="The input value")=>{let t={render:r=>o`${n(`<${e} data-testid="test-field" label="${i(r.label)}" value="${r.value}" clearable>
                ${r.clear}
                </${e}>`)}`,frameworkSources:[{framework:"React",load:r=>`import { ${l(e)} } from "@capitec/omni-components-react/${s(e)}";
    
const App = () => <${l(e)}${r.label?` label='${r.label}'`:""}${r.value?` value='${r.value}'`:""} clearable>
<svg slot="clear" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" style={{fill: 'orange'}}><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM8.47 8.47a.75.75 0 0 1 1.06 0L12 10.939l2.47-2.47a.75.75 0 0 1 .976-.072l.084.073a.75.75 0 0 1 0 1.06L13.061 12l2.47 2.47a.75.75 0 0 1 .072.976l-.073.084a.75.75 0 0 1-1.06 0L12 13.061l-2.47 2.47a.75.75 0 0 1-.976.072l-.084-.073a.75.75 0 0 1 0-1.06L10.939 12l-2.47-2.47a.75.75 0 0 1-.072-.976Z" /></svg>
</${l(e)}>`},{framework:"Vue",load:r=>d(t.render(r),void 0,p=>p.replace(" disabled",' :disabled="true"').replace(" clearable",' :clearable="true"'))}],name:"Custom Clearable Slot",description:"Component with custom clear slot icon.",args:{label:"Custom Clearable Slot",clearable:!0,value:a,clear:c`<svg slot="clear" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  width="24px" height="24px" style="fill: orange;"><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM8.47 8.47a.75.75 0 0 1 1.06 0L12 10.939l2.47-2.47a.75.75 0 0 1 .976-.072l.084.073a.75.75 0 0 1 0 1.06L13.061 12l2.47 2.47a.75.75 0 0 1 .072.976l-.073.084a.75.75 0 0 1-1.06 0L12 13.061l-2.47 2.47a.75.75 0 0 1-.976.072l-.084-.073a.75.75 0 0 1 0-1.06L10.939 12l-2.47-2.47a.75.75 0 0 1-.072-.976Z" /></svg>`}};return t},H=(e,a="The input value")=>{let t={render:r=>o`${n(`<${e} data-testid="test-field" label="${i(r.label)}" value="${r.value}" disabled></${e}>`)}`,frameworkSources:[{framework:"React",load:r=>`import { ${l(e)} } from "@capitec/omni-components-react/${s(e)}";
    
const App = () => <${l(e)}${r.label?` label='${r.label}'`:""}${r.value?` value='${r.value}'`:""} disabled/>;`},{framework:"Vue",load:r=>d(t.render(r),void 0,p=>p.replace(" disabled",' :disabled="true"').replace(" clearable",' :clearable="true"'))}],name:"Disabled",description:"Prevent interaction (pointer/input events).",args:{label:"Disabled",disabled:!0,value:a}};return t};export{Z as a,B as b,M as c,F as d,R as e,T as f,V as g,E as h,H as i};
//# sourceMappingURL=chunk.WTSDFIPJ.js.map