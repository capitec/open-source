import{a as u}from"../chunks-js/chunk.BZL2XUIQ.js";import{E as i,m as d,x as n}from"../chunks-js/chunk.7KM4B723.js";import"../chunks-js/chunk.Z5LIJAXH.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.UHIDETPL.js";import"../chunks-js/chunk.KPSG3GC4.js";import{b as h}from"../chunks-js/chunk.MDYAUJ3Z.js";import"../chunks-js/chunk.VTL5CONA.js";import{a as c}from"../chunks-js/chunk.5DDJQYYG.js";import"../chunks-js/chunk.3U7QFP2Q.js";import"../chunks-js/chunk.LB764BBD.js";import"../chunks-js/chunk.VK7R3VQL.js";import{a}from"../chunks-js/chunk.XCXCHO25.js";import"../chunks-js/chunk.FT5UPVZS.js";import"../chunks-js/chunk.6C4LMRM7.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as t,e as r}from"../chunks-js/chunk.L3RZWW2F.js";import{m,p}from"../chunks-js/chunk.BF43NN75.js";m();p();var P={title:"UI Components/Alert",component:"omni-alert"},o=(e,s)=>t`
        <omni-alert
            ${h(l=>{s&&s(l),l==null||l.show()})}
            @alert-close="${()=>{e.hide=!0,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}"
            data-testid="test-alert"
            status="${a(e.status)}"
            message="${a(e.message)}"
            header-align="${a(e.headerAlign)}"
            description="${a(e.description)}"
            description-align="${a(e.descriptionAlign)}"
            primary-action="${a(e.primaryAction)}"
            secondary-action="${a(e.secondaryAction)}"
            ?enable-secondary=${e.enableSecondary}
            action-align="${a(e.actionAlign)}"
            >${e["status-indicator"]?t`${`\r
`}${c(d("status-indicator",e["status-indicator"]))}`:r}${e.header?t`${`\r
`}${c(d("header",e.header))}`:r}${e["[Default Slot]"]?t`${`\r
`}${c(e["[Default Slot]"])}`:r}${e.primary?t`${`\r
`}${c(d("primary",e.primary))}`:r}${e.secondary?t`${`\r
`}${c(d("secondary",e.secondary))}`:r}
        </omni-alert>
`,I={render:e=>t`
        <omni-button data-testid="test-alert-btn" @click="${()=>{e.hide=!1,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Alert" ></omni-button>
        ${e.hide?r:o(e)}
    `,frameworkSources:[{framework:"HTML",sourceParts:{htmlFragment:e=>n`
                ${i(o(e))}            
                `,jsFragment:"document.querySelector('omni-alert').show();"}}],name:"Interactive",args:{"status-indicator":"",header:"","[Default Slot]":"",primary:"",secondary:"",hide:!0,message:"Message Alert",description:"Additional context for the alert.",enableSecondary:void 0,status:void 0,headerAlign:void 0,descriptionAlign:void 0,primaryAction:void 0,secondaryAction:void 0,actionAlign:void 0}},_={description:()=>t`
    <div>
        Alerts can be shown programmatically using the static <code class="language-js">Alert.show()</code> function. 
    <div>
    `,render:e=>t`
        <omni-button
            data-testid="test-alert-show"
            label="Show Alert"
            @click="${()=>{u.show({status:"success",message:"Success!",description:"It was successful."})}}"
            >
        </omni-button>
    `,frameworkSources:[{framework:"HTML",sourceParts:{htmlFragment:n`<omni-button label="Show Alert"></omni-button>`,jsFragment:`import { Alert } from '@capitec/omni-components/alert';

document.querySelector('omni-button').addEventListener('click', () => {    
    Alert.show({
        status: 'success',
        message: 'Success!',
        description: 'It was successful.',
    });
});`}},{framework:"Vue",sourceParts:{htmlFragment:n`<omni-button label="Show Alert" @click="showAlert"></omni-button>`,jsFragment:`import { Alert } from '@capitec/omni-components/alert';

