import"../chunks-js/chunk.5PIFEB5V.js";import"../chunks-js/chunk.VB3ZKFMN.js";import{E as s,m as i,x as n}from"../chunks-js/chunk.TJTW5ASN.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.Z5LIJAXH.js";import"../chunks-js/chunk.VW2P7YAN.js";import"../chunks-js/chunk.MYG5FMLT.js";import"../chunks-js/chunk.2EDJFZZN.js";import{a as o}from"../chunks-js/chunk.N3FDHMD3.js";import"../chunks-js/chunk.YX3UUKJ3.js";import"../chunks-js/chunk.XUUOUKOL.js";import"../chunks-js/chunk.LB764BBD.js";import{a}from"../chunks-js/chunk.XCXCHO25.js";import"../chunks-js/chunk.KRAWXAJA.js";import"../chunks-js/chunk.LUCH4Y6K.js";import"../chunks-js/chunk.PNTHLTQK.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as t,e as l}from"../chunks-js/chunk.L3RZWW2F.js";import{m as c,p as d}from"../chunks-js/chunk.BF43NN75.js";c();d();var O={title:"UI Components/Toast",component:"omni-toast"},r={render:e=>t`
        <omni-toast
            data-testid="test-toast"
            detail="${a(e.detail)}"
            header="${a(e.header)}"
            type="${a(e.type)}"
            ?closeable="${e.closeable}">
            ${e.prefix?t`${o(i("prefix",e.prefix))}`:l}
            ${o(e["[Default Slot]"])}
            ${e.close?t`${o(i("close",e.close))}`:l}
        </omni-toast>
    `,frameworkSources:[{framework:"Vue",load:e=>s(r.render(e)).replaceAll(" closeable",' :closeable="true"')}],name:"Interactive",args:{closeable:!1,detail:"The toast description",header:"The toast header",type:"success",prefix:void 0,"[Default Slot]":void 0,close:void 0}},F={description:()=>t`
    <div>
        Custom rich html can be slotted to fully customize the contents displayed within the <code class="language-html">&lt;omni-toast&gt;</code>. This can be used to apply extra styling and functionality.
    <div>
    `,render:e=>t`
        <omni-toast
            data-testid="test-toast"
            detail="${a(e.detail)}"
            header="${a(e.header)}"
            type="${a(e.type)}"
            ?closeable="${e.closeable}">
            ${e.prefix?t`${o(i("prefix",e.prefix))}`:l}
            ${o(e["[Default Slot]"])}
            ${e.close?t`${o(i("close",e.close))}`:l}
        </omni-toast>
    `,frameworkSources:[{framework:"React",load:e=>`import { OmniToast } from "@capitec/omni-components-react/toast";

const App = () =>   <OmniToast${e.detail?` detail="${e.detail}"`:""}${e.header?` header="${e.header}"`:""}${e.type?` type="${e.type}"`:""}${e.closeable?" closeable":""}>
                        <span>Custom Slotted Toast <strong>Content</strong></span>
                    </OmniToast>;`}],name:"Custom Slotted Content",args:{closeable:!1,detail:"",header:"The toast header",type:"none",prefix:void 0,"[Default Slot]":n`<span>Custom Slotted Toast <strong>Content</strong></span>`,close:void 0}},j={description:()=>t`
    <div>
        <p>Custom rich html can be slotted in the <code class="language-js">'prefix'</code> slot to customize the contents before the <code class="language-html">&lt;omni-toast&gt;</code> content.</p>
        <p> For any specific <code class="language-js">'type'</code> this will replace its icon that is shown.</p>
    <div>
    `,render:e=>t`
        <omni-toast
            data-testid="test-toast"
            detail="${a(e.detail)}"
            header="${a(e.header)}"
            type="${a(e.type)}"
            ?closeable="${e.closeable}">
            ${e.prefix?t`${o(i("prefix",e.prefix))}`:l}
            ${o(e["[Default Slot]"])}
            ${e.close?t`${o(i("close",e.close))}`:l}
        </omni-toast>
    `,frameworkSources:[{framework:"React",load:e=>`import { OmniToast } from "@capitec/omni-components-react/toast";

