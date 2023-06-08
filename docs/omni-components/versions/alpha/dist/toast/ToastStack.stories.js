import{a as v}from"../chunks-js/chunk.QERJGMPC.js";import"../chunks-js/chunk.V7QVXXID.js";import"../chunks-js/chunk.VB3ZKFMN.js";import"../chunks-js/chunk.SMKXXBV2.js";import{a as b}from"../chunks-js/chunk.XCXCHO25.js";import{c}from"../chunks-js/chunk.WPESAYH2.js";import"../chunks-js/chunk.TTUIP4EN.js";import{E as n,x as i}from"../chunks-js/chunk.BQ6JZBYB.js";import"../chunks-js/chunk.Z5LIJAXH.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.KSLF5GY7.js";import{b as k}from"../chunks-js/chunk.XQ6LOMNM.js";import"../chunks-js/chunk.DVHQDKY6.js";import{a as y}from"../chunks-js/chunk.SUFNDWVH.js";import"../chunks-js/chunk.QFUUHCSV.js";import"../chunks-js/chunk.6HAYHFHP.js";import"../chunks-js/chunk.LB764BBD.js";import"../chunks-js/chunk.KRAWXAJA.js";import"../chunks-js/chunk.RWAXFZOX.js";import"../chunks-js/chunk.QA3WYCV3.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as a,e as g,g as d}from"../chunks-js/chunk.L3RZWW2F.js";import{m as f,p as T}from"../chunks-js/chunk.BF43NN75.js";f();T();var G={title:"UI Components/Toast Stack",component:"omni-toast-stack"},s=(t,o,e)=>a`
<omni-toast-stack
        ${o?k(o):g}
        data-testid="${e!=null?e:"test-toast-stack"}" 
        position="${b(t.position)}"
        ?reverse="${t.reverse}">
    ${y(t["[Default Slot]"])}
</omni-toast-stack>
`,p,J={description:()=>a`
<div>
    <p>The <code class="language-html">&lt;omni-toast-stack&gt;</code> component can be authored as an element or created via script.</p>
    <p>This example illustrates the component authored as an element. An important consideration to keep in mind when using this approach is that in order for the element to properly overlay all other content, it needs to be a root level element to avoid <code class="language-html">z-index</code> related issues.</p>
    <p>Creating the <code class="language-html">&lt;omni-toast-stack&gt;</code> via script can help avoid this issue as it by default parents the newly created instance to the document body. The parent can still be specified to be a different element, however the same considerations will then apply.</p>
</div>
    `,render:t=>a`<omni-button @click="${()=>{if(p)p.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,duration:15e3}),p.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,prefix:a`✅`,close:a`❎`,content:a`<span>My Extra <strong>Content</strong></span>`});else{let o=document.createElement("div");o.style.display="contents",document.body.appendChild(o),d(s(t,e=>p=e),o),document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}}">Show Toasts</omni-button>`,frameworkSources:[{framework:"HTML",load:t=>n(s(t))}],name:"Interactive",args:{reverse:!1,position:"bottom","[Default Slot]":i`<omni-toast
    data-toast-duration="15000"
    detail="The toast description"
    header="The toast message"
    type="success"
    closeable>
</omni-toast>
<omni-toast
    detail="The toast description"
    header="The toast message"
    type="warning"
    closeable>
</omni-toast>
<omni-toast
    data-toast-duration="3000"
    detail="The toast description"
    header="The toast message"
    type="info"
    >
</omni-toast>
<omni-toast
    data-toast-duration="10000"
    detail="The toast description"
    header="The toast message"
    type="error"
    closeable>
</omni-toast>
<omni-toast
    data-toast-duration="15000"
    detail="The toast description"
    header="The toast message">
</omni-toast>`},play:async t=>{let o=t.canvasElement.querySelector("omni-button");o&&o.click();let e=c(document.body).getByTestId("test-toast-stack");await e.updateComplete,e.focus(),e.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,duration:15e3}),e.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,prefix:a`✅`,close:a`❎`,content:a`<span>My Extra <strong>Content</strong></span>`})}},r,K={description:()=>a`
        <div>
            <p>Display slotted <code class="language-html">&lt;omni-toast&gt;</code> elements in order.<p>
            <p>Slotted toasts can be configured to auto-close after specified milliseconds with the <code class="language-js">data-toast-duration</code> attribute, after which they will be removed from the parent element.</p>
            <p>Slotted toasts with the <code class="language-js">closeable</code> attribute will be removed from the parent element when their <code class="language-js">close-click</code> event gets fired (usually via click of the close button).</p>    
        <div>`,render:t=>a`<omni-button @click="${()=>{let o=r!=null&&r.parentElement?r.parentElement:document.createElement("div");r?r.innerHTML=t["[Default Slot]"]:(o.style.display="contents",document.body.appendChild(o)),d(s(t,e=>r=e,"test-toast-stack-slotted"),o),r==null||r.requestUpdate(),document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}">Show Toasts</omni-button>`,frameworkSources:[{framework:"HTML",load:t=>n(s(t))}],name:"Slotted Toasts",args:{reverse:!1,position:"bottom","[Default Slot]":i`<omni-toast
    data-toast-duration="15000"
    detail="The toast description"
    header="The toast message"
    type="success"
    closeable>
