import{a as m}from"../chunks-js/chunk.OPNX6FE3.js";import{E as r,m as d,x as i}from"../chunks-js/chunk.F2QZVZT6.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.Z5LIJAXH.js";import"../chunks-js/chunk.UHIDETPL.js";import"../chunks-js/chunk.R74VGS2O.js";import{b as f}from"../chunks-js/chunk.MDYAUJ3Z.js";import"../chunks-js/chunk.VTL5CONA.js";import{a as l}from"../chunks-js/chunk.5DDJQYYG.js";import"../chunks-js/chunk.3U7QFP2Q.js";import"../chunks-js/chunk.LB764BBD.js";import"../chunks-js/chunk.VK7R3VQL.js";import{a as c}from"../chunks-js/chunk.XCXCHO25.js";import"../chunks-js/chunk.FT5UPVZS.js";import"../chunks-js/chunk.6C4LMRM7.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as a,e as s}from"../chunks-js/chunk.L3RZWW2F.js";import{m as u,p}from"../chunks-js/chunk.BF43NN75.js";u();p();var O={title:"UI Components/Alert",component:"omni-alert"},n=(e,t)=>a`
        <omni-alert
            ${f(o=>{t&&t(o),o==null||o.show()})}
            @alert-close="${()=>{e.hide=!0,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}"
            data-testid="test-alert"
            status="${c(e.status)}"
            message="${c(e.message)}"
            header-align="${c(e.headerAlign)}"
            description="${c(e.description)}"
            description-align="${c(e.descriptionAlign)}"
            primary-action="${c(e.primaryAction)}"
            secondary-action="${c(e.secondaryAction)}"
            ?enable-secondary=${e.enableSecondary}
            action-align="${c(e.actionAlign)}"
            >${e["status-indicator"]?a`${`\r
`}${l(d("status-indicator",e["status-indicator"]))}`:s}${e.header?a`${`\r
`}${l(d("header",e.header))}`:s}${e["[Default Slot]"]?a`${`\r
`}${l(e["[Default Slot]"])}`:s}${e.primary?a`${`\r
`}${l(d("primary",e.primary))}`:s}${e.secondary?a`${`\r
`}${l(d("secondary",e.secondary))}`:s}
        </omni-alert>
`,q={render:e=>a`
        <omni-button data-testid="test-alert-btn" @click="${()=>{e.hide=!1,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Alert" ></omni-button>
        ${e.hide?s:n(e)}
    `,frameworkSources:[{framework:"HTML",sourceParts:{htmlFragment:e=>i`
                ${r(n(e))}            
                `,jsFragment:"document.querySelector('omni-alert').show();"}},{framework:"Lit",sourceParts:{htmlFragment:e=>i`${r(n(e),t=>{var o;return(o=t.firstElementChild)==null?void 0:o.setAttribute("data-replace-token","")},t=>t.replace(' data-replace-token=""'," ${ref(onRef)}"))} `,jsFragment:`import { ref } from 'https://unpkg.com/lit-html/directives/ref.js?module';
                
const onRef = e => {
    const omniAlert = e;
    if (omniAlert) {
        omniAlert.show();
    }
};`}},{framework:"Vue",sourceParts:{htmlFragment:e=>r(n(e)).replaceAll(" enable-secondary",' :enable-secondary="true"')+`
<!-- Execute function on Vue load -->
<div style="display: none;">
{{ (() =>  { run() })() }}
</div>
`,jsFragment:`window.vueData = {
    run: async () => {
        await customElements.whenDefined('omni-alert');
        document.querySelector('omni-alert').show();        
    }
};`}}],name:"Interactive",args:{"status-indicator":"",header:"","[Default Slot]":"",primary:"",secondary:"",hide:!0,message:"Message Alert",description:"Additional context for the alert.",enableSecondary:void 0,status:void 0,headerAlign:void 0,descriptionAlign:void 0,primaryAction:void 0,secondaryAction:void 0,actionAlign:void 0}},V={description:()=>a`
    <div>
        Alerts can be shown programmatically using the static <code class="language-js">Alert.show()</code> function. 
    <div>
    `,render:e=>a`
        <omni-button
            data-testid="test-alert-show"
            label="Show Alert"
            @click="${()=>{m.show({status:"success",message:"Success!",description:"It was successful."})}}"
            >
        </omni-button>
    `,frameworkSources:[{framework:"HTML",sourceParts:{htmlFragment:i`<omni-button label="Show Alert"></omni-button>`,jsFragment:`import { Alert } from '@capitec/omni-components/alert';

