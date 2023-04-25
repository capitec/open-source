import"../chunks-js/chunk.M6SSC5HK.js";import"../chunks-js/chunk.STJOQLHS.js";import{a as S}from"../chunks-js/chunk.IRJIQSYL.js";import{a as y}from"../chunks-js/chunk.G3QHRCKP.js";import{b as u}from"../chunks-js/chunk.MHLMY33S.js";import{k as E,x as o}from"../chunks-js/chunk.6VUVFGIV.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.5NFB2EUQ.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.HA6SUF3B.js";import{c as g}from"../chunks-js/chunk.N6OKW4B2.js";import{d as a}from"../chunks-js/chunk.W54IKPJD.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as d,d as f}from"../chunks-js/chunk.F6MIXR4E.js";import{a as c,h as v,m as p,p as w}from"../chunks-js/chunk.BF43NN75.js";p();w();var T=v(S(),1);var D={title:"UI Components/RenderElement",component:"omni-render-element"};async function h(e){return await new Promise(n=>setTimeout(()=>n(),3e3)),d`<span>${JSON.stringify(e)}</span>`}async function R(e){await new Promise(t=>setTimeout(()=>t(),3e3));let n=document.createElement("span");return n.appendChild(document.createTextNode(JSON.stringify(e))),n.addEventListener("click",t=>m?m():alert("Clicked")),n}async function C(e){return await new Promise(n=>setTimeout(()=>n(),3e3)),`<span>${JSON.stringify(e)}</span>`}var q={source:()=>`
                
<!-- Bound function used (<script> tags only for syntax highlighting) -->
<script>
async function renderAsLit(data: object) {
    await new Promise<void>((r) => setTimeout(() => r(), 3000));
    return html\`<span>\${JSON.stringify(data)}</span>\`;
}
<\/script>

...
                
<omni-render-element .data="\${this.someData}" .renderer="\${this.renderAsLit}"></omni-render-element>
`,name:"Lit Template",description:"Render a Lit template string from the renderer function.",render:e=>d`
    <omni-render-element data-testid="test-render" .data="${e.data}" .renderer="${e.renderer}"
      >${e.loading_indicator?d`${`\r
`}${y(E("loading_indicator",e.loading_indicator))}${`\r
`}`:f}</omni-render-element
    >
  `,args:{data:{hello:"world","other-data":!1},renderer:h,loading_indicator:""},play:async e=>{let n=g(e.canvasElement).getByTestId("test-render"),t=JSON.parse(JSON.stringify(e.args.data));console.log(`Running as '${navigator.userAgent}'`),navigator.userAgent==="Test Runner"?(console.log("CICD Test - Not Visual"),await new Promise(r=>setTimeout(()=>r(),3e3))):await new Promise(r=>setTimeout(()=>r(),1e4));let i=await o(n.renderRoot,"span");await a(i).toHaveTextContent(JSON.stringify(t)),t.hello="everyone",n.data=c({},t);let l=await o(n.renderRoot,"omni-loading-icon");await a(l).toBeTruthy();let s=await o(n.renderRoot,"span");await a(s).toHaveTextContent(JSON.stringify(t)),n.data=e.args.data}},m=()=>alert("Clicked"),U={render:e=>((async()=>{let t;for(;!t;)await new Promise(i=>setTimeout(()=>i(),200)),t=document.getElementById("renderElI");t.renderer=e.renderer,t.data=e.data})(),d` <omni-render-element id="renderElI" data-testid="test-render"></omni-render-element> `),name:"HTML Element Instance",description:"Render an HTMLElement instance from the renderer function.",source:()=>`
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
<\/script>`,args:{data:{hello:"world","other-data":!1},renderer:R},play:async e=>{let n=g(e.canvasElement).getByTestId("test-render"),t=JSON.parse(JSON.stringify(e.args.data));m=T.fn(),console.log(`Running as '${navigator.userAgent}'`),navigator.userAgent==="Test Runner"?(console.log("CICD Test - Not Visual"),await new Promise(r=>setTimeout(()=>r(),3e3))):await new Promise(r=>setTimeout(()=>r(),1e4));let i=await o(n.renderRoot,"span");await a(i).toHaveTextContent(JSON.stringify(t)),t.hello="everyone",n.data=c({},t);let l=await o(n.renderRoot,"omni-loading-icon");await a(l).toBeTruthy();let s=await o(n.renderRoot,"span");await a(s).toHaveTextContent(JSON.stringify(t)),await u.click(s,{pointerEventsCheck:0}),await u.click(s,{pointerEventsCheck:0}),await a(m).toBeCalledTimes(2),m=()=>alert("Clicked"),n.data=e.args.data}},z={render:e=>((async()=>{let t;for(;!t;)t=document.getElementById("renderElS"),t||await new Promise(i=>setTimeout(()=>i(),200));t.renderer=e.renderer,t.data=e.data})(),d` <omni-render-element id="renderElS" data-testid="test-render"> </omni-render-element> `),name:"HTML String",description:"Render a string from the renderer function as html.",source:()=>`
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
<\/script>`,args:{data:{hello:"world","other-data":!1},renderer:C},play:async e=>{let n=g(e.canvasElement).getByTestId("test-render"),t=JSON.parse(JSON.stringify(e.args.data));console.log(`Running as '${navigator.userAgent}'`),navigator.userAgent==="Test Runner"?(console.log("CICD Test - Not Visual"),await new Promise(r=>setTimeout(()=>r(),3e3))):await new Promise(r=>setTimeout(()=>r(),1e4));let i=await o(n.renderRoot,"span");await a(i).toHaveTextContent(JSON.stringify(t)),t.hello="everyone",n.data=c({},t);let l=await o(n.renderRoot,"omni-loading-icon");await a(l).toBeTruthy();let s=await o(n.renderRoot,"span");await a(s).toHaveTextContent(JSON.stringify(t)),n.data=e.args.data}};export{U as HTML_Element_Instance,z as HTML_String,q as Lit_Template,D as default};
//# sourceMappingURL=RenderElement.stories.js.map
