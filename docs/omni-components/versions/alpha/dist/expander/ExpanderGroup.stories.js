import"../chunks-js/chunk.RCOB6GLW.js";import"../chunks-js/chunk.YIANFESX.js";import"../chunks-js/chunk.5QA4HYF6.js";import"../chunks-js/chunk.MW4VXBNP.js";import{x as t}from"../chunks-js/chunk.F2QZVZT6.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.Z5LIJAXH.js";import"../chunks-js/chunk.UHIDETPL.js";import"../chunks-js/chunk.R74VGS2O.js";import"../chunks-js/chunk.MDYAUJ3Z.js";import"../chunks-js/chunk.VTL5CONA.js";import{a}from"../chunks-js/chunk.5DDJQYYG.js";import"../chunks-js/chunk.3U7QFP2Q.js";import"../chunks-js/chunk.LB764BBD.js";import"../chunks-js/chunk.KRAWXAJA.js";import"../chunks-js/chunk.FT5UPVZS.js";import"../chunks-js/chunk.6C4LMRM7.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as n,e as o}from"../chunks-js/chunk.L3RZWW2F.js";import{m as r,p}from"../chunks-js/chunk.BF43NN75.js";r();p();var $={render:e=>n`
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