document.querySelector('omni-button').addEventListener('click', () => {    
    Alert.show({
        status: 'success',
        message: 'Success!',
        description: 'It was successful.',
    });
});`}},{framework:"Vue",sourceParts:{htmlFragment:i`<omni-button label="Show Alert" @click="showAlert"></omni-button>`,jsFragment:`import { Alert } from '@capitec/omni-components/alert';

window.vueData = {
    showAlert: () => {        
        Alert.show({
            status: 'success',
            message: 'Success!',
            description: 'It was successful.',
        });
    }
};`}},{framework:"Lit",sourceParts:{htmlFragment:i`<omni-button label="Show Alert" @click="\${showAlert}"></omni-button>`,jsFragment:`import { Alert } from '@capitec/omni-components/alert';

const showAlert = () => {
    Alert.show({
        status: 'success',
        message: 'Success!',
        description: 'It was successful.',
    });
}`}},{framework:"React",load:e=>`import { OmniButton } from "@capitec/omni-components-react/button";
import { Alert } from '@capitec/omni-components-react/alert';

const showAlert = () => {
    Alert.show({
        status: 'success',
        message: 'Success!',
        description: 'It was successful.',
    });
};

const App = () => <OmniButton label="Show Alert" onclick={showAlert}/>;`}],name:"Showing Alert Programmatically",args:{}},A="",H={description:()=>a`
    <div>
        Alerts can be asynchronously shown and awaited programmatically using the static <code class="language-js">Alert.showAsync()</code> function. 
    <div>
    `,render:e=>a`
        <omni-button
            data-testid="test-alert-show"
            label="Show Alert"
            @click="${()=>{m.showAsync({status:"info",message:"Async Alert!",description:`Click "Yes" for "primary" reason or "No" for "secondary" reason.
