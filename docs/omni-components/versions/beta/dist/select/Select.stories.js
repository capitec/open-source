import"../chunks-js/chunk.MUJSZT2H.js";import"../chunks-js/chunk.Y2FJIW7X.js";import"../chunks-js/chunk.F7QUJQT5.js";import"../chunks-js/chunk.STJOQLHS.js";import"../chunks-js/chunk.XLKVLWPJ.js";import"../chunks-js/chunk.32LOAOEJ.js";import{a as L,b as x,c as E,e as R,f as M,g as H,h as P}from"../chunks-js/chunk.RYXMLQGX.js";import"../chunks-js/chunk.K2UMXYHA.js";import"../chunks-js/chunk.I3LVDBCB.js";import"../chunks-js/chunk.E3RY574V.js";import"../chunks-js/chunk.XGCBNSF2.js";import{a as D}from"../chunks-js/chunk.IRJIQSYL.js";import"../chunks-js/chunk.LCIHREUY.js";import{a as $,b as r}from"../chunks-js/chunk.MHLMY33S.js";import{m as I,x as A,z as m}from"../chunks-js/chunk.WI5F3R4J.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.ZPV4YWBP.js";import{a as c}from"../chunks-js/chunk.6QCQBNRL.js";import{c as h}from"../chunks-js/chunk.N6OKW4B2.js";import{d as l}from"../chunks-js/chunk.W54IKPJD.js";import{a as v}from"../chunks-js/chunk.32OT4JFD.js";import"../chunks-js/chunk.B6SUKNHE.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as d,d as g}from"../chunks-js/chunk.F6MIXR4E.js";import{h as _,m as F,p as C}from"../chunks-js/chunk.BF43NN75.js";F();C();var y=_(D(),1);var ye={title:"UI Components/Select",component:"omni-select"},S=[{id:"1",label:"Peter Parker"},{id:"2",label:"James Howlett"},{id:"3",label:"Tony Stark"},{id:"4",label:"Steve Rodgers"},{id:"5",label:"Bruce Banner"},{id:"6",label:"Wanda Maximoff"},{id:"7",label:"TChalla"},{id:"8",label:"Henry P. McCoy"},{id:"9",label:"Carl Lucas"},{id:"10",label:"Frank Castle"}],f=["Bruce Wayne","Clark Kent","Barry Allen","Arthur Curry","Hal Jordan"];async function O(e){return await new Promise(t=>setTimeout(()=>t(),2e3)),e}async function W(e,t){return await new Promise(a=>setTimeout(()=>a(),2e3)),j(e,t)}function j(e,t){return Array.isArray(t)&&e!==null?t=t.filter(a=>J(e,a)):t}function J(e,t){return t.toString().toLowerCase().includes(e.toLowerCase())}var pe={render:e=>d`
        <omni-select
            data-testid="test-select"
            label="${c(e.label)}"
            value="${e.value}"
            hint="${c(e.hint)}"
            error="${c(e.error)}"
            .items="${e.items}"
            display-field="${e.displayField}"
            .renderItem="${e.renderItem}"
            .renderSelection="${e.renderSelection}"
            .filterItems="${e.filterItems}"
            id-field="${e.idField}"
            ?disabled="${e.disabled}"
            ?clearable="${e.clearable}"
            ?searchable="${e.searchable}"
            empty-message="${e.emptyMessage}"
            >${e.prefix?d`${`\r
`}${v(I("prefix",e.prefix))}`:g}
            ${e.clear?d`${`\r
`}${v(I("clear",e.clear))}`:g}${e.suffix?d`${`\r
`}${v(I("suffix",e.suffix))}`:g}
            ${e.loading_indicator?d`${`\r
`}${v(I("loading_indicator",e.loading_indicator))}${`\r
`}`:g}${e.prefix||e.suffix||e.clear?`\r
`:g}</omni-select
        >
    `,name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,clearable:!1,searchable:!1,prefix:"",suffix:"",clear:"",items:S,displayField:"label",idField:"id",loading_indicator:"",emptyMessage:"No items provided"},play:async e=>{var u,w,B;let t=h(e.canvasElement).getByTestId("test-select"),a=y.fn(),i=y.fn();t.addEventListener("click",a),t.addEventListener("change",i),await r.click(t),await r.click(t),await l(a).toBeCalledTimes(2);let s=(u=t.shadowRoot)==null?void 0:u.getElementById("control");await l(s).toBeTruthy(),await r.click(t);let o=await m(t.shadowRoot,"#items-container");await l(o).toBeTruthy();let n=(w=t.shadowRoot)==null?void 0:w.getElementById("items");await l(n).toBeTruthy();let p=await m(t.shadowRoot,".item");await l(p).toBeTruthy(),await r.click(p);let b=(B=t.shadowRoot)==null?void 0:B.getElementById("select");await l(b).toHaveValue(S[0].label),await l(i).toBeCalledTimes(1)}},ue={render:e=>d`
        <omni-select
            data-testid="test-select"
            label="${c(e.label)}"
            .data="${e.data}"
            hint="${c(e.hint)}"
            error="${c(e.error)}"
            .items="${e.items}"
            display-field="${e.displayField}"
            .renderItem="${e.renderItem}"
            id-field="${e.idField}">
        </omni-select>
    `,frameworkSources:[{framework:"HTML",load:e=>`
            
