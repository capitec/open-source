import{a as C}from"../chunks-js/chunk.KR22ASVC.js";import"../chunks-js/chunk.Y2FJIW7X.js";import"../chunks-js/chunk.E3RY574V.js";import"../chunks-js/chunk.V3AH72NQ.js";import{a as p}from"../chunks-js/chunk.G3QHRCKP.js";import{b as l}from"../chunks-js/chunk.MHLMY33S.js";import{D as m,l as g,w as a,y as s}from"../chunks-js/chunk.6ISQ3AKL.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.ZPV4YWBP.js";import{a as w}from"../chunks-js/chunk.6QCQBNRL.js";import{b,c as n}from"../chunks-js/chunk.N6OKW4B2.js";import{d as o}from"../chunks-js/chunk.W54IKPJD.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as r,d as h}from"../chunks-js/chunk.F6MIXR4E.js";import{l as i,m as B,p as k}from"../chunks-js/chunk.BF43NN75.js";B();k();var re={title:"UI Components/Modal",component:"omni-modal"},d=e=>r`
        <omni-modal
            @click-outside="${()=>{e.hide=!0,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}"
            data-testid="test-modal"
            ?hide="${e.hide}"
            ?no-fullscreen="${e.noFullscreen}"
            header-label="${w(e.headerLabel)}"
            header-align="${w(e.headerAlign)}"
            ?no-header="${e.noHeader}"
            ?no-footer="${e.noFooter}">${e.header?r`${`\r
`}${p(g("header",e.header))}`:h}${e["[Default Slot]"]?r`${`\r
`}${p(e["[Default Slot]"])}`:h}${e.footer?r`${`\r
`}${p(g("footer",e.footer))}`:h}
        </omni-modal>
