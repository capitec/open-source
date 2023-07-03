import"../chunks-js/chunk.DXJESG3Z.js";import{b as C}from"../chunks-js/chunk.IEAYXHP4.js";import{c as g}from"../chunks-js/chunk.WXU7FCN5.js";import{e as u}from"../chunks-js/chunk.F2C2BPNZ.js";import{E as a,m as y,x as n,z as x}from"../chunks-js/chunk.TJTW5ASN.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.Z5LIJAXH.js";import{a as v}from"../chunks-js/chunk.VW2P7YAN.js";import"../chunks-js/chunk.MYG5FMLT.js";import"../chunks-js/chunk.2EDJFZZN.js";import{a as s}from"../chunks-js/chunk.N3FDHMD3.js";import"../chunks-js/chunk.YX3UUKJ3.js";import"../chunks-js/chunk.XUUOUKOL.js";import"../chunks-js/chunk.LB764BBD.js";import{a as b}from"../chunks-js/chunk.XCXCHO25.js";import"../chunks-js/chunk.LUCH4Y6K.js";import"../chunks-js/chunk.PNTHLTQK.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as i,e as c}from"../chunks-js/chunk.L3RZWW2F.js";import{a as d,b as m,l as f,m as A,p as w}from"../chunks-js/chunk.BF43NN75.js";A();w();var X={title:"UI Components/Modal",component:"omni-modal"},r=e=>i`
        <omni-modal
            @click-outside="${()=>{e.hide=!0,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}"
            data-testid="test-modal"
            ?hide="${e.hide}"
            ?no-fullscreen="${e.noFullscreen}"
            header-label="${b(e.headerLabel)}"
            header-align="${b(e.headerAlign)}"
            ?no-header="${e.noHeader}"
            ?no-footer="${e.noFooter}">${e.header?i`${`\r
`}${s(y("header",e.header))}`:c}${e["[Default Slot]"]?i`${`\r
`}${s(e["[Default Slot]"])}`:c}${e.footer?typeof e.footer=="string"?i`${`\r
`}${s(y("footer",e.footer))}`:i`${`\r
`}${e.footer(e)}`:c}
        </omni-modal>
`,M,p=n(M||(M=f([`<div slot="footer">
    <omni-button id="modal-close-btn" label="Close"></omni-button>
    <script defer>
        document.getElementById('modal-close-btn').addEventListener('click', () => {
            document.getElementById('omni-modal').hide = true;
        });
    <\/script>
</div>`]))),h=e=>i`
<div slot="footer">
    <omni-button id="modal-close-btn" label="Close" @click="${()=>{e.hide=!0,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}"></omni-button>
</div>`,Y={render:e=>i`
        <omni-button data-testid="test-modal-btn" @click="${()=>{e.hide=!1,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Modal" ></omni-button>
        ${r(e)}
    `,frameworkSources:[{framework:"HTML",load:e=>n`
            ${a(r(e),o=>{let t=o.querySelector("omni-modal");t&&t.removeAttribute("hide")})}            
            `},{framework:"Vue",load:e=>n`
            ${a(r(e),o=>{let t=o.querySelector("omni-modal");t&&t.removeAttribute("hide")},o=>o.replace(" hide",' :hide="true"').replace(" no-header",' :no-header="true"').replace(" no-footer",' :no-footer="true"').replace(" no-fullscreen",' :no-fullscreen="true"'))}            
            `}],name:"Interactive",args:{header:n`<strong style="padding-left: 10px;">Slotted Header Content</strong>`,"[Default Slot]":n`<span style="min-width: 777px;min-height: 434px;display: flex;justify-content: center;text-align: center;align-items: center;">Body Content</span>`,footer:n`<span>Footer Content</span>`,hide:!0,headerAlign:"left",headerLabel:"Header Label",noFullscreen:!1,noHeader:!1,noFooter:!1}},Z={description:"Set text content to display in the modal header.",render:e=>i`
        <omni-button data-testid="test-modal-btn" @click="${()=>{e.hide=!1,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Modal" ></omni-button>
        ${r(e)}
    `,frameworkSources:[{framework:"Lit",load:e=>n`