<omni-select
    id="omni-select"
    label="${e.label}"
    display-field="${e.displayField}"
    id-field="${e.idField}">
</omni-select>
<script defer>
    const displayItems = [
        { id: '1', label: 'Peter Parker' },
        { id: '2', label: 'James Howlett' },
        { id: '3', label: 'Tony Stark' },
        { id: '4', label: 'Steve Rodgers' },
        { id: '5', label: 'Bruce Banner' },
        { id: '6', label: 'Wanda Maximoff' },
        { id: '7', label: 'TChalla' },
        { id: '8', label: 'Henry P. McCoy' },
        { id: '9', label: 'Carl Lucas' },
        { id: '10', label: 'Frank Castle' }
    ];
                
    async function promiseDisplayItems(data) {
        await new Promise((r) => setTimeout(() => r(), 2000));
        return data;
    }
                
    async function renderItem(item) {
        await new Promise((resolve, reject) => {
            // Setting 2000 ms time
            setTimeout(resolve, 2000);
        });
        const i = document.createElement('i');
        i.innerText = item.label;
        i.style.color = 'red';

        return i;
    }       
    select = document.getElementById('omni-select');


    select.renderItem = renderItem;
    select.items = () => promiseDisplayItems(displayItems);
<\/script>
`},{framework:"React",load:e=>`import { OmniSelect } from "@capitec/omni-components-react/select";

const displayItems = [
    { id: '1', label: 'Peter Parker' },
    { id: '2', label: 'James Howlett' },
    { id: '3', label: 'Tony Stark' },
    { id: '4', label: 'Steve Rodgers' },
    { id: '5', label: 'Bruce Banner' },
    { id: '6', label: 'Wanda Maximoff' },
    { id: '7', label: 'TChalla' },
    { id: '8', label: 'Henry P. McCoy' },
    { id: '9', label: 'Carl Lucas' },
    { id: '10', label: 'Frank Castle' }
];
            
async function promiseDisplayItems(data) {
    await new Promise((r) => setTimeout(() => r(), 2000));
    return data;
}
            
async function renderItem(item) {
    await new Promise((resolve, reject) => {
        // Setting 2000 ms time
        setTimeout(resolve, 2000);
    });
    const i = document.createElement('i');
    i.innerText = item.label;
    i.style.color = 'red';

    return i;
}           
const App = () => <OmniSelect label="${e.label}" display-field="${e.displayField}" id-field="${e.idField}" items={() => promiseDisplayItems(displayItems)} renderItem={renderItem} />;`}],name:"Async",description:"Render each item from an async function.",args:{label:"Async item renderer function",data:{},items:()=>O(S),displayField:"label",idField:"id",renderItem:async e=>{await new Promise((a,i)=>{setTimeout(a,2e3)});let t=document.createElement("i");return t.innerText=e.label,t.style.color="red",t}},play:async e=>{var n;let t=h(e.canvasElement).getByTestId("test-select"),a=y.fn(),i=y.fn();t.addEventListener("click",a),t.addEventListener("change",i),await r.click(t);let s;navigator.userAgent==="Test Runner"?s=await m(t.shadowRoot,".item",void 0,3e3):s=await m(t.shadowRoot,".item",void 0,5e3),await r.click(s);let o=(n=t.shadowRoot)==null?void 0:n.getElementById("select");await l(o).toHaveValue(S[0].label)}},we={render:e=>d`
        <omni-select
            data-testid="test-select"
            label="${c(e.label)}"
            .data="${e.data}"
            hint="${c(e.hint)}"
            error="${c(e.error)}"
            .items="${e.items}"
            display-field="${e.displayField}"
            .renderItem="${e.renderItem}"
            id-field="${e.idField}">
            ${v(I("loading_indicator",e.loading_indicator))}
        </omni-select>
    `,frameworkSources:[{framework:"HTML",load:e=>`
            
