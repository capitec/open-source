import"../chunks-js/chunk.J554L4ET.js";import"../chunks-js/chunk.62QWRCB7.js";import"../chunks-js/chunk.JCYDHZAJ.js";import"../chunks-js/chunk.57MN2DDF.js";import{x as t}from"../chunks-js/chunk.NXMGYN5J.js";import"../chunks-js/chunk.HWW7Q3DW.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.FPKTYYRH.js";import"../chunks-js/chunk.ROSXE42L.js";import"../chunks-js/chunk.WLLX574P.js";import"../chunks-js/chunk.B24VSKLO.js";import{a}from"../chunks-js/chunk.DJIVMBLF.js";import"../chunks-js/chunk.JOXUPYMK.js";import"../chunks-js/chunk.3F3IIFA7.js";import"../chunks-js/chunk.BN6ZLWW4.js";import"../chunks-js/chunk.263MQTZQ.js";import"../chunks-js/chunk.O3UNTVN7.js";import"../chunks-js/chunk.4PFNWG2J.js";import{d as n,g as o}from"../chunks-js/chunk.63YMDT6M.js";import{m as r,p}from"../chunks-js/chunk.BF43NN75.js";r();p();var $={render:e=>n`
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
