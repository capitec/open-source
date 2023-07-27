import"../chunks-js/chunk.HI6ON5N3.js";import"../chunks-js/chunk.CNNXAJ4V.js";import"../chunks-js/chunk.YIANFESX.js";import"../chunks-js/chunk.5DQX5M47.js";import{a as f,b as h,c as w,e as g,f as S,g as $,h as v}from"../chunks-js/chunk.V3IXCXLU.js";import"../chunks-js/chunk.KLTOWBHK.js";import"../chunks-js/chunk.Y2FNDKPS.js";import"../chunks-js/chunk.KRAWXAJA.js";import{E as s,m,x as a}from"../chunks-js/chunk.OQGANNKN.js";import"../chunks-js/chunk.Z5LIJAXH.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.XUUOUKOL.js";import{a as l}from"../chunks-js/chunk.XCXCHO25.js";import"../chunks-js/chunk.D4QWJ7ZS.js";import"../chunks-js/chunk.MYG5FMLT.js";import"../chunks-js/chunk.2EDJFZZN.js";import{a as o}from"../chunks-js/chunk.N3FDHMD3.js";import"../chunks-js/chunk.YX3UUKJ3.js";import"../chunks-js/chunk.LB764BBD.js";import"../chunks-js/chunk.LUCH4Y6K.js";import"../chunks-js/chunk.PNTHLTQK.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as i,e as n}from"../chunks-js/chunk.L3RZWW2F.js";import{m as b,p as y}from"../chunks-js/chunk.BF43NN75.js";b();y();var d=[{id:"1",label:"Peter Parker"},{id:"2",label:"James Howlett"},{id:"3",label:"Tony Stark"},{id:"4",label:"Steve Rodgers"},{id:"5",label:"Bruce Banner"},{id:"6",label:"Wanda Maximoff"},{id:"7",label:"TChalla"},{id:"8",label:"Henry P. McCoy"},{id:"9",label:"Carl Lucas"},{id:"10",label:"Frank Castle"}],c=["Bruce Wayne","Clark Kent","Barry Allen","Arthur Curry","Hal Jordan"];async function F(e){return await new Promise(t=>setTimeout(()=>t(),2e3)),e}async function C(e){return await new Promise(t=>setTimeout(()=>t(),2e3)),I(e,c)}function I(e,t){return Array.isArray(t)&&e?t=t.filter(r=>k(e,r)):t}function k(e,t){return t.toString().toLowerCase().includes(e.toLowerCase())}var u={render:e=>i`
        <omni-select
            data-testid="test-select"
            label="${l(e.label)}"
            value="${e.value}"
            hint="${l(e.hint)}"
            error="${l(e.error)}"
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
            >${e.prefix?i`${`\r
`}${o(m("prefix",e.prefix))}`:n}
            ${e.clear?i`${`\r
`}${o(m("clear",e.clear))}`:n}${e.suffix?i`${`\r
`}${o(m("suffix",e.suffix))}`:n}
            ${e.loading_indicator?i`${`\r
`}${o(m("loading_indicator",e.loading_indicator))}${`\r
`}`:n}${e.prefix||e.suffix||e.clear?`\r
`:n}</omni-select
        >
    `,frameworkSources:[{framework:"Vue",sourceParts:{htmlFragment:e=>s(u.render(e),t=>{var r;return(r=t.firstElementChild)==null?void 0:r.setAttribute("replace-token","x")},t=>t.replace('replace-token="x"','.items="displayItems"').replace(" disabled",' :disabled="true"').replace(" clearable",' :clearable="true"').replace(" searchable",' :searchable="true"')),jsFragment:e=>`window.vueData = {
    displayItems: ${JSON.stringify(e.items,void 0,2)}
};`}},{framework:"Lit",sourceParts:{htmlFragment:e=>s(u.render(e),t=>{var r;return(r=t.firstElementChild)==null?void 0:r.setAttribute("replace-token","x")},t=>t.replace('replace-token="x"','.items="${displayItems}"')),jsFragment:e=>`const displayItems = ${JSON.stringify(e.items,void 0,2)};`}},{framework:"HTML",load:e=>s(u.render(e),t=>t.firstElementChild.id="omni-select",t=>t+`
<script defer>
    const displayItems = ${JSON.stringify(e.items,void 0,2)};       
    const select = document.getElementById('omni-select');
    select.items = displayItems;
