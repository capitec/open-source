import"../chunks-js/chunk.3K4UBYX5.js";import"../chunks-js/chunk.QKGZYCX7.js";import"../chunks-js/chunk.X6IPIZ2O.js";import"../chunks-js/chunk.XGV4CYMC.js";import"../chunks-js/chunk.FIJP62VB.js";import"../chunks-js/chunk.MCIDFWAY.js";import"../chunks-js/chunk.TDEC2NDF.js";import{a as S,b as F,c as v,e as A,f as E}from"../chunks-js/chunk.H7PVCIW3.js";import{b as s,c as L}from"../chunks-js/chunk.LME64W74.js";import{k as u,u as h,w as c}from"../chunks-js/chunk.L4KSVVY6.js";import"../chunks-js/chunk.MPJVWYSG.js";import"../chunks-js/chunk.D6UL6COZ.js";import"../chunks-js/chunk.BMVIQMEU.js";import{a as w}from"../chunks-js/chunk.3FTDPY75.js";import{a as n}from"../chunks-js/chunk.R4IMIBZU.js";import{c as y}from"../chunks-js/chunk.QC5ZUB6O.js";import{d as a}from"../chunks-js/chunk.YQLTAQFI.js";import"../chunks-js/chunk.VOM777LA.js";import"../chunks-js/chunk.X74GW3ZD.js";import"../chunks-js/chunk.XMM72FEY.js";import"../chunks-js/chunk.ZO5UBYOG.js";import"../chunks-js/chunk.CHYIO324.js";import{b as r,d as f}from"../chunks-js/chunk.3GEUDTAZ.js";import{h as B,l as b,o as g}from"../chunks-js/chunk.2ZZQBHAA.js";b();g();var d=B(L(),1);var Z={title:"UI Components/Select",component:"omni-select"},p=[{id:"1",label:"Peter Parker"},{id:"2",label:"James Howlett"},{id:"3",label:"Tony Stark"},{id:"4",label:"Steve Rodgers"},{id:"5",label:"Bruce Banner"},{id:"6",label:"Wanda Maximoff"},{id:"7",label:"TChalla"},{id:"8",label:"Henry P. McCoy"},{id:"9",label:"Carl Lucas"},{id:"10",label:"Frank Castle"}],I=["Bruce Wayne","Clark Kent","Barry Allen","Arthur Curry","Hal Jordan"];async function x(e){return await new Promise(t=>setTimeout(()=>t(),2e3)),e}var ee={render:e=>r`
        <omni-select
            data-testid="test-select"
            label="${n(e.label)}"
            .value="${e.value}"
            .data="${e.data}"
            hint="${n(e.hint)}"
            error="${n(e.error)}"
            .items="${e.items}"
            display-field="${e.displayField}"
            .renderItem="${e.renderItem}"
            idField="${e.idField}"
            ?disabled="${e.disabled}"
            empty-message="${e.emptyMessage}"
            >${e.prefix?r`${`\r
`}${w(u("prefix",e.prefix))}`:f}${e.suffix?r`${`\r
`}${w(u("suffix",e.suffix))}`:f}
            ${e.loading_indicator?r`${`\r
`}${w(u("loading_indicator",e.loading_indicator))}${`\r
`}`:f}${e.prefix||e.suffix?`\r
`:f}</omni-select
        >
    `,name:"Interactive",args:{label:"Label",value:"",data:{},hint:"",error:"",disabled:!1,prefix:"",suffix:"",items:p,displayField:"label",idField:"id",loading_indicator:"",emptyMessage:"No items provided"},play:async e=>{let t=y(e.canvasElement).getByTestId("test-select"),i=d.fn(),l=d.fn();t.addEventListener("click",i),t.addEventListener("change",l),await s.click(t),await s.click(t),await a(i).toBeCalledTimes(2);let o=t.shadowRoot.getElementById("control");await a(o).toBeTruthy(),await s.click(t);let m=await c(t.shadowRoot,"#items-container");await a(m).toBeTruthy();let T=t.shadowRoot.getElementById("items");await a(T).toBeTruthy();let $=await c(t.shadowRoot,".item");await a($).toBeTruthy(),await s.click($);let k=t.shadowRoot.getElementById("select");await a(k).toHaveValue(p[0].label),await a(l).toBeCalledTimes(1)}},te={render:e=>r`
        <omni-select
            data-testid="test-select"
            label="${n(e.label)}"
            .data="${e.data}"
            hint="${n(e.hint)}"
            error="${n(e.error)}"
            .items="${e.items}"
            display-field="${e.displayField}"
            .renderItem="${e.renderItem}"
            idField="${e.idField}">
        </omni-select>
    `,name:"Async",description:"Render each item from an async function.",args:{label:"Async item renderer function",data:{},items:()=>x(p),displayField:"label",idField:"id",renderItem:async e=>{await new Promise((i,l)=>{setTimeout(i,2e3)});let t=document.createElement("i");return t.innerText=e.label,t.style.color="red",t}},play:async e=>{let t=y(e.canvasElement).getByTestId("test-select"),i=d.fn(),l=d.fn();t.addEventListener("click",i),t.addEventListener("change",l),await s.click(t);let o;navigator.userAgent==="Test Runner"?o=await c(t.shadowRoot,".item",void 0,3e3):o=await c(t.shadowRoot,".item",void 0,5e3),await s.click(o);let m=t.shadowRoot.getElementById("select");await a(m).toHaveValue(p[0].label)}},ie={render:e=>r`
        <omni-select
            data-testid="test-select"
            label="${n(e.label)}"
            .data="${e.data}"
            hint="${n(e.hint)}"
            error="${n(e.error)}"
            .items="${e.items}"
            display-field="${e.displayField}"
            .renderItem="${e.renderItem}"
            idField="${e.idField}">
            ${w(u("loading_indicator",e.loading_indicator))}
        </omni-select>
    `,name:"Loading Slot",description:"Set html content to render while populating items list.",args:{label:"Loading Slot",data:{},items:()=>x(p),displayField:"label",idField:"id",renderItem:async e=>{await new Promise((i,l)=>{setTimeout(i,2e3)});let t=document.createElement("i");return t.innerText=e.label,t.style.color="red",t},loading_indicator:h`<span>...</span>`},play:async e=>{let t=y(e.canvasElement).getByTestId("test-select"),i=d.fn(),l=d.fn();t.addEventListener("click",i),t.addEventListener("change",l),await s.click(t);let o;navigator.userAgent==="Test Runner"?o=await c(t.shadowRoot,".item",void 0,3e3):o=await c(t.shadowRoot,".item",void 0,5e3),await s.click(o);let m=t.shadowRoot.getElementById("select");await a(m).toHaveValue(p[0].label)}},ne={render:e=>r`
        <omni-select
            data-testid="test-select"
            label="${n(e.label)}"
            .data="${e.data}"
            hint="${n(e.hint)}"
            error="${n(e.error)}"
            .items="${e.items}"
            display-field="${e.displayField}"
            .renderItem="${e.renderItem}"
            idField="${e.idField}">
        </omni-select>
    `,name:"String",description:"Use a string array as the items source.",args:{label:"String",data:{},items:I,displayField:"label",idField:"id"},play:async e=>{let t=y(e.canvasElement).getByTestId("test-select"),i=d.fn(),l=d.fn();t.addEventListener("click",i),t.addEventListener("change",l),await s.click(t);let o=await c(t.shadowRoot,".item");await s.click(o);let m=t.shadowRoot.getElementById("select");await a(m).toHaveValue(I[0])}},ae={render:e=>r`
        <omni-select
            data-testid="test-select"
            label="${n(e.label)}"
            .items="${e.items}"
            display-field="${e.displayField}"
            empty-message="${e.emptyMessage}"
            idField="${e.idField}">
        </omni-select>
    `,name:"Empty Message",description:"Set a text value to display when there are no items.",args:{label:"Empty",items:[],emptyMessage:"No items provided",displayField:"label",idField:"id"},play:async e=>{let t=y(e.canvasElement).getByTestId("test-select"),i=d.fn();t.addEventListener("click",i),await s.click(t);let l=await c(t.shadowRoot,".none");await a(l).toHaveTextContent(e.args.emptyMessage)}},se={render:e=>r`
        <omni-select data-testid="test-select" label="${n(e.label)}" .items="${e.items}" ?disabled="${e.disabled}">
        </omni-select>
    `,name:"Disabled",description:"Prevent interaction (pointer events).",args:{label:"Disabled",disabled:!0,items:p},play:async e=>{let t=y(e.canvasElement).getByTestId("test-select"),i=d.fn();t.addEventListener("click",i),await a(()=>s.click(t)).rejects.toThrow(/pointer-events: none/),await a(i).toBeCalledTimes(0)}},le=S("omni-select"),oe=F("omni-select"),de=v("omni-select"),re=A("omni-select"),ce=E("omni-select");export{te as Async_Per_Item,se as Disabled,ae as Empty_Message,de as Error_Label,oe as Hint,ee as Interactive,le as Label,ie as Loading_Slot,re as Prefix,ne as String_Array,ce as Suffix,Z as default};
//# sourceMappingURL=Select.stories.js.map