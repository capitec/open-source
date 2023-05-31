import{a as x}from"../chunks-js/chunk.FTN5RR7Q.js";import"../chunks-js/chunk.Y2FJIW7X.js";import"../chunks-js/chunk.F7QUJQT5.js";import"../chunks-js/chunk.STJOQLHS.js";import"../chunks-js/chunk.E3RY574V.js";import"../chunks-js/chunk.V3AH72NQ.js";import"../chunks-js/chunk.LCIHREUY.js";import{b as m}from"../chunks-js/chunk.MHLMY33S.js";import{a as A}from"../chunks-js/chunk.6QCQBNRL.js";import{b as $,c as i}from"../chunks-js/chunk.N6OKW4B2.js";import{d as a}from"../chunks-js/chunk.W54IKPJD.js";import{E as l,m as M,x as n,z as s}from"../chunks-js/chunk.JVZL4EXU.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.H2SV3XAM.js";import{a as f}from"../chunks-js/chunk.32OT4JFD.js";import"../chunks-js/chunk.ZPV4YWBP.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as d,d as p}from"../chunks-js/chunk.F6MIXR4E.js";import{a as u,b as h,l as v,m as S,p as E}from"../chunks-js/chunk.BF43NN75.js";S();E();var re={title:"UI Components/Modal",component:"omni-modal"},r=e=>d`
        <omni-modal
            @click-outside="${()=>{e.hide=!0,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}"
            data-testid="test-modal"
            ?hide="${e.hide}"
            ?no-fullscreen="${e.noFullscreen}"
            header-label="${A(e.headerLabel)}"
            header-align="${A(e.headerAlign)}"
            ?no-header="${e.noHeader}"
            ?no-footer="${e.noFooter}">${e.header?d`${`\r
`}${f(M("header",e.header))}`:p}${e["[Default Slot]"]?d`${`\r
`}${f(e["[Default Slot]"])}`:p}${e.footer?typeof e.footer=="string"?d`${`\r
`}${f(M("footer",e.footer))}`:d`${`\r
`}${e.footer(e)}`:p}
        </omni-modal>
`,F,b=n(F||(F=v([`<div slot="footer">
    <omni-button id="modal-close-btn" label="Close"></omni-button>
    <script defer>
        document.getElementById('modal-close-btn').addEventListener('click', () => {
            document.getElementById('omni-modal').hide = true;
        });
    <\/script>
</div>`]))),g=e=>d`
<div slot="footer">
    <omni-button id="modal-close-btn" label="Close" @click="${()=>{e.hide=!0,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}"></omni-button>
</div>`,le={render:e=>d`
        <omni-button data-testid="test-modal-btn" @click="${()=>{e.hide=!1,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Modal" ></omni-button>
        ${r(e)}
    `,frameworkSources:[{framework:"HTML",load:e=>n`
            ${l(r(e),t=>{let o=t.querySelector("omni-modal");o&&o.removeAttribute("hide")})}            
            `},{framework:"Vue",load:e=>n`
            ${l(r(e),t=>{let o=t.querySelector("omni-modal");o&&o.removeAttribute("hide")},t=>t.replace(" hide",' :hide="true"').replace(" no-header",' :no-header="true"').replace(" no-footer",' :no-footer="true"').replace(" no-fullscreen",' :no-fullscreen="true"'))}            
            `}],name:"Interactive",args:{header:n`<strong style="padding-left: 10px;">Slotted Header Content</strong>`,"[Default Slot]":n`<span style="min-width: 777px;min-height: 434px;display: flex;justify-content: center;text-align: center;align-items: center;">Body Content</span>`,footer:n`<span>Footer Content</span>`,hide:!0,headerAlign:"left",headerLabel:"Header Label",noFullscreen:!1,noHeader:!1,noFooter:!1},play:async e=>{let t=i(e.canvasElement).getByTestId("test-modal");await a(t&&!t.hide).toBeFalsy(),i(e.canvasElement).getByTestId("test-modal-btn").click(),t=await s(e.canvasElement,'[data-testid="test-modal"]'),await a(t&&!t.hide).toBeTruthy(),await m.click(t.dialog,{pointerEventsCheck:0}),await a(t&&!t.hide).toBeFalsy()}},ie={description:"Set text content to display in the modal header.",render:e=>d`
        <omni-button data-testid="test-modal-btn" @click="${()=>{e.hide=!1,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Modal" ></omni-button>
        ${r(e)}
    `,frameworkSources:[{framework:"Lit",load:e=>n`