const App = () =>   <OmniToast${e.detail?` detail="${e.detail}"`:""}${e.header?` header="${e.header}"`:""}${e.type?` type="${e.type}"`:""}${e.closeable?" closeable":""}>
                        <svg slot="prefix" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style={{ marginRight: '10px' }}>
                            <path d="M8.138 5.035c5.173-2.112 10.332.032 15.368 6.273a1.12 1.12 0 0 1-.002 1.398c-1.735 2.136-3.489 3.796-5.252 4.966a13.433 13.433 0 0 1-2.846 1.46A9.952 9.952 0 0 1 12 19.75c-3.859 0-7.724-2.391-11.504-7.044a1.119 1.119 0 0 1-.002-1.398C2.002 9.44 3.519 7.938 5.045 6.81A14.573 14.573 0 0 1 7.86 5.153Zm13.684 6.59c-4.56-5.382-8.973-7.018-13.36-5.098-.836.365-1.677.861-2.524 1.488-1.417 1.048-2.845 2.46-4.276 4.234l.2-.244.394.467c3.12 3.629 6.205 5.542 9.179 5.757l.287.016.278.005c.956 0 1.92-.175 2.895-.528a11.942 11.942 0 0 0 2.527-1.3c1.628-1.08 3.273-2.637 4.917-4.66l-.044.05-.158.192ZM12 7.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5Zm0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5Z" />
                        </svg>
                    </OmniToast>;`}],name:"Custom Slotted Prefix",args:{closeable:!1,detail:"The toast description",header:"The toast header",type:"info",prefix:n`<svg slot="prefix" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style="margin-right: 10px;">
    <path d="M8.138 5.035c5.173-2.112 10.332.032 15.368 6.273a1.12 1.12 0 0 1-.002 1.398c-1.735 2.136-3.489 3.796-5.252 4.966a13.433 13.433 0 0 1-2.846 1.46A9.952 9.952 0 0 1 12 19.75c-3.859 0-7.724-2.391-11.504-7.044a1.119 1.119 0 0 1-.002-1.398C2.002 9.44 3.519 7.938 5.045 6.81A14.573 14.573 0 0 1 7.86 5.153Zm13.684 6.59c-4.56-5.382-8.973-7.018-13.36-5.098-.836.365-1.677.861-2.524 1.488-1.417 1.048-2.845 2.46-4.276 4.234l.2-.244.394.467c3.12 3.629 6.205 5.542 9.179 5.757l.287.016.278.005c.956 0 1.92-.175 2.895-.528a11.942 11.942 0 0 0 2.527-1.3c1.628-1.08 3.273-2.637 4.917-4.66l-.044.05-.158.192ZM12 7.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5Zm0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5Z" />
</svg>`,"[Default Slot]":void 0,close:void 0}},p={description:()=>t`Add a close button to the <code class="language-html">&lt;omni-toast&gt;</code>.`,render:e=>t`
        <omni-toast
            data-testid="test-toast"
            detail="${a(e.detail)}"
            header="${a(e.header)}"
            type="${a(e.type)}"
            ?closeable="${e.closeable}">
            ${e.prefix?t`${o(i("prefix",e.prefix))}`:l}
            ${o(e["[Default Slot]"])}
            ${e.close?t`${o(i("close",e.close))}`:l}
        </omni-toast>
    `,frameworkSources:[{framework:"Vue",load:e=>s(p.render(e)).replaceAll(" closeable",' :closeable="true"')},{framework:"React",load:e=>`import { OmniToast } from "@capitec/omni-components-react/toast";