`,F,ie={render:e=>r`
        <omni-button data-testid="test-modal-btn" @click="${()=>{e.hide=!1,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Modal" ></omni-button>
        ${d(e)}
    `,frameworkSources:[{framework:"HTML",load:e=>a(F||(F=i([`
            `,`
            <script>
                const modal = document.querySelector('omni-modal');
                modal.hide = false;
                modal.addEventListener('click-outside', (e) => {
                    modal.hide = true;
                });
            <\/script>
            `])),m(d(e)))}],name:"Interactive",args:{header:a`<strong>Header Content</strong>`,"[Default Slot]":a`<span style="min-width: 777px;min-height: 434px;display: flex;justify-content: center;text-align: center;align-items: center;">Body Content</span>`,footer:a`<span>Footer Content</span>`,hide:!0,headerAlign:"left",headerLabel:"Header Label",noFullscreen:!1,noHeader:!1,noFooter:!1},play:async e=>{let t=n(e.canvasElement).getByTestId("test-modal");await o(t&&!t.hide).toBeFalsy(),n(e.canvasElement).getByTestId("test-modal-btn").click(),t=await s(e.canvasElement,'[data-testid="test-modal"]'),await o(t&&!t.hide).toBeTruthy(),await l.click(t.dialog,{pointerEventsCheck:0}),await o(t&&!t.hide).toBeFalsy()}},M,le={render:e=>r`
        <omni-button data-testid="test-modal-btn" @click="${()=>{e.hide=!1,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Modal" ></omni-button>
        ${d(e)}
    `,frameworkSources:[{framework:"HTML",load:e=>a(M||(M=i([`
            `,`
            <script>
                const modal = document.querySelector('omni-modal');
                modal.hide = false;
                modal.addEventListener('click-outside', (e) => {
                    modal.hide = true;
                });
            <\/script>
            `])),m(d(e)))}],name:"Header Label",args:{"[Default Slot]":a`<span style="min-width: 777px;min-height: 434px;display: flex;justify-content: center;text-align: center;align-items: center;">Body Content</span>`,hide:!0,headerLabel:"Header Label"},play:async e=>{let t=n(e.canvasElement).getByTestId("test-modal");await o(t&&!t.hide).toBeFalsy(),n(e.canvasElement).getByTestId("test-modal-btn").click(),t=await s(e.canvasElement,'[data-testid="test-modal"]'),await o(t&&!t.hide).toBeTruthy(),await l.click(t.dialog,{pointerEventsCheck:0}),await o(t&&!t.hide).toBeFalsy()}},$,se={render:e=>r`
        <omni-button data-testid="test-modal-btn" @click="${()=>{e.hide=!1,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Modal" ></omni-button>
        ${d(e)}
    `,frameworkSources:[{framework:"HTML",load:e=>a($||($=i([`
            `,`
            <script>
                const modal = document.querySelector('omni-modal');
                modal.hide = false;
                modal.addEventListener('click-outside', (e) => {
                    modal.hide = true;
                });
            <\/script>
            `])),m(d(e)))}],name:"Header Align",args:{"[Default Slot]":a`<span style="min-width: 777px;min-height: 434px;display: flex;justify-content: center;text-align: center;align-items: center;">Body Content</span>`,hide:!0,headerLabel:"Header Aligned",headerAlign:"center"},play:async e=>{let t=n(e.canvasElement).getByTestId("test-modal");await o(t&&!t.hide).toBeFalsy(),n(e.canvasElement).getByTestId("test-modal-btn").click(),t=await s(e.canvasElement,'[data-testid="test-modal"]'),await o(t&&!t.hide).toBeTruthy(),await l.click(t.dialog,{pointerEventsCheck:0}),await o(t&&!t.hide).toBeFalsy()}},T,me={render:e=>r`
        <omni-button data-testid="test-modal-btn" @click="${()=>{e.hide=!1,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Modal" ></omni-button>
        ${d(e)}
    `,frameworkSources:[{framework:"HTML",load:e=>a(T||(T=i([`
            `,`
            <script>
                const modal = document.querySelector('omni-modal');
                modal.hide = false;
                modal.addEventListener('click-outside', (e) => {
                    modal.hide = true;
                });
            <\/script>
            `])),m(d(e)))}],name:"Header Slot",args:{"[Default Slot]":a`<span style="min-width: 777px;min-height: 434px;display: flex;justify-content: center;text-align: center;align-items: center;">Body Content</span>`,hide:!0,header:a`<span>Header <strong>Slot</strong></span>`},play:async e=>{let t=n(e.canvasElement).getByTestId("test-modal");await o(t&&!t.hide).toBeFalsy(),n(e.canvasElement).getByTestId("test-modal-btn").click(),t=await s(e.canvasElement,'[data-testid="test-modal"]'),await o(t&&!t.hide).toBeTruthy(),await l.click(t.dialog,{pointerEventsCheck:0}),await o(t&&!t.hide).toBeFalsy()}},x,ce={render:e=>r`
       <omni-button data-testid="test-modal-btn" @click="${()=>{e.hide=!1,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Modal" ></omni-button>
        ${d(e)}
    `,frameworkSources:[{framework:"HTML",load:e=>a(x||(x=i([`
            `,`
            <script>
                const modal = document.querySelector('omni-modal');
                modal.hide = false;
                modal.addEventListener('click-outside', (e) => {
                    modal.hide = true;
                });
            <\/script>
            `])),m(d(e)))}],name:"No Header",args:{"[Default Slot]":a`<span style="min-width: 777px;min-height: 434px;display: flex;justify-content: center;text-align: center;align-items: center;">Body Content</span>`,hide:!0,noHeader:!0},play:async e=>{let t=n(e.canvasElement).getByTestId("test-modal");await o(t&&!t.hide).toBeFalsy(),n(e.canvasElement).getByTestId("test-modal-btn").click(),t=await s(e.canvasElement,'[data-testid="test-modal"]'),await o(t&&!t.hide).toBeTruthy(),await l.click(t.dialog,{pointerEventsCheck:0}),await o(t&&!t.hide).toBeFalsy()}},A,ue={render:e=>r`
        <omni-button data-testid="test-modal-btn" @click="${()=>{e.hide=!1,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Modal" ></omni-button>
        ${d(e)}
    `,frameworkSources:[{framework:"HTML",load:e=>a(A||(A=i([`
            `,`
            <script>
                const modal = document.querySelector('omni-modal');
                modal.hide = false;
                modal.addEventListener('click-outside', (e) => {
                    modal.hide = true;
                });
            <\/script>
            `])),m(d(e)))}],name:"Footer Slot",args:{"[Default Slot]":a`<span style="min-width: 777px;min-height: 434px;display: flex;justify-content: center;text-align: center;align-items: center;">Body Content</span>`,hide:!0,footer:a`<span>Footer <strong>Slot</strong></span>`},play:async e=>{let t=n(e.canvasElement).getByTestId("test-modal");await o(t&&!t.hide).toBeFalsy(),n(e.canvasElement).getByTestId("test-modal-btn").click(),t=await s(e.canvasElement,'[data-testid="test-modal"]'),await o(t&&!t.hide).toBeTruthy(),await l.click(t.dialog,{pointerEventsCheck:0}),await o(t&&!t.hide).toBeFalsy()}},H,he={render:e=>r`
        <omni-button data-testid="test-modal-btn" @click="${()=>{e.hide=!1,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Modal" ></omni-button>
        ${d(e)}
    `,frameworkSources:[{framework:"HTML",load:e=>a(H||(H=i([`
            `,`
            <script>
                const modal = document.querySelector('omni-modal');
                modal.hide = false;
                modal.addEventListener('click-outside', (e) => {
                    modal.hide = true;
                });
            <\/script>
            `])),m(d(e)))}],name:"No Footer",args:{"[Default Slot]":a`<span style="min-width: 777px;min-height: 434px;display: flex;justify-content: center;text-align: center;align-items: center;">Body Content</span>`,hide:!0,noFooter:!0},play:async e=>{let t=n(e.canvasElement).getByTestId("test-modal");await o(t&&!t.hide).toBeFalsy(),n(e.canvasElement).getByTestId("test-modal-btn").click(),t=await s(e.canvasElement,'[data-testid="test-modal"]'),await o(t&&!t.hide).toBeTruthy(),await l.click(t.dialog,{pointerEventsCheck:0}),await o(t&&!t.hide).toBeFalsy()}},y=document.createElement("div");y.textContent="The footer";y.style.color="orange";var u,L,pe={render:e=>r`
                    <omni-button data-testid="test-modal-btn" @click="${()=>{e.hide=!1,u?u.hide=!1:(u=C.show({body:()=>a`<span style="min-width: 777px;min-height: 434px;display: flex;justify-content: center;text-align: center;align-items: center;">Body Content</span>`,footer:y,header:e.header,headerAlign:e.headerAlign,id:"some-id"}),u&&(u.setAttribute("data-testid","test-modal-scripted"),u.addEventListener("click-outside",()=>{u.hide=!0,e.hide=!0,document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}))),document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" label="Show Modal" ></omni-button>
     `,frameworkSources:[{framework:"HTML",load:e=>a(L||(L=i([`
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
                        if (modal) {
                            modal.addEventListener('click-outside', () => {
                                modal.hide = true;
                            });
                        }
                <\/script>
            `])))}],name:"Scripted Modal",args:{hide:!0,header:"Header Content",headerAlign:"right"},play:async e=>{var E,S;let t=document.querySelector('[data-testid="test-modal-scripted"]');await o(t&&!t.hide).toBeFalsy(),n(e.canvasElement).getByTestId("test-modal-btn").click(),t=await s(document,'[data-testid="test-modal-scripted"]'),await o(t&&!t.hide).toBeTruthy();let v=((E=t.shadowRoot)==null?void 0:E.querySelector('slot[name="footer"]')).assignedElements().find(f=>f.renderer);await b(async()=>await o(Array.from(v.shadowRoot.children)).toContain(y));let I=Array.from(v.shadowRoot.children);await o(I.length).toBe(1);let R=((S=t.shadowRoot)==null?void 0:S.querySelector('slot[name="header"]')).assignedElements().find(f=>f.renderer);await b(async()=>await o(R.shadowRoot.textContent).toBe(e.args.header)),await l.click(t.dialog,{pointerEventsCheck:0}),await o(t&&!t.hide).toBeFalsy()}};export{ue as Footer_Slot,se as Header_Align,le as Header_Label,me as Header_Slot,ie as Interactive,he as No_Footer,ce as No_Header,pe as Scripted_Modal,re as default};
//# sourceMappingURL=Modal.stories.js.map