${l(r(e),t=>{let o=t.querySelector("omni-modal");o&&(o.removeAttribute("hide"),o.setAttribute("id","omni-modal"))},t=>t.replace('id="modal-close-btn"',`@click="\${() => document.getElementById('omni-modal').hide = true}"`))}
            `},{framework:"Vue",sourceParts:{htmlFragment:e=>n`
${l(r(e),t=>{let o=t.querySelector("omni-modal");o&&(o.removeAttribute("hide"),o.setAttribute("id","omni-modal"))},t=>t.replace('id="modal-close-btn"','@click="closeModal"'))}`,jsFragment:`window.vueData = {
        closeModal: () => document.getElementById("omni-modal").hide = true
};`}},{framework:"HTML",load:e=>n`
            ${l(r(h(u({},e),{footer:b})),t=>{let o=t.querySelector("omni-modal");o&&(o.removeAttribute("hide"),o.setAttribute("id","omni-modal"))})}
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
}`}],name:"Header Label",args:{"[Default Slot]":n`<span style="min-width: 777px;min-height: 434px;display: flex;justify-content: center;text-align: center;align-items: center;">Body Content</span>`,hide:!0,headerLabel:"Header Label",footer:g},play:async e=>{let t=i(e.canvasElement).getByTestId("test-modal");await a(t&&!t.hide).toBeFalsy(),i(e.canvasElement).getByTestId("test-modal-btn").click(),t=await s(e.canvasElement,'[data-testid="test-modal"]'),await a(t&&!t.hide).toBeTruthy(),await m.click(t.dialog,{pointerEventsCheck:0}),await a(t&&!t.hide).toBeFalsy()}},de={description:"Align header content horizontally.",render:e=>d`
        <omni-button data-testid="test-modal-btn" @click="${()=>{e.hide=!1,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Modal" ></omni-button>
        ${r(e)}
    `,frameworkSources:[{framework:"Vue",sourceParts:{htmlFragment:e=>n`
${l(r(e),t=>{let o=t.querySelector("omni-modal");o&&(o.removeAttribute("hide"),o.setAttribute("id","omni-modal"))},t=>t.replace('id="modal-close-btn"','@click="closeModal"'))}`,jsFragment:`window.vueData = {
        closeModal: () => document.getElementById("omni-modal").hide = true
};`}},{framework:"Lit",load:e=>n`
${l(r(e),t=>{let o=t.querySelector("omni-modal");o&&(o.removeAttribute("hide"),o.setAttribute("id","omni-modal"))},t=>t.replace('id="modal-close-btn"',`@click="\${() => document.getElementById('omni-modal').hide = true}"`))}
            `},{framework:"HTML",load:e=>n`
            ${l(r(h(u({},e),{footer:b})),t=>{let o=t.querySelector("omni-modal");o&&(o.removeAttribute("hide"),o.setAttribute("id","omni-modal"))})}
            
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
}`}],name:"Header Align",args:{"[Default Slot]":n`<span style="min-width: 777px;min-height: 434px;display: flex;justify-content: center;text-align: center;align-items: center;">Body Content</span>`,hide:!0,headerLabel:"Header Aligned",headerAlign:"center",footer:g},play:async e=>{let t=i(e.canvasElement).getByTestId("test-modal");await a(t&&!t.hide).toBeFalsy(),i(e.canvasElement).getByTestId("test-modal-btn").click(),t=await s(e.canvasElement,'[data-testid="test-modal"]'),await a(t&&!t.hide).toBeTruthy(),await m.click(t.dialog,{pointerEventsCheck:0}),await a(t&&!t.hide).toBeFalsy()}},me={description:"Set custom html content to display in modal header.",render:e=>d`
        <omni-button data-testid="test-modal-btn" @click="${()=>{e.hide=!1,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Modal" ></omni-button>
        ${r(e)}
    `,frameworkSources:[{framework:"Vue",sourceParts:{htmlFragment:e=>n`
