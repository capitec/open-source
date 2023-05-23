import{a as k}from"../chunks-js/chunk.FTN5RR7Q.js";import"../chunks-js/chunk.Y2FJIW7X.js";import"../chunks-js/chunk.M6SSC5HK.js";import"../chunks-js/chunk.STJOQLHS.js";import"../chunks-js/chunk.E3RY574V.js";import"../chunks-js/chunk.V3AH72NQ.js";import{a as f}from"../chunks-js/chunk.G3QHRCKP.js";import{b as d}from"../chunks-js/chunk.MHLMY33S.js";import{D as m,l as C,w as a,y as s}from"../chunks-js/chunk.IFPMJPKV.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.ZPV4YWBP.js";import{a as B}from"../chunks-js/chunk.6QCQBNRL.js";import{b as $,c as r}from"../chunks-js/chunk.N6OKW4B2.js";import{d as n}from"../chunks-js/chunk.W54IKPJD.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as i,d as u}from"../chunks-js/chunk.F6MIXR4E.js";import{a as p,b as h,l as v,m as S,p as x}from"../chunks-js/chunk.BF43NN75.js";S();x();var re={title:"UI Components/Modal",component:"omni-modal"},l=e=>i`
        <omni-modal
            @click-outside="${()=>{e.hide=!0,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}"
            data-testid="test-modal"
            ?hide="${e.hide}"
            ?no-fullscreen="${e.noFullscreen}"
            header-label="${B(e.headerLabel)}"
            header-align="${B(e.headerAlign)}"
            ?no-header="${e.noHeader}"
            ?no-footer="${e.noFooter}">${e.header?i`${`\r
`}${f(C("header",e.header))}`:u}${e["[Default Slot]"]?i`${`\r
`}${f(e["[Default Slot]"])}`:u}${e.footer?typeof e.footer=="string"?i`${`\r
`}${f(C("footer",e.footer))}`:i`${`\r
`}${e.footer(e)}`:u}
        </omni-modal>
`,F,b=a(F||(F=v([`<div slot="footer">
    <omni-button id="modal-close-btn" label="Close"></omni-button>
    <script defer>
        document.getElementById('modal-close-btn').addEventListener('click', () => {
            document.getElementById('omni-modal').hide = true;
        });
    <\/script>
</div>`]))),g=e=>i`
<div slot="footer">
    <omni-button id="modal-close-btn" label="Close" @click="${()=>{e.hide=!0,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}"></omni-button>
