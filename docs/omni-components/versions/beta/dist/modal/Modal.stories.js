import{E as a,m as b,x as n}from"../chunks-js/chunk.F2QZVZT6.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.Z5LIJAXH.js";import"../chunks-js/chunk.UHIDETPL.js";import{a as A}from"../chunks-js/chunk.R74VGS2O.js";import"../chunks-js/chunk.MDYAUJ3Z.js";import"../chunks-js/chunk.VTL5CONA.js";import{a as s}from"../chunks-js/chunk.5DDJQYYG.js";import"../chunks-js/chunk.3U7QFP2Q.js";import"../chunks-js/chunk.LB764BBD.js";import{a as f}from"../chunks-js/chunk.XCXCHO25.js";import"../chunks-js/chunk.VK7R3VQL.js";import"../chunks-js/chunk.FT5UPVZS.js";import"../chunks-js/chunk.6C4LMRM7.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as l,e as c}from"../chunks-js/chunk.L3RZWW2F.js";import{a as d,b as m,l as h,m as g,p as $}from"../chunks-js/chunk.BF43NN75.js";g();$();var r=e=>l`
        <omni-modal
            @click-outside="${()=>{e.hide=!0,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}"
            data-testid="test-modal"
            ?hide="${e.hide}"
            ?no-fullscreen="${e.noFullscreen}"
            header-label="${f(e.headerLabel)}"
            header-align="${f(e.headerAlign)}"
            ?no-header="${e.noHeader}"
            ?no-footer="${e.noFooter}">${e.header?l`${`\r
`}${s(b("header",e.header))}`:c}${e["[Default Slot]"]?l`${`\r
`}${s(e["[Default Slot]"])}`:c}${e.footer?typeof e.footer=="string"?l`${`\r
`}${s(b("footer",e.footer))}`:l`${`\r
`}${e.footer(e)}`:c}
        </omni-modal>
`,x,u=n(x||(x=h([`<div slot="footer">
    <omni-button id="modal-close-btn" label="Close"></omni-button>
    <script defer>
        document.getElementById('modal-close-btn').addEventListener('click', () => {
            document.getElementById('omni-modal').hide = true;
        });
    <\/script>
</div>`]))),p=e=>l`
<div slot="footer">
    <omni-button id="modal-close-btn" label="Close" @click="${()=>{e.hide=!0,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}"></omni-button>
</div>`,V={render:e=>l`
        <omni-button data-testid="test-modal-btn" @click="${()=>{e.hide=!1,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Modal" ></omni-button>
        ${r(e)}
    `,frameworkSources:[{framework:"HTML",load:e=>n`
            ${a(r(e),o=>{let t=o.querySelector("omni-modal");t&&t.removeAttribute("hide")})}            
            `},{framework:"Vue",load:e=>n`
            ${a(r(e),o=>{let t=o.querySelector("omni-modal");t&&t.removeAttribute("hide")},o=>o.replace(" hide",' :hide="true"').replace(" no-header",' :no-header="true"').replace(" no-footer",' :no-footer="true"').replace(" no-fullscreen",' :no-fullscreen="true"'))}            
            `}],name:"Interactive",args:{header:n`<strong style="padding-left: 10px;">Slotted Header Content</strong>`,"[Default Slot]":n`<span style="min-width: 777px;min-height: 434px;display: flex;justify-content: center;text-align: center;align-items: center;">Body Content</span>`,footer:n`<span>Footer Content</span>`,hide:!0,headerAlign:"left",headerLabel:"Header Label",noFullscreen:!1,noHeader:!1,noFooter:!1}},_={description:"Set text content to display in the modal header.",render:e=>l`
        <omni-button data-testid="test-modal-btn" @click="${()=>{e.hide=!1,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Modal" ></omni-button>
        ${r(e)}
    `,frameworkSources:[{framework:"Lit",load:e=>n`
${a(r(e),o=>{let t=o.querySelector("omni-modal");t&&(t.removeAttribute("hide"),t.setAttribute("id","omni-modal"))},o=>o.replace('id="modal-close-btn"',`@click="\${() => document.getElementById('omni-modal').hide = true}"`))}
            `},{framework:"Vue",sourceParts:{htmlFragment:e=>n`