<omni-select
    id="omni-select"
    label="${e.label}"
    display-field="${e.displayField}"
    id-field="${e.idField}">
    <span slot="loading_indicator">...</span>
</omni-select>
<script defer>
    const displayItems = [
        { id: '1', label: 'Peter Parker' },
        { id: '2', label: 'James Howlett' },
        { id: '3', label: 'Tony Stark' },
        { id: '4', label: 'Steve Rodgers' },
        { id: '5', label: 'Bruce Banner' },
        { id: '6', label: 'Wanda Maximoff' },
        { id: '7', label: 'TChalla' },
        { id: '8', label: 'Henry P. McCoy' },
        { id: '9', label: 'Carl Lucas' },
        { id: '10', label: 'Frank Castle' }
    ];
                
    async function promiseDisplayItems(data) {
        await new Promise((r) => setTimeout(() => r(), 2000));
        return data;
    }
                
    async function renderItem(item) {
        await new Promise((resolve, reject) => {
            // Setting 2000 ms time
            setTimeout(resolve, 2000);
        });
        const i = document.createElement('i');
        i.innerText = item.label;
        i.style.color = 'red';

        return i;
    }       
    select = document.getElementById('omni-select');


    select.renderItem = renderItem;
    select.items = () => promiseDisplayItems(displayItems);
<\/script>
`},{framework:"React",load:e=>`import { OmniSelect } from "@capitec/omni-components-react/select";

const displayItems = [
    { id: '1', label: 'Peter Parker' },
    { id: '2', label: 'James Howlett' },
    { id: '3', label: 'Tony Stark' },
    { id: '4', label: 'Steve Rodgers' },
    { id: '5', label: 'Bruce Banner' },
    { id: '6', label: 'Wanda Maximoff' },
    { id: '7', label: 'TChalla' },
    { id: '8', label: 'Henry P. McCoy' },
    { id: '9', label: 'Carl Lucas' },
    { id: '10', label: 'Frank Castle' }
];
            
async function promiseDisplayItems(data) {
    await new Promise((r) => setTimeout(() => r(), 2000));
    return data;
}
            
async function renderItem(item) {
    await new Promise((resolve, reject) => {
        // Setting 2000 ms time
        setTimeout(resolve, 2000);
    });
    const i = document.createElement('i');
    i.innerText = item.label;
    i.style.color = 'red';

    return i;
}           
const App = () => <OmniSelect label="${e.label}" display-field="${e.displayField}" id-field="${e.idField}" items={() => promiseDisplayItems(displayItems)} renderItem={renderItem}>
                    <span slot="loading_indicator">...</span>
                  </OmniSelect>;`}],name:"Loading Slot",description:"Set html content to render while populating items list.",args:{label:"Loading Slot",data:{},items:()=>O(S),displayField:"label",idField:"id",renderItem:async e=>{await new Promise((a,i)=>{setTimeout(a,2e3)});let t=document.createElement("i");return t.innerText=e.label,t.style.color="red",t},loading_indicator:A`<span>...</span>`},play:async e=>{var n;let t=h(e.canvasElement).getByTestId("test-select"),a=y.fn(),i=y.fn();t.addEventListener("click",a),t.addEventListener("change",i),await r.click(t);let s;navigator.userAgent==="Test Runner"?s=await m(t.shadowRoot,".item",void 0,3e3):s=await m(t.shadowRoot,".item",void 0,5e3),await r.click(s);let o=(n=t.shadowRoot)==null?void 0:n.getElementById("select");await l(o).toHaveValue(S[0].label)}},he={render:e=>d`
        <omni-select
            data-testid="test-select"
            label="${c(e.label)}"
            hint="${c(e.hint)}"
            error="${c(e.error)}"
            .items="${e.items}"
            display-field="${e.displayField}"
            id-field="${e.idField}">
        </omni-select>
    `,frameworkSources:[{framework:"HTML",load:e=>`
            
<omni-select
    id="omni-select"
    label="${e.label}"
    display-field="${e.displayField}"
    id-field="${e.idField}">
</omni-select>
<script defer>
    const stringItems = ['Bruce Wayne', 'Clark Kent', 'Barry Allen', 'Arthur Curry', 'Hal Jordan'];  
    select = document.getElementById('omni-select');

    select.items = stringItems;