</omni-toast>
<omni-toast
    detail="The toast description"
    header="The toast message"
    type="warning"
    closeable>
</omni-toast>
<omni-toast
    data-toast-duration="3000"
    detail="The toast description"
    header="The toast message"
    type="info"
    >
</omni-toast>
<omni-toast
    data-toast-duration="10000"
    detail="The toast description"
    header="The toast message"
    type="error"
    closeable>
</omni-toast>
<omni-toast
    data-toast-duration="15000"
    detail="The toast description"
    header="The toast message">
</omni-toast>`},play:async t=>{let o=t.canvasElement.querySelector("omni-button");o&&o.click();let e=c(document.body).getByTestId("test-toast-stack-slotted");await e.updateComplete,e.focus(),e.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,duration:15e3}),e.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,prefix:a`✅`,close:a`❎`,content:a`<span>My Extra <strong>Content</strong></span>`})}},u,O={description:()=>a`
        <div>
            <p>Create new <code class="language-html">&lt;omni-toast&gt;</code> elements from script.<p>
            <p>Toasts can be configured to auto-close after specified milliseconds with the <code class="language-js">duration</code> property, after which they will be removed from the parent element.</p>
            <p>Toasts with the <code class="language-js">closeable</code> property will be removed from the parent element when their <code class="language-js">close-click</code> event gets fired (usually via click of the close button).</p>
            <p>All <code class="language-html">&lt;omni-toast&gt;</code> attributes can be configured as well as additional render functions that can bed provided for slotted content on the toasts.</p>    
        <div>`,render:t=>a`<omni-button @click="${()=>{if(!u){let o=document.createElement("div");o.style.display="contents",document.body.appendChild(o),d(s(t,e=>u=e,"test-toast-stack-added"),o),document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}u.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,duration:15e3}),u.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,prefix:"\u2705",close:"\u274E",content:i`<span>My Extra <strong>Content</strong></span>`})}}">Show Toasts</omni-button>`,frameworkSources:[{framework:"HTML",load:t=>n(s(t)),sourceParts:{htmlFragment:t=>n(s(t)),jsFragment:`const toastStack = document.querySelector('omni-toast-stack');
toastStack.showToast({ type: 'info', header: 'Test', detail: 'Test Info', closeable: true, duration: 15000 });
toastStack.showToast({
    type: 'info',
    header: 'Test',
    detail: 'Test Info',
    closeable: true,
    // duration: 15000, // Do not set duration to keep toast until closed by user.
    prefix: '\u2705',
    close: '\u274E',
    content: '<span>My Extra <strong>Content</strong></span>'
});
                `}}],name:"Show from script",args:{reverse:!1,position:"bottom","[Default Slot]":void 0},play:async t=>{let o=t.canvasElement.querySelector("omni-button");o&&o.click();let e=c(document.body).getByTestId("test-toast-stack-added");await e.updateComplete,e.focus(),e.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,duration:15e3}),e.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,prefix:a`✅`,close:a`❎`,content:a`<span>My Extra <strong>Content</strong></span>`})}},l,Q={description:()=>a`
        <div>
            <p>Create an <code class="language-html">&lt;omni-toast-stack&gt;</code> instance from script.<p>
            <p>An important consideration to keep in mind when using authoring the element via html is that in order for the element to properly overlay all other content, it needs to be a root level element to avoid <code class="language-html">z-index</code> related issues.</p>
            <p>Creating the <code class="language-html">&lt;omni-toast-stack&gt;</code> via script as in this example can help avoid this issue as it by default parents the newly created instance to the document body. The parent can still be specified to be a different element, however the same considerations will then apply.</p>
        <div>`,render:t=>(l||(l=v.create({position:"top",reverse:!0}),l==null||l.setAttribute("data-testid","test-toast-stack-created")),a`<omni-button @click="${()=>{l.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,duration:15e3}),l.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,prefix:"\u2705",close:"\u274E",content:i`<span>My Extra <strong>Content</strong></span>`})}}">Show Toasts</omni-button>`),frameworkSources:[{framework:"HTML",load:t=>n(s(t)),sourceParts:{htmlFragment:i`<div>HTML Content</div>`,jsFragment:`import { ToastStack } from '@capitec/omni-components/toast';
const toastStack = ToastStack.create({
    position: 'top',
    reverse: true
});