${a(r(e),o=>{let t=o.querySelector("omni-modal");t&&(t.removeAttribute("hide"),t.setAttribute("id","omni-modal"))},o=>o.replace('id="modal-close-btn"','@click="closeModal"'))}`,jsFragment:`window.vueData = {
        closeModal: () => document.getElementById("omni-modal").hide = true
};`}},{framework:"HTML",load:e=>n`
            ${a(r(m(d({},e),{footer:u})),o=>{let t=o.querySelector("omni-modal");t&&(t.removeAttribute("hide"),t.setAttribute("id","omni-modal"))})}
            `},{framework:"React",load:e=>`import { OmniModal } from "@capitec/omni-components-react/modal";
import { OmniButton } from "@capitec/omni-components-react/button";
            
const App = () => {
    let omniModal = null;
    const setRef = e => {
        omniModal = e;
    }
    return (<OmniModal ref={setRef}${e.headerLabel?` header-label='${e.headerLabel}'`:""}${e.headerAlign?` header-align='${e.headerAlign}'`:""}${e.noFooter?" no-footer":""}${e.noHeader?" no-header":""}${e.noFullscreen?" no-fullscreen":""}>        
               <span style={{
                   minWidth: "777px",
                   minHeight: "434px",
                   display: "flex",
                   justifyContent: "center",
                   textAlign: "center",
                   alignItems: "center"
                 }}>Body Content</span>
               <div slot="footer">
                 <OmniButton label="Close" onclick={() => {
                     omniModal.hide = true;
                 }}/>
               </div>
             </OmniModal>);
}`}],name:"Header Label",args:{"[Default Slot]":n`<span style="min-width: 777px;min-height: 434px;display: flex;justify-content: center;text-align: center;align-items: center;">Body Content</span>`,hide:!0,headerLabel:"Header Label",footer:p}},W={description:"Align header content horizontally.",render:e=>l`
        <omni-button data-testid="test-modal-btn" @click="${()=>{e.hide=!1,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Modal" ></omni-button>
        ${r(e)}
    `,frameworkSources:[{framework:"Vue",sourceParts:{htmlFragment:e=>n`
${a(r(e),o=>{let t=o.querySelector("omni-modal");t&&(t.removeAttribute("hide"),t.setAttribute("id","omni-modal"))},o=>o.replace('id="modal-close-btn"','@click="closeModal"'))}`,jsFragment:`window.vueData = {
        closeModal: () => document.getElementById("omni-modal").hide = true
};`}},{framework:"Lit",load:e=>n`
${a(r(e),o=>{let t=o.querySelector("omni-modal");t&&(t.removeAttribute("hide"),t.setAttribute("id","omni-modal"))},o=>o.replace('id="modal-close-btn"',`@click="\${() => document.getElementById('omni-modal').hide = true}"`))}
            `},{framework:"HTML",load:e=>n`
            ${a(r(m(d({},e),{footer:u})),o=>{let t=o.querySelector("omni-modal");t&&(t.removeAttribute("hide"),t.setAttribute("id","omni-modal"))})}
            
            `},{framework:"React",load:e=>`import { OmniModal } from "@capitec/omni-components-react/modal";
import { OmniButton } from "@capitec/omni-components-react/button";
            
const App = () => {
    let omniModal = null;
    const setRef = e => {
        omniModal = e;
    }
    return (<OmniModal ref={setRef}${e.headerLabel?` header-label='${e.headerLabel}'`:""}${e.headerAlign?` header-align='${e.headerAlign}'`:""}${e.noFooter?" no-footer":""}${e.noHeader?" no-header":""}${e.noFullscreen?" no-fullscreen":""}>        
                <span style={{
                    minWidth: "777px",
                    minHeight: "434px",
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                    alignItems: "center"
                    }}>Body Content</span>
                <div slot="footer">
                    <OmniButton label="Close" onclick={() => {
                        omniModal.hide = true;
                    }}/>
                </div>
            </OmniModal>);
}`}],name:"Header Align",args:{"[Default Slot]":n`<span style="min-width: 777px;min-height: 434px;display: flex;justify-content: center;text-align: center;align-items: center;">Body Content</span>`,hide:!0,headerLabel:"Header Aligned",headerAlign:"center",footer:p}},N={description:"Set custom html content to display in modal header.",render:e=>l`
        <omni-button data-testid="test-modal-btn" @click="${()=>{e.hide=!1,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Modal" ></omni-button>
        ${r(e)}
    `,frameworkSources:[{framework:"Vue",sourceParts:{htmlFragment:e=>n`
