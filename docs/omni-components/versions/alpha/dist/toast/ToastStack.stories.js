import{a as C}from"../chunks-js/chunk.4FJLXQMY.js";import"../chunks-js/chunk.5PIFEB5V.js";import"../chunks-js/chunk.VB3ZKFMN.js";import"../chunks-js/chunk.DXJESG3Z.js";import{a as A}from"../chunks-js/chunk.JSH3M4FH.js";import{a as v}from"../chunks-js/chunk.XCXCHO25.js";import{b as m}from"../chunks-js/chunk.FVJIJQ42.js";import{c as l}from"../chunks-js/chunk.WPESAYH2.js";import"../chunks-js/chunk.TTUIP4EN.js";import{E as n,x as i}from"../chunks-js/chunk.TJTW5ASN.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.Z5LIJAXH.js";import"../chunks-js/chunk.VW2P7YAN.js";import{b as x}from"../chunks-js/chunk.MYG5FMLT.js";import"../chunks-js/chunk.2EDJFZZN.js";import{a as w}from"../chunks-js/chunk.N3FDHMD3.js";import"../chunks-js/chunk.YX3UUKJ3.js";import"../chunks-js/chunk.XUUOUKOL.js";import"../chunks-js/chunk.LB764BBD.js";import"../chunks-js/chunk.KRAWXAJA.js";import"../chunks-js/chunk.LUCH4Y6K.js";import"../chunks-js/chunk.PNTHLTQK.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as a,e as S,g as d}from"../chunks-js/chunk.L3RZWW2F.js";import{h as M,m as y,p as b}from"../chunks-js/chunk.BF43NN75.js";y();b();var g=M(A(),1);var tt={title:"UI Components/Toast Stack",component:"omni-toast-stack"},s=(t,o,e)=>a`
<omni-toast-stack
        ${o?x(o):S}
        data-testid="${e!=null?e:"test-toast-stack"}" 
        position="${v(t.position)}"
        ?reverse="${t.reverse}">
    ${w(t["[Default Slot]"])}
</omni-toast-stack>
`,c,et={description:()=>a`
<div>
    <p>The <code class="language-html">&lt;omni-toast-stack&gt;</code> component can be authored as an element or created via script.</p>
    <p>This example illustrates the component authored as an element. An important consideration to keep in mind when using this approach is that in order for the element to properly overlay all other content, it needs to be a root level element to avoid <code class="language-html">z-index</code> related issues.</p>
    <p>Creating the <code class="language-html">&lt;omni-toast-stack&gt;</code> via script can help avoid this issue as it by default parents the newly created instance to the document body. The parent can still be specified to be a different element, however the same considerations will then apply.</p>
</div>
    `,render:t=>{var e;let o=(e=c==null?void 0:c.parentElement)!=null?e:document.createElement("div");return c&&d(s(t,u=>c=u),o),a`<omni-button @click="${()=>{c?c.innerHTML=t["[Default Slot]"]:(o.style.display="contents",document.body.appendChild(o)),d(s(t,u=>c=u),o),document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}">Show Toasts</omni-button>`},frameworkSources:[{framework:"HTML",load:t=>n(s(t))},{framework:"Vue",load:t=>n(s(t)).replaceAll(" closeable",' :closeable="true"').replaceAll(" reverse",' :reverse="true"')}],name:"Interactive",args:{reverse:!1,position:"bottom","[Default Slot]":i`<omni-toast
    data-toast-duration="4000"
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
    data-toast-duration="4500"
    detail="The toast description"
    header="The toast message"
    type="error"
    closeable>
</omni-toast>
<omni-toast
    data-toast-duration="2000"
    detail="The toast description"
    header="The toast message">
