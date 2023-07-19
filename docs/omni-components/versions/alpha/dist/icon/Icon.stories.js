import{c as l}from"../chunks-js/chunk.WXU7FCN5.js";import{e as d}from"../chunks-js/chunk.F2C2BPNZ.js";import{E as s,x as r}from"../chunks-js/chunk.7KM4B723.js";import"../chunks-js/chunk.Z5LIJAXH.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.UHIDETPL.js";import"../chunks-js/chunk.KPSG3GC4.js";import"../chunks-js/chunk.MDYAUJ3Z.js";import"../chunks-js/chunk.VTL5CONA.js";import{a as i}from"../chunks-js/chunk.5DDJQYYG.js";import"../chunks-js/chunk.3U7QFP2Q.js";import"../chunks-js/chunk.LB764BBD.js";import{a as n}from"../chunks-js/chunk.XCXCHO25.js";import"../chunks-js/chunk.FT5UPVZS.js";import"../chunks-js/chunk.6C4LMRM7.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as o}from"../chunks-js/chunk.L3RZWW2F.js";import{m as c,p as m}from"../chunks-js/chunk.BF43NN75.js";c();m();var V={title:"UI Components/Icon",component:"omni-icon"},h={render:e=>o`
        <!-- Icons loaded by content path instead of font-based or slotted content will not be able to be styled directly -->
        <omni-icon 
            data-testid="test-icon" 
            size="${n(e.size)}" 
            icon="${n(e.icon)}"
            ?symmetrical=${e.symmetrical}>
            ${i(e["[Default Slot]"])}
        </omni-icon>
    `,frameworkSources:[{framework:"Vue",load:e=>s(h.render(e),void 0,t=>t.replace(" symmetrical",' :symmetrical="true"'))}],name:"Interactive",args:{size:"default","[Default Slot]":r`<svg
    version="1.1"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%">
    <g transform="translate(-2,-2)">
        <path d="m8.229 14.062-3.521-3.541L5.75 9.479l2.479 2.459 6.021-6L15.292 7Z" />
    </g>
</svg>`,icon:void 0}},F={render:e=>o`<omni-icon data-testid="test-icon" size="${e.size}">${i(e["[Default Slot]"])}</omni-icon>`,frameworkSources:[{framework:"React",load:e=>`import { OmniIcon } from "@capitec/omni-components-react/icon";

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
                  </OmniIcon>;`}],name:"SVG",description:"Set html/svg content to display as an icon.",args:{size:"large","[Default Slot]":r`
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
        `}},R={render:e=>o`
    <!-- Icons loaded by content path instead of font-based or slotted content will not be able to be styled directly -->

    <omni-icon data-testid="test-icon" size="${e.size}" icon="${e.icon}"></omni-icon>
    `,frameworkSources:[{framework:"React",load:e=>`import { OmniIcon } from "@capitec/omni-components-react/icon";
            
/*
    Icons loaded by content path instead of font-based or slotted content will not be able to be styled directly
*/
const App = () => <OmniIcon${e.size?` size='${e.size}'`:""}${e.icon?` icon='${e.icon}'`:""}${e.symmetrical?" symmetrical":""}/>;`,disableCodePen:!0},{framework:"HTML",disableCodePen:!0}],name:"Local Source",description:"Set the icon to display as a local source file.",args:{size:"default",icon:"./assets/images/colors.svg"}},j={render:e=>o`
    <!-- Icons loaded by content path instead of font-based or slotted content will not be able to be styled directly -->

    <omni-icon data-testid="test-icon" size="${e.size}" icon="${e.icon}"></omni-icon>
    `,frameworkSources:[{framework:"React",load:e=>`import { OmniIcon } from "@capitec/omni-components-react/icon";
            
/*
    Icons loaded by content path instead of font-based or slotted content will not be able to be styled directly
*/
const App = () => <OmniIcon${e.size?` size='${e.size}'`:""}${e.icon?` icon='${e.icon}'`:""}${e.symmetrical?" symmetrical":""}/>;`}],name:"Remote Source",description:"Set the icon to display as a remote file.",args:{size:"default",icon:"https://img.shields.io/badge/Source-remote-lightgrey.svg"}},B={render:e=>o`
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
const App = () => <OmniIcon${e.size?` size='${e.size}'`:""}${e.icon?` icon='${e.icon}'`:""}${e.symmetrical?" symmetrical":""}/>;`}],description:"Set the icon to display as a font icon from the Material Icons library.",args:{size:"default",icon:"@material/receipt_long"}},P={render:e=>o`
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
                  </OmniIcon>;`}],description:()=>o`Renders the icon by aligning only the inner height to the <code class="language-javascript">'size'</code> attribute, this is the default behavior.`,args:{size:"large",symmetrical:!1}},p={render:e=>o`
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
                  </OmniIcon>;`},{framework:"Vue",load:e=>s(p.render(e),void 0,t=>t.replace(" symmetrical",' :symmetrical="true"'))}],description:()=>o`Renders the icon by aligning both the inner height and width to the <code class="language-javascript">'size'</code> attribute, creating a 1:1 aspect ratio.`,args:{size:"large",symmetrical:!0},play:async e=>{let a=l(e.canvasElement).getByTestId("test-icon").querySelector("svg");await d(a.clientWidth).toEqual(a.clientHeight)}};export{P as Asymmetrical,h as Interactive,R as Local_Source,B as Material,j as Remote_Source,F as SVG,p as Symmetrical,V as default};
//# sourceMappingURL=Icon.stories.js.map