toastStack.showToast({ type: 'info', header: 'Test', detail: 'Test Info', closeable: true, duration: 15000 });
toastStack.showToast({
    type: 'info',
    header: 'Test',
    detail: 'Test Info',
    closeable: true,
    // duration: 15000, // Do not set duration to keep toast until closed by user.
    prefix: '\u2705',
    close: '\u274E',
    content: '<span>My Extra <strong>Content</strong></span>'
});
                `}}],name:"Create from script",args:{reverse:!1,position:"bottom","[Default Slot]":void 0},play:async t=>{let o=t.canvasElement.querySelector("omni-button");o&&o.click();let e=c(document.body).getByTestId("test-toast-stack-created");await e.updateComplete,e.focus(),e.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,duration:15e3}),e.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,prefix:a`✅`,close:a`❎`,content:a`<span>My Extra <strong>Content</strong></span>`})}},m,V={description:()=>a`
        <div>
            <p>Position <code class="language-html">&lt;omni-toast&gt;</code> elements in the stack.<p>
            <br/>
            <span>The <code class="language-javascript">'position'</code> attribute supports the following options:
                <ul>
                    <li><code class="language-javascript">'top'</code></li>
                    <li><code class="language-javascript">'bottom'</code> (Default)</li>
                    <li><code class="language-javascript">'left'</code></li>
                    <li><code class="language-javascript">'right'</code></li>
                    <li><code class="language-javascript">'top-left'</code></li>
                    <li><code class="language-javascript">'top-right'</code></li>
                    <li><code class="language-javascript">'bottom-left'</code></li>
                    <li><code class="language-javascript">'bottom-right'</code></li>
                </ul>
            </span>
        <div>`,render:t=>a`<omni-button @click="${()=>{if(!m){let o=document.createElement("div");o.style.display="contents",document.body.appendChild(o),d(s(t,e=>m=e,"test-toast-stack-position"),o),document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}m.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,duration:15e3}),m.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,prefix:"\u2705",close:"\u274E",content:i`<span>My Extra <strong>Content</strong></span>`})}}">Show Toasts</omni-button>`,frameworkSources:[{framework:"HTML",load:t=>n(s(t)),sourceParts:{htmlFragment:t=>n(s(t)),jsFragment:`const toastStack = document.querySelector('omni-toast-stack');
toastStack.showToast({ type: 'info', header: 'Test', detail: 'Test Info', closeable: true, duration: 15000 });
toastStack.showToast({
    type: 'info',
    header: 'Test',
    detail: 'Test Info',
    closeable: true,
    // duration: 15000, // Do not set duration to keep toast until closed by user.
    prefix: '\u2705',
    close: '\u274E',
    content: '<span>My Extra <strong>Content</strong></span>'
});
                `}}],name:"Position",args:{reverse:!1,position:"right","[Default Slot]":void 0},play:async t=>{let o=t.canvasElement.querySelector("omni-button");o&&o.click();let e=c(document.body).getByTestId("test-toast-stack-position");await e.updateComplete,e.focus(),e.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,duration:15e3}),e.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,prefix:a`✅`,close:a`❎`,content:a`<span>My Extra <strong>Content</strong></span>`})}},h,X={description:()=>a`
        <div>
            <p>Reverse <code class="language-html">&lt;omni-toast&gt;</code> elements in the stack.<p>
            <p>By default newest toasts are showed at the bottom of the stack. When reversed, newest toasts are showed on top of the stack.</p>
        <div>`,render:t=>a`<omni-button @click="${()=>{h||(d(s(t,o=>h=o,"test-toast-stack-reverse"),document.body),document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))),h.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,duration:15e3}),h.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,prefix:"\u2705",close:"\u274E",content:i`<span>My Extra <strong>Content</strong></span>`})}}">Show Toasts</omni-button>`,frameworkSources:[{framework:"HTML",load:t=>n(s(t)),sourceParts:{htmlFragment:t=>n(s(t)),jsFragment:`const toastStack = document.querySelector('omni-toast-stack');
toastStack.showToast({ type: 'info', header: 'Test', detail: 'Test Info', closeable: true, duration: 15000 });
toastStack.showToast({
    type: 'info',
    header: 'Test',
    detail: 'Test Info',
    closeable: true,
    // duration: 15000, // Do not set duration to keep toast until closed by user.
    prefix: '\u2705',
    close: '\u274E',
    content: '<span>My Extra <strong>Content</strong></span>'
});
                `}}],name:"Reverse",args:{reverse:!0,position:"bottom","[Default Slot]":void 0},play:async t=>{let o=t.canvasElement.querySelector("omni-button");o&&o.click();let e=c(document.body).getByTestId("test-toast-stack-reverse");await e.updateComplete,e.focus(),e.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,duration:15e3}),e.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,prefix:a`✅`,close:a`❎`,content:a`<span>My Extra <strong>Content</strong></span>`})}};export{Q as Create_From_Script,J as Interactive,V as Position,X as Reverse,O as Show_From_Script,K as Slotted_Toasts,G as default};
//# sourceMappingURL=ToastStack.stories.js.map