If closed from script via the "hide" function on the Alert instance, the reason would be "auto".`,enableSecondary:!0,primaryAction:"Yes",secondaryAction:"No"}).then(t=>{A=t,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))})}}"
            >
        </omni-button>
        <div>${A}</div>
    `,frameworkSources:[{framework:"HTML",sourceParts:{htmlFragment:i`<omni-button label="Show Alert"></omni-button>
<div id="reason"></div>`,jsFragment:`import { Alert } from '@capitec/omni-components/alert';

document.querySelector('omni-button').addEventListener('click', async () => {    
    const reason = await Alert.showAsync({
        status: 'info',
        message: 'Async Alert!',
        description: \`Click "Yes" for "primary" reason or "No" for "secondary" reason.
If closed from script via the "hide" function on the Alert instance, the reason would be "auto".\`,
        enableSecondary: true,
        primaryAction: 'Yes',
        secondaryAction: 'No'
    });
    document.getElementById('reason').innerHTML = reason;
});`}},{framework:"Vue",sourceParts:{htmlFragment:i`<omni-button label="Show Alert" @click="showAlert"></omni-button>
<div id="reason"></div>`,jsFragment:`import { Alert } from '@capitec/omni-components/alert';

window.vueData = {
    showAlert: async () => {   
        const reason = await Alert.showAsync({
            status: 'info',
            message: 'Async Alert!',
            description: \`Click "Yes" for "primary" reason or "No" for "secondary" reason.
    If closed from script via the "hide" function on the Alert instance, the reason would be "auto".\`,
            enableSecondary: true,
            primaryAction: 'Yes',
            secondaryAction: 'No'
        });
        document.getElementById('reason').innerHTML = reason;
    }
};`}},{framework:"Lit",sourceParts:{htmlFragment:i`<omni-button label="Show Alert" @click="\${showAlert}"></omni-button>
<div id="reason"></div>`,jsFragment:`import { Alert } from '@capitec/omni-components/alert';

const showAlert = async () => {   
    const reason = await Alert.showAsync({
        status: 'info',
        message: 'Async Alert!',
        description: \`Click "Yes" for "primary" reason or "No" for "secondary" reason.
If closed from script via the "hide" function on the Alert instance, the reason would be "auto".\`,
        enableSecondary: true,
        primaryAction: 'Yes',
        secondaryAction: 'No'
    });
    document.getElementById('reason').innerHTML = reason;
};`}},{framework:"React",load:e=>`import { OmniButton } from "@capitec/omni-components-react/button";
import { Alert } from '@capitec/omni-components-react/alert';

const showAlert = async () => {   
    const reason = await Alert.showAsync({
        status: 'info',
        message: 'Async Alert!',
        description: \`Click "Yes" for "primary" reason or "No" for "secondary" reason.
If closed from script via the "hide" function on the Alert instance, the reason would be "auto".\`,
        enableSecondary: true,
        primaryAction: 'Yes',
        secondaryAction: 'No'
    });
    document.getElementById('reason').innerHTML = reason;
};

const App = () => <>
                    <OmniButton label="Show Alert" onclick={showAlert}/>
                    <div id="reason"></div>
                  </>;`}],name:"Showing Async Alert Programmatically",args:{}},T={description:()=>a`
    <div>
        <p>Set the display status of the <code class="language-html">&lt;omni-alert&gt;</code>.<p>
        <br/>
        <span>The <code>status</code> attribute supports the following options:
            <ul>
                <li><code class="language-javascript">'success'</code> - Checkmark icon to indicate success.</li>
                <li><code class="language-javascript">'warning'</code> - Yield icon to indicate warning.</li>
                <li><code class="language-javascript">'error'</code> - Exclamation icon to indicate error.</li>
                <li><code class="language-javascript">'info'</code> - Information icon to indicate info.</li>
                <li><code class="language-javascript">'none'</code> - No icon. (Default)</li>
            </ul>
        </span>
    <div>
    `,render:e=>a`
        <omni-button data-testid="test-alert-btn" @click="${()=>{e.hide=!1,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Alert" ></omni-button>
        ${e.hide?s:n(e)}
    `,frameworkSources:[{framework:"HTML",sourceParts:{htmlFragment:e=>i`
                ${r(n(e))}            
                `,jsFragment:"document.querySelector('omni-alert').show();"}},{framework:"Lit",sourceParts:{htmlFragment:e=>i`${r(n(e),t=>{var o;return(o=t.firstElementChild)==null?void 0:o.setAttribute("data-replace-token","")},t=>t.replace(' data-replace-token=""'," ${ref(onRef)}"))} `,jsFragment:`import { ref } from 'https://unpkg.com/lit-html/directives/ref.js?module';
                
const onRef = e => {
    const omniAlert = e;
    if (omniAlert) {
        omniAlert.show();
    }
};`}},{framework:"React",load:e=>`import { OmniAlert } from "@capitec/omni-components-react/alert";

const onRef = e => {
    const omniAlert = e;
    if (omniAlert) {
        omniAlert.show();
    }
};

const App = () => <OmniAlert ref={onRef} message="${e.message}" description="${e.description}" status="${e.status}"/>;`},{framework:"Vue",sourceParts:{htmlFragment:e=>r(n(e)).replaceAll(" enable-secondary",' :enable-secondary="true"')+`
<!-- Execute function on Vue load -->
<div style="display: none;">
{{ (() =>  { run() })() }}
</div>
`,jsFragment:`window.vueData = {
    run: async () => {
        await customElements.whenDefined('omni-alert');
        document.querySelector('omni-alert').show();        
    }
};`}}],name:"Status",args:{"status-indicator":"",header:"","[Default Slot]":"",primary:"",secondary:"",hide:!0,message:"Message Alert",description:"Additional context for the alert.",enableSecondary:void 0,status:"success",headerAlign:void 0,descriptionAlign:void 0,primaryAction:void 0,secondaryAction:void 0,actionAlign:void 0}},I={description:()=>a`Align header content horizontally (Defaults to <code class="language-js">'center'</code>).`,render:e=>a`
        <omni-button data-testid="test-alert-btn" @click="${()=>{e.hide=!1,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Alert" ></omni-button>
        ${e.hide?s:n(e)}
    `,frameworkSources:[{framework:"HTML",sourceParts:{htmlFragment:e=>i`
                ${r(n(e))}            
                `,jsFragment:"document.querySelector('omni-alert').show();"}},{framework:"Lit",sourceParts:{htmlFragment:e=>i`${r(n(e),t=>{var o;return(o=t.firstElementChild)==null?void 0:o.setAttribute("data-replace-token","")},t=>t.replace(' data-replace-token=""'," ${ref(onRef)}"))} `,jsFragment:`import { ref } from 'https://unpkg.com/lit-html/directives/ref.js?module';
                
const onRef = e => {
    const omniAlert = e;
    if (omniAlert) {
        omniAlert.show();
    }
};`}},{framework:"React",load:e=>`import { OmniAlert } from "@capitec/omni-components-react/alert";

const onRef = e => {
    const omniAlert = e;
    if (omniAlert) {
        omniAlert.show();
    }
};

const App = () => <OmniAlert ref={onRef} message="${e.message}" description="${e.description}" header-align="${e.headerAlign}"/>;`},{framework:"Vue",sourceParts:{htmlFragment:e=>r(n(e)).replaceAll(" enable-secondary",' :enable-secondary="true"')+`
<!-- Execute function on Vue load -->
<div style="display: none;">
{{ (() =>  { run() })() }}
</div>
`,jsFragment:`window.vueData = {
    run: async () => {
        await customElements.whenDefined('omni-alert');
        document.querySelector('omni-alert').show();        
    }
};`}}],name:"Header Align",args:{"status-indicator":"",header:"","[Default Slot]":"",primary:"",secondary:"",hide:!0,message:"Message Alert",description:"Additional context for the alert.",enableSecondary:void 0,status:void 0,headerAlign:"left",descriptionAlign:void 0,primaryAction:void 0,secondaryAction:void 0,actionAlign:void 0}},_={description:()=>a`Align description content horizontally (Defaults to <code class="language-js">'center'</code>).`,render:e=>a`
        <omni-button data-testid="test-alert-btn" @click="${()=>{e.hide=!1,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Alert" ></omni-button>
        ${e.hide?s:n(e,t=>{t&&(t.description=`Additional context for the alert. 
Aligned to the ${e.descriptionAlign}.`)})}
    `,frameworkSources:[{framework:"HTML",sourceParts:{htmlFragment:e=>i`
                ${r(n(e))}            
                `,jsFragment:e=>`const alert = document.querySelector('omni-alert');
alert.description = \`Additional context for the alert. 
Aligned to the ${e.descriptionAlign}.\`;

alert.show();`}},{framework:"Lit",sourceParts:{htmlFragment:e=>i`${r(n(e),t=>{var o;return(o=t.firstElementChild)==null?void 0:o.setAttribute("data-replace-token","")},t=>t.replace(' data-replace-token=""'," ${ref(onRef)}"))} `,jsFragment:e=>`import { ref } from 'https://unpkg.com/lit-html/directives/ref.js?module';
                
const onRef = e => {
    const omniAlert = e;
    if (omniAlert) {
        omniAlert.description = \`Additional context for the alert. 
Aligned to the ${e.descriptionAlign}.\`;

        omniAlert.show();
    }
};`}},{framework:"React",load:e=>`import { OmniAlert } from "@capitec/omni-components-react/alert";

const onRef = e => {
    const omniAlert = e;
    if (omniAlert) {
        omniAlert.description = \`Additional context for the alert. 
Aligned to the ${e.descriptionAlign}.\`;

        omniAlert.show();
    }
};

const App = () => <OmniAlert ref={onRef} message="${e.message}" description-align="${e.descriptionAlign}"/>;`},{framework:"Vue",sourceParts:{htmlFragment:e=>r(n(e)).replaceAll(" enable-secondary",' :enable-secondary="true"')+`
<!-- Execute function on Vue load -->
<div style="display: none;">
{{ (() =>  { run() })() }}
</div>
`,jsFragment:e=>`window.vueData = {
    run: async () => {
        await customElements.whenDefined('omni-alert');
        
        const alert = document.querySelector('omni-alert');
        alert.description = \`Additional context for the alert. 
Aligned to the ${e.descriptionAlign}.\`;
        
        alert.show();        
    }
};`}}],name:"Header Align",args:{"status-indicator":"",header:"","[Default Slot]":"",primary:"",secondary:"",hide:!0,message:"Message Alert",description:void 0,enableSecondary:void 0,status:void 0,headerAlign:void 0,descriptionAlign:"right",primaryAction:void 0,secondaryAction:void 0,actionAlign:void 0}},B={description:()=>a`Set the label for the primary action button (Defaults to <code class="language-js">'Ok'</code>).`,render:e=>a`
        <omni-button data-testid="test-alert-btn" @click="${()=>{e.hide=!1,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Alert" ></omni-button>
        ${e.hide?s:n(e)}
    `,frameworkSources:[{framework:"HTML",sourceParts:{htmlFragment:e=>i`
                ${r(n(e))}            
                `,jsFragment:"document.querySelector('omni-alert').show();"}},{framework:"Lit",sourceParts:{htmlFragment:e=>i`${r(n(e),t=>{var o;return(o=t.firstElementChild)==null?void 0:o.setAttribute("data-replace-token","")},t=>t.replace(' data-replace-token=""'," ${ref(onRef)}"))} `,jsFragment:`import { ref } from 'https://unpkg.com/lit-html/directives/ref.js?module';
                
const onRef = e => {
    const omniAlert = e;
    if (omniAlert) {
        omniAlert.show();
    }
};`}},{framework:"React",load:e=>`import { OmniAlert } from "@capitec/omni-components-react/alert";

const onRef = e => {
    const omniAlert = e;
    if (omniAlert) {
        omniAlert.show();
    }
};

const App = () => <OmniAlert ref={onRef} message="${e.message}" description="${e.description}" primary-action="${e.primaryAction}"/>;`},{framework:"Vue",sourceParts:{htmlFragment:e=>r(n(e)).replaceAll(" enable-secondary",' :enable-secondary="true"')+`
<!-- Execute function on Vue load -->
<div style="display: none;">
{{ (() =>  { run() })() }}
</div>
`,jsFragment:`window.vueData = {
    run: async () => {
        await customElements.whenDefined('omni-alert');
        document.querySelector('omni-alert').show();        
    }
};`}}],name:"Primary Action",args:{"status-indicator":"",header:"","[Default Slot]":"",primary:"",secondary:"",hide:!0,message:"Message Alert",description:"Additional context for the alert.",enableSecondary:void 0,status:void 0,headerAlign:void 0,descriptionAlign:void 0,primaryAction:"Acknowledge",secondaryAction:void 0,actionAlign:void 0}},N={description:()=>a`
        <span>
            <ul>
                <li>Set the label for the secondary action button with the <code>secondary-action</code> attribute (Defaults to <code class="language-js">'Cancel'</code>).</li>
                <li>Enable the secondary action button with the <code>enable-secondary</code> attribute.</li>
            </ul>
        </span>
        
        `,render:e=>a`
        <omni-button data-testid="test-alert-btn" @click="${()=>{e.hide=!1,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Alert" ></omni-button>
        ${e.hide?s:n(e)}
    `,frameworkSources:[{framework:"HTML",sourceParts:{htmlFragment:e=>i`
                ${r(n(e))}            
                `,jsFragment:"document.querySelector('omni-alert').show();"}},{framework:"Lit",sourceParts:{htmlFragment:e=>i`${r(n(e),t=>{var o;return(o=t.firstElementChild)==null?void 0:o.setAttribute("data-replace-token","")},t=>t.replace(' data-replace-token=""'," ${ref(onRef)}"))} `,jsFragment:`import { ref } from 'https://unpkg.com/lit-html/directives/ref.js?module';
                
const onRef = e => {
    const omniAlert = e;
    if (omniAlert) {
        omniAlert.show();
    }
};`}},{framework:"React",load:e=>`import { OmniAlert } from "@capitec/omni-components-react/alert";

const onRef = e => {
    const omniAlert = e;
    if (omniAlert) {
        omniAlert.show();
    }
};

const App = () => <OmniAlert ref={onRef} message="${e.message}" description="${e.description}" secondary-action="${e.secondaryAction}" enable-secondary/>;`},{framework:"Vue",sourceParts:{htmlFragment:e=>r(n(e)).replaceAll(" enable-secondary",' :enable-secondary="true"')+`
<!-- Execute function on Vue load -->
<div style="display: none;">
{{ (() =>  { run() })() }}
</div>
`,jsFragment:`window.vueData = {
    run: async () => {
        await customElements.whenDefined('omni-alert');
        document.querySelector('omni-alert').show();        
    }
};`}}],name:"Secondary Action",args:{"status-indicator":"",header:"","[Default Slot]":"",primary:"",secondary:"",hide:!0,message:"Message Alert",description:"Additional context for the alert.",enableSecondary:!0,status:void 0,headerAlign:void 0,descriptionAlign:void 0,primaryAction:void 0,secondaryAction:"Back",actionAlign:void 0}},Y={description:()=>a`Align the action button(s) horizontally (Defaults to <code class="language-js">'right'</code>).`,render:e=>a`
        <omni-button data-testid="test-alert-btn" @click="${()=>{e.hide=!1,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Alert" ></omni-button>
        ${e.hide?s:n(e)}
    `,frameworkSources:[{framework:"HTML",sourceParts:{htmlFragment:e=>i`
                ${r(n(e))}            
                `,jsFragment:"document.querySelector('omni-alert').show();"}},{framework:"Lit",sourceParts:{htmlFragment:e=>i`${r(n(e),t=>{var o;return(o=t.firstElementChild)==null?void 0:o.setAttribute("data-replace-token","")},t=>t.replace(' data-replace-token=""'," ${ref(onRef)}"))} `,jsFragment:`import { ref } from 'https://unpkg.com/lit-html/directives/ref.js?module';
                
const onRef = e => {
    const omniAlert = e;
    if (omniAlert) {
        omniAlert.show();
    }
};`}},{framework:"React",load:e=>`import { OmniAlert } from "@capitec/omni-components-react/alert";

const onRef = e => {
    const omniAlert = e;
    if (omniAlert) {
        omniAlert.show();
    }
};

const App = () => <OmniAlert ref={onRef} message="${e.message}" description="${e.description}" enable-secondary primary-action="${e.primaryAction}" secondary-action="${e.secondaryAction}" action-align="${e.actionAlign}"/>;`},{framework:"Vue",sourceParts:{htmlFragment:e=>r(n(e)).replaceAll(" enable-secondary",' :enable-secondary="true"')+`
<!-- Execute function on Vue load -->
<div style="display: none;">
{{ (() =>  { run() })() }}
</div>
`,jsFragment:`window.vueData = {
    run: async () => {
        await customElements.whenDefined('omni-alert');
        document.querySelector('omni-alert').show();        
    }
};`}}],name:"Action Align",args:{"status-indicator":"",header:"","[Default Slot]":"",primary:"",secondary:"",hide:!0,message:"Message Alert",description:"Additional context for the alert.",enableSecondary:!0,status:void 0,headerAlign:void 0,descriptionAlign:void 0,primaryAction:"Accept",secondaryAction:"Decline",actionAlign:"center"}},z={description:"Render content as the status indicator instead of default status icons.",render:e=>a`
        <omni-button data-testid="test-alert-btn" @click="${()=>{e.hide=!1,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Alert" ></omni-button>
        ${e.hide?s:n(e)}
    `,frameworkSources:[{framework:"HTML",sourceParts:{htmlFragment:e=>i`
                ${r(n(e))}            
                `,jsFragment:"document.querySelector('omni-alert').show();"}},{framework:"Lit",sourceParts:{htmlFragment:e=>i`${r(n(e),t=>{var o;return(o=t.firstElementChild)==null?void 0:o.setAttribute("data-replace-token","")},t=>t.replace(' data-replace-token=""'," ${ref(onRef)}"))} `,jsFragment:`import { ref } from 'https://unpkg.com/lit-html/directives/ref.js?module';
                
const onRef = e => {
    const omniAlert = e;
    if (omniAlert) {
        omniAlert.show();
    }
};`}},{framework:"React",load:e=>`import { OmniAlert } from "@capitec/omni-components-react/alert";

const onRef = e => {
    const omniAlert = e;
    if (omniAlert) {
        omniAlert.show();
    }
};

const App = () => <OmniAlert ref={onRef} message="${e.message}" description="${e.description}">
                    <span slot="status-indicator" style={{ paddingRight: "4px" }}>\u{1F513}</span>
                  </OmniAlert>;`},{framework:"Vue",sourceParts:{htmlFragment:e=>r(n(e)).replaceAll(" enable-secondary",' :enable-secondary="true"')+`
<!-- Execute function on Vue load -->
<div style="display: none;">
{{ (() =>  { run() })() }}
</div>
`,jsFragment:`window.vueData = {
    run: async () => {
        await customElements.whenDefined('omni-alert');
        document.querySelector('omni-alert').show();        
    }
};`}}],name:"Custom Status Indicator",args:{"status-indicator":i`<span style="padding-right: 4px;">🔓</span>`,header:"","[Default Slot]":"",primary:"",secondary:"",hide:!0,message:"Message Alert",description:"Additional context for the alert.",enableSecondary:void 0,status:void 0,headerAlign:void 0,descriptionAlign:void 0,primaryAction:void 0,secondaryAction:void 0,actionAlign:void 0}},U={description:()=>a`Render content as the header message area. This overrides any text specified via the <code>message</code> attribute.`,render:e=>a`
        <omni-button data-testid="test-alert-btn" @click="${()=>{e.hide=!1,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Alert" ></omni-button>
        ${e.hide?s:n(e)}
    `,frameworkSources:[{framework:"HTML",sourceParts:{htmlFragment:e=>i`
                ${r(n(e))}            
                `,jsFragment:"document.querySelector('omni-alert').show();"}},{framework:"Lit",sourceParts:{htmlFragment:e=>i`${r(n(e),t=>{var o;return(o=t.firstElementChild)==null?void 0:o.setAttribute("data-replace-token","")},t=>t.replace(' data-replace-token=""'," ${ref(onRef)}"))} `,jsFragment:`import { ref } from 'https://unpkg.com/lit-html/directives/ref.js?module';
                
const onRef = e => {
    const omniAlert = e;
    if (omniAlert) {
        omniAlert.show();
    }
};`}},{framework:"React",load:e=>`import { OmniAlert } from "@capitec/omni-components-react/alert";

const onRef = e => {
    const omniAlert = e;
    if (omniAlert) {
        omniAlert.show();
    }
};

const App = () => <OmniAlert ref={onRef} message="${e.message}" description="${e.description}">
                    <span slot="header">Alert using the <code>header</code> slot</span>
                  </OmniAlert>;`},{framework:"Vue",sourceParts:{htmlFragment:e=>r(n(e)).replaceAll(" enable-secondary",' :enable-secondary="true"')+`
<!-- Execute function on Vue load -->
<div style="display: none;">
{{ (() =>  { run() })() }}
</div>
`,jsFragment:`window.vueData = {
    run: async () => {
        await customElements.whenDefined('omni-alert');
        document.querySelector('omni-alert').show();        
    }
};`}}],name:"Custom Header",args:{"status-indicator":"",header:i`<span>Alert using the <code>header</code> slot</span>`,"[Default Slot]":"",primary:"",secondary:"",hide:!0,message:"Message Alert",description:"Additional context for the alert.",enableSecondary:void 0,status:void 0,headerAlign:void 0,descriptionAlign:void 0,primaryAction:void 0,secondaryAction:void 0,actionAlign:void 0}},G={description:()=>a`Render rich html content in the description. This appends to text specified via the <code>description</code> attribute.`,render:e=>a`
        <omni-button data-testid="test-alert-btn" @click="${()=>{e.hide=!1,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Alert" ></omni-button>
        ${e.hide?s:n(e)}
    `,frameworkSources:[{framework:"HTML",sourceParts:{htmlFragment:e=>i`
                ${r(n(e))}            
                `,jsFragment:"document.querySelector('omni-alert').show();"}},{framework:"Lit",sourceParts:{htmlFragment:e=>i`${r(n(e),t=>{var o;return(o=t.firstElementChild)==null?void 0:o.setAttribute("data-replace-token","")},t=>t.replace(' data-replace-token=""'," ${ref(onRef)}"))} `,jsFragment:`import { ref } from 'https://unpkg.com/lit-html/directives/ref.js?module';
                
const onRef = e => {
    const omniAlert = e;
    if (omniAlert) {
        omniAlert.show();
    }
};`}},{framework:"React",load:e=>`import { OmniAlert } from "@capitec/omni-components-react/alert";

const onRef = e => {
    const omniAlert = e;
    if (omniAlert) {
        omniAlert.show();
    }
};

const App = () => <OmniAlert ref={onRef} message="${e.message}" description="${e.description}">
                    <span>Alert using the default slot and the <code>description</code> attribute.</span>
                  </OmniAlert>;`},{framework:"Vue",sourceParts:{htmlFragment:e=>r(n(e)).replaceAll(" enable-secondary",' :enable-secondary="true"')+`
<!-- Execute function on Vue load -->
<div style="display: none;">
{{ (() =>  { run() })() }}
</div>
`,jsFragment:`window.vueData = {
    run: async () => {
        await customElements.whenDefined('omni-alert');
        document.querySelector('omni-alert').show();        
    }
};`}}],name:"Custom Body",args:{"status-indicator":"",header:"","[Default Slot]":i`<span>Alert using the default slot and the <code>description</code> attribute.</span>`,primary:"",secondary:"",hide:!0,message:"Message Alert",description:"Additional context for the alert.",enableSecondary:void 0,status:void 0,headerAlign:void 0,descriptionAlign:void 0,primaryAction:void 0,secondaryAction:void 0,actionAlign:void 0}},J={description:()=>a`Render rich html content as the primary action. This replaces any text specified via the <code>primary-action</code> attribute.`,render:e=>a`
        <omni-button data-testid="test-alert-btn" @click="${()=>{e.hide=!1,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Alert" ></omni-button>
        ${e.hide?s:n(e)}
    `,frameworkSources:[{framework:"HTML",sourceParts:{htmlFragment:e=>i`
                ${r(n(e))}            
                `,jsFragment:"document.querySelector('omni-alert').show();"}},{framework:"Lit",sourceParts:{htmlFragment:e=>i`${r(n(e),t=>{var o;return(o=t.firstElementChild)==null?void 0:o.setAttribute("data-replace-token","")},t=>t.replace(' data-replace-token=""'," ${ref(onRef)}"))} `,jsFragment:`import { ref } from 'https://unpkg.com/lit-html/directives/ref.js?module';
                
const onRef = e => {
    const omniAlert = e;
    if (omniAlert) {
        omniAlert.show();
    }
};`}},{framework:"React",load:e=>`import { OmniAlert } from "@capitec/omni-components-react/alert";

const onRef = e => {
    const omniAlert = e;
    if (omniAlert) {
        omniAlert.show();
    }
};

const App = () => <OmniAlert ref={onRef} message="${e.message}" description="${e.description}">
                    <button slot="primary" style={{ margin: "6px" }}>My Button</button>
                  </OmniAlert>;`},{framework:"Vue",sourceParts:{htmlFragment:e=>r(n(e)).replaceAll(" enable-secondary",' :enable-secondary="true"')+`
<!-- Execute function on Vue load -->
<div style="display: none;">
{{ (() =>  { run() })() }}
</div>
`,jsFragment:`window.vueData = {
    run: async () => {
        await customElements.whenDefined('omni-alert');
        document.querySelector('omni-alert').show();        
    }
};`}}],name:"Custom Primary Action",args:{"status-indicator":"",header:"","[Default Slot]":"",primary:i`<button style="margin: 6px;">My Button</button>`,secondary:"",hide:!0,message:"Message Alert",description:"Additional context for the alert.",enableSecondary:void 0,status:void 0,headerAlign:void 0,descriptionAlign:void 0,primaryAction:void 0,secondaryAction:void 0,actionAlign:void 0}},K={description:()=>a`Render rich html content as the secondary action. This replaces any text specified via the <code>secondary-action</code> attribute.`,render:e=>a`
        <omni-button data-testid="test-alert-btn" @click="${()=>{e.hide=!1,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Alert" ></omni-button>
        ${e.hide?s:n(e)}
    `,frameworkSources:[{framework:"HTML",sourceParts:{htmlFragment:e=>i`
                ${r(n(e))}            
                `,jsFragment:"document.querySelector('omni-alert').show();"}},{framework:"Lit",sourceParts:{htmlFragment:e=>i`${r(n(e),t=>{var o;return(o=t.firstElementChild)==null?void 0:o.setAttribute("data-replace-token","")},t=>t.replace(' data-replace-token=""'," ${ref(onRef)}"))} `,jsFragment:`import { ref } from 'https://unpkg.com/lit-html/directives/ref.js?module';
                
const onRef = e => {
    const omniAlert = e;
    if (omniAlert) {
        omniAlert.show();
    }
};`}},{framework:"React",load:e=>`import { OmniAlert } from "@capitec/omni-components-react/alert";

const onRef = e => {
    const omniAlert = e;
    if (omniAlert) {
        omniAlert.show();
    }
};

const App = () => <OmniAlert ref={onRef} message="${e.message}" description="${e.description}" enable-secondary>
                    <span slot="secondary" style={{ padding: "6px" }}>\u21A9</span>
                  </OmniAlert>;`},{framework:"Vue",sourceParts:{htmlFragment:e=>r(n(e)).replaceAll(" enable-secondary",' :enable-secondary="true"')+`
<!-- Execute function on Vue load -->
<div style="display: none;">
{{ (() =>  { run() })() }}
</div>
`,jsFragment:`window.vueData = {
    run: async () => {
        await customElements.whenDefined('omni-alert');
        document.querySelector('omni-alert').show();        
    }
};`}}],name:"Custom Secondary Action",args:{"status-indicator":"",header:"","[Default Slot]":"",primary:"",secondary:i`<span style="padding: 6px;">↩</span>`,hide:!0,message:"Message Alert",description:"Additional context for the alert.",enableSecondary:!0,status:void 0,headerAlign:void 0,descriptionAlign:void 0,primaryAction:void 0,secondaryAction:void 0,actionAlign:void 0}};export{Y as Action_Align,G as Custom_Body,U as Custom_Header,J as Custom_Primary_Action,K as Custom_Secondary_Action,z as Custom_Status_Indicator,_ as Description_Align,I as Header_Align,q as Interactive,B as Primary_Action,N as Secondary_Action,V as Showing_Alerts,H as Showing_Alerts_Async,T as Status,O as default};
//# sourceMappingURL=Alert.stories.js.map
