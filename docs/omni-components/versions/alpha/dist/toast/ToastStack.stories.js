import{a as w}from"../chunks-js/chunk.KY47Z6CP.js";import"../chunks-js/chunk.WGRKCCTQ.js";import"../chunks-js/chunk.VB3ZKFMN.js";import"../chunks-js/chunk.DXJESG3Z.js";import{a as b}from"../chunks-js/chunk.XCXCHO25.js";import{c as l}from"../chunks-js/chunk.WPESAYH2.js";import"../chunks-js/chunk.TTUIP4EN.js";import{E as n,x as i}from"../chunks-js/chunk.LSBYP56E.js";import"../chunks-js/chunk.Z5LIJAXH.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.VW2P7YAN.js";import{b as S}from"../chunks-js/chunk.MYG5FMLT.js";import"../chunks-js/chunk.2EDJFZZN.js";import{a as y}from"../chunks-js/chunk.N3FDHMD3.js";import"../chunks-js/chunk.YX3UUKJ3.js";import"../chunks-js/chunk.XUUOUKOL.js";import"../chunks-js/chunk.LB764BBD.js";import"../chunks-js/chunk.KRAWXAJA.js";import"../chunks-js/chunk.LUCH4Y6K.js";import"../chunks-js/chunk.PNTHLTQK.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as a,e as k,g as d}from"../chunks-js/chunk.L3RZWW2F.js";import{m as T,p as g}from"../chunks-js/chunk.BF43NN75.js";T();g();var N={title:"UI Components/Toast Stack",component:"omni-toast-stack"},s=(t,e,o)=>a`
<omni-toast-stack
        ${e?S(e):k}
        data-testid="${o!=null?o:"test-toast-stack"}" 
        position="${b(t.position)}"
        ?reverse="${t.reverse}">
    ${y(t["[Default Slot]"])}
</omni-toast-stack>
`,c,G={description:()=>a`
<div>
    <p>The <code class="language-html">&lt;omni-toast-stack&gt;</code> component can be authored as an element or created via script.</p>
    <p>This example illustrates the component authored as an element. An important consideration to keep in mind when using this approach is that in order for the element to properly overlay all other content, it needs to be a root level element to avoid <code class="language-html">z-index</code> related issues.</p>
    <p>Creating the <code class="language-html">&lt;omni-toast-stack&gt;</code> via script can help avoid this issue as it by default parents the newly created instance to the document body. The parent can still be specified to be a different element, however the same considerations will then apply.</p>
