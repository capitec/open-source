import"../chunks-js/chunk.22BPMVXX.js";import"../chunks-js/chunk.M6SSC5HK.js";import"../chunks-js/chunk.Y2FJIW7X.js";import"../chunks-js/chunk.STJOQLHS.js";import"../chunks-js/chunk.XLKVLWPJ.js";import"../chunks-js/chunk.32LOAOEJ.js";import{a as L,b as x,c as E,e as M,f as R,g as H,h as P}from"../chunks-js/chunk.XLOQNJL6.js";import"../chunks-js/chunk.K2UMXYHA.js";import"../chunks-js/chunk.CQEQBUXK.js";import"../chunks-js/chunk.E3RY574V.js";import"../chunks-js/chunk.XGCBNSF2.js";import{a as D}from"../chunks-js/chunk.IRJIQSYL.js";import{a as v}from"../chunks-js/chunk.G3QHRCKP.js";import{a as $,b as r}from"../chunks-js/chunk.MHLMY33S.js";import{l as I,w as A,y as c}from"../chunks-js/chunk.6ISQ3AKL.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.ZPV4YWBP.js";import{a as m}from"../chunks-js/chunk.6QCQBNRL.js";import{c as h}from"../chunks-js/chunk.N6OKW4B2.js";import{d as a}from"../chunks-js/chunk.W54IKPJD.js";import"../chunks-js/chunk.B6SUKNHE.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as d,d as g}from"../chunks-js/chunk.F6MIXR4E.js";import{h as j,m as F,p as C}from"../chunks-js/chunk.BF43NN75.js";F();C();var y=j(D(),1);var pe={title:"UI Components/Select",component:"omni-select"},b=[{id:"1",label:"Peter Parker"},{id:"2",label:"James Howlett"},{id:"3",label:"Tony Stark"},{id:"4",label:"Steve Rodgers"},{id:"5",label:"Bruce Banner"},{id:"6",label:"Wanda Maximoff"},{id:"7",label:"TChalla"},{id:"8",label:"Henry P. McCoy"},{id:"9",label:"Carl Lucas"},{id:"10",label:"Frank Castle"}],S=["Bruce Wayne","Clark Kent","Barry Allen","Arthur Curry","Hal Jordan"];async function Z(e){return await new Promise(t=>setTimeout(()=>t(),2e3)),e}async function W(e,t){return await new Promise(l=>setTimeout(()=>l(),2e3)),O(e,t)}function O(e,t){return Array.isArray(t)&&e!==null?t=t.filter(l=>J(e,l)):t}function J(e,t){return t.toString().toLowerCase().includes(e.toLowerCase())}var ye={render:e=>d`
        <omni-select
            data-testid="test-select"
            label="${m(e.label)}"
            value="${e.value}"
            hint="${m(e.hint)}"
            error="${m(e.error)}"
            .items="${e.items}"
            display-field="${e.displayField}"
            .renderItem="${e.renderItem}"
            .filterItems="${e.filterItems}"
            id-field="${e.idField}"
            ?disabled="${e.disabled}"
            ?clearable="${e.clearable}"
            ?seearchable="${e.searchable}"
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
    `,name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,clearable:!1,searchable:!1,prefix:"",suffix:"",clear:"",items:b,displayField:"label",idField:"id",loading_indicator:"",emptyMessage:"No items provided"},play:async e=>{var w,u,B;let t=h(e.canvasElement).getByTestId("test-select"),l=y.fn(),i=y.fn();t.addEventListener("click",l),t.addEventListener("change",i),await r.click(t),await r.click(t),await a(l).toBeCalledTimes(2);let s=(w=t.shadowRoot)==null?void 0:w.getElementById("control");await a(s).toBeTruthy(),await r.click(t);let n=await c(t.shadowRoot,"#items-container");await a(n).toBeTruthy();let o=(u=t.shadowRoot)==null?void 0:u.getElementById("items");await a(o).toBeTruthy();let p=await c(t.shadowRoot,".item");await a(p).toBeTruthy(),await r.click(p);let f=(B=t.shadowRoot)==null?void 0:B.getElementById("select");await a(f).toHaveValue(b[0].label),await a(i).toBeCalledTimes(1)}},we={render:e=>d`
        <omni-select
            data-testid="test-select"
            label="${m(e.label)}"
            .data="${e.data}"
            hint="${m(e.hint)}"
            error="${m(e.error)}"
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
const App = () => <OmniSelect label="${e.label}" display-field="${e.displayField}" id-field="${e.idField}" items={() => promiseDisplayItems(displayItems)} renderItem={renderItem} />;`}],name:"Async",description:"Render each item from an async function.",args:{label:"Async item renderer function",data:{},items:()=>Z(b),displayField:"label",idField:"id",renderItem:async e=>{await new Promise((l,i)=>{setTimeout(l,2e3)});let t=document.createElement("i");return t.innerText=e.label,t.style.color="red",t}},play:async e=>{var o;let t=h(e.canvasElement).getByTestId("test-select"),l=y.fn(),i=y.fn();t.addEventListener("click",l),t.addEventListener("change",i),await r.click(t);let s;navigator.userAgent==="Test Runner"?s=await c(t.shadowRoot,".item",void 0,3e3):s=await c(t.shadowRoot,".item",void 0,5e3),await r.click(s);let n=(o=t.shadowRoot)==null?void 0:o.getElementById("select");await a(n).toHaveValue(b[0].label)}},ue={render:e=>d`
        <omni-select
            data-testid="test-select"
            label="${m(e.label)}"
            .data="${e.data}"
            hint="${m(e.hint)}"
            error="${m(e.error)}"
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
                  </OmniSelect>;`}],name:"Loading Slot",description:"Set html content to render while populating items list.",args:{label:"Loading Slot",data:{},items:()=>Z(b),displayField:"label",idField:"id",renderItem:async e=>{await new Promise((l,i)=>{setTimeout(l,2e3)});let t=document.createElement("i");return t.innerText=e.label,t.style.color="red",t},loading_indicator:A`<span>...</span>`},play:async e=>{var o;let t=h(e.canvasElement).getByTestId("test-select"),l=y.fn(),i=y.fn();t.addEventListener("click",l),t.addEventListener("change",i),await r.click(t);let s;navigator.userAgent==="Test Runner"?s=await c(t.shadowRoot,".item",void 0,3e3):s=await c(t.shadowRoot,".item",void 0,5e3),await r.click(s);let n=(o=t.shadowRoot)==null?void 0:o.getElementById("select");await a(n).toHaveValue(b[0].label)}},he={render:e=>d`
        <omni-select
            data-testid="test-select"
            label="${m(e.label)}"
            hint="${m(e.hint)}"
            error="${m(e.error)}"
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
const App = () => <OmniSelect label="${e.label}" display-field="${e.displayField}" id-field="${e.idField}" items={stringItems} />;`}],name:"String",description:"Use a string array as the items source.",args:{label:"String",data:{},items:S,displayField:"label",idField:"id"},play:async e=>{var o;let t=h(e.canvasElement).getByTestId("test-select"),l=y.fn(),i=y.fn();t.addEventListener("click",l),t.addEventListener("change",i),await r.click(t);let s=await c(t.shadowRoot,".item");await r.click(s);let n=(o=t.shadowRoot)==null?void 0:o.getElementById("select");await a(n).toHaveValue(S[0])}},fe={render:e=>d`
        <omni-select
            data-testid="test-select"
            label="${m(e.label)}"
            .items="${e.items}"
            display-field="${e.displayField}"
            empty-message="${e.emptyMessage}"
            id-field="${e.idField}">
        </omni-select>
    `,frameworkSources:[{framework:"React",load:e=>`import { OmniSelect } from "@capitec/omni-components-react/select";
              