<\/script>
`},{framework:"React",load:e=>`import { OmniSelect } from "@capitec/omni-components-react/select";

const stringItems = ['Bruce Wayne', 'Clark Kent', 'Barry Allen', 'Arthur Curry', 'Hal Jordan'];    
const App = () => <OmniSelect label="${e.label}" display-field="${e.displayField}" id-field="${e.idField}" items={stringItems} />;`}],name:"String",description:"Use a string array as the items source.",args:{label:"String",data:{},items:f,displayField:"label",idField:"id"},play:async e=>{var n;let t=h(e.canvasElement).getByTestId("test-select"),a=y.fn(),i=y.fn();t.addEventListener("click",a),t.addEventListener("change",i),await r.click(t);let s=await m(t.shadowRoot,".item");await r.click(s);let o=(n=t.shadowRoot)==null?void 0:n.getElementById("select");await l(o).toHaveValue(f[0])}},fe={render:e=>d`
        <omni-select
            data-testid="test-select"
            label="${c(e.label)}"
            hint="${c(e.hint)}"
            error="${c(e.error)}"
            .renderSelection="${e.renderSelection}"
            value="${e.value}"
            .items="${e.items}"
            display-field="${e.displayField}"
            id-field="${e.idField}">
        </omni-select>
    `,frameworkSources:[{framework:"HTML",load:e=>`
            
<omni-select
    id="omni-select"
    value="${e.value}"
    label="${e.label}">
</omni-select>
<script defer>
    const stringItems = ['Bruce Wayne', 'Clark Kent', 'Barry Allen', 'Arthur Curry', 'Hal Jordan'];  
    select = document.getElementById('omni-select');


    async function renderSelection(item) {
        await new Promise((resolve, reject) => {
            // Setting 2000 ms time
            setTimeout(resolve, 2000);
        });
        const i = document.createElement('i');
        i.innerText = item;
        i.style.color = 'blue';
        return i;
    }

    select.renderSelection = renderSelection;
    select.items = stringItems;
<\/script>
`},{framework:"React",load:e=>`import { OmniSelect } from "@capitec/omni-components-react/select";

async function renderSelection(item) {
    await new Promise((resolve, reject) => {
        // Setting 2000 ms time
        setTimeout(resolve, 2000);
    });
    const i = document.createElement('i');
    i.innerText = item;
    i.style.color = 'blue';
    return i;
}
const stringItems = ['Bruce Wayne', 'Clark Kent', 'Barry Allen', 'Arthur Curry', 'Hal Jordan'];    
const App = () => <OmniSelect label="${e.label}" value="${e.value}" items={stringItems} renderSelection={renderSelection}/>;`}],name:"Selection Renderer",description:"Provide a function to render custom html content for the selection.",args:{label:"Selection Renderer",items:f,renderSelection:async e=>{await new Promise((a,i)=>{setTimeout(a,2e3)});let t=document.createElement("i");return t.innerText=e,t.style.color="blue",t},value:"Clark Kent"},play:async e=>{var n;let t=h(e.canvasElement).getByTestId("test-select"),a=y.fn(),i=y.fn();t.addEventListener("click",a),t.addEventListener("change",i),await r.click(t);let s=await m(t.shadowRoot,".item");await r.click(s);let o=(n=t.shadowRoot)==null?void 0:n.getElementById("select");await l(o).toHaveValue(f[0])}},be={render:e=>d`
        <omni-select
            data-testid="test-select"
            label="${c(e.label)}"
            .items="${e.items}"
            display-field="${e.displayField}"
            empty-message="${e.emptyMessage}"
            id-field="${e.idField}">
        </omni-select>
    `,frameworkSources:[{framework:"React",load:e=>`import { OmniSelect } from "@capitec/omni-components-react/select";
              
const App = () => <OmniSelect label="${e.label}" display-field="${e.displayField}" empty-message="${e.emptyMessage}" id-field="${e.idField}"/>;`}],name:"Empty Message",description:"Set a text value to display when there are no items.",args:{label:"Empty",items:[],emptyMessage:"No items provided",displayField:"label",idField:"id"},play:async e=>{let t=h(e.canvasElement).getByTestId("test-select"),a=y.fn();t.addEventListener("click",a),await r.click(t);let i=await m(t.shadowRoot,".none");await l(i).toHaveTextContent(e.args.emptyMessage)}},Se={render:e=>d`
        <omni-select data-testid="test-select" label="${c(e.label)}" .items="${e.items}" ?disabled="${e.disabled}">
        </omni-select>
    `,frameworkSources:[{framework:"React",load:e=>`import { OmniSelect } from "@capitec/omni-components-react/select";