${a(r(e),o=>{let t=o.querySelector("omni-modal");t&&(t.removeAttribute("hide"),t.setAttribute("id","omni-modal"))},o=>o.replace('id="modal-close-btn"','@click="closeModal"'))}`,jsFragment:`window.vueData = {
        closeModal: () => document.getElementById("omni-modal").hide = true
};`}},{framework:"Lit",load:e=>n`
${a(r(e),o=>{let t=o.querySelector("omni-modal");t&&(t.removeAttribute("hide"),t.setAttribute("id","omni-modal"))},o=>o.replace('id="modal-close-btn"',`@click="\${() => document.getElementById('omni-modal').hide = true}"`))}
            `},{framework:"HTML",load:e=>n`
            ${a(r(m(d({},e),{footer:u})),o=>{let t=o.querySelector("omni-modal");t&&(t.removeAttribute("hide"),t.setAttribute("id","omni-modal"))})}
            
            `},{framework:"React",load:e=>`import { OmniModal } from "@capitec/omni-components-react/modal";
import { OmniButton } from "@capitec/omni-components-react/button";
            
const App = () => {
    let omniModal = null;
    const setRef = e => {
        omniModal = e;
    }
    return (<OmniModal ref={setRef}${e.headerLabel?` header-label='${e.headerLabel}'`:""}${e.headerAlign?` header-align='${e.headerAlign}'`:""}${e.noFooter?" no-footer":""}${e.noHeader?" no-header":""}${e.noFullscreen?" no-fullscreen":""}>        
                <span slot="header">Header <strong>Slot</strong></span>
                <span style={{
                    minWidth: "777px",
                    minHeight: "434px",
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                    alignItems: "center"
                    }}>Body Content</span>
                <div slot="footer">
                    <OmniButton label="Close" onclick={() => {
                        omniModal.hide = true;
                    }}/>
                </div>
            </OmniModal>);
}`}],name:"Header Slot",args:{"[Default Slot]":n`<span style="min-width: 777px;min-height: 434px;display: flex;justify-content: center;text-align: center;align-items: center;">Body Content</span>`,hide:!0,header:n`<span>Header <strong>Slot</strong></span>`,footer:p}},z={description:"Remove the header section of the modal.",render:e=>l`
       <omni-button data-testid="test-modal-btn" @click="${()=>{e.hide=!1,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Modal" ></omni-button>
        ${r(e)}
    `,frameworkSources:[{framework:"Vue",sourceParts:{htmlFragment:e=>n`
${a(r(e),o=>{let t=o.querySelector("omni-modal");t&&(t.removeAttribute("hide"),t.setAttribute("id","omni-modal"))},o=>o.replace('id="modal-close-btn"','@click="closeModal"').replace(" hide",' :hide="true"').replace(" no-header",' :no-header="true"').replace(" no-footer",' :no-footer="true"').replace(" no-fullscreen",' :no-fullscreen="true"'))}`,jsFragment:`window.vueData = {
        closeModal: () => document.getElementById("omni-modal").hide = true
};`}},{framework:"Lit",load:e=>n`
${a(r(e),o=>{let t=o.querySelector("omni-modal");t&&(t.removeAttribute("hide"),t.setAttribute("id","omni-modal"))},o=>o.replace('id="modal-close-btn"',`@click="\${() => document.getElementById('omni-modal').hide = true}"`))}
            `},{framework:"HTML",load:e=>n`
            ${a(r(m(d({},e),{footer:u})),o=>{let t=o.querySelector("omni-modal");t&&(t.removeAttribute("hide"),t.setAttribute("id","omni-modal"))})}
            
            `},{framework:"React",load:e=>`import { OmniModal } from "@capitec/omni-components-react/modal";
