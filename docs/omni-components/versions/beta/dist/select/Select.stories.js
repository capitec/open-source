import"../chunks-js/chunk.ZPWAA7RZ.js";import"../chunks-js/chunk.Y2FJIW7X.js";import"../chunks-js/chunk.M6SSC5HK.js";import"../chunks-js/chunk.STJOQLHS.js";import"../chunks-js/chunk.XLKVLWPJ.js";import"../chunks-js/chunk.32LOAOEJ.js";import{a as B,b as T,c as F,e as C,f as L,g as A}from"../chunks-js/chunk.SJHRYVDL.js";import"../chunks-js/chunk.K2UMXYHA.js";import"../chunks-js/chunk.P5BVWJU5.js";import"../chunks-js/chunk.E3RY574V.js";import"../chunks-js/chunk.XGCBNSF2.js";import{a as H}from"../chunks-js/chunk.IRJIQSYL.js";import{a as u}from"../chunks-js/chunk.G3QHRCKP.js";import{b as r}from"../chunks-js/chunk.MHLMY33S.js";import{l as b,w as k,y as p}from"../chunks-js/chunk.BM33DA64.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.ZPV4YWBP.js";import{a as s}from"../chunks-js/chunk.6QCQBNRL.js";import{c as y}from"../chunks-js/chunk.N6OKW4B2.js";import{d as a}from"../chunks-js/chunk.W54IKPJD.js";import"../chunks-js/chunk.B6SUKNHE.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as d,d as f}from"../chunks-js/chunk.F6MIXR4E.js";import{h as R,m as I,p as x}from"../chunks-js/chunk.BF43NN75.js";I();x();var m=R(H(),1);var le={title:"UI Components/Select",component:"omni-select"},w=[{id:"1",label:"Peter Parker"},{id:"2",label:"James Howlett"},{id:"3",label:"Tony Stark"},{id:"4",label:"Steve Rodgers"},{id:"5",label:"Bruce Banner"},{id:"6",label:"Wanda Maximoff"},{id:"7",label:"TChalla"},{id:"8",label:"Henry P. McCoy"},{id:"9",label:"Carl Lucas"},{id:"10",label:"Frank Castle"}],h=["Bruce Wayne","Clark Kent","Barry Allen","Arthur Curry","Hal Jordan"];async function E(e){return await new Promise(t=>setTimeout(()=>t(),2e3)),e}var ae={render:e=>d`
        <omni-select
            data-testid="test-select"
            label="${s(e.label)}"
            value="${e.value}"
            hint="${s(e.hint)}"
            error="${s(e.error)}"
            .items="${e.items}"
            display-field="${e.displayField}"
            .renderItem="${e.renderItem}"
            id-field="${e.idField}"
            ?disabled="${e.disabled}"
            ?clearable="${e.clearable}"
            empty-message="${e.emptyMessage}"
            >${e.prefix?d`${`\r
`}${u(b("prefix",e.prefix))}`:f}
            ${e.clear?d`${`\r
`}${u(b("clear",e.clear))}`:f}${e.suffix?d`${`\r
`}${u(b("suffix",e.suffix))}`:f}
            ${e.loading_indicator?d`${`\r
`}${u(b("loading_indicator",e.loading_indicator))}${`\r
`}`:f}${e.prefix||e.suffix||e.clear?`\r
`:f}</omni-select
        >
    `,name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,clearable:!1,prefix:"",suffix:"",clear:"",items:w,displayField:"label",idField:"id",loading_indicator:"",emptyMessage:"No items provided"},play:async e=>{var g,S,$;let t=y(e.canvasElement).getByTestId("test-select"),l=m.fn(),n=m.fn();t.addEventListener("click",l),t.addEventListener("change",n),await r.click(t),await r.click(t),await a(l).toBeCalledTimes(2);let i=(g=t.shadowRoot)==null?void 0:g.getElementById("control");await a(i).toBeTruthy(),await r.click(t);let c=await p(t.shadowRoot,"#items-container");await a(c).toBeTruthy();let o=(S=t.shadowRoot)==null?void 0:S.getElementById("items");await a(o).toBeTruthy();let v=await p(t.shadowRoot,".item");await a(v).toBeTruthy(),await r.click(v);let M=($=t.shadowRoot)==null?void 0:$.getElementById("select");await a(M).toHaveValue(w[0].label),await a(n).toBeCalledTimes(1)}},se={render:e=>d`
        <omni-select
            data-testid="test-select"
            label="${s(e.label)}"
            .data="${e.data}"
            hint="${s(e.hint)}"
            error="${s(e.error)}"
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
const App = () => <OmniSelect label="${e.label}" display-field="${e.displayField}" id-field="${e.idField}" items={() => promiseDisplayItems(displayItems)} renderItem={renderItem} />;`}],name:"Async",description:"Render each item from an async function.",args:{label:"Async item renderer function",data:{},items:()=>E(w),displayField:"label",idField:"id",renderItem:async e=>{await new Promise((l,n)=>{setTimeout(l,2e3)});let t=document.createElement("i");return t.innerText=e.label,t.style.color="red",t}},play:async e=>{var o;let t=y(e.canvasElement).getByTestId("test-select"),l=m.fn(),n=m.fn();t.addEventListener("click",l),t.addEventListener("change",n),await r.click(t);let i;navigator.userAgent==="Test Runner"?i=await p(t.shadowRoot,".item",void 0,3e3):i=await p(t.shadowRoot,".item",void 0,5e3),await r.click(i);let c=(o=t.shadowRoot)==null?void 0:o.getElementById("select");await a(c).toHaveValue(w[0].label)}},ne={render:e=>d`
        <omni-select
            data-testid="test-select"
            label="${s(e.label)}"
            .data="${e.data}"
            hint="${s(e.hint)}"
            error="${s(e.error)}"
            .items="${e.items}"
            display-field="${e.displayField}"
            .renderItem="${e.renderItem}"
            id-field="${e.idField}">
            ${u(b("loading_indicator",e.loading_indicator))}
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
                  </OmniSelect>;`}],name:"Loading Slot",description:"Set html content to render while populating items list.",args:{label:"Loading Slot",data:{},items:()=>E(w),displayField:"label",idField:"id",renderItem:async e=>{await new Promise((l,n)=>{setTimeout(l,2e3)});let t=document.createElement("i");return t.innerText=e.label,t.style.color="red",t},loading_indicator:k`<span>...</span>`},play:async e=>{var o;let t=y(e.canvasElement).getByTestId("test-select"),l=m.fn(),n=m.fn();t.addEventListener("click",l),t.addEventListener("change",n),await r.click(t);let i;navigator.userAgent==="Test Runner"?i=await p(t.shadowRoot,".item",void 0,3e3):i=await p(t.shadowRoot,".item",void 0,5e3),await r.click(i);let c=(o=t.shadowRoot)==null?void 0:o.getElementById("select");await a(c).toHaveValue(w[0].label)}},oe={render:e=>d`
        <omni-select
            data-testid="test-select"
            label="${s(e.label)}"
            hint="${s(e.hint)}"
            error="${s(e.error)}"
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
const App = () => <OmniSelect label="${e.label}" display-field="${e.displayField}" id-field="${e.idField}" items={stringItems} />;`}],name:"String",description:"Use a string array as the items source.",args:{label:"String",data:{},items:h,displayField:"label",idField:"id"},play:async e=>{var o;let t=y(e.canvasElement).getByTestId("test-select"),l=m.fn(),n=m.fn();t.addEventListener("click",l),t.addEventListener("change",n),await r.click(t);let i=await p(t.shadowRoot,".item");await r.click(i);let c=(o=t.shadowRoot)==null?void 0:o.getElementById("select");await a(c).toHaveValue(h[0])}},re={render:e=>d`
        <omni-select
            data-testid="test-select"
            label="${s(e.label)}"
            .items="${e.items}"
            display-field="${e.displayField}"
            empty-message="${e.emptyMessage}"
            id-field="${e.idField}">
        </omni-select>
    `,frameworkSources:[{framework:"React",load:e=>`import { OmniSelect } from "@capitec/omni-components-react/select";
              
