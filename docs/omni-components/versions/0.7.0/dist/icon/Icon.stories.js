import"../chunks-js/chunk.LCIHREUY.js";import{x as d}from"../chunks-js/chunk.WI5F3R4J.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.ZPV4YWBP.js";import{a as m}from"../chunks-js/chunk.6QCQBNRL.js";import{c as a}from"../chunks-js/chunk.N6OKW4B2.js";import{d as n}from"../chunks-js/chunk.W54IKPJD.js";import{a as l}from"../chunks-js/chunk.32OT4JFD.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as i}from"../chunks-js/chunk.F6MIXR4E.js";import{m as h,p}from"../chunks-js/chunk.BF43NN75.js";h();p();var x={title:"UI Components/Icon",component:"omni-icon"},O={render:e=>i`
        <!-- Icons loaded by content path instead of font-based or slotted content will not be able to be styled directly -->
        <omni-icon 
            data-testid="test-icon" 
            size="${m(e.size)}" 
            icon="${m(e.icon)}"
            ?symmetrical=${e.symmetrical}>
            ${l(e["[Default Slot]"])}
        </omni-icon>
    `,name:"Interactive",args:{size:"default","[Default Slot]":d`<svg
    version="1.1"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%">
    <g transform="translate(-2,-2)">
        <path d="m8.229 14.062-3.521-3.541L5.75 9.479l2.479 2.459 6.021-6L15.292 7Z" />
    </g>
</svg>`,icon:void 0},play:async e=>{var s;let o=((s=a(e.canvasElement).getByTestId("test-icon").shadowRoot)==null?void 0:s.querySelector("slot")).assignedElements().find(r=>r.tagName.toLowerCase()==="svg");await n(o).toBeTruthy()}},V={render:e=>i`<omni-icon data-testid="test-icon" size="${e.size}">${l(e["[Default Slot]"])}</omni-icon>`,frameworkSources:[{framework:"React",load:e=>`import { OmniIcon } from "@capitec/omni-components-react/icon";

const App = () => <OmniIcon${e.size?` size='${e.size}'`:""}${e.symmetrical?" symmetrical":""}>
                    <svg
                        version="1.1"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%">
                        <g transform="translate(-2,-2)">
                            <path d="m8.229 14.062-3.521-3.541L5.75 9.479l2.479 2.459 6.021-6L15.292 7Z" />
                        </g>
                    </svg>
                  </OmniIcon>;`}],name:"SVG",description:"Set html/svg content to display as an icon.",args:{size:"large","[Default Slot]":d`
            <svg
                version="1.1"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%">
                <g transform="translate(-2,-2)">
                  <path d="m8.229 14.062-3.521-3.541L5.75 9.479l2.479 2.459 6.021-6L15.292 7Z" />
                </g>
              </svg>
        `},play:async e=>{var s;let o=((s=a(e.canvasElement).getByTestId("test-icon").shadowRoot)==null?void 0:s.querySelector("slot")).assignedElements().find(r=>r.tagName.toLowerCase()==="svg");await n(o).toBeTruthy()}},R={render:e=>i`
    <!-- Icons loaded by content path instead of font-based or slotted content will not be able to be styled directly -->

    <omni-icon data-testid="test-icon" size="${e.size}" icon="${e.icon}"></omni-icon>
    `,frameworkSources:[{framework:"React",load:e=>`import { OmniIcon } from "@capitec/omni-components-react/icon";
            