</div>`,ie={render:e=>i`
        <omni-button data-testid="test-modal-btn" @click="${()=>{e.hide=!1,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Modal" ></omni-button>
        ${l(e)}
    `,frameworkSources:[{framework:"HTML",load:e=>a`
            ${m(l(e),t=>{let o=t.querySelector("omni-modal");o&&o.removeAttribute("hide")})}            
            `}],name:"Interactive",args:{header:a`<strong style="padding-left: 10px;">Slotted Header Content</strong>`,"[Default Slot]":a`<span style="min-width: 777px;min-height: 434px;display: flex;justify-content: center;text-align: center;align-items: center;">Body Content</span>`,footer:a`<span>Footer Content</span>`,hide:!0,headerAlign:"left",headerLabel:"Header Label",noFullscreen:!1,noHeader:!1,noFooter:!1},play:async e=>{let t=r(e.canvasElement).getByTestId("test-modal");await n(t&&!t.hide).toBeFalsy(),r(e.canvasElement).getByTestId("test-modal-btn").click(),t=await s(e.canvasElement,'[data-testid="test-modal"]'),await n(t&&!t.hide).toBeTruthy(),await d.click(t.dialog,{pointerEventsCheck:0}),await n(t&&!t.hide).toBeFalsy()}},le={description:"Set text content to display in the modal header.",render:e=>i`
        <omni-button data-testid="test-modal-btn" @click="${()=>{e.hide=!1,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Modal" ></omni-button>
        ${l(e)}
    `,frameworkSources:[{framework:"HTML",load:e=>a`
            ${m(l(h(p({},e),{footer:b})),t=>{let o=t.querySelector("omni-modal");o&&(o.removeAttribute("hide"),o.setAttribute("id","omni-modal"))})}
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
}`}],name:"Header Label",args:{"[Default Slot]":a`<span style="min-width: 777px;min-height: 434px;display: flex;justify-content: center;text-align: center;align-items: center;">Body Content</span>`,hide:!0,headerLabel:"Header Label",footer:g},play:async e=>{let t=r(e.canvasElement).getByTestId("test-modal");await n(t&&!t.hide).toBeFalsy(),r(e.canvasElement).getByTestId("test-modal-btn").click(),t=await s(e.canvasElement,'[data-testid="test-modal"]'),await n(t&&!t.hide).toBeTruthy(),await d.click(t.dialog,{pointerEventsCheck:0}),await n(t&&!t.hide).toBeFalsy()}},de={description:"Align header content horizontally.",render:e=>i`
        <omni-button data-testid="test-modal-btn" @click="${()=>{e.hide=!1,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Modal" ></omni-button>
        ${l(e)}
    `,frameworkSources:[{framework:"HTML",load:e=>a`
            ${m(l(h(p({},e),{footer:b})),t=>{let o=t.querySelector("omni-modal");o&&(o.removeAttribute("hide"),o.setAttribute("id","omni-modal"))})}
            
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
}`}],name:"Header Align",args:{"[Default Slot]":a`<span style="min-width: 777px;min-height: 434px;display: flex;justify-content: center;text-align: center;align-items: center;">Body Content</span>`,hide:!0,headerLabel:"Header Aligned",headerAlign:"center",footer:g},play:async e=>{let t=r(e.canvasElement).getByTestId("test-modal");await n(t&&!t.hide).toBeFalsy(),r(e.canvasElement).getByTestId("test-modal-btn").click(),t=await s(e.canvasElement,'[data-testid="test-modal"]'),await n(t&&!t.hide).toBeTruthy(),await d.click(t.dialog,{pointerEventsCheck:0}),await n(t&&!t.hide).toBeFalsy()}},se={description:"Set custom html content to display in modal header.",render:e=>i`
        <omni-button data-testid="test-modal-btn" @click="${()=>{e.hide=!1,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Modal" ></omni-button>
        ${l(e)}
    `,frameworkSources:[{framework:"HTML",load:e=>a`
            ${m(l(h(p({},e),{footer:b})),t=>{let o=t.querySelector("omni-modal");o&&(o.removeAttribute("hide"),o.setAttribute("id","omni-modal"))})}
            
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
}`}],name:"Header Slot",args:{"[Default Slot]":a`<span style="min-width: 777px;min-height: 434px;display: flex;justify-content: center;text-align: center;align-items: center;">Body Content</span>`,hide:!0,header:a`<span>Header <strong>Slot</strong></span>`,footer:g},play:async e=>{let t=r(e.canvasElement).getByTestId("test-modal");await n(t&&!t.hide).toBeFalsy(),r(e.canvasElement).getByTestId("test-modal-btn").click(),t=await s(e.canvasElement,'[data-testid="test-modal"]'),await n(t&&!t.hide).toBeTruthy(),await d.click(t.dialog,{pointerEventsCheck:0}),await n(t&&!t.hide).toBeFalsy()}},me={description:"Remove the header section of the modal.",render:e=>i`
       <omni-button data-testid="test-modal-btn" @click="${()=>{e.hide=!1,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Modal" ></omni-button>
        ${l(e)}
    `,frameworkSources:[{framework:"HTML",load:e=>a`
            ${m(l(h(p({},e),{footer:b})),t=>{let o=t.querySelector("omni-modal");o&&(o.removeAttribute("hide"),o.setAttribute("id","omni-modal"))})}
            
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
}`}],name:"No Header",args:{"[Default Slot]":a`<span style="min-width: 777px;min-height: 434px;display: flex;justify-content: center;text-align: center;align-items: center;">Body Content</span>`,hide:!0,noHeader:!0,footer:g},play:async e=>{let t=r(e.canvasElement).getByTestId("test-modal");await n(t&&!t.hide).toBeFalsy(),r(e.canvasElement).getByTestId("test-modal-btn").click(),t=await s(e.canvasElement,'[data-testid="test-modal"]'),await n(t&&!t.hide).toBeTruthy(),await d.click(t.dialog,{pointerEventsCheck:0}),await n(t&&!t.hide).toBeFalsy()}},ce={description:"Set custom html content to display in modal footer.",render:e=>i`
        <omni-button data-testid="test-modal-btn" @click="${()=>{e.hide=!1,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Modal" ></omni-button>
        ${l(e)}
    `,frameworkSources:[{framework:"HTML",load:e=>a`
            ${m(l(e),t=>{let o=t.querySelector("omni-modal");o&&o.removeAttribute("hide")})}
            
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
                  </OmniModal>;`}],name:"Footer Slot",args:{"[Default Slot]":a`<span style="min-width: 777px;min-height: 434px;display: flex;justify-content: center;text-align: center;align-items: center;">Body Content</span>`,hide:!0,footer:a`<span>Footer <strong>Slot</strong></span>`},play:async e=>{let t=r(e.canvasElement).getByTestId("test-modal");await n(t&&!t.hide).toBeFalsy(),r(e.canvasElement).getByTestId("test-modal-btn").click(),t=await s(e.canvasElement,'[data-testid="test-modal"]'),await n(t&&!t.hide).toBeTruthy(),await d.click(t.dialog,{pointerEventsCheck:0}),await n(t&&!t.hide).toBeFalsy()}},pe={description:"Remove the footer section of the modal.",render:e=>i`
        <omni-button data-testid="test-modal-btn" @click="${()=>{e.hide=!1,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Modal" ></omni-button>
        ${l(e)}
    `,frameworkSources:[{framework:"HTML",load:e=>a`
            ${m(l(e),t=>{let o=t.querySelector("omni-modal");o&&o.removeAttribute("hide")})}
            
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
                  </OmniModal>;`}],name:"No Footer",args:{"[Default Slot]":a`<span style="min-width: 777px;min-height: 434px;display: flex;justify-content: center;text-align: center;align-items: center;">Body Content</span>`,hide:!0,noFooter:!0},play:async e=>{let t=r(e.canvasElement).getByTestId("test-modal");await n(t&&!t.hide).toBeFalsy(),r(e.canvasElement).getByTestId("test-modal-btn").click(),t=await s(e.canvasElement,'[data-testid="test-modal"]'),await n(t&&!t.hide).toBeTruthy(),await d.click(t.dialog,{pointerEventsCheck:0}),await n(t&&!t.hide).toBeFalsy()}},y=document.createElement("div");y.textContent="The footer";y.style.color="orange";var c,H,he={description:()=>i`Create and show an <code class="language-html">&lt;omni-modal&gt;</code> instance programmatically.`,render:e=>i`
                    <omni-button data-testid="test-modal-btn" @click="${()=>{e.hide=!1,c?c.hide=!1:(c=k.show({body:()=>a`<span style="min-width: 777px;min-height: 434px;display: flex;justify-content: center;text-align: center;align-items: center;">Body Content</span>`,footer:y,header:e.header,headerAlign:e.headerAlign,id:"some-id"}),c&&(c.setAttribute("data-testid","test-modal-scripted"),c.addEventListener("click-outside",()=>{c.hide=!0,e.hide=!0,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}))),document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Modal" ></omni-button>
     `,frameworkSources:[{framework:"HTML",load:e=>a(H||(H=v([`
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
                  </>;`}],name:"Scripted Modal",args:{hide:!0,header:"Header Content",headerAlign:"right"},play:async e=>{var A,E;let t=document.querySelector('[data-testid="test-modal-scripted"]');await n(t&&!t.hide).toBeFalsy(),r(e.canvasElement).getByTestId("test-modal-btn").click(),t=await s(document,'[data-testid="test-modal-scripted"]'),await n(t&&!t.hide).toBeTruthy();let M=((A=t.shadowRoot)==null?void 0:A.querySelector('slot[name="footer"]')).assignedElements().find(w=>w.renderer);await $(async()=>await n(Array.from(M.shadowRoot.children)).toContain(y));let T=Array.from(M.shadowRoot.children);await n(T.length).toBe(1);let L=((E=t.shadowRoot)==null?void 0:E.querySelector('slot[name="header"]')).assignedElements().find(w=>w.renderer);await $(async()=>await n(L.shadowRoot.textContent).toBe(e.args.header)),await d.click(t.dialog,{pointerEventsCheck:0}),await n(t&&!t.hide).toBeFalsy()}};export{ce as Footer_Slot,de as Header_Align,le as Header_Label,se as Header_Slot,ie as Interactive,pe as No_Footer,me as No_Header,he as Scripted_Modal,re as default};
//# sourceMappingURL=Modal.stories.js.map