<\/script>`)}],name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,clearable:!1,searchable:!1,prefix:"",suffix:"",clear:"",items:d,displayField:"label",idField:"id",loading_indicator:"",emptyMessage:"No items provided"}},A={render:e=>i`
        <omni-select
            data-testid="test-select"
            label="${l(e.label)}"
            .data="${e.data}"
            hint="${l(e.hint)}"
            error="${l(e.error)}"
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
`},{framework:"Vue",sourceParts:{htmlFragment:e=>s(A.render(e),t=>{var r;return(r=t.firstElementChild)==null?void 0:r.setAttribute("replace-token","x")},t=>t.replace('replace-token="x"','.items="promiseDisplayItems" :render-item.camel="renderItem"').replace(" disabled",' :disabled="true"').replace(" clearable",' :clearable="true"').replace(" searchable",' :searchable="true"')),jsFragment:e=>`window.vueData = {
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
};`}},{framework:"Lit",sourceParts:{htmlFragment:e=>a`<omni-select label="${e.label}" display-field="${e.displayField}" .items="\${() => promiseDisplayItems(displayItems)}" .renderItem="\${renderItem}" id-field="${e.idField}"></omni-select>`,jsFragment:e=>`const displayItems = [
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
const App = () => <OmniSelect label="${e.label}" display-field="${e.displayField}" id-field="${e.idField}" items={() => promiseDisplayItems(displayItems)} renderItem={renderItem} />;`}],name:"Async",description:"Render each item from an async function.",args:{label:"Async item renderer function",data:{},items:()=>F(d),displayField:"label",idField:"id",renderItem:async e=>{await new Promise((r,p)=>{setTimeout(r,2e3)});let t=document.createElement("i");return t.innerText=e.label,t.style.color="red",t}}},x={render:e=>i`
        <omni-select
            data-testid="test-select"
            label="${l(e.label)}"
            .data="${e.data}"
            hint="${l(e.hint)}"
            error="${l(e.error)}"
            .items="${e.items}"
            display-field="${e.displayField}"
            .renderItem="${e.renderItem}"
            id-field="${e.idField}">
            ${o(m("loading_indicator",e.loading_indicator))}
        </omni-select>
    `,frameworkSources:[{framework:"Lit",sourceParts:{htmlFragment:e=>a`<omni-select label="${e.label}" display-field="${e.displayField}" .items="\${() => promiseDisplayItems(displayItems)}" .renderItem="\${renderItem}" id-field="${e.idField}">
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
`}},{framework:"Vue",sourceParts:{htmlFragment:e=>s(x.render(e),t=>{var r;return(r=t.firstElementChild)==null?void 0:r.setAttribute("replace-token","x")},t=>t.replace('replace-token="x"','.items="promiseDisplayItems" :render-item.camel="renderItem"').replace(" disabled",' :disabled="true"').replace(" clearable",' :clearable="true"').replace(" searchable",' :searchable="true"')),jsFragment:e=>`window.vueData = {
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
                  </OmniSelect>;`}],name:"Loading Slot",description:"Set html content to render while populating items list.",args:{label:"Loading Slot",data:{},items:()=>F(d),displayField:"label",idField:"id",renderItem:async e=>{await new Promise((r,p)=>{setTimeout(r,2e3)});let t=document.createElement("i");return t.innerText=e.label,t.style.color="red",t},loading_indicator:a`<span>...</span>`}},X={render:e=>i`
        <omni-select
            data-testid="test-select"
            label="${l(e.label)}"
            hint="${l(e.hint)}"
            error="${l(e.error)}"
            .items="${e.items}"
            display-field="${e.displayField}"
            id-field="${e.idField}">
        </omni-select>
    `,frameworkSources:[{framework:"Lit",sourceParts:{htmlFragment:e=>a`<omni-select label="${e.label}" display-field="${e.displayField}" .items="\${stringItems}" id-field="${e.idField}"></omni-select>`,jsFragment:"const stringItems = ['Bruce Wayne', 'Clark Kent', 'Barry Allen', 'Arthur Curry', 'Hal Jordan'];"}},{framework:"Vue",sourceParts:{htmlFragment:e=>a`<omni-select label="${e.label}" display-field="${e.displayField}" .items="stringItems" id-field="${e.idField}"></omni-select>`,jsFragment:`window.vueData = {
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
const App = () => <OmniSelect label="${e.label}" display-field="${e.displayField}" id-field="${e.idField}" items={stringItems} />;`}],name:"String",description:"Use a string array as the items source.",args:{label:"String",items:c,displayField:"label",idField:"id"}},Y={render:e=>i`
        <omni-select
            data-testid="test-select"
            label="${l(e.label)}"
            hint="${l(e.hint)}"
            error="${l(e.error)}"
            .renderSelection="${e.renderSelection}"
            value="${e.value}"
            .items="${e.items}"
            display-field="${e.displayField}"
            id-field="${e.idField}">
        </omni-select>
    `,frameworkSources:[{framework:"Lit",sourceParts:{htmlFragment:e=>a`<omni-select label="${e.label}" .items="\${stringItems}" .renderSelection="\${renderSelection}" value="${e.value}"></omni-select>`,jsFragment:`const stringItems = ['Bruce Wayne', 'Clark Kent', 'Barry Allen', 'Arthur Curry', 'Hal Jordan'];

async function renderSelection(item) {
    await new Promise((resolve, reject) => {
        // Setting 2000 ms time
        setTimeout(resolve, 2000);
    });
    const i = document.createElement('i');
    i.innerText = item;
    i.style.color = 'blue';
    return i;
}`}},{framework:"Vue",sourceParts:{htmlFragment:e=>a`<omni-select label="${e.label}" .items="stringItems" :render-selection.camel="renderSelection" value="${e.value}"></omni-select>`,jsFragment:e=>`window.vueData = {
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
const App = () => <OmniSelect label="${e.label}" value="${e.value}" items={stringItems} renderSelection={renderSelection}/>;`}],name:"Selection Renderer",description:"Provide a function to render custom html content for the selection.",args:{label:"Selection Renderer",items:c,renderSelection:async e=>{await new Promise((r,p)=>{setTimeout(r,2e3)});let t=document.createElement("i");return t.innerText=e,t.style.color="blue",t},value:"Clark Kent"}},ee={render:e=>i`
        <omni-select
            data-testid="test-select"
            label="${l(e.label)}"
            .items="${e.items}"
            display-field="${e.displayField}"
            empty-message="${e.emptyMessage}"
            id-field="${e.idField}">
        </omni-select>
    `,frameworkSources:[{framework:"React",load:e=>`import { OmniSelect } from "@capitec/omni-components-react/select";
              
const App = () => <OmniSelect label="${e.label}" display-field="${e.displayField}" empty-message="${e.emptyMessage}" id-field="${e.idField}"/>;`}],name:"Empty Message",description:"Set a text value to display when there are no items.",args:{label:"Empty",items:[],emptyMessage:"No items provided",displayField:"label",idField:"id"}},B={render:e=>i`
        <omni-select data-testid="test-select" label="${l(e.label)}" .items="${e.items}" ?disabled="${e.disabled}">
        </omni-select>
    `,frameworkSources:[{framework:"React",load:e=>`import { OmniSelect } from "@capitec/omni-components-react/select";

const App = () => <OmniSelect label="${e.label}" disabled/>;`},{framework:"Vue",load:e=>s(B.render(e),void 0,t=>t.replace(" disabled",' :disabled="true"').replace(" clearable",' :clearable="true"').replace(" searchable",' :searchable="true"'))}],name:"Disabled",description:"Prevent interaction (pointer events).",args:{label:"Disabled",disabled:!0,items:d}},P={render:e=>i`
        <omni-select data-testid="test-select" label="${l(e.label)}" .items="${e.items}">
            <svg slot="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" style="fill: orange;"><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM12 7a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 .743.648L17 12a.75.75 0 0 1-.75.75h-3.5v3.5a.75.75 0 0 1-.648.743L12 17a.75.75 0 0 1-.75-.75v-3.5h-3.5a.75.75 0 0 1-.743-.648L7 12a.75.75 0 0 1 .75-.75h3.5v-3.5a.75.75 0 0 1 .648-.743Z"/></svg>
            <svg slot="more" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" style="fill: orange;"><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM12 7a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 .743.648L17 12a.75.75 0 0 1-.75.75h-3.5v3.5a.75.75 0 0 1-.648.743L12 17a.75.75 0 0 1-.75-.75v-3.5h-3.5a.75.75 0 0 1-.743-.648L7 12a.75.75 0 0 1 .75-.75h3.5v-3.5a.75.75 0 0 1 .648-.743Z"/></svg>
        </omni-select>
    `,frameworkSources:[{framework:"Lit",sourceParts:{htmlFragment:e=>a`<omni-select label="${e.label}" .items="\${stringItems}">
    <svg slot="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" style="fill: orange;"><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM12 7a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 .743.648L17 12a.75.75 0 0 1-.75.75h-3.5v3.5a.75.75 0 0 1-.648.743L12 17a.75.75 0 0 1-.75-.75v-3.5h-3.5a.75.75 0 0 1-.743-.648L7 12a.75.75 0 0 1 .75-.75h3.5v-3.5a.75.75 0 0 1 .648-.743Z"/></svg>
    <svg slot="more" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" style="fill: orange;"><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM12 7a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 .743.648L17 12a.75.75 0 0 1-.75.75h-3.5v3.5a.75.75 0 0 1-.648.743L12 17a.75.75 0 0 1-.75-.75v-3.5h-3.5a.75.75 0 0 1-.743-.648L7 12a.75.75 0 0 1 .75-.75h3.5v-3.5a.75.75 0 0 1 .648-.743Z"/></svg>
</omni-select>`,jsFragment:"const stringItems = ['Bruce Wayne', 'Clark Kent', 'Barry Allen', 'Arthur Curry', 'Hal Jordan'];"}},{framework:"Vue",sourceParts:{htmlFragment:e=>s(P.render(e),t=>{var r;return(r=t.firstElementChild)==null?void 0:r.setAttribute("replace-token","x")},t=>t.replace('replace-token="x"','.items="stringItems"').replace(" disabled",' :disabled="true"').replace(" clearable",' :clearable="true"').replace(" searchable",' :searchable="true"')),jsFragment:e=>`window.vueData = {
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
                  </OmniSelect>;`}],name:"Custom Control Slot",description:"Set html content to display within the available control slots.",args:{label:"Custom slots",items:c}},T={render:e=>i`
    <omni-select data-testid="test-select" label="${l(e.label)}" .items="${e.items}" display-field="${e.displayField}" id-field="${e.idField}" ?searchable="${e.searchable}">
    </omni-select>
`,frameworkSources:[{framework:"Lit",sourceParts:{htmlFragment:e=>a`<omni-select label="${e.label}" display-field="${e.displayField}" .items="\${displayItems}" id-field="${e.idField}" searchable></omni-select>`,jsFragment:`const displayItems = [
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
];`}},{framework:"Vue",sourceParts:{htmlFragment:e=>s(T.render(e),t=>{var r;return(r=t.firstElementChild)==null?void 0:r.setAttribute("replace-token","x")},t=>t.replace('replace-token="x"','.items="displayItems"').replace(" disabled",' :disabled="true"').replace(" clearable",' :clearable="true"').replace(" searchable",' :searchable="true"')),jsFragment:e=>`window.vueData = {
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
const App = () => <OmniSelect label="${e.label}" display-field="${e.displayField}" id-field="${e.idField}" items={displayItems} searchable></OmniSelect>`}],name:"Searchable",description:"Adds a search input to limit the options to Select",args:{label:"Searchable",displayField:"label",idField:"id",searchable:!0,items:d}},L={render:e=>i`
    <omni-select data-testid="test-select" label="${l(e.label)}" .items="${e.items}" ?searchable="${e.searchable}" .filterItems="${e.filterItems}">
    </omni-select>
`,frameworkSources:[{framework:"Lit",sourceParts:{htmlFragment:e=>a`<omni-select label="${e.label}"  .items="\${stringItems}" .filterItems="\${customSearch}" searchable></omni-select>`,jsFragment:`const stringItems = [
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
`}},{framework:"Vue",sourceParts:{htmlFragment:e=>s(L.render(e),t=>{var r;return(r=t.firstElementChild)==null?void 0:r.setAttribute("replace-token","x")},t=>t.replace('replace-token="x"','.items="stringItems" :filter-items.camel="customSearch"').replace(" disabled",' :disabled="true"').replace(" clearable",' :clearable="true"').replace(" searchable",' :searchable="true"')),jsFragment:e=>`function itemFilter(filter, item){
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
</OmniSelect>`}],name:"Custom Search",description:"Custom search function",args:{label:"Custom Search",searchable:!0,items:c,filterItems:I}},M={render:e=>i`
    <omni-select data-testid="test-select" label="${l(e.label)}" .items="${e.items}" ?searchable="${e.searchable}">
    </omni-select>
`,frameworkSources:[{framework:"Lit",sourceParts:{htmlFragment:e=>a`<omni-select label="${e.label}" .items="\${serverSideFilterItems}" searchable></omni-select>`,jsFragment:`const stringItems = [
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
`}},{framework:"Vue",sourceParts:{htmlFragment:e=>s(M.render(e),t=>{var r;return(r=t.firstElementChild)==null?void 0:r.setAttribute("replace-token","x")},t=>t.replace('replace-token="x"','.items="serverSideFilterItems"').replace(" disabled",' :disabled="true"').replace(" clearable",' :clearable="true"').replace(" searchable",' :searchable="true"')),jsFragment:e=>`const stringItems = [
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

const App = () => <OmniSelect label="${e.label}" items={searchFilter} searchable></OmniSelect>`}],name:"Server Side Filtering",description:"Select with server side filtering",args:{label:"Server Side Filtering",searchable:!0,items:C}},H={render:e=>i`
    <omni-select data-testid="test-select" label="${l(e.label)}" .items="${e.items}" ?searchable="${e.searchable}">
    <svg slot="search-clear" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  width="24px" height="24px" style="fill: orange;"><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM8.47 8.47a.75.75 0 0 1 1.06 0L12 10.939l2.47-2.47a.75.75 0 0 1 .976-.072l.084.073a.75.75 0 0 1 0 1.06L13.061 12l2.47 2.47a.75.75 0 0 1 .072.976l-.073.084a.75.75 0 0 1-1.06 0L12 13.061l-2.47 2.47a.75.75 0 0 1-.976.072l-.084-.073a.75.75 0 0 1 0-1.06L10.939 12l-2.47-2.47a.75.75 0 0 1-.072-.976Z" /></svg>
    </omni-select>
`,frameworkSources:[{framework:"Lit",sourceParts:{htmlFragment:e=>a`<omni-select label="${e.label}" .items="\${stringItems}" searchable>
    <svg slot="search-clear" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  width="24px" height="24px" style="fill: orange;"><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM8.47 8.47a.75.75 0 0 1 1.06 0L12 10.939l2.47-2.47a.75.75 0 0 1 .976-.072l.084.073a.75.75 0 0 1 0 1.06L13.061 12l2.47 2.47a.75.75 0 0 1 .072.976l-.073.084a.75.75 0 0 1-1.06 0L12 13.061l-2.47 2.47a.75.75 0 0 1-.976.072l-.084-.073a.75.75 0 0 1 0-1.06L10.939 12l-2.47-2.47a.75.75 0 0 1-.072-.976Z" /></svg>
</omni-select>`,jsFragment:`const stringItems = [
    'Bruce Wayne', 
    'Clark Kent', 
    'Barry Allen', 
    'Arthur Curry', 
    'Hal Jordan'
];  `}},{framework:"Vue",sourceParts:{htmlFragment:e=>s(H.render(e),t=>{var r;return(r=t.firstElementChild)==null?void 0:r.setAttribute("replace-token","x")},t=>t.replace('replace-token="x"','.items="stringItems"').replace(" disabled",' :disabled="true"').replace(" clearable",' :clearable="true"').replace(" searchable",' :searchable="true"')),jsFragment:`const stringItems = [
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
</OmniSelect>`}],name:"Custom Search Field Slot",description:"Select component with search field custom slotted icon.",args:{label:"Custom Search Slot",searchable:!0,items:c}},te=f("omni-select"),re=h("omni-select"),le=w("omni-select"),ie=$("omni-select"),ae=v("omni-select"),se=g("omni-select"),ne=S("omni-select");export{A as Async_Per_Item,ie as Clearable,ae as Custom_Clear_Slot,P as Custom_Control_Slot,L as Custom_Search,H as Custom_Search_Slot,B as Disabled,ee as Empty_Message,le as Error_Label,re as Hint,u as Interactive,te as Label,x as Loading_Slot,se as Prefix,T as Searchable,Y as Selection_Renderer,M as Server_Side_Filtering,X as String_Array,ne as Suffix};
//# sourceMappingURL=Select.stories.js.map