const App = () => <OmniSelect label="${e.label}" disabled/>;`}],name:"Disabled",description:"Prevent interaction (pointer events).",args:{label:"Disabled",disabled:!0,items:S},play:async e=>{let t=h(e.canvasElement).getByTestId("test-select"),a=y.fn();t.addEventListener("click",a),await l(()=>r.click(t)).rejects.toThrow(/pointer-events: none/),await l(a).toBeCalledTimes(0)}},ge={render:e=>d`
        <omni-select data-testid="test-select" label="${c(e.label)}" .items="${e.items}">
            <svg slot="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" style="fill: orange;"><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM12 7a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 .743.648L17 12a.75.75 0 0 1-.75.75h-3.5v3.5a.75.75 0 0 1-.648.743L12 17a.75.75 0 0 1-.75-.75v-3.5h-3.5a.75.75 0 0 1-.743-.648L7 12a.75.75 0 0 1 .75-.75h3.5v-3.5a.75.75 0 0 1 .648-.743Z"/></svg>
            <svg slot="more" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" style="fill: orange;"><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM12 7a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 .743.648L17 12a.75.75 0 0 1-.75.75h-3.5v3.5a.75.75 0 0 1-.648.743L12 17a.75.75 0 0 1-.75-.75v-3.5h-3.5a.75.75 0 0 1-.743-.648L7 12a.75.75 0 0 1 .75-.75h3.5v-3.5a.75.75 0 0 1 .648-.743Z"/></svg>
        </omni-select>
    `,frameworkSources:[{framework:"HTML",load:e=>`
            
<omni-select
    id="omni-select"
    label="${e.label}">
        <svg slot="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" style="fill: orange;"><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM12 7a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 .743.648L17 12a.75.75 0 0 1-.75.75h-3.5v3.5a.75.75 0 0 1-.648.743L12 17a.75.75 0 0 1-.75-.75v-3.5h-3.5a.75.75 0 0 1-.743-.648L7 12a.75.75 0 0 1 .75-.75h3.5v-3.5a.75.75 0 0 1 .648-.743Z"/></svg>
        <svg slot="more" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" style="fill: orange;"><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM12 7a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 .743.648L17 12a.75.75 0 0 1-.75.75h-3.5v3.5a.75.75 0 0 1-.648.743L12 17a.75.75 0 0 1-.75-.75v-3.5h-3.5a.75.75 0 0 1-.743-.648L7 12a.75.75 0 0 1 .75-.75h3.5v-3.5a.75.75 0 0 1 .648-.743Z"/></svg>
</omni-select>
<script defer>
    const stringItems = ['Bruce Wayne', 'Clark Kent', 'Barry Allen', 'Arthur Curry', 'Hal Jordan'];    

    select = document.getElementById('omni-select');
    select.items = stringItems;
<\/script>
`},{framework:"React",load:e=>`import { OmniSelect } from "@capitec/omni-components-react/select";

const stringItems = ['Bruce Wayne', 'Clark Kent', 'Barry Allen', 'Arthur Curry', 'Hal Jordan'];           
const App = () => <OmniSelect label="${e.label}" items={stringItems}>                    
                    <svg slot="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" style={{fill: 'orange'}}><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM12 7a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 .743.648L17 12a.75.75 0 0 1-.75.75h-3.5v3.5a.75.75 0 0 1-.648.743L12 17a.75.75 0 0 1-.75-.75v-3.5h-3.5a.75.75 0 0 1-.743-.648L7 12a.75.75 0 0 1 .75-.75h3.5v-3.5a.75.75 0 0 1 .648-.743Z"/></svg>
                    <svg slot="more" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" style={{fill: 'orange'}}><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM12 7a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 .743.648L17 12a.75.75 0 0 1-.75.75h-3.5v3.5a.75.75 0 0 1-.648.743L12 17a.75.75 0 0 1-.75-.75v-3.5h-3.5a.75.75 0 0 1-.743-.648L7 12a.75.75 0 0 1 .75-.75h3.5v-3.5a.75.75 0 0 1 .648-.743Z"/></svg>
                  </OmniSelect>;`}],name:"Custom Control Slot",description:"Set html content to display within the available control slots.",args:{label:"Custom slots",items:f},play:async e=>{var a,i;let t=h(e.canvasElement).getByTestId("test-select");if(window.matchMedia?window.matchMedia("screen and (min-width: 767px)").matches:window.innerWidth>=767){let s=(a=t.shadowRoot)==null?void 0:a.querySelector("slot[name=arrow]");await l(s).toBeTruthy();let o=s==null?void 0:s.assignedElements().find(n=>n.tagName.toLocaleLowerCase()==="svg");await l(o).toBeTruthy()}else{let s=(i=t.shadowRoot)==null?void 0:i.querySelector("slot[name=more]");await l(s).toBeTruthy();let o=s==null?void 0:s.assignedElements().find(n=>n.tagName.toLocaleLowerCase()==="svg");await l(o).toBeTruthy()}}},ve={render:e=>d`
    <omni-select data-testid="test-select" label="${c(e.label)}" .items="${e.items}" display-field="${e.displayField}" id-field="${e.idField}" ?searchable="${e.searchable}">
    </omni-select>
