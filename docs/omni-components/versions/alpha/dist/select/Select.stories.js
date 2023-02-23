import"../chunks-js/chunk.5C4B536E.js";import"../chunks-js/chunk.2IJ4YCAG.js";import"../chunks-js/chunk.IHDQLFCC.js";import"../chunks-js/chunk.QIZ776BB.js";import"../chunks-js/chunk.DRSWRRXS.js";import"../chunks-js/chunk.ZTJGZLZP.js";import"../chunks-js/chunk.G4OP6JHJ.js";import{a as E,b as I,c as x,e as T,f as k}from"../chunks-js/chunk.4W6V2P4F.js";import{k as $,u as A,w as m}from"../chunks-js/chunk.EZFZPYM4.js";import"../chunks-js/chunk.HEGWAMTE.js";import"../chunks-js/chunk.BMVIQMEU.js";import"../chunks-js/chunk.MPJVWYSG.js";import"../chunks-js/chunk.FJG2EZL6.js";import{b as s,c as H}from"../chunks-js/chunk.SNS3RAAO.js";import{a as u}from"../chunks-js/chunk.7QF4VYJR.js";import{a as n}from"../chunks-js/chunk.CFP25WDL.js";import{c as p}from"../chunks-js/chunk.555UF2OF.js";import{d as a}from"../chunks-js/chunk.ZDXRLLLZ.js";import"../chunks-js/chunk.YPV66JA3.js";import"../chunks-js/chunk.F27L6OQP.js";import"../chunks-js/chunk.7YN44Q4N.js";import"../chunks-js/chunk.CHYIO324.js";import{b as c,d as w}from"../chunks-js/chunk.CIM3NS6G.js";import{h as C,l as F,o as v}from"../chunks-js/chunk.2ZZQBHAA.js";F();v();var r=C(H(),1);var ie={title:"UI Components/Select",component:"omni-select"},f=[{id:"1",label:"Peter Parker"},{id:"2",label:"James Howlett"},{id:"3",label:"Tony Stark"},{id:"4",label:"Steve Rodgers"},{id:"5",label:"Bruce Banner"},{id:"6",label:"Wanda Maximoff"},{id:"7",label:"TChalla"},{id:"8",label:"Henry P. McCoy"},{id:"9",label:"Carl Lucas"},{id:"10",label:"Frank Castle"}],B=["Bruce Wayne","Clark Kent","Barry Allen","Arthur Curry","Hal Jordan"];async function L(e){return await new Promise(t=>setTimeout(()=>t(),2e3)),e}var ne={render:e=>c`
        <omni-select
            data-testid="test-select"
            label="${n(e.label)}"
            value="${e.value}"
            hint="${n(e.hint)}"
            error="${n(e.error)}"
            .items="${e.items}"
            display-field="${e.displayField}"
            .renderItem="${e.renderItem}"
            idField="${e.idField}"
            ?disabled="${e.disabled}"
            empty-message="${e.emptyMessage}"
            >${e.prefix?c`${`\r
`}${u($("prefix",e.prefix))}`:w}${e.suffix?c`${`\r
`}${u($("suffix",e.suffix))}`:w}
            ${e.loading_indicator?c`${`\r
`}${u($("loading_indicator",e.loading_indicator))}${`\r
`}`:w}${e.prefix||e.suffix?`\r
`:w}</omni-select
        >
    `,name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,prefix:"",suffix:"",items:f,displayField:"label",idField:"id",loading_indicator:"",emptyMessage:"No items provided"},play:async e=>{var g,h,S;let t=p(e.canvasElement).getByTestId("test-select"),i=r.fn(),l=r.fn();t.addEventListener("click",i),t.addEventListener("change",l),await s.click(t),await s.click(t),await a(i).toBeCalledTimes(2);let o=(g=t.shadowRoot)==null?void 0:g.getElementById("control");await a(o).toBeTruthy(),await s.click(t);let y=await m(t.shadowRoot,"#items-container");await a(y).toBeTruthy();let d=(h=t.shadowRoot)==null?void 0:h.getElementById("items");await a(d).toBeTruthy();let b=await m(t.shadowRoot,".item");await a(b).toBeTruthy(),await s.click(b);let R=(S=t.shadowRoot)==null?void 0:S.getElementById("select");await a(R).toHaveValue(f[0].label),await a(l).toBeCalledTimes(1)}},ae={render:e=>c`
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
    `,name:"Async",description:"Render each item from an async function.",args:{label:"Async item renderer function",data:{},items:()=>L(f),displayField:"label",idField:"id",renderItem:async e=>{await new Promise((i,l)=>{setTimeout(i,2e3)});let t=document.createElement("i");return t.innerText=e.label,t.style.color="red",t}},play:async e=>{var d;let t=p(e.canvasElement).getByTestId("test-select"),i=r.fn(),l=r.fn();t.addEventListener("click",i),t.addEventListener("change",l),await s.click(t);let o;navigator.userAgent==="Test Runner"?o=await m(t.shadowRoot,".item",void 0,3e3):o=await m(t.shadowRoot,".item",void 0,5e3),await s.click(o);let y=(d=t.shadowRoot)==null?void 0:d.getElementById("select");await a(y).toHaveValue(f[0].label)}},se={render:e=>c`
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
            ${u($("loading_indicator",e.loading_indicator))}
        </omni-select>
    `,name:"Loading Slot",description:"Set html content to render while populating items list.",args:{label:"Loading Slot",data:{},items:()=>L(f),displayField:"label",idField:"id",renderItem:async e=>{await new Promise((i,l)=>{setTimeout(i,2e3)});let t=document.createElement("i");return t.innerText=e.label,t.style.color="red",t},loading_indicator:A`<span>...</span>`},play:async e=>{var d;let t=p(e.canvasElement).getByTestId("test-select"),i=r.fn(),l=r.fn();t.addEventListener("click",i),t.addEventListener("change",l),await s.click(t);let o;navigator.userAgent==="Test Runner"?o=await m(t.shadowRoot,".item",void 0,3e3):o=await m(t.shadowRoot,".item",void 0,5e3),await s.click(o);let y=(d=t.shadowRoot)==null?void 0:d.getElementById("select");await a(y).toHaveValue(f[0].label)}},le={render:e=>c`
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
    `,name:"String",description:"Use a string array as the items source.",args:{label:"String",data:{},items:B,displayField:"label",idField:"id"},play:async e=>{var d;let t=p(e.canvasElement).getByTestId("test-select"),i=r.fn(),l=r.fn();t.addEventListener("click",i),t.addEventListener("change",l),await s.click(t);let o=await m(t.shadowRoot,".item");await s.click(o);let y=(d=t.shadowRoot)==null?void 0:d.getElementById("select");await a(y).toHaveValue(B[0])}},oe={render:e=>c`
        <omni-select
            data-testid="test-select"
            label="${n(e.label)}"
            .items="${e.items}"
            display-field="${e.displayField}"
            empty-message="${e.emptyMessage}"
            idField="${e.idField}">
        </omni-select>
    `,name:"Empty Message",description:"Set a text value to display when there are no items.",args:{label:"Empty",items:[],emptyMessage:"No items provided",displayField:"label",idField:"id"},play:async e=>{let t=p(e.canvasElement).getByTestId("test-select"),i=r.fn();t.addEventListener("click",i),await s.click(t);let l=await m(t.shadowRoot,".none");await a(l).toHaveTextContent(e.args.emptyMessage)}},re={render:e=>c`
        <omni-select data-testid="test-select" label="${n(e.label)}" .items="${e.items}" ?disabled="${e.disabled}">
        </omni-select>
    `,name:"Disabled",description:"Prevent interaction (pointer events).",args:{label:"Disabled",disabled:!0,items:f},play:async e=>{let t=p(e.canvasElement).getByTestId("test-select"),i=r.fn();t.addEventListener("click",i),await a(()=>s.click(t)).rejects.toThrow(/pointer-events: none/),await a(i).toBeCalledTimes(0)}},de=E("omni-select"),ce=I("omni-select"),me=x("omni-select"),ye=T("omni-select"),pe=k("omni-select");export{ae as Async_Per_Item,re as Disabled,oe as Empty_Message,me as Error_Label,ce as Hint,ne as Interactive,de as Label,se as Loading_Slot,ye as Prefix,le as String_Array,pe as Suffix,ie as default};
//# sourceMappingURL=Select.stories.js.map