${a(r(e),o=>{let t=o.querySelector("omni-modal");t&&(t.removeAttribute("hide"),t.setAttribute("id","omni-modal"))},o=>o.replace('id="modal-close-btn"',`@click="\${() => document.getElementById('omni-modal').hide = true}"`))}
            `},{framework:"Vue",sourceParts:{htmlFragment:e=>n`
${a(r(e),o=>{let t=o.querySelector("omni-modal");t&&(t.removeAttribute("hide"),t.setAttribute("id","omni-modal"))},o=>o.replace('id="modal-close-btn"','@click="closeModal"'))}`,jsFragment:`window.vueData = {
        closeModal: () => document.getElementById("omni-modal").hide = true
};`}},{framework:"HTML",load:e=>n`
            ${a(r(m(d({},e),{footer:p})),o=>{let t=o.querySelector("omni-modal");t&&(t.removeAttribute("hide"),t.setAttribute("id","omni-modal"))})}
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
}`}],name:"Header Label",args:{"[Default Slot]":n`<span style="min-width: 777px;min-height: 434px;display: flex;justify-content: center;text-align: center;align-items: center;">Body Content</span>`,hide:!0,headerLabel:"Header Label",footer:h}},ee={description:"Align header content horizontally.",render:e=>i`
        <omni-button data-testid="test-modal-btn" @click="${()=>{e.hide=!1,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Modal" ></omni-button>
        ${r(e)}
    `,frameworkSources:[{framework:"Vue",sourceParts:{htmlFragment:e=>n`
${a(r(e),o=>{let t=o.querySelector("omni-modal");t&&(t.removeAttribute("hide"),t.setAttribute("id","omni-modal"))},o=>o.replace('id="modal-close-btn"','@click="closeModal"'))}`,jsFragment:`window.vueData = {
        closeModal: () => document.getElementById("omni-modal").hide = true
};`}},{framework:"Lit",load:e=>n`
${a(r(e),o=>{let t=o.querySelector("omni-modal");t&&(t.removeAttribute("hide"),t.setAttribute("id","omni-modal"))},o=>o.replace('id="modal-close-btn"',`@click="\${() => document.getElementById('omni-modal').hide = true}"`))}
            `},{framework:"HTML",load:e=>n`
            ${a(r(m(d({},e),{footer:p})),o=>{let t=o.querySelector("omni-modal");t&&(t.removeAttribute("hide"),t.setAttribute("id","omni-modal"))})}
            
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
}`}],name:"Header Align",args:{"[Default Slot]":n`<span style="min-width: 777px;min-height: 434px;display: flex;justify-content: center;text-align: center;align-items: center;">Body Content</span>`,hide:!0,headerLabel:"Header Aligned",headerAlign:"center",footer:h}},te={description:"Set custom html content to display in modal header.",render:e=>i`
        <omni-button data-testid="test-modal-btn" @click="${()=>{e.hide=!1,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Modal" ></omni-button>
        ${r(e)}
    `,frameworkSources:[{framework:"Vue",sourceParts:{htmlFragment:e=>n`
${a(r(e),o=>{let t=o.querySelector("omni-modal");t&&(t.removeAttribute("hide"),t.setAttribute("id","omni-modal"))},o=>o.replace('id="modal-close-btn"','@click="closeModal"'))}`,jsFragment:`window.vueData = {
        closeModal: () => document.getElementById("omni-modal").hide = true
};`}},{framework:"Lit",load:e=>n`
${a(r(e),o=>{let t=o.querySelector("omni-modal");t&&(t.removeAttribute("hide"),t.setAttribute("id","omni-modal"))},o=>o.replace('id="modal-close-btn"',`@click="\${() => document.getElementById('omni-modal').hide = true}"`))}
            `},{framework:"HTML",load:e=>n`
            ${a(r(m(d({},e),{footer:p})),o=>{let t=o.querySelector("omni-modal");t&&(t.removeAttribute("hide"),t.setAttribute("id","omni-modal"))})}
            
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
}`}],name:"Header Slot",args:{"[Default Slot]":n`<span style="min-width: 777px;min-height: 434px;display: flex;justify-content: center;text-align: center;align-items: center;">Body Content</span>`,hide:!0,header:n`<span>Header <strong>Slot</strong></span>`,footer:h}},oe={description:"Remove the header section of the modal.",render:e=>i`
       <omni-button data-testid="test-modal-btn" @click="${()=>{e.hide=!1,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Modal" ></omni-button>
        ${r(e)}
    `,frameworkSources:[{framework:"Vue",sourceParts:{htmlFragment:e=>n`
