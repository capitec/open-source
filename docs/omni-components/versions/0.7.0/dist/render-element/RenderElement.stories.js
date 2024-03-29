import"../chunks-js/chunk.F7QUJQT5.js";import"../chunks-js/chunk.STJOQLHS.js";import{a as S}from"../chunks-js/chunk.IRJIQSYL.js";import"../chunks-js/chunk.LCIHREUY.js";import{b as u}from"../chunks-js/chunk.MHLMY33S.js";import{m as y,z as o}from"../chunks-js/chunk.WI5F3R4J.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.ZPV4YWBP.js";import{c as p}from"../chunks-js/chunk.N6OKW4B2.js";import{d as a}from"../chunks-js/chunk.W54IKPJD.js";import{a as E}from"../chunks-js/chunk.32OT4JFD.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as s,d as w}from"../chunks-js/chunk.F6MIXR4E.js";import{a as c,h,m as g,p as f}from"../chunks-js/chunk.BF43NN75.js";g();f();var T=h(S(),1);var b={title:"UI Components/RenderElement",component:"omni-render-element"};async function v(e){return await new Promise(n=>setTimeout(()=>n(),3e3)),s`<span>${JSON.stringify(e)}</span>`}async function R(e){await new Promise(t=>setTimeout(()=>t(),3e3));let n=document.createElement("span");return n.appendChild(document.createTextNode(JSON.stringify(e))),n.addEventListener("click",t=>m?m():alert("Clicked")),n}async function A(e){return await new Promise(n=>setTimeout(()=>n(),3e3)),`<span>${JSON.stringify(e)}</span>`}var q={frameworkSources:[{framework:"HTML",load:()=>`
 