</div>
    `,render:t=>{var o;let e=(o=c==null?void 0:c.parentElement)!=null?o:document.createElement("div");return c&&d(s(t,h=>c=h),e),a`<omni-button @click="${()=>{c?c.innerHTML=t["[Default Slot]"]:(e.style.display="contents",document.body.appendChild(e)),d(s(t,h=>c=h),e),document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}">Show Toasts</omni-button>`},frameworkSources:[{framework:"HTML",load:t=>n(s(t))},{framework:"Vue",load:t=>n(s(t)).replaceAll(" closeable",' :closeable="true"').replaceAll(" reverse",' :reverse="true"')}],name:"Interactive",args:{reverse:!1,position:"bottom","[Default Slot]":i`<omni-toast
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
</omni-toast>`},play:async t=>{let e=t.canvasElement.querySelector("omni-button");e&&e.click();let o=l(document.body).getByTestId("test-toast-stack");await o.updateComplete,o.focus(),o.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,duration:15e3}),o.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,prefix:a`✅`,close:a`❎`,content:a`<span>My Extra <strong>Content</strong></span>`})}},r,J={description:()=>a`
        <div>
            <p>Display slotted <code class="language-html">&lt;omni-toast&gt;</code> elements in order.<p>
            <p>Slotted toasts can be configured to auto-close after specified milliseconds with the <code class="language-js">data-toast-duration</code> attribute, after which they will be removed from the parent element.</p>
            <p>Slotted toasts with the <code class="language-js">closeable</code> attribute will be removed from the parent element when their <code class="language-js">close-click</code> event gets fired (usually via click of the close button).</p>    
        <div>`,render:t=>a`<omni-button @click="${()=>{let e=r!=null&&r.parentElement?r.parentElement:document.createElement("div");r?r.innerHTML=t["[Default Slot]"]:(e.style.display="contents",document.body.appendChild(e)),d(s(t,o=>r=o,"test-toast-stack-slotted"),e),r==null||r.requestUpdate(),document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}">Show Toasts</omni-button>`,frameworkSources:[{framework:"HTML",load:t=>n(s(t))},{framework:"Vue",load:t=>n(s(t)).replaceAll(" closeable",' :closeable="true"').replaceAll(" reverse",' :reverse="true"')},{framework:"React",load:t=>`import { OmniToast, OmniToastStack } from "@capitec/omni-components-react/toast";

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
</omni-toast>`},play:async t=>{let e=t.canvasElement.querySelector("omni-button");e&&e.click();let o=l(document.body).getByTestId("test-toast-stack-slotted");await o.updateComplete,o.focus(),o.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,duration:15e3}),o.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,prefix:a`✅`,close:a`❎`,content:a`<span>My Extra <strong>Content</strong></span>`})}},u,K={description:()=>a`
        <div>
            <p>Create new <code class="language-html">&lt;omni-toast&gt;</code> elements from script.<p>
            <p>Toasts can be configured to auto-close after specified milliseconds with the <code class="language-js">duration</code> property, after which they will be removed from the parent element.</p>
            <p>Toasts with the <code class="language-js">closeable</code> property will be removed from the parent element when their <code class="language-js">close-click</code> event gets fired (usually via click of the close button).</p>
            <p>All <code class="language-html">&lt;omni-toast&gt;</code> attributes can be configured as well as additional render functions that can bed provided for slotted content on the toasts.</p>    
        <div>`,render:t=>a`<omni-button @click="${()=>{if(!u){let e=document.createElement("div");e.style.display="contents",document.body.appendChild(e),d(s(t,o=>u=o,"test-toast-stack-added"),e),document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}u.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,duration:15e3}),u.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,prefix:"\u2705",close:"\u274E",content:i`<span>My Extra <strong>Content</strong></span>`})}}">Show Toasts</omni-button>`,frameworkSources:[{framework:"HTML",sourceParts:{htmlFragment:t=>n(s(t)),jsFragment:`const toastStack = document.querySelector('omni-toast-stack');
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
}`},{framework:"Lit",sourceParts:{htmlFragment:t=>n(s(t),e=>{var o;return(o=e.firstElementChild)==null?void 0:o.setAttribute("data-replace-token","")},e=>e.replace(' data-replace-token=""'," ${ref(onRef)}")),jsFragment:`import { ref } from 'https://unpkg.com/lit-html/directives/ref.js?module';
                
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
};`}}],name:"Show from script",args:{reverse:!1,position:"bottom","[Default Slot]":void 0},play:async t=>{let e=t.canvasElement.querySelector("omni-button");e&&e.click();let o=l(document.body).getByTestId("test-toast-stack-added");await o.updateComplete,o.focus(),o.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,duration:15e3}),o.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,prefix:a`✅`,close:a`❎`,content:a`<span>My Extra <strong>Content</strong></span>`})}},p,Q={description:()=>a`
        <div>
            <p>Create an <code class="language-html">&lt;omni-toast-stack&gt;</code> instance from script.<p>
            <p>An important consideration to keep in mind when using authoring the element via html is that in order for the element to properly overlay all other content, it needs to be a root level element to avoid <code class="language-html">z-index</code> related issues.</p>
            <p>Creating the <code class="language-html">&lt;omni-toast-stack&gt;</code> via script as in this example can help avoid this issue as it by default parents the newly created instance to the document body. The parent can still be specified to be a different element, however the same considerations will then apply.</p>
        <div>`,render:t=>(p||(p=w.create({position:"top",reverse:!0}),p==null||p.setAttribute("data-testid","test-toast-stack-created")),a`<omni-button @click="${()=>{p.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,duration:15e3}),p.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,prefix:"\u2705",close:"\u274E",content:i`<span>My Extra <strong>Content</strong></span>`})}}">Show Toasts</omni-button>`),frameworkSources:[{framework:"HTML",sourceParts:{htmlFragment:i`<div>HTML Content</div>`,jsFragment:`import { ToastStack } from '@capitec/omni-components/toast';
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
});`}}],name:"Create from script",args:{reverse:!1,position:"bottom","[Default Slot]":void 0},play:async t=>{let e=t.canvasElement.querySelector("omni-button");e&&e.click();let o=l(document.body).getByTestId("test-toast-stack-created");await o.updateComplete,o.focus(),o.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,duration:15e3}),o.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,prefix:a`✅`,close:a`❎`,content:a`<span>My Extra <strong>Content</strong></span>`})}},m,X={description:()=>a`
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
        <div>`,render:t=>a`<omni-button @click="${()=>{if(!m){let e=document.createElement("div");e.style.display="contents",document.body.appendChild(e),d(s(t,o=>m=o,"test-toast-stack-position"),e),document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}m.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,duration:15e3}),m.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,prefix:"\u2705",close:"\u274E",content:i`<span>My Extra <strong>Content</strong></span>`})}}">Show Toasts</omni-button>`,frameworkSources:[{framework:"HTML",sourceParts:{htmlFragment:t=>n(s(t)),jsFragment:`const toastStack = document.querySelector('omni-toast-stack');
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
}`},{framework:"Lit",sourceParts:{htmlFragment:t=>n(s(t),e=>{var o;return(o=e.firstElementChild)==null?void 0:o.setAttribute("data-replace-token","")},e=>e.replace(' data-replace-token=""'," ${ref(onRef)}")),jsFragment:`import { ref } from 'https://unpkg.com/lit-html/directives/ref.js?module';
                
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
};`}}],name:"Position",args:{reverse:!1,position:"right","[Default Slot]":void 0},play:async t=>{let e=t.canvasElement.querySelector("omni-button");e&&e.click();let o=l(document.body).getByTestId("test-toast-stack-position");await o.updateComplete,o.focus(),o.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,duration:15e3}),o.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,prefix:a`✅`,close:a`❎`,content:a`<span>My Extra <strong>Content</strong></span>`})}},f,Y={description:()=>a`
        <div>
            <p>Reverse <code class="language-html">&lt;omni-toast&gt;</code> elements in the stack.<p>
            <p>By default newest toasts are showed at the bottom of the stack. When reversed, newest toasts are showed on top of the stack.</p>
        <div>`,render:t=>a`<omni-button @click="${()=>{f||(d(s(t,e=>f=e,"test-toast-stack-reverse"),document.body),document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))),f.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,duration:15e3}),f.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,prefix:"\u2705",close:"\u274E",content:i`<span>My Extra <strong>Content</strong></span>`})}}">Show Toasts</omni-button>`,frameworkSources:[{framework:"HTML",sourceParts:{htmlFragment:t=>n(s(t)),jsFragment:`const toastStack = document.querySelector('omni-toast-stack');
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
}`},{framework:"Lit",sourceParts:{htmlFragment:t=>n(s(t),e=>{var o;return(o=e.firstElementChild)==null?void 0:o.setAttribute("data-replace-token","")},e=>e.replace(' data-replace-token=""'," ${ref(onRef)}")),jsFragment:`import { ref } from 'https://unpkg.com/lit-html/directives/ref.js?module';

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
};`}}],name:"Reverse",args:{reverse:!0,position:"bottom","[Default Slot]":void 0},play:async t=>{let e=t.canvasElement.querySelector("omni-button");e&&e.click();let o=l(document.body).getByTestId("test-toast-stack-reverse");await o.updateComplete,o.focus(),o.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,duration:15e3}),o.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,prefix:a`✅`,close:a`❎`,content:a`<span>My Extra <strong>Content</strong></span>`})}};export{Q as Create_From_Script,G as Interactive,X as Position,Y as Reverse,K as Show_From_Script,J as Slotted_Toasts,N as default};
//# sourceMappingURL=ToastStack.stories.js.map
