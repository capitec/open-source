import"../chunks-js/chunk.2BH3FUZ4.js";import"../chunks-js/chunk.Y2FJIW7X.js";import"../chunks-js/chunk.M6SSC5HK.js";import"../chunks-js/chunk.STJOQLHS.js";import"../chunks-js/chunk.XLKVLWPJ.js";import"../chunks-js/chunk.32LOAOEJ.js";import{a as A,b as L,c as x,e as E,f as R,g as M,h as H}from"../chunks-js/chunk.VBXXYKHH.js";import"../chunks-js/chunk.K2UMXYHA.js";import"../chunks-js/chunk.CQEQBUXK.js";import"../chunks-js/chunk.E3RY574V.js";import"../chunks-js/chunk.XGCBNSF2.js";import{a as _}from"../chunks-js/chunk.IRJIQSYL.js";import{a as v}from"../chunks-js/chunk.G3QHRCKP.js";import{a as $,b as r}from"../chunks-js/chunk.MHLMY33S.js";import{l as I,w as T,y as o}from"../chunks-js/chunk.BM33DA64.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.ZPV4YWBP.js";import{a as c}from"../chunks-js/chunk.PJH7M65U.js";import{c as f}from"../chunks-js/chunk.N6OKW4B2.js";import{d as i}from"../chunks-js/chunk.W54IKPJD.js";import"../chunks-js/chunk.B6SUKNHE.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as p,d as g}from"../chunks-js/chunk.F6MIXR4E.js";import{h as V,m as k,p as C}from"../chunks-js/chunk.BF43NN75.js";k();C();var y=V(_(),1);var ce={title:"UI Components/Select",component:"omni-select"},b=[{id:"1",label:"Peter Parker"},{id:"2",label:"James Howlett"},{id:"3",label:"Tony Stark"},{id:"4",label:"Steve Rodgers"},{id:"5",label:"Bruce Banner"},{id:"6",label:"Wanda Maximoff"},{id:"7",label:"TChalla"},{id:"8",label:"Henry P. McCoy"},{id:"9",label:"Carl Lucas"},{id:"10",label:"Frank Castle"}],S=["Bruce Wayne","Clark Kent","Barry Allen","Arthur Curry","Hal Jordan"];async function P(e){return await new Promise(t=>setTimeout(()=>t(),2e3)),e}async function O(e,t){return await new Promise(a=>setTimeout(()=>a(),2e3)),B(e,t)}function B(e,t){return Array.isArray(t)&&e!==null?t=t.filter(a=>j(e,a)):t}function j(e,t){return t.toString().toLowerCase().includes(e.toLowerCase())}var de={render:e=>p`
        <omni-select
            data-testid="test-select"
            label="${c(e.label)}"
            value="${e.value}"
            hint="${c(e.hint)}"
            error="${c(e.error)}"
            .items="${e.items}"
            display-field="${e.displayField}"
            .renderItem="${e.renderItem}"
            .filterItems="${e.filterItems}"
            id-field="${e.idField}"
            ?disabled="${e.disabled}"
            ?clearable="${e.clearable}"
            ?seearchable="${e.searchable}"
            empty-message="${e.emptyMessage}"
            >${e.prefix?p`${`\r
`}${v(I("prefix",e.prefix))}`:g}
            ${e.clear?p`${`\r
`}${v(I("clear",e.clear))}`:g}${e.suffix?p`${`\r
`}${v(I("suffix",e.suffix))}`:g}
            ${e.loading_indicator?p`${`\r
`}${v(I("loading_indicator",e.loading_indicator))}${`\r
`}`:g}${e.prefix||e.suffix||e.clear?`\r
`:g}</omni-select
        >
    `,name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,clearable:!1,searchable:!1,prefix:"",suffix:"",clear:"",items:b,displayField:"label",idField:"id",loading_indicator:"",emptyMessage:"No items provided"},play:async e=>{var u,w,F;let t=f(e.canvasElement).getByTestId("test-select"),a=y.fn(),l=y.fn();t.addEventListener("click",a),t.addEventListener("change",l),await r.click(t),await r.click(t),await i(a).toBeCalledTimes(2);let s=(u=t.shadowRoot)==null?void 0:u.getElementById("control");await i(s).toBeTruthy(),await r.click(t);let d=await o(t.shadowRoot,"#items-container");await i(d).toBeTruthy();let n=(w=t.shadowRoot)==null?void 0:w.getElementById("items");await i(n).toBeTruthy();let m=await o(t.shadowRoot,".item");await i(m).toBeTruthy(),await r.click(m);let h=(F=t.shadowRoot)==null?void 0:F.getElementById("select");await i(h).toHaveValue(b[0].label),await i(l).toBeCalledTimes(1)}},me={render:e=>p`
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
const App = () => <OmniSelect label="${e.label}" display-field="${e.displayField}" id-field="${e.idField}" items={() => promiseDisplayItems(displayItems)} renderItem={renderItem} />;`}],name:"Async",description:"Render each item from an async function.",args:{label:"Async item renderer function",data:{},items:()=>P(b),displayField:"label",idField:"id",renderItem:async e=>{await new Promise((a,l)=>{setTimeout(a,2e3)});let t=document.createElement("i");return t.innerText=e.label,t.style.color="red",t}},play:async e=>{var n;let t=f(e.canvasElement).getByTestId("test-select"),a=y.fn(),l=y.fn();t.addEventListener("click",a),t.addEventListener("change",l),await r.click(t);let s;navigator.userAgent==="Test Runner"?s=await o(t.shadowRoot,".item",void 0,3e3):s=await o(t.shadowRoot,".item",void 0,5e3),await r.click(s);let d=(n=t.shadowRoot)==null?void 0:n.getElementById("select");await i(d).toHaveValue(b[0].label)}},pe={render:e=>p`
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
                  </OmniSelect>;`}],name:"Loading Slot",description:"Set html content to render while populating items list.",args:{label:"Loading Slot",data:{},items:()=>P(b),displayField:"label",idField:"id",renderItem:async e=>{await new Promise((a,l)=>{setTimeout(a,2e3)});let t=document.createElement("i");return t.innerText=e.label,t.style.color="red",t},loading_indicator:T`<span>...</span>`},play:async e=>{var n;let t=f(e.canvasElement).getByTestId("test-select"),a=y.fn(),l=y.fn();t.addEventListener("click",a),t.addEventListener("change",l),await r.click(t);let s;navigator.userAgent==="Test Runner"?s=await o(t.shadowRoot,".item",void 0,3e3):s=await o(t.shadowRoot,".item",void 0,5e3),await r.click(s);let d=(n=t.shadowRoot)==null?void 0:n.getElementById("select");await i(d).toHaveValue(b[0].label)}},ye={render:e=>p`
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
const App = () => <OmniSelect label="${e.label}" display-field="${e.displayField}" id-field="${e.idField}" items={stringItems} />;`}],name:"String",description:"Use a string array as the items source.",args:{label:"String",data:{},items:S,displayField:"label",idField:"id"},play:async e=>{var n;let t=f(e.canvasElement).getByTestId("test-select"),a=y.fn(),l=y.fn();t.addEventListener("click",a),t.addEventListener("change",l),await r.click(t);let s=await o(t.shadowRoot,".item");await r.click(s);let d=(n=t.shadowRoot)==null?void 0:n.getElementById("select");await i(d).toHaveValue(S[0])}},ue={render:e=>p`
        <omni-select
            data-testid="test-select"
            label="${c(e.label)}"
            .items="${e.items}"
            display-field="${e.displayField}"
            empty-message="${e.emptyMessage}"
            id-field="${e.idField}">
        </omni-select>
    `,frameworkSources:[{framework:"React",load:e=>`import { OmniSelect } from "@capitec/omni-components-react/select";
              