${l(r(e),t=>{let o=t.querySelector("omni-modal");o&&(o.removeAttribute("hide"),o.setAttribute("id","omni-modal"))},t=>t.replace('id="modal-close-btn"','@click="closeModal"'))}`,jsFragment:`window.vueData = {
        closeModal: () => document.getElementById("omni-modal").hide = true
};`}},{framework:"Lit",load:e=>n`
${l(r(e),t=>{let o=t.querySelector("omni-modal");o&&(o.removeAttribute("hide"),o.setAttribute("id","omni-modal"))},t=>t.replace('id="modal-close-btn"',`@click="\${() => document.getElementById('omni-modal').hide = true}"`))}
            `},{framework:"HTML",load:e=>n`
            ${l(r(h(u({},e),{footer:b})),t=>{let o=t.querySelector("omni-modal");o&&(o.removeAttribute("hide"),o.setAttribute("id","omni-modal"))})}
            
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
}`}],name:"Header Slot",args:{"[Default Slot]":n`<span style="min-width: 777px;min-height: 434px;display: flex;justify-content: center;text-align: center;align-items: center;">Body Content</span>`,hide:!0,header:n`<span>Header <strong>Slot</strong></span>`,footer:g},play:async e=>{let t=i(e.canvasElement).getByTestId("test-modal");await a(t&&!t.hide).toBeFalsy(),i(e.canvasElement).getByTestId("test-modal-btn").click(),t=await s(e.canvasElement,'[data-testid="test-modal"]'),await a(t&&!t.hide).toBeTruthy(),await m.click(t.dialog,{pointerEventsCheck:0}),await a(t&&!t.hide).toBeFalsy()}},se={description:"Remove the header section of the modal.",render:e=>d`
       <omni-button data-testid="test-modal-btn" @click="${()=>{e.hide=!1,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Modal" ></omni-button>
        ${r(e)}
    `,frameworkSources:[{framework:"Vue",sourceParts:{htmlFragment:e=>n`
${l(r(e),t=>{let o=t.querySelector("omni-modal");o&&(o.removeAttribute("hide"),o.setAttribute("id","omni-modal"))},t=>t.replace('id="modal-close-btn"','@click="closeModal"').replace(" hide",' :hide="true"').replace(" no-header",' :no-header="true"').replace(" no-footer",' :no-footer="true"').replace(" no-fullscreen",' :no-fullscreen="true"'))}`,jsFragment:`window.vueData = {
        closeModal: () => document.getElementById("omni-modal").hide = true
};`}},{framework:"Lit",load:e=>n`
${l(r(e),t=>{let o=t.querySelector("omni-modal");o&&(o.removeAttribute("hide"),o.setAttribute("id","omni-modal"))},t=>t.replace('id="modal-close-btn"',`@click="\${() => document.getElementById('omni-modal').hide = true}"`))}
            `},{framework:"HTML",load:e=>n`
            ${l(r(h(u({},e),{footer:b})),t=>{let o=t.querySelector("omni-modal");o&&(o.removeAttribute("hide"),o.setAttribute("id","omni-modal"))})}
            
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
}`}],name:"No Header",args:{"[Default Slot]":n`<span style="min-width: 777px;min-height: 434px;display: flex;justify-content: center;text-align: center;align-items: center;">Body Content</span>`,hide:!0,noHeader:!0,footer:g},play:async e=>{let t=i(e.canvasElement).getByTestId("test-modal");await a(t&&!t.hide).toBeFalsy(),i(e.canvasElement).getByTestId("test-modal-btn").click(),t=await s(e.canvasElement,'[data-testid="test-modal"]'),await a(t&&!t.hide).toBeTruthy(),await m.click(t.dialog,{pointerEventsCheck:0}),await a(t&&!t.hide).toBeFalsy()}},ce={description:"Set custom html content to display in modal footer.",render:e=>d`
        <omni-button data-testid="test-modal-btn" @click="${()=>{e.hide=!1,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Modal" ></omni-button>
        ${r(e)}
    `,frameworkSources:[{framework:"Vue",sourceParts:{htmlFragment:e=>n`