/*
    Icons loaded by content path instead of font-based or slotted content will not be able to be styled directly
*/
const App = () => <OmniIcon${e.size?` size='${e.size}'`:""}${e.icon?` icon='${e.icon}'`:""}${e.symmetrical?" symmetrical":""}/>;`,disableCodePen:!0},{framework:"HTML",disableCodePen:!0}],name:"Local Source",description:"Set the icon to display as a local source file.",args:{size:"default",icon:"./assets/images/colors.svg"},play:async e=>{var o;let t=(o=a(e.canvasElement).getByTestId("test-icon").shadowRoot)==null?void 0:o.querySelector("img");await n(t).toBeTruthy(),await n(t.src.endsWith(e.args.icon.replace("./","/"))).toBeTruthy()}},q={render:e=>i`
    <!-- Icons loaded by content path instead of font-based or slotted content will not be able to be styled directly -->

    <omni-icon data-testid="test-icon" size="${e.size}" icon="${e.icon}"></omni-icon>
    `,frameworkSources:[{framework:"React",load:e=>`import { OmniIcon } from "@capitec/omni-components-react/icon";
            
/*
    Icons loaded by content path instead of font-based or slotted content will not be able to be styled directly
*/
const App = () => <OmniIcon${e.size?` size='${e.size}'`:""}${e.icon?` icon='${e.icon}'`:""}${e.symmetrical?" symmetrical":""}/>;`}],name:"Remote Source",description:"Set the icon to display as a remote file.",args:{size:"default",icon:"https://img.shields.io/badge/Source-remote-lightgrey.svg"},play:async e=>{var o;let t=(o=a(e.canvasElement).getByTestId("test-icon").shadowRoot)==null?void 0:o.querySelector("img");await n(t).toBeTruthy(),await n(t==null?void 0:t.src).toEqual(e.args.icon)}},y={render:e=>i`
    <!-- Add Material to your project, e.g. Adding below link in <head>-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <!-- ------------------------------------------------------------- -->

    <omni-icon data-testid="test-icon" size="${e.size}" icon="${e.icon}"></omni-icon>
    `,frameworkSources:[{framework:"React",load:e=>`import { OmniIcon } from "@capitec/omni-components-react/icon";

/*
<!-- Add Material to your project, e.g. Adding below link in <head>-->
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
<!-- ------------------------------------------------------------- -->
*/
const App = () => <OmniIcon${e.size?` size='${e.size}'`:""}${e.icon?` icon='${e.icon}'`:""}${e.symmetrical?" symmetrical":""}/>;`}],description:"Set the icon to display as a font icon from the Material Icons library.",args:{size:"default",icon:"@material/receipt_long"},play:async e=>{var o,s,r;let t=(o=a(e.canvasElement).getByTestId("test-icon").shadowRoot)==null?void 0:o.querySelector(".material-icon");await n(t).toBeTruthy(),await n(t==null?void 0:t.innerText).toEqual((r=(s=y.args)==null?void 0:s.icon)==null?void 0:r.replace("@material/",""))}},F={render:e=>i`
        <omni-icon 
            data-testid="test-icon" 
            size="${e.size}" 
            ?symmetrical=${e.symmetrical}>
            <svg 
                viewBox="0 0 138 26" 
                fill="none" 
                stroke="var(--omni-icon-fill, currentColor)"
                stroke-width="2.3" 
                stroke-linecap="round" 
                stroke-linejoin="round"
                width="100%"
                height="100%"
                title="CodePen">
                    <path d="M15 8a7 7 0 1 0 0 10m7-8.7L33 2l11 7.3v7.4L33 24l-11-7.3zm0 0 11 7.4 11-7.4m0 7.4L33 9.3l-11 7.4M33 2v7.3m0 7.4V24M52 6h5a7 7 0 0 1 0 14h-5zm28 0h-9v14h9m-9-7h6m11 1h6a4 4 0 0 0 0-8h-6v14m26-14h-9v14h9m-9-7h6m11 7V6l11 14V6"></path>
                </svg>
        </omni-icon>
    `,frameworkSources:[{framework:"React",load:e=>`import { OmniIcon } from "@capitec/omni-components-react/icon";