window.vueData = {
    showAlert: () => {        
        Alert.show({
            status: 'success',
            message: 'Success!',
            description: 'It was successful.',
        });
    }
};`}},{framework:"Lit",sourceParts:{htmlFragment:n`<omni-button label="Show Alert" @click="\${showAlert}"></omni-button>`,jsFragment:`import { Alert } from '@capitec/omni-components/alert';

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

const App = () => <OmniButton label="Show Alert" onclick={showAlert}/>;`}],name:"Showing Alert Programmatically",args:{}},A="",q={description:()=>t`
    <div>
        Alerts can be asynchronously shown and awaited programmatically using the static <code class="language-js">Alert.showAsync()</code> function. 
    <div>
    `,render:e=>t`
        <omni-button
            data-testid="test-alert-show"
            label="Show Alert"
            @click="${()=>{u.showAsync({status:"info",message:"Async Alert!",description:`Click "Yes" for "primary" reason or "No" for "secondary" reason.
If closed from script via the "hide" function on the Alert instance, the reason would be "auto".`,enableSecondary:!0,primaryAction:"Yes",secondaryAction:"No"}).then(s=>{A=s,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))})}}"
            >
        </omni-button>
        <div>${A}</div>
    `,frameworkSources:[{framework:"HTML",sourceParts:{htmlFragment:n`<omni-button label="Show Alert"></omni-button>
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
});`}},{framework:"Vue",sourceParts:{htmlFragment:n`<omni-button label="Show Alert" @click="showAlert"></omni-button>
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
};`}},{framework:"Lit",sourceParts:{htmlFragment:n`<omni-button label="Show Alert" @click="\${showAlert}"></omni-button>
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
                  </>;`}],name:"Showing Async Alert Programmatically",args:{}},B={description:()=>t`
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
    `,render:e=>t`
        <omni-button data-testid="test-alert-btn" @click="${()=>{e.hide=!1,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Alert" ></omni-button>
        ${e.hide?r:o(e)}
    `,frameworkSources:[{framework:"HTML",sourceParts:{htmlFragment:e=>n`
                ${i(o(e))}            
                `,jsFragment:"document.querySelector('omni-alert').show();"}}],name:"Status",args:{"status-indicator":"",header:"","[Default Slot]":"",primary:"",secondary:"",hide:!0,message:"Message Alert",description:"Additional context for the alert.",enableSecondary:void 0,status:"success",headerAlign:void 0,descriptionAlign:void 0,primaryAction:void 0,secondaryAction:void 0,actionAlign:void 0}},N={description:()=>t`Align header content horizontally (Defaults to <code class="language-js">'center'</code>).`,render:e=>t`
        <omni-button data-testid="test-alert-btn" @click="${()=>{e.hide=!1,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Alert" ></omni-button>
        ${e.hide?r:o(e)}
    `,frameworkSources:[{framework:"HTML",sourceParts:{htmlFragment:e=>n`
                ${i(o(e))}            
                `,jsFragment:"document.querySelector('omni-alert').show();"}}],name:"Header Align",args:{"status-indicator":"",header:"","[Default Slot]":"",primary:"",secondary:"",hide:!0,message:"Message Alert",description:"Additional context for the alert.",enableSecondary:void 0,status:void 0,headerAlign:"left",descriptionAlign:void 0,primaryAction:void 0,secondaryAction:void 0,actionAlign:void 0}},Y={description:()=>t`Align description content horizontally (Defaults to <code class="language-js">'center'</code>).`,render:e=>t`
        <omni-button data-testid="test-alert-btn" @click="${()=>{e.hide=!1,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Alert" ></omni-button>
        ${e.hide?r:o(e,s=>{s&&(s.description=`Additional context for the alert. 
Aligned to the ${e.descriptionAlign}.`)})}
    `,frameworkSources:[{framework:"HTML",sourceParts:{htmlFragment:e=>n`
                ${i(o(e))}            
                `,jsFragment:e=>`const alert = document.querySelector('omni-alert');
alert.description = \`Additional context for the alert. 
Aligned to the ${e.descriptionAlign}.\`;

alert.show();`}}],name:"Header Align",args:{"status-indicator":"",header:"","[Default Slot]":"",primary:"",secondary:"",hide:!0,message:"Message Alert",description:void 0,enableSecondary:void 0,status:void 0,headerAlign:void 0,descriptionAlign:"right",primaryAction:void 0,secondaryAction:void 0,actionAlign:void 0}},R={description:()=>t`Set the label for the primary action button (Defaults to <code class="language-js">'Ok'</code>).`,render:e=>t`
        <omni-button data-testid="test-alert-btn" @click="${()=>{e.hide=!1,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Alert" ></omni-button>
        ${e.hide?r:o(e)}
    `,frameworkSources:[{framework:"HTML",sourceParts:{htmlFragment:e=>n`
                ${i(o(e))}            
                `,jsFragment:"document.querySelector('omni-alert').show();"}}],name:"Primary Action",args:{"status-indicator":"",header:"","[Default Slot]":"",primary:"",secondary:"",hide:!0,message:"Message Alert",description:"Additional context for the alert.",enableSecondary:void 0,status:void 0,headerAlign:void 0,descriptionAlign:void 0,primaryAction:"Acknowledge",secondaryAction:void 0,actionAlign:void 0}},O={description:()=>t`
        <span>
            <ul>
                <li>Set the label for the secondary action button with the <code>secondary-action</code> attribute (Defaults to <code class="language-js">'Cancel'</code>).</li>
                <li>Enable the secondary action button with the <code>enable-secondary</code> attribute.</li>
            </ul>
        </span>
        
        `,render:e=>t`
        <omni-button data-testid="test-alert-btn" @click="${()=>{e.hide=!1,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Alert" ></omni-button>
        ${e.hide?r:o(e)}
    `,frameworkSources:[{framework:"HTML",sourceParts:{htmlFragment:e=>n`
                ${i(o(e))}            
                `,jsFragment:"document.querySelector('omni-alert').show();"}}],name:"Secondary Action",args:{"status-indicator":"",header:"","[Default Slot]":"",primary:"",secondary:"",hide:!0,message:"Message Alert",description:"Additional context for the alert.",enableSecondary:!0,status:void 0,headerAlign:void 0,descriptionAlign:void 0,primaryAction:void 0,secondaryAction:"Back",actionAlign:void 0}},z={description:()=>t`Align the action button(s) horizontally (Defaults to <code class="language-js">'right'</code>).`,render:e=>t`
        <omni-button data-testid="test-alert-btn" @click="${()=>{e.hide=!1,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Alert" ></omni-button>
        ${e.hide?r:o(e)}
    `,frameworkSources:[{framework:"HTML",sourceParts:{htmlFragment:e=>n`
                ${i(o(e))}            
                `,jsFragment:"document.querySelector('omni-alert').show();"}}],name:"Action Align",args:{"status-indicator":"",header:"","[Default Slot]":"",primary:"",secondary:"",hide:!0,message:"Message Alert",description:"Additional context for the alert.",enableSecondary:!0,status:void 0,headerAlign:void 0,descriptionAlign:void 0,primaryAction:"Accept",secondaryAction:"Decline",actionAlign:"center"}},V={description:"Render content as the status indicator instead of default status icons.",render:e=>t`
        <omni-button data-testid="test-alert-btn" @click="${()=>{e.hide=!1,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Alert" ></omni-button>
        ${e.hide?r:o(e)}
    `,frameworkSources:[{framework:"HTML",sourceParts:{htmlFragment:e=>n`
                ${i(o(e))}            
                `,jsFragment:"document.querySelector('omni-alert').show();"}}],name:"Custom Status Indicator",args:{"status-indicator":n`<span style="padding-right: 4px;">🔓</span>`,header:"","[Default Slot]":"",primary:"",secondary:"",hide:!0,message:"Message Alert",description:"Additional context for the alert.",enableSecondary:void 0,status:void 0,headerAlign:void 0,descriptionAlign:void 0,primaryAction:void 0,secondaryAction:void 0,actionAlign:void 0}},U={description:()=>t`Render content as the header message area. This overrides any text specified via the <code>message</code> attribute.`,render:e=>t`
        <omni-button data-testid="test-alert-btn" @click="${()=>{e.hide=!1,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Alert" ></omni-button>
        ${e.hide?r:o(e)}
    `,frameworkSources:[{framework:"HTML",sourceParts:{htmlFragment:e=>n`
                ${i(o(e))}            
                `,jsFragment:"document.querySelector('omni-alert').show();"}}],name:"Custom Header",args:{"status-indicator":"",header:n`<span>Alert using the <code>header</code> slot</span>`,"[Default Slot]":"",primary:"",secondary:"",hide:!0,message:"Message Alert",description:"Additional context for the alert.",enableSecondary:void 0,status:void 0,headerAlign:void 0,descriptionAlign:void 0,primaryAction:void 0,secondaryAction:void 0,actionAlign:void 0}},G={description:()=>t`Render rich html content in the description. This appends to text specified via the <code>description</code> attribute.`,render:e=>t`
        <omni-button data-testid="test-alert-btn" @click="${()=>{e.hide=!1,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Alert" ></omni-button>
        ${e.hide?r:o(e)}
    `,frameworkSources:[{framework:"HTML",sourceParts:{htmlFragment:e=>n`
                ${i(o(e))}            
                `,jsFragment:"document.querySelector('omni-alert').show();"}}],name:"Custom Body",args:{"status-indicator":"",header:"","[Default Slot]":n`<span>Alert using the default slot and the <code>description</code> attribute.</span>`,primary:"",secondary:"",hide:!0,message:"Message Alert",description:"Additional context for the alert.",enableSecondary:void 0,status:void 0,headerAlign:void 0,descriptionAlign:void 0,primaryAction:void 0,secondaryAction:void 0,actionAlign:void 0}},J={description:()=>t`Render rich html content as the primary action. This replaces any text specified via the <code>primary-action</code> attribute.`,render:e=>t`
        <omni-button data-testid="test-alert-btn" @click="${()=>{e.hide=!1,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Alert" ></omni-button>
        ${e.hide?r:o(e)}
    `,frameworkSources:[{framework:"HTML",sourceParts:{htmlFragment:e=>n`
                ${i(o(e))}            
                `,jsFragment:"document.querySelector('omni-alert').show();"}}],name:"Custom Primary Action",args:{"status-indicator":"",header:"","[Default Slot]":"",primary:n`<button style="margin: 6px;">My Button</button>`,secondary:"",hide:!0,message:"Message Alert",description:"Additional context for the alert.",enableSecondary:void 0,status:void 0,headerAlign:void 0,descriptionAlign:void 0,primaryAction:void 0,secondaryAction:void 0,actionAlign:void 0}},K={description:()=>t`Render rich html content as the secondary action. This replaces any text specified via the <code>secondary-action</code> attribute.`,render:e=>t`
        <omni-button data-testid="test-alert-btn" @click="${()=>{e.hide=!1,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Alert" ></omni-button>
        ${e.hide?r:o(e)}
    `,frameworkSources:[{framework:"HTML",sourceParts:{htmlFragment:e=>n`
                ${i(o(e))}            
                `,jsFragment:"document.querySelector('omni-alert').show();"}}],name:"Custom Secondary Action",args:{"status-indicator":"",header:"","[Default Slot]":"",primary:"",secondary:n`<span style="padding: 6px;">↩</span>`,hide:!0,message:"Message Alert",description:"Additional context for the alert.",enableSecondary:!0,status:void 0,headerAlign:void 0,descriptionAlign:void 0,primaryAction:void 0,secondaryAction:void 0,actionAlign:void 0}};export{z as Action_Align,G as Custom_Body,U as Custom_Header,J as Custom_Primary_Action,K as Custom_Secondary_Action,V as Custom_Status_Indicator,Y as Description_Align,N as Header_Align,I as Interactive,R as Primary_Action,O as Secondary_Action,_ as Showing_Alerts,q as Showing_Alerts_Async,B as Status,P as default};
//# sourceMappingURL=Alert.stories.js.map