const App = () => <OmniSelect label="${e.label}" display-field="${e.displayField}" empty-message="${e.emptyMessage}" id-field="${e.idField}"/>;`}],name:"Empty Message",description:"Set a text value to display when there are no items.",args:{label:"Empty",items:[],emptyMessage:"No items provided",displayField:"label",idField:"id"},play:async e=>{let t=f(e.canvasElement).getByTestId("test-select"),a=y.fn();t.addEventListener("click",a),await r.click(t);let l=await o(t.shadowRoot,".none");await i(l).toHaveTextContent(e.args.emptyMessage)}},we={render:e=>p`
        <omni-select data-testid="test-select" label="${c(e.label)}" .items="${e.items}" ?disabled="${e.disabled}">
        </omni-select>
    `,frameworkSources:[{framework:"React",load:e=>`import { OmniSelect } from "@capitec/omni-components-react/select";

const App = () => <OmniSelect label="${e.label}" disabled/>;`}],name:"Disabled",description:"Prevent interaction (pointer events).",args:{label:"Disabled",disabled:!0,items:b},play:async e=>{let t=f(e.canvasElement).getByTestId("test-select"),a=y.fn();t.addEventListener("click",a),await i(()=>r.click(t)).rejects.toThrow(/pointer-events: none/),await i(a).toBeCalledTimes(0)}},fe={render:e=>p`
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
                  </OmniSelect>;`}],name:"Custom Control Slot",description:"Set html content to display within the available control slots.",args:{label:"Custom slots",items:S},play:async e=>{var a,l;let t=f(e.canvasElement).getByTestId("test-select");if(window.matchMedia?window.matchMedia("screen and (min-width: 767px)").matches:window.innerWidth>=767){let s=(a=t.shadowRoot)==null?void 0:a.querySelector("slot[name=arrow]");await i(s).toBeTruthy();let d=s==null?void 0:s.assignedElements().find(n=>n.tagName.toLocaleLowerCase()==="svg");await i(d).toBeTruthy()}else{let s=(l=t.shadowRoot)==null?void 0:l.querySelector("slot[name=more]");await i(s).toBeTruthy();let d=s==null?void 0:s.assignedElements().find(n=>n.tagName.toLocaleLowerCase()==="svg");await i(d).toBeTruthy()}}},he={render:e=>p`
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

        const App = () => <OmniSelect label="${e.label}" display-field="${e.displayField}" id-field="${e.idField}" items={displayItems} searchable></OmniSelect>`}],name:"Searchable",description:"Adds a search input to limit the options to Select",args:{label:"Searchable",displayField:"label",idField:"id",searchable:!0,items:b},play:async e=>{var u,w;let t=f(e.canvasElement).getByTestId("test-select"),a=y.fn();t.addEventListener("click",a),await r.click(t);let l=await o(t.shadowRoot,"#searchField");await i(l).toBeTruthy(),$(l),await r.click(l);let s="Peter";await r.type(l,s);let d=await o(t.shadowRoot,"#items-container");await i(d).toBeTruthy();let n=(u=t.shadowRoot)==null?void 0:u.getElementById("items");await i(n).toBeTruthy();let m=await o(t.shadowRoot,".item");await i(m).toBeTruthy(),await r.click(m);let h=(w=t.shadowRoot)==null?void 0:w.getElementById("select");await i(h).toHaveValue(b[0].label)}},be={render:e=>p`
    <omni-select data-testid="test-select" label="${c(e.label)}" .items="${e.items}" ?searchable="${e.searchable}" .filterItems="${e.filterItems}">
    </omni-select>
    `,frameworkSources:[{framework:"HTML",load:e=>`<omni-select id='omni-select' label="${e.label}" searchable></omni-select>

        <script defer>

            const stringItems = ['Bruce Wayne', 'Clark Kent', 'Barry Allen', 'Arthur Curry', 'Hal Jordan'];   


            function customSearch(filterValue, items) {
                if(Array.isArray(items) && filterValue !== null){
                    return items = items.filter((i) => itemFilter(filterValue,i));
                }else {
                    return items;
                }
            }

            
            function itemFilter(filterValue, item) {
                    return item.toString().toLowerCase().includes(filterValue.toLowerCase());
            };

            select = document.getElementById('omni-select');
            select.items = stringItems;
            select.filterItems = customSearch;
        <\/script>`},{framework:"React",load:e=>`import { OmniSelect } from "@capitec/omni-components-react/select";

        const stringItems = ['Bruce Wayne', 'Clark Kent', 'Barry Allen', 'Arthur Curry', 'Hal Jordan'];   

        function customSearch(filterValue, items) {
            if(Array.isArray(items) && filterValue !== null){
                return items = items.filter((i) => itemFilter(filterValue,i));
            }else {
                return items;
            }
        }
        
        function itemFilter(filterValue, item) {
                return item.toString().toLowerCase().includes(filterValue.toLowerCase());
        };


        const App = () => <OmniSelect label="${e.label}" items={stringItems} filterItems={customSearch} searchable></OmniSelect>`}],name:"Custom Search function",description:"Select component with a custom search function",args:{label:"Custom Search function",displayField:"label",idField:"id",searchable:!0,items:S,filterItems:B},play:async e=>{var u,w;let t=f(e.canvasElement).getByTestId("test-select"),a=y.fn();t.addEventListener("click",a),await r.click(t);let l=await o(t.shadowRoot,"#searchField");await i(l).toBeTruthy(),$(l),await r.click(l);let s="Bruce";await r.type(l,s);let d=await o(t.shadowRoot,"#items-container");await i(d).toBeTruthy();let n=(u=t.shadowRoot)==null?void 0:u.getElementById("items");await i(n).toBeTruthy();let m=await o(t.shadowRoot,".item");await i(m).toBeTruthy(),await r.click(m);let h=(w=t.shadowRoot)==null?void 0:w.getElementById("select");await i(h).toHaveValue(S[0])}},Se={render:e=>p`
    <omni-select data-testid="test-select" label="${c(e.label)}" .items="${e.items}" display-field="${e.displayField}" id-field="${e.idField}" ?searchable="${e.searchable}" .filterItems="${e.filterItems}">
    </omni-select>
    `,frameworkSources:[{framework:"HTML",load:e=>`<omni-select id='omni-select' label="${e.label}" searchable></omni-select>

        <script defer>

            const stringItems = ['Bruce Wayne', 'Clark Kent', 'Barry Allen', 'Arthur Curry', 'Hal Jordan'];   

            async function promiseSearchFilter(filterValue, items) {
                await new Promise<void>((r) => setTimeout(() => r(), 2000));
                return customSearch(filterValue, items);
            }
            
            function customSearch(filterValue, items) {
                if (Array.isArray(items) && filterValue !== null) {
                    return items = items.filter((i) => itemFilter(filterValue,i));
                } else {
                    return items;
                }
            }
            
            function itemFilter(filterValue, item) {
                return item.toString().toLowerCase().includes(filterValue.toLowerCase());
            }

            select = document.getElementById('omni-select');
            select.items = stringItems;
            select.filterItems = promiseSearchFilter;
        <\/script>`},{framework:"React",load:e=>`import { OmniSelect } from "@capitec/omni-components-react/select";

        const stringItems = ['Bruce Wayne', 'Clark Kent', 'Barry Allen', 'Arthur Curry', 'Hal Jordan'];   


        async function promiseSearchFilter(filterValue, items) {
            await new Promise<void>((r) => setTimeout(() => r(), 2000));
            return customSearch(filterValue, items);
        }
        
        function customSearch(filterValue, items) {
            if (Array.isArray(items) && filterValue !== null) {
                return items = items.filter((i) => itemFilter(filterValue,i));
            } else {
                return items;
            }
        }
        
        function itemFilter(filterValue, item) {
            return item.toString().toLowerCase().includes(filterValue.toLowerCase());
        }


        const App = () => <OmniSelect label="${e.label}" items={stringItems} filterItems={customSearch} searchable></OmniSelect>`}],name:"Server Side Filtering",description:"Select component with server side filtering function",args:{label:"Server Side Filtering",displayField:"label",idField:"id",searchable:!0,items:S,filterItems:O},play:async e=>{var u,w;let t=f(e.canvasElement).getByTestId("test-select"),a=y.fn();t.addEventListener("click",a),await r.click(t);let l=await o(t.shadowRoot,"#searchField");await i(l).toBeTruthy(),$(l),await r.click(l);let s="Bruce";await r.type(l,s);let d=await o(t.shadowRoot,"#items-container");await i(d).toBeTruthy();let n=(u=t.shadowRoot)==null?void 0:u.getElementById("items");await i(n).toBeTruthy();let m;navigator.userAgent==="Test Runner"?m=await o(t.shadowRoot,".item",void 0,3e3):m=await o(t.shadowRoot,".item",void 0,5e3),await i(m).toBeTruthy(),await r.click(m);let h=(w=t.shadowRoot)==null?void 0:w.getElementById("select");await i(h).toHaveValue(S[0])}},ge={render:e=>p`
    <omni-select data-testid="test-select" label="${c(e.label)}" .items="${e.items}" display-field="${e.displayField}" id-field="${e.idField}" ?searchable="${e.searchable}">
        <svg slot="search-clear" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" style="fill: orange;"><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM12 7a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 .743.648L17 12a.75.75 0 0 1-.75.75h-3.5v3.5a.75.75 0 0 1-.648.743L12 17a.75.75 0 0 1-.75-.75v-3.5h-3.5a.75.75 0 0 1-.743-.648L7 12a.75.75 0 0 1 .75-.75h3.5v-3.5a.75.75 0 0 1 .648-.743Z"/></svg>
    </omni-select>
    `,frameworkSources:[{framework:"HTML",load:e=>`<omni-select id='omni-select' label="${e.label}" display-field="${e.displayField}" id-field="${e.idField}" searchable></omni-select>

        <script defer>

            const stringItems = ['Bruce Wayne', 'Clark Kent', 'Barry Allen', 'Arthur Curry', 'Hal Jordan'];   

            select = document.getElementById('omni-select');
            select.items = stringItems;
        <\/script>`},{framework:"React",load:e=>`import { OmniSelect } from "@capitec/omni-components-react/select";

        const stringItems = ['Bruce Wayne', 'Clark Kent', 'Barry Allen', 'Arthur Curry', 'Hal Jordan'];   


        const App = () => <OmniSelect label="${e.label}" display-field="${e.displayField}" id-field="${e.idField}" items={stringItems} searchable></OmniSelect>`}],name:"Custom Search Clear Icon",description:"Select component with a custom search field clear icon",args:{label:"Custom Search Clear Icon",displayField:"label",idField:"id",searchable:!0,items:S,filterItems:B},play:async e=>{var u,w;let t=f(e.canvasElement).getByTestId("test-select"),a=y.fn();t.addEventListener("click",a),await r.click(t);let l=await o(t.shadowRoot,"#searchField");await i(l).toBeTruthy(),$(l),await r.click(l);let s="Bruce";await r.type(l,s);let d=await o(t.shadowRoot,"#items-container");await i(d).toBeTruthy();let n=(u=t.shadowRoot)==null?void 0:u.getElementById("items");await i(n).toBeTruthy();let m=await o(t.shadowRoot,".item");await i(m).toBeTruthy(),await r.click(m);let h=(w=t.shadowRoot)==null?void 0:w.getElementById("select");await i(h).toHaveValue(S[0])}},ve=A("omni-select"),Ie=L("omni-select"),$e=x("omni-select"),Be=M("omni-select"),Fe=H("omni-select"),ke=E("omni-select"),Ce=R("omni-select");export{me as Async_Per_Item,Be as Clearable,Fe as Custom_Clear_Slot_Icon,fe as Custom_Control_Slot,ge as Custom_Search_Clear_Icon,be as Custom_Search_Function,we as Disabled,ue as Empty_Message,$e as Error_Label,Ie as Hint,de as Interactive,ve as Label,pe as Loading_Slot,ke as Prefix,he as Searchable,Se as Server_Side_Filtering,ye as String_Array,Ce as Suffix,ce as default};
//# sourceMappingURL=Select.stories.js.map