const App = () => <OmniIcon${e.size?` size='${e.size}'`:""}${e.symmetrical?" symmetrical":""}>
                    <svg 
                        viewBox="0 0 138 26" 
                        fill="none" 
                        stroke="var(--omni-icon-fill, currentColor)"
                        stroke-width="2.3" 
                        stroke-linecap="round" 
                        stroke-linejoin="round"
                        width="100%"
                        height="100%"
                        title="CodePen">
                            <path d="M15 8a7 7 0 1 0 0 10m7-8.7L33 2l11 7.3v7.4L33 24l-11-7.3zm0 0 11 7.4 11-7.4m0 7.4L33 9.3l-11 7.4M33 2v7.3m0 7.4V24M52 6h5a7 7 0 0 1 0 14h-5zm28 0h-9v14h9m-9-7h6m11 1h6a4 4 0 0 0 0-8h-6v14m26-14h-9v14h9m-9-7h6m11 7V6l11 14V6"></path>
                    </svg>
                  </OmniIcon>;`}],description:()=>i`Renders the icon by aligning only the inner height to the <code class="language-javascript">'size'</code> attribute, this is the default behavior.`,args:{size:"large",symmetrical:!1},play:async e=>{let t=a(e.canvasElement).getByTestId("test-icon").querySelector("svg");await n(t.clientWidth).not.toEqual(t.clientHeight)}},H={render:e=>i`
        <omni-icon 
            data-testid="test-icon" 
            size="${e.size}" 
            ?symmetrical=${e.symmetrical}>
            <svg 
                viewBox="0 0 138 26" 
                fill="none" 
                stroke="var(--omni-icon-fill, currentColor)"
                stroke-width="2.3" 
                stroke-linecap="round" 
                stroke-linejoin="round"
                width="100%"
                height="100%"
                title="CodePen">
                    <path d="M15 8a7 7 0 1 0 0 10m7-8.7L33 2l11 7.3v7.4L33 24l-11-7.3zm0 0 11 7.4 11-7.4m0 7.4L33 9.3l-11 7.4M33 2v7.3m0 7.4V24M52 6h5a7 7 0 0 1 0 14h-5zm28 0h-9v14h9m-9-7h6m11 1h6a4 4 0 0 0 0-8h-6v14m26-14h-9v14h9m-9-7h6m11 7V6l11 14V6"></path>
                </svg>
        </omni-icon>
    `,frameworkSources:[{framework:"React",load:e=>`import { OmniIcon } from "@capitec/omni-components-react/icon";

const App = () => <OmniIcon${e.size?` size='${e.size}'`:""}${e.symmetrical?" symmetrical":""}>
                    <svg 
                        viewBox="0 0 138 26" 
                        fill="none" 
                        stroke="var(--omni-icon-fill, currentColor)"
                        stroke-width="2.3" 
                        stroke-linecap="round" 
                        stroke-linejoin="round"
                        width="100%"
                        height="100%"
                        title="CodePen">
                            <path d="M15 8a7 7 0 1 0 0 10m7-8.7L33 2l11 7.3v7.4L33 24l-11-7.3zm0 0 11 7.4 11-7.4m0 7.4L33 9.3l-11 7.4M33 2v7.3m0 7.4V24M52 6h5a7 7 0 0 1 0 14h-5zm28 0h-9v14h9m-9-7h6m11 1h6a4 4 0 0 0 0-8h-6v14m26-14h-9v14h9m-9-7h6m11 7V6l11 14V6"></path>
                    </svg>
                  </OmniIcon>;`}],description:()=>i`Renders the icon by aligning both the inner height and width to the <code class="language-javascript">'size'</code> attribute, creating a 1:1 aspect ratio.`,args:{size:"large",symmetrical:!0},play:async e=>{let t=a(e.canvasElement).getByTestId("test-icon").querySelector("svg");await n(t.clientWidth).toEqual(t.clientHeight)}};export{F as Asymmetrical,O as Interactive,R as Local_Source,y as Material,q as Remote_Source,V as SVG,H as Symmetrical,x as default};
//# sourceMappingURL=Icon.stories.js.map
