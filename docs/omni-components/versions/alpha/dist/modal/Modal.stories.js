import{a as E}from"../chunks-js/chunk.3LJLMJ54.js";import"../chunks-js/chunk.Y2FJIW7X.js";import"../chunks-js/chunk.M6SSC5HK.js";import"../chunks-js/chunk.STJOQLHS.js";import"../chunks-js/chunk.E3RY574V.js";import"../chunks-js/chunk.V3AH72NQ.js";import{a as p}from"../chunks-js/chunk.G3QHRCKP.js";import{b as i}from"../chunks-js/chunk.MHLMY33S.js";import{D as m,l as w,w as a,y as s}from"../chunks-js/chunk.IFPMJPKV.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.ZPV4YWBP.js";import{a as b}from"../chunks-js/chunk.6QCQBNRL.js";import{b as f,c as r}from"../chunks-js/chunk.N6OKW4B2.js";import{d as n}from"../chunks-js/chunk.W54IKPJD.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as d,d as h}from"../chunks-js/chunk.F6MIXR4E.js";import{l as A,m as C,p as B}from"../chunks-js/chunk.BF43NN75.js";C();B();var Z={title:"UI Components/Modal",component:"omni-modal"},l=e=>d`
        <omni-modal
            @click-outside="${()=>{e.hide=!0,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}"
            data-testid="test-modal"
            ?hide="${e.hide}"
            ?no-fullscreen="${e.noFullscreen}"
            header-label="${b(e.headerLabel)}"
            header-align="${b(e.headerAlign)}"
            ?no-header="${e.noHeader}"
            ?no-footer="${e.noFooter}">${e.header?d`${`\r
`}${p(w("header",e.header))}`:h}${e["[Default Slot]"]?d`${`\r
`}${p(e["[Default Slot]"])}`:h}${e.footer?d`${`\r
`}${p(w("footer",e.footer))}`:h}
        </omni-modal>
`,ee={render:e=>d`
        <omni-button data-testid="test-modal-btn" @click="${()=>{e.hide=!1,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Modal" ></omni-button>
        ${l(e)}
    `,frameworkSources:[{framework:"HTML",load:e=>a`
            ${m(l(e),t=>{let o=t.querySelector("omni-modal");o&&o.removeAttribute("hide")})}
            
            `}],name:"Interactive",args:{header:a`<strong>Header Content</strong>`,"[Default Slot]":a`<span style="min-width: 777px;min-height: 434px;display: flex;justify-content: center;text-align: center;align-items: center;">Body Content</span>`,footer:a`<span>Footer Content</span>`,hide:!0,headerAlign:"left",headerLabel:"Header Label",noFullscreen:!1,noHeader:!1,noFooter:!1},play:async e=>{let t=r(e.canvasElement).getByTestId("test-modal");await n(t&&!t.hide).toBeFalsy(),r(e.canvasElement).getByTestId("test-modal-btn").click(),t=await s(e.canvasElement,'[data-testid="test-modal"]'),await n(t&&!t.hide).toBeTruthy(),await i.click(t.dialog,{pointerEventsCheck:0}),await n(t&&!t.hide).toBeFalsy()}},te={render:e=>d`
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
                  </OmniModal>;`}],name:"Header Label",args:{"[Default Slot]":a`<span style="min-width: 777px;min-height: 434px;display: flex;justify-content: center;text-align: center;align-items: center;">Body Content</span>`,hide:!0,headerLabel:"Header Label"},play:async e=>{let t=r(e.canvasElement).getByTestId("test-modal");await n(t&&!t.hide).toBeFalsy(),r(e.canvasElement).getByTestId("test-modal-btn").click(),t=await s(e.canvasElement,'[data-testid="test-modal"]'),await n(t&&!t.hide).toBeTruthy(),await i.click(t.dialog,{pointerEventsCheck:0}),await n(t&&!t.hide).toBeFalsy()}},oe={render:e=>d`
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
                  </OmniModal>;`}],name:"Header Align",args:{"[Default Slot]":a`<span style="min-width: 777px;min-height: 434px;display: flex;justify-content: center;text-align: center;align-items: center;">Body Content</span>`,hide:!0,headerLabel:"Header Aligned",headerAlign:"center"},play:async e=>{let t=r(e.canvasElement).getByTestId("test-modal");await n(t&&!t.hide).toBeFalsy(),r(e.canvasElement).getByTestId("test-modal-btn").click(),t=await s(e.canvasElement,'[data-testid="test-modal"]'),await n(t&&!t.hide).toBeTruthy(),await i.click(t.dialog,{pointerEventsCheck:0}),await n(t&&!t.hide).toBeFalsy()}},ne={render:e=>d`
        <omni-button data-testid="test-modal-btn" @click="${()=>{e.hide=!1,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Modal" ></omni-button>
        ${l(e)}
    `,frameworkSources:[{framework:"HTML",load:e=>a`
            ${m(l(e),t=>{let o=t.querySelector("omni-modal");o&&o.removeAttribute("hide")})}
            
            `},{framework:"React",load:e=>`import { OmniModal } from "@capitec/omni-components-react/modal";
            
