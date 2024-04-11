import"../chunks-js/chunk.G66TCDPR.js";import"../chunks-js/chunk.QUMZK63Q.js";import"../chunks-js/chunk.VQATY3PT.js";import"../chunks-js/chunk.GMWWZDSW.js";import"../chunks-js/chunk.34WDYOTS.js";import{x as t}from"../chunks-js/chunk.LIHXMBR3.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.YISFJ54N.js";import"../chunks-js/chunk.TQF2Y64M.js";import"../chunks-js/chunk.FCGABMD4.js";import"../chunks-js/chunk.D5GPI5IO.js";import"../chunks-js/chunk.VXWK2PFN.js";import{a}from"../chunks-js/chunk.I4G3FJEU.js";import"../chunks-js/chunk.D57IHIAB.js";import"../chunks-js/chunk.DUTPH62F.js";import"../chunks-js/chunk.ZJGON3BB.js";import"../chunks-js/chunk.P6J7VJ5B.js";import"../chunks-js/chunk.Y6UVSDXK.js";import{d as n,g as o}from"../chunks-js/chunk.UDCULUBW.js";import{m as r,p}from"../chunks-js/chunk.BF43NN75.js";r();p();var $={render:e=>n`
    <omni-expander-group
        data-testid="test-expander-group"
        expand-mode="${e.expandMode}"
    >
        ${e["[Default Slot]"]?n`${`\r
`}${a(e["[Default Slot]"])}`:o}
    </omni-expander-group>
    `,name:"Interactive",description:()=>n`<p>
    The <code class="language-html">&lt;omni-expander-group&gt;</code> should be used if grouping multiple <code class="language-html">&lt;omni-expander&gt;</code> components together. 
    </p>`,args:{expandMode:"single","[Default Slot]":t`<omni-expander label="First Expander">
            <omni-label label="First expander content"></omni-label>
        </omni-expander>
        <omni-expander label="Second Expander">
            <omni-label label="Second expander content"></omni-label>
        </omni-expander>`}},F={render:e=>n`
    <omni-expander-group
    data-testid="test-expander-group"
    expand-mode="${e.expandMode}"
    >
        ${e["[Default Slot]"]?n`${`\r
`}${a(e["[Default Slot]"])}`:o}
    </omni-expander-group>
    `,name:"Expand Mode",frameworkSources:[{framework:"React",load:e=>`import { OmniExpanderGroup, OmniExpander } from "@capitec/omni-components-react/expander";
            import { OmniLabel } from "@capitec/omni-components-react/label";
        
const App = () => 
<OmniExpanderGroup ${e.expandMode?` expand-mode='${e.expandMode}'`:""}>
    <OmniExpander label="First Expander">
        <OmniLabel label="First expander content"></OmniLabel>
    </OmniExpander>
    <OmniExpander label="Second Expander">
        <OmniLabel label="Second expander content"></OmniLabel>
    </OmniExpander>
</OmniExpanderGroup>;`}],description:()=>n`<p>
    The <code class="language-html">&lt;omni-expander-group&gt;</code> opens one <code class="language-html">&lt;omni-expander&gt;</code> by default, to expand mutiple set the attribute <code class="language-js">expand-mode="multiple"</code>. 
    </p>`,args:{expandMode:"multiple","[Default Slot]":t`<omni-expander label="First Expander">
            <omni-label label="First expander content"></omni-label>
        </omni-expander>
        <omni-expander label="Second Expander">
            <omni-label label="Second expander content"></omni-label>
        </omni-expander>`}};export{F as Expand_Mode,$ as Interactive};
//# sourceMappingURL=ExpanderGroup.stories.js.map
