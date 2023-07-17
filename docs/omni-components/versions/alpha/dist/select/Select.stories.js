import"../chunks-js/chunk.AKFA5FZI.js";import"../chunks-js/chunk.CNNXAJ4V.js";import"../chunks-js/chunk.YIANFESX.js";import{a as _}from"../chunks-js/chunk.AFJ2VLBG.js";import{a as $,b as s}from"../chunks-js/chunk.IEAYXHP4.js";import{c as f}from"../chunks-js/chunk.WXU7FCN5.js";import{e as a}from"../chunks-js/chunk.F2C2BPNZ.js";import"../chunks-js/chunk.BKUUO7ED.js";import{a as E,b as P,c as H,e as M,f as R,g as j,h as J}from"../chunks-js/chunk.CU6A34Y6.js";import"../chunks-js/chunk.ZGHDW2L3.js";import"../chunks-js/chunk.Y2FNDKPS.js";import{E as h,m as F,x as b,z as m}from"../chunks-js/chunk.ZCQBBFJF.js";import"../chunks-js/chunk.Z5LIJAXH.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.UHIDETPL.js";import"../chunks-js/chunk.KPSG3GC4.js";import"../chunks-js/chunk.MDYAUJ3Z.js";import"../chunks-js/chunk.VTL5CONA.js";import{a as k}from"../chunks-js/chunk.5DDJQYYG.js";import"../chunks-js/chunk.3U7QFP2Q.js";import"../chunks-js/chunk.LB764BBD.js";import{a as c}from"../chunks-js/chunk.XCXCHO25.js";import"../chunks-js/chunk.KRAWXAJA.js";import"../chunks-js/chunk.FT5UPVZS.js";import"../chunks-js/chunk.6C4LMRM7.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as d,e as I}from"../chunks-js/chunk.L3RZWW2F.js";import{h as O,m as x,p as L}from"../chunks-js/chunk.BF43NN75.js";x();L();var u=O(_(),1);var Ie={title:"UI Components/Select",component:"omni-select"},v=[{id:"1",label:"Peter Parker"},{id:"2",label:"James Howlett"},{id:"3",label:"Tony Stark"},{id:"4",label:"Steve Rodgers"},{id:"5",label:"Bruce Banner"},{id:"6",label:"Wanda Maximoff"},{id:"7",label:"TChalla"},{id:"8",label:"Henry P. McCoy"},{id:"9",label:"Carl Lucas"},{id:"10",label:"Frank Castle"}],g=["Bruce Wayne","Clark Kent","Barry Allen","Arthur Curry","Hal Jordan"];async function D(e){return await new Promise(t=>setTimeout(()=>t(),2e3)),e}async function K(e){return await new Promise(t=>setTimeout(()=>t(),2e3)),W(e,g)}function W(e,t){return Array.isArray(t)&&e?t=t.filter(l=>V(e,l)):t}function V(e,t){return t.toString().toLowerCase().includes(e.toLowerCase())}var C={render:e=>d`
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
`}${k(F("prefix",e.prefix))}`:I}
            ${e.clear?d`${`\r
`}${k(F("clear",e.clear))}`:I}${e.suffix?d`${`\r
`}${k(F("suffix",e.suffix))}`:I}
            ${e.loading_indicator?d`${`\r
`}${k(F("loading_indicator",e.loading_indicator))}${`\r
`}`:I}${e.prefix||e.suffix||e.clear?`\r
`:I}</omni-select
        >
    `,frameworkSources:[{framework:"Vue",sourceParts:{htmlFragment:e=>h(C.render(e),t=>{var l;return(l=t.firstElementChild)==null?void 0:l.setAttribute("replace-token","x")},t=>t.replace('replace-token="x"','.items="displayItems"').replace(" disabled",' :disabled="true"').replace(" clearable",' :clearable="true"').replace(" searchable",' :searchable="true"')),jsFragment:e=>`window.vueData = {
    displayItems: ${JSON.stringify(e.items,void 0,2)}
};`}},{framework:"Lit",sourceParts:{htmlFragment:e=>h(C.render(e),t=>{var l;return(l=t.firstElementChild)==null?void 0:l.setAttribute("replace-token","x")},t=>t.replace('replace-token="x"','.items="${displayItems}"')),jsFragment:e=>`const displayItems = ${JSON.stringify(e.items,void 0,2)};`}},{framework:"HTML",load:e=>h(C.render(e),t=>t.firstElementChild.id="omni-select",t=>t+`
<script defer>
    const displayItems = ${JSON.stringify(e.items,void 0,2)};       
    const select = document.getElementById('omni-select');
    select.items = displayItems;
