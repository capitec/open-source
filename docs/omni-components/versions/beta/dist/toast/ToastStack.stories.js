import{a as S}from"../chunks-js/chunk.IK3JAOM3.js";import"../chunks-js/chunk.XRXAHUDA.js";import{E as n,x as i}from"../chunks-js/chunk.LIHXMBR3.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.YISFJ54N.js";import"../chunks-js/chunk.TQF2Y64M.js";import"../chunks-js/chunk.FCGABMD4.js";import{b as k}from"../chunks-js/chunk.D5GPI5IO.js";import"../chunks-js/chunk.VXWK2PFN.js";import{a as b}from"../chunks-js/chunk.I4G3FJEU.js";import"../chunks-js/chunk.D57IHIAB.js";import"../chunks-js/chunk.DUTPH62F.js";import"../chunks-js/chunk.ALZCBY4J.js";import{a as y}from"../chunks-js/chunk.C3AR2WR4.js";import"../chunks-js/chunk.34WDYOTS.js";import"../chunks-js/chunk.ZJGON3BB.js";import"../chunks-js/chunk.P6J7VJ5B.js";import"../chunks-js/chunk.Y6UVSDXK.js";import{d as s,g,i as c}from"../chunks-js/chunk.UDCULUBW.js";import{m as h,p as T}from"../chunks-js/chunk.BF43NN75.js";h();T();var a=(t,e,o)=>s`
<omni-toast-stack
        ${e?k(e):g}
        data-testid="${o!=null?o:"test-toast-stack"}" 
        position="${y(t.position)}"
        ?reverse="${t.reverse}">
    ${b(t["[Default Slot]"])}
</omni-toast-stack>
`,l,_={description:()=>s`
<div>
    <p>The <code class="language-html">&lt;omni-toast-stack&gt;</code> component can be authored as an element or created via script.</p>
    <p>This example illustrates the component authored as an element. An important consideration to keep in mind when using this approach is that in order for the element to properly overlay all other content, it needs to be a root level element to avoid <code class="language-html">z-index</code> related issues.</p>
    <p>Creating the <code class="language-html">&lt;omni-toast-stack&gt;</code> via script can help avoid this issue as it by default parents the newly created instance to the document body. The parent can still be specified to be a different element, however the same considerations will then apply.</p>
</div>
    `,render:t=>{var o;let e=(o=l==null?void 0:l.parentElement)!=null?o:document.createElement("div");return l&&c(a(t,f=>l=f),e),s`<omni-button @click="${()=>{l?l.innerHTML=t["[Default Slot]"]:(e.style.display="contents",document.body.appendChild(e)),c(a(t,f=>l=f),e),document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}">Show Toasts</omni-button>`},frameworkSources:[{framework:"HTML",load:t=>n(a(t))},{framework:"Vue",load:t=>n(a(t)).replaceAll(" closeable",' :closeable="true"').replaceAll(" reverse",' :reverse="true"')}],name:"Interactive",args:{reverse:!1,position:"bottom","[Default Slot]":i`<omni-toast
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
</omni-toast>`}},r,W={description:()=>s`
        <div>
            <p>Display slotted <code class="language-html">&lt;omni-toast&gt;</code> elements in order.</p>
            <p>Slotted toasts can be configured to auto-close after specified milliseconds with the <code class="language-js">data-toast-duration</code> attribute, after which they will be removed from the parent element.</p>
            <p>Slotted toasts with the <code class="language-js">closeable</code> attribute will be removed from the parent element when their <code class="language-js">close-click</code> event gets fired (usually via click of the close button).</p>    
        </div>`,render:t=>s`<omni-button @click="${()=>{let e=r!=null&&r.parentElement?r.parentElement:document.createElement("div");r?r.innerHTML=t["[Default Slot]"]:(e.style.display="contents",document.body.appendChild(e)),c(a(t,o=>r=o,"test-toast-stack-slotted"),e),r==null||r.requestUpdate(),document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}">Show Toasts</omni-button>`,frameworkSources:[{framework:"HTML",load:t=>n(a(t))},{framework:"Vue",load:t=>n(a(t)).replaceAll(" closeable",' :closeable="true"').replaceAll(" reverse",' :reverse="true"')},{framework:"React",load:t=>`import { OmniToast, OmniToastStack } from "@capitec/omni-components-react/toast";

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
</omni-toast>`}},p,z={description:()=>s`
        <div>
            <p>Create new <code class="language-html">&lt;omni-toast&gt;</code> elements from script.</p>
            <p>Toasts can be configured to auto-close after specified milliseconds with the <code class="language-js">duration</code> property, after which they will be removed from the parent element.</p>
            <p>Toasts with the <code class="language-js">closeable</code> property will be removed from the parent element when their <code class="language-js">close-click</code> event gets fired (usually via click of the close button).</p>
            <p>All <code class="language-html">&lt;omni-toast&gt;</code> attributes can be configured as well as additional render functions that can bed provided for slotted content on the toasts.</p>    
        </div>`,render:t=>s`<omni-button @click="${()=>{if(!p){let e=document.createElement("div");e.style.display="contents",document.body.appendChild(e),c(a(t,o=>p=o,"test-toast-stack-added"),e),document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}p.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,duration:15e3}),p.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,prefix:"\u2705",close:"\u274E",content:i`<span>My Extra <strong>Content</strong></span>`})}}">Show Toasts</omni-button>`,frameworkSources:[{framework:"HTML",sourceParts:{htmlFragment:t=>n(a(t)),jsFragment:`const toastStack = document.querySelector('omni-toast-stack');
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
}`},{framework:"Lit",sourceParts:{htmlFragment:t=>n(a(t),e=>{var o;return(o=e.firstElementChild)==null?void 0:o.setAttribute("data-replace-token","")},e=>e.replace(' data-replace-token=""'," ${ref(onRef)}")),jsFragment:`import { ref } from 'https://unpkg.com/lit-html/directives/ref.js?module';
                
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
}`}},{framework:"Vue",sourceParts:{htmlFragment:t=>n(a(t)).replaceAll(" closeable",' :closeable="true"').replaceAll(" reverse",' :reverse="true"')+`
<!-- Execute function on Vue load -->
<div style="display: none;">
{{ (() =>  { run() })() }}
</div>
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
};`}}],name:"Show from script",args:{reverse:!1,position:"bottom","[Default Slot]":void 0}},d,B={description:()=>s`
        <div>
            <p>Create an <code class="language-html">&lt;omni-toast-stack&gt;</code> instance from script.</p>
            <p>An important consideration to keep in mind when using authoring the element via html is that in order for the element to properly overlay all other content, it needs to be a root level element to avoid <code class="language-html">z-index</code> related issues.</p>
            <p>Creating the <code class="language-html">&lt;omni-toast-stack&gt;</code> via script as in this example can help avoid this issue as it by default parents the newly created instance to the document body. The parent can still be specified to be a different element, however the same considerations will then apply.</p>
        </div>`,render:()=>(d||(d=S.create({position:"top",reverse:!0}),d==null||d.setAttribute("data-testid","test-toast-stack-created")),s`<omni-button @click="${()=>{d.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,duration:15e3}),d.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,prefix:"\u2705",close:"\u274E",content:i`<span>My Extra <strong>Content</strong></span>`})}}">Show Toasts</omni-button>`),frameworkSources:[{framework:"HTML",sourceParts:{htmlFragment:i`<div>HTML Content</div>`,jsFragment:`import { ToastStack } from '@capitec/omni-components/toast';
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
});`}},{framework:"React",load:()=>`import { ToastStack } from '@capitec/omni-components-react/toast';

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
});`}}],name:"Create from script",args:{reverse:!1,position:"bottom","[Default Slot]":void 0}},u,N={description:()=>s`
        <div>
            <p>Position <code class="language-html">&lt;omni-toast&gt;</code> elements in the stack.</p>
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
        </div>`,render:t=>s`<omni-button @click="${()=>{if(!u){let e=document.createElement("div");e.style.display="contents",document.body.appendChild(e),c(a(t,o=>u=o,"test-toast-stack-position"),e),document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}u.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,duration:15e3}),u.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,prefix:"\u2705",close:"\u274E",content:i`<span>My Extra <strong>Content</strong></span>`})}}">Show Toasts</omni-button>`,frameworkSources:[{framework:"HTML",sourceParts:{htmlFragment:t=>n(a(t)),jsFragment:`const toastStack = document.querySelector('omni-toast-stack');
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
}`},{framework:"Lit",sourceParts:{htmlFragment:t=>n(a(t),e=>{var o;return(o=e.firstElementChild)==null?void 0:o.setAttribute("data-replace-token","")},e=>e.replace(' data-replace-token=""'," ${ref(onRef)}")),jsFragment:`import { ref } from 'https://unpkg.com/lit-html/directives/ref.js?module';
                
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
}`}},{framework:"Vue",sourceParts:{htmlFragment:t=>n(a(t)).replaceAll(" closeable",' :closeable="true"').replaceAll(" reverse",' :reverse="true"')+`
<!-- Execute function on Vue load -->
<div style="display: none;">
{{ (() =>  { run() })() }}
</div>
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
};`}}],name:"Position",args:{reverse:!1,position:"right","[Default Slot]":void 0}},m,U={description:()=>s`
        <div>
            <p>Reverse <code class="language-html">&lt;omni-toast&gt;</code> elements in the stack.</p>
            <p>By default newest toasts are showed at the bottom of the stack. When reversed, newest toasts are showed on top of the stack.</p>
        </div>`,render:t=>s`<omni-button @click="${()=>{m||(c(a(t,e=>m=e,"test-toast-stack-reverse"),document.body),document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))),m.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,duration:15e3}),m.showToast({type:"info",header:"Test",detail:"Test Info",closeable:!0,prefix:"\u2705",close:"\u274E",content:i`<span>My Extra <strong>Content</strong></span>`})}}">Show Toasts</omni-button>`,frameworkSources:[{framework:"HTML",sourceParts:{htmlFragment:t=>n(a(t)),jsFragment:`const toastStack = document.querySelector('omni-toast-stack');
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
}`},{framework:"Lit",sourceParts:{htmlFragment:t=>n(a(t),e=>{var o;return(o=e.firstElementChild)==null?void 0:o.setAttribute("data-replace-token","")},e=>e.replace(' data-replace-token=""'," ${ref(onRef)}")),jsFragment:`import { ref } from 'https://unpkg.com/lit-html/directives/ref.js?module';

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
}`}},{framework:"Vue",sourceParts:{htmlFragment:t=>n(a(t)).replaceAll(" closeable",' :closeable="true"').replaceAll(" reverse",' :reverse="true"')+`
<!-- Execute function on Vue load -->
<div style="display: none;">
{{ (() =>  { run() })() }}
</div>
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
};`}}],name:"Reverse",args:{reverse:!0,position:"bottom","[Default Slot]":void 0}};export{B as Create_From_Script,_ as Interactive,N as Position,U as Reverse,z as Show_From_Script,W as Slotted_Toasts};
//# sourceMappingURL=ToastStack.stories.js.map