${a(r(e),o=>{let t=o.querySelector("omni-modal");t&&(t.removeAttribute("hide"),t.setAttribute("id","omni-modal"))},o=>o.replace('id="modal-close-btn"','@click="closeModal"').replace(" hide",' :hide="true"').replace(" no-header",' :no-header="true"').replace(" no-footer",' :no-footer="true"').replace(" no-fullscreen",' :no-fullscreen="true"'))}`,jsFragment:`window.vueData = {
        closeModal: () => document.getElementById("omni-modal").hide = true
};`}},{framework:"Lit",load:e=>n`
${a(r(e),o=>{let t=o.querySelector("omni-modal");t&&(t.removeAttribute("hide"),t.setAttribute("id","omni-modal"))},o=>o.replace('id="modal-close-btn"',`@click="\${() => document.getElementById('omni-modal').hide = true}"`))}
            `},{framework:"HTML",load:e=>n`
            ${a(r(m(d({},e),{footer:p})),o=>{let t=o.querySelector("omni-modal");t&&(t.removeAttribute("hide"),t.setAttribute("id","omni-modal"))})}
            
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
}`}],name:"No Header",args:{"[Default Slot]":n`<span style="min-width: 777px;min-height: 434px;display: flex;justify-content: center;text-align: center;align-items: center;">Body Content</span>`,hide:!0,noHeader:!0,footer:h}},ne={description:"Set custom html content to display in modal footer.",render:e=>i`
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
                  </OmniModal>;`}],name:"Footer Slot",args:{"[Default Slot]":n`<span style="min-width: 777px;min-height: 434px;display: flex;justify-content: center;text-align: center;align-items: center;">Body Content</span>`,hide:!0,footer:n`<span>Footer <strong>Slot</strong></span>`}},re={description:"Remove the footer section of the modal.",render:e=>i`
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
                  </OmniModal>;`}],name:"No Footer",args:{"[Default Slot]":n`<span style="min-width: 777px;min-height: 434px;display: flex;justify-content: center;text-align: center;align-items: center;">Body Content</span>`,hide:!0,noFooter:!0},play:async e=>{let o=g(e.canvasElement).getByTestId("test-modal");await u(o&&!o.hide).toBeFalsy(),g(e.canvasElement).getByTestId("test-modal-btn").click(),o=await x(e.canvasElement,'[data-testid="test-modal"]'),await u(o&&!o.hide).toBeTruthy(),await C.click(o.dialog,{pointerEventsCheck:0}),await u(o&&!o.hide).toBeFalsy()}},$=document.createElement("div");$.textContent="The footer";$.style.color="orange";var l,S,ae={description:()=>i`Create and show an <code class="language-html">&lt;omni-modal&gt;</code> instance programmatically.`,render:e=>i`
                    <omni-button data-testid="test-modal-btn" @click="${()=>{e.hide=!1,l?l.hide=!1:(l=v.show({body:()=>n`<span style="min-width: 777px;min-height: 434px;display: flex;justify-content: center;text-align: center;align-items: center;">Body Content</span>`,footer:$,header:e.header,headerAlign:e.headerAlign,id:"some-id"}),l&&(l.setAttribute("data-testid","test-modal-scripted"),l.addEventListener("click-outside",()=>{l.hide=!0,e.hide=!0,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}))),document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Modal" ></omni-button>
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
                `}},{framework:"HTML",load:e=>n(S||(S=f([`
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
                  </>;`}],name:"Scripted Modal",args:{hide:!0,header:"Header Content",headerAlign:"right"}};export{ne as Footer_Slot,ee as Header_Align,Z as Header_Label,te as Header_Slot,Y as Interactive,re as No_Footer,oe as No_Header,ae as Scripted_Modal,X as default};
//# sourceMappingURL=Modal.stories.js.map