const App = () => <OmniModal${e.headerLabel?` header-label='${e.headerLabel}'`:""}${e.headerAlign?` header-align='${e.headerAlign}'`:""}${e.noFooter?" no-footer":""}${e.noHeader?" no-header":""}${e.noFullscreen?" no-fullscreen":""}>
                    <span slot="header">Header <strong>Slot</strong></span>
                    <span style={{
                        minWidth: "777px",
                        minHeight: "434px",
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        alignItems: "center"
                      }}>Body Content</span>
                  </OmniModal>;`}],name:"Header Slot",args:{"[Default Slot]":a`<span style="min-width: 777px;min-height: 434px;display: flex;justify-content: center;text-align: center;align-items: center;">Body Content</span>`,hide:!0,header:a`<span>Header <strong>Slot</strong></span>`},play:async e=>{let t=r(e.canvasElement).getByTestId("test-modal");await n(t&&!t.hide).toBeFalsy(),r(e.canvasElement).getByTestId("test-modal-btn").click(),t=await s(e.canvasElement,'[data-testid="test-modal"]'),await n(t&&!t.hide).toBeTruthy(),await i.click(t.dialog,{pointerEventsCheck:0}),await n(t&&!t.hide).toBeFalsy()}},ae={render:e=>d`
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
                  </OmniModal>;`}],name:"No Header",args:{"[Default Slot]":a`<span style="min-width: 777px;min-height: 434px;display: flex;justify-content: center;text-align: center;align-items: center;">Body Content</span>`,hide:!0,noHeader:!0},play:async e=>{let t=r(e.canvasElement).getByTestId("test-modal");await n(t&&!t.hide).toBeFalsy(),r(e.canvasElement).getByTestId("test-modal-btn").click(),t=await s(e.canvasElement,'[data-testid="test-modal"]'),await n(t&&!t.hide).toBeTruthy(),await i.click(t.dialog,{pointerEventsCheck:0}),await n(t&&!t.hide).toBeFalsy()}},re={render:e=>d`
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
                  </OmniModal>;`}],name:"Footer Slot",args:{"[Default Slot]":a`<span style="min-width: 777px;min-height: 434px;display: flex;justify-content: center;text-align: center;align-items: center;">Body Content</span>`,hide:!0,footer:a`<span>Footer <strong>Slot</strong></span>`},play:async e=>{let t=r(e.canvasElement).getByTestId("test-modal");await n(t&&!t.hide).toBeFalsy(),r(e.canvasElement).getByTestId("test-modal-btn").click(),t=await s(e.canvasElement,'[data-testid="test-modal"]'),await n(t&&!t.hide).toBeTruthy(),await i.click(t.dialog,{pointerEventsCheck:0}),await n(t&&!t.hide).toBeFalsy()}},le={render:e=>d`
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
                  </OmniModal>;`}],name:"No Footer",args:{"[Default Slot]":a`<span style="min-width: 777px;min-height: 434px;display: flex;justify-content: center;text-align: center;align-items: center;">Body Content</span>`,hide:!0,noFooter:!0},play:async e=>{let t=r(e.canvasElement).getByTestId("test-modal");await n(t&&!t.hide).toBeFalsy(),r(e.canvasElement).getByTestId("test-modal-btn").click(),t=await s(e.canvasElement,'[data-testid="test-modal"]'),await n(t&&!t.hide).toBeTruthy(),await i.click(t.dialog,{pointerEventsCheck:0}),await n(t&&!t.hide).toBeFalsy()}},u=document.createElement("div");u.textContent="The footer";u.style.color="orange";var c,S,de={render:e=>d`
                    <omni-button data-testid="test-modal-btn" @click="${()=>{e.hide=!1,c?c.hide=!1:(c=E.show({body:()=>a`<span style="min-width: 777px;min-height: 434px;display: flex;justify-content: center;text-align: center;align-items: center;">Body Content</span>`,footer:u,header:e.header,headerAlign:e.headerAlign,id:"some-id"}),c&&(c.setAttribute("data-testid","test-modal-scripted"),c.addEventListener("click-outside",()=>{c.hide=!0,e.hide=!0,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}))),document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Modal" ></omni-button>
     `,frameworkSources:[{framework:"HTML",load:e=>a(S||(S=A([`
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
                  </>;`}],name:"Scripted Modal",args:{hide:!0,header:"Header Content",headerAlign:"right"},play:async e=>{var $,v;let t=document.querySelector('[data-testid="test-modal-scripted"]');await n(t&&!t.hide).toBeFalsy(),r(e.canvasElement).getByTestId("test-modal-btn").click(),t=await s(document,'[data-testid="test-modal-scripted"]'),await n(t&&!t.hide).toBeTruthy();let g=(($=t.shadowRoot)==null?void 0:$.querySelector('slot[name="footer"]')).assignedElements().find(y=>y.renderer);await f(async()=>await n(Array.from(g.shadowRoot.children)).toContain(u));let M=Array.from(g.shadowRoot.children);await n(M.length).toBe(1);let x=((v=t.shadowRoot)==null?void 0:v.querySelector('slot[name="header"]')).assignedElements().find(y=>y.renderer);await f(async()=>await n(x.shadowRoot.textContent).toBe(e.args.header)),await i.click(t.dialog,{pointerEventsCheck:0}),await n(t&&!t.hide).toBeFalsy()}};export{re as Footer_Slot,oe as Header_Align,te as Header_Label,ne as Header_Slot,ee as Interactive,le as No_Footer,ae as No_Header,de as Scripted_Modal,Z as default};
//# sourceMappingURL=Modal.stories.js.map