const App = () => <OmniToast${e.detail?` detail="${e.detail}"`:""}${e.header?` header="${e.header}"`:""}${e.type?` type="${e.type}"`:""}${e.closeable?" closeable":""}/>;`}],name:"Closeable",args:{closeable:!0,detail:"The toast description",header:"The toast header",type:"none",prefix:void 0,"[Default Slot]":void 0,close:void 0}},m={description:()=>t`
    <div>
        <p>Custom rich html can be slotted in the <code class="language-js">'close'</code> slot to customize the close button for the <code class="language-html">&lt;omni-toast&gt;</code>.</p>
    </div>
    `,render:e=>t`
        <omni-toast
            data-testid="test-toast"
            detail="${a(e.detail)}"
            header="${a(e.header)}"
            type="${a(e.type)}"
            ?closeable="${e.closeable}">
            ${e.prefix?t`${o(i("prefix",e.prefix))}`:l}
            ${o(e["[Default Slot]"])}
            ${e.close?t`${o(i("close",e.close))}`:l}
        </omni-toast>
    `,frameworkSources:[{framework:"Vue",load:e=>s(m.render(e)).replaceAll(" closeable",' :closeable="true"')},{framework:"React",load:e=>`import { OmniToast } from "@capitec/omni-components-react/toast";

const App = () =>   <OmniToast${e.detail?` detail="${e.detail}"`:""}${e.header?` header="${e.header}"`:""}${e.type?` type="${e.type}"`:""}${e.closeable?" closeable":""}>
                        <svg slot="close" version="1.1" viewBox="0 0 16 16" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <g transform="translate(-2,-1.5)">
                                <path d="M5 10.75v-1.5h10v1.5Z"></path>
                            </g>
                        </svg>
                    </OmniToast>;`}],name:"Custom Slotted Close",args:{closeable:!0,detail:"The toast description",header:"The toast header",type:"none",prefix:void 0,"[Default Slot]":void 0,close:n`<svg slot="close" version="1.1" viewBox="0 0 16 16" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(-2,-1.5)">
        <path d="M5 10.75v-1.5h10v1.5Z"></path>
    </g>
</svg>`}},Z={description:()=>t`
    <div>
        <p>Set the display type of the <code class="language-html">&lt;omni-toast&gt;</code>.<p>
        <br/>
        <span>The <code class="language-javascript">'type'</code> attribute supports the following options:
            <ul>
                <li><code class="language-javascript">'success'</code> - Green themed toast with a checkmark icon to indicate success.</li>
                <li><code class="language-javascript">'warning'</code> - Orange themed toast with a yield icon to indicate warning.</li>
                <li><code class="language-javascript">'error'</code> - Red themed toast with an exclamation icon to indicate error.</li>
                <li><code class="language-javascript">'info'</code> - Blue themed toast with an information icon to indicate info.</li>
                <li><code class="language-javascript">'none'</code> - Default themed toast with no icon. (Default)</li>
            </ul>
        </span>
    <div>
    `,render:e=>t`
        <omni-toast
            data-testid="test-toast"
            detail="${a(e.detail)}"
            header="${a(e.header)}"
            type="${a(e.type)}"
            ?closeable="${e.closeable}">
            ${e.prefix?t`${o(i("prefix",e.prefix))}`:l}
            ${o(e["[Default Slot]"])}
            ${e.close?t`${o(i("close",e.close))}`:l}
        </omni-toast>
    `,frameworkSources:[{framework:"React",load:e=>`import { OmniToast } from "@capitec/omni-components-react/toast";

const App = () => <OmniToast${e.detail?` detail="${e.detail}"`:""}${e.header?` header="${e.header}"`:""}${e.type?` type="${e.type}"`:""}${e.closeable?" closeable":""}/>;`}],name:"Type",args:{closeable:!1,detail:"The toast description",header:"The toast header",type:"warning",prefix:void 0,"[Default Slot]":void 0,close:void 0}};export{p as Closeable,m as Custom_Slotted_Close,F as Custom_Slotted_Content,j as Custom_Slotted_Prefix,r as Interactive,Z as Type,O as default};
//# sourceMappingURL=Toast.stories.js.map