<\/script>`)}],name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,clearable:!1,searchable:!1,prefix:"",suffix:"",clear:"",items:v,displayField:"label",idField:"id",loading_indicator:"",emptyMessage:"No items provided"},play:async e=>{var p,w,B;let t=f(e.canvasElement).getByTestId("test-select"),l=u.fn(),i=u.fn();t.addEventListener("click",l),t.addEventListener("change",i),await s.click(t),await s.click(t),await a(l).toBeCalledTimes(2);let r=(p=t.shadowRoot)==null?void 0:p.getElementById("control");await a(r).toBeTruthy(),await s.click(t);let o=await m(t.shadowRoot,"#items-container");await a(o).toBeTruthy();let n=(w=t.shadowRoot)==null?void 0:w.getElementById("items");await a(n).toBeTruthy();let y=await m(t.shadowRoot,".item");await a(y).toBeTruthy(),await s.click(y);let S=(B=t.shadowRoot)==null?void 0:B.getElementById("select");await a(S).toHaveValue(v[0].label),await a(i).toBeCalledTimes(1)}},N={render:e=>d`
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
`},{framework:"Vue",sourceParts:{htmlFragment:e=>h(N.render(e),t=>{var l;return(l=t.firstElementChild)==null?void 0:l.setAttribute("replace-token","x")},t=>t.replace('replace-token="x"','.items="promiseDisplayItems" :render-item.camel="renderItem"').replace(" disabled",' :disabled="true"').replace(" clearable",' :clearable="true"').replace(" searchable",' :searchable="true"')),jsFragment:e=>`window.vueData = {
    promiseDisplayItems: async () => {
        await new Promise((r) => setTimeout(() => r(), 2000));
        return [
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
    },
    renderItem: async (item) => {
        await new Promise((resolve, reject) => {
            // Setting 2000 ms time
            setTimeout(resolve, 2000);
        });
        const i = document.createElement('i');
        i.innerText = item.label;
        i.style.color = 'red';
    
        return i;
    }
};`}},{framework:"Lit",sourceParts:{htmlFragment:e=>b`<omni-select label="${e.label}" display-field="${e.displayField}" .items="\${() => promiseDisplayItems(displayItems)}" .renderItem="\${renderItem}" id-field="${e.idField}"></omni-select>`,jsFragment:e=>`const displayItems = [
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
            
const promiseDisplayItems = async (data) => {
    await new Promise((r) => setTimeout(() => r(), 2000));
    return data;
}
            
const renderItem = async (item) => {
    await new Promise((resolve, reject) => {
        // Setting 2000 ms time
        setTimeout(resolve, 2000);
    });
    const i = document.createElement('i');
    i.innerText = item.label;
    i.style.color = 'red';

    return i;
}
`}},{framework:"React",load:e=>`import { OmniSelect } from "@capitec/omni-components-react/select";

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
const App = () => <OmniSelect label="${e.label}" display-field="${e.displayField}" id-field="${e.idField}" items={() => promiseDisplayItems(displayItems)} renderItem={renderItem} />;`}],name:"Async",description:"Render each item from an async function.",args:{label:"Async item renderer function",data:{},items:()=>D(v),displayField:"label",idField:"id",renderItem:async e=>{await new Promise((l,i)=>{setTimeout(l,2e3)});let t=document.createElement("i");return t.innerText=e.label,t.style.color="red",t}},play:async e=>{var n;let t=f(e.canvasElement).getByTestId("test-select"),l=u.fn(),i=u.fn();t.addEventListener("click",l),t.addEventListener("change",i),await s.click(t);let r;navigator.userAgent==="Test Runner"?r=await m(t.shadowRoot,".item",void 0,3e3):r=await m(t.shadowRoot,".item",void 0,5e3),await s.click(r);let o=(n=t.shadowRoot)==null?void 0:n.getElementById("select");await a(o).toHaveValue(v[0].label)}},q={render:e=>d`
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
            ${k(F("loading_indicator",e.loading_indicator))}
        </omni-select>
    `,frameworkSources:[{framework:"Lit",sourceParts:{htmlFragment:e=>b`<omni-select label="${e.label}" display-field="${e.displayField}" .items="\${() => promiseDisplayItems(displayItems)}" .renderItem="\${renderItem}" id-field="${e.idField}">
    <span slot="loading_indicator">...</span>
</omni-select>`,jsFragment:`const displayItems = [
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
            
const promiseDisplayItems = async (data) => {
    await new Promise((r) => setTimeout(() => r(), 2000));
    return data;
}
            
const renderItem = async (item) => {
    await new Promise((resolve, reject) => {
        // Setting 2000 ms time
        setTimeout(resolve, 2000);
    });
    const i = document.createElement('i');
    i.innerText = item.label;
    i.style.color = 'red';

    return i;
}
`}},{framework:"Vue",sourceParts:{htmlFragment:e=>h(q.render(e),t=>{var l;return(l=t.firstElementChild)==null?void 0:l.setAttribute("replace-token","x")},t=>t.replace('replace-token="x"','.items="promiseDisplayItems" :render-item.camel="renderItem"').replace(" disabled",' :disabled="true"').replace(" clearable",' :clearable="true"').replace(" searchable",' :searchable="true"')),jsFragment:e=>`window.vueData = {
    promiseDisplayItems: async () => {
        await new Promise((r) => setTimeout(() => r(), 2000));
        return [
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
    },
    renderItem: async (item) => {
        await new Promise((resolve, reject) => {
            // Setting 2000 ms time
            setTimeout(resolve, 2000);
        });
        const i = document.createElement('i');
        i.innerText = item.label;
        i.style.color = 'red';
    
        return i;
    }
};`}},{framework:"HTML",load:e=>`
            
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
                  </OmniSelect>;`}],name:"Loading Slot",description:"Set html content to render while populating items list.",args:{label:"Loading Slot",data:{},items:()=>D(v),displayField:"label",idField:"id",renderItem:async e=>{await new Promise((l,i)=>{setTimeout(l,2e3)});let t=document.createElement("i");return t.innerText=e.label,t.style.color="red",t},loading_indicator:b`<span>...</span>`},play:async e=>{var n;let t=f(e.canvasElement).getByTestId("test-select"),l=u.fn(),i=u.fn();t.addEventListener("click",l),t.addEventListener("change",i),await s.click(t);let r;navigator.userAgent==="Test Runner"?r=await m(t.shadowRoot,".item",void 0,3e3):r=await m(t.shadowRoot,".item",void 0,5e3),await s.click(r);let o=(n=t.shadowRoot)==null?void 0:n.getElementById("select");await a(o).toHaveValue(v[0].label)}},ke={render:e=>d`
        <omni-select
            data-testid="test-select"
            label="${c(e.label)}"
            hint="${c(e.hint)}"
            error="${c(e.error)}"
            .items="${e.items}"
            display-field="${e.displayField}"
            id-field="${e.idField}">
        </omni-select>
    `,frameworkSources:[{framework:"Lit",sourceParts:{htmlFragment:e=>b`<omni-select label="${e.label}" display-field="${e.displayField}" .items="\${stringItems}" id-field="${e.idField}"></omni-select>`,jsFragment:"const stringItems = ['Bruce Wayne', 'Clark Kent', 'Barry Allen', 'Arthur Curry', 'Hal Jordan'];"}},{framework:"Vue",sourceParts:{htmlFragment:e=>b`<omni-select label="${e.label}" display-field="${e.displayField}" .items="stringItems" id-field="${e.idField}"></omni-select>`,jsFragment:`window.vueData = {
    stringItems: ['Bruce Wayne', 'Clark Kent', 'Barry Allen', 'Arthur Curry', 'Hal Jordan']
};`}},{framework:"HTML",load:e=>`
            
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
const App = () => <OmniSelect label="${e.label}" display-field="${e.displayField}" id-field="${e.idField}" items={stringItems} />;`}],name:"String",description:"Use a string array as the items source.",args:{label:"String",items:g,displayField:"label",idField:"id"},play:async e=>{var n;let t=f(e.canvasElement).getByTestId("test-select"),l=u.fn(),i=u.fn();t.addEventListener("click",l),t.addEventListener("change",i),await s.click(t);let r=await m(t.shadowRoot,".item");await s.click(r);let o=(n=t.shadowRoot)==null?void 0:n.getElementById("select");await a(o).toHaveValue(g[0])}},Fe={render:e=>d`
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
    `,frameworkSources:[{framework:"Lit",sourceParts:{htmlFragment:e=>b`<omni-select label="${e.label}" .items="\${stringItems}" .renderSelection="\${renderSelection}" value="${e.value}"></omni-select>`,jsFragment:`const stringItems = ['Bruce Wayne', 'Clark Kent', 'Barry Allen', 'Arthur Curry', 'Hal Jordan'];

async function renderSelection(item) {
    await new Promise((resolve, reject) => {
        // Setting 2000 ms time
        setTimeout(resolve, 2000);
    });
    const i = document.createElement('i');
    i.innerText = item;
    i.style.color = 'blue';
    return i;
}`}},{framework:"Vue",sourceParts:{htmlFragment:e=>b`<omni-select label="${e.label}" .items="stringItems" :render-selection.camel="renderSelection" value="${e.value}"></omni-select>`,jsFragment:e=>`window.vueData = {
    stringItems: ['Bruce Wayne', 'Clark Kent', 'Barry Allen', 'Arthur Curry', 'Hal Jordan'],
    renderSelection: async (item) => {
        await new Promise((resolve, reject) => {
            // Setting 2000 ms time
            setTimeout(resolve, 2000);
        });
        const i = document.createElement('i');
        i.innerText = item;
        i.style.color = 'blue';
        return i;
    }
};`}},{framework:"HTML",load:e=>`
            
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
const App = () => <OmniSelect label="${e.label}" value="${e.value}" items={stringItems} renderSelection={renderSelection}/>;`}],name:"Selection Renderer",description:"Provide a function to render custom html content for the selection.",args:{label:"Selection Renderer",items:g,renderSelection:async e=>{await new Promise((l,i)=>{setTimeout(l,2e3)});let t=document.createElement("i");return t.innerText=e,t.style.color="blue",t},value:"Clark Kent"},play:async e=>{var n;let t=f(e.canvasElement).getByTestId("test-select"),l=u.fn(),i=u.fn();t.addEventListener("click",l),t.addEventListener("change",i),await s.click(t);let r=await m(t.shadowRoot,".item");await s.click(r);let o=(n=t.shadowRoot)==null?void 0:n.getElementById("select");await a(o).toHaveValue(g[0])}},Be={render:e=>d`
        <omni-select
            data-testid="test-select"
            label="${c(e.label)}"
            .items="${e.items}"
            display-field="${e.displayField}"
            empty-message="${e.emptyMessage}"
            id-field="${e.idField}">
        </omni-select>
    `,frameworkSources:[{framework:"React",load:e=>`import { OmniSelect } from "@capitec/omni-components-react/select";
              
const App = () => <OmniSelect label="${e.label}" display-field="${e.displayField}" empty-message="${e.emptyMessage}" id-field="${e.idField}"/>;`}],name:"Empty Message",description:"Set a text value to display when there are no items.",args:{label:"Empty",items:[],emptyMessage:"No items provided",displayField:"label",idField:"id"},play:async e=>{let t=f(e.canvasElement).getByTestId("test-select"),l=u.fn();t.addEventListener("click",l),await s.click(t);let i=await m(t.shadowRoot,".none");await a(i).toHaveTextContent(e.args.emptyMessage)}},U={render:e=>d`
        <omni-select data-testid="test-select" label="${c(e.label)}" .items="${e.items}" ?disabled="${e.disabled}">
        </omni-select>
    `,frameworkSources:[{framework:"React",load:e=>`import { OmniSelect } from "@capitec/omni-components-react/select";

const App = () => <OmniSelect label="${e.label}" disabled/>;`},{framework:"Vue",load:e=>h(U.render(e),void 0,t=>t.replace(" disabled",' :disabled="true"').replace(" clearable",' :clearable="true"').replace(" searchable",' :searchable="true"'))}],name:"Disabled",description:"Prevent interaction (pointer events).",args:{label:"Disabled",disabled:!0,items:v},play:async e=>{let t=f(e.canvasElement).getByTestId("test-select"),l=u.fn();t.addEventListener("click",l),await a(()=>s.click(t)).rejects.toThrow(/pointer-events: none/),await a(l).toBeCalledTimes(0)}},z={render:e=>d`
        <omni-select data-testid="test-select" label="${c(e.label)}" .items="${e.items}">
            <svg slot="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" style="fill: orange;"><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM12 7a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 .743.648L17 12a.75.75 0 0 1-.75.75h-3.5v3.5a.75.75 0 0 1-.648.743L12 17a.75.75 0 0 1-.75-.75v-3.5h-3.5a.75.75 0 0 1-.743-.648L7 12a.75.75 0 0 1 .75-.75h3.5v-3.5a.75.75 0 0 1 .648-.743Z"/></svg>
            <svg slot="more" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" style="fill: orange;"><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM12 7a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 .743.648L17 12a.75.75 0 0 1-.75.75h-3.5v3.5a.75.75 0 0 1-.648.743L12 17a.75.75 0 0 1-.75-.75v-3.5h-3.5a.75.75 0 0 1-.743-.648L7 12a.75.75 0 0 1 .75-.75h3.5v-3.5a.75.75 0 0 1 .648-.743Z"/></svg>
        </omni-select>
    `,frameworkSources:[{framework:"Lit",sourceParts:{htmlFragment:e=>b`<omni-select label="${e.label}" .items="\${stringItems}">
    <svg slot="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" style="fill: orange;"><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM12 7a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 .743.648L17 12a.75.75 0 0 1-.75.75h-3.5v3.5a.75.75 0 0 1-.648.743L12 17a.75.75 0 0 1-.75-.75v-3.5h-3.5a.75.75 0 0 1-.743-.648L7 12a.75.75 0 0 1 .75-.75h3.5v-3.5a.75.75 0 0 1 .648-.743Z"/></svg>
    <svg slot="more" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" style="fill: orange;"><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM12 7a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 .743.648L17 12a.75.75 0 0 1-.75.75h-3.5v3.5a.75.75 0 0 1-.648.743L12 17a.75.75 0 0 1-.75-.75v-3.5h-3.5a.75.75 0 0 1-.743-.648L7 12a.75.75 0 0 1 .75-.75h3.5v-3.5a.75.75 0 0 1 .648-.743Z"/></svg>
</omni-select>`,jsFragment:"const stringItems = ['Bruce Wayne', 'Clark Kent', 'Barry Allen', 'Arthur Curry', 'Hal Jordan'];"}},{framework:"Vue",sourceParts:{htmlFragment:e=>h(z.render(e),t=>{var l;return(l=t.firstElementChild)==null?void 0:l.setAttribute("replace-token","x")},t=>t.replace('replace-token="x"','.items="stringItems"').replace(" disabled",' :disabled="true"').replace(" clearable",' :clearable="true"').replace(" searchable",' :searchable="true"')),jsFragment:e=>`window.vueData = {
    stringItems: ['Bruce Wayne', 'Clark Kent', 'Barry Allen', 'Arthur Curry', 'Hal Jordan']
};`}},{framework:"HTML",load:e=>`
            
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
                  </OmniSelect>;`}],name:"Custom Control Slot",description:"Set html content to display within the available control slots.",args:{label:"Custom slots",items:g},play:async e=>{var l,i;let t=f(e.canvasElement).getByTestId("test-select");if(window.matchMedia?window.matchMedia("screen and (min-width: 767px)").matches:window.innerWidth>=767){let r=(l=t.shadowRoot)==null?void 0:l.querySelector("slot[name=arrow]");await a(r).toBeTruthy();let o=r==null?void 0:r.assignedElements().find(n=>n.tagName.toLocaleLowerCase()==="svg");await a(o).toBeTruthy()}else{let r=(i=t.shadowRoot)==null?void 0:i.querySelector("slot[name=more]");await a(r).toBeTruthy();let o=r==null?void 0:r.assignedElements().find(n=>n.tagName.toLocaleLowerCase()==="svg");await a(o).toBeTruthy()}}},G={render:e=>d`
    <omni-select data-testid="test-select" label="${c(e.label)}" .items="${e.items}" display-field="${e.displayField}" id-field="${e.idField}" ?searchable="${e.searchable}">
    </omni-select>
`,frameworkSources:[{framework:"Lit",sourceParts:{htmlFragment:e=>b`<omni-select label="${e.label}" display-field="${e.displayField}" .items="\${displayItems}" id-field="${e.idField}" searchable></omni-select>`,jsFragment:`const displayItems = [
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
];`}},{framework:"Vue",sourceParts:{htmlFragment:e=>h(G.render(e),t=>{var l;return(l=t.firstElementChild)==null?void 0:l.setAttribute("replace-token","x")},t=>t.replace('replace-token="x"','.items="displayItems"').replace(" disabled",' :disabled="true"').replace(" clearable",' :clearable="true"').replace(" searchable",' :searchable="true"')),jsFragment:e=>`window.vueData = {
    displayItems: [
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
    ]
};`}},{framework:"HTML",load:e=>`<omni-select id='omni-select' label="${e.label}" display-field="${e.displayField}" id-field="${e.idField}" searchable></omni-select>
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
const App = () => <OmniSelect label="${e.label}" display-field="${e.displayField}" id-field="${e.idField}" items={displayItems} searchable></OmniSelect>`}],name:"Searchable",description:"Adds a search input to limit the options to Select",args:{label:"Searchable",displayField:"label",idField:"id",searchable:!0,items:v},play:async e=>{var p,w;let t=f(e.canvasElement).getByTestId("test-select"),l=u.fn();t.addEventListener("click",l),await s.click(t);let i=await m(t.shadowRoot,"#searchField");await a(i).toBeTruthy(),$(i),await s.click(i);let r="Peter";await s.type(i,r);let o=await m(t.shadowRoot,"#items-container");await a(o).toBeTruthy();let n=(p=t.shadowRoot)==null?void 0:p.getElementById("items");await a(n).toBeTruthy();let y=await m(t.shadowRoot,".item");await a(y).toBeTruthy(),await s.click(y);let S=(w=t.shadowRoot)==null?void 0:w.getElementById("select");await a(S).toHaveValue(v[0].label)}},Q={render:e=>d`
    <omni-select data-testid="test-select" label="${c(e.label)}" .items="${e.items}" ?searchable="${e.searchable}" .filterItems="${e.filterItems}">
    </omni-select>
`,frameworkSources:[{framework:"Lit",sourceParts:{htmlFragment:e=>b`<omni-select label="${e.label}"  .items="\${stringItems}" .filterItems="\${customSearch}" searchable></omni-select>`,jsFragment:`const stringItems = [
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
`}},{framework:"Vue",sourceParts:{htmlFragment:e=>h(Q.render(e),t=>{var l;return(l=t.firstElementChild)==null?void 0:l.setAttribute("replace-token","x")},t=>t.replace('replace-token="x"','.items="stringItems" :filter-items.camel="customSearch"').replace(" disabled",' :disabled="true"').replace(" clearable",' :clearable="true"').replace(" searchable",' :searchable="true"')),jsFragment:e=>`function itemFilter(filter, item){
    return item.includes(filter);
}

window.vueData = {
    stringItems: [
        'Bruce Wayne', 
        'Clark Kent', 
        'Barry Allen', 
        'Arthur Curry', 
        'Hal Jordan'
    ],
    customSearch: (filter, items) => {
        if(Array.isArray(items) && filter !== null) {
            return items = items.filter((i) => itemFilter(filter,i));
        } else {
            return items;
        }
    }
};`}},{framework:"HTML",load:e=>`<omni-select id='omni-select' label="${e.label}" searchable></omni-select>
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
</OmniSelect>`}],name:"Custom Search",description:"Custom search function",args:{label:"Custom Search",searchable:!0,items:g,filterItems:W},play:async e=>{var p,w;let t=f(e.canvasElement).getByTestId("test-select"),l=u.fn();t.addEventListener("click",l),await s.click(t);let i=await m(t.shadowRoot,"#searchField");await a(i).toBeTruthy(),$(i),await s.click(i);let r="Bruce";await s.type(i,r);let o=await m(t.shadowRoot,"#items-container");await a(o).toBeTruthy();let n=(p=t.shadowRoot)==null?void 0:p.getElementById("items");await a(n).toBeTruthy();let y=await m(t.shadowRoot,".item");await a(y).toBeTruthy(),await s.click(y);let S=(w=t.shadowRoot)==null?void 0:w.getElementById("select");await a(S).toHaveValue(g[0])}},X={render:e=>d`
    <omni-select data-testid="test-select" label="${c(e.label)}" .items="${e.items}" ?searchable="${e.searchable}">
    </omni-select>
`,frameworkSources:[{framework:"Lit",sourceParts:{htmlFragment:e=>b`<omni-select label="${e.label}" .items="\${serverSideFilterItems}" searchable></omni-select>`,jsFragment:`const stringItems = [
    'Bruce Wayne', 
    'Clark Kent', 
    'Barry Allen', 
    'Arthur Curry', 
    'Hal Jordan'
];

async function serverSideFilterItems(filter){
    await new Promise((r) => setTimeout(() => r(), 2000));
    return customSearch(filter,stringItems);
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
`}},{framework:"Vue",sourceParts:{htmlFragment:e=>h(X.render(e),t=>{var l;return(l=t.firstElementChild)==null?void 0:l.setAttribute("replace-token","x")},t=>t.replace('replace-token="x"','.items="serverSideFilterItems"').replace(" disabled",' :disabled="true"').replace(" clearable",' :clearable="true"').replace(" searchable",' :searchable="true"')),jsFragment:e=>`const stringItems = [
    'Bruce Wayne', 
    'Clark Kent', 
    'Barry Allen', 
    'Arthur Curry', 
    'Hal Jordan'
];

async function serverSideFilterItems(filter){
    await new Promise((r) => setTimeout(() => r(), 2000));
    return customSearch(filter,stringItems);
}

function customSearch(filter, items){
    if(Array.isArray(items) && filter) {
        return items = items.filter((i) => itemFilter(filter,i));
    } else {
        return items;
    }
}
function itemFilter(filter, item){
    return item.includes(filter);
}
window.vueData = {
    serverSideFilterItems: serverSideFilterItems
};`}},{framework:"HTML",load:e=>`<omni-select id='omni-select' label="${e.label}" searchable></omni-select>
    <script defer>
        const stringItems = [
            'Bruce Wayne', 
            'Clark Kent', 
            'Barry Allen', 
            'Arthur Curry', 
            'Hal Jordan'
        ]; 
        async function searchFilter(filter){
            await new Promise((r) => setTimeout(() => r(), 2000));
            return customSearch(filter,stringItems);
        }
        
        function customSearch(filter, items){
            if(Array.isArray(items) && filter) {
                return items = items.filter((i) => itemFilter(filter,i));
            } else {
                return items;
            }
        }

        function itemFilter(filter, item){
            return item.includes(filter);
        }
        select = document.getElementById('omni-select');
        select.items = searchFilter;
    <\/script>`},{framework:"React",load:e=>`import { OmniSelect } from "@capitec/omni-components-react/select";

const stringItems = [
    'Bruce Wayne', 
    'Clark Kent', 
    'Barry Allen', 
    'Arthur Curry', 
    'Hal Jordan'
];
async function searchFilter(filter){
    await new Promise((r) => setTimeout(() => r(), 2000));
    return customSearch(filter,stringItems);
}
function customSearch(filter, items){
    if(Array.isArray(items) && filter){
        return items = items.filter((i) => itemFilter(filter,i));
    } else {
        return items;
    }
}
function itemFilter(filter, item){
    return item.includes(filter);
}

const App = () => <OmniSelect label="${e.label}" items={searchFilter} searchable></OmniSelect>`}],name:"Server Side Filtering",description:"Select with server side filtering",args:{label:"Server Side Filtering",searchable:!0,items:K},play:async e=>{var p,w;let t=f(e.canvasElement).getByTestId("test-select"),l=u.fn();t.addEventListener("click",l),await s.click(t);let i=await m(t.shadowRoot,"#searchField");await a(i).toBeTruthy(),$(i),await s.click(i);let r="Bruce";await s.type(i,r);let o=await m(t.shadowRoot,"#items-container");await a(o).toBeTruthy();let n=(p=t.shadowRoot)==null?void 0:p.getElementById("items");await a(n).toBeTruthy();let y;navigator.userAgent==="Test Runner"?y=await m(t.shadowRoot,".item",void 0,3e3):y=await m(t.shadowRoot,".item",void 0,5e3),await a(y).toBeTruthy(),await s.click(y);let S=(w=t.shadowRoot)==null?void 0:w.getElementById("select");await a(S).toHaveValue(g[0])}},Y={render:e=>d`
    <omni-select data-testid="test-select" label="${c(e.label)}" .items="${e.items}" ?searchable="${e.searchable}">
    <svg slot="search-clear" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  width="24px" height="24px" style="fill: orange;"><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM8.47 8.47a.75.75 0 0 1 1.06 0L12 10.939l2.47-2.47a.75.75 0 0 1 .976-.072l.084.073a.75.75 0 0 1 0 1.06L13.061 12l2.47 2.47a.75.75 0 0 1 .072.976l-.073.084a.75.75 0 0 1-1.06 0L12 13.061l-2.47 2.47a.75.75 0 0 1-.976.072l-.084-.073a.75.75 0 0 1 0-1.06L10.939 12l-2.47-2.47a.75.75 0 0 1-.072-.976Z" /></svg>
    </omni-select>
`,frameworkSources:[{framework:"Lit",sourceParts:{htmlFragment:e=>b`<omni-select label="${e.label}" .items="\${stringItems}" searchable>
    <svg slot="search-clear" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  width="24px" height="24px" style="fill: orange;"><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM8.47 8.47a.75.75 0 0 1 1.06 0L12 10.939l2.47-2.47a.75.75 0 0 1 .976-.072l.084.073a.75.75 0 0 1 0 1.06L13.061 12l2.47 2.47a.75.75 0 0 1 .072.976l-.073.084a.75.75 0 0 1-1.06 0L12 13.061l-2.47 2.47a.75.75 0 0 1-.976.072l-.084-.073a.75.75 0 0 1 0-1.06L10.939 12l-2.47-2.47a.75.75 0 0 1-.072-.976Z" /></svg>
</omni-select>`,jsFragment:`const stringItems = [
    'Bruce Wayne', 
    'Clark Kent', 
    'Barry Allen', 
    'Arthur Curry', 
    'Hal Jordan'
];  `}},{framework:"Vue",sourceParts:{htmlFragment:e=>h(Y.render(e),t=>{var l;return(l=t.firstElementChild)==null?void 0:l.setAttribute("replace-token","x")},t=>t.replace('replace-token="x"','.items="stringItems"').replace(" disabled",' :disabled="true"').replace(" clearable",' :clearable="true"').replace(" searchable",' :searchable="true"')),jsFragment:`const stringItems = [
    'Bruce Wayne', 
    'Clark Kent', 
    'Barry Allen', 
    'Arthur Curry', 
    'Hal Jordan'
];
window.vueData = {
    stringItems: stringItems
};`}},{framework:"HTML",load:e=>`
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
</OmniSelect>`}],name:"Custom Search Field Slot",description:"Select component with search field custom slotted icon.",args:{label:"Custom Search Slot",searchable:!0,items:g},play:async e=>{var B,T,A;let t=f(e.canvasElement).getByTestId("test-select"),l=u.fn();t.addEventListener("click",l),await s.click(t);let i=await m(t.shadowRoot,"#searchField");await a(i).toBeTruthy(),$(i),await s.click(i);let r="Bruce";await s.type(i,r);let o=(B=t.shadowRoot)==null?void 0:B.querySelector("slot[name=search-clear]");await a(o).toBeTruthy();let n=o==null?void 0:o.assignedElements().find(Z=>Z.tagName.toLocaleLowerCase()==="svg");await a(n).toBeTruthy();let y=await m(t.shadowRoot,"#items-container");await a(y).toBeTruthy();let S=(T=t.shadowRoot)==null?void 0:T.getElementById("items");await a(S).toBeTruthy();let p=await m(t.shadowRoot,".item");await a(p).toBeTruthy(),await s.click(p);let w=(A=t.shadowRoot)==null?void 0:A.getElementById("select");await a(w).toHaveValue(g[0])}},$e=E("omni-select"),Ce=P("omni-select"),Te=H("omni-select"),Ae=j("omni-select"),xe=J("omni-select"),Le=M("omni-select"),Ee=R("omni-select");export{N as Async_Per_Item,Ae as Clearable,xe as Custom_Clear_Slot,z as Custom_Control_Slot,Q as Custom_Search,Y as Custom_Search_Slot,U as Disabled,Be as Empty_Message,Te as Error_Label,Ce as Hint,C as Interactive,$e as Label,q as Loading_Slot,Le as Prefix,G as Searchable,Fe as Selection_Renderer,X as Server_Side_Filtering,ke as String_Array,Ee as Suffix,Ie as default};
//# sourceMappingURL=Select.stories.js.map