const App = () => <OmniSelect label="${e.label}" display-field="${e.displayField}" empty-message="${e.emptyMessage}" id-field="${e.idField}"/>;`}],name:"Empty Message",description:"Set a text value to display when there are no items.",args:{label:"Empty",items:[],emptyMessage:"No items provided",displayField:"label",idField:"id"},play:async e=>{let t=y(e.canvasElement).getByTestId("test-select"),l=m.fn();t.addEventListener("click",l),await r.click(t);let n=await p(t.shadowRoot,".none");await a(n).toHaveTextContent(e.args.emptyMessage)}},de={render:e=>d`
        <omni-select data-testid="test-select" label="${s(e.label)}" .items="${e.items}" ?disabled="${e.disabled}">
        </omni-select>
    `,frameworkSources:[{framework:"React",load:e=>`import { OmniSelect } from "@capitec/omni-components-react/select";

const App = () => <OmniSelect label="${e.label}" disabled/>;`}],name:"Disabled",description:"Prevent interaction (pointer events).",args:{label:"Disabled",disabled:!0,items:w},play:async e=>{let t=y(e.canvasElement).getByTestId("test-select"),l=m.fn();t.addEventListener("click",l),await a(()=>r.click(t)).rejects.toThrow(/pointer-events: none/),await a(l).toBeCalledTimes(0)}},ce={render:e=>d`
        <omni-select data-testid="test-select" label="${s(e.label)}" .items="${e.items}">
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
                  </OmniSelect>;`}],name:"Custom Control Slot",description:"Set html content to display within the available control slots.",args:{label:"Custom slots",items:h},play:async e=>{var l,n;let t=y(e.canvasElement).getByTestId("test-select");if(window.matchMedia?window.matchMedia("screen and (min-width: 767px)").matches:window.innerWidth>=767){let i=(l=t.shadowRoot)==null?void 0:l.querySelector("slot[name=arrow]");await a(i).toBeTruthy();let c=i==null?void 0:i.assignedElements().find(o=>o.tagName.toLocaleLowerCase()==="svg");await a(c).toBeTruthy()}else{let i=(n=t.shadowRoot)==null?void 0:n.querySelector("slot[name=more]");await a(i).toBeTruthy();let c=i==null?void 0:i.assignedElements().find(o=>o.tagName.toLocaleLowerCase()==="svg");await a(c).toBeTruthy()}}},me=B("omni-select"),pe=T("omni-select"),ye=F("omni-select"),we=A("omni-select"),fe=C("omni-select"),ue=L("omni-select");export{se as Async_Per_Item,we as Clear,ce as Custom_Control_Slot,de as Disabled,re as Empty_Message,ye as Error_Label,pe as Hint,ae as Interactive,me as Label,ne as Loading_Slot,fe as Prefix,oe as String_Array,ue as Suffix,le as default};
//# sourceMappingURL=Select.stories.js.map