const App = () => <OmniSelect label="${e.label}" display-field="${e.displayField}" empty-message="${e.emptyMessage}" id-field="${e.idField}"/>;`}],name:"Empty Message",description:"Set a text value to display when there are no items.",args:{label:"Empty",items:[],emptyMessage:"No items provided",displayField:"label",idField:"id"},play:async e=>{let t=h(e.canvasElement).getByTestId("test-select"),l=y.fn();t.addEventListener("click",l),await r.click(t);let i=await c(t.shadowRoot,".none");await a(i).toHaveTextContent(e.args.emptyMessage)}},be={render:e=>d`
        <omni-select data-testid="test-select" label="${m(e.label)}" .items="${e.items}" ?disabled="${e.disabled}">
        </omni-select>
    `,frameworkSources:[{framework:"React",load:e=>`import { OmniSelect } from "@capitec/omni-components-react/select";

const App = () => <OmniSelect label="${e.label}" disabled/>;`}],name:"Disabled",description:"Prevent interaction (pointer events).",args:{label:"Disabled",disabled:!0,items:b},play:async e=>{let t=h(e.canvasElement).getByTestId("test-select"),l=y.fn();t.addEventListener("click",l),await a(()=>r.click(t)).rejects.toThrow(/pointer-events: none/),await a(l).toBeCalledTimes(0)}},Se={render:e=>d`
        <omni-select data-testid="test-select" label="${m(e.label)}" .items="${e.items}">
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
                  </OmniSelect>;`}],name:"Custom Control Slot",description:"Set html content to display within the available control slots.",args:{label:"Custom slots",items:S},play:async e=>{var l,i;let t=h(e.canvasElement).getByTestId("test-select");if(window.matchMedia?window.matchMedia("screen and (min-width: 767px)").matches:window.innerWidth>=767){let s=(l=t.shadowRoot)==null?void 0:l.querySelector("slot[name=arrow]");await a(s).toBeTruthy();let n=s==null?void 0:s.assignedElements().find(o=>o.tagName.toLocaleLowerCase()==="svg");await a(n).toBeTruthy()}else{let s=(i=t.shadowRoot)==null?void 0:i.querySelector("slot[name=more]");await a(s).toBeTruthy();let n=s==null?void 0:s.assignedElements().find(o=>o.tagName.toLocaleLowerCase()==="svg");await a(n).toBeTruthy()}}},ge={render:e=>d`
    <omni-select data-testid="test-select" label="${m(e.label)}" .items="${e.items}" display-field="${e.displayField}" id-field="${e.idField}" ?searchable="${e.searchable}">
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

        const App = () => <OmniSelect label="${e.label}" display-field="${e.displayField}" id-field="${e.idField}" items={displayItems} searchable></OmniSelect>`}],name:"Searchable",description:"Adds a search input to limit the options to Select",args:{label:"Searchable",displayField:"label",idField:"id",searchable:!0,items:b},play:async e=>{var w,u;let t=h(e.canvasElement).getByTestId("test-select"),l=y.fn();t.addEventListener("click",l),await r.click(t);let i=await c(t.shadowRoot,"#searchField");await a(i).toBeTruthy(),$(i),await r.click(i);let s="Peter";await r.type(i,s);let n=await c(t.shadowRoot,"#items-container");await a(n).toBeTruthy();let o=(w=t.shadowRoot)==null?void 0:w.getElementById("items");await a(o).toBeTruthy();let p=await c(t.shadowRoot,".item");await a(p).toBeTruthy(),await r.click(p);let f=(u=t.shadowRoot)==null?void 0:u.getElementById("select");await a(f).toHaveValue(b[0].label)}},ve={render:e=>d`
    <omni-select data-testid="test-select" label="${m(e.label)}" .items="${e.items}" ?searchable="${e.searchable}" .filterItems="${e.filterItems}">
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
        </OmniSelect>`}],name:"Custom Search",description:"Custom search function",args:{label:"Custom Search",searchable:!0,items:S,filterItems:O},play:async e=>{var w,u;let t=h(e.canvasElement).getByTestId("test-select"),l=y.fn();t.addEventListener("click",l),await r.click(t);let i=await c(t.shadowRoot,"#searchField");await a(i).toBeTruthy(),$(i),await r.click(i);let s="Bruce";await r.type(i,s);let n=await c(t.shadowRoot,"#items-container");await a(n).toBeTruthy();let o=(w=t.shadowRoot)==null?void 0:w.getElementById("items");await a(o).toBeTruthy();let p=await c(t.shadowRoot,".item");await a(p).toBeTruthy(),await r.click(p);let f=(u=t.shadowRoot)==null?void 0:u.getElementById("select");await a(f).toHaveValue(S[0])}},Ie={render:e=>d`
    <omni-select data-testid="test-select" label="${m(e.label)}" .items="${e.items}" ?searchable="${e.searchable}" .filterItems="${e.filterItems}">
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

        const App = () => <OmniSelect label="${e.label}" items={stringItems} filterItems={searchFilter} searchable></OmniSelect>`}],name:"Server Side Filtering",description:"Select with server side filtering",args:{label:"Server Side Filtering",searchable:!0,items:S,filterItems:W},play:async e=>{var w,u;let t=h(e.canvasElement).getByTestId("test-select"),l=y.fn();t.addEventListener("click",l),await r.click(t);let i=await c(t.shadowRoot,"#searchField");await a(i).toBeTruthy(),$(i),await r.click(i);let s="Bruce";await r.type(i,s);let n=await c(t.shadowRoot,"#items-container");await a(n).toBeTruthy();let o=(w=t.shadowRoot)==null?void 0:w.getElementById("items");await a(o).toBeTruthy();let p;navigator.userAgent==="Test Runner"?p=await c(t.shadowRoot,".item",void 0,3e3):p=await c(t.shadowRoot,".item",void 0,5e3),await a(p).toBeTruthy(),await r.click(p);let f=(u=t.shadowRoot)==null?void 0:u.getElementById("select");await a(f).toHaveValue(S[0])}},Be={render:e=>d`
    <omni-select data-testid="test-select" label="${m(e.label)}" .items="${e.items}" ?searchable="${e.searchable}">
        <svg slot="search-clear" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" style="fill: orange;"><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM12 7a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 .743.648L17 12a.75.75 0 0 1-.75.75h-3.5v3.5a.75.75 0 0 1-.648.743L12 17a.75.75 0 0 1-.75-.75v-3.5h-3.5a.75.75 0 0 1-.743-.648L7 12a.75.75 0 0 1 .75-.75h3.5v-3.5a.75.75 0 0 1 .648-.743Z"/></svg>
    </omni-select>