import { OmniButton } from "@capitec/omni-components-react/button";
            
const App = () => {
    let omniModal = null;
    const setRef = e => {
        omniModal = e;
    }
    return (<OmniModal ref={setRef}${e.headerLabel?` header-label='${e.headerLabel}'`:""}${e.headerAlign?` header-align='${e.headerAlign}'`:""}${e.noFooter?" no-footer":""}${e.noHeader?" no-header":""}${e.noFullscreen?" no-fullscreen":""}>        
                <span style={{
                    minWidth: "777px",
                    minHeight: "434px",
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                    alignItems: "center"
                    }}>Body Content</span>
                <div slot="footer">
                    <OmniButton label="Close" onclick={() => {
                        omniModal.hide = true;
                    }}/>
                </div>
            </OmniModal>);
}`}],name:"No Header",args:{"[Default Slot]":n`<span style="min-width: 777px;min-height: 434px;display: flex;justify-content: center;text-align: center;align-items: center;">Body Content</span>`,hide:!0,noHeader:!0,footer:p}},G={description:"Set custom html content to display in modal footer.",render:e=>l`
        <omni-button data-testid="test-modal-btn" @click="${()=>{e.hide=!1,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Modal" ></omni-button>
        ${r(e)}
    `,frameworkSources:[{framework:"Vue",sourceParts:{htmlFragment:e=>n`
${a(r(e),o=>{let t=o.querySelector("omni-modal");t&&(t.removeAttribute("hide"),t.setAttribute("id","omni-modal"))},o=>o.replace('id="modal-close-btn"','@click="closeModal"').replace(" hide",' :hide="true"').replace(" no-header",' :no-header="true"').replace(" no-footer",' :no-footer="true"').replace(" no-fullscreen",' :no-fullscreen="true"'))}`}},{framework:"HTML",load:e=>n`
            ${a(r(e),o=>{let t=o.querySelector("omni-modal");t&&t.removeAttribute("hide")})}
            
            `},{framework:"React",load:e=>`import { OmniModal } from "@capitec/omni-components-react/modal";
            
const App = () => <OmniModal${e.headerLabel?` header-label='${e.headerLabel}'`:""}${e.headerAlign?` header-align='${e.headerAlign}'`:""}${e.noFooter?" no-footer":""}${e.noHeader?" no-header":""}${e.noFullscreen?" no-fullscreen":""}>
                    <span style={{
                        minWidth: "777px",
                        minHeight: "434px",
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        alignItems: "center"
                      }}>Body Content</span>
                      <span slot="footer">Footer <strong>Slot</strong></span>
                  </OmniModal>;`}],name:"Footer Slot",args:{"[Default Slot]":n`<span style="min-width: 777px;min-height: 434px;display: flex;justify-content: center;text-align: center;align-items: center;">Body Content</span>`,hide:!0,footer:n`<span>Footer <strong>Slot</strong></span>`}},J={description:"Remove the footer section of the modal.",render:e=>l`
        <omni-button data-testid="test-modal-btn" @click="${()=>{e.hide=!1,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Modal" ></omni-button>
        ${r(e)}
    `,frameworkSources:[{framework:"Vue",sourceParts:{htmlFragment:e=>n`
${a(r(e),o=>{let t=o.querySelector("omni-modal");t&&(t.removeAttribute("hide"),t.setAttribute("id","omni-modal"))},o=>o.replace('id="modal-close-btn"','@click="closeModal"').replace(" hide",' :hide="true"').replace(" no-header",' :no-header="true"').replace(" no-footer",' :no-footer="true"').replace(" no-fullscreen",' :no-fullscreen="true"'))}`}},{framework:"HTML",load:e=>n`
            ${a(r(e),o=>{let t=o.querySelector("omni-modal");t&&t.removeAttribute("hide")})}
            
            `},{framework:"React",load:e=>`import { OmniModal } from "@capitec/omni-components-react/modal";
            