</omni-toast>`},play:async t=>{let o=t.canvasElement.querySelector("omni-button");o&&o.click();let e=l(document.body).getByTestId("test-toast-stack"),u=g.fn();e.addEventListener("toast-remove",()=>u()),await e.updateComplete,e.focus();let E=e.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,duration:2e3}),k=g.fn();E.addEventListener("toast-stack-remove",()=>k()),e.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,prefix:a`✅`,close:a`❎`,content:a`<span>My Extra <strong>Content</strong></span>`}),await new Promise(I=>setTimeout(I,6e3)),await m(u).toBeCalledTimes(5),await m(k).toBeCalled(),await m(e.childElementCount).toBe(2),e.innerHTML=""}},r,ot={description:()=>a`
        <div>
            <p>Display slotted <code class="language-html">&lt;omni-toast&gt;</code> elements in order.<p>
            <p>Slotted toasts can be configured to auto-close after specified milliseconds with the <code class="language-js">data-toast-duration</code> attribute, after which they will be removed from the parent element.</p>
            <p>Slotted toasts with the <code class="language-js">closeable</code> attribute will be removed from the parent element when their <code class="language-js">close-click</code> event gets fired (usually via click of the close button).</p>    
        <div>`,render:t=>a`<omni-button @click="${()=>{let o=r!=null&&r.parentElement?r.parentElement:document.createElement("div");r?r.innerHTML=t["[Default Slot]"]:(o.style.display="contents",document.body.appendChild(o)),d(s(t,e=>r=e,"test-toast-stack-slotted"),o),r==null||r.requestUpdate(),document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}">Show Toasts</omni-button>`,frameworkSources:[{framework:"HTML",load:t=>n(s(t))},{framework:"Vue",load:t=>n(s(t)).replaceAll(" closeable",' :closeable="true"').replaceAll(" reverse",' :reverse="true"')},{framework:"React",load:t=>`import { OmniToast, OmniToastStack } from "@capitec/omni-components-react/toast";

const App = () => <OmniToastStack position="${t.position}" >
                    <OmniToast
                        data-toast-duration="15000"
                        detail="The toast description"
                        header="The toast message"
                        type="success"
                        closeable>
                    </OmniToast>
                    <OmniToast
                        detail="The toast description"
                        header="The toast message"
                        type="warning"
                        closeable>
                    </OmniToast>
                    <OmniToast
                        data-toast-duration="3000"
                        detail="The toast description"
                        header="The toast message"
                        type="info"
                        >
                    </OmniToast>
                    <OmniToast
                        data-toast-duration="10000"
                        detail="The toast description"
                        header="The toast message"
                        type="error"
                        closeable>
                    </OmniToast>
                    <OmniToast
                        data-toast-duration="15000"
                        detail="The toast description"
                        header="The toast message">
                    </OmniToast>
                  </OmniToastStack>;`}],name:"Slotted Toasts",args:{reverse:!1,position:"bottom","[Default Slot]":i`<omni-toast
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
</omni-toast>`},play:async t=>{let o=t.canvasElement.querySelector("omni-button");o&&o.click();let e=l(document.body).getByTestId("test-toast-stack-slotted");await e.updateComplete,e.focus(),e.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,duration:15e3}),e.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,prefix:a`✅`,close:a`❎`,content:a`<span>My Extra <strong>Content</strong></span>`})}},f,at={description:()=>a`
        <div>
            <p>Create new <code class="language-html">&lt;omni-toast&gt;</code> elements from script.<p>
            <p>Toasts can be configured to auto-close after specified milliseconds with the <code class="language-js">duration</code> property, after which they will be removed from the parent element.</p>
            <p>Toasts with the <code class="language-js">closeable</code> property will be removed from the parent element when their <code class="language-js">close-click</code> event gets fired (usually via click of the close button).</p>
            <p>All <code class="language-html">&lt;omni-toast&gt;</code> attributes can be configured as well as additional render functions that can bed provided for slotted content on the toasts.</p>    
        <div>`,render:t=>a`<omni-button @click="${()=>{if(!f){let o=document.createElement("div");o.style.display="contents",document.body.appendChild(o),d(s(t,e=>f=e,"test-toast-stack-added"),o),document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}f.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,duration:15e3}),f.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,prefix:"\u2705",close:"\u274E",content:i`<span>My Extra <strong>Content</strong></span>`})}}">Show Toasts</omni-button>`,frameworkSources:[{framework:"HTML",sourceParts:{htmlFragment:t=>n(s(t)),jsFragment:`const toastStack = document.querySelector('omni-toast-stack');
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
                `}},{framework:"React",load:t=>`import { OmniToastStack } from "@capitec/omni-components-react/toast";