`,frameworkSources:[{framework:"HTML",load:e=>`<omni-select id='omni-select' label="${e.label}" display-field="${e.displayField}" id-field="${e.idField}" searchable></omni-select>
        <script defer>
            const displayItems = [
                { id: '1', label: 'Peter Parker' },
                { id: '2', label: 'James Howlett' },
                { id: '3', label: 'Tony Stark' },
                { id: '4', label: 'Steve Rodgers' },
                { id: '5', label: 'Bruce Banner' },
                { id: '6', label: 'Wanda Maximoff' },
                { id: '7', label: 'TChalla' },
                { id: '8', label: 'Henry P. McCoy' },
                { id: '9', label: 'Carl Lucas' },
                { id: '10', label: 'Frank Castle' }
            ];  
            select = document.getElementById('omni-select');
            select.items = displayItems;
        <\/script>`},{framework:"React",load:e=>`import { OmniSelect } from "@capitec/omni-components-react/select";

const displayItems = [
    { id: '1', label: 'Peter Parker' },
    { id: '2', label: 'James Howlett' },
    { id: '3', label: 'Tony Stark' },
    { id: '4', label: 'Steve Rodgers' },
    { id: '5', label: 'Bruce Banner' },
    { id: '6', label: 'Wanda Maximoff' },
    { id: '7', label: 'TChalla' },
    { id: '8', label: 'Henry P. McCoy' },
    { id: '9', label: 'Carl Lucas' },
    { id: '10', label: 'Frank Castle' }
];
const App = () => <OmniSelect label="${e.label}" display-field="${e.displayField}" id-field="${e.idField}" items={displayItems} searchable></OmniSelect>`}],name:"Searchable",description:"Adds a search input to limit the options to Select",args:{label:"Searchable",displayField:"label",idField:"id",searchable:!0,items:S},play:async e=>{var u,w;let t=h(e.canvasElement).getByTestId("test-select"),a=y.fn();t.addEventListener("click",a),await r.click(t);let i=await m(t.shadowRoot,"#searchField");await l(i).toBeTruthy(),$(i),await r.click(i);let s="Peter";await r.type(i,s);let o=await m(t.shadowRoot,"#items-container");await l(o).toBeTruthy();let n=(u=t.shadowRoot)==null?void 0:u.getElementById("items");await l(n).toBeTruthy();let p=await m(t.shadowRoot,".item");await l(p).toBeTruthy(),await r.click(p);let b=(w=t.shadowRoot)==null?void 0:w.getElementById("select");await l(b).toHaveValue(S[0].label)}},Ie={render:e=>d`
    <omni-select data-testid="test-select" label="${c(e.label)}" .items="${e.items}" ?searchable="${e.searchable}" .filterItems="${e.filterItems}">
    </omni-select>
`,frameworkSources:[{framework:"HTML",load:e=>`<omni-select id='omni-select' label="${e.label}" searchable></omni-select>
    <script defer>
        const stringItems = [
            'Bruce Wayne', 
            'Clark Kent', 
            'Barry Allen', 
            'Arthur Curry', 
            'Hal Jordan'
        ];  
        function customSearch(filter, items){
            if(Array.isArray(items) && filter !== null) {
                return items = items.filter((i) => itemFilter(filter,i));
            } else {
                return items;
            }
        }
        function itemFilter(filter, item){
            return item.includes(filter);
        }
        select = document.getElementById('omni-select');
        select.items = stringItems;
        select.filterItems = customSearch;
    <\/script>`},{framework:"React",load:e=>`import { OmniSelect } from "@capitec/omni-components-react/select";