<script type="module">
    import { html } from 'https://unpkg.com/lit/index.js?module';
    import { render } from 'https://unpkg.com/lit-html/lit-html.js?module';

    const someData = {
        hello: 'world',
        'other-data': false
    };
    async function renderAsLit(data) {
        await new Promise((r) => setTimeout(() => r(), 3000));
        return html\`<span>\${JSON.stringify(data)}</span>\`;
    }

    render(html\`                
        <omni-render-element 
            .data="\${someData}" 
            .renderer="\${renderAsLit}">
        </omni-render-element>
    \`, document.getElementById('root'));
<\/script>  
<div id="root"></div>
`},{framework:"React",load:()=>`import { OmniRenderElement } from "@capitec/omni-components-react/render-element";
import { html } from 'https://unpkg.com/lit/index.js?module';

async function renderAsLit(data) {
    await new Promise((r) => setTimeout(() => r(), 3000));
    return html\`<span>\${JSON.stringify(data)}</span>\`;
}
const App = () => <OmniRenderElement renderer={renderAsLit} data={{
                    hello: 'world',
                    'other-data': false
                  }}/>;`}],name:"Lit Template",description:"Render a Lit template string from the renderer function.",render:e=>s`
    <omni-render-element data-testid="test-render" .data="${e.data}" .renderer="${e.renderer}"
      >${e.loading_indicator?s`${`\r
`}${E(y("loading_indicator",e.loading_indicator))}${`\r
`}`:w}</omni-render-element
    >
  `,args:{data:{hello:"world","other-data":!1},renderer:v,loading_indicator:""},play:async e=>{let n=p(e.canvasElement).getByTestId("test-render"),t=JSON.parse(JSON.stringify(e.args.data));console.log(`Running as '${navigator.userAgent}'`),navigator.userAgent==="Test Runner"?(console.log("CICD Test - Not Visual"),await new Promise(r=>setTimeout(()=>r(),3e3))):await new Promise(r=>setTimeout(()=>r(),1e4));let i=await o(n.renderRoot,"span");await a(i).toHaveTextContent(JSON.stringify(t)),t.hello="everyone",n.data=c({},t);let l=await o(n.renderRoot,"omni-loading-icon");await a(l).toBeTruthy();let d=await o(n.renderRoot,"span");await a(d).toHaveTextContent(JSON.stringify(t)),n.data=e.args.data}},m=()=>alert("Clicked"),U={render:e=>((async()=>{let t;for(;!t;)await new Promise(i=>setTimeout(()=>i(),200)),t=document.getElementById("renderElI");t.renderer=e.renderer,t.data=e.data})(),s` <omni-render-element id="renderElI" data-testid="test-render"></omni-render-element> `),name:"HTML Element Instance",description:"Render an HTMLElement instance from the renderer function.",frameworkSources:[{framework:"HTML",load:()=>`
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
<\/script>`},{framework:"React",load:()=>`import { OmniRenderElement } from "@capitec/omni-components-react/render-element";

async function renderAsElement(data) {
    await new Promise((r) => setTimeout(() => r(), 3000));
    const span = document.createElement('span');
    span.appendChild(document.createTextNode(JSON.stringify(data)));
    span.addEventListener('click', (ev) => alert('Clicked'));
    return span;
}
const App = () => <OmniRenderElement renderer={renderAsElement} data={{
                    hello: 'world',
                    'other-data': false
                  }}/>;`}],args:{data:{hello:"world","other-data":!1},renderer:R},play:async e=>{let n=p(e.canvasElement).getByTestId("test-render"),t=JSON.parse(JSON.stringify(e.args.data));m=T.fn(),console.log(`Running as '${navigator.userAgent}'`),navigator.userAgent==="Test Runner"?(console.log("CICD Test - Not Visual"),await new Promise(r=>setTimeout(()=>r(),3e3))):await new Promise(r=>setTimeout(()=>r(),1e4));let i=await o(n.renderRoot,"span");await a(i).toHaveTextContent(JSON.stringify(t)),t.hello="everyone",n.data=c({},t);let l=await o(n.renderRoot,"omni-loading-icon");await a(l).toBeTruthy();let d=await o(n.renderRoot,"span");await a(d).toHaveTextContent(JSON.stringify(t)),await u.click(d,{pointerEventsCheck:0}),await u.click(d,{pointerEventsCheck:0}),await a(m).toBeCalledTimes(2),m=()=>alert("Clicked"),n.data=e.args.data}},z={render:e=>((async()=>{let t;for(;!t;)t=document.getElementById("renderElS"),t||await new Promise(i=>setTimeout(()=>i(),200));t.renderer=e.renderer,t.data=e.data})(),s` <omni-render-element id="renderElS" data-testid="test-render"> </omni-render-element> `),name:"HTML String",description:"Render a string from the renderer function as html.",frameworkSources:[{framework:"HTML",load:()=>`
<omni-render-element id="renderElS"></omni-render-element>
<script defer>
    async function renderAsString(data) {
        await new Promise((r) => setTimeout(() => r(), 3000));
        return \`<span>\${JSON.stringify(data)}</span>\`;
    }
    renderEl = document.getElementById('renderElS');


    renderEl.renderer = renderAsString;
    renderEl.data = {
            hello: 'world',
            'other-data': false
    };
<\/script>`},{framework:"React",load:()=>`import { OmniRenderElement } from "@capitec/omni-components-react/render-element";

async function renderAsString(data) {
    await new Promise((r) => setTimeout(() => r(), 3000));
    return \`<span>\${JSON.stringify(data)}</span>\`;
}
const App = () => <OmniRenderElement renderer={renderAsString} data={{
                    hello: 'world',
                    'other-data': false
                  }}/>;`}],args:{data:{hello:"world","other-data":!1},renderer:A},play:async e=>{let n=p(e.canvasElement).getByTestId("test-render"),t=JSON.parse(JSON.stringify(e.args.data));console.log(`Running as '${navigator.userAgent}'`),navigator.userAgent==="Test Runner"?(console.log("CICD Test - Not Visual"),await new Promise(r=>setTimeout(()=>r(),3e3))):await new Promise(r=>setTimeout(()=>r(),1e4));let i=await o(n.renderRoot,"span");await a(i).toHaveTextContent(JSON.stringify(t)),t.hello="everyone",n.data=c({},t);let l=await o(n.renderRoot,"omni-loading-icon");await a(l).toBeTruthy();let d=await o(n.renderRoot,"span");await a(d).toHaveTextContent(JSON.stringify(t)),n.data=e.args.data}};export{U as HTML_Element_Instance,z as HTML_String,q as Lit_Template,b as default};
//# sourceMappingURL=RenderElement.stories.js.map