const App = () => {
    let toastStack = null;
    const setRef = e => {
        toastStack = e;
        
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
    }
            
    return <OmniToastStack ref={setRef} position="${t.position}" />;                    
}`},{framework:"Lit",sourceParts:{htmlFragment:t=>n(s(t),o=>{var e;return(e=o.firstElementChild)==null?void 0:e.setAttribute("data-replace-token","")},o=>o.replace(' data-replace-token=""'," ${ref(onRef)}")),jsFragment:`import { ref } from 'https://unpkg.com/lit-html/directives/ref.js?module';
                
const onRef = e => {
    const toastStack = e;
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
}`}},{framework:"Vue",sourceParts:{htmlFragment:t=>n(s(t)).replaceAll(" closeable",' :closeable="true"').replaceAll(" reverse",' :reverse="true"')+`
<!-- Execute function on Vue load -->
{{ (() =>  { run() })() }}
`,jsFragment:`window.vueData = {
    run: async () => {

        let toastStack = document.querySelector('omni-toast-stack');

        // Wait for Vue to complete loading and the Toast Stack to be available
        while (!toastStack) {
            await Promise.resolve();
            toastStack = document.querySelector('omni-toast-stack');
        }
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
        
    }
};`}}],name:"Show from script",args:{reverse:!1,position:"bottom","[Default Slot]":void 0},play:async t=>{let o=t.canvasElement.querySelector("omni-button");o&&o.click();let e=l(document.body).getByTestId("test-toast-stack-added");await e.updateComplete,e.focus(),e.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,duration:15e3}),e.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,prefix:a`✅`,close:a`❎`,content:a`<span>My Extra <strong>Content</strong></span>`})}},p,st={description:()=>a`
        <div>
            <p>Create an <code class="language-html">&lt;omni-toast-stack&gt;</code> instance from script.<p>
            <p>An important consideration to keep in mind when using authoring the element via html is that in order for the element to properly overlay all other content, it needs to be a root level element to avoid <code class="language-html">z-index</code> related issues.</p>
            <p>Creating the <code class="language-html">&lt;omni-toast-stack&gt;</code> via script as in this example can help avoid this issue as it by default parents the newly created instance to the document body. The parent can still be specified to be a different element, however the same considerations will then apply.</p>
        <div>`,render:t=>(p||(p=C.create({position:"top",reverse:!0}),p==null||p.setAttribute("data-testid","test-toast-stack-created")),a`<omni-button @click="${()=>{p.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,duration:15e3}),p.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,prefix:"\u2705",close:"\u274E",content:i`<span>My Extra <strong>Content</strong></span>`})}}">Show Toasts</omni-button>`),frameworkSources:[{framework:"HTML",sourceParts:{htmlFragment:i`<div>HTML Content</div>`,jsFragment:`import { ToastStack } from '@capitec/omni-components/toast';
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
});`}},{framework:"React",load:t=>`import { ToastStack } from '@capitec/omni-components-react/toast';

const App = () => <div>HTML Content</div>;

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
});`},{framework:"Vue",sourceParts:{htmlFragment:i`<div>HTML Content</div>`,jsFragment:`import { ToastStack } from '@capitec/omni-components/toast';
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
});`}}],name:"Create from script",args:{reverse:!1,position:"bottom","[Default Slot]":void 0},play:async t=>{let o=t.canvasElement.querySelector("omni-button");o&&o.click();let e=l(document.body).getByTestId("test-toast-stack-created");await e.updateComplete,e.focus(),e.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,duration:15e3}),e.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,prefix:a`✅`,close:a`❎`,content:a`<span>My Extra <strong>Content</strong></span>`})}},h,nt={description:()=>a`
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
        <div>`,render:t=>a`<omni-button @click="${()=>{if(!h){let o=document.createElement("div");o.style.display="contents",document.body.appendChild(o),d(s(t,e=>h=e,"test-toast-stack-position"),o),document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}h.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,duration:15e3}),h.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,prefix:"\u2705",close:"\u274E",content:i`<span>My Extra <strong>Content</strong></span>`})}}">Show Toasts</omni-button>`,frameworkSources:[{framework:"HTML",sourceParts:{htmlFragment:t=>n(s(t)),jsFragment:`const toastStack = document.querySelector('omni-toast-stack');
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
                `}},{framework:"React",load:t=>`import { OmniToastStack } from "@capitec/omni-components-react/toast";

