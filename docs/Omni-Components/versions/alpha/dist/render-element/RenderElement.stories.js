import"../chunks-js/chunk.6M2THL75.js";import"../chunks-js/chunk.XGV4CYMC.js";import{b as u,c as S}from"../chunks-js/chunk.LME64W74.js";import{k as E,w as o}from"../chunks-js/chunk.VOWBGCV5.js";import"../chunks-js/chunk.MPJVWYSG.js";import"../chunks-js/chunk.AWLGTUIY.js";import"../chunks-js/chunk.US2AYN3N.js";import{a as y}from"../chunks-js/chunk.3FTDPY75.js";import{c as g}from"../chunks-js/chunk.QC5ZUB6O.js";import{d as a}from"../chunks-js/chunk.YQLTAQFI.js";import"../chunks-js/chunk.VOM777LA.js";import"../chunks-js/chunk.ZO5UBYOG.js";import"../chunks-js/chunk.CHYIO324.js";import{b as d,d as f}from"../chunks-js/chunk.3GEUDTAZ.js";import{a as c,h as v,l as p,o as w}from"../chunks-js/chunk.2ZZQBHAA.js";p();w();var T=v(S(),1);var D={title:"UI Components/RenderElement",component:"omni-render-element"};async function A(e){return await new Promise(n=>setTimeout(()=>n(),3e3)),d`<span>${JSON.stringify(e)}</span>`}async function h(e){await new Promise(t=>setTimeout(()=>t(),3e3));let n=document.createElement("span");return n.appendChild(document.createTextNode(JSON.stringify(e))),n.addEventListener("click",t=>m?m():alert("Clicked")),n}async function C(e){return await new Promise(n=>setTimeout(()=>n(),3e3)),`<span>${JSON.stringify(e)}</span>`}var q={source:()=>`
                
<!-- Bound function used (<script> tags only for syntax highlighting) -->
<script>
async function renderAsLit(data: object) {
    await new Promise<void>((r) => setTimeout(() => r(), 3000));
    return html\`<span>\${JSON.stringify(data)}</span>\`;
}
<\/script>

...
                
<omni-render-element .data="\${this.someData}" .renderer="\${this.renderAsLit}"></omni-render-element>
`,name:"As Lit",render:e=>d`
    <omni-render-element data-testid="test-render" .data="${e.data}" .renderer="${e.renderer}"
      >${e.loading_indicator?d`${`\r
`}${y(E("loading_indicator",e.loading_indicator))}${`\r
`}`:f}</omni-render-element
    >
  `,args:{data:{hello:"world","other-data":!1},renderer:A,loading_indicator:""},play:async e=>{let n=g(e.canvasElement).getByTestId("test-render"),t=JSON.parse(JSON.stringify(e.args.data));console.log(`Running as '${navigator.userAgent}'`),navigator.userAgent==="Test Runner"?(console.log("CICD Test - Not Visual"),await new Promise(r=>setTimeout(()=>r(),3e3))):await new Promise(r=>setTimeout(()=>r(),1e4));let i=await o(n.renderRoot,"span");await a(i).toHaveTextContent(JSON.stringify(t)),t.hello="everyone",n.data=c({},t);let l=await o(n.renderRoot,"omni-loading-icon");await a(l).toBeTruthy();let s=await o(n.renderRoot,"span");await a(s).toHaveTextContent(JSON.stringify(t)),n.data=e.args.data}},m=()=>alert("Clicked"),U={render:e=>((async()=>{let t;for(;!t;)await new Promise(i=>setTimeout(()=>i(),200)),t=document.getElementById("renderElI");t.renderer=e.renderer,t.data=e.data})(),d` <omni-render-element id="renderElI" data-testid="test-render"></omni-render-element> `),name:"As HTML Element",source:()=>`
<omni-render-element id="renderElI"></omni-render-element>
<script defer>
    async function renderAsElement(data) {
        await new Promise((r) => setTimeout(() => r(), 3000));
        const span = document.createElement('span');
        span.appendChild(document.createTextNode(JSON.stringify(data)));
        span.addEventListener('click', (ev) => alert('Clicked'));
        return span;
    }
    renderEl = document.getElementById('renderElI');


    renderEl.renderer = renderAsElement;
    renderEl.data = {
            hello: 'world',
            'other-data': false
    };
<\/script>`,args:{data:{hello:"world","other-data":!1},renderer:h},play:async e=>{let n=g(e.canvasElement).getByTestId("test-render"),t=JSON.parse(JSON.stringify(e.args.data));m=T.fn(),console.log(`Running as '${navigator.userAgent}'`),navigator.userAgent==="Test Runner"?(console.log("CICD Test - Not Visual"),await new Promise(r=>setTimeout(()=>r(),3e3))):await new Promise(r=>setTimeout(()=>r(),1e4));let i=await o(n.renderRoot,"span");await a(i).toHaveTextContent(JSON.stringify(t)),t.hello="everyone",n.data=c({},t);let l=await o(n.renderRoot,"omni-loading-icon");await a(l).toBeTruthy();let s=await o(n.renderRoot,"span");await a(s).toHaveTextContent(JSON.stringify(t)),await u.click(s,{pointerEventsCheck:0}),await u.click(s,{pointerEventsCheck:0}),await a(m).toBeCalledTimes(2),m=()=>alert("Clicked"),n.data=e.args.data}},z={render:e=>((async()=>{let t;for(;!t;)t=document.getElementById("renderElS"),t||await new Promise(i=>setTimeout(()=>i(),200));t.renderer=e.renderer,t.data=e.data})(),d` <omni-render-element id="renderElS" data-testid="test-render"> </omni-render-element> `),name:"As String",source:()=>`
<omni-render-element id="renderElS"></omni-render-element>
<script defer>
    async function renderAsString(data) {
        await new Promise<void>((r) => setTimeout(() => r(), 3000));
        return \`<span>\${JSON.stringify(data)}</span>\`;
    }
    renderEl = document.getElementById('renderElS');


    renderEl.renderer = renderAsString;
    renderEl.data = {
            hello: 'world',
            'other-data': false
    };
<\/script>`,args:{data:{hello:"world","other-data":!1},renderer:C},play:async e=>{let n=g(e.canvasElement).getByTestId("test-render"),t=JSON.parse(JSON.stringify(e.args.data));console.log(`Running as '${navigator.userAgent}'`),navigator.userAgent==="Test Runner"?(console.log("CICD Test - Not Visual"),await new Promise(r=>setTimeout(()=>r(),3e3))):await new Promise(r=>setTimeout(()=>r(),1e4));let i=await o(n.renderRoot,"span");await a(i).toHaveTextContent(JSON.stringify(t)),t.hello="everyone",n.data=c({},t);let l=await o(n.renderRoot,"omni-loading-icon");await a(l).toBeTruthy();let s=await o(n.renderRoot,"span");await a(s).toHaveTextContent(JSON.stringify(t)),n.data=e.args.data}};export{U as As_HTML_Element,q as As_Lit,z as As_String,D as default};
//# sourceMappingURL=RenderElement.stories.js.map
