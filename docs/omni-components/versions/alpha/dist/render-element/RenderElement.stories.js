import{m}from"../chunks-js/chunk.VT33ZWJV.js";import"../chunks-js/chunk.VRVI2LVR.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.NLDNET67.js";import"../chunks-js/chunk.XWTONBU2.js";import"../chunks-js/chunk.YRSGKD7J.js";import"../chunks-js/chunk.6DDAVEXD.js";import{a as s}from"../chunks-js/chunk.2T6FOQVU.js";import"../chunks-js/chunk.BNDN7Y77.js";import"../chunks-js/chunk.3F3IIFA7.js";import"../chunks-js/chunk.YTU7KEBB.js";import"../chunks-js/chunk.ZTHUBORR.js";import"../chunks-js/chunk.4PFNWG2J.js";import{d as n,g as i}from"../chunks-js/chunk.63YMDT6M.js";import{m as d,p as o}from"../chunks-js/chunk.BF43NN75.js";d();o();async function l(e){return await new Promise(t=>setTimeout(()=>t(),3e3)),n`<span>${JSON.stringify(e)}</span>`}async function c(e){await new Promise(r=>setTimeout(()=>r(),3e3));let t=document.createElement("span");return t.appendChild(document.createTextNode(JSON.stringify(e))),t.addEventListener("click",()=>alert("Clicked")),t}async function p(e){return await new Promise(t=>setTimeout(()=>t(),3e3)),`<span>${JSON.stringify(e)}</span>`}var O={frameworkSources:[{framework:"Vue",sourceParts:{jsFragment:()=>`import { html } from 'https://unpkg.com/lit/index.js?module';
import { render } from 'https://unpkg.com/lit-html/lit-html.js?module';

window.vueData = {
    someData: {
        hello: 'world',
        'other-data': false
    },
    renderAsLit: async (data) => {
        await new Promise((r) => setTimeout(() => r(), 3000));
        return html\`<span>\${JSON.stringify(data)}</span>\`;
    }
}`,htmlFragment:`
<omni-render-element 
    .data="someData" 
    .renderer="renderAsLit">
</omni-render-element>`}},{framework:"Lit",sourceParts:{jsFragment:()=>`const someData = {
    hello: 'world',
    'other-data': false
};
async function renderAsLit(data) {
    await new Promise((r) => setTimeout(() => r(), 3000));
    return html\`<span>\${JSON.stringify(data)}</span>\`;
}`,htmlFragment:`
<omni-render-element 
    .data="\${someData}" 
    .renderer="\${renderAsLit}">
</omni-render-element>`}},{framework:"HTML",load:()=>`
 
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
                  }}/>;`}],name:"Lit Template",description:"Render a Lit template string from the renderer function.",render:e=>n`
    <omni-render-element data-testid="test-render" .data="${e.data}" .renderer="${e.renderer}"
      >${e.loading_indicator?n`${`\r
`}${s(m("loading_indicator",e.loading_indicator))}${`\r
`}`:i}</omni-render-element
    >
  `,args:{data:{hello:"world","other-data":!1},renderer:l,loading_indicator:""}},N={render:e=>((async()=>{let r;for(;!r;)await new Promise(a=>setTimeout(()=>a(),200)),r=document.getElementById("renderElI");r.renderer=e.renderer,r.data=e.data})(),n` <omni-render-element id="renderElI" data-testid="test-render"></omni-render-element> `),name:"HTML Element Instance",description:"Render an HTMLElement instance from the renderer function.",frameworkSources:[{framework:"Vue",sourceParts:{jsFragment:`window.vueData = {
    someData: {
        hello: 'world',
        'other-data': false
    },
    renderAsElement: async (data) => {
        await new Promise((r) => setTimeout(() => r(), 3000));
        const span = document.createElement('span');
        span.appendChild(document.createTextNode(JSON.stringify(data)));
        span.addEventListener('click', (ev) => alert('Clicked'));
        return span;
    }
}`,htmlFragment:`
<omni-render-element .renderer="renderAsElement" .data="someData"></omni-render-element>`}},{framework:"Lit",sourceParts:{jsFragment:()=>`async function renderAsElement(data) {
    await new Promise((r) => setTimeout(() => r(), 3000));
    const span = document.createElement('span');
    span.appendChild(document.createTextNode(JSON.stringify(data)));
    span.addEventListener('click', (ev) => alert('Clicked'));
    return span;
}`,htmlFragment:`
<omni-render-element .renderer="\${renderAsElement}" .data="\${{
    hello: 'world',
    'other-data': false
}}"></omni-render-element>`}},{framework:"HTML",load:()=>`
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
                  }}/>;`}],args:{data:{hello:"world","other-data":!1},renderer:c}},v={render:e=>((async()=>{let r;for(;!r;)r=document.getElementById("renderElS"),r||await new Promise(a=>setTimeout(()=>a(),200));r.renderer=e.renderer,r.data=e.data})(),n` <omni-render-element id="renderElS" data-testid="test-render"> </omni-render-element> `),name:"HTML String",description:"Render a string from the renderer function as html.",frameworkSources:[{framework:"Vue",sourceParts:{jsFragment:`window.vueData = {
    someData: {
        hello: 'world',
        'other-data': false
    },
    renderAsString: async (data) => {
        await new Promise((r) => setTimeout(() => r(), 3000));
        return \`<span>\${JSON.stringify(data)}</span>\`;
    }
}`,htmlFragment:`
<omni-render-element .renderer="renderAsString" .data="someData"></omni-render-element>`}},{framework:"Lit",sourceParts:{jsFragment:()=>"async function renderAsString(data) {\n    await new Promise((r) => setTimeout(() => r(), 3000));\n    return `<span>${JSON.stringify(data)}</span>`;\n}",htmlFragment:`
<omni-render-element .renderer="\${renderAsString}" .data="\${{
    hello: 'world',
    'other-data': false
}}"></omni-render-element>`}},{framework:"HTML",load:()=>`
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
                  }}/>;`}],args:{data:{hello:"world","other-data":!1},renderer:p}};export{N as HTML_Element_Instance,v as HTML_String,O as Lit_Template};
//# sourceMappingURL=RenderElement.stories.js.map