`,frameworkSources:[{framework:"HTML",load:e=>`
            <omni-select id='omni-select' label="${e.label}" searchable>
                <svg slot="search-clear" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" style="fill: orange;"><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM12 7a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 .743.648L17 12a.75.75 0 0 1-.75.75h-3.5v3.5a.75.75 0 0 1-.648.743L12 17a.75.75 0 0 1-.75-.75v-3.5h-3.5a.75.75 0 0 1-.743-.648L7 12a.75.75 0 0 1 .75-.75h3.5v-3.5a.75.75 0 0 1 .648-.743Z"/></svg>
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
        <svg slot="search-clear" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" style={{fill: 'orange'}}><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM12 7a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 .743.648L17 12a.75.75 0 0 1-.75.75h-3.5v3.5a.75.75 0 0 1-.648.743L12 17a.75.75 0 0 1-.75-.75v-3.5h-3.5a.75.75 0 0 1-.743-.648L7 12a.75.75 0 0 1 .75-.75h3.5v-3.5a.75.75 0 0 1 .648-.743Z"/></svg>
        </OmniSelect>`}],name:"Custom Search Field Slot",description:"Select component with search field custom slotted icon.",args:{label:"Custom Search Slot",searchable:!0,items:S},play:async e=>{var B,k,T;let t=h(e.canvasElement).getByTestId("test-select"),l=y.fn();t.addEventListener("click",l),await r.click(t);let i=await c(t.shadowRoot,"#searchField");await a(i).toBeTruthy(),$(i),await r.click(i);let s="Bruce";await r.type(i,s);let n=(B=t.shadowRoot)==null?void 0:B.querySelector("slot[name=search-clear]");await a(n).toBeTruthy();let o=n==null?void 0:n.assignedElements().find(_=>_.tagName.toLocaleLowerCase()==="svg");await a(o).toBeTruthy();let p=await c(t.shadowRoot,"#items-container");await a(p).toBeTruthy();let f=(k=t.shadowRoot)==null?void 0:k.getElementById("items");await a(f).toBeTruthy();let w=await c(t.shadowRoot,".item");await a(w).toBeTruthy(),await r.click(w);let u=(T=t.shadowRoot)==null?void 0:T.getElementById("select");await a(u).toHaveValue(S[0])}},$e=L("omni-select"),ke=x("omni-select"),Te=E("omni-select"),Fe=H("omni-select"),Ce=P("omni-select"),Ae=M("omni-select"),Le=R("omni-select");export{we as Async_Per_Item,Fe as Clearable,Ce as Custom_Clear_Slot_Icon,Se as Custom_Control_Slot,ve as Custom_Search,Be as Custom_Search_Slot,be as Disabled,fe as Empty_Message,Te as Error_Label,ke as Hint,ye as Interactive,$e as Label,ue as Loading_Slot,Ae as Prefix,ge as Searchable,Ie as Server_Side_Filtering,he as String_Array,Le as Suffix,pe as default};
//# sourceMappingURL=Select.stories.js.map