const App = () => {
    let toastStack = null;
    const setRef = e => {
        toastStack = e;
        
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
    }
            
    return <OmniToastStack ref={setRef} position="${t.position}" />;                    
}`},{framework:"Lit",sourceParts:{htmlFragment:t=>n(s(t),o=>{var e;return(e=o.firstElementChild)==null?void 0:e.setAttribute("data-replace-token","")},o=>o.replace(' data-replace-token=""'," ${ref(onRef)}")),jsFragment:`import { ref } from 'https://unpkg.com/lit-html/directives/ref.js?module';
                
const onRef = e => {
    const toastStack = e;
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
}`}},{framework:"Vue",sourceParts:{htmlFragment:t=>n(s(t)).replaceAll(" closeable",' :closeable="true"').replaceAll(" reverse",' :reverse="true"')+`
<!-- Execute function on Vue load -->
{{ (() =>  { run() })() }}
`,jsFragment:`window.vueData = {
    run: async () => {

        let toastStack = document.querySelector('omni-toast-stack');

        // Wait for Vue to complete loading and the Toast Stack to be available
        while (!toastStack) {
            await Promise.resolve();
            toastStack = document.querySelector('omni-toast-stack');
        }
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
        
    }
};`}}],name:"Position",args:{reverse:!1,position:"right","[Default Slot]":void 0},play:async t=>{let o=t.canvasElement.querySelector("omni-button");o&&o.click();let e=l(document.body).getByTestId("test-toast-stack-position");await e.updateComplete,e.focus(),e.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,duration:15e3}),e.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,prefix:a`✅`,close:a`❎`,content:a`<span>My Extra <strong>Content</strong></span>`})}},T,rt={description:()=>a`
        <div>
            <p>Reverse <code class="language-html">&lt;omni-toast&gt;</code> elements in the stack.<p>
            <p>By default newest toasts are showed at the bottom of the stack. When reversed, newest toasts are showed on top of the stack.</p>
        <div>`,render:t=>a`<omni-button @click="${()=>{T||(d(s(t,o=>T=o,"test-toast-stack-reverse"),document.body),document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))),T.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,duration:15e3}),T.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,prefix:"\u2705",close:"\u274E",content:i`<span>My Extra <strong>Content</strong></span>`})}}">Show Toasts</omni-button>`,frameworkSources:[{framework:"HTML",sourceParts:{htmlFragment:t=>n(s(t)),jsFragment:`const toastStack = document.querySelector('omni-toast-stack');
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
                `}},{framework:"React",load:t=>`import { OmniToastStack } from "@capitec/omni-components-react/toast";

const App = () => {
    let toastStack = null;
    const setRef = e => {
        toastStack = e;
        
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
    }
            
    return <OmniToastStack ref={setRef} position="${t.position}" reverse/>;                    
}`},{framework:"Lit",sourceParts:{htmlFragment:t=>n(s(t),o=>{var e;return(e=o.firstElementChild)==null?void 0:e.setAttribute("data-replace-token","")},o=>o.replace(' data-replace-token=""'," ${ref(onRef)}")),jsFragment:`import { ref } from 'https://unpkg.com/lit-html/directives/ref.js?module';

const onRef = e => {
    const toastStack = e;
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
}`}},{framework:"Vue",sourceParts:{htmlFragment:t=>n(s(t)).replaceAll(" closeable",' :closeable="true"').replaceAll(" reverse",' :reverse="true"')+`
<!-- Execute function on Vue load -->
{{ (() =>  { run() })() }}
`,jsFragment:`window.vueData = {
    run: async () => {

        let toastStack = document.querySelector('omni-toast-stack');

        // Wait for Vue to complete loading and the Toast Stack to be available
        while (!toastStack) {
            await Promise.resolve();
            toastStack = document.querySelector('omni-toast-stack');
        }
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
        
    }
};`}}],name:"Reverse",args:{reverse:!0,position:"bottom","[Default Slot]":void 0},play:async t=>{let o=t.canvasElement.querySelector("omni-button");o&&o.click();let e=l(document.body).getByTestId("test-toast-stack-reverse");await e.updateComplete,e.focus(),e.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,duration:15e3}),e.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,prefix:a`✅`,close:a`❎`,content:a`<span>My Extra <strong>Content</strong></span>`})}};export{st as Create_From_Script,et as Interactive,nt as Position,rt as Reverse,at as Show_From_Script,ot as Slotted_Toasts,tt as default};
//# sourceMappingURL=ToastStack.stories.js.map
