import"../chunks-js/chunk.4UYMCHOG.js";import"../chunks-js/chunk.6M2THL75.js";import"../chunks-js/chunk.AHYVIVCB.js";import"../chunks-js/chunk.XGV4CYMC.js";import"../chunks-js/chunk.FM3FLTDR.js";import"../chunks-js/chunk.MCIDFWAY.js";import"../chunks-js/chunk.TDEC2NDF.js";import{a as h,b as v,c as g,e as A,f as E}from"../chunks-js/chunk.2UNOU7T3.js";import{b as l,c as L}from"../chunks-js/chunk.LME64W74.js";import{k as $,u as F,w as c}from"../chunks-js/chunk.ZOV7Q3GR.js";import"../chunks-js/chunk.MPJVWYSG.js";import"../chunks-js/chunk.AWLGTUIY.js";import"../chunks-js/chunk.US2AYN3N.js";import{a as w}from"../chunks-js/chunk.3FTDPY75.js";import{a as n}from"../chunks-js/chunk.R4IMIBZU.js";import{c as y}from"../chunks-js/chunk.QC5ZUB6O.js";import{d as a}from"../chunks-js/chunk.YQLTAQFI.js";import"../chunks-js/chunk.VOM777LA.js";import"../chunks-js/chunk.X74GW3ZD.js";import"../chunks-js/chunk.XMM72FEY.js";import"../chunks-js/chunk.ZO5UBYOG.js";import"../chunks-js/chunk.CHYIO324.js";import{b as r,d as f}from"../chunks-js/chunk.3GEUDTAZ.js";import{h as B,l as b,o as S}from"../chunks-js/chunk.2ZZQBHAA.js";b();S();var d=B(L(),1);var Z={title:"UI Components/Select",component:"omni-select"},p=[{id:"1",label:"Peter Parker"},{id:"2",label:"James Howlett"},{id:"3",label:"Tony Stark"},{id:"4",label:"Steve Rodgers"},{id:"5",label:"Bruce Banner"},{id:"6",label:"Wanda Maximoff"},{id:"7",label:"TChalla"},{id:"8",label:"Henry P. McCoy"},{id:"9",label:"Carl Lucas"},{id:"10",label:"Frank Castle"}],I=["Bruce Wayne","Clark Kent","Barry Allen","Arthur Curry","Hal Jordan"];async function x(e){return await new Promise(t=>setTimeout(()=>t(),2e3)),e}var ee={render:e=>r`
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
            >${e.prefix?r`${`\r
`}${w($("prefix",e.prefix))}`:f}${e.suffix?r`${`\r
`}${w($("suffix",e.suffix))}`:f}
            ${e.loading_indicator?r`${`\r
`}${w($("loading_indicator",e.loading_indicator))}${`\r
`}`:f}${e.prefix||e.suffix?`\r
`:f}</omni-select
        >
    `,name:"Interactive",args:{label:"Label",value:"",data:{},hint:"",error:"",disabled:!1,prefix:"",suffix:"",items:p,displayField:"label",idField:"id",loading_indicator:""},play:async e=>{let t=y(e.canvasElement).getByTestId("test-select"),i=d.fn(),s=d.fn();t.addEventListener("click",i),t.addEventListener("change",s),await l.click(t),await l.click(t),await a(i).toBeCalledTimes(2);let o=t.shadowRoot.getElementById("control");await a(o).toBeTruthy(),await l.click(t);let m=await c(t.shadowRoot,"#items-container");await a(m).toBeTruthy();let T=t.shadowRoot.getElementById("items");await a(T).toBeTruthy();let u=await c(t.shadowRoot,".item");await a(u).toBeTruthy(),await l.click(u);let k=t.shadowRoot.getElementById("select");await a(k).toHaveValue(p[0].label),await a(s).toBeCalledTimes(1)}},te={render:e=>r`
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
    `,name:"Async",args:{label:"Async item renderer function",data:{},items:()=>x(p),displayField:"label",idField:"id",renderItem:async e=>{await new Promise((i,s)=>{setTimeout(i,2e3)});let t=document.createElement("i");return t.innerText=e.label,t.style.color="red",t}},play:async e=>{let t=y(e.canvasElement).getByTestId("test-select"),i=d.fn(),s=d.fn();t.addEventListener("click",i),t.addEventListener("change",s),await l.click(t);let o;navigator.userAgent==="Test Runner"?o=await c(t.shadowRoot,".item",void 0,3e3):o=await c(t.shadowRoot,".item",void 0,5e3),await l.click(o);let m=t.shadowRoot.getElementById("select");await a(m).toHaveValue(p[0].label)}},ie={render:e=>r`
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
            ${w($("loading_indicator",e.loading_indicator))}
        </omni-select>
    `,name:"Loading Slot",args:{label:"Loading Slot",data:{},items:()=>x(p),displayField:"label",idField:"id",renderItem:async e=>{await new Promise((i,s)=>{setTimeout(i,2e3)});let t=document.createElement("i");return t.innerText=e.label,t.style.color="red",t},loading_indicator:F`<span>...</span>`},play:async e=>{let t=y(e.canvasElement).getByTestId("test-select"),i=d.fn(),s=d.fn();t.addEventListener("click",i),t.addEventListener("change",s),await l.click(t);let o;navigator.userAgent==="Test Runner"?o=await c(t.shadowRoot,".item",void 0,3e3):o=await c(t.shadowRoot,".item",void 0,5e3),await l.click(o);let m=t.shadowRoot.getElementById("select");await a(m).toHaveValue(p[0].label)}},ne={render:e=>r`
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
    `,name:"String",args:{label:"String",data:{},items:I,displayField:"label",idField:"id"},play:async e=>{let t=y(e.canvasElement).getByTestId("test-select"),i=d.fn(),s=d.fn();t.addEventListener("click",i),t.addEventListener("change",s),await l.click(t);let o=await c(t.shadowRoot,".item");await l.click(o);let m=t.shadowRoot.getElementById("select");await a(m).toHaveValue(I[0])}},ae={render:e=>r`
        <omni-select
            data-testid="test-select"
            label="${n(e.label)}"
            .items="${e.items}"
            display-field="${e.displayField}"
            idField="${e.idField}">
        </omni-select>
    `,name:"Empty",args:{label:"Empty",items:[],displayField:"label",idField:"id"},play:async e=>{let t=y(e.canvasElement).getByTestId("test-select"),i=d.fn();t.addEventListener("click",i),await l.click(t);let s=await c(t.shadowRoot,".none");await a(s).toHaveTextContent("No items provided")}},le={render:e=>r`
        <omni-select data-testid="test-select" label="${n(e.label)}" .items="${e.items}" ?disabled="${e.disabled}">
        </omni-select>
    `,name:"Disabled",args:{label:"Disabled",disabled:!0,items:p},play:async e=>{let t=y(e.canvasElement).getByTestId("test-select"),i=d.fn();t.addEventListener("click",i),await a(()=>l.click(t)).rejects.toThrow(/pointer-events: none/),await a(i).toBeCalledTimes(0)}},se=h("omni-select"),oe=v("omni-select"),de=g("omni-select"),re=A("omni-select"),ce=E("omni-select");export{te as Async_Per_Item,le as Disabled,ae as Empty,de as Error_Label,oe as Hint,ee as Interactive,se as Label,ie as Loading_Slot,re as Prefix,ne as String_Array,ce as Suffix,Z as default};
//# sourceMappingURL=Select.stories.js.map