const stringItems = [
    'Bruce Wayne', 
    'Clark Kent', 
    'Barry Allen', 
    'Arthur Curry', 
    'Hal Jordan'
];
function customSearch(filter, items){
    if(Array.isArray(items) && filter !== null){
        return items = items.filter((i) => itemFilter(filter,i));
    } else {
        return items;
    }
}
function itemFilter(filter, item){
    return item.includes(filter);
}
const App = () => <OmniSelect label="${e.label}" items={stringItems} filterItems={customSearch} searchable>
</OmniSelect>`}],name:"Custom Search",description:"Custom search function",args:{label:"Custom Search",searchable:!0,items:f,filterItems:j},play:async e=>{var u,w;let t=h(e.canvasElement).getByTestId("test-select"),a=y.fn();t.addEventListener("click",a),await r.click(t);let i=await m(t.shadowRoot,"#searchField");await l(i).toBeTruthy(),$(i),await r.click(i);let s="Bruce";await r.type(i,s);let o=await m(t.shadowRoot,"#items-container");await l(o).toBeTruthy();let n=(u=t.shadowRoot)==null?void 0:u.getElementById("items");await l(n).toBeTruthy();let p=await m(t.shadowRoot,".item");await l(p).toBeTruthy(),await r.click(p);let b=(w=t.shadowRoot)==null?void 0:w.getElementById("select");await l(b).toHaveValue(f[0])}},Be={render:e=>d`
    <omni-select data-testid="test-select" label="${c(e.label)}" .items="${e.items}" ?searchable="${e.searchable}" .filterItems="${e.filterItems}">
    </omni-select>
`,frameworkSources:[{framework:"HTML",load:e=>`<omni-select id='omni-select' label="${e.label}" searchable></omni-select>
    <script defer>
        const stringItems = [
            'Bruce Wayne', 
            'Clark Kent', 
            'Barry Allen', 
            'Arthur Curry', 
            'Hal Jordan'
        ]; 
        async function searchFilter(filter,items){
            await new Promise((r) => setTimeout(() => r(), 2000));
            return customSearch(filter,items);
        }
        
        function customSearch(filter, items){
            if(Array.isArray(items) && filter !== null) {
                return items = items.filter((i) => itemFilter(filter,i));
            } else {
                return items;
            }
        }
        function itemFilter(filter, item){
            return item.includes(filter);
        }
        select = document.getElementById('omni-select');
        select.items = stringItems;
        select.filterItems = searchFilter;
    <\/script>`},{framework:"React",load:e=>`import { OmniSelect } from "@capitec/omni-components-react/select";

const stringItems = [
    'Bruce Wayne', 
    'Clark Kent', 
    'Barry Allen', 
    'Arthur Curry', 
    'Hal Jordan'
];
async function searchFilter(filter, items){
    await new Promise((r) => setTimeout(() => r(), 2000));
    return customSearch(filter,items);
}
function customSearch(filter, items){
    if(Array.isArray(items) && filter !== null){
        return items = items.filter((i) => itemFilter(filter,i));
    } else {
        return items;
    }
}
function itemFilter(filter, item){
    return item.includes(filter);
}
const App = () => <OmniSelect label="${e.label}" items={stringItems} filterItems={searchFilter} searchable></OmniSelect>`}],name:"Server Side Filtering",description:"Select with server side filtering",args:{label:"Server Side Filtering",searchable:!0,items:f,filterItems:W},play:async e=>{var u,w;let t=h(e.canvasElement).getByTestId("test-select"),a=y.fn();t.addEventListener("click",a),await r.click(t);let i=await m(t.shadowRoot,"#searchField");await l(i).toBeTruthy(),$(i),await r.click(i);let s="Bruce";await r.type(i,s);let o=await m(t.shadowRoot,"#items-container");await l(o).toBeTruthy();let n=(u=t.shadowRoot)==null?void 0:u.getElementById("items");await l(n).toBeTruthy();let p;navigator.userAgent==="Test Runner"?p=await m(t.shadowRoot,".item",void 0,3e3):p=await m(t.shadowRoot,".item",void 0,5e3),await l(p).toBeTruthy(),await r.click(p);let b=(w=t.shadowRoot)==null?void 0:w.getElementById("select");await l(b).toHaveValue(f[0])}},$e={render:e=>d`
    <omni-select data-testid="test-select" label="${c(e.label)}" .items="${e.items}" ?searchable="${e.searchable}">
    <svg slot="search-clear" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  width="24px" height="24px" style="fill: orange;"><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM8.47 8.47a.75.75 0 0 1 1.06 0L12 10.939l2.47-2.47a.75.75 0 0 1 .976-.072l.084.073a.75.75 0 0 1 0 1.06L13.061 12l2.47 2.47a.75.75 0 0 1 .072.976l-.073.084a.75.75 0 0 1-1.06 0L12 13.061l-2.47 2.47a.75.75 0 0 1-.976.072l-.084-.073a.75.75 0 0 1 0-1.06L10.939 12l-2.47-2.47a.75.75 0 0 1-.072-.976Z" /></svg>
    </omni-select>
