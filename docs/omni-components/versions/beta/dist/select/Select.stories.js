import"../chunks-js/chunk.WGRMHGJD.js";import"../chunks-js/chunk.Y2FJIW7X.js";import"../chunks-js/chunk.M6SSC5HK.js";import"../chunks-js/chunk.STJOQLHS.js";import"../chunks-js/chunk.XLKVLWPJ.js";import"../chunks-js/chunk.32LOAOEJ.js";import{a as T,b as A,c as B,e as I,f as L}from"../chunks-js/chunk.MICY5BMB.js";import"../chunks-js/chunk.K2UMXYHA.js";import"../chunks-js/chunk.WASXY5YJ.js";import"../chunks-js/chunk.E3RY574V.js";import{a as M}from"../chunks-js/chunk.IRJIQSYL.js";import{a as s}from"../chunks-js/chunk.PJH7M65U.js";import{a as f}from"../chunks-js/chunk.G3QHRCKP.js";import{b as r}from"../chunks-js/chunk.MHLMY33S.js";import{k as g,v as E,x as y}from"../chunks-js/chunk.6VUVFGIV.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.5NFB2EUQ.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.HA6SUF3B.js";import{c as p}from"../chunks-js/chunk.N6OKW4B2.js";import{d as n}from"../chunks-js/chunk.W54IKPJD.js";import"../chunks-js/chunk.B6SUKNHE.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as c,d as h}from"../chunks-js/chunk.F6MIXR4E.js";import{h as R,m as F,p as x}from"../chunks-js/chunk.BF43NN75.js";F();x();var m=R(M(),1);var ie={title:"UI Components/Select",component:"omni-select"},w=[{id:"1",label:"Peter Parker"},{id:"2",label:"James Howlett"},{id:"3",label:"Tony Stark"},{id:"4",label:"Steve Rodgers"},{id:"5",label:"Bruce Banner"},{id:"6",label:"Wanda Maximoff"},{id:"7",label:"TChalla"},{id:"8",label:"Henry P. McCoy"},{id:"9",label:"Carl Lucas"},{id:"10",label:"Frank Castle"}],u=["Bruce Wayne","Clark Kent","Barry Allen","Arthur Curry","Hal Jordan"];async function k(e){return await new Promise(t=>setTimeout(()=>t(),2e3)),e}var ae={render:e=>c`
        <omni-select
            data-testid="test-select"
            label="${s(e.label)}"
            value="${e.value}"
            hint="${s(e.hint)}"
            error="${s(e.error)}"
            .items="${e.items}"
            display-field="${e.displayField}"
            .renderItem="${e.renderItem}"
            idField="${e.idField}"
            ?disabled="${e.disabled}"
            empty-message="${e.emptyMessage}"
            >${e.prefix?c`${`\r
`}${f(g("prefix",e.prefix))}`:h}${e.suffix?c`${`\r
`}${f(g("suffix",e.suffix))}`:h}
            ${e.loading_indicator?c`${`\r
`}${f(g("loading_indicator",e.loading_indicator))}${`\r
`}`:h}${e.prefix||e.suffix?`\r
`:h}</omni-select
        >
    `,name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,prefix:"",suffix:"",items:w,displayField:"label",idField:"id",loading_indicator:"",emptyMessage:"No items provided"},play:async e=>{var S,$,b;let t=p(e.canvasElement).getByTestId("test-select"),a=m.fn(),l=m.fn();t.addEventListener("click",a),t.addEventListener("change",l),await r.click(t),await r.click(t),await n(a).toBeCalledTimes(2);let i=(S=t.shadowRoot)==null?void 0:S.getElementById("control");await n(i).toBeTruthy(),await r.click(t);let d=await y(t.shadowRoot,"#items-container");await n(d).toBeTruthy();let o=($=t.shadowRoot)==null?void 0:$.getElementById("items");await n(o).toBeTruthy();let v=await y(t.shadowRoot,".item");await n(v).toBeTruthy(),await r.click(v);let C=(b=t.shadowRoot)==null?void 0:b.getElementById("select");await n(C).toHaveValue(w[0].label),await n(l).toBeCalledTimes(1)}},ne={render:e=>c`
        <omni-select
            data-testid="test-select"
            label="${s(e.label)}"
            .data="${e.data}"
            hint="${s(e.hint)}"
            error="${s(e.error)}"
            .items="${e.items}"
            display-field="${e.displayField}"
            .renderItem="${e.renderItem}"
            idField="${e.idField}">
        </omni-select>
    `,name:"Async",description:"Render each item from an async function.",args:{label:"Async item renderer function",data:{},items:()=>k(w),displayField:"label",idField:"id",renderItem:async e=>{await new Promise((a,l)=>{setTimeout(a,2e3)});let t=document.createElement("i");return t.innerText=e.label,t.style.color="red",t}},play:async e=>{var o;let t=p(e.canvasElement).getByTestId("test-select"),a=m.fn(),l=m.fn();t.addEventListener("click",a),t.addEventListener("change",l),await r.click(t);let i;navigator.userAgent==="Test Runner"?i=await y(t.shadowRoot,".item",void 0,3e3):i=await y(t.shadowRoot,".item",void 0,5e3),await r.click(i);let d=(o=t.shadowRoot)==null?void 0:o.getElementById("select");await n(d).toHaveValue(w[0].label)}},se={render:e=>c`
        <omni-select
            data-testid="test-select"
            label="${s(e.label)}"
            .data="${e.data}"
            hint="${s(e.hint)}"
            error="${s(e.error)}"
            .items="${e.items}"
            display-field="${e.displayField}"
            .renderItem="${e.renderItem}"
            idField="${e.idField}">
            ${f(g("loading_indicator",e.loading_indicator))}
        </omni-select>
    `,name:"Loading Slot",description:"Set html content to render while populating items list.",args:{label:"Loading Slot",data:{},items:()=>k(w),displayField:"label",idField:"id",renderItem:async e=>{await new Promise((a,l)=>{setTimeout(a,2e3)});let t=document.createElement("i");return t.innerText=e.label,t.style.color="red",t},loading_indicator:E`<span>...</span>`},play:async e=>{var o;let t=p(e.canvasElement).getByTestId("test-select"),a=m.fn(),l=m.fn();t.addEventListener("click",a),t.addEventListener("change",l),await r.click(t);let i;navigator.userAgent==="Test Runner"?i=await y(t.shadowRoot,".item",void 0,3e3):i=await y(t.shadowRoot,".item",void 0,5e3),await r.click(i);let d=(o=t.shadowRoot)==null?void 0:o.getElementById("select");await n(d).toHaveValue(w[0].label)}},le={render:e=>c`
        <omni-select
            data-testid="test-select"
            label="${s(e.label)}"
            .data="${e.data}"
            hint="${s(e.hint)}"
            error="${s(e.error)}"
            .items="${e.items}"
            display-field="${e.displayField}"
            .renderItem="${e.renderItem}"
            idField="${e.idField}">
        </omni-select>
    `,name:"String",description:"Use a string array as the items source.",args:{label:"String",data:{},items:u,displayField:"label",idField:"id"},play:async e=>{var o;let t=p(e.canvasElement).getByTestId("test-select"),a=m.fn(),l=m.fn();t.addEventListener("click",a),t.addEventListener("change",l),await r.click(t);let i=await y(t.shadowRoot,".item");await r.click(i);let d=(o=t.shadowRoot)==null?void 0:o.getElementById("select");await n(d).toHaveValue(u[0])}},oe={render:e=>c`
        <omni-select
            data-testid="test-select"
            label="${s(e.label)}"
            .items="${e.items}"
            display-field="${e.displayField}"
            empty-message="${e.emptyMessage}"
            idField="${e.idField}">
        </omni-select>
    `,name:"Empty Message",description:"Set a text value to display when there are no items.",args:{label:"Empty",items:[],emptyMessage:"No items provided",displayField:"label",idField:"id"},play:async e=>{let t=p(e.canvasElement).getByTestId("test-select"),a=m.fn();t.addEventListener("click",a),await r.click(t);let l=await y(t.shadowRoot,".none");await n(l).toHaveTextContent(e.args.emptyMessage)}},re={render:e=>c`
        <omni-select data-testid="test-select" label="${s(e.label)}" .items="${e.items}" ?disabled="${e.disabled}">
        </omni-select>
    `,name:"Disabled",description:"Prevent interaction (pointer events).",args:{label:"Disabled",disabled:!0,items:w},play:async e=>{let t=p(e.canvasElement).getByTestId("test-select"),a=m.fn();t.addEventListener("click",a),await n(()=>r.click(t)).rejects.toThrow(/pointer-events: none/),await n(a).toBeCalledTimes(0)}},de={render:e=>c`
        <omni-select data-testid="test-select" label="${s(e.label)}" .items="${e.items}">
            <svg slot="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" style="fill: orange;"><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM12 7a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 .743.648L17 12a.75.75 0 0 1-.75.75h-3.5v3.5a.75.75 0 0 1-.648.743L12 17a.75.75 0 0 1-.75-.75v-3.5h-3.5a.75.75 0 0 1-.743-.648L7 12a.75.75 0 0 1 .75-.75h3.5v-3.5a.75.75 0 0 1 .648-.743Z"/></svg>
            <svg slot="more" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" style="fill: orange;"><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM12 7a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 .743.648L17 12a.75.75 0 0 1-.75.75h-3.5v3.5a.75.75 0 0 1-.648.743L12 17a.75.75 0 0 1-.75-.75v-3.5h-3.5a.75.75 0 0 1-.743-.648L7 12a.75.75 0 0 1 .75-.75h3.5v-3.5a.75.75 0 0 1 .648-.743Z"/></svg>
        </omni-select>
    `,name:"Custom Control Slot",description:"Set html content to display within the available control slots.",args:{label:"Custom slots",items:u},play:async e=>{var a,l;let t=p(e.canvasElement).getByTestId("test-select");if(window.matchMedia?window.matchMedia("screen and (min-width: 767px)").matches:window.innerWidth>=767){let i=(a=t.shadowRoot)==null?void 0:a.querySelector("slot[name=arrow]");await n(i).toBeTruthy();let d=i==null?void 0:i.assignedElements().find(o=>o.tagName.toLocaleLowerCase()==="svg");await n(d).toBeTruthy()}else{let i=(l=t.shadowRoot)==null?void 0:l.querySelector("slot[name=more]");await n(i).toBeTruthy();let d=i==null?void 0:i.assignedElements().find(o=>o.tagName.toLocaleLowerCase()==="svg");await n(d).toBeTruthy()}}},ce=T("omni-select"),me=A("omni-select"),ye=B("omni-select"),pe=I("omni-select"),we=L("omni-select");export{ne as Async_Per_Item,de as Custom_Control_Slot,re as Disabled,oe as Empty_Message,ye as Error_Label,me as Hint,ae as Interactive,ce as Label,se as Loading_Slot,pe as Prefix,le as String_Array,we as Suffix,ie as default};
//# sourceMappingURL=Select.stories.js.map