const App = () => <OmniModal${e.headerLabel?` header-label='${e.headerLabel}'`:""}${e.headerAlign?` header-align='${e.headerAlign}'`:""}${e.noFooter?" no-footer":""}${e.noHeader?" no-header":""}${e.noFullscreen?" no-fullscreen":""}>
                    <span style={{
                        minWidth: "777px",
                        minHeight: "434px",
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        alignItems: "center"
                      }}>Body Content</span>
                  </OmniModal>;`}],name:"No Footer",args:{"[Default Slot]":n`<span style="min-width: 777px;min-height: 434px;display: flex;justify-content: center;text-align: center;align-items: center;">Body Content</span>`,hide:!0,noFooter:!0}},y=document.createElement("div");y.textContent="The footer";y.style.color="orange";var i,w,K={description:()=>l`Create and show an <code class="language-html">&lt;omni-modal&gt;</code> instance programmatically.`,render:e=>l`
                    <omni-button data-testid="test-modal-btn" @click="${()=>{e.hide=!1,i?i.hide=!1:(i=A.show({body:()=>n`<span style="min-width: 777px;min-height: 434px;display: flex;justify-content: center;text-align: center;align-items: center;">Body Content</span>`,footer:y,header:e.header,headerAlign:e.headerAlign,id:"some-id"}),i&&(i.setAttribute("data-testid","test-modal-scripted"),i.addEventListener("click-outside",()=>{i.hide=!0,e.hide=!0,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}))),document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Modal" ></omni-button>
     `,frameworkSources:[{framework:"Vue",sourceParts:{htmlFragment:n`<span>Page Content</span>`,jsFragment:`import { Modal } from '@capitec/omni-components/modal';

const footer = document.createElement('div');
footer.textContent = 'The footer';
footer.style.color = 'orange';

const modal = Modal.show({
    body: () => '<span style="min-width: 777px;min-height: 434px;display: flex;justify-content: center;text-align: center;align-items: center;">Body Content</span>',
    footer: footer,
    header: 'Header Content',
    headerAlign: 'right',
    id: 'some-id'
});
                `}},{framework:"Lit",sourceParts:{htmlFragment:n`<span>Page Content</span>`,jsFragment:`import { Modal } from '@capitec/omni-components/modal';

const footer = document.createElement('div');
footer.textContent = 'The footer';
footer.style.color = 'orange';

const modal = Modal.show({
    body: () => html\`<span style="min-width: 777px;min-height: 434px;display: flex;justify-content: center;text-align: center;align-items: center;">Body Content</span>\`,
    footer: footer,
    header: 'Header Content',
    headerAlign: 'right',
    id: 'some-id'
});
                `}},{framework:"HTML",load:e=>n(w||(w=h([`
                <script type="module">                        
                        import { Modal } from '@capitec/omni-components/modal';

                        const footer = document.createElement('div');
                        footer.textContent = 'The footer';
                        footer.style.color = 'orange';

                        const modal = Modal.show({
                            body: () => '<span style="min-width: 777px;min-height: 434px;display: flex;justify-content: center;text-align: center;align-items: center;">Body Content</span>',
                            footer: footer,
                            header: 'Header Content',
                            headerAlign: 'right',
                            id: 'some-id'
                        });
                <\/script>
            `])))},{framework:"React",load:e=>`import { Modal } from "@capitec/omni-components-react/modal";

const footerContainer = document.createElement('div');
footerContainer.style.display = 'contents';

const Footer = () => <>
                        <div style={{ color: 'orange' }}>
                            The footer
                        </div>
                     </>;
ReactDOM.render(<Footer/>, footerContainer);

const modal = Modal.show({
    body: () => '<span style="min-width: 777px;min-height: 434px;display: flex;justify-content: center;text-align: center;align-items: center;">Body Content</span>',
    footer: footerContainer,
    header: 'Header Content',
    headerAlign: 'right',
    id: 'some-id'
});
            
const App = () => <>
                    App Content
                  </>;`}],name:"Scripted Modal",args:{hide:!0,header:"Header Content",headerAlign:"right"}};export{G as Footer_Slot,W as Header_Align,_ as Header_Label,N as Header_Slot,V as Interactive,J as No_Footer,z as No_Header,K as Scripted_Modal};
//# sourceMappingURL=Modal.stories.js.map