`,frameworkSources:[{framework:"HTML",load:e=>`
            <omni-select id='omni-select' label="${e.label}" searchable>
              <svg slot="search-clear" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  width="24px" height="24px" style="fill: orange;"><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM8.47 8.47a.75.75 0 0 1 1.06 0L12 10.939l2.47-2.47a.75.75 0 0 1 .976-.072l.084.073a.75.75 0 0 1 0 1.06L13.061 12l2.47 2.47a.75.75 0 0 1 .072.976l-.073.084a.75.75 0 0 1-1.06 0L12 13.061l-2.47 2.47a.75.75 0 0 1-.976.072l-.084-.073a.75.75 0 0 1 0-1.06L10.939 12l-2.47-2.47a.75.75 0 0 1-.072-.976Z" /></svg>
            </omni-select>
    <script defer>
        const stringItems = [
            'Bruce Wayne', 
            'Clark Kent', 
            'Barry Allen', 
            'Arthur Curry', 
            'Hal Jordan'
        ];  
        select = document.getElementById('omni-select');
        select.items = stringItems;
    <\/script>`},{framework:"React",load:e=>`import { OmniSelect } from "@capitec/omni-components-react/select";

const stringItems = [
    'Bruce Wayne', 
    'Clark Kent', 
    'Barry Allen', 
    'Arthur Curry', 
    'Hal Jordan'
];
const App = () => <OmniSelect label="${e.label}" items={stringItems} searchable>
<svg slot="search-clear" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" style={{fill: 'orange'}}><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM8.47 8.47a.75.75 0 0 1 1.06 0L12 10.939l2.47-2.47a.75.75 0 0 1 .976-.072l.084.073a.75.75 0 0 1 0 1.06L13.061 12l2.47 2.47a.75.75 0 0 1 .072.976l-.073.084a.75.75 0 0 1-1.06 0L12 13.061l-2.47 2.47a.75.75 0 0 1-.976.072l-.084-.073a.75.75 0 0 1 0-1.06L10.939 12l-2.47-2.47a.75.75 0 0 1-.072-.976Z" /></svg>
</OmniSelect>`}],name:"Custom Search Field Slot",description:"Select component with search field custom slotted icon.",args:{label:"Custom Search Slot",searchable:!0,items:f},play:async e=>{var B,k,T;let t=h(e.canvasElement).getByTestId("test-select"),a=y.fn();t.addEventListener("click",a),await r.click(t);let i=await m(t.shadowRoot,"#searchField");await l(i).toBeTruthy(),$(i),await r.click(i);let s="Bruce";await r.type(i,s);let o=(B=t.shadowRoot)==null?void 0:B.querySelector("slot[name=search-clear]");await l(o).toBeTruthy();let n=o==null?void 0:o.assignedElements().find(Z=>Z.tagName.toLocaleLowerCase()==="svg");await l(n).toBeTruthy();let p=await m(t.shadowRoot,"#items-container");await l(p).toBeTruthy();let b=(k=t.shadowRoot)==null?void 0:k.getElementById("items");await l(b).toBeTruthy();let u=await m(t.shadowRoot,".item");await l(u).toBeTruthy(),await r.click(u);let w=(T=t.shadowRoot)==null?void 0:T.getElementById("select");await l(w).toHaveValue(f[0])}},ke=L("omni-select"),Te=x("omni-select"),Fe=E("omni-select"),Ce=H("omni-select"),Ae=P("omni-select"),Le=R("omni-select"),xe=M("omni-select");export{ue as Async_Per_Item,Ce as Clearable,Ae as Custom_Clear_Slot,ge as Custom_Control_Slot,Ie as Custom_Search,$e as Custom_Search_Slot,Se as Disabled,be as Empty_Message,Fe as Error_Label,Te as Hint,pe as Interactive,ke as Label,we as Loading_Slot,Le as Prefix,ve as Searchable,fe as Selection_Renderer,Be as Server_Side_Filtering,he as String_Array,xe as Suffix,ye as default};
//# sourceMappingURL=Select.stories.js.map