${l(r(e),t=>{let o=t.querySelector("omni-modal");o&&(o.removeAttribute("hide"),o.setAttribute("id","omni-modal"))},t=>t.replace('id="modal-close-btn"','@click="closeModal"').replace(" hide",' :hide="true"').replace(" no-header",' :no-header="true"').replace(" no-footer",' :no-footer="true"').replace(" no-fullscreen",' :no-fullscreen="true"'))}`}},{framework:"HTML",load:e=>n`
            ${l(r(e),t=>{let o=t.querySelector("omni-modal");o&&o.removeAttribute("hide")})}
            
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
                  </OmniModal>;`}],name:"Footer Slot",args:{"[Default Slot]":n`<span style="min-width: 777px;min-height: 434px;display: flex;justify-content: center;text-align: center;align-items: center;">Body Content</span>`,hide:!0,footer:n`<span>Footer <strong>Slot</strong></span>`},play:async e=>{let t=i(e.canvasElement).getByTestId("test-modal");await a(t&&!t.hide).toBeFalsy(),i(e.canvasElement).getByTestId("test-modal-btn").click(),t=await s(e.canvasElement,'[data-testid="test-modal"]'),await a(t&&!t.hide).toBeTruthy(),await m.click(t.dialog,{pointerEventsCheck:0}),await a(t&&!t.hide).toBeFalsy()}},ue={description:"Remove the footer section of the modal.",render:e=>d`
        <omni-button data-testid="test-modal-btn" @click="${()=>{e.hide=!1,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Modal" ></omni-button>
        ${r(e)}
    `,frameworkSources:[{framework:"Vue",sourceParts:{htmlFragment:e=>n`
${l(r(e),t=>{let o=t.querySelector("omni-modal");o&&(o.removeAttribute("hide"),o.setAttribute("id","omni-modal"))},t=>t.replace('id="modal-close-btn"','@click="closeModal"').replace(" hide",' :hide="true"').replace(" no-header",' :no-header="true"').replace(" no-footer",' :no-footer="true"').replace(" no-fullscreen",' :no-fullscreen="true"'))}`}},{framework:"HTML",load:e=>n`
            ${l(r(e),t=>{let o=t.querySelector("omni-modal");o&&o.removeAttribute("hide")})}
            
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
                  </OmniModal>;`}],name:"No Footer",args:{"[Default Slot]":n`<span style="min-width: 777px;min-height: 434px;display: flex;justify-content: center;text-align: center;align-items: center;">Body Content</span>`,hide:!0,noFooter:!0},play:async e=>{let t=i(e.canvasElement).getByTestId("test-modal");await a(t&&!t.hide).toBeFalsy(),i(e.canvasElement).getByTestId("test-modal-btn").click(),t=await s(e.canvasElement,'[data-testid="test-modal"]'),await a(t&&!t.hide).toBeTruthy(),await m.click(t.dialog,{pointerEventsCheck:0}),await a(t&&!t.hide).toBeFalsy()}},y=document.createElement("div");y.textContent="The footer";y.style.color="orange";var c,H,he={description:()=>d`Create and show an <code class="language-html">&lt;omni-modal&gt;</code> instance programmatically.`,render:e=>d`
                    <omni-button data-testid="test-modal-btn" @click="${()=>{e.hide=!1,c?c.hide=!1:(c=x.show({body:()=>n`<span style="min-width: 777px;min-height: 434px;display: flex;justify-content: center;text-align: center;align-items: center;">Body Content</span>`,footer:y,header:e.header,headerAlign:e.headerAlign,id:"some-id"}),c&&(c.setAttribute("data-testid","test-modal-scripted"),c.addEventListener("click-outside",()=>{c.hide=!0,e.hide=!0,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}))),document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Modal" ></omni-button>
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
                `}},{framework:"HTML",load:e=>n(H||(H=v([`
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
                  </>;`}],name:"Scripted Modal",args:{hide:!0,header:"Header Content",headerAlign:"right"},play:async e=>{var B,C;let t=document.querySelector('[data-testid="test-modal-scripted"]');await a(t&&!t.hide).toBeFalsy(),i(e.canvasElement).getByTestId("test-modal-btn").click(),t=await s(document,'[data-testid="test-modal-scripted"]'),await a(t&&!t.hide).toBeTruthy();let k=((B=t.shadowRoot)==null?void 0:B.querySelector('slot[name="footer"]')).assignedElements().find(w=>w.renderer);await $(async()=>await a(Array.from(k.shadowRoot.children)).toContain(y));let T=Array.from(k.shadowRoot.children);await a(T.length).toBe(1);let L=((C=t.shadowRoot)==null?void 0:C.querySelector('slot[name="header"]')).assignedElements().find(w=>w.renderer);await $(async()=>await a(L.shadowRoot.textContent).toBe(e.args.header)),await m.click(t.dialog,{pointerEventsCheck:0}),await a(t&&!t.hide).toBeFalsy()}};export{ce as Footer_Slot,de as Header_Align,ie as Header_Label,me as Header_Slot,le as Interactive,ue as No_Footer,se as No_Header,he as Scripted_Modal,re as default};
//# sourceMappingURL=Modal.stories.js.map
